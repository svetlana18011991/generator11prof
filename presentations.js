// ==========================================
// АВТОРСКИЙ СТИЛЬ 1 (Оранжевый неон)
// ==========================================
function generatePresentation1() {
    let teacherName = document.getElementById('teacher-name').value.trim();
    let authorLine = "";
    if (document.getElementById('toggle-signature').checked && teacherName) {
        let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
        authorLine = `Вариант ${verb}: ${teacherName}`;
    }

    let topicsList = window.selectedBlockTitles.map(t => `<li style="margin-bottom: 10px;">${t}</li>`).join('');
    
    let taskSlides = window.currentGeneratedTasks.map((t, i) => `
        <div class="slide task-slide" style="background-image: url('${window.ASSETS_URL}p2.jpg')">
            <div class="header-plate" style="position: absolute; top: calc(15% - 107px); left: 70%; transform: translateX(-50%); width: calc(351px * 0.64); height: calc(220px * 0.64); background: url('${window.ASSETS_URL}p3.jpg') center/100% 100% no-repeat; display: flex; justify-content: center; align-items: center; z-index: 30;">
                <h3 style="font-family: 'Caveat', cursive; font-size: calc(39px * 0.64); color: #333; margin: 0; padding-bottom: 5px;">Задание ${i+1}</h3>
            </div>
            
            <div class="task-right-side" style="position: absolute; right: 5%; top: 15%; bottom: 15%; width: 50%; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 15px; box-shadow: 0 0 25px #ff8c00, inset 0 0 15px #ff8c00; border: 2px solid #ff8c00; overflow: hidden; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    ${t.svg ? `<div style="margin-bottom: 15px; display: flex; justify-content: center; align-items: center; width: 100%; flex-shrink: 1; min-height: 0;" class="svg-wrapper">${t.svg}</div>` : ""}
                    <div class="task-text" style="margin-bottom: 20px; text-align: center; color: #333; width: 100%; flex-shrink: 1; overflow-y: auto;">${t.text}</div>
                    <div class="pres-check-zone" style="display: flex; gap: 15px; justify-content: center; align-items: center; width: 100%; flex-wrap: wrap; flex-shrink: 0;">
                        <input type="text" class="pres-input" placeholder="Ответ..." id="ans-${i}" style="font-size: 1.1em; padding: 12px 20px; width: 180px; border-radius: 10px; border: 2px solid #ccc; text-align: center; outline: none;">
                        <button class="pres-btn" onclick="submitTask(${i}, '${t.answer}')" style="font-size: 1.1em; padding: 12px 30px; border-radius: 10px; border: none; background: #ff8c00; color: white; cursor: pointer; font-weight: bold;">ОК</button>
                        <button class="btn-settings" style="background: #fff3e0; color: #e65100; border: 1px solid #ffcc80; font-size: 20px; padding: 8px 12px; border-radius: 8px; cursor: pointer;" onclick="event.stopPropagation(); window.toggleCanvas('pres-${i}')" title="Открыть черновик">✏️</button>
                    </div>
                </div>
            </div>

            <div id="draw-wrapper-pres-${i}" style="display:none; position: absolute; left: 5%; top: 15%; width: 40%; height: 70%; background: rgba(255,255,255,0.95); border: 2px solid #ff8c00; border-radius: 15px; padding: 20px; box-shadow: 0 0 25px rgba(0,0,0,0.2); box-sizing: border-box; z-index: 20;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 10px; background: #e3f2fd; padding: 8px 15px; border-radius: 8px; border: 1px solid #bbdefb; color: #333;">
                    <button onclick="window.setTool('pres-${i}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                    <button onclick="window.setTool('pres-${i}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                    <select id="tool-select-pres-${i}" onchange="window.setTool('pres-${i}', this.value)" style="background: #fff; border: 1px solid #90caf9; border-radius: 4px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #003399; font-weight: 500;">
                        <option value="" disabled selected hidden>🔺 Фигуры</option>
                        <option value="line">📏 Прямая</option>
                        <option value="vector">↗️ Вектор</option>
                        <option value="circle">⭕ Окружность</option>
                        <option value="triangle">🔺 Треугольник</option>
                        <option value="cylinder">🛢️ Цилиндр</option>
                        <option value="cone">🍦 Конус</option>
                        <option value="sphere">🔮 Сфера</option>
                    </select>
                    <input type="color" id="color-pres-${i}" value="#003399" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;">
                    <input type="range" id="size-pres-${i}" min="1" max="15" value="3" style="cursor:pointer; width: 80px;">
                    <button onclick="window.setTool('pres-${i}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                    <div style="flex-grow:1;"></div>
                    <button onclick="window.clearCanvas('pres-${i}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                    <input type="hidden" id="tool-pres-${i}" value="pen">
                </div>
                <div style="background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #d2e3f2 1px, transparent 1px), linear-gradient(to bottom, #d2e3f2 1px, transparent 1px); border: 2px solid #bbdefb; border-radius: 8px; overflow: hidden; height: calc(100% - 60px); min-height: 250px;"><canvas id="canvas-pres-${i}" style="display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
            </div>
            <div class="pres-footer" style="position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555;">Шкатулка математических интерактивов</div>
        </div>
    `).join('');

    let hiddenTheories = window.currentGeneratedTasks.map((t, i) => `<div id="theory-pres-${i}" style="display:none;">${encodeURIComponent(t.theory)}</div>`).join('');
    generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, "Презентация_Урока_Стиль1.html", 'p1.jpg', 'p2.jpg', '#ff8c00');
}

