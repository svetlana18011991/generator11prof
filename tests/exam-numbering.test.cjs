const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const {createHash} = require('node:crypto');
const {test} = require('node:test');
const root = path.resolve(__dirname,'..');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');

// Captured before the exam reordering: mathematical data must be unchanged.
// Titles, prototype numbers and worked explanations are deliberately excluded.
const reference = {
    "task1": {
        "source": "task1",
        "prototypes": 26,
        "tasks": 130,
        "hash": "1e0a256ae6d7c3547fc5cbd856c8a2708b27fb80d07a586e32e32f106b584929",
        "extra": {
            "prototypes": 41,
            "tasks": 205,
            "hash": "d149abd845fd201c38835a390ae60ddf15e530f8f9ef6a8d3346c67ea48b1d33"
        }
    },
    "task2": {
        "source": "task2",
        "prototypes": 6,
        "tasks": 30,
        "hash": "1edeb0e5e7cf9e178464e584bb822d49d7ca076359061178a420901d51681abc",
        "extra": {
            "prototypes": 9,
            "tasks": 45,
            "hash": "a74f0f79d79c52b4b35b5c536938e21861aab816ba7520af836713942a244f1b"
        }
    },
    "task3": {
        "source": "task3",
        "prototypes": 23,
        "tasks": 115,
        "hash": "93701165699215278664d1c9a73befb2c9bf3074a5c8300ea6aa2c6edc870d73",
        "extra": {
            "prototypes": 27,
            "tasks": 135,
            "hash": "3f322b63ea602adb2d95e79eb1729dadc83caea5e547a86f8206eac5188eec9f"
        }
    },
    "task4": {
        "source": "task4",
        "prototypes": 13,
        "tasks": 65,
        "hash": "9c6b57c4121e0517fb99afd6e1afe17ca37fecb9dee1e9ccddf17ed481b6a2e4",
        "extra": {
            "prototypes": 10,
            "tasks": 50,
            "hash": "ad31a50f1527eecc1922db3dfbda32491b8e8648995c7b597c728564a441b1cf"
        }
    },
    "task5": {
        "source": "task5",
        "prototypes": 11,
        "tasks": 55,
        "hash": "da7ef0e7c4e80e313f45ea741eb2db876c604531f39435e2b59619707534358a",
        "extra": {
            "prototypes": 23,
            "tasks": 115,
            "hash": "cde7369eeded6f3055102bf8133e35cd31abcd986e0cecb80d50197019816c0d"
        }
    },
    "archive_task6": {
        "source": "task6",
        "prototypes": 32,
        "tasks": 40,
        "hash": "97e44978d82d32971b9f455e86dd612a66a4d12a344d9b4ac9ae42e49c027a56"
    },
    "task6": {
        "source": "task7",
        "prototypes": 9,
        "tasks": 45,
        "hash": "c538fbdef5b78a63ca4d92b2a9991fcf704b68d6e1fc8aee14a571b10712e5df",
        "extra": {
            "prototypes": 24,
            "tasks": 120,
            "hash": "e20f0cc8512d6c13dea83a33afb5aee0d5eb11fb08a2fa0c11fb31bb69c36ddb"
        }
    },
    "task7": {
        "source": "task8",
        "prototypes": 30,
        "tasks": 150,
        "hash": "2a95001036d875b5b28fce21bedb1a8eba6b922a820097d7f5ea2bcd15bcd745",
        "extra": {
            "prototypes": 48,
            "tasks": 240,
            "hash": "6cca11865850c5a8663eaf45b5ec6affd082a35add2b98b51e6e8fc1159a022f"
        }
    },
    "task8": {
        "source": "task9",
        "prototypes": 10,
        "tasks": 40,
        "hash": "1fa006c31c48c312d1f24f6c1e1f87b34958f91a2b6f232e66a9395f92bdfbf7",
        "extra": {
            "prototypes": 17,
            "tasks": 85,
            "hash": "950a1907b74a8ac8e4775565dd1d6c3aab6c9a309eabc2b5760c775f9f8fc55e"
        }
    },
    "task9": {
        "source": "task10",
        "prototypes": 23,
        "tasks": 115,
        "hash": "c2decb0677cf33a75ba574c052ef64ad88a76b4ef3d638b2115cdfb083d35d14",
        "extra": {
            "prototypes": 41,
            "tasks": 164,
            "hash": "7989916b068b5e6dd01115b8914e03854b6641e6edcb15e51ca1feaf5e9cf992"
        }
    },
    "task10": {
        "source": "task11",
        "prototypes": 22,
        "tasks": 88,
        "hash": "267a0313b7fa8e63f30dbc553c7159c928d93f266a5c8a00a215a0fb1ee46084",
        "extra": {
            "prototypes": 22,
            "tasks": 88,
            "hash": "267a0313b7fa8e63f30dbc553c7159c928d93f266a5c8a00a215a0fb1ee46084"
        }
    },
    "task11": {
        "source": "task12",
        "prototypes": 9,
        "tasks": 29,
        "hash": "86161bb1e7743498781c85bf59880f30fa1864cc0de288589f6a82665472f0e6",
        "extra": {
            "prototypes": 21,
            "tasks": 105,
            "hash": "a29c82ee333d7a72b65685189ff91116831f96fed070b4c9f5f1912e9ef7200f"
        }
    },
    "task17": {
        "source": "task13",
        "prototypes": 36,
        "tasks": 57,
        "hash": "f99cf8774a00f9c18621e87880fa4c60d1ca9581036eb63f53707b4729ed05f1"
    },
    "task13": {
        "source": "task14",
        "prototypes": 23,
        "tasks": 69,
        "hash": "b0e4eb5bded40e156a6b30b361702bfbdcc03b7a05b814e45cc4b94548b294a5"
    },
    "task14": {
        "source": "task15",
        "prototypes": 38,
        "tasks": 105,
        "hash": "d818fdd76bac52b649b91c0047712ab7bcbe875dc4076b477f34e0b59a98caa4"
    },
    "task15": {
        "source": "task16",
        "prototypes": 25,
        "tasks": 105,
        "hash": "658c7952920bd1508386985737270b8003290f8458e98b0226afbd2c399726e2"
    },
    "archive_task17": {
        "source": "task17",
        "prototypes": 10,
        "tasks": 35,
        "hash": "e0c273bfaecb3f8caf76b80778c1cf4bb27b5ad7ec5408eaf532f1ffad24744b"
    },
    "task16": {
        "source": "task18",
        "prototypes": 44,
        "tasks": 114,
        "hash": "26889155799bbaae06ec8690ff1abf753eb2b0cdd18a05b33e1a2cfc737a511d"
    },
    "task18": {
        "source": "task19",
        "prototypes": 32,
        "tasks": 89,
        "hash": "65d1fcdea781c662c75e36f94a307945eb38508815e54d78b7b0ec985ba908ab"
    },
    "task19": {
        "source": "task20",
        "prototypes": 31,
        "tasks": 87,
        "hash": "e37b9668bd5aa2371c3b29012a7697cb74d6aeaf2d26bef600f2cce80aeae4cd"
    },
    "task12": {
        "source": "archive",
        "prototypes": 16,
        "tasks": 87,
        "hash": "43a3ee4211cd0b59f32711af4d6f75d76a7a01e755a5fd60bb0b2a93b86175bb",
        "extra": {
            "prototypes": 16,
            "tasks": 64,
            "hash": "8048da0d9348b63c7c063c0fde885e8f99ed6d2abf64bfc848f46615327213f4"
        }
    }
};

