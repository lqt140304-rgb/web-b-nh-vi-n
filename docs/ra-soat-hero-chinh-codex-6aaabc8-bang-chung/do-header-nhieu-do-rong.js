const { chromium } = require('/opt/node-tools/node_modules/playwright');
const SP = '/tmp/claude-0/-home-user-web-b-nh-vi-n/4d6044c5-331d-57d4-95fa-967c0c87f9be/scratchpad';
const C = 'file://' + SP + '/codex-hero/demo/';
const rect = e => { const r = e.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.right), Math.round(r.bottom)]; };
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const cases = [];
  for (const page of ['index']) for (const w of [422, 424, 426, 427]) cases.push([page, w, 'responsive']);
  
  for (const [page, w, mode] of cases) {
    const p = await b.newPage({ viewport: { width: w, height: 800 } });
    await p.goto(`${C}${page}.html?mode=${mode}`); await p.waitForTimeout(1800);
    const r = await p.evaluate(() => {
      const q = s => document.querySelector(s);
      const items = { brand: q('.site-header .brand-link'), login: q('.site-header .btn-auth-login'), reg: q('.site-header .btn-auth-register'), menu: q('.site-header .btn-mobile-menu') };
      const R = {}, vis = {};
      for (const k in items) { const e = items[k]; const cs = getComputedStyle(e); const rr = e.getBoundingClientRect(); vis[k] = cs.display !== 'none' && rr.width > 0; R[k] = [Math.round(rr.left), Math.round(rr.top), Math.round(rr.right), Math.round(rr.bottom)]; }
      const hdr = q('.site-header').getBoundingClientRect();
      const stage = q('.site-stage').getBoundingClientRect();
      const ov = (a, b) => a[0] < b[2] - 0.5 && b[0] < a[2] - 0.5 && a[1] < b[3] && b[1] < a[3];
      const keys = Object.keys(items).filter(k => vis[k]); const overlaps = [];
      for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) if (ov(R[keys[i]], R[keys[j]])) overlaps.push(keys[i] + '×' + keys[j]);
      const clipped = keys.filter(k => R[k][2] > stage.right + 0.5 || R[k][0] < stage.left - 0.5);
      return { vis: keys.join(','), loginH: R.login[3] - R.login[1], regH: R.reg[3] - R.reg[1], loginFont: getComputedStyle(items.login).fontSize, overlaps, clipped, sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, hdrH: Math.round(hdr.height), brandLeft: R.brand[2] };
    });
    const ok = r.vis.includes('login') && r.vis.includes('reg') && !r.overlaps.length && !r.clipped.length;
    console.log(page, mode === 'mobile' ? 'MOBILE390' : w, ok ? 'OK ' : 'BAD', JSON.stringify(r));
    if ((page === 'index') && [320, 360, 390].includes(w) && mode === 'responsive') await p.screenshot({ path: `${SP}/qa2/header-${w}.png`, clip: { x: 0, y: 0, width: Math.min(w, 420), height: 330 } });
    await p.close();
  }
  await b.close();
})();