// ==========================================
// АВТОРСКИЙ СТИЛЬ 2 (Розовый неон)
// ==========================================
function generatePresentation2() {
    let teacherName = document.getElementById('teacher-name').value.trim();
    let authorLine = "";
    if (document.getElementById('toggle-signature').checked && teacherName) {
        let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
        authorLine = `Вариант ${verb}: ${teacherName}`;
    }

    let topicsList = window.selectedBlockTitles.map(t => `<li style="margin-bottom: 10px;">${t}</li>`).join('');
    
    let taskSlides = window.currentGeneratedTasks.map((t, i) => `
        <div class="slide task-slide" style="background-image: url('${window.ASSETS_URL}f2.png')">
            <div class="header-plate" style="position: absolute; top: calc(15% - 107px); left: 70%; transform: translateX(-50%); width: calc(351px * 0.64); height: calc(220px * 0.64); background: url('${window.ASSETS_URL}f4.png') center/100% 100% no-repeat; display: flex; justify-content: center; align-items: center; z-index: 30;">
                <h3 style="font-family: 'Caveat', cursive; font-size: calc(39px * 0.64); color: #333; margin: 0; padding-bottom: 5px;">Задание ${i+1}</h3>
            </div>
            
            <div class="task-right-side" style="position: absolute; right: 5%; top: 15%; bottom: 15%; width: 50%; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 20px; box-shadow: 0 0 25px #ff4081, inset 0 0 15px #ff4081; border: 2px solid #ff4081; overflow: hidden; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    ${t.svg ? `<div style="margin-bottom: 15px; display: flex; justify-content: center; align-items: center; width: 100%; flex-shrink: 1; min-height: 0;" class="svg-wrapper">${t.svg}</div>` : ""}
                    <div class="task-text" style="margin-bottom: 20px; text-align: center; color: #333; width: 100%; flex-shrink: 1; overflow-y: auto;">${t.text}</div>
                    <div class="pres-check-zone" style="display: flex; gap: 15px; justify-content: center; align-items: center; width: 100%; flex-wrap: wrap; flex-shrink: 0;">
                        <input type="text" class="pres-input" placeholder="Ответ..." id="ans-${i}" style="font-size: 1.1em; padding: 12px 20px; width: 180px; border-radius: 12px; border: 2px solid #f8bbd0; text-align: center; outline: none; color: #e91e63;">
                        <button class="pres-btn" onclick="submitTask(${i}, '${t.answer}')" style="font-size: 1.1em; padding: 12px 30px; border-radius: 12px; border: none; background: #ff4081; color: white; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(255,64,129,0.3);">ОК</button>
                        <button class="btn-settings" style="background: #fce4ec; color: #d81b60; border: 1px solid #f8bbd0; font-size: 20px; padding: 8px 12px; border-radius: 10px; cursor: pointer;" onclick="event.stopPropagation(); window.toggleCanvas('pres-${i}')" title="Открыть черновик">✏️</button>
                    </div>
                </div>
            </div>

            <div id="draw-wrapper-pres-${i}" style="display:none; position: absolute; left: 5%; top: 15%; width: 40%; height: 70%; background: rgba(255,255,255,0.95); border: 2px solid #ff4081; border-radius: 20px; padding: 20px; box-shadow: 0 15px 40px rgba(255,64,129,0.15); box-sizing: border-box; z-index: 20;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 10px; background: #fce4ec; padding: 8px 15px; border-radius: 12px; border: 1px solid #f8bbd0; color: #333;">
                    <button onclick="window.setTool('pres-${i}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                    <button onclick="window.setTool('pres-${i}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                    <select id="tool-select-pres-${i}" onchange="window.setTool('pres-${i}', this.value)" style="background: #fff; border: 1px solid #f48fb1; border-radius: 8px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #d81b60; font-weight: 500;">
                        <option value="" disabled selected hidden>🔺 Фигуры</option>
                        <option value="line">📏 Прямая</option>
                        <option value="vector">↗️ Вектор</option>
                        <option value="circle">⭕ Окружность</option>
                        <option value="triangle">🔺 Треугольник</option>
                        <option value="cylinder">🛢️ Цилиндр</option>
                        <option value="cone">🍦 Конус</option>
                        <option value="sphere">🔮 Сфера</option>
                    </select>
                    <input type="color" id="color-pres-${i}" value="#d81b60" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;">
                    <input type="range" id="size-pres-${i}" min="1" max="15" value="3" style="cursor:pointer; width: 80px;">
                    <button onclick="window.setTool('pres-${i}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                    <div style="flex-grow:1;"></div>
                    <button onclick="window.clearCanvas('pres-${i}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                    <input type="hidden" id="tool-pres-${i}" value="pen">
                </div>
                <div style="background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #fce4ec 1px, transparent 1px), linear-gradient(to bottom, #fce4ec 1px, transparent 1px); border: 2px solid #f8bbd0; border-radius: 12px; overflow: hidden; height: calc(100% - 60px); min-height: 250px;"><canvas id="canvas-pres-${i}" style="display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
            </div>
            <div class="pres-footer" style="position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555;">Шкатулка математических интерактивов</div>
        </div>
    `).join('');

    let hiddenTheories = window.currentGeneratedTasks.map((t, i) => `<div id="theory-pres-${i}" style="display:none;">${encodeURIComponent(t.theory)}</div>`).join('');
    generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, "Презентация_Урока_Стиль2.html", 'f1.png', 'f2.png', '#ff4081');
}

