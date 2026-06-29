window.MOTIVATION_TEMPLATE = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мотивационное послание</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], processEscapes: true }, startup: { typeset: false } };</script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

    <style>
        :root{
            --accent:#ff8c00;
            --blue:#42a5f5;
            --good:#38d982;
            --bad:#ff5470;
            --dark:#111827;
            --paper:#ffffff;
            --shadow:0 18px 50px rgba(0,0,0,.28);
        }

        *{box-sizing:border-box}
        html,body{margin:0;min-height:100%;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:#101522;color:#fff}

        body{
            overflow-x:hidden;
            background:
                radial-gradient(circle at 15% 18%, rgba(255,140,0,.20), transparent 28%),
                radial-gradient(circle at 82% 18%, rgba(66,165,245,.18), transparent 30%),
                radial-gradient(circle at 50% 90%, rgba(95,255,180,.10), transparent 34%),
                linear-gradient(135deg,#0b1020,#151a2c 48%,#101018);
        }

        .app{width:min(1180px,calc(100vw - 28px));margin:0 auto;padding:20px 0 28px}

        .top{
            display:flex;align-items:center;justify-content:space-between;gap:14px;
            background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);
            border-radius:22px;padding:14px 18px;margin-bottom:16px;box-shadow:var(--shadow);backdrop-filter:blur(10px)
        }

        h1{margin:0;font-size:clamp(24px,3vw,42px);line-height:1.05;color:#fff;text-shadow:0 0 20px rgba(255,140,0,.45)}
        .subtitle{color:rgba(255,255,255,.76);font-size:14px;margin-top:4px}

        .progressPill{background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:10px 14px;font-weight:900;white-space:nowrap}

        .main{
            display:grid;
            grid-template-columns:minmax(340px, 1fr) minmax(290px, 360px);
            gap:16px;
            align-items:start;
        }

        .puzzleBoard{
            position:relative;
            background:rgba(255,255,255,.08);
            border:1px solid rgba(160,210,255,.24);
            border-radius:24px;
            padding:14px;
            box-shadow:var(--shadow), 0 0 24px rgba(72,170,255,.12), inset 0 0 20px rgba(255,255,255,.03);
            overflow:hidden;
        }

        #puzzle{
            position:relative;
            width:100%;
            aspect-ratio: 16 / 10;
            border-radius:18px;
            overflow:hidden;
            background:linear-gradient(135deg, rgba(12,20,46,.96), rgba(8,14,33,.96));
            border:1px solid rgba(160,210,255,.20);
        }

        .piece{
            position:absolute;
            cursor:pointer;
            overflow:hidden;
            transition:transform .14s ease;
        }

        .piece.open{
            cursor:default;
        }

        .piece .piece-image{
            position:absolute;
            inset:0;
            opacity:1;
            background-image:var(--img);
            background-size:var(--bgw) var(--bgh);
            background-position:var(--bgx) var(--bgy);
        }

        .piece .puzzle-lines{
            position:absolute;
            inset:0;
            pointer-events:none;
            box-shadow:inset 0 0 0 1px rgba(198,232,255,.28);
        }
    </style>
</head>

<body>
<div class="app">
    <div class="top">
        <div>
            <h1 id="gameTitle">Мотивационное послание</h1>
            <div class="subtitle">Открывай детали пазла, решая задания.</div>
        </div>
        <div class="progressPill">
            Открыто: <span id="openedCount">0</span> / <span id="totalCount">0</span>
        </div>
    </div>

    <div class="main">
        <div class="puzzleBoard">
            <div id="puzzle"></div>
        </div>

        <aside class="side">
            <div class="messageBox" id="sideMessage"></div>
        </aside>
    </div>
</div>

<script>
(function(){
    const cfg = window.__MOTIVATION_CFG__ || {};
    const questions = Array.isArray(cfg.questions) ? cfg.questions : [];
    const image = cfg.image || '';
    const puzzle = document.getElementById('puzzle');

    const opened = new Set();

    function seededRandom(seed){
        let t = seed >>> 0;
        return function(){
            t += 0x6D2B79F5;
            let r = Math.imul(t ^ (t >>> 15), 1 | t);
            r ^= r + Math.imul(r ^ (r >>> 7), 61 | t);
            return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
        };
    }

    function buildPieceLayout(count){
        count = Math.max(1, Number(count) || 1);
        const rand = seededRandom(1000 + count * 97);

        let rects = [{x:0,y:0,w:100,h:100}];

        while(rects.length < count){
            rects.sort((a,b)=>(b.w*b.h)-(a.w*a.h));
            const r = rects.shift();
            if(!r) break;

            const vertical = rand() > 0.5;

            if(vertical){
                const cut = 40 + rand()*20;
                rects.push({x:r.x,y:r.y,w:r.w*cut/100,h:r.h});
                rects.push({x:r.x+r.w*cut/100,y:r.y,w:r.w*(1-cut/100),h:r.h});
            } else {
                const cut = 40 + rand()*20;
                rects.push({x:r.x,y:r.y,w:r.w,h:r.h*cut/100});
                rects.push({x:r.x,y:r.y+r.h*cut/100,w:r.w,h:r.h*(1-cut/100)});
            }
        }

        return rects.slice(0,count);
    }

    function stylePiece(piece, rect){
        piece.style.left = rect.x+'%';
        piece.style.top = rect.y+'%';
        piece.style.width = rect.w+'%';
        piece.style.height = rect.h+'%';

        piece.style.setProperty('--img', 'url("'+image+'")');
        piece.style.setProperty('--bgw', (100/rect.w*100)+'%');
        piece.style.setProperty('--bgh', (100/rect.h*100)+'%');

        const bgx = rect.x/(100-rect.w)*100 || 0;
        const bgy = rect.y/(100-rect.h)*100 || 0;

        piece.style.setProperty('--bgx', bgx+'%');
        piece.style.setProperty('--bgy', bgy+'%');
    }

    // ✅ ВАЖНО: ПРЕВЬЮ (то, что ты просил)
    function buildPreviewPuzzle(){
        puzzle.innerHTML = '';
        const layout = buildPieceLayout(questions.length);

        for(let i=0;i<layout.length;i++){
            const rect = layout[i];

            const piece = document.createElement('div');
            piece.className = 'piece open';

            const img = document.createElement('div');
            img.className = 'piece-image';

            const lines = document.createElement('div');
            lines.className = 'puzzle-lines';

            piece.appendChild(img);
            piece.appendChild(lines);

            stylePiece(piece, rect);

            puzzle.appendChild(piece);
        }
    }

    function buildPuzzle(){
        puzzle.innerHTML = '';
        const layout = buildPieceLayout(questions.length);

        for(let i=0;i<layout.length;i++){
            const rect = layout[i];

            const piece = document.createElement('button');
            piece.className = 'piece';
            piece.dataset.index = i;

            const img = document.createElement('div');
            img.className = 'piece-image';

            const lines = document.createElement('div');
            lines.className = 'puzzle-lines';

            piece.appendChild(img);
            piece.appendChild(lines);

            stylePiece(piece, rect);

            piece.onclick = () => {
                opened.add(i);
                piece.classList.add('open');
            };

            puzzle.appendChild(piece);
        }
    }

    function updateProgress(){
        document.getElementById('openedCount').textContent = opened.size;
        document.getElementById('totalCount').textContent = questions.length;
    }

    // 🚀 ГЛАВНОЕ ИСПРАВЛЕНИЕ
    buildPreviewPuzzle();
    buildPuzzle();
    updateProgress();

})();
</script>
</body>
</html>`;