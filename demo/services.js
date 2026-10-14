/**
 * BỆNH VIỆN THÚ Y LÊ SƠN — SERVICES V1 DEMO SCRIPT (PHƯƠNG ÁN C)
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
  const servicesMain = document.getElementById('services-main');

  const btnOpenSpecs = document.getElementById('btnOpenSpecs');
  const specsModal = document.getElementById('specsModal');
  const btnCloseSpecs = document.getElementById('btnCloseSpecs');

  const serviceDetailModal = document.getElementById('serviceDetailModal');
  const btnCloseServiceDetail = document.getElementById('btnCloseServiceDetail');
  const serviceDetailTitle = document.getElementById('serviceDetailTitle');
  const serviceDetailBody = document.getElementById('serviceDetailBody');

  let lastActiveTrigger = null;

  // Dữ liệu mô phỏng giả lập cho 4 dịch vụ (Tuân thủ F2 & F3)
  const serviceData = {
    kham: {
      title: 'Khám và điều trị',
      badge: '[Nội dung mẫu — chờ bệnh viện xác nhận]',
      desc: '[Nội dung mẫu — chờ bệnh viện cung cấp mô tả chi tiết quy trình khám và điều trị].',
      features: [
        '[Nội dung mẫu 1 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 2 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 3 — chờ bệnh viện cung cấp]'
      ]
    },
    grooming: {
      title: 'Spa & Grooming',
      badge: '[Nội dung mẫu — chờ bệnh viện xác nhận]',
      desc: '[Nội dung mẫu — chờ bệnh viện cung cấp mô tả chi tiết dịch vụ tắm, cắt tỉa và làm đẹp].',
      features: [
        '[Nội dung mẫu 1 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 2 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 3 — chờ bệnh viện cung cấp]'
      ]
    },
    noitru: {
      title: 'Nội trú',
      badge: '[Nội dung mẫu — chờ bệnh viện xác nhận]',
      desc: '[Nội dung mẫu — chờ bệnh viện cung cấp mô tả quy định và tiện ích lưu trú thú cưng].',
      features: [
        '[Nội dung mẫu 1 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 2 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 3 — chờ bệnh viện cung cấp]'
      ]
    },
    capcuu: {
      title: 'Cấp cứu 24/24',
      badge: 'Cấp cứu 24/24 [Đã xác nhận]',
      desc: 'Bệnh viện Thú y Lê Sơn tiếp nhận cấp cứu 24/24. Trong trường hợp khẩn cấp, quý khách vui lòng liên hệ trực tiếp hotline để được hỗ trợ tức thì, không gửi yêu cầu qua web.',
      features: [
        'Tiếp nhận cấp cứu thú y 24/24 tất cả các ngày trong tuần',
        '[Nội dung mẫu 1 — chờ bệnh viện cung cấp]',
        '[Nội dung mẫu 2 — chờ bệnh viện cung cấp]'
      ]
    }
  };

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

    closeMobileDrawer(false);
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'mobile') {
    setViewportMode('mobile');
  } else if (urlParams.get('mode') === 'responsive') {
    setViewportMode('responsive');
  }

  btnDesktop.addEventListener('click', () => setViewportMode('desktop'));
  btnMobile.addEventListener('click', () => setViewportMode('mobile'));
  btnResponsive.addEventListener('click', () => setViewportMode('responsive'));

  // 2. Chuyển đổi trạng thái tài khoản mẫu (Khách vãng lai ⇋ Đã đăng nhập)
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

  // 3. User Dropdown Menu
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

  // 4. Mobile Menu Drawer (WCAG AA: inert khi đóng, bẫy tiêu điểm, phím Escape)
  mobileDrawer.setAttribute('inert', '');
  btnMobileMenu.setAttribute('aria-expanded', 'false');

  function openMobileDrawer() {
    mobileDrawer.removeAttribute('inert');
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    if (siteHeader) siteHeader.setAttribute('inert', '');
    if (servicesMain) servicesMain.setAttribute('inert', '');
    btnMobileMenu.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

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
    if (servicesMain) servicesMain.removeAttribute('inert');
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

  if (urlParams.get('drawer') === 'open') {
    openMobileDrawer();
  }

  // 5. Modal Chi tiết Dịch vụ (Service Detail Modal)
  serviceDetailModal.setAttribute('inert', '');

  function openServiceModal(serviceKey, triggerBtn) {
    lastActiveTrigger = triggerBtn;
    const data = serviceData[serviceKey] || {
      title: 'Dịch vụ Lê Sơn',
      badge: 'Thông tin dịch vụ',
      desc: 'Thông tin chi tiết về dịch vụ đang được cập nhật.',
      features: []
    };

    serviceDetailTitle.textContent = data.title;
    let actionsHtml = '';
    if (serviceKey === 'capcuu') {
      actionsHtml = `
        <div style="background: #FDF2E8; border-left: 4px solid #EA7A24; padding: 12px 14px; border-radius: 8px; margin-bottom: 16px; font-size: 13.5px; color: #A34803; line-height: 1.5;">
          <strong>⚠️ Ca khẩn cấp vui lòng gọi trực tiếp:</strong> Để thú cưng được tiếp nhận kịp thời nhất, xin vui lòng gọi hotline cấp cứu, không gửi yêu cầu qua web.
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="tel:+84973555105" class="btn-card-learn btn-card-emergency" style="font-size: 15px; padding: 13px 20px; text-decoration: none; display: inline-flex; justify-content: center; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Gọi cấp cứu ngay: 097 355 51 05</span>
          </a>
          <a href="https://maps.app.goo.gl/xFbQ4BjKtGVa3rp86" target="_blank" rel="noopener noreferrer" class="drawer-contact-btn drawer-btn-maps" style="width: 100%; font-size: 13px; min-height: 42px; box-sizing: border-box;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Chỉ đường tới bệnh viện (101 Khuất Duy Tiến, Hà Nội)</span>
          </a>
        </div>
      `;
    } else {
      actionsHtml = `
        <div class="modal-contact-row">
          <div class="modal-contact-group">
            <a href="https://maps.app.goo.gl/xFbQ4BjKtGVa3rp86" target="_blank" rel="noopener noreferrer" class="modal-contact-link modal-link-maps" title="101 Khuất Duy Tiến, Thanh Xuân, Hà Nội" aria-label="Xem vị trí bệnh viện trên Google Maps (mở tab mới)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Chỉ đường Maps</span>
            </a>
            <a href="https://www.facebook.com/benhvienthuyleson" target="_blank" rel="noopener noreferrer" class="modal-contact-link modal-link-fb" title="Nhắn tin qua Fanpage Facebook" aria-label="Tư vấn qua Facebook Fanpage (mở tab mới)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Tư vấn Facebook</span>
            </a>
          </div>
          <a href="index.html#form-dat-lich" class="btn-cta-primary" style="font-size: 13.5px; padding: 10px 20px; text-decoration: none;">Gửi yêu cầu đặt lịch →</a>
        </div>
      `;
    }

    let html = `
      <div style="margin-bottom: 14px;">
        <span style="display: inline-block; font-size: 12px; font-weight: 700; color: #824787; background: #F5EDF6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px;">${data.badge}</span>
        <p style="margin: 0 0 16px; color: #231627; font-size: 15px; line-height: 1.6;">${data.desc}</p>
      </div>
      <div style="background: #FBF7F1; padding: 16px; border-radius: 12px; border: 1px solid #ECE2EF; margin-bottom: 20px;">
        <strong style="display: block; font-size: 13.5px; color: #421247; margin-bottom: 8px;">Nội dung chăm sóc chính:</strong>
        <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: #5E5362; display: flex; flex-direction: column; gap: 6px;">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      ${actionsHtml}
    `;
    serviceDetailBody.innerHTML = html;

    serviceDetailModal.removeAttribute('inert');
    serviceDetailModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (btnCloseServiceDetail) btnCloseServiceDetail.focus();
    });
  }

  function closeServiceModal() {
    if (!serviceDetailModal.classList.contains('open')) return;
    serviceDetailModal.setAttribute('inert', '');
    serviceDetailModal.classList.remove('open');
    document.body.style.overflow = '';

    if (lastActiveTrigger) {
      lastActiveTrigger.focus();
      lastActiveTrigger = null;
    }
  }

  // Gắn sự kiện cho các nút "Tìm hiểu thêm"
  const learnBtns = document.querySelectorAll('.btn-card-learn');
  learnBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service');
      openServiceModal(serviceKey, btn);
    });
  });

  if (btnCloseServiceDetail) btnCloseServiceDetail.addEventListener('click', closeServiceModal);
  serviceDetailModal.addEventListener('click', (e) => {
    if (e.target === serviceDetailModal) closeServiceModal();
  });

  serviceDetailModal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeServiceModal();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = getFocusableElements(serviceDetailModal);
      if (!focusables.length) return;
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

  // 6. Modal Tiêu chí nghiệm thu (Specs Modal)
  specsModal.setAttribute('inert', '');

  function openSpecsModal() {
    specsModal.removeAttribute('inert');
    specsModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (btnCloseSpecs) btnCloseSpecs.focus();
    });
  }

  function closeSpecsModal() {
    if (!specsModal.classList.contains('open')) return;
    specsModal.setAttribute('inert', '');
    specsModal.classList.remove('open');
    document.body.style.overflow = '';

    if (btnOpenSpecs) btnOpenSpecs.focus();
  }

  if (btnOpenSpecs) btnOpenSpecs.addEventListener('click', openSpecsModal);
  if (btnCloseSpecs) btnCloseSpecs.addEventListener('click', closeSpecsModal);
  specsModal.addEventListener('click', (e) => {
    if (e.target === specsModal) closeSpecsModal();
  });

  specsModal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSpecsModal();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = getFocusableElements(specsModal);
      if (!focusables.length) return;
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
