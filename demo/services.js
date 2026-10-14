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

  // Dữ liệu mô phỏng giả lập cho 4 dịch vụ (Không tự thêm giá, không cam kết 24/7)
  const serviceData = {
    kham: {
      title: 'Khám và điều trị',
      badge: 'Thăm khám & Điều trị tổng quát',
      desc: 'Dịch vụ khám sàng lọc toàn diện cho chó, mèo và thú cảnh nhỏ. Bác sĩ thực hiện kiểm tra lâm sàng cẩn thận, chẩn đoán dựa trên triệu chứng và thiết lập phác đồ điều trị an toàn, phù hợp với thể trạng của từng bé thú cưng.',
      features: [
        'Kiểm tra tai, mắt, răng miệng và tim phổi tổng quát',
        'Xét nghiệm lâm sàng và chẩn đoán hình ảnh chuyên sâu khi cần thiết',
        'Tư vấn chế độ dinh dưỡng và phòng ngừa bệnh theo độ tuổi'
      ]
    },
    grooming: {
      title: 'Grooming — Spa & Cắt tỉa lông',
      badge: 'Chăm sóc vệ sinh & Thẩm mỹ',
      desc: 'Quy trình tắm vệ sinh và cắt tỉa lông tạo kiểu chuyên nghiệp với sản phẩm dầu tắm dịu nhẹ, an toàn cho da thú cưng. Giúp các bé giữ được bộ lông mượt mà, thơm tho và giảm thiểu tình trạng rụng lông trong nhà.',
      features: [
        'Tắm dưỡng lông, sấy khô và chải tơi chuyên dụng',
        'Vệ sinh tai, cắt móng và vắt tuyến hôi định kỳ',
        'Cắt tỉa tạo kiểu theo yêu cầu của chủ nuôi'
      ]
    },
    noitru: {
      title: 'Nội trú — Lưu trú an toàn',
      badge: 'Chăm sóc & Theo dõi sức khỏe',
      desc: 'Khu vực nội trú riêng biệt, sạch sẽ, thoáng mát và khử trùng thường xuyên. Dành cho các bé thú cưng cần theo dõi sau phẫu thuật, trong quá trình điều trị tích cực hoặc lưu trú tạm thời khi gia đình có việc bận.',
      features: [
        'Phân khu cách ly riêng biệt giữa chó và mèo, tránh gây căng thẳng',
        'Đội ngũ điều dưỡng theo dõi sức khỏe và ghi chép nhật ký hàng ngày',
        'Chế độ ăn uống dinh dưỡng phù hợp theo chỉ định của bác sĩ'
      ]
    },
    capcuu: {
      title: 'Cấp cứu thú y',
      badge: 'Tiếp nhận khẩn cấp & Xử lý kịp thời',
      desc: 'Quy trình tiếp nhận khẩn cấp các ca tai nạn, ngộ độc, khó thở hoặc chuyển dạ khó. Đội ngũ y tế luôn trong tư thế sẵn sàng với các trang thiết bị trợ thở, cầm máu và hồi sức cấp cứu hiện đại.',
      features: [
        'Ưu tiên tiếp nhận và đánh giá nhanh mức độ nguy kịch',
        'Trang thiết bị thở oxy và truyền dịch hỗ trợ chuyên sâu',
        'Phối hợp chẩn đoán nhanh để đưa ra hướng can thiệp kịp thời'
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
      <div class="modal-contact-row">
        <div class="modal-contact-group">
          <a href="https://maps.app.goo.gl/xFbQ4BjKtGVa3rp86" target="_blank" rel="noopener noreferrer" class="modal-contact-link modal-link-maps" title="105 Khuất Duy Tiến, Thanh Xuân, Hà Nội" aria-label="Xem vị trí bệnh viện trên Google Maps (mở tab mới)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Chỉ đường Maps</span>
          </a>
          <a href="https://www.facebook.com/benhvienthuyleson?locale=vi_VN" target="_blank" rel="noopener noreferrer" class="modal-contact-link modal-link-fb" title="Nhắn tin qua Fanpage Facebook" aria-label="Tư vấn qua Facebook Fanpage (mở tab mới)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span>Tư vấn Facebook</span>
          </a>
        </div>
        <a href="index.html#dat-lich" class="btn-cta-primary" style="font-size: 13.5px; padding: 9px 18px; text-decoration: none;">Gửi yêu cầu đặt hẹn →</a>
      </div>
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
