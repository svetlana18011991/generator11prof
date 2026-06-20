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
            --accent:#ff8c00;
            --accent2:#4fc3ff;
            --text:#ffffff;
            --panel:rgba(255,255,255,.93);
            --shadow:0 18px 45px rgba(0,0,0,.35);
            --good:#57ff9a;
            --bad:#ff5470;
        }
        *{box-sizing:border-box}
        html,body{height:100%;margin:0;overflow:hidden;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:#091018;color:var(--text)}
        body{background:#091018}
        #arena{position:relative;width:100vw;height:100vh;overflow:hidden;background:url('arena.png') center/cover no-repeat}
        #arena::before{content:"";position:absolute;inset:0;background:linear-gradient(to bottom, rgba(0,0,0,.28), rgba(0,0,0,.36));pointer-events:none}
        #titleWrap{display:none}
        #titleWrap .main{font-size:clamp(30px,4vw,54px);font-weight:1000;letter-spacing:1px;text-transform:uppercase;text-shadow:0 0 18px rgba(255,140,0,.85), 0 0 36px rgba(255,140,0,.45)}
        #titleWrap .sub{margin-top:3px;font-family:'Caveat',cursive;font-size:clamp(22px,2vw,34px);color:rgba(255,255,255,.9)}
        #hud{position:absolute;top:22px;left:20px;right:20px;z-index:7;display:flex;align-items:center;gap:12px;pointer-events:none}
        .pill{background:rgba(11,18,28,.72);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);padding:10px 14px;border-radius:999px;box-shadow:var(--shadow);font-weight:800;white-space:nowrap}
        #timerPill{margin-left:auto}
        #heartText{letter-spacing:4px;color:#ff6985;text-shadow:0 0 14px rgba(255,84,112,.55)}
        #scene{position:absolute;inset:0;z-index:2}
        .fighterZone{position:absolute;top:0;bottom:auto;display:flex;flex-direction:column;align-items:center;gap:10px;z-index:3}
        #heroZone{left:-0.91%;top:20.16%;width:33.14vw}
        #bossZone{left:58.5%;top:6.81%;width:43.3vw}
        .fighterName{padding:8px 16px;border-radius:999px;background:rgba(11,18,28,.7);border:1px solid rgba(255,255,255,.16);font-size:15px;font-weight:900;letter-spacing:.4px;text-transform:uppercase;box-shadow:var(--shadow);text-align:center}
        .fighterCard{position:relative;width:100%;height:100%;min-width:0;min-height:0;padding:0;border-radius:24px;background:transparent;border:none;box-shadow:none;display:flex;align-items:flex-end;justify-content:center;overflow:visible}
        .fighterCard img{max-width:100%;max-height:100%;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 18px 22px rgba(0,0,0,.55));transition:transform .25s ease, filter .25s ease}
        .fighterCard.attack img{transform:scale(1.03) translateX(8px)}
        .fighterCard.hit img{transform:scale(.96);filter:drop-shadow(0 0 18px rgba(255,84,112,.9))}
        .hpWrap{width:min(24vw,300px);background:rgba(11,18,28,.72);border:1px solid rgba(255,255,255,.16);border-radius:14px;padding:7px 9px;box-shadow:var(--shadow);margin-top:-18px}
        .hpLabel{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:900;color:rgba(255,255,255,.88);margin-bottom:6px;text-transform:uppercase}
        .hpBar{position:relative;height:16px;border-radius:999px;background:rgba(255,255,255,.14);overflow:hidden;border:1px solid rgba(255,255,255,.15)}
        .hpBar::after{content:"";position:absolute;inset:0;background-repeat:repeat-x;background-size:var(--segment-size, 20px) 100%;background-image:linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,.18) calc(100% - 1px));pointer-events:none;opacity:.9}
        .hpFill{height:100%;width:100%;transition:width .45s ease;border-radius:999px}
        #heroHpFill{background:linear-gradient(90deg,#69f0ae,#d4ff62)}
        #bossHpFill{background:linear-gradient(90deg,#ff5470,#ff8c00)}
        
        #heroCard{width:33.14vw;height:73.08vh}
        #bossCard{width:43.3vw;height:90.92vh}
        #heroZone .hpWrap{width:min(24vw,300px);margin-top:-18px}
        #bossZone .hpWrap{width:min(24vw,300px);margin-top:-18px}

        #centerControls{position:absolute;left:50%;top:56%;transform:translate(-50%,-50%);z-index:8;display:flex;flex-direction:column;align-items:center;gap:14px}
        #startBattleBtn{border:none;border-radius:18px;background:linear-gradient(90deg,#ff8c00,#ff5470);color:#fff;padding:16px 28px;font-size:22px;font-weight:1000;cursor:pointer;box-shadow:0 18px 28px rgba(0,0,0,.28), 0 0 20px rgba(255,140,0,.38)}
        #startBattleBtn:hover{filter:brightness(1.06);transform:translateY(-1px)}
        #questionPanel{display:none;position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);width:min(820px,calc(100vw - 26px));max-height:min(68vh,760px);background:var(--panel);color:#222;border-radius:24px;border:2px solid var(--accent);box-shadow:0 0 30px rgba(255,140,0,.25), var(--shadow);padding:18px 18px 16px;z-index:9;overflow:hidden}
        #questionHead{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:8px}
        #questionHead .badge{background:#fff3e0;border:1px solid #ffcc80;color:#e65100;border-radius:999px;padding:8px 14px;font-weight:900}
        #questionHead .prog{font-weight:900;color:#666}
        #q{font-size:clamp(16px,2.15vh,20px);line-height:1.32;max-height:40vh;overflow:auto;padding:8px 10px 8px;text-align:center;color:#222}
        #q img,#q svg{display:block;max-width:100% !important;width:auto !important;height:auto !important;max-height:min(28vh,280px) !important;object-fit:contain !important;margin:0 auto 12px auto !important}
        #answerRow{display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:12px}
        #ansInput{width:min(240px,100%);font-size:18px;padding:12px 16px;border-radius:14px;border:2px solid #ddd;outline:none;text-align:center}
        #attackBtn,#nextBtn{border:none;border-radius:14px;padding:12px 18px;font-size:17px;font-weight:1000;cursor:pointer;box-shadow:0 8px 18px rgba(0,0,0,.16)}
        #attackBtn{background:var(--accent);color:#fff}
        #nextBtn{display:none;background:#26334f;color:#fff}
        #msg{margin-top:10px;min-height:24px;text-align:center;font-weight:900}
        #projectile{display:none;position:fixed;z-index:14;width:84px;height:84px;pointer-events:none;transform:translate(-50%,-50%);object-fit:contain;filter:drop-shadow(0 0 12px rgba(255,255,255,.45)) drop-shadow(0 0 22px rgba(255,140,0,.45))}
        #explosion{display:none;position:fixed;z-index:15;width:26px;height:26px;border-radius:999px;pointer-events:none;transform:translate(-50%,-50%);background:radial-gradient(circle, rgba(255,255,255,.98) 0%, rgba(255,214,64,.95) 26%, rgba(255,140,0,.88) 46%, rgba(255,84,112,.34) 68%, rgba(255,84,112,0) 100%);box-shadow:0 0 20px rgba(255,255,255,.8),0 0 44px rgba(255,140,0,.7);animation:boom .45s ease-out forwards}
        @keyframes boom{0%{opacity:1;transform:translate(-50%,-50%) scale(.2)}55%{opacity:1;transform:translate(-50%,-50%) scale(3.3)}100%{opacity:0;transform:translate(-50%,-50%) scale(5.4)}}
        #startOverlay{position:absolute;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.48);backdrop-filter:blur(7px);padding:16px}
        #startCard{width:min(980px,100%);background:rgba(11,18,28,.86);border:1px solid rgba(255,255,255,.14);border-radius:28px;box-shadow:var(--shadow);padding:22px}
        #startCard h1{margin:0 0 8px;text-align:center;font-size:clamp(32px,4.8vw,54px);text-transform:uppercase;text-shadow:0 0 18px rgba(255,140,0,.85)}
        #startCard p{margin:0 auto 18px;max-width:840px;text-align:center;color:rgba(255,255,255,.84);font-size:16px;line-height:1.45}
        #chars{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .charCard{background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.12);border-radius:22px;padding:14px;cursor:pointer;text-align:center;transition:.15s;display:flex;flex-direction:column;align-items:center;gap:10px}
        .charCard:hover,.charCard.selected{border-color:var(--accent);box-shadow:0 0 16px rgba(255,140,0,.28);transform:translateY(-2px)}
        .charThumb{width:min(16vw,140px);height:min(18vw,170px);min-width:90px;min-height:110px;display:flex;align-items:center;justify-content:center}
        .charThumb img{max-width:100%;max-height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.42))}
        .charName{font-weight:1000;font-size:18px}
        .charDesc{font-size:13px;color:rgba(255,255,255,.68)}
        #enterArenaBtn,#restartBtn{display:block;margin:18px auto 0;border:none;border-radius:16px;background:linear-gradient(90deg,#ff8c00,#ff5470);color:#fff;padding:14px 24px;font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 14px 26px rgba(255,84,112,.24)}
        #finishOverlay{position:absolute;inset:0;z-index:30;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.56);backdrop-filter:blur(8px);padding:16px}
        #finishCard{width:min(760px,100%);background:rgba(11,18,28,.92);border:1px solid rgba(255,255,255,.15);border-radius:28px;box-shadow:var(--shadow);padding:28px;text-align:center}
        #finishTitle{font-size:clamp(32px,4.8vw,54px);font-weight:1000;margin-bottom:8px;text-shadow:0 0 16px rgba(255,140,0,.55)}
        #finishText{font-size:17px;line-height:1.45;color:rgba(255,255,255,.86)}
        .stats{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:16px}
        .stat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:12px 16px;min-width:150px}
        .stat b{font-size:24px}.stat div{font-size:12px;color:rgba(255,255,255,.68);margin-top:4px}
        @media (max-width:980px){
            .fighterZone{width:min(29vw,250px)}
            .fighterCard{min-width:170px;min-height:210px;height:min(32vh,300px)}
            .hpWrap{width:min(29vw,250px)}
        }
        @media (max-width:760px){
            #hud{top:14px;left:12px;right:12px;gap:8px;flex-wrap:wrap}
            .pill{font-size:13px;padding:8px 10px}
            #timerPill{margin-left:0}
            #questionPanel{top:58%;max-height:58vh}
            #q{max-height:30vh}
        }
    </style>