// ==========================================
// АВТОРСКИЙ СТИЛЬ 3 (Фиолетовый неон)
// ==========================================
function generatePresentation3() {
    let teacherName = document.getElementById('teacher-name').value.trim();
    let authorLine = "";
    if (document.getElementById('toggle-signature').checked && teacherName) {
        let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
        authorLine = `Вариант ${verb}: ${teacherName}`;
    }

    let topicsList = window.selectedBlockTitles.map(t => `<li style="margin-bottom: 10px;">${t}</li>`).join('');
    
    let taskSlides = window.currentGeneratedTasks.map((t, i) => `
        <div class="slide task-slide" style="background-image: url('${window.ASSETS_URL}s1.png')">
            <div class="header-plate" style="position: absolute; top: calc(15% - 107px); left: 70%; transform: translateX(-50%); width: calc(351px * 0.64); height: calc(220px * 0.64); background: url('${window.ASSETS_URL}f4.png') center/100% 100% no-repeat; display: flex; justify-content: center; align-items: center; z-index: 30;">
                <h3 style="font-family: 'Caveat', cursive; font-size: calc(39px * 0.64); color: #333; margin: 0; padding-bottom: 5px;">Задание ${i+1}</h3>
            </div>
            
            <div class="task-right-side" style="position: absolute; right: 5%; top: 15%; bottom: 15%; width: 50%; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 20px; box-shadow: 0 0 25px #9c27b0, inset 0 0 15px #9c27b0; border: 2px solid #9c27b0; overflow: hidden; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    ${t.svg ? `<div style="margin-bottom: 15px; display: flex; justify-content: center; align-items: center; width: 100%; flex-shrink: 1; min-height: 0;" class="svg-wrapper">${t.svg}</div>` : ""}
                    <div class="task-text" style="margin-bottom: 20px; text-align: center; color: #333; width: 100%; flex-shrink: 1; overflow-y: auto;">${t.text}</div>
                    <div class="pres-check-zone" style="display: flex; gap: 15px; justify-content: center; align-items: center; width: 100%; flex-wrap: wrap; flex-shrink: 0;">
                        <input type="text" class="pres-input" placeholder="Ответ..." id="ans-${i}" style="font-size: 1.1em; padding: 12px 20px; width: 180px; border-radius: 12px; border: 2px solid #e1bee7; text-align: center; outline: none; color: #7b1fa2;">
                        <button class="pres-btn" onclick="submitTask(${i}, '${t.answer}')" style="font-size: 1.1em; padding: 12px 30px; border-radius: 12px; border: none; background: #9c27b0; color: white; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(156,39,176,0.3);">ОК</button>
                        <button class="btn-settings" style="background: #f3e5f5; color: #7b1fa2; border: 1px solid #e1bee7; font-size: 20px; padding: 8px 12px; border-radius: 10px; cursor: pointer;" onclick="event.stopPropagation(); window.toggleCanvas('pres-${i}')" title="Открыть черновик">✏️</button>
                    </div>
                </div>
            </div>

            <div id="draw-wrapper-pres-${i}" style="display:none; position: absolute; left: 5%; top: 15%; width: 40%; height: 70%; background: rgba(255,255,255,0.95); border: 2px solid #9c27b0; border-radius: 20px; padding: 20px; box-shadow: 0 15px 40px rgba(156,39,176,0.15); box-sizing: border-box; z-index: 20;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 10px; background: #f3e5f5; padding: 8px 15px; border-radius: 12px; border: 1px solid #e1bee7; color: #333;">
                    <button onclick="window.setTool('pres-${i}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                    <button onclick="window.setTool('pres-${i}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                    <select id="tool-select-pres-${i}" onchange="window.setTool('pres-${i}', this.value)" style="background: #fff; border: 1px solid #ce93d8; border-radius: 8px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #7b1fa2; font-weight: 500;">
                        <option value="" disabled selected hidden>🔺 Фигуры</option>
                        <option value="line">📏 Прямая</option>
                        <option value="vector">↗️ Вектор</option>
                        <option value="circle">⭕ Окружность</option>
                        <option value="triangle">🔺 Треугольник</option>
                        <option value="cylinder">🛢️ Цилиндр</option>
                        <option value="cone">🍦 Конус</option>
                        <option value="sphere">🔮 Сфера</option>
                    </select>
                    <input type="color" id="color-pres-${i}" value="#7b1fa2" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;">
                    <input type="range" id="size-pres-${i}" min="1" max="15" value="3" style="cursor:pointer; width: 80px;">
                    <button onclick="window.setTool('pres-${i}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                    <div style="flex-grow:1;"></div>
                    <button onclick="window.clearCanvas('pres-${i}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                    <input type="hidden" id="tool-pres-${i}" value="pen">
                </div>
                <div style="background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #f3e5f5 1px, transparent 1px), linear-gradient(to bottom, #f3e5f5 1px, transparent 1px); border: 2px solid #e1bee7; border-radius: 12px; overflow: hidden; height: calc(100% - 60px); min-height: 250px;"><canvas id="canvas-pres-${i}" style="display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
            </div>
            <div class="pres-footer" style="position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555;">Шкатулка математических интерактивов</div>
        </div>
    `).join('');

    let hiddenTheories = window.currentGeneratedTasks.map((t, i) => `<div id="theory-pres-${i}" style="display:none;">${encodeURIComponent(t.theory)}</div>`).join('');
    generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, "Презентация_Урока_Стиль3.html", 's2.png', 's1.png', '#9c27b0');
}

