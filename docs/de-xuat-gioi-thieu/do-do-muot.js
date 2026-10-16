// Đo độ mượt: lăn chuột từng nấc 100px mỗi 120ms qua toàn bộ quãng chuyển cảnh,
// ghi vị trí khung lớn nhất mỗi khung hình; so sánh bước nhảy lớn nhất / trung bình.
const {chromium}=require('/opt/node-tools/node_modules/playwright');const path=require('path');
(async()=>{const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
for(const file of process.argv.slice(2)){
 const p=await b.newPage({viewport:{width:1440,height:900}});
 await p.goto('file://'+path.resolve(file));await p.waitForTimeout(4500);
 await p.evaluate(()=>{window.__log=[];const fr=[...document.querySelectorAll('.hero__frames .frame')];
  (function lp(){const big=fr.filter(e=>e.style.display!=='none').map(e=>e.getBoundingClientRect()).sort((a,b)=>b.width*b.height-a.width*a.height)[0];
   window.__log.push([performance.now(),big.x+big.width/2,big.y+big.height/2,scrollY]);requestAnimationFrame(lp);})();});
 await p.mouse.move(700,450);
 // giả lập cuộn mượt của trình duyệt: mỗi nấc 100px trải ra ~150ms (ease-out), nấc cách nhau 120ms
 await p.evaluate(()=>new Promise(res=>{let t0=performance.now(),base=0;const N=16,gap=120,dur=150;
  (function st(){const now=performance.now()-t0;let y=0;for(let i=0;i<N;i++){const k=Math.min(1,Math.max(0,(now-i*gap)/dur));y+=100*(1-Math.pow(1-k,3));}
   window.scrollTo(0,y);if(now<N*gap+dur)requestAnimationFrame(st);else res();})();}));
 await p.waitForTimeout(1200);
 const log=await p.evaluate(()=>window.__log);
 const d=[];for(let i=1;i<log.length;i++){d.push(Math.hypot(log[i][1]-log[i-1][1],log[i][2]-log[i-1][2]));}
 const mv=d.filter(x=>x>0.3);const mean=mv.reduce((a,b)=>a+b,0)/mv.length;
 // "khựng": số khung hình đứng yên xen giữa lúc đang chuyển động
 let stalls=0;for(let i=1;i<d.length-1;i++) if(d[i]<0.3 && d[i-1]>2 && d.slice(i+1,i+4).some(x=>x>2)) stalls++;
 if(process.env.DUMP) console.log(d.map((x,i)=>x.toFixed(0)+'@'+log[i+1][3]).join(' '));console.log(file,'frames',d.length,'maxStep',Math.max(...d).toFixed(1),'mean',mean.toFixed(1),'max/mean',(Math.max(...d)/mean).toFixed(1),'stalls',stalls);
 await p.close();}
await b.close();})();
