/* Direct PDF export for EGE printable HTML. Independent of Edge print headers/footers.
   Libraries load on demand; the existing HTML print remains a fallback. */
(function () {
  'use strict';
  const CDNS = [
    ['html2canvas', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'],
    ['jspdf', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js']
  ];
  const loaded = new Map();
  function ensureLibrary(key, url) {
    if (key === 'html2canvas' && typeof window.html2canvas === 'function') return Promise.resolve();
    if (key === 'jspdf' && window.jspdf && window.jspdf.jsPDF) return Promise.resolve();
    if (loaded.has(key)) return loaded.get(key);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url; script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Не удалось загрузить библиотеку PDF: ' + key));
      document.head.appendChild(script);
    });
    loaded.set(key, promise);
    return promise;
  }
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  async function waitAssets(doc) {
    await Promise.race([doc.fonts ? doc.fonts.ready : Promise.resolve(), pause(8000)]);
    await Promise.all([...doc.images].map(img => img.complete ? Promise.resolve() :
      Promise.race([new Promise(resolve => { img.addEventListener('load', resolve, {once:true}); img.addEventListener('error', resolve, {once:true}); }), pause(6500)])));
    const broken = [...doc.images].filter(img => img.src && (!img.complete || !img.naturalWidth));
    if (broken.length) throw new Error('Изображения не загрузились: ' + broken.slice(0, 2).map(i => i.getAttribute('src')).join(', '));
  }
  function forcePrintRules(doc) {
    // html2canvas captures screen media. Append the original print rules as screen rules.
    const collected = [];
    function read(rules, active) {
      for (const rule of rules) {
        if (rule.type === 4) { // CSSMediaRule
          const media = rule.conditionText || rule.media.mediaText || '';
          const isPrint = /(?:^|[,\s])print(?:$|[,\s])/i.test(media);
          read(rule.cssRules, active || isPrint);
        } else if (active && rule.type === 1) collected.push(rule.cssText);
      }
    }
    [...doc.styleSheets].forEach(sheet => {
      try { read(sheet.cssRules, false); } catch (_) { /* cross-origin library styles */ }
    });
    const css = doc.createElement('style');
    css.textContent = collected.join('\n') + '\nhtml,body{margin:0!important;padding:0!important;background:#fff!important;}' +
      '\n.ege-exam-page,.ege-selective-sheet{box-shadow:none!important;}\n';
    doc.head.appendChild(css);
  }
  function paginatePlain(doc) {
    const main = doc.querySelector('main.print-page');
    const origin = main || doc.body;
    const header = main ? main.querySelector('header.print-header') : doc.querySelector('h2');
    const footer = doc.querySelector('#print-footer-fixed');
    const all = main ? [...main.querySelectorAll('h3, .task-print-block')] :
      [...doc.body.children].filter(el => !['SCRIPT', 'STYLE', 'LINK'].includes(el.tagName));
    const holder = doc.createElement('div');
    holder.style.cssText = 'margin:0;padding:0;width:210mm;background:#fff;';
    origin.replaceWith(holder);
    let page, content;
    function newPage(first) {
      page = doc.createElement('section'); page.className = 'ege-direct-pdf-sheet';
      page.style.cssText = 'position:relative;width:210mm;height:297mm;padding:12mm 12mm 16mm;box-sizing:border-box;background:white;overflow:hidden;';
      content = doc.createElement('div');
      content.style.cssText = 'height:269mm;overflow:hidden;box-sizing:border-box;display:flow-root;';
      page.appendChild(content);
      if (footer) {
        const ownFooter = footer.cloneNode(true); ownFooter.removeAttribute('id');
        ownFooter.style.cssText = 'position:absolute;bottom:5mm;left:12mm;right:12mm;text-align:center;font:12px serif;color:#777;';
        page.appendChild(ownFooter);
      }
      holder.appendChild(page);
      if (first && header) content.appendChild(header.cloneNode(true));
    }
    newPage(true);
    const units = all.filter(el => el !== header);
    for (let i = 0; i < units.length; i++) {
      const elem = units[i];
      const clone = elem.cloneNode(true);
      content.appendChild(clone);
      if (content.scrollHeight > content.clientHeight + 3 && content.children.length > 1) {
        clone.remove(); newPage(false); content.appendChild(clone);
      }
      if (content.scrollHeight > content.clientHeight + 5) {
        throw new Error('Задание не помещается на одну страницу PDF. Попробуйте обычную печать HTML.');
      }
    }
    const sheets = [...holder.querySelectorAll('.ege-direct-pdf-sheet')];
    if (!sheets.length) throw new Error('Пустой документ');
    if (footer) footer.remove();
    return sheets;
  }
  function statusView() {
    const div = document.createElement('div');
    div.setAttribute('role','status');
    div.style.cssText = 'position:fixed;z-index:2147483646;right:14px;bottom:14px;background:#193c58;color:#fff;padding:12px 17px;border-radius:8px;font:14px Arial,sans-serif;box-shadow:0 3px 14px #0005;';
    div.textContent = 'Готовлю PDF…'; document.body.appendChild(div);
    return div;
  }
  window.egeDownloadReadyPrintPdf = async function (html, filename) {
    const indicator = statusView();
    let frame = null;
    try {
      await Promise.all(CDNS.map(([key, url]) => ensureLibrary(key, url)));
      if (!window.jspdf || !window.jspdf.jsPDF || !window.html2canvas)
        throw new Error('Библиотеки PDF не загрузились');
      // Override the generated document's automatic browser printing before its scripts run.
      const inject = '<script>window.print=function(){window.__egePDFReady=true;};<\\/script>'.replace('<\\/script>', '</script>');
      const prepared = html.replace(/<\/head\s*>/i, inject + '</head>');
      frame = document.createElement('iframe');
      frame.title = 'Подготовка PDF';
      frame.setAttribute('aria-hidden', 'true');
      frame.style.cssText = 'position:fixed;left:-1600px;top:0;width:1200px;height:900px;border:0;pointer-events:none;opacity:0;';
      document.body.appendChild(frame);
      frame.srcdoc = prepared;
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Не удалось открыть печатный макет')), 15000);
        frame.onload = () => {clearTimeout(timer); resolve();};
      });
      const doc = frame.contentDocument;
      if (!doc) throw new Error('Недоступен печатный документ');
      if (/window\.print\s*\(/.test(html)) {
        const deadline = Date.now() + 16000;
        while (frame.contentWindow && !frame.contentWindow.__egePDFReady && Date.now() < deadline) {
          await pause(200);
        }
        if (!frame.contentWindow || !frame.contentWindow.__egePDFReady)
          throw new Error('Не завершена компоновка печатного варианта. PDF не сохранён, чтобы не потерять задания.');
      }
      await waitAssets(doc);
      forcePrintRules(doc);
      await pause(150);
      let pages = [...doc.querySelectorAll('.ege-exam-page')];
      let landscape = pages.length > 0;
      if (!pages.length) pages = [...doc.querySelectorAll('.ege-selective-sheet')];
      if (!pages.length && /@page\s*\{[^}]*landscape/i.test(html) && doc.querySelector('body > section')) {
        // Separate landscape answer sheets: preserve their original 297mm tables.
        pages = [...doc.querySelectorAll('body > section')];
        for (const section of pages) {
          section.style.cssText += ';width:297mm!important;height:210mm!important;padding:12mm 16mm!important;background:#fff!important;box-sizing:border-box!important;margin:0!important;';
        }
        landscape = true;
      }
      if (!pages.length) pages = paginatePlain(doc);
      const paperW = landscape ? 297 : 210;
      const paperH = landscape ? 210 : 297;
      const pdf = new window.jspdf.jsPDF({unit:'mm',format:'a4',orientation: landscape?'landscape':'portrait',compress:true});
      for (let n = 0; n < pages.length; n++) {
        indicator.textContent = 'Готовлю PDF: страница ' + (n + 1) + ' из ' + pages.length;
        if (n) pdf.addPage('a4', landscape?'landscape':'portrait');
        const canvas = await window.html2canvas(pages[n], {
          backgroundColor:'#ffffff', scale:3.1, useCORS:true, allowTaint:false,
          logging:false, scrollX:0, scrollY:0, windowWidth:1200, windowHeight:900
        });
        // Each canvas is one paper page, not a long raster split across page boundaries.
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.93), 'JPEG', 0, 0, paperW, paperH, undefined, 'FAST');
        canvas.width = 0; canvas.height = 0;
        await pause(0);
      }
      pdf.save(filename.replace(/\.html?$/i, '.pdf'));
      return true;
    } catch (error) {
      console.error('Прямой экспорт PDF', error);
      alert('Не удалось создать PDF без служебных надписей: ' + (error.message || error));
      return false;
    } finally {
      if (frame) frame.remove();
      indicator.remove();
    }
  };
})();
