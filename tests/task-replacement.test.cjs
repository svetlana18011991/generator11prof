const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');

const root = path.resolve(__dirname,'..');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const origin = 'http://ege-replacement.test';
const sessionKey = html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1];
const passwordHash = html.match(/var PASSWORD_HASH = (\d+);/)[1];
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff':'font/woff'};
let chromium;
try { ({chromium} = require('playwright')); } catch {
    try { ({chromium} = require('/opt/codex/cua_node/lib/node_modules/playwright')); } catch {}
}
const executable = process.env.CHROMIUM_PATH || '/usr/bin/chromium';

test('EGE preview replacements preserve the chosen variant and update its outputs immediately',{
    skip:!chromium || !fs.existsSync(executable) ? 'Requires Playwright and Chromium' : false,
    timeout:240000
},async t => {
    const browser = await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory = fs.mkdtempSync(path.join(os.tmpdir(),'ege-replacement-'));
    try {
        const page = await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});
        const errors=[],dialogs=[];
        page.on('pageerror',error=>errors.push(error.message));
        page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{key:sessionKey,hash:passwordHash});
        await page.route('**/*',async route=>{
            const url = new URL(route.request().url());
            if (url.pathname.endsWith('/tex-mml-chtml.js')) return route.fulfill({contentType:'application/javascript',body:'window.MathJax=window.MathJax||{};MathJax.typesetPromise=()=>Promise.resolve();MathJax.startup={promise:Promise.resolve()};'});
            if (url.origin===origin) {
                const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                if (filename.startsWith(root+path.sep)&&fs.existsSync(filename)&&fs.statSync(filename).isFile()) return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
            }
            return route.abort();
        });
        await page.goto(origin,{waitUntil:'load'});
        await page.waitForSelector('#dynamic-tasks .task-row',{state:'attached'});
        const numericalTid=await page.evaluate(()=>getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===5));
        const manualButton=page.locator('#generation-controls .btn-generate');
        const controls=index=>page.locator(`#output-section .generated-task-block[data-manual-plan-index="${index}"]`);
        const inside=target=>target.getByRole('button',{name:'🔄 Заменить внутри типа',exact:true});
        const changeType=target=>target.getByRole('button',{name:'↔ Заменить тип',exact:true});
        async function selectBank(tid,kind,indices,count=1) {
            await page.evaluate(({tid,kind,indices,count})=>{
                document.querySelectorAll('input[id^="count-"]').forEach(input=>input.value='0');
                const data=getPrototypeData(tid,kind);
                data.prototypes.forEach((_,index)=>document.getElementById(getPrototypeCheckboxId(tid,index,kind)).checked=indices.includes(index));
                document.getElementById(kind==='extra'?'count-extra-'+tid:'count-'+tid).value=String(count);
                document.getElementById('sticker-select').value='none';
                updateTaskTotal();
            },{tid,kind,indices,count});
            await manualButton.click();
            await page.waitForFunction(()=>!document.querySelector('#generation-controls .btn-generate').disabled&&window.manualVariantPlan?.length);
        }
        async function state(index=0) {
            return page.evaluate(index=>{
                const digest=value=>{let hash=2166136261;for(const char of String(value||''))hash=Math.imul(hash^char.charCodeAt(0),16777619)>>>0;return hash;};
                const task=window.currentGeneratedTasks[index];
                const preview=document.querySelector(`#output-section [data-manual-plan-index="${index}"]`);
                const printed=document.createElement('div');printed.innerHTML=currentPrintHTML;
                const block=printed.querySelectorAll('.task-print-block')[index];
                const diagrams=root=>[...root.querySelectorAll('svg,img')].map(node=>node.outerHTML).join('');
                const answer=document.createElement('div');answer.innerHTML=currentAnswersHTML;
                return {plan:window.manualVariantPlan.map(pick=>({...pick})),text:task.text,answer:task.answer,svg:digest(task.svg),
                    games:window.currentGeneratedTasks.map(item=>({text:item.text,answer:item.answer,svg:digest(item.svg)})),
                    previewText:preview.querySelector('.task-copy').textContent.replace(/\s+/g,' '),
                    printText:block.querySelector('.task-copy').textContent.replace(/\s+/g,' '),
                    previewGraphic:digest(diagrams(preview.querySelector('.generated-task-diagram')||document.createElement('div'))),
                    printGraphic:digest(diagrams(block.querySelector('.task-print-img')||document.createElement('div'))),answers:answer.textContent};
            },index);
        }
        function outputs(value) {
            assert.equal(value.previewText,value.printText,'preview and print share the current statement');
            assert.ok(value.answers.includes(value.answer),'keys include the current answer');
        }
        async function downloaded(command,name) {
            const pending=page.waitForEvent('download');
            await page.evaluate(command);
            const download=await pending;const filename=path.join(directory,name);
            await download.saveAs(filename);return fs.readFileSync(filename,'utf8');
        }
        await t.test('manual numerical replacements keep other tasks and respect selected types',async()=>{
            const eligible=await page.evaluate(tid=>window.database[tid].prototypes.map((p,index)=>({index,p})).filter(({p})=>p.tasks.length>1&&new Set(p.tasks.map(task=>task.text)).size>1&&!/(?:src|href)=[\"']https?:/.test([p.theory_task,p.theory_sol,p.svg_code,...p.tasks.map(task=>task.text+' '+task.svg_code)].join(' '))).slice(0,2).map(({index})=>index),numericalTid);
            assert.equal(eligible.length,2);
            await selectBank(numericalTid,'main',eligible,2);
            assert.equal(await inside(controls(0)).count(),1,'inside replacement is present on first generation');
            assert.equal(await changeType(controls(0)).count(),1,'type replacement is present on first generation');
            const initial=await state();outputs(initial);
            await inside(controls(0)).click();const within=await state();outputs(within);
            assert.equal(within.plan[0].protoIndex,initial.plan[0].protoIndex);
            assert.notEqual(within.plan[0].taskIndex,initial.plan[0].taskIndex);
            assert.notEqual(within.text,initial.text);
            assert.deepEqual(within.plan.slice(1),initial.plan.slice(1));
            assert.deepEqual(within.games.slice(1),initial.games.slice(1));
            await changeType(controls(0)).click();const changed=await state();outputs(changed);
            assert.notEqual(changed.plan[0].protoIndex,within.plan[0].protoIndex);
            assert.ok(eligible.includes(changed.plan[0].protoIndex));
            assert.deepEqual(changed.plan.slice(1),within.plan.slice(1));
            assert.deepEqual(changed.games.slice(1),within.games.slice(1));
            if(process.env.EGE_REPLACEMENT_SCREENSHOT)await controls(0).screenshot({path:process.env.EGE_REPLACEMENT_SCREENSHOT});
            const saved=await downloaded(()=>downloadStudentHTML(),'interactive.html');
            const student=await browser.newPage({javaScriptEnabled:false});
            await student.setContent(saved,{waitUntil:'domcontentloaded'});
            assert.equal((await student.locator('.generated-task-block').first().locator('.task-copy').textContent()).replace(/\s+/g,' '),changed.previewText);
            assert.equal(await student.locator('.ege-replace-bar,.random-replace-btn').count(),0,'author replacement controls are excluded from student files');
            await student.close();
            await selectBank(numericalTid,'main',[eligible[0]]);
            assert.equal(await inside(controls(0)).count(),1);
            assert.equal(await changeType(controls(0)).count(),0,'a single selected type cannot change into an unselected one');
        });
        await t.test('extra-bank replacements stay in their bank and use its selected prototypes',async()=>{
            const fixture=await page.evaluate(()=>{
                for(const tid of getUniqueTaskIds()) {
                    const data=getExtraTaskData(tid);const indices=(data?.prototypes||[]).map((p,index)=>({p,index})).filter(({p})=>p.tasks?.length>1).slice(0,2).map(({index})=>index);
                    if(indices.length===2)return {tid,indices};
                }
            });
            assert.ok(fixture);
            await selectBank(fixture.tid,'extra',fixture.indices);
            const before=await state();await inside(controls(0)).click();const within=await state();
            assert.equal(within.plan[0].kind,'extra');assert.equal(within.plan[0].protoIndex,before.plan[0].protoIndex);assert.notEqual(within.plan[0].taskIndex,before.plan[0].taskIndex);outputs(within);
            await changeType(controls(0)).click();const changed=await state();
            assert.equal(changed.plan[0].kind,'extra');assert.notEqual(changed.plan[0].protoIndex,within.plan[0].protoIndex);assert.ok(fixture.indices.includes(changed.plan[0].protoIndex));outputs(changed);
        });
        await t.test('duplicate extra-bank entries do not produce an unchanged replacement',async()=>{
            const tid=await page.evaluate(()=>getUniqueTaskIds().find(id=>Number(String(id).replace(/\D/g,''))===4));
            await selectBank(tid,'extra',[4,5,7]);
            await page.evaluate(tid=>{
                const task=getExtraTaskData(tid).prototypes[4].tasks[0];
                generateVariant({manualPlan:[{tid,kind:'extra',protoIndex:4,taskIndex:0,taskKey:String(task.id??task.text??0)}]});
            },tid);
            assert.equal(await inside(controls(0)).count(),0,'five identical bank entries offer no same-type replacement');
            assert.equal(await changeType(controls(0)).count(),1);
            await changeType(controls(0)).click();
            for(let attempt=0;attempt<4;attempt++) {
                const before=await state();await inside(controls(0)).click();const after=await state();
                assert.equal(after.plan[0].protoIndex,before.plan[0].protoIndex);
                assert.notDeepEqual([after.text,after.answer,after.svg],[before.text,before.answer,before.svg],'each click changes actual task content');
                outputs(after);
            }
        });
        await t.test('real graphic analogues change their drawing even when statement and answer match',async()=>{
            const fixture=await page.evaluate(()=>{
                for(const tid of getUniqueTaskIds()) {
                    const data=window.database[tid];if(Number(data.part||1)>1)continue;
                    for(let protoIndex=0;protoIndex<data.prototypes.length;protoIndex++) {
                        const tasks=data.prototypes[protoIndex].tasks||[];const first=tasks[0];if(!first?.svg_code)continue;
                        const taskIndex=tasks.findIndex((task,index)=>index>0&&task.text===first.text&&String(task.answer)===String(first.answer)&&task.svg_code&&task.svg_code!==first.svg_code);
                        if(taskIndex>0)return {tid,protoIndex,taskIndex};
                    }
                }
            });
            assert.ok(fixture,'the actual bank contains a same-answer graphical pair');
            await selectBank(fixture.tid,'main',[fixture.protoIndex]);
            await page.evaluate(({tid,protoIndex,taskIndex})=>{
                const task=window.database[tid].prototypes[protoIndex].tasks[taskIndex];
                generateVariant({manualPlan:[{tid,kind:'main',protoIndex,taskIndex,taskKey:String(task.id??task.text??taskIndex)}]});
                window.replacementOriginalRandom=Math.random;Math.random=()=>0;
            },fixture);
            const before=await state();await inside(controls(0)).click();const after=await state();
            await page.evaluate(()=>Math.random=window.replacementOriginalRandom);
            assert.equal(after.text,before.text);assert.equal(after.answer,before.answer);assert.equal(after.plan[0].protoIndex,before.plan[0].protoIndex);
            for(const key of ['svg','previewGraphic','printGraphic'])assert.notEqual(after[key],before[key],key+' changes immediately');outputs(after);
        });
        await t.test('both full-variant replacements survive switching and update batch keys',async()=>{
            await page.locator('#ege-variant-count').fill('2');await page.locator('.ege-fast-btn').click();
            await page.waitForFunction(()=>!document.querySelector('.ege-fast-btn').disabled&&window.egeVariantBatch.length===2);
            const targetNumber=await page.evaluate(()=>[...document.querySelectorAll('#output-section .generated-task-block')].find(node=>node.querySelector('button[onclick*="inside"]')&&node.querySelector('button[onclick*="type"]')).dataset.randomTaskNumber);
            const targetTid='task'+targetNumber;
            const target=page.locator(`#output-section .generated-task-block[data-random-task-number="${targetNumber}"]`);
            const snapshot=()=>page.evaluate(tid=>({picks:JSON.parse(JSON.stringify(window.randomVariantPicks)),other:JSON.parse(JSON.stringify(window.egeVariantBatch[1].picks)),answer:window.currentGeneratedTasks.find(task=>task.taskTid===tid).answer,stored:JSON.parse(JSON.stringify(window.egeVariantBatch[0].picks)),storedAnswer:window.egeVariantBatch[0].tasks.find(task=>task.taskTid===tid).answer,print:window.egeVariantBatch[0].printHTML===currentPrintHTML,keys:window.egeVariantBatch[0].answersHTML===currentAnswersHTML}),targetTid);
            const before=await snapshot();await inside(target).click();const within=await snapshot();
            assert.equal(within.picks[targetTid].protoIndex,before.picks[targetTid].protoIndex);assert.notEqual(within.picks[targetTid].taskIndex,before.picks[targetTid].taskIndex);
            await changeType(target).click();const changed=await snapshot();
            assert.notEqual(changed.picks[targetTid].protoIndex,within.picks[targetTid].protoIndex);
            for(const tid of Object.keys(before.picks))if(tid!==targetTid)assert.deepEqual(changed.picks[tid],before.picks[tid],tid+' is preserved');
            assert.deepEqual(changed.other,before.other);assert.deepEqual(changed.stored,changed.picks);assert.equal(changed.storedAnswer,changed.answer);assert.equal(changed.print,true);assert.equal(changed.keys,true);
            await page.locator('#ege-active-variant').selectOption('1');await page.locator('#ege-active-variant').selectOption('0');
            const restored=await snapshot();assert.deepEqual(restored.picks,changed.picks);assert.equal(restored.answer,changed.answer);
            const keys=await downloaded(()=>downloadAnswers(),'keys.html');
            const keyPage=await browser.newPage({javaScriptEnabled:false});await keyPage.setContent(keys,{waitUntil:'domcontentloaded'});
            const row=keyPage.locator('tbody tr').filter({has:keyPage.locator('th').filter({hasText:new RegExp('^'+targetNumber+'$')})});
            assert.equal(await row.locator('td').first().textContent(),changed.answer);await keyPage.close();
        });
        assert.deepEqual(errors,[]);assert.deepEqual(dialogs,[]);
    } finally {await browser.close();fs.rmSync(directory,{recursive:true,force:true});}
});
