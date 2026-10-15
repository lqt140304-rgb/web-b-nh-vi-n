const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('assert');const fs=require('fs');
const output=process.env.QA_OUTPUT || 'docs/qa/hero-chinh';fs.mkdirSync(output,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_BIN,headless:true});
 try {
  for(const file of ['index','services'])for(const width of [320,360,361,375,376,390,420,421,427,428,430,431,440,500,501,768,1024,1440,1000]){
   const mode=width===1000?'mobile':'responsive';
   const p=await browser.newPage({viewport:{width,height:900}});
   await p.goto(`http://127.0.0.1:3030/${file}.html?mode=${mode}`);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(350);await p.waitForFunction(()=>document.documentElement.scrollWidth<=innerWidth,null,{timeout:3000});
   for(const loggedIn of [false,true]){
    if(loggedIn)await p.locator('#btnToggleAuth').click();
    const selectors=['.brand-logo-img','.brand-text-block',...(loggedIn?['.btn-user-profile']:['.btn-auth-login','.btn-auth-register']),...(width<=992||mode==='mobile'?['.btn-mobile-menu']:[])];
    const boxes=[];
    for(const selector of selectors){
     const item=p.locator(`.site-header ${selector}`);assert(await item.isVisible(),`${file} ${width} ${selector}`);
     const box=await item.boundingBox();assert(box.x>=0&&box.x+box.width<=width);if(selector.startsWith('.btn-'))assert(box.height>=44);
     for(const prior of boxes)assert(box.x>=prior.x+prior.width||prior.x>=box.x+box.width,'header controls overlap');boxes.push(box);
     if(!selector.startsWith('.btn-'))continue;
     await item.focus();await p.keyboard.press('Tab');await p.keyboard.press('Shift+Tab');
     assert(await item.evaluate(e=>document.activeElement===e&&getComputedStyle(e).outlineStyle!=='none'&&parseFloat(getComputedStyle(e).outlineWidth)>=2));
    }
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    assert(await p.locator(mode==='mobile'?'.site-header':'.site-stage').evaluate(e=>e.scrollWidth<=e.clientWidth));
    if(!loggedIn){for(const name of ['login','register']){
     await p.locator(`.site-header .btn-auth-${name}`).click();assert(p.url().endsWith(name==='login'?'#dang-nhap':'#dang-ky'));
    }}
    if([360,390,1000].includes(width))await p.locator('.site-header').screenshot({path:`${output}/header-${file}-${mode==='mobile'?'mobile-390':width}-${loggedIn?'account':'guest'}.png`});
   }
   console.log(`PASS header ${file} ${width} ${mode}: guest/account, fit, 44px, focus, links`);await p.close();
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
