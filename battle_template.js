<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Баттл ЕГЭ</title>
  <style>
    :root{
      --orange:#ff8a00;
      --orange2:#ffb347;
      --blue:#1fb7ff;
      --green:#8cff65;
      --red:#ff4c58;
      --panel:rgba(255,255,255,.94);
      --panel2:rgba(255,255,255,.86);
      --dark:rgba(10,16,30,.88);
      --stroke:rgba(255,138,0,.95);
      --shadow:0 18px 45px rgba(0,0,0,.35);
      --radius:24px;
    }

    *{box-sizing:border-box}

    html,body{
      margin:0;
      width:100%;
      min-height:100%;
      font-family: Arial, "Segoe UI", sans-serif;
      color:#162033;
      background:#0b1223;
      overflow:hidden;
    }

    .game{
      position:relative;
      width:100vw;
      height:100vh;
      min-width:1200px;
      min-height:720px;
      overflow:hidden;
      background:#0b1223;
    }

    .arena-bg{
      position:absolute;
      inset:0;
      background:
        linear-gradient(rgba(5,8,20,.16), rgba(5,8,20,.32)),
        url("arena_ege.png") center/cover no-repeat;
      transform:scale(1.015);
      filter:saturate(1.05) contrast(1.02);
    }

    .vignette{
      position:absolute;
      inset:0;
      pointer-events:none;
      background:
        radial-gradient(circle at center, rgba(255,255,255,0) 35%, rgba(0,0,0,.25) 100%),
        linear-gradient(90deg, rgba(0,0,0,.36), transparent 25%, transparent 74%, rgba(0,0,0,.36));
    }

    .top-ui{
      position:absolute;
      top:24px;
      left:22px;
      right:22px;
      z-index:20;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      pointer-events:none;
    }

    .top-left,
    .top-right{
      display:flex;
      gap:12px;
      align-items:center;
    }

    .pill{
      min-height:54px;
      padding:13px 22px;
      border-radius:22px;
      background:rgba(11,18,35,.88);
      border:1px solid rgba(255,255,255,.12);
      box-shadow:0 8px 20px rgba(0,0,0,.35), inset 0 0 20px rgba(255,255,255,.03);
      color:#fff;
      font-weight:900;
      letter-spacing:.2px;
      text-shadow:0 2px 4px rgba(0,0,0,.4);
      display:flex;
      align-items:center;
      gap:8px;
      white-space:nowrap;
    }

    .hearts{
      color:#ff5f7c;
      font-size:20px;
      letter-spacing:2px;
      line-height:1;
    }

    .boss-name{
      padding:11px 24px;
      border:2px solid rgba(255,138,0,.85);
      box-shadow:
        0 0 18px rgba(255,138,0,.65),
        inset 0 0 16px rgba(255,138,0,.12),
        0 8px 20px rgba(0,0,0,.35);
      text-transform:uppercase;
    }

    .timer{
      min-width:112px;
      justify-content:center;
      font-size:18px;
    }

    .character{
      position:absolute;
      bottom:86px;
      z-index:7;
      pointer-events:none;
      display:flex;
      align-items:flex-end;
      justify-content:center;
    }

    .player{
      left:42px;
      width:330px;
      height:642px;
    }

    .boss{
      right:38px;
      width:360px;
      height:676px;
    }

    .character img{
      max-width:100%;
      max-height:100%;
      object-fit:contain;
      object-position:bottom center;
      filter:drop-shadow(0 18px 18px rgba(0,0,0,.42));
    }

    .name-tag{
      position:absolute;
      z-index:15;
      padding:11px 24px;
      min-width:104px;
      border-radius:22px;
      text-align:center;
      color:white;
      font-weight:900;
      text-transform:uppercase;
      letter-spacing:.4px;
      text-shadow:0 2px 4px rgba(0,0,0,.55);
      background:rgba(22,22,36,.78);
      border:2px solid rgba(139,79,255,.9);
      box-shadow:0 0 22px rgba(139,79,255,.8), inset 0 0 16px rgba(139,79,255,.15);
    }

    .player-name{left:178px;top:150px;}
    .boss-title{right:176px;top:30px;}

    .health{
      position:absolute;
      z-index:20;
      bottom:20px;
      width:300px;
      padding:12px 14px 15px;
      border-radius:18px;
      background:rgba(9,15,28,.82);
      border:1px solid rgba(255,255,255,.12);
      box-shadow:0 10px 26px rgba(0,0,0,.35);
      color:#fff;
      font-weight:900;
    }

    .health.left{left:135px;}
    .health.right{right:170px;}

    .health-row{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:7px;
      font-size:14px;
      text-transform:uppercase;
      letter-spacing:.25px;
    }

    .bar{
      height:18px;
      border-radius:99px;
      overflow:hidden;
      background:rgba(255,255,255,.14);
      border:1px solid rgba(255,255,255,.18);
    }

    .fill{
      height:100%;
      width:100%;
      border-radius:99px;
      background:linear-gradient(90deg, #63ff82, #dfff69);
      box-shadow:0 0 18px rgba(120,255,120,.55);
    }

    .fill.boss-fill{
      background:linear-gradient(90deg, #ff4d6d, #ff8a00);
      box-shadow:0 0 18px rgba(255,100,50,.55);
    }

    .battle-layout{
      position:absolute;
      z-index:12;
      top:198px;
      left:370px;
      right:370px;
      bottom:116px;
      display:grid;
      grid-template-columns:minmax(420px, 1.05fr) minmax(310px, .92fr);
      gap:16px;
      align-items:stretch;
    }

    .task-card,
    .draft-card{
      min-height:0;
      border-radius:var(--radius);
      background:var(--panel);
      border:2px solid rgba(255,138,0,.95);
      box-shadow:var(--shadow), inset 0 0 35px rgba(255,255,255,.42);
      backdrop-filter:blur(6px);
    }

    .task-card{
      display:flex;
      flex-direction:column;
      padding:22px 24px 22px;
      overflow:visible;
      height:auto;
    }

    .task-top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      margin-bottom:16px;
      flex:0 0 auto;
    }

    .task-label{
      padding:10px 18px;
      border-radius:18px;
      color:#ff6500;
      font-weight:900;
      background:linear-gradient(180deg, #fff7ed, #fff0dc);
      border:1px solid rgba(255,138,0,.26);
      box-shadow:inset 0 0 15px rgba(255,138,0,.08);
    }

    .task-count{
      font-size:18px;
      font-weight:900;
      color:#30394a;
    }

    .diagram-box{
      flex:0 0 auto;
      min-height:190px;
      border-radius:12px;
      background:#fff;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 10px 26px rgba(0,0,0,.10);
      margin:0 0 18px;
      overflow:hidden;
    }

    .diagram-svg{
      width:min(92%, 470px);
      height:auto;
      display:block;
    }

    .statement{
      flex:0 0 auto;
      margin:0 auto 18px;
      max-width:610px;
      text-align:center;
      font-size:17px;
      line-height:1.36;
      color:#172033;
      white-space:normal;
      overflow:visible;
      text-wrap:pretty;
    }

    .answer-row{
      flex:0 0 auto;
      display:flex;
      justify-content:center;
      gap:12px;
      margin-top:auto;
    }

    .answer{
      width:205px;
      height:54px;
      border:2px solid #e3e4e8;
      border-radius:16px;
      background:white;
      color:#1a2436;
      font-size:20px;
      text-align:center;
      outline:none;
      box-shadow:inset 0 2px 5px rgba(0,0,0,.04);
    }

    .answer::placeholder{color:#7d8798;}

    .attack{
      height:54px;
      padding:0 30px;
      border:none;
      border-radius:16px;
      background:linear-gradient(180deg, #ff9b22, #ff7800);
      color:#fff;
      font-weight:900;
      font-size:19px;
      cursor:pointer;
      box-shadow:0 10px 18px rgba(255,122,0,.28), inset 0 2px 0 rgba(255,255,255,.28);
      transition:.15s transform, .15s filter;
    }

    .attack:hover{filter:brightness(1.05); transform:translateY(-1px);}
    .attack:active{transform:translateY(1px);}

    .draft-card{
      padding:16px 16px 14px;
      display:flex;
      flex-direction:column;
      overflow:hidden;
    }

    .draft-head{
      flex:0 0 auto;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
      margin-bottom:12px;
    }

    .draft-title-wrap{
      display:grid;
      grid-template-columns:28px 1fr;
      gap:8px;
      align-items:start;
    }

    .spark{
      width:26px;
      height:26px;
      border-radius:9px;
      display:grid;
      place-items:center;
      color:#7c4dff;
      font-size:20px;
      background:rgba(124,77,255,.08);
    }

    .draft-title{
      margin:0;
      color:#176ad8;
      font-size:18px;
      line-height:1.05;
      font-weight:900;
    }

    .draft-subtitle{
      margin-top:4px;
      color:#9099aa;
      font-size:12px;
      font-weight:700;
    }

    .dots{
      color:#5e6677;
      font-weight:900;
      font-size:21px;
      line-height:1;
      padding-right:2px;
    }

    .toolbar{
      flex:0 0 auto;
      display:flex;
      gap:9px;
      align-items:center;
      margin-bottom:10px;
    }

    .tool{
      width:39px;
      height:36px;
      border-radius:10px;
      border:1px solid #e2e8f3;
      background:white;
      display:grid;
      place-items:center;
      color:#25324a;
      font-weight:900;
      box-shadow:0 4px 12px rgba(0,0,0,.05);
      cursor:pointer;
      user-select:none;
    }

    .tool.active{
      border-color:#8bc6ff;
      color:#0d7de5;
      box-shadow:0 0 0 3px rgba(31,183,255,.13);
    }

    .tool.spacer{margin-left:auto;}

    .pad-wrap{
      flex:1 1 auto;
      min-height:260px;
      border-radius:12px;
      border:1px solid #e3edf8;
      background:#fff;
      overflow:hidden;
      position:relative;
      box-shadow:inset 0 1px 8px rgba(22,70,120,.05);
    }

    #scratchCanvas{
      width:100%;
      height:100%;
      display:block;
      cursor:crosshair;
      background:
        linear-gradient(rgba(38,132,216,.085) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38,132,216,.085) 1px, transparent 1px),
        linear-gradient(rgba(38,132,216,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38,132,216,.035) 1px, transparent 1px);
      background-size:28px 28px, 28px 28px, 7px 7px, 7px 7px;
      background-position:-1px -1px;
    }

    .notes{
      flex:0 0 auto;
      margin-top:12px;
      display:grid;
      grid-template-columns:1fr auto;
      gap:10px;
      align-items:end;
    }

    .note-label{
      grid-column:1/-1;
      color:#2376db;
      font-size:14px;
      font-weight:900;
      display:flex;
      gap:6px;
      align-items:center;
      margin-left:2px;
    }

    .note-input{
      height:42px;
      border:1px solid #e8edf5;
      border-radius:12px;
      background:#f8fbff;
      padding:0 13px;
      color:#667085;
      outline:none;
      min-width:0;
    }

    .helper{
      height:42px;
      border:1px solid #bfddff;
      border-radius:12px;
      background:#eaf5ff;
      color:#1571ce;
      font-weight:900;
      padding:0 13px;
      display:flex;
      align-items:center;
      gap:6px;
      white-space:nowrap;
    }

    .toast{
      position:absolute;
      z-index:50;
      left:50%;
      top:104px;
      transform:translateX(-50%);
      padding:13px 22px;
      border-radius:18px;
      color:#fff;
      background:rgba(14,20,36,.92);
      box-shadow:0 12px 30px rgba(0,0,0,.35);
      opacity:0;
      pointer-events:none;
      transition:.25s opacity, .25s transform;
      font-weight:900;
    }

    .toast.show{
      opacity:1;
      transform:translateX(-50%) translateY(6px);
    }

    .projectile{
      position:absolute;
      z-index:35;
      width:230px;
      height:120px;
      pointer-events:none;
      opacity:0;
      filter:drop-shadow(0 0 18px rgba(60,220,255,.8));
    }

    .projectile.player-shot{
      left:300px;
      top:390px;
      background:url("charge_player.png") center/contain no-repeat;
      animation:playerShot .9s ease-in-out forwards;
    }

    .projectile.boss-shot{
      right:300px;
      top:330px;
      background:url("charge_boss.png") center/contain no-repeat;
      animation:bossShot .9s ease-in-out forwards;
    }

    @keyframes playerShot{
      0%{opacity:0;transform:translate(0,0) scale(.72) rotate(0deg);}
      18%{opacity:1;}
      100%{opacity:0;transform:translate(760px,-30px) scale(1.05) rotate(0deg);}
    }

    @keyframes bossShot{
      0%{opacity:0;transform:translate(0,0) scale(.72) rotate(180deg);}
      18%{opacity:1;}
      100%{opacity:0;transform:translate(-740px,35px) scale(1.05) rotate(180deg);}
    }

    @media (max-width:1400px){
      .battle-layout{
        left:330px;
        right:335px;
        grid-template-columns:minmax(390px, 1fr) minmax(285px, .86fr);
      }
      .player{left:24px;width:315px;height:620px;}
      .boss{right:22px;width:340px;height:650px;}
      .statement{font-size:16px;}
      .health.left{left:118px;}
      .health.right{right:135px;}
    }

    @media (max-height:780px){
      .battle-layout{top:180px;bottom:98px;}
      .diagram-box{min-height:168px;margin-bottom:14px;}
      .statement{font-size:15.5px;margin-bottom:14px;}
      .answer,.attack{height:48px;}
      .pad-wrap{min-height:220px;}
      .character{bottom:74px;}
      .player{height:590px;}
      .boss{height:625px;}
    }
  </style>
</head>
<body>
  <main class="game">
    <div class="arena-bg"></div>
    <div class="vignette"></div>

    <section class="top-ui">
      <div class="top-left">
        <div class="pill">Жизни: <span class="hearts">♥ ♥ ♥ ♥ ♥</span></div>
        <div class="pill">Босс: <span id="bossPercent">100%</span></div>
      </div>
      <div class="top-right">
        <div class="pill boss-name">Страж КИМов</div>
        <div class="pill timer">⏱ <span id="timer">00:31</span></div>
      </div>
    </section>

    <div class="name-tag player-name">Квант</div>

    <section class="character player">
      <img src="cat_scholar.png" alt="Квант — учёный кот">
    </section>

    <section class="character boss">
      <img src="boss_ege_math.png" alt="Страж КИМов">
    </section>

    <section class="battle-layout">
      <article class="task-card">
        <div class="task-top">
          <div class="task-label">Задание 1</div>
          <div class="task-count">1 / 6</div>
        </div>

        <div class="diagram-box">
          <svg class="diagram-svg" viewBox="0 0 560 220" aria-label="Геометрическая задача">
            <rect x="0" y="0" width="560" height="220" fill="#fff"/>
            <line x1="140" y1="170" x2="310" y2="170" stroke="#111" stroke-width="3"/>
            <line x1="310" y1="170" x2="420" y2="170" stroke="#111" stroke-width="3"/>
            <line x1="140" y1="170" x2="235" y2="50" stroke="#111" stroke-width="3"/>
            <line x1="235" y1="50" x2="310" y2="170" stroke="#111" stroke-width="3"/>

            <line x1="186" y1="112" x2="198" y2="118" stroke="#111" stroke-width="3"/>
            <line x1="266" y1="112" x2="254" y2="118" stroke="#111" stroke-width="3"/>

            <text x="122" y="188" font-size="24" font-style="italic" font-family="Georgia, serif">A</text>
            <text x="302" y="190" font-size="24" font-style="italic" font-family="Georgia, serif">B</text>
            <text x="228" y="38" font-size="24" font-style="italic" font-family="Georgia, serif">C</text>
            <text x="430" y="188" font-size="24" font-style="italic" font-family="Georgia, serif">D</text>
          </svg>
        </div>

        <p class="statement">
          В треугольнике ABC стороны AC и BC равны. Внешний угол при вершине B равен 113°. Найдите угол C.
        </p>

        <div class="answer-row">
          <input id="answer" class="answer" inputmode="numeric" placeholder="Ответ..." />
          <button class="attack" id="attackBtn">Атаковать</button>
        </div>
      </article>

      <aside class="draft-card">
        <div class="draft-head">
          <div class="draft-title-wrap">
            <div class="spark">✦</div>
            <div>
              <h2 class="draft-title">Умный черновик</h2>
              <div class="draft-subtitle">Пиши, решай, побеждай!</div>
            </div>
          </div>
          <div class="dots">...</div>
        </div>

        <div class="toolbar" aria-label="Инструменты черновика">
          <button class="tool active" id="penTool" title="Ручка">✎</button>
          <button class="tool" id="eraserTool" title="Ластик">⌫</button>
          <button class="tool" id="textTool" title="Текст">T</button>
          <button class="tool" id="lineTool" title="Линия">⌁</button>
          <button class="tool" id="sqrtTool" title="Формулы">√x</button>
          <button class="tool spacer" id="undoTool" title="Отменить">↶</button>
          <button class="tool" id="clearTool" title="Очистить">×</button>
        </div>

        <div class="pad-wrap">
          <canvas id="scratchCanvas"></canvas>
        </div>

        <div class="notes">
          <div class="note-label">💡 Заметки</div>
          <input class="note-input" id="noteInput" placeholder="Твои подсказки и идеи..." />
          <button class="helper" id="hintBtn">🤖 МатематикОН</button>
        </div>
      </aside>
    </section>

    <div class="health left">
      <div class="health-row"><span>Линия жизни</span><span id="playerHpText">100%</span></div>
      <div class="bar"><div class="fill" id="playerHp"></div></div>
    </div>

    <div class="health right">
      <div class="health-row"><span>Линия жизни</span><span id="bossHpText">100%</span></div>
      <div class="bar"><div class="fill boss-fill" id="bossHp"></div></div>
    </div>

    <div class="projectile" id="projectile"></div>
    <div class="toast" id="toast"></div>
  </main>

  <script>
    const answer = document.getElementById("answer");
    const attackBtn = document.getElementById("attackBtn");
    const toast = document.getElementById("toast");
    const projectile = document.getElementById("projectile");

    const playerHp = document.getElementById("playerHp");
    const bossHp = document.getElementById("bossHp");
    const playerHpText = document.getElementById("playerHpText");
    const bossHpText = document.getElementById("bossHpText");
    const bossPercent = document.getElementById("bossPercent");

    let playerHealth = 100;
    let bossHealth = 100;

    function showToast(text){
      toast.textContent = text;
      toast.classList.add("show");
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
    }

    function updateBars(){
      playerHp.style.width = playerHealth + "%";
      bossHp.style.width = bossHealth + "%";
      playerHpText.textContent = playerHealth + "%";
      bossHpText.textContent = bossHealth + "%";
      bossPercent.textContent = bossHealth + "%";
    }

    function fire(type){
      projectile.className = "projectile";
      void projectile.offsetWidth;
      projectile.classList.add(type === "player" ? "player-shot" : "boss-shot");
      setTimeout(() => projectile.className = "projectile", 950);
    }

    attackBtn.addEventListener("click", () => {
      const value = answer.value.trim().replace(",", ".");
      if(value === "46"){
        bossHealth = Math.max(0, bossHealth - 20);
        updateBars();
        fire("player");
        showToast("Верно! Удар знаниями!");
      }else{
        playerHealth = Math.max(0, playerHealth - 20);
        updateBars();
        fire("boss");
        showToast("Пока неверно. Используй черновик!");
      }
    });

    answer.addEventListener("keydown", (e) => {
      if(e.key === "Enter") attackBtn.click();
    });

    // Таймер
    const timer = document.getElementById("timer");
    let seconds = 31;
    setInterval(() => {
      if(seconds <= 0) return;
      seconds--;
      const m = String(Math.floor(seconds / 60)).padStart(2,"0");
      const s = String(seconds % 60).padStart(2,"0");
      timer.textContent = `${m}:${s}`;
    }, 1000);

    // Умный черновик: canvas без скролла, растягивается вместе с панелью.
    const canvas = document.getElementById("scratchCanvas");
    const ctx = canvas.getContext("2d");
    const tools = {
      pen: document.getElementById("penTool"),
      eraser: document.getElementById("eraserTool"),
      text: document.getElementById("textTool"),
      line: document.getElementById("lineTool"),
      sqrt: document.getElementById("sqrtTool"),
      undo: document.getElementById("undoTool"),
      clear: document.getElementById("clearTool"),
    };

    let activeTool = "pen";
    let drawing = false;
    let start = null;
    let last = null;
    let history = [];

    function resizeCanvas(){
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      const old = document.createElement("canvas");
      old.width = canvas.width;
      old.height = canvas.height;
      old.getContext("2d").drawImage(canvas, 0, 0);

      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      ctx.setTransform(ratio,0,0,ratio,0,0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if(old.width && old.height){
        ctx.drawImage(old, 0, 0, old.width / ratio, old.height / ratio);
      }
    }

    function saveState(){
      try{
        history.push(canvas.toDataURL());
        if(history.length > 20) history.shift();
      }catch(e){}
    }

    function setTool(name){
      activeTool = name;
      Object.entries(tools).forEach(([key,btn]) => {
        if(key !== "undo" && key !== "clear") btn.classList.toggle("active", key === name);
      });
    }

    tools.pen.addEventListener("click", () => setTool("pen"));
    tools.eraser.addEventListener("click", () => setTool("eraser"));
    tools.text.addEventListener("click", () => setTool("text"));
    tools.line.addEventListener("click", () => setTool("line"));
    tools.sqrt.addEventListener("click", () => {
      setTool("sqrt");
      showToast("Кликни в черновик, чтобы вставить √x или формулу");
    });

    tools.undo.addEventListener("click", () => {
      const lastState = history.pop();
      if(!lastState) return;
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight);
      };
      img.src = lastState;
    });

    tools.clear.addEventListener("click", () => {
      saveState();
      ctx.clearRect(0,0,canvas.width,canvas.height);
    });

    function pos(e){
      const rect = canvas.getBoundingClientRect();
      const p = e.touches ? e.touches[0] : e;
      return {x:p.clientX - rect.left, y:p.clientY - rect.top};
    }

    canvas.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      canvas.setPointerCapture(e.pointerId);
      const p = pos(e);
      saveState();

      if(activeTool === "text"){
        const text = prompt("Что написать в черновике?", "∠C = ?");
        if(text){
          ctx.fillStyle = "#172033";
          ctx.font = "18px Arial";
          ctx.fillText(text, p.x, p.y);
        }
        return;
      }

      if(activeTool === "sqrt"){
        ctx.fillStyle = "#172033";
        ctx.font = "20px Georgia";
        ctx.fillText("√x   a²+b²=c²", p.x, p.y);
        return;
      }

      drawing = true;
      start = p;
      last = p;
    });

    canvas.addEventListener("pointermove", (e) => {
      if(!drawing) return;
      const p = pos(e);

      if(activeTool === "pen" || activeTool === "eraser"){
        ctx.globalCompositeOperation = activeTool === "eraser" ? "destination-out" : "source-over";
        ctx.strokeStyle = activeTool === "eraser" ? "rgba(0,0,0,1)" : "#172033";
        ctx.lineWidth = activeTool === "eraser" ? 18 : 3;
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        last = p;
      }
    });

    canvas.addEventListener("pointerup", (e) => {
      if(!drawing) return;
      const p = pos(e);

      if(activeTool === "line"){
        ctx.strokeStyle = "#172033";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      drawing = false;
      start = null;
      last = null;
    });

    document.getElementById("hintBtn").addEventListener("click", () => {
      const text = "Подсказка: внешний угол 113° смежен с внутренним углом при B, значит ∠B = 67°. Так как AC = BC, углы A и B равны. Дальше найди ∠C.";
      document.getElementById("noteInput").value = text;
      ctx.fillStyle = "#0f7a42";
      ctx.font = "16px Arial";
      wrapCanvasText(text, 18, 30, canvas.clientWidth - 36, 22);
    });

    function wrapCanvasText(text, x, y, maxWidth, lineHeight){
      const words = text.split(" ");
      let line = "";
      for(let i=0;i<words.length;i++){
        const test = line + words[i] + " ";
        if(ctx.measureText(test).width > maxWidth && i > 0){
          ctx.fillText(line, x, y);
          line = words[i] + " ";
          y += lineHeight;
        }else{
          line = test;
        }
      }
      ctx.fillText(line, x, y);
    }

    window.addEventListener("resize", resizeCanvas);
    requestAnimationFrame(resizeCanvas);
  </script>
</body>
</html>
