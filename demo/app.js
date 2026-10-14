/**
 * BỆNH VIỆN THÚ Y LÊ SƠN — INTERACTIVE DEMO SCRIPT (PHƯƠNG ÁN D)
 * Antigravity - Senior UI/UX Specialist
 * Chuẩn: WCAG 2.1 AA (Keyboard, Focus Trap, Escape to Close, ARIA State)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const viewportOuter = document.getElementById('viewportOuter');
  const btnDesktop = document.getElementById('btnViewDesktop');
  const btnMobile = document.getElementById('btnViewMobile');
  const btnResponsive = document.getElementById('btnViewResponsive');

  const btnToggleAuth = document.getElementById('btnToggleAuth');
  const authGuestGroup = document.getElementById('authGuestGroup');
  const authUserGroup = document.getElementById('authUserGroup');

  const btnUserProfile = document.getElementById('btnUserProfile');
  const userDropdownMenu = document.getElementById('userDropdownMenu');

  const btnMobileMenu = document.getElementById('btnMobileMenu');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');

  const siteHeader = document.getElementById('siteHeader');
  const heroMain = document.getElementById('hero-main');

  const btnOpenSpecs = document.getElementById('btnOpenSpecs');
  const specsModal = document.getElementById('specsModal');
  const btnCloseSpecs = document.getElementById('btnCloseSpecs');

  // Helper: Lấy danh sách phần tử có thể nhận tiêu điểm
  function getFocusableElements(container) {
    return Array.from(
      container.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(el => {
      return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
    });
  }

  // 1. Chuyển đổi khung nhìn (Desktop 1440px / Mobile 390px / Responsive)
  function setViewportMode(mode) {
    viewportOuter.classList.remove('mode-desktop', 'mode-mobile', 'mode-responsive');
    viewportOuter.classList.add(`mode-${mode}`);

    btnDesktop.classList.toggle('active', mode === 'desktop');
    btnMobile.classList.toggle('active', mode === 'mobile');
    btnResponsive.classList.toggle('active', mode === 'responsive');

    // Đóng drawer nếu đang mở
    closeMobileDrawer(false);
  }

  // Khởi tạo theo URL query param nếu có
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'mobile') {
    setViewportMode('mobile');
  } else if (urlParams.get('mode') === 'responsive') {
    setViewportMode('responsive');
  }

  btnDesktop.addEventListener('click', () => setViewportMode('desktop'));
  btnMobile.addEventListener('click', () => setViewportMode('mobile'));
  btnResponsive.addEventListener('click', () => setViewportMode('responsive'));

  // 1b. Menu điều hướng chính: cập nhật trạng thái active
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if (link.classList.contains('drawer-link')) {
        closeMobileDrawer(true);
      }
    });
  });

  // 2. Chuyển đổi trạng thái tài khoản (Khách vãng lai ⇋ Đã đăng nhập)
  let isLoggedIn = false;
  btnToggleAuth.addEventListener('click', () => {
    isLoggedIn = !isLoggedIn;
    if (isLoggedIn) {
      authGuestGroup.style.display = 'none';
      authUserGroup.style.display = 'block';
      btnToggleAuth.innerHTML = '👤 Trạng thái: <strong>Đã đăng nhập</strong> (Bấm để đổi)';
      btnToggleAuth.classList.add('highlight');
      showToast('Đã chuyển sang trạng thái: Đã đăng nhập (Tài khoản mẫu: Khách Demo)');
    } else {
      authGuestGroup.style.display = '';
      authUserGroup.style.display = 'none';
      closeUserDropdown(false);
      btnToggleAuth.innerHTML = '👤 Trạng thái: <strong>Khách vãng lai</strong> (Bấm để đổi)';
      btnToggleAuth.classList.remove('highlight');
      showToast('Đã chuyển sang trạng thái: Khách vãng lai (Chưa đăng nhập)');
    }
  });

  // 3. Dropdown Menu người dùng (Hỗ trợ bàn phím: Escape, aria-expanded)
  function openUserDropdown() {
    userDropdownMenu.classList.add('show');
    btnUserProfile.setAttribute('aria-expanded', 'true');
  }

  function closeUserDropdown(returnFocus = true) {
    if (userDropdownMenu.classList.contains('show')) {
      userDropdownMenu.classList.remove('show');
      btnUserProfile.setAttribute('aria-expanded', 'false');
      if (returnFocus && btnUserProfile) {
        btnUserProfile.focus();
      }
    }
  }

  if (btnUserProfile) {
    btnUserProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = userDropdownMenu.classList.contains('show');
      if (isOpen) {
        closeUserDropdown(false);
      } else {
        openUserDropdown();
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (userDropdownMenu && !userDropdownMenu.contains(e.target) && e.target !== btnUserProfile) {
      closeUserDropdown(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && userDropdownMenu && userDropdownMenu.classList.contains('show')) {
      closeUserDropdown(true);
    }
  });

  // 4. Mobile Menu Drawer (WCAG AA: inert khi đóng, bẫy tiêu điểm khi mở, phím Escape)
  // Khởi tạo ban đầu: Drawer đóng -> bật inert
  mobileDrawer.setAttribute('inert', '');
  btnMobileMenu.setAttribute('aria-expanded', 'false');

  function openMobileDrawer() {
    mobileDrawer.removeAttribute('inert');
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    if (siteHeader) siteHeader.setAttribute('inert', '');
    if (heroMain) heroMain.setAttribute('inert', '');
    btnMobileMenu.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Chuyển tiêu điểm vào nút đóng đầu tiên trong drawer
    requestAnimationFrame(() => {
      if (btnCloseDrawer) btnCloseDrawer.focus();
    });
    setTimeout(() => {
      if (btnCloseDrawer && document.activeElement !== btnCloseDrawer) {
        btnCloseDrawer.focus();
      }
    }, 40);
  }

  function closeMobileDrawer(returnFocus = true) {
    if (!mobileDrawer.classList.contains('open')) return;

    mobileDrawer.setAttribute('inert', '');
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    if (siteHeader) siteHeader.removeAttribute('inert');
    if (heroMain) heroMain.removeAttribute('inert');
    btnMobileMenu.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    if (returnFocus && btnMobileMenu) {
      btnMobileMenu.focus();
    }
  }

  if (btnMobileMenu) {
    btnMobileMenu.addEventListener('click', openMobileDrawer);
    btnMobileMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMobileDrawer();
      }
    });
  }
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', () => closeMobileDrawer(true));
  if (drawerOverlay) drawerOverlay.addEventListener('click', () => closeMobileDrawer(true));

  // Bẫy tiêu điểm & phím Escape cho Drawer
  mobileDrawer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMobileDrawer(true);
      return;
    }

    if (e.key === 'Tab') {
      const focusables = getFocusableElements(mobileDrawer);
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });

  // 6. Modal Tiêu chí nghiệm thu & Design Tokens (WCAG AA: inert khi đóng, bẫy tiêu điểm, phím Escape)
  specsModal.setAttribute('inert', '');

  function openSpecsModal() {
    specsModal.removeAttribute('inert');
    specsModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (btnCloseSpecs) btnCloseSpecs.focus();
    });
  }

  function closeSpecsModal(returnFocus = true) {
    if (!specsModal.classList.contains('open')) return;

    specsModal.setAttribute('inert', '');
    specsModal.classList.remove('open');
    document.body.style.overflow = '';

    if (returnFocus && btnOpenSpecs) {
      btnOpenSpecs.focus();
    }
  }

  if (btnOpenSpecs) btnOpenSpecs.addEventListener('click', openSpecsModal);
  if (btnCloseSpecs) btnCloseSpecs.addEventListener('click', () => closeSpecsModal(true));
  specsModal.addEventListener('click', (e) => {
    if (e.target === specsModal) {
      closeSpecsModal(true);
    }
  });

  // Bẫy tiêu điểm & phím Escape cho Modal
  specsModal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSpecsModal(true);
      return;
    }

    if (e.key === 'Tab') {
      const focusables = getFocusableElements(specsModal);
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });

  // 7. Click CTA Buttons Simulation
  const btnCtaPrimary = document.getElementById('btnCtaPrimary');
  const btnCtaSecondary = document.getElementById('btnCtaSecondary');

  if (btnCtaPrimary) {
    btnCtaPrimary.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📋 Mô phỏng hành động: Mở form "Gửi yêu cầu đặt lịch" (Nhân viên sẽ gọi điện xác nhận sau khi gửi)');
    });
  }
  if (btnCtaSecondary) {
    btnCtaSecondary.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('🐾 Mô phỏng hành động: Cuộn đến danh mục "Dịch vụ y tế & Chăm sóc" của Bệnh viện Lê Sơn');
    });
  }

  // Toast Helper
  function showToast(message) {
    let toast = document.getElementById('demoToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'demoToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%) translateY(30px)';
      toast.style.background = '#251329';
      toast.style.color = '#FFF9F1';
      toast.style.padding = '12px 24px';
      toast.style.borderRadius = '30px';
      toast.style.fontSize = '14px';
      toast.style.fontWeight = '500';
      toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
      toast.style.border = '1px solid #FC9238';
      toast.style.zIndex = '2000';
      toast.style.opacity = '0';
      toast.style.transition = 'all 240ms cubic-bezier(0.2, 0.8, 0.2, 1)';
      toast.style.pointerEvents = 'none';
      toast.style.maxWidth = '90vw';
      toast.style.textAlign = 'center';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(30px)';
    }, 3800);
  }
});
