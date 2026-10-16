// Giả lập thanh cuộn cổ điển 17px: cửa sổ (media query) = w, bề rộng bố cục = w-17
const {chromium}=require('/opt/node-tools/node_modules/playwright');const path=require('path');
(async()=>{const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
for(const page of (process.env.PAGES||'services.html,index.html').split(','))for(const auth of [false,true]) for(const w of (process.env.WS||'680,681,684,688,692,696,700').split(',').map(Number)){
 const p=await b.newPage({viewport:{width:w,height:900}});
 await p.goto('file://'+path.join(process.env.TREE,'demo/'+page+'?mode=responsive'));await p.waitForTimeout(800);
 if(auth) await p.click('#btnToggleAuth');
 const r=await p.evaluate(L=>{document.body.style.width=L+'px';document.body.style.overflowX='visible';
  const off=[...document.querySelectorAll('#siteStage *, #siteStage')].map(e=>({e,r:e.getBoundingClientRect()})).filter(o=>o.r.right>L+0.5&&o.r.width>0&&getComputedStyle(o.e).position!=='absolute')
   .map(o=>(typeof o.e.className==='string'&&o.e.className?o.e.className.split(' ')[0]:o.e.tagName)+':'+o.r.right.toFixed(1)+'/w'+o.r.width.toFixed(0));
  return {stage:document.getElementById('siteStage').getBoundingClientRect().width.toFixed(1),off:off.slice(0,14)};},w-17);
 console.log(page,auth?'acc':'guest',w,'layout',w-17,'stage',r.stage,JSON.stringify(r.off));await p.close();}
await b.close();})();
