/**
 * BỆNH VIỆN THÚ Y LÊ SƠN — INTERACTIVE DEMO SCRIPT (PHƯƠNG ÁN D)
 * Antigravity - Senior UI/UX Specialist
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

  const btnOpenSpecs = document.getElementById('btnOpenSpecs');
  const specsModal = document.getElementById('specsModal');
  const btnCloseSpecs = document.getElementById('btnCloseSpecs');

  const petDots = document.querySelectorAll('.dot-btn');
  const petArchLeft = document.getElementById('petArchLeft');
  const petArchCenter = document.getElementById('petArchCenter');
  const petArchRight = document.getElementById('petArchRight');

  // 1. Chuyển đổi khung nhìn (Desktop 1440px / Mobile 390px / Responsive)
  function setViewportMode(mode) {
    viewportOuter.classList.remove('mode-desktop', 'mode-mobile', 'mode-responsive');
    viewportOuter.classList.add(`mode-${mode}`);

    btnDesktop.classList.toggle('active', mode === 'desktop');
    btnMobile.classList.toggle('active', mode === 'mobile');
    btnResponsive.classList.toggle('active', mode === 'responsive');

    // Đóng drawer nếu đang mở
    closeMobileDrawer();
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
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
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
      showToast('Đã chuyển sang trạng thái: Đã đăng nhập (Khách: Nguyễn Minh Khang)');
    } else {
      authGuestGroup.style.display = 'flex';
      authUserGroup.style.display = 'none';
      userDropdownMenu.classList.remove('show');
      btnToggleAuth.innerHTML = '👤 Trạng thái: <strong>Khách vãng lai</strong> (Bấm để đổi)';
      btnToggleAuth.classList.remove('highlight');
      showToast('Đã chuyển sang trạng thái: Khách vãng lai (Chưa đăng nhập)');
    }
  });

  // 3. Dropdown Menu người dùng
  if (btnUserProfile) {
    btnUserProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdownMenu.classList.toggle('show');
    });
  }
  document.addEventListener('click', (e) => {
    if (userDropdownMenu && !userDropdownMenu.contains(e.target) && e.target !== btnUserProfile) {
      userDropdownMenu.classList.remove('show');
    }
  });

  // 4. Mobile Menu Drawer
  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (btnMobileMenu) btnMobileMenu.addEventListener('click', openMobileDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeMobileDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileDrawer);

  // 5. Mobile Pet Gallery Dots Interaction
  petDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = dot.getAttribute('data-target');
      petDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Tinh chỉnh hiển thị trên mobile khi bấm chấm
      if (target === 'left') {
        petArchLeft.style.width = '240px';
        petArchLeft.style.height = '220px';
        petArchLeft.style.opacity = '1';
        petArchLeft.style.zIndex = '4';
        petArchLeft.style.transform = 'scale(1)';

        petArchCenter.style.width = '68px';
        petArchCenter.style.height = '180px';
        petArchCenter.style.opacity = '0.8';
        petArchCenter.style.zIndex = '2';

        petArchRight.style.width = '68px';
        petArchRight.style.height = '180px';
        petArchRight.style.opacity = '0.8';
        petArchRight.style.zIndex = '2';
      } else if (target === 'center') {
        petArchCenter.style.width = '240px';
        petArchCenter.style.height = '220px';
        petArchCenter.style.opacity = '1';
        petArchCenter.style.zIndex = '4';
        petArchCenter.style.transform = 'scale(1)';

        petArchLeft.style.width = '68px';
        petArchLeft.style.height = '180px';
        petArchLeft.style.opacity = '0.85';
        petArchLeft.style.zIndex = '2';
        petArchLeft.style.transform = 'translateX(12px) scale(0.92)';

        petArchRight.style.width = '68px';
        petArchRight.style.height = '180px';
        petArchRight.style.opacity = '0.85';
        petArchRight.style.zIndex = '2';
        petArchRight.style.transform = 'translateX(-12px) scale(0.92)';
      } else if (target === 'right') {
        petArchRight.style.width = '240px';
        petArchRight.style.height = '220px';
        petArchRight.style.opacity = '1';
        petArchRight.style.zIndex = '4';
        petArchRight.style.transform = 'scale(1)';

        petArchCenter.style.width = '68px';
        petArchCenter.style.height = '180px';
        petArchCenter.style.opacity = '0.8';
        petArchCenter.style.zIndex = '2';

        petArchLeft.style.width = '68px';
        petArchLeft.style.height = '180px';
        petArchLeft.style.opacity = '0.8';
        petArchLeft.style.zIndex = '2';
      }
    });
  });

  // 6. Modal Tiêu chí nghiệm thu & Design Tokens
  if (btnOpenSpecs) {
    btnOpenSpecs.addEventListener('click', () => {
      specsModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (btnCloseSpecs) {
    btnCloseSpecs.addEventListener('click', () => {
      specsModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  specsModal.addEventListener('click', (e) => {
    if (e.target === specsModal) {
      specsModal.classList.remove('open');
      document.body.style.overflow = '';
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
