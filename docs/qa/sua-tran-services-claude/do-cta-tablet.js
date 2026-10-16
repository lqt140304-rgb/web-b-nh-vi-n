// Đo bề rộng tối thiểu của hàng CTA ở tablet và các phần tạo nên nó
const {chromium}=require('/opt/node-tools/node_modules/playwright');const path=require('path');
(async()=>{const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
for(const w of (process.env.WS||'681,700,768,1024').split(',').map(Number)){const p=await b.newPage({viewport:{width:w,height:900}});
await p.goto('file://'+path.join(process.env.TREE,'demo/services.html?mode=responsive'));await p.waitForTimeout(800);
console.log(w,JSON.stringify(await p.evaluate(L=>{document.body.style.width=L+'px';const q=s=>document.querySelector(s);const R=e=>{const r=e.getBoundingClientRect();return Math.round(r.width)+'x'+Math.round(r.height)};
 return {cta:R(q('.services-booking-cta')),right:Math.round(q('.services-booking-cta').getBoundingClientRect().right),title:R(q('.booking-cta-title')),desc:R(q('.booking-cta-desc')),acts:R(q('.booking-cta-actions')),btn:R(q('.btn-cta-call')),btn2:R(q('.btn-cta-booking-page')),docOver:Math.max(...[...document.querySelectorAll('#siteStage *')].map(e=>e.getBoundingClientRect().right))-L}},w-17)));await p.close();}
await b.close();})();
