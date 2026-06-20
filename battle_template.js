const BATTLE_TEMPLATE = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Баттл ЕГЭ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">
    <script>window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], processEscapes: true }, startup: { typeset: false } };<\/script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>
    <style>
        :root{
            --bg1:#10051f; --bg2:#061a2c; --accent:#ff8c00; --cyan:#5ee7ff;
            --good:#57ff9a; --bad:#ff5470; --text:rgba(255,255,255,.94);
            --panel:rgba(18,22,36,.82); --stroke:rgba(255,255,255,.16);
            --shadow:0 20px 70px rgba(0,0,0,.42);
        }
        *{box-sizing:border-box}
        html,body{height:100%;margin:0;overflow:hidden;background:#050713;color:var(--text);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;}
        body{background:
            radial-gradient(circle at 18% 18%, rgba(255,140,0,.24), transparent 30%),
            radial-gradient(circle at 82% 16%, rgba(94,231,255,.20), transparent 32%),
            radial-gradient(circle at 50% 95%, rgba(156,39,176,.22), transparent 34%),
            linear-gradient(130deg,var(--bg1),var(--bg2));}
        #arena{position:relative;width:100vw;height:100vh;overflow:hidden;}
        #arena::before{content:"";position:absolute;inset:-40px;background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
            background-size:38px 38px;transform:perspective(600px) rotateX(62deg) translateY(150px);transform-origin:center bottom;opacity:.55;}
        #arenaTitle{position:absolute;top:16px;left:50%;transform:translateX(-50%);z-index:5;text-align:center;}
        #arenaTitle .main{font-weight:1000;letter-spacing:2px;font-size:clamp(24px,3.4vw,46px);text-transform:uppercase;text-shadow:0 0 12px var(--accent),0 0 30px rgba(255,140,0,.45);}
        #arenaTitle .sub{font-family:Caveat,cursive;font-size:clamp(20px,2vw,30px);color:rgba(255,255,255,.78);}
        #hud{position:absolute;left:18px;right:18px;top:18px;z-index:6;display:flex;align-items:center;gap:12px;pointer-events:none;}
        .pill{background:rgba(10,13,24,.68);border:1px solid var(--stroke);border-radius:999px;padding:10px 14px;box-shadow:var(--shadow);backdrop-filter:blur(10px);font-weight:800;white-space:nowrap;}
        #timerPill{margin-left:auto;color:#fff;border-color:rgba(255,140,0,.48)}
        #lives{letter-spacing:3px;color:#ff5470;text-shadow:0 0 12px rgba(255,84,112,.55)}
        #fighters{position:absolute;left:4%;right:4%;top:18%;height:30%;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;pointer-events:none;}
        .fighter{width:min(28vw,330px);min-height:190px;border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.04));border:1px solid var(--stroke);box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .fighter::after{content:"";position:absolute;inset:auto 16px 12px;height:14px;border-radius:50%;background:rgba(0,0,0,.35);filter:blur(4px)}
        .avatar{font-size:clamp(82px,11vw,150px);filter:drop-shadow(0 14px 22px rgba(0,0,0,.45));transition:transform .22s ease;z-index:1;}
        .fighter.attack .avatar{transform:translateX(24px) scale(1.08) rotate(-3deg)}
        .fighter.hit .avatar{transform:translateX(-18px) rotate(7deg);filter:drop-shadow(0 0 18px var(--bad));}
        #bossCard{border-color:rgba(255,84,112,.38)}
        #bossCard .avatar{filter:drop-shadow(0 0 24px rgba(255,84,112,.55)) drop-shadow(0 14px 22px rgba(0,0,0,.45));}
        #vs{font-size:clamp(30px,5vw,70px);font-weight:1000;color:#fff;text-shadow:0 0 14px var(--accent),0 0 28px var(--bad);align-self:center;}
        .nameplate{position:absolute;left:14px;right:14px;top:12px;display:flex;justify-content:space-between;gap:10px;z-index:2;color:rgba(255,255,255,.84);font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:.5px;}
        .hpbar{position:absolute;left:14px;right:14px;bottom:14px;height:14px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.16);border-radius:999px;overflow:hidden;z-index:2;}
        .hpfill{height:100%;width:100%;border-radius:999px;background:linear-gradient(90deg,var(--good),#f8ff62);transition:width .35s ease;}
        #bossHpFill{background:linear-gradient(90deg,#ff5470,#ff8c00)}
        #questionLayer{position:absolute;left:50%;bottom:4%;transform:translateX(-50%);width:min(860px,calc(100vw - 28px));max-height:49vh;z-index:7;background:rgba(255,255,255,.94);color:#202335;border:2px solid var(--accent);border-radius:22px;box-shadow:0 0 24px rgba(255,140,0,.34), var(--shadow);padding:18px;display:none;flex-direction:column;}
        #qTop{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;color:#333;}
        #qTitle{font-weight:1000;color:#e65100;}
        #qProgress{font-weight:800;color:#666;}
        #q{font-size:clamp(15px,2.1vh,20px);line-height:1.28;overflow:auto;padding:6px 10px;max-height:27vh;text-align:center;}
        #q img,#q svg{display:block;max-width:100% !important;width:auto !important;height:auto !important;max-height:min(28vh,300px) !important;object-fit:contain !important;margin:0 auto 12px !important;}
        #answerRow{display:flex;gap:10px;margin-top:12px;align-items:center;justify-content:center;flex-wrap:wrap;}
        #ansInput{width:min(260px,100%);font-size:18px;padding:12px 16px;border-radius:14px;border:2px solid #d8d8d8;outline:none;text-align:center;}
        #submitBtn,#nextBtn{border:none;border-radius:14px;padding:12px 18px;font-size:17px;font-weight:1000;cursor:pointer;box-shadow:0 8px 18px rgba(0,0,0,.16);}
        #submitBtn{background:var(--accent);color:#fff;}
        #nextBtn{display:none;background:#26334f;color:#fff;}
        #msg{min-height:26px;margin-top:8px;text-align:center;font-weight:900;}
        #start{position:absolute;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.42);backdrop-filter:blur(8px);padding:18px;}
        #startCard{width:min(980px,100%);background:rgba(18,22,36,.86);border:1px solid var(--stroke);border-radius:26px;box-shadow:var(--shadow);padding:24px;}
        #startCard h1{margin:0;text-align:center;font-size:clamp(30px,5vw,58px);text-transform:uppercase;text-shadow:0 0 18px var(--accent);}
        #startCard p{text-align:center;color:rgba(255,255,255,.78);font-size:17px;line-height:1.45;margin:10px auto 18px;max-width:780px;}
        #chars{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:18px 0;}
        .charCard{background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.14);border-radius:20px;padding:16px;cursor:pointer;text-align:center;transition:.15s;}
        .charCard:hover,.charCard.selected{border-color:var(--accent);box-shadow:0 0 18px rgba(255,140,0,.25);transform:translateY(-2px);}
        .charIcon{font-size:70px;line-height:1;}.charName{font-weight:1000;margin-top:8px}.charDesc{font-size:13px;color:rgba(255,255,255,.66);margin-top:4px;}
        #playBtn,#restartBtn{display:block;margin:18px auto 0;border:0;border-radius:16px;background:linear-gradient(90deg,#ff8c00,#ff5470);color:#fff;padding:14px 22px;font-size:19px;font-weight:1000;cursor:pointer;box-shadow:0 14px 26px rgba(255,84,112,.22);}
        #finish{position:absolute;inset:0;z-index:30;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.54);backdrop-filter:blur(8px);padding:18px;}
        #finishCard{width:min(760px,100%);background:rgba(18,22,36,.90);border:1px solid var(--stroke);border-radius:26px;box-shadow:var(--shadow);padding:28px;text-align:center;}
        #finishTitle{font-size:clamp(30px,5vw,54px);font-weight:1000;margin-bottom:8px;}.stats{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px}.stat{background:rgba(255,255,255,.08);border:1px solid var(--stroke);border-radius:16px;padding:12px 16px;min-width:150px}.stat b{font-size:24px}.stat div{font-size:12px;color:rgba(255,255,255,.66);margin-top:4px}
        .flash{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:0;transition:opacity .25s}.flash.good{background:radial-gradient(circle at 28% 35%,rgba(87,255,154,.35),transparent 34%)}.flash.bad{background:radial-gradient(circle at 72% 35%,rgba(255,84,112,.32),transparent 34%)}.flash.show{opacity:1}
        @media(max-width:780px){#fighters{top:13%;height:25%}.fighter{min-height:130px}.avatar{font-size:72px}#chars{grid-template-columns:1fr}#questionLayer{max-height:55vh}.pill{padding:8px 10px;font-size:13px}}
    </style>
</head>
<body>
<div id="arena">
    <div id="arenaTitle"><div class="main">Арена ЕГЭ</div><div class="sub">Баттл с воплощением экзамена</div></div>
    <div id="hud"><div class="pill">Жизни: <span id="lives">♥♥♥♥♥</span></div><div class="pill">Урон: <span id="score">0</span></div><div class="pill" id="timerPill">⏱ <span id="timer">00:00</span></div></div>
    <div class="flash" id="flash"></div>
    <div id="fighters">
        <div class="fighter" id="heroCard"><div class="nameplate"><span id="heroName">Герой</span><span>5 жизней</span></div><div class="avatar" id="heroAvatar">🧑‍🎓</div><div class="hpbar"><div class="hpfill" id="heroHpFill"></div></div></div>
        <div id="vs">VS</div>
        <div class="fighter" id="bossCard"><div class="nameplate"><span>Страж КИМов</span><span id="bossHpText">100%</span></div><div class="avatar">👹📄</div><div class="hpbar"><div class="hpfill" id="bossHpFill"></div></div></div>
    </div>
    <div id="questionLayer"><div id="qTop"><div id="qTitle">Раунд 1</div><div id="qProgress">1 / 10</div></div><div id="q"></div><div id="answerRow"><input id="ansInput" autocomplete="off" placeholder="Ответ..."><button id="submitBtn">Атаковать</button><button id="nextBtn">Следующий раунд →</button></div><div id="msg"></div></div>
    <div id="start"><div id="startCard"><h1>Баттл ЕГЭ</h1><p id="instructionText">Выбери персонажа и выйди на Арену ЕГЭ. Твой противник — Страж КИМов, живое воплощение экзамена. У тебя 5 жизней на всю игру: правильный ответ наносит урон, ошибка отнимает жизнь.</p><div id="chars"><div class="charCard selected" data-avatar="🧑‍🎓" data-name="Академик"><div class="charIcon">🧑‍🎓</div><div class="charName">Академик</div><div class="charDesc">спокойный и точный</div></div><div class="charCard" data-avatar="👩‍🔬" data-name="Формула"><div class="charIcon">👩‍🔬</div><div class="charName">Формула</div><div class="charDesc">быстрая и внимательная</div></div><div class="charCard" data-avatar="🤖" data-name="Нейтрино"><div class="charIcon">🤖</div><div class="charName">Нейтрино</div><div class="charDesc">нейтральный аватар-логик</div></div></div><button id="playBtn">▶ Начать баттл</button></div></div>
    <div id="finish"><div id="finishCard"><div id="finishTitle">Победа!</div><div id="finishText"></div><div class="stats"><div class="stat"><b id="stCorrect">0</b><div>верных атак</div></div><div class="stat"><b id="stWrong">0</b><div>потеряно жизней</div></div><div class="stat"><b id="stScore">0</b><div>урон по ЕГЭ</div></div></div><button id="restartBtn">↻ Сыграть ещё раз</button></div></div>
</div>
<script>
/*__CONFIG_DATA__*/
(function(){
    const cfg = window.__BATTLE_CFG__ || {};
    const questions = Array.isArray(cfg.questions) ? cfg.questions : [];
    const total = questions.length;
    const maxLives = Number(cfg.lives || 5);
    let lives = maxLives, idx = 0, correct = 0, wrong = 0, selected = {avatar:'🧑‍🎓', name:'Академик'};
    let startedAt = Date.now(), timerInt = null, locked = false;
    const $ = id => document.getElementById(id);
    function norm(v){ return String(v == null ? '' : v).trim().replace(',', '.').toLowerCase(); }
    function fmt(sec){ sec=Math.max(0,Math.floor(sec)); return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0'); }
    function setLives(){ $('lives').textContent = '♥'.repeat(Math.max(0,lives)) + '♡'.repeat(Math.max(0,maxLives-lives)); $('heroHpFill').style.width = Math.max(0,(lives/maxLives)*100)+'%'; }
    function setBoss(){ const hp = total ? Math.max(0, 100 - (correct/total)*100) : 0; $('bossHpFill').style.width = hp+'%'; $('bossHpText').textContent = Math.round(hp)+'%'; $('score').textContent = String(correct*100); }
    function flash(cls){ const f=$('flash'); f.className='flash '+cls+' show'; setTimeout(()=>f.className='flash '+cls,220); }
    function pulse(id, cls){ const el=$(id); el.classList.add(cls); setTimeout(()=>el.classList.remove(cls),260); }
    function typeset(){ if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$('q')]).catch(()=>{}); }
    function showQuestion(){
        if(idx >= total || lives <= 0){ finish(); return; }
        locked = false;
        const q = questions[idx] || {};
        $('questionLayer').style.display='flex';
        $('qTitle').textContent = 'Раунд ' + (idx+1);
        $('qProgress').textContent = (idx+1) + ' / ' + total;
        $('q').innerHTML = q.prompt || '';
        $('ansInput').value=''; $('ansInput').readOnly=false; $('ansInput').focus();
        $('msg').textContent=''; $('msg').style.color=''; $('submitBtn').style.display='inline-block'; $('nextBtn').style.display='none';
        typeset();
    }
    function submit(){
        if(locked) return;
        const q = questions[idx] || {};
        const accepted = (q.accepts || []).map(norm);
        const val = norm($('ansInput').value);
        if(!val) return;
        locked = true; $('ansInput').readOnly=true; $('submitBtn').style.display='none'; $('nextBtn').style.display='inline-block';
        if(accepted.includes(val)){
            correct++; $('msg').textContent='✅ Точная атака! Страж КИМов теряет силу.'; $('msg').style.color='#159957';
            pulse('heroCard','attack'); flash('good'); setBoss();
        } else {
            wrong++; lives--; $('msg').textContent = cfg.showCorrectOnError ? ('❌ Удар Стража! Верный ответ: ' + ((q.accepts||[])[0] ?? '')) : '❌ Удар Стража! Минус одна жизнь.'; $('msg').style.color='#c62828';
            pulse('heroCard','hit'); flash('bad'); setLives();
        }
        if(lives <= 0 || idx >= total-1){ $('nextBtn').textContent='Завершить баттл'; }
    }
    function next(){ idx++; showQuestion(); }
    function finish(){
        if(timerInt) clearInterval(timerInt);
        $('questionLayer').style.display='none'; $('finish').style.display='flex'; setBoss(); setLives();
        const won = lives > 0 && correct === total;
        const partial = lives > 0 && correct > 0;
        $('finishTitle').textContent = won ? 'ЕГЭ повержен!' : (partial ? 'Баттл завершён' : 'Страж КИМов победил');
        $('finishText').innerHTML = won ? 'Ты прошёл арену без поражения босса. Отличная работа!' : 'Верных ответов: <b>'+correct+'</b> из <b>'+total+'</b>. Осталось жизней: <b>'+lives+'</b>.';
        $('stCorrect').textContent=correct; $('stWrong').textContent=wrong; $('stScore').textContent=correct*100;
    }
    document.querySelectorAll('.charCard').forEach(card=>card.addEventListener('click',()=>{document.querySelectorAll('.charCard').forEach(c=>c.classList.remove('selected')); card.classList.add('selected'); selected={avatar:card.dataset.avatar,name:card.dataset.name};}));
    $('playBtn').addEventListener('click',()=>{ $('start').style.display='none'; $('heroAvatar').textContent=selected.avatar; $('heroName').textContent=selected.name; lives=maxLives; idx=0; correct=0; wrong=0; startedAt=Date.now(); setLives(); setBoss(); showQuestion(); timerInt=setInterval(()=>$('timer').textContent=fmt((Date.now()-startedAt)/1000),1000); });
    $('submitBtn').addEventListener('click',submit); $('nextBtn').addEventListener('click',next); $('ansInput').addEventListener('keydown',e=>{ if(e.key==='Enter') submit(); }); $('restartBtn').addEventListener('click',()=>location.reload());
    if(cfg.instruction){ $('instructionText').textContent = cfg.instruction; }
    setLives(); setBoss();
})();
<\/script>
</body>
</html>`;