const context=vm.createContext({window:{database:{},extraDatabase:{}},console,document:{readyState:'loading',addEventListener(){}}});
for(const [,filename] of html.slice(0,html.indexOf('</head>')).matchAll(/<script\b[^>]*src="([^"?]+)(?:\?[^"<>]*)?"[^>]*>/g)) {
    if(/^(?:task\d|archive_task12|ege_exam_structure)/.test(filename))
        vm.runInContext(fs.readFileSync(path.join(root,filename),'utf8'),context,{filename});
}
const database=context.window.database;
const extraDatabase=context.window.extraDatabase;
const activeIds=Array.from({length:19},(_,index)=>'task'+(index+1));
const mathematicalHash=bank=>createHash('sha256').update(JSON.stringify(bank.prototypes.map(proto=>(proto.tasks||[]).map(task=>({
    id:task.id??null,text:task.text,answer:String(task.answer),accepts:task.accepts||null,svg:task.svg_code||task.svg||''
}))))).digest('hex');

test('the new exam has 19 active tasks, two archives, and the requested subject order',()=>{
    const subjects=['Планиметрия','Векторы','Стереометрия','Определение вероятности','Теоремы о вероятностях',
        'Простейшие уравнения','Значение выражения','Производная и её график','Задачи с прикладным содержанием',
        'Текстовые задачи','Графики функций','Исследование функций','Уравнения','Стереометрия','Неравенства',
        'Планиметрическая задача','Финансовая математика','Задача с параметром','Числа и их свойства'];
    activeIds.forEach((tid,index)=>{
        const bank=database[tid];
        assert.ok(bank,tid);
        assert.equal(bank.examNumber,index+1);
        assert.equal(bank.part,index<12?1:2);
        assert.equal(bank.isArchive,false);
        assert.equal(bank.sourceTaskId,reference[tid].source);
        assert.match(bank.title,new RegExp('^Задание '+(index+1)+'\\.'));
        assert.ok(bank.title.includes(subjects[index]),tid+': subject');
        assert.equal(database[index+1],bank,'numeric and named aliases share one bank');
    });
    for(const tid of ['archive_task6','archive_task17']) {
        assert.ok(database[tid]);
        assert.equal(database[tid].isArchive,true);
        assert.equal(database[tid].sourceTaskId,reference[tid].source);
        assert.match(database[tid].title,/Архив/);
    }
    assert.equal(database.task20,undefined);
    assert.equal(database.archive,undefined,'the restored derivative bank is no longer archived');
    assert.equal(new Set(Object.values(database)).size,21);
    assert.deepEqual(Array.from(context.window.egeExamStructure.activeTaskIds),activeIds);
});