</head>
<body>
<div id="arena">
    <div id="titleWrap"><div class="main">Арена ЕГЭ</div><div class="sub">Баттл с воплощением экзамена</div></div>
    <div id="hud">
        <div class="pill">Жизни: <span id="heartText">♥♥♥♥♥</span></div>
        <div class="pill">Босс: <span id="bossRemainText">100%</span></div>
        <div class="pill" id="timerPill">⏱ <span id="timer">00:00</span></div>
    </div>

    <div id="scene">
        <div class="fighterZone" id="heroZone">
            <div class="fighterName" id="heroDisplayName">Игрок</div>
            <div class="fighterCard" id="heroCard"><img id="heroImg" src="pers1.png" alt="Игрок"></div>
            <div class="hpWrap">
                <div class="hpLabel"><span>Линия жизни</span><span id="heroHpText">100%</span></div>
                <div class="hpBar" id="heroHpBar"><div class="hpFill" id="heroHpFill"></div></div>
            </div>
        </div>

        <div class="fighterZone" id="bossZone">
            <div class="fighterName">Страж КИМов</div>
            <div class="fighterCard" id="bossCard"><img id="bossImg" src="pers4.png" alt="Страж КИМов"></div>
            <div class="hpWrap">
                <div class="hpLabel"><span>Линия жизни</span><span id="bossHpText">100%</span></div>
                <div class="hpBar" id="bossHpBar"><div class="hpFill" id="bossHpFill"></div></div>
            </div>
        </div>

        <div id="centerControls">
            <button id="startBattleBtn" type="button">▶ Начать</button>
        </div>

        <div id="questionPanel">
            <div id="questionHead">
                <div class="badge" id="questionBadge">Задание 1</div>
                <div class="prog" id="questionProgress">1 / 10</div>
            </div>
            <div id="q"></div>
            <div id="answerRow">
                <input id="ansInput" type="text" autocomplete="off" placeholder="Ответ...">
                <button id="attackBtn" type="button">Атаковать</button>
                <button id="nextBtn" type="button">Следующее задание →</button>
            </div>
            <div id="msg"></div>
        </div>
    </div>

    <img id="projectile" alt="Заряд">
    <div id="explosion"></div>

    <div id="startOverlay">
        <div id="startCard">
            <h1>Баттл ЕГЭ</h1>
            <p id="instructionText">Выбери персонажа и выйди на арену. Слева будет твой герой, справа — Страж КИМов. У тебя 5 жизней. Правильный ответ отправляет заряд в босса, неправильный — даёт боссу ударить по тебе. Побеждает тот, у кого к концу баттла линия жизни длиннее.</p>
            <div id="chars">
                <div class="charCard selected" data-name="Альтаир" data-src="pers1.png" data-desc="смелый и собранный">
                    <div class="charThumb"><img src="pers1.png" alt="Персонаж 1"></div>
                    <div class="charName">Альтаир</div>
                </div>
                <div class="charCard" data-name="Вега" data-src="pers2.png" data-desc="быстрая и внимательная">
                    <div class="charThumb"><img src="pers2.png" alt="Персонаж 2"></div>
                    <div class="charName">Вега</div>
                </div>
                <div class="charCard" data-name="Квант" data-src="pers3.png" data-desc="спокойный логик">
                    <div class="charThumb"><img src="pers3.png" alt="Персонаж 3"></div>
                    <div class="charName">Квант</div>
                </div>
            </div>
            <button id="enterArenaBtn" type="button">Выйти на арену</button>
        </div>
    </div>

    <div id="finishOverlay">
        <div id="finishCard">
            <div id="finishTitle">Баттл завершён</div>
            <div id="finishText"></div>
            <div class="stats">
                <div class="stat"><b id="stCorrect">0</b><div>правильных ответов</div></div>
                <div class="stat"><b id="stWrong">0</b><div>неверных ответов</div></div>
                <div class="stat"><b id="stHero">0%</b><div>жизни героя</div></div>
                <div class="stat"><b id="stBoss">0%</b><div>жизни босса</div></div>
            </div>
            <button id="restartBtn" type="button">↻ Сыграть ещё раз</button>
        </div>
    </div>
