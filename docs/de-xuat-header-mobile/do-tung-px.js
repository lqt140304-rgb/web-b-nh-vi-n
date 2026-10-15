const { chromium } = require('/opt/node-tools/node_modules/playwright');
const SP = '/tmp/claude-0/-home-user-web-b-nh-vi-n/4d6044c5-331d-57d4-95fa-967c0c87f9be/scratchpad';
const U = 'file://' + SP + '/hdr/proto/header-mobile-mau.html';
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const bad = [];
  for (const user of [0, 1]) for (const open of [0, 1]) {
    const p = await b.newPage({ viewport: { width: 320, height: 700 } }); await p.goto(`${U}?user=${user}&open=${open}`); await p.waitForTimeout(1200);
    for (let w = 320; w <= 600; w++) {
      await p.setViewportSize({ width: w, height: 700 }); await p.waitForTimeout(30);
      const r = await p.evaluate(() => {
        const q = s => document.querySelector(s), vis = e => e && e.getBoundingClientRect().width > 0 && getComputedStyle(e).display !== 'none';
        const names = { brand: '.brand', login: '.header-actions .pill--outline', reg: '.header-actions .pill--filled', user: '.user-btn', menu: '.menu-btn' };
        const R = {}; for (const k in names) { const e = q(names[k]); if (vis(e)) { const r = e.getBoundingClientRect(); R[k] = [r.left, r.top, r.right, r.bottom]; } }
        const ks = Object.keys(R), ov = [];
        for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) { const a = R[ks[i]], c = R[ks[j]]; if (a[0] < c[2] - .5 && c[0] < a[2] - .5 && a[1] < c[3] && c[1] < a[3]) ov.push(ks[i] + '×' + ks[j]); }
        const small = ks.filter(k => k !== 'brand' && R[k][3] - R[k][1] < 43.5);
        const m = q('#mobileMenu'), mr = vis(m) ? m.getBoundingClientRect() : null;
        return { ov, clip: ks.filter(k => R[k][2] > innerWidth + .5 || R[k][0] < -.5), small, sw: document.documentElement.scrollWidth, cw: innerWidth, menuClip: mr ? (mr.right > innerWidth || mr.left < 0) : false, gap: R.login ? Math.round(R.brand[2] - 0) : 0, brandRight: Math.round(R.brand[2]), firstAction: Math.round(Math.min(...ks.filter(k => k !== 'brand').map(k => R[k][0]))) };
      });
      const gapBrand = r.firstAction - r.brandRight;
      if (r.ov.length || r.clip.length || r.small.length || r.sw > r.cw || r.menuClip || gapBrand < 4) bad.push({ user, open, w, ...r, gapBrand });
    }
    await p.close();
  }
  console.log('problems', bad.length); console.log(JSON.stringify(bad.slice(0, 10)));
  await b.close();
})();
