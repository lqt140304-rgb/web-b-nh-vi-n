const { chromium } = require('/opt/node-tools/node_modules/playwright');
const SP = '/tmp/claude-0/-home-user-web-b-nh-vi-n/4d6044c5-331d-57d4-95fa-967c0c87f9be/scratchpad';
const URL_C = 'file:///tmp/claude-0/-home-user-web-b-nh-vi-n/4d6044c5-331d-57d4-95fa-967c0c87f9be/scratchpad/codex-hero/demo/index.html?mode=responsive';
const URL_R = 'file://' + SP + '/hero-orbit/hero-quy-dao.html';
const proxy = { server: process.env.HTTPS_PROXY, bypass: '127.0.0.1,localhost' };
const SAMPLE = () => new Promise(res => {
  const text = [...document.querySelectorAll('[data-measure]')].map(e => e.getBoundingClientRect()).filter(r => r.width > 0);
  let n = 0, tIn = 0, maxT = 0, fIn = 0, maxF = 0;
  const area = r => r.width * r.height;
  const ix = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  const id = setInterval(() => {
    const fr = [...document.querySelectorAll('.frame')].filter(f => +getComputedStyle(f).opacity > .3).map(f => f.getBoundingClientRect());
    let anyT = false, anyF = false;
    for (const f of fr) for (const t of text) { const o = ix(f, t) / area(t); if (o > 0) { anyT = true; maxT = Math.max(maxT, o); } }
    for (let i = 0; i < fr.length; i++) for (let j = i + 1; j < fr.length; j++) { const o = ix(fr[i], fr[j]) / Math.min(area(fr[i]), area(fr[j])); if (o > .25) anyF = true; maxF = Math.max(maxF, o); }
    tIn += anyT; fIn += anyF;
    if (++n >= 300) { clearInterval(id); res({ samples: n, pctFrameOverText: +(100 * tIn / n).toFixed(1), maxTextCoverage: +maxT.toFixed(2), pctFrameOverlap25: +(100 * fIn / n).toFixed(1), maxFrameOverlap: +maxF.toFixed(2) }); }
  }, 200);
});
(async () => {
  const b = await chromium.launch({ proxy });
  const out = {};
  // 1. intro order (real time)
  for (const [name, url] of [['codex', URL_C], ['ref', URL_R]]) {
    const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
    await p.addInitScript(() => { window.__log = []; const t0 = performance.now(); (function loop() { const c = document.querySelector('.cta'); const f = [...document.querySelectorAll('.frame')].map(x => +getComputedStyle(x).opacity); if (c) window.__log.push([Math.round(performance.now() - t0), +getComputedStyle(c).opacity, Math.max(0, ...f)]); if (performance.now() - t0 < 6000) requestAnimationFrame(loop); })(); });
    await p.goto(url); await p.waitForTimeout(6500);
    const log = await p.evaluate(() => window.__log);
    const tFull = (log.find(r => r[1] > .99) || [])[0], fFirst = (log.find(r => r[2] > .03) || [])[0], fAll = (log.find(r => r[2] > .99) || [])[0];
    out['intro_' + name] = { ctaFullMs: tFull, firstFrameMs: fFirst, orderOK: tFull !== undefined && fFirst !== undefined && fFirst >= tFull - 50 };
    await p.close();
  }
  // 2. 60s overlap samples, both pages, 1440 and 390 (parallel)
  const jobs = [];
  for (const [name, url] of [['codex', URL_C], ['ref', URL_R]]) for (const w of [1440, 390]) {
    jobs.push((async () => { const p = await b.newPage({ viewport: { width: w, height: w > 500 ? 900 : 844 } }); await p.goto(url); await p.waitForTimeout(5500); const r = await p.evaluate(SAMPLE); out[`overlap_${name}_${w}`] = r; await p.close(); })());
  }
  await Promise.all(jobs);
  // 3. overflow with motion ON, many widths, codex
  out.overflow = {};
  for (const w of [1440, 1280, 1024, 992, 768, 390, 360, 320]) {
    const p = await b.newPage({ viewport: { width: w, height: 800 } }); const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) });
    await p.goto(URL_C); await p.waitForTimeout(4500);
    out.overflow[w] = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, stage: document.querySelector('.site-stage').scrollWidth, frames: [...document.querySelectorAll('.frame')].filter(f => +getComputedStyle(f).opacity > .1).length }));
    out.overflow[w].errs = errs.length; await p.close();
  }
  console.log(JSON.stringify(out, null, 1));
  await b.close();
})();
