const MOTIVATION_TEMPLATE = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мотивация</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], processEscapes: true }, startup: { typeset: false } };<\/script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>
    <style>
        :root {
            --accent: #ff8c00;
            --bg: #091018;
            --panel: rgba(255, 255, 255, 0.96);
            --text: #ffffff;
            --shadow: 0 18px 45px rgba(0,0,0,0.35);
        }
        * { box-sizing: border-box; }
        html, body { height: 100%; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }
        
        #layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
            gap: 30px;
            min-height: 100vh;
        }

        h1 { margin: 0; font-size: clamp(28px, 4vw, 42px); text-transform: uppercase; text-shadow: 0 0 18px rgba(255,140,0,.85); text-align: center; }

        /* Контейнер Пазла */
        #puzzle-wrapper {
            width: 100%;
            max-width: 700px;
            border-radius: 16px;
            overflow: hidden;
            border: 2px solid rgba(79, 195, 255, 0.4);
            box-shadow: 0 0 30px rgba(79, 195, 255, 0.15), var(--shadow);
            background: #000;
            transition: all 0.5s ease;
        }

        #puzzleContainer {
            position: relative;
            width: 100%;
            /* Пропорции и фон задаются через JS после загрузки картинки */
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            display: grid;
            gap: 1px; /* Зазор между пазлами */
        }

        /* Синяя мерцающая рубашка пазла */
        .puzzle-piece {
            background: linear-gradient(135deg, rgba(10, 25, 47, 1), rgba(17, 44, 74, 1));
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 0 15px rgba(79, 195, 255, 0.25);
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(79, 195, 255, 0.15); /* Еле заметный номер задания (опционально) */
            font-weight: 900;
            font-size: 2rem;
            z-index: 2;
        }

        .puzzle-piece::before {
            content: '';
            position: absolute;
            top: -150%; left: -150%; width: 400%; height: 400%;
            background: linear-gradient(115deg, transparent 40%, rgba(79, 195, 255, 0.3) 50%, transparent 60%);
            animation: shimmer 4s infinite linear;
        }

        @keyframes shimmer {
            0% { transform: translate(-30%, -30%); }
            100% { transform: translate(30%, 30%); }
        }

        .puzzle-piece.revealed {
            transform: scale(0.85) translateY(-20px);
            opacity: 0;
            pointer-events: none;
        }

        /* Панель с вопросами */
        #questionPanel {
            width: min(630px, 100%);
            background: var(--panel);
            color: #222;
            border-radius: 24px;
            border: 2px solid var(--accent);
            box-shadow: 0 0 30px rgba(255,140,0,.25), var(--shadow);
            padding: 24px;
            position: relative;
        }

        #questionHead { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-weight: 900; }
        #questionHead .badge { background: #fff3e0; border: 1px solid #ffcc80; color: #e65100; border-radius: 999px; padding: 8px 14px; }
        #questionHead .prog { color: #666; }
        #q { font-size: 18px; line-height: 1.4; text-align: center; margin-bottom: 20px; text-wrap: pretty; }
        #q img, #q svg { max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto 10px; display: block; }
        
        #answerRow { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        #ansInput { width: min(240px, 100%); font-size: 18px; padding: 12px 16px; border-radius: 14px; border: 2px solid #ddd; outline: none; text-align: center; }
        #ansInput:focus { border-color: var(--accent); }
        
        button { border: none; border-radius: 14px; padding: 12px 24px; font-size: 17px; font-weight: 900; cursor: pointer; transition: 0.2s; box-shadow: 0 8px 18px rgba(0,0,0,.16); }
        #attackBtn { background: var(--accent); color: #fff; }
        #attackBtn:hover { filter: brightness(1.1); transform: translateY(-2px); }
        #nextBtn { display: none; background: #26334f; color: #fff; }
        
        #msg { margin-top: 14px; min-height: 24px; text-align: center; font-weight: 900; }

        /* Окно победы */
        #finishOverlay {
            position: fixed; inset: 0; z-index: 50; display: none; align-items: center; justify-content: center;
            background: rgba(0,0,0,.7); backdrop-filter: blur(8px); padding: 16px;
        }
        #finishCard {
            width: min(600px, 100%); background: #091018; border: 2px solid #57ff9a; border-radius: 28px;
            box-shadow: 0 0 40px rgba(87,255,154,.3), var(--shadow); padding: 36px 24px; text-align: center;
        }
        #finishTitle { font-size: 36px; font-weight: 900; color: #57ff9a; margin-bottom: 12px; }
        #finishText { font-size: 18px; color: #ccc; margin-bottom: 24px; }
        #restartBtn { background: #57ff9a; color: #000; font-size: 20px; }

    </style>
</head>
<body>

<div id="layout">
    <h1>Открой послание</h1>
    
    <div id="puzzle-wrapper">
        <div id="puzzleContainer">
            </div>
    </div>

    <div id="questionPanel">
        <div id="questionHead">
            <div class="badge" id="questionBadge">Задание 1</div>
            <div class="prog" id="questionProgress">1 / 10</div>
        </div>
        <div id="q"></div>
        <div id="answerRow">
            <input id="ansInput" type="text" autocomplete="off" placeholder="Ваш ответ...">
            <button id="attackBtn" type="button">Ответить</button>
            <button id="nextBtn" type="button">Следующее задание →</button>
        </div>
        <div id="msg"></div>
    </div>