test('every main and extra task preserves its original mathematical content after moving',()=>{
    for(const [tid,expected]of Object.entries(reference)) {
        const bank=database[tid];
        assert.equal(bank.prototypes.length,expected.prototypes,tid+': prototype count');
        assert.equal(bank.prototypes.reduce((count,proto)=>count+proto.tasks.length,0),expected.tasks,tid+': task count');
        assert.equal(mathematicalHash(bank),expected.hash,tid+': IDs, statements, answers and diagrams');
        if(expected.extra) {
            const extra=extraDatabase[tid];assert.ok(extra,tid+': extra bank');
            assert.equal(extra.prototypes.length,expected.extra.prototypes);
            assert.equal(extra.prototypes.reduce((count,proto)=>count+proto.tasks.length,0),expected.extra.tasks);
            assert.equal(mathematicalHash(extra),expected.extra.hash,tid+': extra mathematical content');
        }
    }
});

test('economics is task 17 in part two with answers and no worked explanations',()=>{
    const economics=database.task17;
    assert.equal(economics.part,2);
    assert.equal(economics.sourceTaskId,'task13');
    for(const proto of economics.prototypes) {
        assert.ok(!proto.theory_task&&!proto.theory_sol,'worked explanations are omitted');
        if(proto.code)assert.match(String(proto.code),/^17\./);
        assert.ok(proto.tasks.every(task=>String(task.answer||'').trim()),'every original answer remains');
    }
});

let chromium;
try {({chromium}=require('playwright'));}catch{try{({chromium}=require('/opt/codex/cua_node/lib/node_modules/playwright'));}catch{}}
const executable=process.env.CHROMIUM_PATH||'/usr/bin/chromium';
const origin='http://ege-exam-numbering.test';
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff':'font/woff'};

