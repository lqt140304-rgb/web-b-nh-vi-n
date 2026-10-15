const { chromium } = require('/opt/node-tools/node_modules/playwright');
const SP = '/tmp/claude-0/-home-user-web-b-nh-vi-n/4d6044c5-331d-57d4-95fa-967c0c87f9be/scratchpad';
const M = 'file://' + SP + '/' + (process.env.TREE || 'codex-hero') + '/demo/', A = 'file://' + SP + '/base-ag/demo/';
const lum = c => { const v = c.map(x => { x /= 255; return x <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4) }); return .2126 * v[0] + .7152 * v[1] + .0722 * v[2]; };
(async () => {
  const b = await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } });
  const errs = [];
  for (const w of [1440, 1100, 1024, 768, 701, 700, 390, 360]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } }); p.on('pageerror', e => errs.push(w + ':' + e)); p.on('console', m => { if (m.type() === 'error') errs.push(w + ':' + m.text()) });
    await p.goto(M + 'services.html?mode=responsive'); await p.waitForTimeout(1800);
    const r = await p.evaluate(() => {
      const q = s => document.querySelector(s); const box = e => { const r = e.getBoundingClientRect(); return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), r: Math.round(r.right), b: Math.round(r.bottom) }; };
      const cta = q('.services-booking-cta'), t = q('.booking-cta-title'), d = q('.booking-cta-desc'), a = q('.booking-cta-actions a.btn-cta-primary, .booking-cta-actions .btn-booking, .booking-cta-actions a'), links = [...cta.querySelectorAll('a')];
      const cs = getComputedStyle(cta), ts = getComputedStyle(t);
      const decor = q('.booking-cta-decor'); const dr = decor ? decor.getBoundingClientRect() : null;
      const textBoxes = [t, d, ...links].map(e => e.getBoundingClientRect());
      const decorHit = dr && getComputedStyle(decor).display !== 'none' ? textBoxes.some(r => dr.left < r.right + 6 && r.left < dr.right + 6 && dr.top < r.bottom + 6 && r.top < dr.bottom + 6) : false;
      const lineH = e => Math.round(e.getBoundingClientRect().height / parseFloat(getComputedStyle(e).lineHeight));
      return { cta: box(cta), title: box(t), titleLines: lineH(t), desc: box(d), descLines: lineH(d), links: links.map(l => ({ t: l.innerText.trim().replace(/\s+/g, ' '), href: l.getAttribute('href'), ...box(l), bg: getComputedStyle(l).backgroundColor, col: getComputedStyle(l).color })), bg: cs.backgroundColor, border: cs.border, radius: cs.borderRadius, shadow: cs.boxShadow, font: ts.fontFamily.slice(0, 22), tcol: ts.color, tsize: ts.fontSize, decorDisplay: decor ? getComputedStyle(decor).display : null, decorHit, sw: document.documentElement.scrollWidth, cw: innerWidth, text: cta.innerText.replace(/\s+/g, ' ').trim() };
    });
    console.log(w, JSON.stringify({ h: r.cta.h, titleLines: r.titleLines, descLines: r.descLines, links: r.links.map(l => [l.t, l.href, l.w + 'x' + l.h, l.x + ',' + l.y]), bg: r.bg, border: r.border, radius: r.radius, shadow: r.shadow.slice(0, 40), font: r.font, tcol: r.tcol, tsize: r.tsize, decor: r.decorDisplay, decorHit: r.decorHit, sw: r.sw, cw: r.cw }));
    if (w === 1440) console.log('TEXT:', r.text);
    if ([1440, 1024, 390].includes(w)) await p.locator('.services-booking-cta').screenshot({ path: `${SP}/qa3/cta-${w}.png` });
    await p.close();
  }
  console.log('errors', errs.length, errs.slice(0, 3));
  await b.close();
})();
