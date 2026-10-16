// Copied from shared/requirements@84b8f30; only shared-header integration hooks added.
document.addEventListener('DOMContentLoaded', function () {
(function () {
  var btn = document.getElementById('btnMobileMenu'), menu = document.getElementById('mobileMenu');
  var q = new URLSearchParams(location.search);
  if (q.get('user') === '1') document.getElementById('btnToggleAuth').click();
  function setOpen(o) { menu.hidden = !o; btn.setAttribute('aria-expanded', String(o)); btn.setAttribute('aria-label', o ? 'Đóng danh mục điều hướng' : 'Mở danh mục điều hướng'); }
  btn.addEventListener('click', function () { setOpen(menu.hidden); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); } });
  document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) setOpen(false); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('header:close', function () { setOpen(false); });
  document.getElementById('btnToggleAuth').addEventListener('click', function () { setOpen(false); });
  document.getElementById('btnUserProfile').addEventListener('click', function () { setOpen(false); });
  window.addEventListener('resize', function () { if (getComputedStyle(btn).display === 'none') setOpen(false); });
  if (q.get('open') === '1' || q.get('drawer') === 'open') setOpen(true);
})();
});
