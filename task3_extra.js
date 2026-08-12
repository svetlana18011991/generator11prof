(function() {
    window.extraDatabase = window.extraDatabase || {};

    // ВАЖНО: z1/z2 уже заняты в игре, а f1-f4 — оформлением презентации.
    // Поэтому чертежи дополнительных прототипов 1 и 2 используют уникальные имена:
    // task3_z1.png ... task3_z6.png и task3_f1.png ... task3_f6.png.
    const TASK3_ASSET_VERSION = 'task3-extra-20260718-4';

    function task3ExtraAssetUrl(fileName) {
        try {
            if (window.EMBEDDED_ASSETS && window.EMBEDDED_ASSETS[fileName]) {
                return window.EMBEDDED_ASSETS[fileName];
            }
            const base = (typeof document !== 'undefined' && document.baseURI)
                ? document.baseURI
                : ((typeof location !== 'undefined' && location.href) ? location.href : '');
            const url = base ? new URL(fileName, base).href : fileName;
            const separator = url.includes('?') ? '&' : '?';
            return url + separator + 'v=' + encodeURIComponent(TASK3_ASSET_VERSION);
        } catch (e) {
            return fileName;
        }
    }

    function task3ExtraEscape(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // Поддерживает несколько безопасных имён для одного файла.
    // При ошибке загрузки пробует следующий адрес; в конце показывает понятное сообщение.
    function task3ExtraImage(fileNames, widthPx = 330, altText = 'Чертёж к заданию') {
        const names = Array.isArray(fileNames) ? fileNames : [fileNames];
        const sources = names.map(task3ExtraAssetUrl);
        const encodedSources = task3ExtraEscape(JSON.stringify(sources));
        const src = task3ExtraEscape(sources[0] || '');
        const alt = task3ExtraEscape(altText);
        const missing = task3ExtraEscape('Не найден файл: ' + names.join(' или '));
        return `<span class="task3-extra-image-wrap" style="display:flex;align-items:center;justify-content:center;width:100%;min-height:130px;">` +
            `<img src="${src}" alt="${alt}" data-task3-sources="${encodedSources}" data-task3-index="0" ` +
            `loading="eager" decoding="async" ` +
            `onerror="(function(img){var a=[];try{a=JSON.parse(img.dataset.task3Sources||'[]')}catch(e){};var i=(parseInt(img.dataset.task3Index||'0',10)+1);if(i<a.length){img.dataset.task3Index=String(i);img.src=a[i];return;}var p=img.parentNode;if(p){p.innerHTML='<div style=&quot;border:2px dashed #d9534f;border-radius:10px;padding:14px;color:#a12622;background:#fff7f7;font:600 14px/1.35 system-ui;text-align:center;max-width:320px;&quot;>${missing}</div>';}})(this)" ` +
            `style="display:block;width:${widthPx}px;max-width:100%;height:auto;object-fit:contain;margin:0 auto;">` +
            `</span>`;
    }

    const task3SvgAttrs = `fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
    const task3SvgDash = `fill="none" stroke="black" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7 6"`;

    // Простые SVG без transform/clipPath — по той же устойчивой схеме, что в основном task3.js.
    const task3ExtraCube = `<svg width="250" height="205" viewBox="0 0 250 205" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path ${task3SvgAttrs} d="M35 170 L165 170 L165 45 L35 45 Z M75 135 L205 135 L205 10 L75 10 Z M35 170 L75 135 M165 170 L205 135 M165 45 L205 10 M35 45 L75 10"/>` +
        `<path ${task3SvgDash} d="M75 135 L75 10 M75 135 L205 135"/></svg>`;

    const task3ExtraLiquidCylinder = `<svg width="245" height="250" viewBox="0 0 245 250" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M42 46 L42 206 M203 46 L203 206" ${task3SvgAttrs}/>` +
        `<ellipse cx="122.5" cy="46" rx="80.5" ry="21" fill="white" stroke="black" stroke-width="2"/>` +
        `<path d="M42 130 C42 141.6 78 151 122.5 151 C167 151 203 141.6 203 130 L203 206 C203 217.6 167 227 122.5 227 C78 227 42 217.6 42 206 Z" fill="#d9d9d9" stroke="none"/>` +
        `<ellipse cx="122.5" cy="130" rx="80.5" ry="21" fill="#d9d9d9" stroke="black" stroke-width="2"/>` +
        `<path d="M42 206 C42 217.6 78 227 122.5 227 C167 227 203 217.6 203 206" ${task3SvgAttrs}/>` +
        `<path d="M42 206 C42 194.4 78 185 122.5 185 C167 185 203 194.4 203 206" ${task3SvgDash}/>` +
        `</svg>`;

    const task3ExtraTwoCylinders = `<svg width="360" height="245" viewBox="0 0 360 245" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<g><path d="M28 74 L28 202 M142 74 L142 202" ${task3SvgAttrs}/><ellipse cx="85" cy="74" rx="57" ry="15" fill="white" stroke="black" stroke-width="2"/><path d="M28 202 C28 210 53.5 217 85 217 C116.5 217 142 210 142 202" ${task3SvgAttrs}/><path d="M28 202 C28 194 53.5 187 85 187 C116.5 187 142 194 142 202" ${task3SvgDash}/></g>` +
        `<g><path d="M196 38 L196 202 M340 38 L340 202" ${task3SvgAttrs}/><ellipse cx="268" cy="38" rx="72" ry="19" fill="white" stroke="black" stroke-width="2"/><path d="M196 202 C196 212 228 220 268 220 C308 220 340 212 340 202" ${task3SvgAttrs}/><path d="M196 202 C196 192 228 184 268 184 C308 184 340 192 340 202" ${task3SvgDash}/></g>` +
        `</svg>`;

    // Прототип 8: координаты перенесены буквально из \triPrismVesselPic в исходном LaTeX.
    // Никакой перспективной "доработки": верх, уровень жидкости и дно имеют исходные точки.
    const task3ExtraTriPrismVessel = `<svg width="260" height="300" viewBox="20 30 220 270" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M40 130 L90 200 L90 280 L40 210 Z" fill="#d9d9d9" stroke="none"/>` +
        `<path d="M90 200 L220 150 L220 230 L90 280 Z" fill="#d9d9d9" stroke="none"/>` +
        `<path d="M40 130 L90 200 L220 150 Z" fill="#ededed" stroke="none"/>` +
        `<path d="M40 210 L220 230 M40 130 L220 150" ${task3SvgDash}/>` +
        `<path d="M40 50 L90 120 L220 70 Z" ${task3SvgAttrs}/>` +
        `<path d="M40 50 L40 210 M90 120 L90 280 M220 70 L220 230" ${task3SvgAttrs}/>` +
        `<path d="M40 130 L90 200 L220 150 M40 210 L90 280 L220 230" ${task3SvgAttrs}/>` +
        `</svg>`;

    const task3ExtraCylinder = `<svg width="230" height="245" viewBox="0 0 230 245" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M38 48 L38 205 M192 48 L192 205" ${task3SvgAttrs}/><ellipse cx="115" cy="48" rx="77" ry="20" fill="white" stroke="black" stroke-width="2"/>` +
        `<path d="M38 205 C38 216 72.5 225 115 225 C157.5 225 192 216 192 205" ${task3SvgAttrs}/><path d="M38 205 C38 194 72.5 185 115 185 C157.5 185 192 194 192 205" ${task3SvgDash}/></svg>`;

    const task3ExtraCone = `<svg width="240" height="255" viewBox="0 0 240 255" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M35 210 C35 221 73 230 120 230 C167 230 205 221 205 210 M35 210 L120 28 L205 210" ${task3SvgAttrs}/>` +
        `<path d="M35 210 C35 199 73 190 120 190 C167 190 205 199 205 210 M120 28 L120 210" ${task3SvgDash}/></svg>`;

    const task3ExtraSphere = `<svg width="230" height="230" viewBox="0 0 230 230" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<circle cx="115" cy="115" r="88" ${task3SvgAttrs}/><path d="M27 115 C27 93 66 76 115 76 C164 76 203 93 203 115" ${task3SvgAttrs}/><path d="M27 115 C27 137 66 154 115 154 C164 154 203 137 203 115" ${task3SvgDash}/></svg>`;

    const task3ExtraRhombusPrism = `<svg width="285" height="245" viewBox="0 0 285 245" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M28 205 L170 205 L250 160 L108 160 Z M28 60 L170 60 L250 15 L108 15 Z M28 205 L28 60 M170 205 L170 60 M250 160 L250 15 M108 160 L108 15" ${task3SvgAttrs}/>` +
        `<path d="M28 205 L250 160 M170 205 L108 160 M108 160 L108 15" ${task3SvgDash}/></svg>`;

    const task3ExtraPyramid = `<svg width="285" height="245" viewBox="0 0 285 245" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M30 205 L188 205 L255 155 L96 155 Z M142 24 L30 205 M142 24 L188 205 M142 24 L255 155" ${task3SvgAttrs}/>` +
        `<path d="M142 24 L96 155 M142 24 L142 180" ${task3SvgDash}/></svg>`;

    const task3ExtraTetra = `<svg width="250" height="235" viewBox="0 0 250 235" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M30 205 L215 190 L102 145 Z M132 22 L30 205 M132 22 L215 190" ${task3SvgAttrs}/><path d="M132 22 L102 145" ${task3SvgDash}/></svg>`;

    const task3ExtraHexPrism = `<svg width="320" height="255" viewBox="0 0 320 255" style="display:block;max-width:100%;height:auto;margin:0 auto" xmlns="http://www.w3.org/2000/svg">` +
        `<path d="M35 190 L88 215 L180 215 L235 190 L180 165 L88 165 Z M35 62 L88 87 L180 87 L235 62 L180 37 L88 37 Z M35 190 L35 62 M88 215 L88 87 M180 215 L180 87 M235 190 L235 62 M180 165 L180 37 M88 165 L88 37" ${task3SvgAttrs}/>` +
        `<path d="M88 165 L180 215 M88 215 L180 37" ${task3SvgDash}/>` +
        `<text x="77" y="235" font-family="Times New Roman" font-size="18" font-style="italic">B</text><text x="188" y="34" font-family="Times New Roman" font-size="18" font-style="italic">E₁</text>` +
        `</svg>`;

    const task3Extra = {
    "title": "Дополнительно",
    "source": "27 дополнительных прототипов. Прототип 8 восстановлен по исходным TikZ-координатам; внешние изображения уменьшены до 75%, кроме прототипа 27.",
    "prototypes": [
        {
            "desc": "Прототип 1. Площадь поверхности составного многогранника",
            "svg_code": "",
            "theory_task": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
            "theory_sol": "Рассмотрим многогранник как прямую призму толщиной $1$ с $\\Gamma$-образным основанием.<br> Площадь основания равна сумме площадей двух прямоугольников: $S_{\\mathrm{osn}}=1\\cdot3+1\\cdot1=4$.<br> Периметр основания: $P=2+1+1+2+1+3=10$.<br> Тогда площадь поверхности призмы равна $S=2S_{\\mathrm{osn}}+P\\cdot h=2\\cdot4+10\\cdot1=18$.<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "118",
                    "svg_code": ""
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "74",
                    "svg_code": ""
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "104",
                    "svg_code": ""
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "64",
                    "svg_code": ""
                },
                {
                    "text": "Найдите площадь поверхности многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "74",
                    "svg_code": ""
                }
            ]
        },
        {
            "desc": "Прототип 2. Объём составного многогранника",
            "svg_code": "",
            "theory_task": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
            "theory_sol": "Разобьём многогранник на два прямоугольных параллелепипеда.<br> Нижняя часть имеет размеры $2\\times4\\times3$, так как полная высота равна $4$, а верхняя часть имеет высоту $1$. Её объём: <br>$V_1=2\\cdot4\\cdot3=24.$<br> Верхняя часть имеет размеры $2\\times2\\times1$, её объём: <br>$V_2=2\\cdot2\\cdot1=4.$<br> Тогда объём всего многогранника: <br>$V=V_1+V_2=24+4=28.$<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "40",
                    "svg_code": ""
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "15",
                    "svg_code": ""
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "32",
                    "svg_code": ""
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "72",
                    "svg_code": ""
                },
                {
                    "text": "Найдите объём многогранника, изображённого на рисунке. Все двугранные углы многогранника прямые.",
                    "answer": "33",
                    "svg_code": ""
                }
            ]
        },
        {
            "desc": "Прототип 3. Диагональ куба и объём",
            "svg_code": "<svg width=\"300\" height=\"286.89\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 70.044 66.982\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 40 L 29 40 L 29 66.523438 L 0 66.523438 Z M 0 40 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 40 40 L 69.101562 40 L 69.101562 66.523438 L 40 66.523438 Z M 40 40 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 40 0.441406 L 69.101562 0.441406 L 69.101562 26 L 40 26 Z M 40 0.441406 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 0 0.441406 L 29 0.441406 L 29 26 L 0 26 Z M 0 0.441406 \"/></clipPath></defs><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 0.00110456 L 48.982203 0.00110456 L 48.982203 48.984879 L -0.00157218 48.984879 Z M -0.00157218 0.00110456 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 63.272272 11.22647 L 63.272272 60.210245 L 14.288497 60.210245 Z M 14.288497 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 0.00110456 L 14.288497 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 48.982203 0.00110456 L 63.272272 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 48.982203 48.984879 L 63.272272 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 48.984879 L 14.288497 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 14.288497 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 63.272272 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></svg>",
            "theory_task": "Диагональ куба равна $6\\sqrt3$. Найдите объём куба.",
            "theory_sol": "Если ребро куба равно $a$, то диагональ куба равна $d=a\\sqrt3$.<br>По условию $a\\sqrt3=6\\sqrt3$, значит $a=6$.<br>$V=a^3=6^3=216$.<br><br><b>Ответ:</b> 216",
            "tasks": [
                {
                    "text": "Диагональ куба равна $2\\sqrt3$. Найдите объём куба.",
                    "answer": "8"
                },
                {
                    "text": "Диагональ куба равна $3\\sqrt3$. Найдите объём куба.",
                    "answer": "27"
                },
                {
                    "text": "Диагональ куба равна $4\\sqrt3$. Найдите объём куба.",
                    "answer": "64"
                },
                {
                    "text": "Диагональ куба равна $5\\sqrt3$. Найдите объём куба.",
                    "answer": "125"
                },
                {
                    "text": "Диагональ куба равна $10\\sqrt3$. Найдите объём куба.",
                    "answer": "1000"
                }
            ]
        },
        {
            "desc": "Прототип 4. Площадь поверхности куба и объём",
            "svg_code": "<svg width=\"300\" height=\"286.89\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 70.044 66.982\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 40 L 29 40 L 29 66.523438 L 0 66.523438 Z M 0 40 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 40 40 L 69.101562 40 L 69.101562 66.523438 L 40 66.523438 Z M 40 40 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 40 0.441406 L 69.101562 0.441406 L 69.101562 26 L 40 26 Z M 40 0.441406 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 0 0.441406 L 29 0.441406 L 29 26 L 0 26 Z M 0 0.441406 \"/></clipPath></defs><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 0.00110456 L 48.982203 0.00110456 L 48.982203 48.984879 L -0.00157218 48.984879 Z M -0.00157218 0.00110456 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 63.272272 11.22647 L 63.272272 60.210245 L 14.288497 60.210245 Z M 14.288497 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 0.00110456 L 14.288497 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 48.982203 0.00110456 L 63.272272 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 48.982203 48.984879 L 63.272272 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 48.984879 L 14.288497 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 14.288497 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 63.272272 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></svg>",
            "theory_task": "Площадь поверхности куба равна $54$. Найдите объём куба.",
            "theory_sol": "Площадь поверхности куба: $S=6a^2$.<br> $6a^2=54$, значит $a^2=9$, $a=3$.<br>$V=a^3=3^3=27$.<br><br><b>Ответ:</b> 27",
            "tasks": [
                {
                    "text": "Площадь поверхности куба равна $24$. Найдите объём куба.",
                    "answer": "8"
                },
                {
                    "text": "Площадь поверхности куба равна $54$. Найдите объём куба.",
                    "answer": "27"
                },
                {
                    "text": "Площадь поверхности куба равна $96$. Найдите объём куба.",
                    "answer": "64"
                },
                {
                    "text": "Площадь поверхности куба равна $150$. Найдите объём куба.",
                    "answer": "125"
                },
                {
                    "text": "Площадь поверхности куба равна $216$. Найдите объём куба.",
                    "answer": "216"
                }
            ]
        },
        {
            "desc": "Прототип 5. Ребро куба по увеличению объёма",
            "svg_code": "<svg width=\"300\" height=\"286.89\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 70.044 66.982\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 40 L 29 40 L 29 66.523438 L 0 66.523438 Z M 0 40 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 40 40 L 69.101562 40 L 69.101562 66.523438 L 40 66.523438 Z M 40 40 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 40 0.441406 L 69.101562 0.441406 L 69.101562 26 L 40 26 Z M 40 0.441406 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 0 0.441406 L 29 0.441406 L 29 26 L 0 26 Z M 0 0.441406 \"/></clipPath></defs><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 0.00110456 L 48.982203 0.00110456 L 48.982203 48.984879 L -0.00157218 48.984879 Z M -0.00157218 0.00110456 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 63.272272 11.22647 L 63.272272 60.210245 L 14.288497 60.210245 Z M 14.288497 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 0.00110456 L 14.288497 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 48.982203 0.00110456 L 63.272272 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 48.982203 48.984879 L 63.272272 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.00157218 48.984879 L 14.288497 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 14.288497 60.210245 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 14.288497 11.22647 L 63.272272 11.22647 \" transform=\"matrix(0.986535, 0, 0, -0.986535, 3.341395, 63.180777)\"/></svg>",
            "theory_task": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $37$. Найдите ребро куба.",
            "theory_sol": "Пусть ребро куба равно $a$. Тогда после увеличения оно станет $a+1$.<br>Разность объёмов: $(a+1)^3-a^3=3a^2+3a+1$.<br>По условию $3a^2+3a+1=37$, значит $3a^2+3a-36=0$, $a^2+a-12=0$, откуда $a=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $7$. Найдите ребро куба.",
                    "answer": "1"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $19$. Найдите ребро куба.",
                    "answer": "2"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $37$. Найдите ребро куба.",
                    "answer": "3"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $61$. Найдите ребро куба.",
                    "answer": "4"
                },
                {
                    "text": "Если каждое ребро куба увеличить на $1$, то его объём увеличится на $91$. Найдите ребро куба.",
                    "answer": "5"
                }
            ]
        },
        {
            "desc": "Прототип 6. Вытеснение жидкости в цилиндрическом сосуде",
            "svg_code": "",
            "theory_task": "В цилиндрический сосуд налили $1200$ см$^3$ воды. Уровень воды равен $10$ см. В воду полностью погрузили деталь, и уровень воды поднялся на $4$ см. Найдите объём детали.",
            "theory_sol": "Площадь основания сосуда: $S_{\\mathrm{osn}}=\\frac{1200}{10}=120$ см$^2$.<br>Деталь вытеснила воду на высоту $4$ см, значит её объём равен<br>$V=120\\cdot4=480$ см$^3$.<br><br><b>Ответ:</b> 480",
            "tasks": [
                {
                    "text": "В цилиндрический сосуд налили $1800$ см$^3$ воды. Уровень воды равен $12$ см. После погружения детали уровень поднялся на $5$ см. Найдите объём детали.",
                    "answer": "750"
                },
                {
                    "text": "В сосуд налили $2400$ см$^3$ воды, уровень равен $15$ см. После погружения детали уровень поднялся на $3$ см. Найдите объём детали.",
                    "answer": "480"
                },
                {
                    "text": "В сосуд налили $1600$ см$^3$ воды, уровень равен $8$ см. После погружения детали уровень поднялся на $6$ см. Найдите объём детали.",
                    "answer": "1200"
                },
                {
                    "text": "В сосуд налили $2500$ см$^3$ воды, уровень равен $10$ см. После погружения детали уровень поднялся на $2{,}5$ см. Найдите объём детали.",
                    "answer": "625"
                },
                {
                    "text": "В сосуд налили $900$ см$^3$ воды, уровень равен $6$ см. После погружения детали уровень поднялся на $4$ см. Найдите объём детали.",
                    "answer": "600"
                }
            ]
        },
        {
            "desc": "Прототип 7. Переливание жидкости между цилиндрами",
            "svg_code": "<svg width=\"300\" height=\"185.95\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 121.568 75.35\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.304688 46 L 60 46 L 60 74.707031 L 0.304688 74.707031 Z M 0.304688 46 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.304688 5 L 60 5 L 60 40 L 0.304688 40 Z M 0.304688 5 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0.304688 58 L 55 58 L 55 74.707031 L 0.304688 74.707031 Z M 0.304688 58 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 48 45 L 120.832031 45 L 120.832031 74.707031 L 48 74.707031 Z M 48 45 \"/></clipPath><clipPath id=\"clip-4\"><path clip-rule=\"nonzero\" d=\"M 48 0 L 120.832031 0 L 120.832031 30 L 48 30 Z M 48 0 \"/></clipPath><clipPath id=\"clip-5\"><path clip-rule=\"nonzero\" d=\"M 54 58 L 120.832031 58 L 120.832031 74.707031 L 54 74.707031 Z M 54 58 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 22.594574 0.000528534 C 22.594574 3.235225 12.47679 5.85923 -0.0010219 5.85923 C -12.478834 5.85923 -22.592678 3.235225 -22.592678 0.000528534 C -22.592678 -3.234168 -12.478834 -5.858173 -0.0010219 -5.858173 C 12.47679 -5.858173 22.594574 -3.234168 22.594574 0.000528534 Z M 22.594574 0.000528534 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -22.592678 0.000528534 L -22.592678 41.838825 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 22.594574 0.000528534 L 22.594574 41.838825 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 22.594574 41.838825 C 22.594574 45.073521 12.47679 47.697526 -0.0010219 47.697526 C -12.478834 47.697526 -22.592678 45.073521 -22.592678 41.838825 C -22.592678 38.604128 -12.478834 35.980124 -0.0010219 35.980124 C 12.47679 35.980124 22.594574 38.604128 22.594574 41.838825 Z M 22.594574 41.838825 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -22.592678 0.000528534 C -22.592678 -3.234168 -12.478834 -5.858173 -0.0010219 -5.858173 C 12.47679 -5.858173 22.594574 -3.234168 22.594574 0.000528534 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 92.201616 0.000528534 C 92.201616 4.141413 79.24707 7.502187 63.270586 7.502187 C 47.290161 7.502187 34.339555 4.141413 34.339555 0.000528534 C 34.339555 -4.144296 47.290161 -7.50113 63.270586 -7.50113 C 79.24707 -7.50113 92.201616 -4.144296 92.201616 0.000528534 Z M 92.201616 0.000528534 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.339555 0.000528534 L 34.339555 53.575927 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 92.201616 0.000528534 L 92.201616 53.575927 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/><g clip-path=\"url(#clip-4)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 92.201616 53.575927 C 92.201616 57.716811 79.24707 61.077586 63.270586 61.077586 C 47.290161 61.077586 34.339555 57.716811 34.339555 53.575927 C 34.339555 49.431103 47.290161 46.074268 63.270586 46.074268 C 79.24707 46.074268 92.201616 49.431103 92.201616 53.575927 Z M 92.201616 53.575927 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/></g><g clip-path=\"url(#clip-5)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 34.339555 0.000528534 C 34.339555 -4.144296 47.290161 -7.50113 63.270586 -7.50113 C 79.24707 -7.50113 92.201616 -4.144296 92.201616 0.000528534 \" transform=\"matrix(0.991447, 0, 0, -0.991447, 26.063513, 63.91068)\"/></g></svg>",
            "theory_task": "В цилиндрическом сосуде уровень жидкости равен $18$ см. Эту жидкость перелили в другой цилиндрический сосуд, диаметр которого в $3$ раза больше диаметра первого. На какой высоте будет находиться уровень жидкости во втором сосуде?",
            "theory_sol": "Если диаметр увеличился в $3$ раза, то площадь основания увеличилась в $3^2=9$ раз.<br>Объём жидкости не изменился, значит высота уменьшится в $9$ раз: $h=\\frac{18}{9}=2$ см.<br><br><b>Ответ:</b> 2",
            "tasks": [
                {
                    "text": "Уровень жидкости равен $16$ см. Жидкость перелили в сосуд, диаметр которого в $2$ раза больше. Найдите новый уровень жидкости.",
                    "answer": "4"
                },
                {
                    "text": "Уровень жидкости равен $27$ см. Диаметр второго сосуда в $3$ раза больше диаметра первого. Найдите новый уровень.",
                    "answer": "3"
                },
                {
                    "text": "Уровень жидкости равен $20$ см. Диаметр второго сосуда в $2$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $45$ см. Диаметр второго сосуда в $3$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $32$ см. Диаметр второго сосуда в $4$ раза больше. Найдите новый уровень.",
                    "answer": "2"
                }
            ]
        },
        {
            "desc": "Прототип 8. Переливание между подобными треугольными призмами",
            "svg_code": "<svg width=\"300\" height=\"372.98\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 54.533 67.799\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 34 L 54.070312 34 L 54.070312 63 L 0 63 Z M 0 34 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0 13 L 54.070312 13 L 54.070312 42 L 0 42 Z M 0 13 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0 0.1875 L 54.070312 0.1875 L 54.070312 34 L 0 34 Z M 0 0.1875 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 0 13 L 54.070312 13 L 54.070312 55 L 0 55 Z M 0 13 \"/></clipPath><clipPath id=\"clip-4\"><path clip-rule=\"nonzero\" d=\"M 0 34 L 54.070312 34 L 54.070312 67.410156 L 0 67.410156 Z M 0 34 \"/></clipPath></defs><path fill-rule=\"nonzero\" fill=\"rgb(82.499695%, 82.499695%, 82.499695%)\" fill-opacity=\"1\" d=\"M 3.359375 24.59375 L 16.511719 43.007812 L 16.511719 64.054688 L 3.359375 45.636719 Z M 3.359375 24.59375 \"/><path fill-rule=\"nonzero\" fill=\"rgb(82.499695%, 82.499695%, 82.499695%)\" fill-opacity=\"1\" d=\"M 16.511719 43.007812 L 50.710938 29.855469 L 50.710938 50.898438 L 16.511719 64.054688 Z M 16.511719 43.007812 \"/><path fill-rule=\"nonzero\" fill=\"rgb(89.99939%, 89.99939%, 89.99939%)\" fill-opacity=\"1\" d=\"M 3.359375 24.59375 L 16.511719 43.007812 L 50.710938 29.855469 Z M 3.359375 24.59375 \"/><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 5.307143 -47.757732 L 53.064207 -53.06451 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 5.307143 -26.534559 L 53.064207 -31.841337 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 5.307143 -5.307447 L 18.572119 -23.8792 L 53.064207 -10.614225 Z M 5.307143 -5.307447 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 5.307143 -5.307447 L 5.307143 -47.757732 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 18.572119 -23.8792 L 18.572119 -66.333425 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 53.064207 -10.614225 L 53.064207 -53.06451 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 5.307143 -26.534559 L 18.572119 -45.106313 L 53.064207 -31.841337 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/></g><g clip-path=\"url(#clip-4)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 5.307143 -47.757732 L 18.572119 -66.333425 L 53.064207 -53.06451 \" transform=\"matrix(0.991509, 0, 0, -0.991509, -1.902706, -1.715507)\"/></g></svg>",
            "theory_task": "В сосуде формы правильной треугольной призмы уровень жидкости равен $27$ см. Жидкость перелили в сосуд такой же формы, сторона основания которого в $3$ раза больше. Найдите новый уровень жидкости.",
            "theory_sol": "Площади оснований подобных фигур относятся как квадраты коэффициента подобия.<br>Сторона основания увеличилась в $3$ раза, значит площадь основания увеличилась в $3^2=9$ раз.<br>Объём жидкости тот же, поэтому высота уровня уменьшится в $9$ раз: $27:9=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Уровень жидкости в сосуде формы правильной треугольной призмы равен $80$ см. Её перелили в сосуд такой же формы, сторона основания которого в $4$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $45$ см. Сторона основания второго подобного сосуда в $3$ раза больше. Найдите новый уровень.",
                    "answer": "5"
                },
                {
                    "text": "Уровень жидкости равен $72$ см. Сторона основания второго сосуда в $2$ раза больше. Найдите новый уровень.",
                    "answer": "18"
                },
                {
                    "text": "Уровень жидкости равен $100$ см. Сторона основания второго сосуда в $5$ раз больше. Найдите новый уровень.",
                    "answer": "4"
                },
                {
                    "text": "Уровень жидкости равен $64$ см. Сторона основания второго сосуда в $4$ раза больше. Найдите новый уровень.",
                    "answer": "4"
                }
            ]
        },
        {
            "desc": "Прототип 9. Цилиндр в правильной четырёхугольной призме",
            "svg_code": "",
            "theory_task": "Цилиндр вписан в правильную четырёхугольную призму. Радиус основания цилиндра равен $1$, высота равна $5$. Найдите площадь боковой поверхности призмы.",
            "theory_sol": "В основании призмы квадрат. Окружность радиуса $r$ вписана в квадрат, значит сторона квадрата равна $2r$.<br>При $r=1$ сторона основания равна $2$, периметр основания $P=4\\cdot2=8$.<br>$S_{\\mathrm{b}}=P\\cdot h=8\\cdot5=40$.<br><br><b>Ответ:</b> 40",
            "tasks": [
                {
                    "text": "Цилиндр вписан в правильную четырёхугольную призму. Радиус основания цилиндра равен $1$, высота равна $3$. Найдите площадь боковой поверхности призмы.",
                    "answer": "24"
                },
                {
                    "text": "Радиус основания цилиндра равен $2$, высота равна $4$. Найдите площадь боковой поверхности призмы.",
                    "answer": "64"
                },
                {
                    "text": "Радиус основания цилиндра равен $1{,}5$, высота равна $6$. Найдите площадь боковой поверхности призмы.",
                    "answer": "72"
                },
                {
                    "text": "Радиус основания цилиндра равен $2{,}5$, высота равна $2$. Найдите площадь боковой поверхности призмы.",
                    "answer": "40"
                },
                {
                    "text": "Радиус основания цилиндра равен $4$, высота равна $1{,}5$. Найдите площадь боковой поверхности призмы.",
                    "answer": "48"
                }
            ]
        },
        {
            "desc": "Прототип 10. Цилиндр в правильной шестиугольной призме",
            "svg_code": "",
            "theory_task": "Цилиндр вписан в правильную шестиугольную призму. Радиус основания цилиндра равен $\\sqrt3$, высота равна $2$. Найдите площадь боковой поверхности призмы.",
            "theory_sol": "Радиус цилиндра равен радиусу окружности, вписанной в правильный шестиугольник.<br>Для правильного шестиугольника $r=\\frac{a\\sqrt3}{2}$, где $a$ - сторона.<br>$\\sqrt3=\\frac{a\\sqrt3}{2}$, значит $a=2$, $P=6a=12$.<br>$S_{\\mathrm{b}}=P\\cdot h=12\\cdot2=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Цилиндр вписан в правильную шестиугольную призму. Радиус основания цилиндра равен $\\sqrt3$, высота равна $3$. Найдите площадь боковой поверхности призмы.",
                    "answer": "36"
                },
                {
                    "text": "Радиус основания цилиндра равен $2\\sqrt3$, высота равна $2$. Найдите площадь боковой поверхности призмы.",
                    "answer": "48"
                },
                {
                    "text": "Радиус основания цилиндра равен $3\\sqrt3$, высота равна $1$. Найдите площадь боковой поверхности призмы.",
                    "answer": "36"
                },
                {
                    "text": "Радиус основания цилиндра равен $\\sqrt3$, высота равна $5$. Найдите площадь боковой поверхности призмы.",
                    "answer": "60"
                },
                {
                    "text": "Радиус основания цилиндра равен $2\\sqrt3$, высота равна $4$. Найдите площадь боковой поверхности призмы.",
                    "answer": "96"
                }
            ]
        },
        {
            "desc": "Прототип 11. Правильная треугольная призма, вписанная в цилиндр",
            "svg_code": "",
            "theory_task": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $2\\sqrt3$, а высота равна $2$.",
            "theory_sol": "Основание призмы — правильный треугольник, вписанный в окружность радиуса $R=2\\sqrt3$. Для правильного треугольника <br>$a=\\sqrt3\\,R.$<br> Тогда <br>$a=\\sqrt3\\cdot2\\sqrt3=6,$<br> а периметр основания равен <br>$P=3a=18.$<br> Площадь боковой поверхности прямой призмы равна произведению периметра основания на высоту: <br>$S_{\\mathrm{бок}}=P\\cdot h=18\\cdot2=36.$<br><br><b>Ответ:</b> 36",
            "tasks": [
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $\\sqrt3$, а высота равна $2$.",
                    "answer": "18"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $2\\sqrt3$, а высота равна $3$.",
                    "answer": "54"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $3\\sqrt3$, а высота равна $2$.",
                    "answer": "54"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $4\\sqrt3$, а высота равна $1$.",
                    "answer": "36"
                },
                {
                    "text": "Найдите площадь боковой поверхности правильной треугольной призмы, вписанной в цилиндр, радиус основания которого равен $5\\sqrt3$, а высота равна $2$.",
                    "answer": "90"
                }
            ]
        },
        {
            "desc": "Прототип 12. Боковая поверхность цилиндра через длину окружности",
            "svg_code": "<svg width=\"300\" height=\"349.47\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 61.88 72.085\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.328125 42 L 61.433594 42 L 61.433594 71.179688 L 0.328125 71.179688 Z M 0.328125 42 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.328125 0 L 61.433594 0 L 61.433594 29 L 0.328125 29 Z M 0.328125 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0.328125 55 L 61.433594 55 L 61.433594 71.179688 L 0.328125 71.179688 Z M 0.328125 55 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 27.554466 0.00123243 C 27.554466 3.945198 15.216222 7.145468 -0.00186923 7.145468 C -15.216004 7.145468 -27.554249 3.945198 -27.554249 0.00123243 C -27.554249 -3.946689 -15.216004 -7.143003 -0.00186923 -7.143003 C 15.216222 -7.143003 27.554466 -3.946689 27.554466 0.00123243 Z M 27.554466 0.00123243 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 30.880752, 60.782467)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -27.554249 0.00123243 L -27.554249 51.023572 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 30.880752, 60.782467)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 27.554466 0.00123243 L 27.554466 51.023572 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 30.880752, 60.782467)\"/><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 27.554466 51.023572 C 27.554466 54.971493 15.216222 58.167807 -0.00186923 58.167807 C -15.216004 58.167807 -27.554249 54.971493 -27.554249 51.023572 C -27.554249 47.079606 -15.216004 43.879336 -0.00186923 43.879336 C 15.216222 43.879336 27.554466 47.079606 27.554466 51.023572 Z M 27.554466 51.023572 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 30.880752, 60.782467)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -27.554249 0.00123243 C -27.554249 -3.946689 -15.216004 -7.143003 -0.00186923 -7.143003 C 15.216222 -7.143003 27.554466 -3.946689 27.554466 0.00123243 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 30.880752, 60.782467)\"/></g></svg>",
            "theory_task": "Длина окружности основания цилиндра равна $3$, высота равна $2$. Найдите площадь боковой поверхности цилиндра.",
            "theory_sol": "Боковая поверхность цилиндра равна произведению длины окружности основания на высоту: $S_{\\mathrm{b}}=C\\cdot h$.<br>$S_{\\mathrm{b}}=3\\cdot2=6$.<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Длина окружности основания цилиндра равна $4$, высота равна $5$. Найдите площадь боковой поверхности цилиндра.",
                    "answer": "20"
                },
                {
                    "text": "Длина окружности основания равна $7$, высота равна $3$. Найдите площадь боковой поверхности.",
                    "answer": "21"
                },
                {
                    "text": "Длина окружности основания равна $2{,}5$, высота равна $8$. Найдите площадь боковой поверхности.",
                    "answer": "20"
                },
                {
                    "text": "Длина окружности основания равна $12$, высота равна $1{,}5$. Найдите площадь боковой поверхности.",
                    "answer": "18"
                },
                {
                    "text": "Длина окружности основания равна $9$, высота равна $4$. Найдите площадь боковой поверхности.",
                    "answer": "36"
                }
            ]
        },
        {
            "desc": "Прототип 13. Образующая конуса",
            "svg_code": "<svg width=\"300\" height=\"351.06\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 65.962 77.188\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.324219 47 L 65.601562 47 L 65.601562 76.382812 L 0.324219 76.382812 Z M 0.324219 47 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.324219 0 L 65.601562 0 L 65.601562 76.382812 L 0.324219 76.382812 Z M 0.324219 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0.324219 60 L 65.601562 60 L 65.601562 76.382812 L 0.324219 76.382812 Z M 0.324219 60 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 29.595903 -0.00177873 C 29.595903 3.945564 16.344673 7.142912 -0.00127355 7.142912 C -16.343273 7.142912 -29.594503 3.945564 -29.594503 -0.00177873 C -29.594503 -3.945174 -16.343273 -7.142522 -0.00127355 -7.142522 C 16.344673 -7.142522 29.595903 -3.945174 29.595903 -0.00177873 Z M 29.595903 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -29.594503 -0.00177873 L -0.00127355 63.27018 L 29.595903 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -29.594503 -0.00177873 C -29.594503 -3.945174 -16.343273 -7.142522 -0.00127355 -7.142522 C 16.344673 -7.142522 29.595903 -3.945174 29.595903 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -0.00127355 63.27018 L -0.00127355 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></svg>",
            "theory_task": "Высота конуса равна $4$, диаметр основания равен $6$. Найдите образующую конуса.",
            "theory_sol": "Радиус основания равен половине диаметра: $r=3$.<br>В осевом сечении образующая является гипотенузой прямоугольного треугольника с катетами $h$ и $r$.<br>$l=\\sqrt{4^2+3^2}=5$.<br><br><b>Ответ:</b> 5",
            "tasks": [
                {
                    "text": "Высота конуса равна $12$, диаметр основания равен $10$. Найдите образующую конуса.",
                    "answer": "13"
                },
                {
                    "text": "Высота конуса равна $8$, диаметр основания равен $12$. Найдите образующую.",
                    "answer": "10"
                },
                {
                    "text": "Высота конуса равна $15$, диаметр основания равен $16$. Найдите образующую.",
                    "answer": "17"
                },
                {
                    "text": "Высота конуса равна $24$, диаметр основания равен $14$. Найдите образующую.",
                    "answer": "25"
                },
                {
                    "text": "Высота конуса равна $6$, диаметр основания равен $16$. Найдите образующую.",
                    "answer": "10"
                }
            ]
        },
        {
            "desc": "Прототип 14. Боковая поверхность конуса через окружность основания",
            "svg_code": "<svg width=\"300\" height=\"351.06\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 65.962 77.188\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.324219 47 L 65.601562 47 L 65.601562 76.382812 L 0.324219 76.382812 Z M 0.324219 47 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.324219 0 L 65.601562 0 L 65.601562 76.382812 L 0.324219 76.382812 Z M 0.324219 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0.324219 60 L 65.601562 60 L 65.601562 76.382812 L 0.324219 76.382812 Z M 0.324219 60 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 29.595903 -0.00177873 C 29.595903 3.945564 16.344673 7.142912 -0.00127355 7.142912 C -16.343273 7.142912 -29.594503 3.945564 -29.594503 -0.00177873 C -29.594503 -3.945174 -16.343273 -7.142522 -0.00127355 -7.142522 C 16.344673 -7.142522 29.595903 -3.945174 29.595903 -0.00177873 Z M 29.595903 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -29.594503 -0.00177873 L -0.00127355 63.27018 L 29.595903 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -29.594503 -0.00177873 C -29.594503 -3.945174 -16.343273 -7.142522 -0.00127355 -7.142522 C 16.344673 -7.142522 29.595903 -3.945174 29.595903 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -0.00127355 63.27018 L -0.00127355 -0.00177873 \" transform=\"matrix(0.98959, 0, 0, -0.98959, 32.962198, 65.963084)\"/></svg>",
            "theory_task": "Длина окружности основания конуса равна $3$, образующая равна $2$. Найдите площадь боковой поверхности конуса.",
            "theory_sol": "Используем формулу площади боковой поверхности конуса $S_{\\mathrm{b}}=\\pi r l$.<br>Так как длина окружности основания $C=2\\pi r=3$, то $\\pi r=\\frac{3}{2}$.<br>Тогда $S_{\\mathrm{b}}=\\pi r l=\\frac{3}{2}\\cdot2=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Длина окружности основания конуса равна $6$, образующая равна $4$. Найдите площадь боковой поверхности.",
                    "answer": "12"
                },
                {
                    "text": "Длина окружности основания равна $10$, образующая равна $3$. Найдите площадь боковой поверхности.",
                    "answer": "15"
                },
                {
                    "text": "Длина окружности основания равна $8$, образующая равна $5$. Найдите площадь боковой поверхности.",
                    "answer": "20"
                },
                {
                    "text": "Длина окружности основания равна $12$, образующая равна $6$. Найдите площадь боковой поверхности.",
                    "answer": "36"
                },
                {
                    "text": "Длина окружности основания равна $7$, образующая равна $4$. Найдите площадь боковой поверхности.",
                    "answer": "14"
                }
            ]
        },
        {
            "desc": "Прототип 15. Площадь поверхности шара через площадь большого круга",
            "svg_code": "<svg width=\"300\" height=\"300.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 65.962 65.962\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 0 L 65.925781 0 L 65.925781 65.925781 L 0 65.925781 Z M 0 0 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0 14 L 65.925781 14 L 65.925781 45 L 0 45 Z M 0 14 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0 27 L 65.925781 27 L 65.925781 46 L 0 46 Z M 0 27 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 29.594091 0.00107406 C 29.594091 16.346423 16.344274 29.59233 -0.00107406 29.59233 C -16.346423 29.59233 -29.59233 16.346423 -29.59233 0.00107406 C -29.59233 -16.344274 -16.346423 -29.594091 -0.00107406 -29.594091 C 16.344274 -29.594091 29.594091 -16.344274 29.594091 0.00107406 Z M 29.594091 0.00107406 \" transform=\"matrix(0.999424, 0, 0, -0.999424, 32.962011, 32.962011)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -29.59233 0.00107406 C -29.59233 3.944751 -16.346423 7.141904 -0.00107406 7.141904 C 16.344274 7.141904 29.594091 3.944751 29.594091 0.00107406 \" transform=\"matrix(0.999424, 0, 0, -0.999424, 32.962011, 32.962011)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M -29.59233 0.00107406 C -29.59233 -3.946511 -16.346423 -7.143665 -0.00107406 -7.143665 C 16.344274 -7.143665 29.594091 -3.946511 29.594091 0.00107406 \" transform=\"matrix(0.999424, 0, 0, -0.999424, 32.962011, 32.962011)\"/></g></svg>",
            "theory_task": "Площадь большого круга шара равна $3$. Найдите площадь поверхности шара.",
            "theory_sol": "Площадь большого круга равна $\\pi R^2$. Площадь поверхности шара равна $4\\pi R^2$.<br>Значит, площадь поверхности шара в $4$ раза больше площади большого круга: $S=4\\cdot3=12$.<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "Площадь большого круга шара равна $5$. Найдите площадь поверхности шара.",
                    "answer": "20"
                },
                {
                    "text": "Площадь большого круга шара равна $7{,}5$. Найдите площадь поверхности шара.",
                    "answer": "30"
                },
                {
                    "text": "Площадь большого круга шара равна $12$. Найдите площадь поверхности шара.",
                    "answer": "48"
                },
                {
                    "text": "Площадь большого круга шара равна $18$. Найдите площадь поверхности шара.",
                    "answer": "72"
                },
                {
                    "text": "Площадь большого круга шара равна $25$. Найдите площадь поверхности шара.",
                    "answer": "100"
                }
            ]
        },
        {
            "desc": "Прототип 16. Куб, описанный около сферы",
            "svg_code": "",
            "theory_task": "Куб описан около сферы радиуса $2$. Найдите объём куба.",
            "theory_sol": "Если куб описан около сферы, то ребро куба равно диаметру сферы: $a=2r$.<br>При $r=2$ получаем $a=4$.<br>$V=a^3=4^3=64$.<br><br><b>Ответ:</b> 64",
            "tasks": [
                {
                    "text": "Куб описан около сферы радиуса $1$. Найдите объём куба.",
                    "answer": "8"
                },
                {
                    "text": "Куб описан около сферы радиуса $1{,}5$. Найдите объём куба.",
                    "answer": "27"
                },
                {
                    "text": "Куб описан около сферы радиуса $2$. Найдите объём куба.",
                    "answer": "64"
                },
                {
                    "text": "Куб описан около сферы радиуса $2{,}5$. Найдите объём куба.",
                    "answer": "125"
                },
                {
                    "text": "Куб описан около сферы радиуса $3$. Найдите объём куба.",
                    "answer": "216"
                }
            ]
        },
        {
            "desc": "Прототип 17. Поверхность прямой призмы с ромбом в основании",
            "svg_code": "<svg width=\"300\" height=\"281.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 74.126 69.432\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 37 L 73.261719 37 L 73.261719 68.746094 L 0 68.746094 Z M 0 37 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0 0.125 L 73.261719 0.125 L 73.261719 32 L 0 32 Z M 0 0.125 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0 43 L 73.261719 43 L 73.261719 68.746094 L 0 68.746094 Z M 0 43 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 16 43 L 57 43 L 57 68.746094 L 16 68.746094 Z M 16 43 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000127577 0.00079402 L 47.96138 0.00079402 L 67.351401 16.734864 L 19.390148 16.734864 Z M 0.000127577 0.00079402 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000127577 45.922656 L 47.96138 45.922656 L 67.351401 62.656726 L 19.390148 62.656726 Z M 0.000127577 45.922656 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000127577 0.00079402 L 0.000127577 45.922656 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 47.96138 0.00079402 L 47.96138 45.922656 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 67.351401 16.734864 L 67.351401 62.656726 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 19.390148 16.734864 L 19.390148 62.656726 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 0.000127577 0.00079402 L 67.351401 16.734864 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 47.96138 0.00079402 L 19.390148 16.734864 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 19.390148 16.734864 L 19.390148 62.656726 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></svg>",
            "theory_task": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро призмы равно $10$. Найдите площадь поверхности призмы.",
            "theory_sol": "Площадь основания ромба: $S_{\\mathrm{osn}}=\\frac{6\\cdot8}{2}=24$.<br>Сторона ромба: $a=\\sqrt{3^2+4^2}=5$, поэтому периметр основания $P=20$.<br>$S_{\\mathrm{b}}=P\\cdot h=20\\cdot10=200$.<br>$S=2S_{\\mathrm{osn}}+S_{\\mathrm{b}}=2\\cdot24+200=248$.<br><br><b>Ответ:</b> 248",
            "tasks": [
                {
                    "text": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро равно $5$. Найдите площадь поверхности призмы.",
                    "answer": "148"
                },
                {
                    "text": "Диагонали ромба равны $10$ и $24$, боковое ребро равно $3$. Найдите площадь поверхности призмы.",
                    "answer": "396"
                },
                {
                    "text": "Диагонали ромба равны $8$ и $6$, боковое ребро равно $7$. Найдите площадь поверхности призмы.",
                    "answer": "188"
                },
                {
                    "text": "Диагонали ромба равны $12$ и $16$, боковое ребро равно $4$. Найдите площадь поверхности призмы.",
                    "answer": "352"
                },
                {
                    "text": "Диагонали ромба равны $14$ и $48$, боковое ребро равно $2$. Найдите площадь поверхности призмы.",
                    "answer": "872"
                }
            ]
        },
        {
            "desc": "Прототип 18. Объём прямой призмы с ромбом в основании",
            "svg_code": "<svg width=\"300\" height=\"281.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 74.126 69.432\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0 37 L 73.261719 37 L 73.261719 68.746094 L 0 68.746094 Z M 0 37 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0 0.125 L 73.261719 0.125 L 73.261719 32 L 0 32 Z M 0 0.125 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 0 43 L 73.261719 43 L 73.261719 68.746094 L 0 68.746094 Z M 0 43 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 16 43 L 57 43 L 57 68.746094 L 16 68.746094 Z M 16 43 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000127577 0.00079402 L 47.96138 0.00079402 L 67.351401 16.734864 L 19.390148 16.734864 Z M 0.000127577 0.00079402 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000127577 45.922656 L 47.96138 45.922656 L 67.351401 62.656726 L 19.390148 62.656726 Z M 0.000127577 45.922656 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000127577 0.00079402 L 0.000127577 45.922656 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 47.96138 0.00079402 L 47.96138 45.922656 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 67.351401 16.734864 L 67.351401 62.656726 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 19.390148 16.734864 L 19.390148 62.656726 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 0.000127577 0.00079402 L 67.351401 16.734864 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 47.96138 0.00079402 L 19.390148 16.734864 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 19.390148 16.734864 L 19.390148 62.656726 \" transform=\"matrix(0.988347, 0, 0, -0.988347, 3.34753, 65.399222)\"/></svg>",
            "theory_task": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро призмы равно $10$. Найдите объём призмы.",
            "theory_sol": "Площадь основания ромба равна половине произведения диагоналей: $S_{\\mathrm{osn}}=\\frac{6\\cdot8}{2}=24$.<br>Объём прямой призмы: $V=S_{\\mathrm{osn}}\\cdot h=24\\cdot10=240$.<br><br><b>Ответ:</b> 240",
            "tasks": [
                {
                    "text": "В основании прямой призмы лежит ромб с диагоналями $6$ и $8$. Боковое ребро равно $5$. Найдите объём призмы.",
                    "answer": "120"
                },
                {
                    "text": "Диагонали ромба равны $10$ и $24$, боковое ребро равно $3$. Найдите объём призмы.",
                    "answer": "360"
                },
                {
                    "text": "Диагонали ромба равны $12$ и $16$, боковое ребро равно $4$. Найдите объём призмы.",
                    "answer": "384"
                },
                {
                    "text": "Диагонали ромба равны $14$ и $48$, боковое ребро равно $2$. Найдите объём призмы.",
                    "answer": "672"
                },
                {
                    "text": "Диагонали ромба равны $4$ и $6$, боковое ребро равно $9$. Найдите объём призмы.",
                    "answer": "108"
                }
            ]
        },
        {
            "desc": "Прототип 19. Объём прямой треугольной призмы",
            "svg_code": "",
            "theory_task": "Основанием прямой треугольной призмы является прямоугольный треугольник с катетами $3$ и $4$. Боковое ребро призмы равно $10$. Найдите объём призмы.",
            "theory_sol": "Площадь основания: $S_{\\mathrm{osn}}=\\frac12\\cdot3\\cdot4=6$.<br>Объём прямой призмы: $V=S_{\\mathrm{osn}}\\cdot h=6\\cdot10=60$.<br><br><b>Ответ:</b> 60",
            "tasks": [
                {
                    "text": "Основанием прямой треугольной призмы является прямоугольный треугольник с катетами $6$ и $8$. Боковое ребро равно $5$. Найдите объём призмы.",
                    "answer": "120"
                },
                {
                    "text": "Катеты основания равны $5$ и $12$, боковое ребро равно $6$. Найдите объём призмы.",
                    "answer": "180"
                },
                {
                    "text": "Катеты основания равны $7$ и $24$, боковое ребро равно $3$. Найдите объём призмы.",
                    "answer": "252"
                },
                {
                    "text": "Катеты основания равны $9$ и $12$, боковое ребро равно $4$. Найдите объём призмы.",
                    "answer": "216"
                },
                {
                    "text": "Катеты основания равны $8$ и $15$, боковое ребро равно $2$. Найдите объём призмы.",
                    "answer": "120"
                }
            ]
        },
        {
            "desc": "Прототип 20. Площадь поверхности прямой треугольной призмы",
            "svg_code": "",
            "theory_task": "Основанием прямой треугольной призмы является прямоугольный треугольник с катетами $3$ и $4$. Боковое ребро призмы равно $10$. Найдите площадь поверхности призмы.",
            "theory_sol": "Гипотенуза основания: $\\sqrt{3^2+4^2}=5$.<br>Площадь основания: $S_{\\mathrm{osn}}=\\frac12\\cdot3\\cdot4=6$, периметр основания $P=3+4+5=12$.<br>$S=2S_{\\mathrm{osn}}+P\\cdot h=2\\cdot6+12\\cdot10=132$.<br><br><b>Ответ:</b> 132",
            "tasks": [
                {
                    "text": "Основание - прямоугольный треугольник с катетами $6$ и $8$, боковое ребро равно $5$. Найдите площадь поверхности призмы.",
                    "answer": "168"
                },
                {
                    "text": "Катеты основания равны $5$ и $12$, боковое ребро равно $6$. Найдите площадь поверхности призмы.",
                    "answer": "240"
                },
                {
                    "text": "Катеты основания равны $7$ и $24$, боковое ребро равно $3$. Найдите площадь поверхности призмы.",
                    "answer": "336"
                },
                {
                    "text": "Катеты основания равны $9$ и $12$, боковое ребро равно $4$. Найдите площадь поверхности призмы.",
                    "answer": "252"
                },
                {
                    "text": "Катеты основания равны $8$ и $15$, боковое ребро равно $2$. Найдите площадь поверхности призмы.",
                    "answer": "200"
                }
            ]
        },
        {
            "desc": "Прототип 21. Площадь поверхности правильной четырёхугольной пирамиды",
            "svg_code": "<svg width=\"300\" height=\"283.92\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76.167 72.085\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.0664062 32 L 75.277344 32 L 75.277344 71.179688 L 0.0664062 71.179688 Z M 0.0664062 32 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.0664062 0 L 49 0 L 49 71.179688 L 0.0664062 71.179688 Z M 0.0664062 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 26 0 L 67 0 L 67 71.179688 L 26 71.179688 Z M 26 0 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 26 0 L 75.277344 0 L 75.277344 55 L 26 55 Z M 26 0 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.000464573 0.00099733 L 53.06704 0.00099733 L 69.392765 24.491562 L 16.329216 24.491562 Z M -0.000464573 0.00099733 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L -0.000464573 0.00099733 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 53.06704 0.00099733 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 69.392765 24.491562 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 16.329216 24.491562 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 34.69615 12.244302 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></svg>",
            "theory_task": "В правильной четырёхугольной пирамиде сторона основания равна $6$, высота равна $4$. Найдите площадь поверхности пирамиды.",
            "theory_sol": "Апофема боковой грани находится по прямоугольному треугольнику: $l=\\sqrt{4^2+3^2}=5$.<br>Площадь основания: $6^2=36$.<br>Площадь боковой поверхности: $S_{\\mathrm{b}}=\\frac12Pl=\\frac12\\cdot24\\cdot5=60$.<br>$S=36+60=96$.<br><br><b>Ответ:</b> 96",
            "tasks": [
                {
                    "text": "В правильной четырёхугольной пирамиде сторона основания равна $8$, высота равна $3$. Найдите площадь поверхности пирамиды.",
                    "answer": "144"
                },
                {
                    "text": "Сторона основания равна $10$, высота равна $12$. Найдите площадь поверхности.",
                    "answer": "360"
                },
                {
                    "text": "Сторона основания равна $12$, высота равна $8$. Найдите площадь поверхности.",
                    "answer": "384"
                },
                {
                    "text": "Сторона основания равна $16$, высота равна $15$. Найдите площадь поверхности.",
                    "answer": "800"
                },
                {
                    "text": "Сторона основания равна $14$, высота равна $24$. Найдите площадь поверхности.",
                    "answer": "896"
                }
            ]
        },
        {
            "desc": "Прототип 22. Объём пирамиды с прямоугольником в основании",
            "svg_code": "<svg width=\"300\" height=\"283.92\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76.167 72.085\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.0664062 32 L 75.277344 32 L 75.277344 71.179688 L 0.0664062 71.179688 Z M 0.0664062 32 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.0664062 0 L 49 0 L 49 71.179688 L 0.0664062 71.179688 Z M 0.0664062 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 26 0 L 67 0 L 67 71.179688 L 26 71.179688 Z M 26 0 \"/></clipPath><clipPath id=\"clip-3\"><path clip-rule=\"nonzero\" d=\"M 26 0 L 75.277344 0 L 75.277344 55 L 26 55 Z M 26 0 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -0.000464573 0.00099733 L 53.06704 0.00099733 L 69.392765 24.491562 L 16.329216 24.491562 Z M -0.000464573 0.00099733 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L -0.000464573 0.00099733 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 53.06704 0.00099733 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><g clip-path=\"url(#clip-3)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 69.392765 24.491562 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 16.329216 24.491562 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 34.69615 65.311807 L 34.69615 12.244302 \" transform=\"matrix(0.987466, 0, 0, -0.987466, 3.410615, 67.836922)\"/></svg>",
            "theory_task": "Основанием пирамиды является прямоугольник со сторонами $3$ и $4$. Высота пирамиды равна $6$. Найдите объём пирамиды.",
            "theory_sol": "Площадь основания: $S_{\\mathrm{osn}}=3\\cdot4=12$.<br>Объём пирамиды: $V=\\frac13S_{\\mathrm{osn}}h=\\frac13\\cdot12\\cdot6=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Основанием пирамиды является прямоугольник со сторонами $4$ и $5$. Высота равна $6$. Найдите объём пирамиды.",
                    "answer": "40"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $6$ и $8$, высота равна $9$. Найдите объём.",
                    "answer": "144"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $5$ и $12$, высота равна $3$. Найдите объём.",
                    "answer": "60"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $7$ и $9$, высота равна $6$. Найдите объём.",
                    "answer": "126"
                },
                {
                    "text": "Основание - прямоугольник со сторонами $10$ и $11$, высота равна $3$. Найдите объём.",
                    "answer": "110"
                }
            ]
        },
        {
            "desc": "Прототип 23. Изменение объёма при изменении линейных размеров",
            "svg_code": "<svg width=\"300\" height=\"329.68\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 61.88 68.003\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.386719 30 L 61.375 30 L 61.375 67.019531 L 0.386719 67.019531 Z M 0.386719 30 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.386719 0 L 46 0 L 46 67.019531 L 0.386719 67.019531 Z M 0.386719 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 22 0 L 61.375 0 L 61.375 67.019531 L 22 67.019531 Z M 22 0 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000583085 -0.00126643 L 55.105402 4.081159 L 20.408748 22.452074 Z M 0.000583085 -0.00126643 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 30.614812 61.22719 L 0.000583085 -0.00126643 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 30.614812 61.22719 L 55.105402 4.081159 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 30.614812 61.22719 L 20.408748 22.452074 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></svg>",
            "theory_task": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $2$ раза?",
            "theory_sol": "При увеличении всех линейных размеров тела в $k$ раз объём увеличивается в $k^3$ раз.<br>Здесь $k=2$, поэтому объём увеличится в $2^3=8$ раз.<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $3$ раза?",
                    "answer": "27"
                },
                {
                    "text": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $4$ раза?",
                    "answer": "64"
                },
                {
                    "text": "Во сколько раз увеличится объём правильного тетраэдра, если все его рёбра увеличить в $5$ раз?",
                    "answer": "125"
                },
                {
                    "text": "Во сколько раз увеличится объём правильной пирамиды, если все её линейные размеры увеличить в $6$ раз?",
                    "answer": "216"
                },
                {
                    "text": "Во сколько раз увеличится объём пирамиды, если все её линейные размеры увеличить в $10$ раз?",
                    "answer": "1000"
                }
            ]
        },
        {
            "desc": "Прототип 24. Изменение площади поверхности при изменении линейных размеров",
            "svg_code": "<svg width=\"300\" height=\"329.68\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 61.88 68.003\"><defs><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.386719 30 L 61.375 30 L 61.375 67.019531 L 0.386719 67.019531 Z M 0.386719 30 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.386719 0 L 46 0 L 46 67.019531 L 0.386719 67.019531 Z M 0.386719 0 \"/></clipPath><clipPath id=\"clip-2\"><path clip-rule=\"nonzero\" d=\"M 22 0 L 61.375 0 L 61.375 67.019531 L 22 67.019531 Z M 22 0 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.000583085 -0.00126643 L 55.105402 4.081159 L 20.408748 22.452074 Z M 0.000583085 -0.00126643 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 30.614812 61.22719 L 0.000583085 -0.00126643 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></g><g clip-path=\"url(#clip-2)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 30.614812 61.22719 L 55.105402 4.081159 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></g><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 30.614812 61.22719 L 20.408748 22.452074 \" transform=\"matrix(0.985551, 0, 0, -0.985551, 3.725988, 63.682346)\"/></svg>",
            "theory_task": "Во сколько раз увеличится площадь поверхности правильного тетраэдра, если все его рёбра увеличить в $3$ раза?",
            "theory_sol": "Площадь поверхности зависит от квадрата линейного размера.<br>Если все рёбра увеличить в $k$ раз, то площадь поверхности увеличится в $k^2$ раз.<br>При $k=3$ получаем $3^2=9$.<br><br><b>Ответ:</b> 9",
            "tasks": [
                {
                    "text": "Во сколько раз увеличится площадь поверхности правильного тетраэдра, если все его рёбра увеличить в $2$ раза?",
                    "answer": "4"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности правильного тетраэдра, если все его рёбра увеличить в $4$ раза?",
                    "answer": "16"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности правильной пирамиды, если все её линейные размеры увеличить в $5$ раз?",
                    "answer": "25"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности многогранника, если все его линейные размеры увеличить в $6$ раз?",
                    "answer": "36"
                },
                {
                    "text": "Во сколько раз увеличится площадь поверхности многогранника, если все его линейные размеры увеличить в $10$ раз?",
                    "answer": "100"
                }
            ]
        },
        {
            "desc": "Прототип 25. Объём многогранника из середин рёбер тетраэдра",
            "svg_code": "",
            "theory_task": "Объём тетраэдра равен $14$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
            "theory_sol": "Если соединить середины рёбер тетраэдра, то у каждой вершины отсечётся маленький тетраэдр, подобный исходному с коэффициентом подобия $\\frac12$.<br>Объём каждого такого тетраэдра равен <br>$14\\cdot\\left(\\frac12\\right)^3=14\\cdot\\frac18=\\frac74.$<br> Таких тетраэдров четыре, поэтому их суммарный объём равен <br>$4\\cdot\\frac74=7.$<br> Оставшаяся центральная часть и есть искомый многогранник, значит его объём равен <br>$14-7=7.$<br><br><b>Ответ:</b> 7",
            "tasks": [
                {
                    "text": "Объём тетраэдра равен $8$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "4"
                },
                {
                    "text": "Объём тетраэдра равен $16$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "8"
                },
                {
                    "text": "Объём тетраэдра равен $20$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "10"
                },
                {
                    "text": "Объём тетраэдра равен $30$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "15"
                },
                {
                    "text": "Объём тетраэдра равен $50$. Найдите объём многогранника, вершинами которого являются середины рёбер данного тетраэдра.",
                    "answer": "25"
                }
            ]
        },
        {
            "desc": "Прототип 26. Расстояние в правильной шестиугольной призме",
            "svg_code": "<svg width=\"300\" height=\"307.29\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 80.249 82.2\"><defs><g><g id=\"glyph-0-0\"><path d=\"M 1.578125 -0.765625 C 1.484375 -0.390625 1.453125 -0.3125 0.6875 -0.3125 C 0.515625 -0.3125 0.421875 -0.3125 0.421875 -0.109375 C 0.421875 0 0.5 0 0.6875 0 L 4.203125 0 C 5.765625 0 6.921875 -1.15625 6.921875 -2.125 C 6.921875 -2.84375 6.34375 -3.40625 5.390625 -3.515625 C 6.421875 -3.703125 7.453125 -4.4375 7.453125 -5.375 C 7.453125 -6.109375 6.796875 -6.734375 5.625 -6.734375 L 2.3125 -6.734375 C 2.125 -6.734375 2.015625 -6.734375 2.015625 -6.53125 C 2.015625 -6.421875 2.109375 -6.421875 2.296875 -6.421875 C 2.3125 -6.421875 2.5 -6.421875 2.671875 -6.40625 C 2.84375 -6.390625 2.9375 -6.375 2.9375 -6.25 C 2.9375 -6.21875 2.921875 -6.1875 2.90625 -6.0625 Z M 3.0625 -3.609375 L 3.671875 -6.046875 C 3.765625 -6.40625 3.78125 -6.421875 4.203125 -6.421875 L 5.484375 -6.421875 C 6.34375 -6.421875 6.5625 -5.84375 6.5625 -5.40625 C 6.5625 -4.546875 5.703125 -3.609375 4.5 -3.609375 Z M 2.625 -0.3125 C 2.484375 -0.3125 2.46875 -0.3125 2.40625 -0.3125 C 2.3125 -0.328125 2.28125 -0.328125 2.28125 -0.421875 C 2.28125 -0.4375 2.28125 -0.46875 2.328125 -0.640625 L 3 -3.390625 L 4.875 -3.390625 C 5.8125 -3.390625 6 -2.65625 6 -2.234375 C 6 -1.265625 5.125 -0.3125 3.96875 -0.3125 Z M 2.625 -0.3125 \"/></g><g id=\"glyph-0-1\"><path d=\"M 6.984375 -2.296875 C 7 -2.34375 7.03125 -2.421875 7.03125 -2.4375 C 7.03125 -2.4375 7.03125 -2.546875 6.90625 -2.546875 C 6.828125 -2.546875 6.796875 -2.484375 6.78125 -2.421875 C 6.140625 -0.96875 5.78125 -0.3125 4.09375 -0.3125 L 2.65625 -0.3125 C 2.515625 -0.3125 2.5 -0.3125 2.4375 -0.3125 C 2.34375 -0.328125 2.3125 -0.328125 2.3125 -0.421875 C 2.3125 -0.4375 2.3125 -0.46875 2.359375 -0.640625 L 3.03125 -3.328125 L 4 -3.328125 C 4.84375 -3.328125 4.84375 -3.125 4.84375 -2.875 C 4.84375 -2.8125 4.84375 -2.6875 4.765625 -2.390625 C 4.75 -2.34375 4.75 -2.3125 4.75 -2.28125 C 4.75 -2.234375 4.78125 -2.171875 4.875 -2.171875 C 4.953125 -2.171875 4.984375 -2.234375 5.015625 -2.375 L 5.578125 -4.6875 C 5.578125 -4.75 5.53125 -4.796875 5.46875 -4.796875 C 5.375 -4.796875 5.359375 -4.734375 5.328125 -4.609375 C 5.109375 -3.859375 4.9375 -3.640625 4.03125 -3.640625 L 3.109375 -3.640625 L 3.703125 -6.015625 C 3.78125 -6.359375 3.796875 -6.40625 4.234375 -6.40625 L 5.625 -6.40625 C 6.828125 -6.40625 7.125 -6.109375 7.125 -5.296875 C 7.125 -5.0625 7.125 -5.046875 7.078125 -4.78125 C 7.078125 -4.71875 7.0625 -4.65625 7.0625 -4.609375 C 7.0625 -4.5625 7.09375 -4.484375 7.1875 -4.484375 C 7.296875 -4.484375 7.3125 -4.546875 7.328125 -4.734375 L 7.515625 -6.4375 C 7.546875 -6.703125 7.5 -6.703125 7.25 -6.703125 L 2.28125 -6.703125 C 2.078125 -6.703125 1.984375 -6.703125 1.984375 -6.5 C 1.984375 -6.40625 2.078125 -6.40625 2.25 -6.40625 C 2.625 -6.40625 2.90625 -6.40625 2.90625 -6.21875 C 2.90625 -6.1875 2.90625 -6.15625 2.84375 -5.984375 L 1.546875 -0.765625 C 1.453125 -0.390625 1.421875 -0.3125 0.65625 -0.3125 C 0.484375 -0.3125 0.375 -0.3125 0.375 -0.125 C 0.375 0 0.46875 0 0.65625 0 L 5.765625 0 C 6 0 6 -0.015625 6.078125 -0.171875 Z M 6.984375 -2.296875 \"/></g><g id=\"glyph-1-0\"><path d=\"M 2.3125 -4.390625 C 2.3125 -4.578125 2.296875 -4.578125 2.109375 -4.578125 C 1.671875 -4.15625 1.03125 -4.140625 0.75 -4.140625 L 0.75 -3.890625 C 0.921875 -3.890625 1.375 -3.890625 1.75 -4.09375 L 1.75 -0.5625 C 1.75 -0.34375 1.75 -0.25 1.0625 -0.25 L 0.796875 -0.25 L 0.796875 0 C 0.921875 0 1.78125 -0.03125 2.03125 -0.03125 C 2.25 -0.03125 3.109375 0 3.265625 0 L 3.265625 -0.25 L 3 -0.25 C 2.3125 -0.25 2.3125 -0.34375 2.3125 -0.5625 Z M 2.3125 -4.390625 \"/></g></g><clipPath id=\"clip-0\"><path clip-rule=\"nonzero\" d=\"M 0.015625 35 L 79.492188 35 L 79.492188 77 L 0.015625 77 Z M 0.015625 35 \"/></clipPath><clipPath id=\"clip-1\"><path clip-rule=\"nonzero\" d=\"M 0.015625 0 L 79.492188 0 L 79.492188 40 L 0.015625 40 Z M 0.015625 0 \"/></clipPath></defs><g clip-path=\"url(#clip-0)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -21.432048 9.185647 L 0.00109915 -0.000550867 L 30.6165 -0.000550867 L 52.045703 9.185647 L 30.6165 18.367901 L 0.00109915 18.367901 Z M -21.432048 9.185647 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/></g><g clip-path=\"url(#clip-1)\"><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -21.432048 45.92255 L 0.00109915 36.736352 L 30.6165 36.736352 L 52.045703 45.92255 L 30.6165 55.104804 L 0.00109915 55.104804 Z M -21.432048 45.92255 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M -21.432048 9.185647 L -21.432048 45.92255 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.00109915 -0.000550867 L 0.00109915 36.736352 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 30.6165 -0.000550867 L 30.6165 36.736352 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 52.045703 9.185647 L 52.045703 45.92255 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 30.6165 18.367901 L 30.6165 55.104804 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-miterlimit=\"10\" d=\"M 0.00109915 18.367901 L 0.00109915 55.104804 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><path fill=\"none\" stroke-width=\"0.3985\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 0.00109915 18.367901 L 30.6165 -0.000550867 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/><g fill=\"rgb(0%, 0%, 0%)\" fill-opacity=\"1\"><use xlink:href=\"#glyph-0-0\" x=\"13.129228\" y=\"75.15952\"/></g><g fill=\"rgb(0%, 0%, 0%)\" fill-opacity=\"1\"><use xlink:href=\"#glyph-0-1\" x=\"58.396669\" y=\"12.989581\"/></g><g fill=\"rgb(0%, 0%, 0%)\" fill-opacity=\"1\"><use xlink:href=\"#glyph-1-0\" x=\"65.680777\" y=\"14.469181\"/></g><path fill=\"none\" stroke-width=\"0.79701\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke=\"rgb(0%, 0%, 0%)\" stroke-opacity=\"1\" stroke-dasharray=\"2.98883 2.98883\" stroke-miterlimit=\"10\" d=\"M 0.00109915 -0.000550867 L 30.6165 55.104804 \" transform=\"matrix(0.990361, 0, 0, -0.990361, 24.592661, 64.933048)\"/></svg>",
            "theory_task": "В правильной шестиугольной призме все рёбра равны $\\sqrt5$. Найдите расстояние между точками $B$ и $E_1$.",
            "theory_sol": "Обозначим через $a$ ребро призмы. В правильном шестиугольнике вершины $B$ и $E$ противоположные, поэтому $BE=2a$.<br>Высота призмы также равна $a$. Тогда $BE_1=\\sqrt{BE^2+EE_1^2}=\\sqrt{(2a)^2+a^2}=a\\sqrt5$.<br>При $a=\\sqrt5$ получаем $BE_1=\\sqrt5\\cdot\\sqrt5=5$.<br><br><b>Ответ:</b> 5",
            "tasks": [
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "5"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $2\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "10"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $3\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "15"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $4\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "20"
                },
                {
                    "text": "В правильной шестиугольной призме все рёбра равны $5\\sqrt5$. Найдите расстояние между противоположными вершинами разных оснований.",
                    "answer": "25"
                }
            ]
        },
        {
            "desc": "Прототип 27. Угол между диагоналями правильной четырёхугольной призмы",
            "svg_code": "",
            "theory_task": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
            "theory_sol": "Пусть $BC=a$, а высота призмы равна $h$. Тогда <br>$AC_1^2=AC^2+AA_1^2=(a\\sqrt2)^2+h^2=2a^2+h^2.$<br> По условию $AC_1=2BC=2a$, значит <br>$2a^2+h^2=4a^2 \\quad\\Rightarrow\\quad h^2=2a^2.$<br> Рассмотрим векторы <br>$\\vec{BD_1}=(-a,\\,a,\\,h), \\qquad \\vec{A_1C}=(a,\\,a,\\,-h).$<br> Их скалярное произведение равно <br>$\\vec{BD_1}\\cdot\\vec{A_1C}=-a^2+a^2-h^2=-h^2=-2a^2.$<br> Длины этих векторов одинаковы: <br>$|BD_1|=|A_1C|=AC_1=2a.$<br> Тогда косинус острого угла между диагоналями равен <br>$\\cos\\varphi=\\frac{|{-2a^2}|}{2a\\cdot2a}=\\frac12.$<br> Следовательно, $\\varphi=60^\\circ$.<br><br><b>Ответ:</b> 60",
            "tasks": [
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $A_1C=2AB$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $BD_1=2AB$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $BD_1=2BC$. Найдите угол между диагоналями $BD_1$ и $A_1C$. Ответ дайте в градусах.",
                    "answer": "60"
                },
                {
                    "text": "В правильной четырёхугольной призме $ABCD A_1B_1C_1D_1$ известно, что $AC_1=2AB$. Найдите угол между диагоналями $AC_1$ и $B_1D$. Ответ дайте в градусах.",
                    "answer": "60"
                }
            ]
        }
    ]
};

    // Прототипы 1–2. Не используем z1/f1: эти имена заняты другими ресурсами сайта.
    task3Extra.prototypes[0].svg_code = task3ExtraImage('task3_z1.png', 203, 'Составной многогранник — пример прототипа 1');
    task3Extra.prototypes[0].tasks.forEach((task, index) => {
        const n = index + 2;
        task.svg_code = task3ExtraImage(`task3_z${n}.png`, 191, `Составной многогранник — вариант z${n}`);
    });

    task3Extra.prototypes[1].svg_code = task3ExtraImage('task3_f1.png', 203, 'Составной многогранник — пример прототипа 2');
    task3Extra.prototypes[1].tasks.forEach((task, index) => {
        const n = index + 2;
        task.svg_code = task3ExtraImage(`task3_f${n}.png`, 191, `Составной многогранник — вариант f${n}`);
    });

    // Устойчивые встроенные чертежи: без Base64, transform и повторяющихся id.
    task3Extra.prototypes[2].svg_code = task3ExtraCube;
    task3Extra.prototypes[3].svg_code = task3ExtraCube;
    task3Extra.prototypes[4].svg_code = task3ExtraCube;
    task3Extra.prototypes[5].svg_code = task3ExtraLiquidCylinder;
    task3Extra.prototypes[6].svg_code = task3ExtraTwoCylinders;
    task3Extra.prototypes[7].svg_code = task3ExtraTriPrismVessel;

    // Внешние файлы с уникальными безопасными именами; старые имена оставлены только как запасной вариант.
    task3Extra.prototypes[8].svg_code  = task3ExtraImage(['task3_square_prism_cylinder.png', 'про.png'], 233, 'Цилиндр в правильной четырёхугольной призме');
    task3Extra.prototypes[9].svg_code  = task3ExtraImage(['task3_hex_prism_cylinder.png', 'proto11.png'], 233, 'Цилиндр в правильной шестиугольной призме');
    task3Extra.prototypes[10].svg_code = task3ExtraImage(['task3_tri_prism_in_cylinder.png', 'tri_cyl.png'], 180, 'Правильная треугольная призма, вписанная в цилиндр');

    task3Extra.prototypes[11].svg_code = task3ExtraCylinder;
    task3Extra.prototypes[12].svg_code = task3ExtraCone;
    task3Extra.prototypes[13].svg_code = task3ExtraCone;
    task3Extra.prototypes[14].svg_code = task3ExtraSphere;
    task3Extra.prototypes[15].svg_code = task3ExtraImage(['task3_sphere_in_cube.png', 'кпкп.png'], 233, 'Куб, описанный около сферы');
    task3Extra.prototypes[16].svg_code = task3ExtraRhombusPrism;
    task3Extra.prototypes[17].svg_code = task3ExtraRhombusPrism;
    task3Extra.prototypes[18].svg_code = task3ExtraImage(['task3_right_tri_prism.png', 'рто.png'], 233, 'Прямая треугольная призма');
    task3Extra.prototypes[19].svg_code = task3ExtraImage(['task3_right_tri_prism.png', 'рто.png'], 233, 'Прямая треугольная призма');
    task3Extra.prototypes[20].svg_code = task3ExtraPyramid;
    task3Extra.prototypes[21].svg_code = task3ExtraPyramid;
    task3Extra.prototypes[22].svg_code = task3ExtraTetra;
    task3Extra.prototypes[23].svg_code = task3ExtraTetra;
    task3Extra.prototypes[24].svg_code = task3ExtraImage(['task3_tetra_mid.png', 'tetra_mid.png'], 248, 'Многогранник из середин рёбер тетраэдра');
    task3Extra.prototypes[25].svg_code = task3ExtraHexPrism;
    task3Extra.prototypes[26].svg_code = task3ExtraImage(['task3_prism_diag.png', 'prism_diag.png'], 248, 'Диагонали правильной четырёхугольной призмы');

    window.extraDatabase[3] = task3Extra;
    window.extraDatabase["task3"] = task3Extra;
})();
