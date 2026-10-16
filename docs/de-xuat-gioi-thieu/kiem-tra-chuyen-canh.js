const {chromium}=require('/opt/node-tools/node_modules/playwright');
const path=require('path');
(async()=>{
 const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
 const url='file://'+path.resolve('trang-chu-gioi-thieu.html');
 for(const [name,w,h,mob] of [['pc',1440,900,false],['mb',390,844,true]]){
  const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:1,isMobile:mob,hasTouch:mob});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto(url);await p.waitForTimeout(5000);
  // cùng công thức với measureSlots(): đầu nhịp đứng yên + 75% độ dài nhịp
  const end=await p.evaluate(()=>{const a=document.querySelector('.about'),w=document.querySelector('.about-pin');const vh=innerHeight,top=Math.max(0,Math.round((vh-a.offsetHeight)/2)),pin=Math.round(vh*0.8);return w.getBoundingClientRect().top+scrollY-top+pin*0.75;});
  console.log(name,'END',Math.round(end));
  for(let i=0;i<=10;i++){
   const y=Math.round(end*i/10);
   await p.evaluate(y=>window.scrollTo(0,y),y);await p.waitForTimeout(450);
   await p.screenshot({path:`shots/${name}-${i}.png`});
  }
  // at P=1 (just before), compare frame vs slot positions
  await p.evaluate(y=>window.scrollTo(0,y),Math.round(end*0.999));await p.waitForTimeout(600);
  const cmp=await p.evaluate(()=>{
    const fr=[...document.querySelectorAll('.hero__frames > *')].filter(e=>+getComputedStyle(e).opacity>0.5);
    const sl=[...document.querySelectorAll('.slot-frame')].filter(e=>e.offsetParent);
    return {fr:fr.map(e=>{const r=e.getBoundingClientRect();return [r.x|0,r.y|0,r.width|0,r.height|0]}),sl:sl.map(e=>{const r=e.getBoundingClientRect();return [r.x|0,r.y|0,r.width|0,r.height|0]})};
  });
  await p.evaluate(y=>window.scrollTo(0,y),Math.round(end*1.3));await p.waitForTimeout(500);
  await p.screenshot({path:`shots/${name}-landed.png`});
  await p.evaluate(y=>window.scrollTo(0,y),Math.round(end+h*0.6));await p.waitForTimeout(500);
  await p.screenshot({path:`shots/${name}-about.png`});
  const ov=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,landed:document.querySelector('.about').classList.contains('is-landed')}));
  console.log(name,JSON.stringify({errs,ov,cmp}));
  // reverse
  await p.evaluate(()=>window.scrollTo(0,0));await p.waitForTimeout(800);
  await p.screenshot({path:`shots/${name}-back.png`});
  await p.close();
 }
 const ctx=await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto(url);await p.waitForTimeout(1500);
 await p.evaluate(()=>window.scrollTo(0,document.querySelector('.about').offsetTop-40));await p.waitForTimeout(400);
 await p.screenshot({path:'shots/reduce-about.png'});
 console.log('reduce',JSON.stringify({errs,static:await p.evaluate(()=>document.querySelector('.about').className)}));
 await b.close();
})();