</div>

<script>
/*__CONFIG_DATA__*/
(function(){
    const cfg = window.__BATTLE_CFG__ || {};
    const questions = Array.isArray(cfg.questions) ? cfg.questions : [];
    const total = questions.length || 1;
    const maxLives = Number(cfg.lives || 5);
    const $ = id => document.getElementById(id);
    let selectedHero = { name:'Альтаир', src:'pers1.png' };
    let currentIndex = 0;
    let heroLives = maxLives;
    let bossHits = 0;
    let wrong = 0;
    let correct = 0;
    let timerInt = null;
    let startedAt = null;
    let locked = false;

    function norm(v){ return String(v == null ? '' : v).trim().replace(',', '.').toLowerCase(); }
    function fmt(sec){ sec = Math.max(0, Math.floor(sec)); return String(Math.floor(sec/60)).padStart(2,'0') + ':' + String(sec%60).padStart(2,'0'); }
    function heroPct(){ return Math.max(0, (heroLives / maxLives) * 100); }
    function bossPct(){ return Math.max(0, ((total - bossHits) / total) * 100); }

    function updateHeroUi(){
        $('heartText').textContent = '♥'.repeat(Math.max(0, heroLives)) + '♡'.repeat(Math.max(0, maxLives - heroLives));
        $('heroHpFill').style.width = heroPct() + '%';
        $('heroHpText').textContent = Math.round(heroPct()) + '%';
        $('heroHpBar').style.setProperty('--segment-size', (100 / Math.max(1, maxLives)) + '%');
    }
    function updateBossUi(){
        $('bossHpFill').style.width = bossPct() + '%';
        $('bossHpText').textContent = Math.round(bossPct()) + '%';
        $('bossRemainText').textContent = Math.round(bossPct()) + '%';
        $('bossHpBar').style.setProperty('--segment-size', (100 / Math.max(1, total)) + '%');
    }
    function applySelectedHero(){
        $('heroImg').src = selectedHero.src;
        $('heroDisplayName').textContent = selectedHero.name;
    }
    function typeset(){ if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$('q')]).catch(()=>{}); }
    function setMessage(text, color){ $('msg').textContent = text || ''; $('msg').style.color = color || '#333'; }

    function showQuestion(){
        if(currentIndex >= questions.length || heroLives <= 0 || bossHits >= total){ finishBattle(); return; }
        locked = false;
        const q = questions[currentIndex] || {};
        $('questionPanel').style.display = 'block';
        $('questionBadge').textContent = 'Задание ' + (currentIndex + 1);
        $('questionProgress').textContent = (currentIndex + 1) + ' / ' + questions.length;
        $('q').innerHTML = q.prompt || '';
        $('ansInput').value = '';
        $('ansInput').readOnly = false;
        $('attackBtn').style.display = 'inline-block';
        $('nextBtn').style.display = 'none';
        setMessage('');
        typeset();
        setTimeout(()=>$('ansInput').focus(), 50);
    }

    function centerOf(el){
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }

    function animateShot(kind, done){
        const projectile = $('projectile');
        const explosion = $('explosion');
        const fromEl = kind === 'good' ? $('heroCard') : $('bossCard');
        const toEl = kind === 'good' ? $('bossCard') : $('heroCard');
        const from = centerOf(fromEl);
        const to = centerOf(toEl);
        projectile.src = kind === 'good' ? 'z2.png' : 'z1.png';
        projectile.style.transition = 'none';
        projectile.style.display = 'block';
        projectile.style.left = from.x + 'px';
        projectile.style.top = from.y + 'px';
        projectile.style.opacity = '1';
        projectile.style.width = '84px';
        projectile.style.height = '84px';
        projectile.style.transform = 'translate(-50%,-50%) scale(0.8)';
        explosion.style.display = 'none';
        void projectile.offsetWidth;
        requestAnimationFrame(()=>{
            projectile.style.transition = 'left .5s ease-in, top .5s ease-in, transform .5s ease-in, opacity .5s ease-in';
            projectile.style.left = to.x + 'px';
            projectile.style.top = to.y + 'px';
            projectile.style.transform = 'translate(-50%,-50%) scale(1.18)';
        });
        const targetCard = kind === 'good' ? $('bossCard') : $('heroCard');
        targetCard.classList.add(kind === 'good' ? 'hit' : 'hit');
        setTimeout(()=>{
            projectile.style.display = 'none';
            targetCard.classList.remove('hit');
            explosion.style.left = to.x + 'px';
            explosion.style.top = to.y + 'px';
            explosion.style.display = 'block';
            setTimeout(()=>{ explosion.style.display = 'none'; if(typeof done === 'function') done(); }, 420);
        }, 520);
    }

    function resolveAttack(){
        if(locked) return;
        const raw = $('ansInput').value;
        if(!String(raw).trim()) return;
        locked = true;
        $('attackBtn').disabled = true;
        $('ansInput').readOnly = true;
        const q = questions[currentIndex] || {};
        const answers = (q.accepts || []).map(norm);
        const isCorrect = answers.includes(norm(raw));
        if(isCorrect){
            correct++;
            bossHits++;
            setMessage('✅ Отличный удар! Босс получает урон.', '#17834a');
            $('heroCard').classList.add('attack');
            setTimeout(()=>$('heroCard').classList.remove('attack'), 260);
            updateBossUi();
            animateShot('good', afterResolution);
        } else {
            wrong++;
            heroLives = Math.max(0, heroLives - 1);
            let txt = '❌ Босс контратакует!';
            if(cfg.showCorrectOnError){ txt += ' Верный ответ: ' + ((q.accepts || [])[0] ?? ''); }
            setMessage(txt, '#c62828');
            $('bossCard').classList.add('attack');
            setTimeout(()=>$('bossCard').classList.remove('attack'), 260);
            updateHeroUi();
            animateShot('bad', afterResolution);
        }
    }

    function afterResolution(){
        $('attackBtn').disabled = false;
        $('attackBtn').style.display = 'none';
        $('nextBtn').style.display = 'inline-block';
        if(heroLives <= 0 || bossHits >= total || currentIndex >= questions.length - 1){
            $('nextBtn').textContent = 'Завершить баттл';
        } else {
            $('nextBtn').textContent = 'Следующее задание →';
        }
    }

    function nextStep(){
        currentIndex++;
        if(currentIndex >= questions.length || heroLives <= 0 || bossHits >= total){ finishBattle(); return; }
        showQuestion();
    }

    function finishBattle(){
        if(timerInt) clearInterval(timerInt);
        $('questionPanel').style.display = 'none';
        const heroRemain = heroPct();
        const bossRemain = bossPct();
        let title = 'Баттл завершён';
        let text = 'Сражение окончено.';
        if(heroLives <= 0 && bossHits >= total){
            title = 'Ничья!';
            text = 'Оба соперника потеряли все силы одновременно.';
        } else if(heroLives <= 0){
            title = 'Победил Страж КИМов';
            text = 'Жизни героя закончились раньше. Попробуйте ещё раз!';
        } else if(bossHits >= total){
            title = 'Победа!';
            text = 'Вы полностью обнулили линию жизни босса.';
        } else if(heroRemain > bossRemain){
            title = 'Победа!';
            text = 'У героя осталась более длинная линия жизни. Арена ЕГЭ пройдена!';
        } else if(heroRemain < bossRemain){
            title = 'Победил Страж КИМов';
            text = 'У босса осталась более длинная линия жизни. Есть шанс на реванш!';
        } else {
            title = 'Ничья!';
            text = 'Линии жизни оказались равны. Очень напряжённый баттл!';
        }
        $('finishTitle').textContent = title;
        $('finishText').textContent = text;
        $('stCorrect').textContent = String(correct);
        $('stWrong').textContent = String(wrong);
        $('stHero').textContent = Math.round(heroRemain) + '%';
        $('stBoss').textContent = Math.round(bossRemain) + '%';
        $('finishOverlay').style.display = 'flex';
    }

    function enterArena(){
        $('startOverlay').style.display = 'none';
        $('centerControls').style.display = 'flex';
        applySelectedHero();
        updateHeroUi();
        updateBossUi();
    }

    function startBattle(){
        $('startBattleBtn').style.display = 'none';
        startedAt = Date.now();
        $('timer').textContent = '00:00';
        if(timerInt) clearInterval(timerInt);
        timerInt = setInterval(()=>{ $('timer').textContent = fmt((Date.now() - startedAt)/1000); }, 1000);
        currentIndex = 0;
        heroLives = maxLives;
        bossHits = 0;
        wrong = 0;
        correct = 0;
        updateHeroUi();
        updateBossUi();
        showQuestion();
    }

    document.querySelectorAll('.charCard').forEach(card=>{
        card.addEventListener('click', ()=>{
            document.querySelectorAll('.charCard').forEach(c=>c.classList.remove('selected'));
            card.classList.add('selected');
            selectedHero = { name: card.dataset.name || 'Игрок', src: card.dataset.src || 'pers1.png' };
            applySelectedHero();
        });
    });

    $('enterArenaBtn').addEventListener('click', enterArena);
    $('startBattleBtn').addEventListener('click', startBattle);
    $('attackBtn').addEventListener('click', resolveAttack);
    $('nextBtn').addEventListener('click', nextStep);
    $('ansInput').addEventListener('keydown', e=>{ if(e.key === 'Enter' && $('questionPanel').style.display !== 'none' && $('attackBtn').style.display !== 'none'){ resolveAttack(); } });
    $('restartBtn').addEventListener('click', ()=> location.reload());

    if(cfg.instruction){ $('instructionText').textContent = cfg.instruction; }
    applySelectedHero();
    updateHeroUi();
    updateBossUi();
})();
<\/script>
</body>
</html>`;
