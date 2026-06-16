
window.DraftEngine = (function(){
 const state={undo:{},redo:{}};
 function c(id){return document.getElementById(id)};
 function ctx(id){let x=c(id);return x?x.getContext('2d'):null};
 function save(id){let x=c(id);state.undo[id]=state.undo[id]||[];state.undo[id].push(x.toDataURL());state.redo[id]=[]};
 function restore(id,d){let x=c(id);let g=ctx(id);let img=new Image();img.onload=()=>{g.clearRect(0,0,x.width,x.height);g.drawImage(img,0,0)};img.src=d};
 function undo(id){let s=state.undo[id];if(!s||s.length<2)return;state.redo[id].push(s.pop());restore(id,s[s.length-1])};
 function redo(id){let r=state.redo[id];if(!r||!r.length)return;let v=r.pop();state.undo[id].push(v);restore(id,v)};
 function init(id,opt){let x=c(id);if(!x)return;let g=x.getContext('2d');x.width=x.offsetWidth;x.height=x.offsetHeight;state.undo[id]=[];state.redo[id]=[];save(id);let d=false;
 function p(e){let r=x.getBoundingClientRect();let cx=e.touches?e.touches[0].clientX:e.clientX;let cy=e.touches?e.touches[0].clientY:e.clientY;return {x:cx-r.left,y:cy-r.top}}
 x.onmousedown=e=>{d=true;g.beginPath();let a=p(e);g.moveTo(a.x,a.y)};
 x.onmousemove=e=>{if(!d)return;let a=p(e);g.lineTo(a.x,a.y);g.strokeStyle='#000';g.lineWidth=2;g.stroke()};
 x.onmouseup=_=>{d=false;save(id)};
 x.onmouseleave=_=>{d=false};
 let bg=document.getElementById('draft-bg-'+id.replace('canvas-',''));
 if(bg&&opt){bg.innerHTML=opt.background||'';
 let s=(opt.taskId==='task2'||opt.taskId==='task8'||opt.taskId==='task11')?2:1;
 bg.querySelectorAll('img,svg').forEach(el=>{el.style.transformOrigin='top left';el.style.transform='scale('+s+')';el.style.opacity='1';el.style.maxWidth='none'})}
 document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.key==='z')undo(id);if(e.ctrlKey&&e.key==='y')redo(id)});
 return {init,undo,redo};})();
