const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname,'..');
const index = fs.readFileSync(path.join(root,'index.html'),'utf8');
const sessionKey = index.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = index.match(/var PASSWORD_HASH = (\d+);/)[1];
const origin = 'http://ege-offline-export.test';
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml',
    '.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff':'font/woff'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('downloaded profile variants display formulas without JavaScript and keep offline interactivity',{
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:90000
},async () => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    try {
        const editor = await browser.newPage({acceptDownloads:true});
        const errors = [], dialogs = [];
        editor.on('pageerror',error => errors.push(error.message));
        editor.on('dialog',async dialog => { dialogs.push(dialog.message()); await dialog.dismiss(); });
        await editor.addInitScript(({key,hash}) => sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
        await editor.route('**/*',route => {
            const url = new URL(route.request().url());
            // Stub only the editor's CDN dependency. Both export renderers run unmodified.
            if (url.origin !== origin && url.pathname.endsWith('/tex-mml-chtml.js')) {
                return route.fulfill({contentType:'application/javascript',body:
                    'window.MathJax=window.MathJax||{};MathJax.typesetPromise=()=>Promise.resolve();MathJax.startup={promise:Promise.resolve()};'});
            }
            if (url.origin !== origin) return route.abort();
            const filename = path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
            if (!filename.startsWith(root+path.sep) || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) return route.abort();
            return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
        });
        await editor.goto(origin,{waitUntil:'load'});
        await editor.waitForSelector('#dynamic-tasks .task-row',{state:'attached'});
        await editor.evaluate(() => {
            resetTaskCounts();
            // The profile roster assigns new visible numbers to the source banks.
            for (const [number,prototype] of [[1,0],[6,0],[13,4]]) {
                const tid = getUniqueTaskIds().find(id => Number(id.replace(/\D/g,''))===number);
                document.getElementById('count-'+tid).value='1';
                document.getElementById(getPrototypeCheckboxId(tid,prototype,'main')).checked=true;
            }
            document.getElementById('toggle-explanations').checked=true;
            document.getElementById('toggle-instant-check').checked=true;
            updateTaskTotal();
        });
        await editor.locator('#generation-controls .btn-generate').click();
        await editor.waitForFunction(() => window.currentGeneratedTasks?.length===3);
        const pending = editor.waitForEvent('download');
        await editor.locator('button[onclick="downloadStudentHTML()"]').click();
        const download = await pending;
        assert.equal(download.suggestedFilename(),'Интерактивный_вариант.html');
        const saved = fs.readFileSync(await download.path(),'utf8');
        assert.deepEqual(dialogs,[]);
        await editor.close();

        const requests = [];
        async function openStudent(javaScriptEnabled) {
            const page = await browser.newPage({javaScriptEnabled,viewport:{width:390,height:844}});
            page.on('pageerror',error => errors.push(error.message));
            await page.route('**/*',route => {
                const url = route.request().url();
                if (/^https?:/.test(url)) requests.push(url);
                return route.abort();
            });
            await page.setContent(saved,{waitUntil:'load'});
            return page;
        }

        const preview = await openStudent(false);
        const conditions = preview.locator('.generated-task-block .task-copy');
        assert.equal(await conditions.count(),3);
        const equationCondition = preview.locator('.generated-task-block[data-random-task-number="6"] .task-copy');
        const secondCondition = preview.locator('.generated-task-block[data-random-task-number="13"] .task-copy');
        const fraction = equationCondition.locator('mjx-container[jax="SVG"] > svg');
        const display = secondCondition.locator('mjx-container[jax="SVG"][display="true"] > svg').first();
        for (const [kind,formula,condition] of [['inline',fraction,equationCondition],['display',display,secondCondition]]) {
            assert.equal(await formula.count(),1,`${kind} SVG is embedded in ${await condition.innerText()}`);
            assert.ok(await formula.isVisible(),`${kind} SVG is visible`);
            assert.ok(await formula.locator('path').count() > 0,`${kind} SVG contains glyph paths`);
            const dimensions = await formula.evaluate(svg => {
                const viewBox = svg.viewBox.baseVal;
                const bounds = svg.getBoundingClientRect();
                return [viewBox.width,viewBox.height,bounds.width,bounds.height];
            });
            assert.ok(dimensions.every(size => Number.isFinite(size) && size > 0));
        }
        assert.equal(await fraction.locator('g[data-mml-node="mfrac"]').count(),1);
        assert.doesNotMatch(await equationCondition.innerText(),/\\frac/);
        assert.doesNotMatch(await secondCondition.textContent(),/\\(?:tg|sqrt|frac)/);
        const diagram = preview.locator('.generated-task-block[data-random-task-number="1"] .generated-task-diagram svg');
        assert.ok(await diagram.isVisible());
        assert.ok(await diagram.locator('path').count() > 0);
        await preview.close();

        const student = await openStudent(true);
        await student.evaluate(() => MathJax.startup.promise);
        assert.equal(await student.locator('.task-copy mjx-container[jax="CHTML"]').count(),0);
        const equation = student.locator('.generated-task-block[data-random-task-number="6"]');
        const answer = equation.locator('.ans-box');
        await answer.fill(await answer.getAttribute('data-ans'));
        await equation.locator('.btn-instant').click();
        assert.ok(await equation.locator('.answer-feedback.correct').isVisible());
        await equation.getByRole('button',{name:'РАЗБОР',exact:true}).click();
        await student.locator('#modal-content-box mjx-container[jax="CHTML"] mjx-mfrac').first().waitFor();
        await student.locator('#modal-overlay .close-btn').click();
        const secondPart = student.locator('.generated-task-block[data-part="2"]');
        await secondPart.getByRole('button',{name:'ПОКАЗАТЬ ОТВЕТ',exact:true}).click();
        await secondPart.locator('[id^="second-final-answer-"] mjx-container[jax="CHTML"] mjx-mfrac').first().waitFor();
        assert.deepEqual(errors,[]);
        assert.deepEqual(requests.filter(url => /mathjax|\.woff2?(?:\?|$)/i.test(url)),[]);
    } finally {
        await browser.close();
    }
});
