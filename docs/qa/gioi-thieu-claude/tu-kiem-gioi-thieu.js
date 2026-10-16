// Tự kiểm phần Giới thiệu trong demo/: ba chế độ xem, lỗi console, tràn ngang, khung hạ khớp ô, nhịp đứng yên, cuộn ngược, giảm chuyển động.
const {chromium}=require('/opt/node-tools/node_modules/playwright');const path=require('path');
const TREE=process.env.TREE, OUT=process.env.OUT||'shots';
const url=q=>'file://'+path.join(TREE,'demo/index.html')+q;
(async()=>{const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
const res={};
for(const [name,q,w,h] of [['desktop','',1500,900],['mobile','?mode=mobile',1280,900],['resp-1440','?mode=responsive',1440,900],['resp-390','?mode=responsive',390,844],['resp-768','?mode=responsive',768,1024]]){
 const p=await b.newPage({viewport:{width:w,height:h}});const errs=[];
 p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(url(q));await p.waitForTimeout(4500);
 const end=await p.evaluate(()=>{const a=document.querySelector('.gt'),w=document.querySelector('.gt-pin');let off=0;document.querySelectorAll('[data-sticky-top]').forEach(e=>off=Math.max(off,e.offsetHeight));const vh=innerHeight-off,top=off+Math.max(0,Math.round((vh-a.offsetHeight)/2)),pin=Math.round(vh*0.8);return w.getBoundingClientRect().top+scrollY-top+pin*0.75;});
 const tops=[];
 for(let i=0;i<=10;i++){const y=Math.round(end*i/10);await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(500);
   tops.push(Math.round(await p.evaluate(()=>document.querySelector('.gt').getBoundingClientRect().top-document.querySelector('.demo-controller').getBoundingClientRect().bottom)));
   await p.screenshot({path:`${OUT}/${name}-${String(i).padStart(2,'0')}.png`});}
 await p.evaluate(y=>scrollTo(0,y),Math.round(end*0.999));await p.waitForTimeout(900);
 const cmp=await p.evaluate(()=>{const R=e=>{const r=e.getBoundingClientRect();return [Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)]};
   const fr=[...document.querySelectorAll('.ho__frames .frame')].filter(e=>+getComputedStyle(e).opacity>0.5).map(R);
   const sl=[...document.querySelectorAll('.gt__slot-frame')].map(R);
   let worst=0;for(const s of sl){let best=1e9;for(const f of fr)best=Math.min(best,Math.max(...s.map((v,i)=>Math.abs(v-f[i]))));worst=Math.max(worst,best);}return {nFr:fr.length,worst};});
 await p.evaluate(y=>scrollTo(0,y),Math.round(end+300));await p.waitForTimeout(700);
 const after=await p.evaluate(()=>({landed:document.querySelector('.gt').classList.contains('is-landed'),sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,vis:getComputedStyle(document.querySelector('.gt__slot-frame')).visibility}));
 await p.screenshot({path:`${OUT}/${name}-landed.png`});
 await p.evaluate(()=>scrollTo(0,document.body.scrollHeight));await p.waitForTimeout(500);
 await p.screenshot({path:`${OUT}/${name}-end.png`});
 await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(1500);
 const back=await p.evaluate(()=>({landed:document.querySelector('.gt').classList.contains('is-landed'),orbOp:getComputedStyle(document.querySelector('.ho__orbits')).opacity,vis:[...document.querySelectorAll('.ho__frames .frame')].filter(e=>+getComputedStyle(e).opacity>0.3).length}));
 await p.screenshot({path:`${OUT}/${name}-back.png`});
 res[name]={errs,END:Math.round(end),pinTops:tops,cmp,after,back};await p.close();}
const ctx=await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(url('?mode=responsive'));await p.waitForTimeout(1500);
const r=await p.evaluate(()=>({cls:document.querySelector('.gt-pin').className+' | '+document.querySelector('.gt').className,pos:getComputedStyle(document.querySelector('.gt')).position,space:getComputedStyle(document.querySelector('.gt-pin__space')).display}));
await p.evaluate(()=>scrollTo(0,document.querySelector('.gt-pin').getBoundingClientRect().top+scrollY-40));await p.waitForTimeout(400);
await p.screenshot({path:`${OUT}/reduce.png`});res.reduce={errs,...r};
console.log(JSON.stringify(res,null,1));await b.close();})();