// ==========================================
// ОБЩИЙ СБОРЩИК ПРЕЗЕНТАЦИЙ (ДЛЯ ЛЮБОГО СТИЛЯ)
// ==========================================
function generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, fileName, bgTitle, bgMain, accentColor) {
    let fullHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Презентация урока</title>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">
    <script>window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };${window.SCRIPT_END}
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">${window.SCRIPT_END}
    <style>
        body, html { margin: 0; padding: 0; overflow: hidden; font-family: 'Segoe UI', sans-serif; }
        .slide { width: 100vw; height: 100vh; background-size: cover; background-position: center; display: none; flex-direction: column; align-items: center; justify-content: center; position: relative; padding: 50px; box-sizing: border-box; }
        .slide.active { display: flex; }
        .title-box { background: rgba(255,255,255,0.95); padding: 40px 60px; border-radius: 20px; border: 3px solid ${accentColor}; text-align: center; max-width: 900px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
        .topics-list { text-align: left; margin: 20px 0; font-size: 1.3em; color: #333; line-height: 1.4; list-style-type: disc; padding-left: 20px;}
        .nav-btns { position: fixed; bottom: 40px; right: 70px; display: flex; gap: 20px; z-index: 100; }
        .nav-btn { background: #333; color: white; border: none; padding: 15px 35px; border-radius: 50px; cursor: pointer; font-size: 1.3em; opacity: 0.85; transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .nav-btn:hover { opacity: 1; background: ${accentColor}; transform: translateY(-2px); }
        .pres-btn:hover { filter: brightness(1.1); }
        .results-table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 1.2em; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .results-table th, .results-table td { padding: 15px; border-bottom: 1px solid #ddd; text-align: center; }
        .results-table th { background: #f5f5f5; color: #333; }
        .row-correct { background-color: #e8f5e9; color: #2e7d32; }
        .row-incorrect { background-color: #ffebee; color: #c62828; }
        .pres-footer { position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555; }
        .logo-small { height: 50px; vertical-align: middle; margin-right: 15px; }
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
        .modal-box { background: #fff; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto; border-radius: 12px; border: 2px solid ${accentColor}; box-shadow: 0 10px 30px rgba(0,0,0,0.3); padding: 30px; position: relative; text-align: left; font-size: 18px;}
        .close-btn { position: absolute; top: 15px; right: 20px; font-size: 32px; line-height: 1; cursor: pointer; color: #888; transition: 0.2s; }
        .close-btn:hover { color: ${accentColor}; }
        .help-btn { background: #e3f2fd; color: #003399; border: 1px solid #003399; padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.2s; }
        .help-btn:hover { background: #003399; color: #fff; }
        
        .task-text { font-size: 1.2em; line-height: 1.25; }
        .svg-wrapper svg {
            max-width: 100% !important;
            max-height: 38vh !important;
            width: auto !important;
            height: auto !important;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="slide active" style="background-image: url('${window.ASSETS_URL}${bgTitle}')">
        <div class="title-box" onclick="event.stopPropagation();">
            <h1 style="color:#003399; margin:0; font-size: 3em; border-bottom: 3px solid ${accentColor}; padding-bottom: 20px;">Тренировочный вариант</h1>
            <ul class="topics-list">${topicsList}</ul>
            <div style="font-family:'Caveat'; font-size:35px; color:#003399; margin-top:30px;">${authorLine}</div>
            <div style="margin-top:40px; font-size: 1.2em; color: #555; font-style: italic;">
                <img src="${window.ASSETS_URL}logo.png" class="logo-small" onerror="this.style.display='none'"> 
                Шкатулка математических интерактивов
            </div>
        </div>
        <div class="nav-btns" id="start-nav"><button class="nav-btn" onclick="event.stopPropagation(); nextSlide()">Начать →</button></div>
    </div>

    ${taskSlides}

    <div class="slide" id="results-slide" style="background-image: url('${window.ASSETS_URL}${bgMain}')">
        <div class="title-box" style="padding: 40px; max-width: 1100px; width: 95%; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation();">
            <h2 style="font-size:3.5em; color:#4CAF50; margin:0;">Спасибо за работу!</h2>
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Задание</th>
                        <th>Ваш ответ</th>
                        <th>Верный ответ</th>
                        <th>Время</th>
                        <th>Разбор</th>
                    </tr>
                </thead>
                <tbody id="results-tbody"></tbody>
            </table>
            <button class="nav-btn" style="margin-top:30px; font-size: 1.3em; padding: 15px 40px; position: static;" onclick="event.stopPropagation(); location.reload()">Начать сначала</button>
        </div>
        <div class="pres-footer">Шкатулка математических интерактивов</div>
    </div>

    <div id="hidden-theories-container">${hiddenTheories}</div>

    <div id="modal-overlay" class="modal-overlay" onclick="if(event.target===this) document.getElementById('modal-overlay').style.display='none'">
        <div class="modal-box">
            <div class="close-btn" onclick="document.getElementById('modal-overlay').style.display='none'">&times;</div>
            <div id="modal-content-box"></div>
        </div>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        let userResults = [];
        let slideStartTime = Date.now();
        
        function showSlide(idx) {
            slides.forEach(s => s.classList.remove('active'));
            slides[idx].classList.add('active');
            slideStartTime = Date.now();
            if (idx === slides.length - 1) { renderResults(); }
        }

        function nextSlide() { if(currentSlide < slides.length - 1) showSlide(++currentSlide); }

        function submitTask(idx, correctAns) {
            let userAns = document.getElementById('ans-'+idx).value.trim().replace(',', '.');
            let timeSpent = Math.round((Date.now() - slideStartTime) / 1000);
            userResults.push({ taskNum: idx + 1, userAns: userAns, correctAns: correctAns, time: timeSpent });
            nextSlide();
        }

        function renderResults() {
            let tbody = document.getElementById('results-tbody');
            let html = '';
            userResults.forEach((res, idx) => {
                let isCorrect = (res.userAns === res.correctAns);
                let rowClass = isCorrect ? 'row-correct' : 'row-incorrect';
                let displayAns = res.userAns === "" ? "—" : res.userAns;
                html += \`<tr class="\${rowClass}">
                    <td>\${res.taskNum}</td>
                    <td>\${displayAns}</td>
                    <td>\${res.correctAns}</td>
                    <td>\${res.time} сек.</td>
                    <td><button class="help-btn" onclick="window.openTheoryModalLocal('theory-pres-\${idx}')">Смотреть</button></td>
                </tr>\`;
            });
            tbody.innerHTML = html;
        }

        function openTheoryModalLocal(dataId) {
            let el = document.getElementById(dataId);
            if(el) {
                document.getElementById('modal-content-box').innerHTML = decodeURIComponent(el.textContent);
                document.getElementById('modal-overlay').style.display = 'flex';
                if (window.MathJax) MathJax.typesetPromise([document.getElementById('modal-overlay')]);
            }
        }

        window.onclick = function() { if(currentSlide < slides.length - 1) showSlide(++currentSlide); };
        ${window.CANVAS_LOGIC_SCRIPT}
    ${window.SCRIPT_END}
</body>
</html>`;

    let blob = new Blob([fullHTML], { type: "text/html;charset=utf-8" });
    let a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(a.href);
    document.getElementById('pres-modal').style.display = 'none';
}