</div>

<div id="finishOverlay">
    <div id="finishCard">
        <div id="finishTitle">Молодец!</div>
        <div id="finishText">Картинка полностью открыта.</div>
        <button id="restartBtn" type="button">Смотреть снова</button>
    </div>
</div>

<script>
/*__CONFIG_DATA__*/
(function(){
    const cfg = window.__MOTIVATION_CFG__ || {};
    const questions = Array.isArray(cfg.questions) ? cfg.questions : [];
    const total = questions.length || 1;
    const $ = id => document.getElementById(id);
    let currentIndex = 0;

    function norm(v){ return String(v == null ? '' : v).trim().replace(',', '.').toLowerCase(); }
    function typeset(){ if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$('q')]).catch(()=>{}); }
    function setMessage(text, color){ $('msg').textContent = text || ''; $('msg').style.color = color || '#333'; }

    // Загрузка картинки и расчет сетки пазла
    function initPuzzle() {
        const img = new Image();
        img.src = cfg.image || ''; // Сюда подставится base64 из генератора
        
        img.onload = () => {
            const container = $('puzzleContainer');
            // Устанавливаем точные пропорции контейнера по картинке (ширина / высота)
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            container.style.aspectRatio = aspectRatio;
            container.style.backgroundImage = 'url("' + img.src + '")';
            
            // Расчет идеальной сетки
            let cols = Math.ceil(Math.sqrt(total));
            let rows = Math.ceil(total / cols);
            
            container.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
            container.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
            
            // Создаем N пазлов
            for (let i = 0; i < total; i++) {
                let piece = document.createElement('div');
                piece.className = 'puzzle-piece';
                piece.id = 'piece-' + i;
                
                // Если элементов меньше, чем ячеек в сетке, заставляем последний пазл растянуться
                let cellsInLastRow = total % cols;
                if (i === total - 1 && cellsInLastRow !== 0) {
                    let span = cols - cellsInLastRow + 1;
                    piece.style.gridColumn = 'span ' + span;
                }
                
                container.appendChild(piece);
            }
        };

        // Если картинки нет
        img.onerror = () => {
            $('puzzleContainer').innerHTML = '<div style="color:#fff; padding:20px; text-align:center">Изображение не загружено</div>';
        }
    }

    function showQuestion(){
        if(currentIndex >= total){ finishGame(); return; }
        const q = questions[currentIndex] || {};
        $('questionBadge').textContent = 'Задание ' + (currentIndex + 1);
        $('questionProgress').textContent = (currentIndex + 1) + ' / ' + total;
        $('q').innerHTML = String(q.prompt || '').replace(/\\s+([.,!?;:])/g, '$1');
        
        $('ansInput').value = '';
        $('ansInput').readOnly = false;
        $('attackBtn').style.display = 'inline-block';
        $('nextBtn').style.display = 'none';
        setMessage('');
        typeset();
        setTimeout(()=> $('ansInput').focus(), 50);
    }

    function checkAnswer(){
        const raw = $('ansInput').value;
        if(!String(raw).trim()) return;
        
        $('attackBtn').disabled = true;
        $('ansInput').readOnly = true;
        const q = questions[currentIndex] || {};
        const answers = (q.accepts || []).map(norm);
        
        if(answers.includes(norm(raw))){
            // Правильно - убираем пазл
            setMessage('✅ Верно! Открываем фрагмент...', '#17834a');
            let piece = $('piece-' + currentIndex);
            if(piece) piece.classList.add('revealed');
            
            setTimeout(() => {
                $('attackBtn').disabled = false;
                $('attackBtn').style.display = 'none';
                $('nextBtn').style.display = 'inline-block';
                
                if(currentIndex >= total - 1) {
                    $('nextBtn').textContent = 'Посмотреть послание';
                }
            }, 600);
        } else {
            // Ошибка
            $('attackBtn').disabled = false;
            $('ansInput').readOnly = false;
            let txt = '❌ Ошибка. Попробуй еще раз!';
            setMessage(txt, '#c62828');
            $('ansInput').focus();
        }
    }

    function finishGame(){
        $('questionPanel').style.display = 'none';
        $('puzzle-wrapper').style.border = '2px solid #57ff9a';
        $('puzzle-wrapper').style.boxShadow = '0 0 50px rgba(87,255,154,.4)';
        setTimeout(() => {
            $('finishOverlay').style.display = 'flex';
        }, 1500);
    }

    $('attackBtn').addEventListener('click', checkAnswer);
    $('ansInput').addEventListener('keydown', e => { 
        if(e.key === 'Enter' && $('attackBtn').style.display !== 'none' && !$('attackBtn').disabled) { 
            checkAnswer(); 
        } 
    });
    $('nextBtn').addEventListener('click', () => {
        currentIndex++;
        showQuestion();
    });
    $('restartBtn').addEventListener('click', () => {
        $('finishOverlay').style.display = 'none';
    });

    initPuzzle();
    showQuestion();
})();
<\/script>
</body>
</html>`;