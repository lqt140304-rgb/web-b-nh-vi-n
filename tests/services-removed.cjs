const assert=require('assert'),fs=require('fs'),path=require('path');
for(const file of ['services.html','services.js'])assert(!fs.existsSync(path.join('demo',file)),`${file} must be removed`);
for(const file of fs.readdirSync('demo').filter(f=>/\.(html|js)$/.test(f)))assert(!/(?:href|src)\s*=\s*["'][^"']*services\.(?:html|js)/i.test(fs.readFileSync(path.join('demo',file),'utf8')),`${file} still links to retired Services`);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.BASE_URL||'http://127.0.0.1:3030',output=process.env.QA_OUTPUT||'docs/qa/services-removed';fs.mkdirSync(output,{recursive:true});
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME_BIN});const rows=[],errors=[];try{
for(const [mode,width] of [['responsive',360],['responsive',390],['responsive',681],['responsive',700],['responsive',768],['responsive',1440],['mobile',1000]])for(const user of [false,true]){
 const p=await b.newPage({viewport:{width,height:1000}});p.on('pageerror',e=>errors.push(e.message));await p.goto(`${base}/index.html?mode=${mode}&user=${user?1:0}`);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(400);
 assert.equal(await p.locator('a[href*="services.html"]').count(),0);assert.deepEqual(await p.locator('.nav-menu a').allTextContents(),['Trang chủ','Giới thiệu','Liên hệ']);assert.deepEqual(await p.locator('#mobileMenu li a').allTextContents(),['Trang chủ','Giới thiệu','Liên hệ']);assert.equal(await p.locator('.cta a').count(),1);assert.equal(await p.locator('.cta a').getAttribute('href'),'index.html#form-dat-lich');
 const fit=await p.locator('#siteHeader').evaluate(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth;});assert(fit);
 if(width<=992||mode==='mobile'){await p.locator('#btnMobileMenu').click();await p.locator('#btnMobileMenu').focus();await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.textContent),'Trang chủ');await p.keyboard.press('Escape');assert(await p.locator('#mobileMenu').isHidden());}
 if([390,1440].includes(width)&&!user)await p.screenshot({path:`${output}/without-services-${width}.png`,fullPage:true});
 if(await p.locator('#gioi-thieu').count()){
  assert.equal(await p.locator('.gt__cta a').count(),1);assert.equal(await p.locator('.gt__cta a').innerText(),'Chỉ đường');
  const end=await p.evaluate(()=>{const a=document.querySelector('.gt'),pin=document.querySelector('.gt-pin'),off=document.querySelector('.demo-controller').offsetHeight,vh=innerHeight-off,top=off+Math.max(0,Math.round((vh-a.offsetHeight)/2));return pin.getBoundingClientRect().top+scrollY-top+Math.round(vh*.8)*.75;});await p.evaluate(y=>scrollTo(0,y+40),end);await p.waitForTimeout(1500);assert(await p.locator('#gioi-thieu').evaluate(e=>e.classList.contains('is-landed')));assert(await p.locator('.gt__slot-frame').first().evaluate(e=>getComputedStyle(e).visibility==='visible'));
 }
 rows.push({mode,width,user,headerFits:fit});await p.close();
}
const requestContext=await b.newContext();for(const file of ['services.html','services.js']){const response=await requestContext.request.get(`${base}/${file}`);assert.equal(response.status(),404);}await requestContext.close();
assert.deepEqual(errors,[]);fs.writeFileSync(`${output}/services-removed.json`,JSON.stringify({states:rows.length,rows,pageErrors:errors,retiredRoutes:404},null,2));console.log(`PASS: retired files/routes, all Services links removed, ${rows.length} header/account/keyboard states; Introduction landing where present`);
}finally{await b.close()}})().catch(e=>{console.error(e);process.exit(1)});