test('manual selection, full variants and saved outputs use the new numbering and task parts',{
    skip:!chromium||!fs.existsSync(executable)?'Requires Playwright and Chromium':false,
    timeout:240000
},async t=>{
    const browser=await chromium.launch({executablePath:executable,headless:true,args:['--no-sandbox']});
    const directory=fs.mkdtempSync(path.join(os.tmpdir(),'ege-exam-numbering-'));
    try {
        const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});
        const errors=[],dialogs=[];
        page.on('pageerror',error=>errors.push(error.message));
        page.on('dialog',async dialog=>{dialogs.push(dialog.message());await dialog.dismiss();});
        await page.addInitScript(({key,hash})=>sessionStorage.setItem(key,hash),{
            key:html.match(/var SESSION_STORAGE_KEY = '([^']+)';/)[1],
            hash:html.match(/var PASSWORD_HASH = (\d+);/)[1]
        });
        await page.route('**/*',async route=>{
            const url=new URL(route.request().url());
            if(url.pathname.endsWith('/tex-mml-chtml.js'))return route.fulfill({contentType:'application/javascript',body:'window.MathJax=window.MathJax||{};MathJax.typesetPromise=()=>Promise.resolve();MathJax.startup={promise:Promise.resolve()};'});
            if(url.origin===origin) {
                const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
                if(filename.startsWith(root+path.sep)&&fs.existsSync(filename)&&fs.statSync(filename).isFile())
                    return route.fulfill({path:filename,contentType:mime[path.extname(filename)]||'application/octet-stream'});
            }
            return route.abort();
        });
        await page.goto(origin,{waitUntil:'load'});
        await page.waitForSelector('#dynamic-tasks .task-row',{state:'attached'});

        async function downloaded(command,filename) {
            const pending=page.waitForEvent('download');await page.evaluate(command);
            const result=await pending,filepath=path.join(directory,filename);await result.saveAs(filepath);
            return fs.readFileSync(filepath,'utf8');
        }
        async function parsed(saved) {
            const document=await browser.newPage({javaScriptEnabled:false});
            await document.route('**/*',route=>route.abort());
            await document.setContent(saved,{waitUntil:'domcontentloaded'});
            return document;
        }
        await t.test('settings expose the complete active order and one archive section without borrowed extras',async()=>{
            const roster=await page.evaluate(()=>{
                const ids=getUniqueTaskIds();
                return {ids,active:ids.filter(id=>!String(id).startsWith('archive')).map(id=>Number(String(id).replace(/\D/g,''))),
                    archives:ids.filter(id=>String(id).startsWith('archive')),
                    archiveExtras:['archive_task6','archive_task17'].map(id=>getExtraTaskData(id)||null),
                    firstTitle:document.getElementById('dynamic-tasks').textContent,
                    restoredExtra:getExtraTaskData(ids.find(id=>!String(id).startsWith('archive')&&Number(String(id).replace(/\D/g,''))===12)).prototypes.length};
            });
            assert.deepEqual(roster.active,Array.from({length:19},(_,index)=>index+1));
            assert.deepEqual(roster.archives,['archive_task6','archive_task17']);
            assert.deepEqual(roster.archiveExtras,[null,null]);
            assert.equal(roster.restoredExtra,16);
            assert.equal((roster.firstTitle.match(/Архивные задания/g)||[]).length,1);
            assert.equal((roster.firstTitle.match(/Задания с развёрнутым ответом/g)||[]).length,1);
            assert.doesNotMatch(roster.firstTitle,/Задание 20\./);
        });

        await t.test('economics uses answer-only part-two controls while restored and archived banks remain selectable',async()=>{
            await page.evaluate(()=>{
                document.querySelectorAll('input[id^="count-"]').forEach(input=>input.value='0');
                const active=getUniqueTaskIds().filter(id=>!String(id).startsWith('archive'));
                for(const number of [12,17]) {
                    const tid=active.find(id=>Number(String(id).replace(/\D/g,''))===number);
                    document.getElementById('count-'+tid).value='1';
                }
                for(const tid of ['archive_task6','archive_task17'])document.getElementById('count-'+tid).value='1';
                for(const id of ['toggle-explanations','toggle-instant-check','toggle-show-correct'])document.getElementById(id).checked=true;
                document.getElementById('sticker-select').value='none';updateTaskTotal();
            });
            await page.locator('#generation-controls .btn-generate').click();
            await page.waitForFunction(()=>!document.querySelector('#generation-controls .btn-generate').disabled&&window.currentGeneratedTasks.length===4);
            const current=await page.evaluate(()=>({
                tasks:window.currentGeneratedTasks.map(task=>({tid:task.taskTid,part:task.part,theory:task.theory,answer:task.answer,text:task.text})),
                games:getGameEligibleTasks().map(task=>task.taskTid),
                numbers:window.manualVariantPlan.map(pick=>pick.tid),
                print:currentPrintHTML,keys:currentAnswersHTML
            }));
            const economicsIndex=current.tasks.findIndex(task=>!task.tid.startsWith('archive')&&Number(task.tid.replace(/\D/g,''))===17);
            assert.ok(economicsIndex>=0);
            const economics=current.tasks[economicsIndex];
            assert.equal(economics.part,2);assert.equal(economics.theory,'');assert.ok(economics.answer.trim());
            assert.ok(!current.games.includes(economics.tid),'economics is excluded from first-part games');
            assert.ok(current.keys.includes(economics.answer));
            for(const tid of ['archive_task6','archive_task17'])assert.ok(current.tasks.some(task=>task.tid===tid));
            const block=page.locator(`#output-section [data-manual-plan-index="${economicsIndex}"]`);
            assert.equal(await block.getAttribute('data-part'),'2');
            assert.equal(await block.locator('input.ans-box,.btn-help,[id^="theory-data-"]').count(),0);
            assert.equal(await block.getByRole('button',{name:'АНАЛОГИ',exact:true}).count(),1);
            await block.getByRole('button',{name:'ПОКАЗАТЬ ОТВЕТ',exact:true}).click();
            assert.ok((await block.locator('.second-part-final-answer').textContent()).includes(economics.answer));
            assert.equal(await block.locator('.second-part-final-answer').isVisible(),true);
            await page.evaluate(()=>openPresentationMenu());
            assert.equal(await page.locator('#pres-modal').isVisible(),true);
            await page.evaluate(()=>document.getElementById('pres-modal').style.display='none');
            const saved=await downloaded(()=>downloadStudentHTML(),'manual-interactive.html');
            const student=await parsed(saved);
            const studentEconomics=student.locator('.generated-task-block').nth(economicsIndex);
            assert.equal(await studentEconomics.getAttribute('data-part'),'2');
            assert.equal(await studentEconomics.locator('input.ans-box,.btn-help,[id^="theory-data-"]').count(),0);
            assert.ok((await studentEconomics.textContent()).includes(economics.answer));
            assert.equal(await student.locator('.ege-replace-bar,.random-replace-btn').count(),0);
            await student.close();
        });

        await t.test('two full variants contain 19 tasks, seven part-two tasks, and correctly numbered print and key files',async()=>{
            await page.locator('#ege-variant-count').fill('2');await page.locator('.ege-fast-btn').click();
            await page.waitForFunction(()=>!document.querySelector('.ege-fast-btn').disabled&&window.egeVariantBatch.length===2);
            const batch=await page.evaluate(()=>window.egeVariantBatch.map(entry=>({
                keys:Object.keys(entry.picks),tasks:entry.tasks.map(task=>({tid:task.taskTid,part:task.part,answer:task.answer})),
                print:entry.printHTML,answers:entry.answersHTML
            })));
            for(const entry of batch) {
                assert.deepEqual(entry.keys,activeIds);
                assert.equal(entry.tasks.length,19);
                assert.deepEqual(entry.tasks.map(task=>Number(task.tid.replace(/\D/g,''))),Array.from({length:19},(_,index)=>index+1));
                assert.deepEqual(entry.tasks.map(task=>task.part),[...Array(12).fill(1),...Array(7).fill(2)]);
                assert.ok(entry.tasks.every(task=>!task.tid.startsWith('archive')));
            }
            await page.locator('#ege-active-variant').selectOption('1');
            assert.equal(await page.locator('#output-section .generated-task-block[data-part="2"]').count(),7);
            await page.locator('#ege-active-variant').selectOption('0');
            const savedKeys=await downloaded(()=>downloadAnswers(),'keys.html');
            const keys=await parsed(savedKeys);
            assert.equal(await keys.locator('tbody tr').count(),19);
            assert.deepEqual(await keys.locator('tbody tr th').allTextContents(),Array.from({length:19},(_,index)=>String(index+1)));
            const economicsKeys=keys.locator('tbody tr').filter({has:keys.locator('th').filter({hasText:/^17$/})});
            assert.deepEqual(await economicsKeys.locator('td').allTextContents(),batch.map(entry=>entry.tasks[16].answer));
            await keys.close();
            const savedPrint=await downloaded(()=>downloadPrintPDF('fields'),'print-with-fields.html');
            const print=await parsed(savedPrint);
            assert.equal(await print.locator('.ege-exam-task').count(),38);
            assert.equal(await print.locator('.ege-exam-unit-second .ege-exam-task').count(),14);
            for(const number of [13,17,19])assert.equal(await print.locator(`.ege-exam-unit-second .ege-exam-task[data-exam-task="${number}"]`).count(),2);
            assert.equal(await print.locator('.ege-exam-unit-second .ege-exam-task[data-exam-task="12"]').count(),0);
            assert.equal(await print.locator('.ege-exam-task[data-exam-task="20"]').count(),0);
            assert.equal(await print.locator('.ege-keys-page tbody tr').count(),19);
            assert.doesNotMatch(await print.locator('body').textContent(),/задания 1[–—-]20|заданиях 14[–—-]20/i);
            await print.close();
        });
        assert.deepEqual(errors,[]);assert.deepEqual(dialogs,[]);
    }finally{await browser.close();fs.rmSync(directory,{recursive:true,force:true});}
});
