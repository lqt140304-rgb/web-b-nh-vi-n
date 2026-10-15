const { chromium } = require('/opt/node-tools/node_modules/playwright');
const SP = '/tmp/claude-0/-home-user-web-b-nh-vi-n/4d6044c5-331d-57d4-95fa-967c0c87f9be/scratchpad';
const C = 'file://' + SP + '/codex-hero/demo/';
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const bad = [], widths = []; for (let w = 320; w <= 560; w += 1) widths.push(w); for (const w of [600, 768, 900, 992, 993, 1024, 1280, 1440]) widths.push(w);
  for (const page of ['index', 'services']) {
    const p = await b.newPage({ viewport: { width: 320, height: 700 } });
    await p.goto(`${C}${page}.html?mode=responsive`); await p.waitForTimeout(1500);
    for (const user of [false, true]) {
      if (user) await p.click('#btnToggleAuth');
      for (const w of widths) {
        await p.setViewportSize({ width: w, height: 700 }); await p.waitForTimeout(60);
        const r = await p.evaluate(() => {
          const q = s => document.querySelector(s); const vis = e => e && getComputedStyle(e).display !== 'none' && e.getBoundingClientRect().width > 0;
          const names = ['.site-header .brand-link', '.site-header .btn-auth-login', '.site-header .btn-auth-register', '.site-header .btn-user-profile', '.site-header .btn-mobile-menu'];
          const R = {}; for (const n of names) { const e = q(n); if (vis(e)) { const r = e.getBoundingClientRect(); R[n.split(' ').pop()] = [r.left, r.top, r.right, r.bottom]; } }
          const ks = Object.keys(R), ov = [];
          for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) { const a = R[ks[i]], c = R[ks[j]]; if (a[0] < c[2] - .5 && c[0] < a[2] - .5 && a[1] < c[3] && c[1] < a[3]) ov.push(ks[i] + '×' + ks[j]); }
          const clip = ks.filter(k => R[k][2] > innerWidth + .5 || R[k][0] < -.5);
          const guestOk = !!R['.btn-auth-login'] && !!R['.btn-auth-register'];
          const h = (R['.btn-auth-login'] || [0, 0, 0, 0]); 
          return { ks, ov, clip, sw: document.documentElement.scrollWidth, cw: innerWidth, guestOk, loginH: Math.round(h[3] - h[1]) };
        });
        const problem = r.ov.length || r.clip.length || r.sw > r.cw || (!user && !r.guestOk);
        if (problem) bad.push({ page, user, w, ...r });
      }
    }
    await p.close();
  }
  console.log('widths tested', widths.length, 'x 2 pages x 2 states; problems:', bad.length);
  console.log(JSON.stringify(bad.slice(0, 12)));
  await b.close();
})();
