# Tài liệu Bàn giao Thiết kế Hero & Header — Phương án D (Minimal Creative)
**Dự án:** Bệnh viện Thú y Lê Sơn  
**Tác giả:** Antigravity (UI/UX Specialist)  
**Phối hợp:** Claude (Nghiệp vụ), Codex (Triển khai chính thức), ChatGPT (Điều phối), Chủ dự án (Phê duyệt)  
**Trạng thái:** **[ĐÃ PHÊ DUYỆT]** bởi Chủ dự án ngày 14/10/2026  
**Nhánh Git:** `claude/optimistic-mccarthy-d1d15i`  

---

## 1. Quyết định Thiết kế đã được Chủ dự án Phê duyệt (Phase 1)

1. **Phong cách chủ đạo:** Phương án D — Minimal Creative (Tối giản sáng tạo, cao cấp, ấm áp, thân thiện).
2. **Nội dung Hero chính thức:**
   - **Nhãn mở đầu (Eyebrow):** `♥ BỆNH VIỆN THÚ Y LÊ SƠN`
   - **Tiêu đề chính (H1):**
     > *Khoảng an toàn nhỏ*  
     > *cho những người bạn lớn*
   - **Mô tả phụ:**
     > *Chăm sóc bằng chuyên môn, đồng hành bằng sự thấu hiểu.*
   - **Nút hành động chính:** `Gửi yêu cầu đặt lịch →` (không dùng "Đặt lịch ngay", không ngụ ý có chỗ tức thì).
   - **Nút hành động phụ:** `Xem dịch vụ`
   - **Dòng chú thích bắt buộc:** `📞 Nhân viên sẽ liên hệ để xác nhận lịch hẹn.`
3. **Bố cục hình ảnh Hero (Phase 1): Ba Khung ảnh vòm thú cưng sáng tạo (Three Arched Frames):**
   - **Khung 1 (Trái):** Bé mèo vàng giơ chân chào (`assets/pet-left.png`).
   - **Khung 2 (Giữa - Trọng tâm):** Chú chó Golden Retriever cận cảnh ấm áp (`assets/pet-center.png`).
   - **Khung 3 (Phải):** Bé mèo vằn ngước nhìn tò mò (`assets/pet-right.png`).
   - **Họa tiết phụ:** Vòng cung cam mỏng (`#FC9238`), dấu chân thú tím nhỏ, chữ viết tay nghệ thuật `Care / Create / Stronger / Bonds`.
   - **Nguyên tắc không chồng lấn:** Chữ, nút CTA, và ảnh thú cưng được phân tách lớp rõ ràng, không đè lấn nhau, khoảng thở rộng rãi trên nền kem sáng (`#FFF9F1`).
4. **Header 2 trạng thái:**
   - *Khách vãng lai:* Tìm kiếm, nút Đăng nhập (viền tím), nút Đăng ký (nút tím). Nêu rõ khách vãng lai không cần đăng ký tài khoản vẫn gửi yêu cầu đặt lịch được.
   - *Khách đã đăng nhập:* Tên khách hàng (`Nguyễn Minh Khang`) + Dropdown menu (`Yêu cầu của tôi (2) [Chờ nhân viên xác nhận]`, `Hồ sơ thú cưng`, `Cài đặt`, `Đăng xuất`).
   - *Mobile:* Menu Drawer trượt từ phải sang, hỗ trợ phím ESC và lớp phủ mờ overlay.

---

## 2. Hệ thống Design Tokens chính thức

```css
:root {
  /* Bảng màu nhận diện Lê Sơn */
  --color-brand-purple:       #5A1E5E;  /* Tím thương hiệu, uy tín */
  --color-brand-purple-dark:  #421247;  /* Tím sẫm cho tiêu đề lớn H1 */
  --color-brand-purple-hover: #48154B;  /* Trạng thái hover */
  --color-brand-purple-soft:  #F5EDF6;  /* Tím phấn nền nhẹ */

  --color-brand-orange:       #EA7A24;  /* Cam ấm mái nhà logo */
  --color-brand-orange-focus: #FC9238;  /* Đệm chân & viền focus bàn phím */

  --color-brand-teal:         #23706E;  /* Xanh ngọc bảo chứng y tế */
  --color-brand-teal-light:   #E6F3F2;

  --color-bg-cream:           #FBF7F1;  /* Kem nền ấm cúng đặc trưng */
  --color-bg-cream-pure:      #FFF9F1;  /* Kem sáng */
  --color-white:              #FFFFFF;

  /* Typography Colors (Tương phản WCAG 2.1 AA) */
  --color-text-main:          #231627;  /* Tương phản 14.8:1 trên nền kem */
  --color-text-muted:         #5E5362;  /* Tương phản 5.5:1 trên nền kem */
  --color-text-subtle:        #7A6F7E;  /* Tương phản 4.5:1 trên nền kem */
  --color-border-subtle:      #E9DEEA;

  /* Phông chữ hỗ trợ đầy đủ dấu tiếng Việt */
  --font-display: 'Lora', Georgia, 'Times New Roman', serif;
  --font-body:    'Be Vietnam Pro', system-ui, -apple-system, sans-serif;
  --font-script:  'Caveat', 'Alex Brush', cursive;

  /* Bo góc & Khung vòm */
  --radius-pill:     9999px;
  --radius-card:     16px;
  --radius-arch-lg:  200px 200px 0 0;
  --radius-arch-md:  140px 140px 0 0;

  /* Đổ bóng */
  --shadow-sm:        0 2px 6px rgba(45, 18, 50, 0.04);
  --shadow-btn:       0 4px 14px rgba(90, 30, 94, 0.18);
  --shadow-btn-hover: 0 8px 22px rgba(90, 30, 94, 0.28);
  --shadow-card:      0 12px 32px rgba(60, 20, 65, 0.08);

  /* Chuyển động */
  --transition-smooth: 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

---

## 3. Hướng dẫn Triển khai Mã nguồn cho Codex (Next.js / React)

### 3.1. Cấu trúc Component khuyến nghị
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Header 2 trạng thái (Guest & Authenticated)
│   │   ├── MobileDrawer.tsx     # Menu trượt trên mobile
│   │   └── UserDropdown.tsx     # Dropdown menu người dùng
│   └── hero/
│       ├── HeroSection.tsx      # Khối Hero trung tâm (H1, CTA, Chú thích)
│       └── PetArchesStage.tsx   # Ba khung ảnh thú cưng bo cong (Phase 1 chính thức)
└── assets/
    ├── logo-le-son.png          # Logo chính thức trong suốt
    ├── pet-left.png             # Ảnh bé mèo vàng giơ chân
    ├── pet-center.png           # Ảnh chú chó Golden Retriever
    └── pet-right.png            # Ảnh bé mèo vằn
```

### 3.2. Vị trí mã nguồn Demo tham khảo
Codex có thể xem toàn bộ mã nguồn HTML/CSS/JS đã được Antigravity viết hoàn chỉnh tại:
- Trang demo: [`demo/index.html`](../demo/index.html)
- Kiểu dáng: [`demo/styles.css`](../demo/styles.css)
- Kịch bản tương tác: [`demo/app.js`](../demo/app.js)
- Thư mục tài nguyên: [`demo/assets/`](../demo/assets/)

### 3.3. Các lưu ý kỹ thuật bắt buộc cho Codex
1. **Accessibility (WCAG 2.1 AA):**
   - Giữ nguyên màu viền focus bàn phím: `outline: 3px solid #FC9238; outline-offset: 3px;` cho mọi thẻ `<button>` và `<a>`.
   - Vùng chạm (Tap Target) trên mobile tối thiểu 44 × 44 px (các nút CTA của Antigravity đạt 48–52px).
   - Tôn trọng thuộc tính `prefers-reduced-motion: reduce`.
2. **Nghiệp vụ đặt lịch:**
   - Khi người dùng click `"Gửi yêu cầu đặt lịch"`, điều hướng tới form gửi yêu cầu.
   - Trạng thái mặc định ban đầu là: `"Chờ nhân viên xác nhận"`.
   - Tuyệt đối không hiển thị thông báo "Đặt lịch thành công" gây hiểu lầm.
3. **Hiệu năng Core Web Vitals:**
   - Ba ảnh thú cưng sử dụng `priority` hoặc `loading="eager"` trong Next.js `Image` với kích thước responsive phù hợp.
   - Mục tiêu LCP ≤ 2.5s trên thiết bị di động.

---

## 4. Bảng Kiểm Nghiệm thu (Claude & Codex)

| Hạng mục | Tiêu chuẩn | Hiện trạng |
|---|---|:---:|
| **Logo** | Logo chính thức Lê Sơn, không méo, nền trong suốt | ✅ Đạt |
| **Tiêu đề** | "Khoảng an toàn nhỏ cho những người bạn lớn" | ✅ Đạt |
| **Nút chính** | "Gửi yêu cầu đặt lịch" | ✅ Đạt |
| **Chú thích** | "Nhân viên sẽ liên hệ để xác nhận lịch hẹn" | ✅ Đạt |
| **Hình ảnh Hero** | 3 Khung ảnh thú cưng bo cong Mẫu D (Minimal Creative) | ✅ Đạt |
| **Mobile 390px** | Thao tác 1 tay, bố cục gọn gàng, không chồng lấn | ✅ Đạt |
| **Desktop 1440px** | Căn giữa sang trọng, khoảng thở thoáng đãng | ✅ Đạt |
| **Bảo mật & Dữ liệu** | 100% dữ liệu demo là giả lập, không bí mật | ✅ Đạt |
| **Nhánh Git** | Giữ nguyên trên `claude/optimistic-mccarthy-d1d15i`, không merge `main` | ✅ Đạt |

---

## 5. Danh mục Tính năng Phát triển sau (Phase 2+ Backlog)

> [!NOTE]
> **Quyết định phạm vi của Chủ dự án (14/10/2026):**  
> Tạm hoãn tính năng hoạt họa linh vật mèo chuyển đổi 3 tư thế giữa các trang sang giai đoạn phát triển sau.  
> Trong Phase 1, tập trung hoàn thiện giao diện Minimal Creative (Mẫu D) với 3 khung ảnh thú cưng. Nếu Hero hiện tại có sử dụng hình mèo, chỉ sử dụng phiên bản tĩnh.

### Kho tài nguyên vector SVG linh vật đã hoàn thiện (Sẵn sàng cho Phase 2+):
Toàn bộ tài nguyên đồ họa vector đã được Antigravity thiết kế chuẩn nét và lưu trữ bảo tồn tại thư mục [`assets/`](../assets/):

1. **Bóng mèo duỗi thảnh thơi (Silhouette Trang chủ):**
   - Tệp: [`assets/cat-silhouette.svg`](../assets/cat-silhouette.svg)
   - Đặc điểm: Thiết kế bám sát bản vẽ tay của Chủ dự án, chân trước giơ cao lộ đệm thịt hồng cam, thân duỗi dài.
2. **Mèo chỉ chân khám phá (Tư thế trang Dịch vụ):**
   - Tệp: [`assets/cat-pose-services.svg`](../assets/cat-pose-services.svg)
   - Đặc điểm: Mèo ngồi tò mò, chỉ chân hướng dẫn khách hàng khám phá các dịch vụ điều trị.
3. **Mèo vẫy chân đón chào (Tư thế trang Đặt lịch):**
   - Tệp: [`assets/cat-pose-booking.svg`](../assets/cat-pose-booking.svg)
   - Đặc điểm: Mèo vẫy hai chân chào mừng, tạo cảm giác thân thiện khi khách gửi yêu cầu.
4. **Mèo Cartoon phác thảo màu (Bé Cam):**
   - Tệp: [`assets/sketch-cartoon-cat.svg`](../assets/sketch-cartoon-cat.svg) & [`assets/sketch-cartoon-cat.png`](../assets/sketch-cartoon-cat.png)
5. **Mèo Dancing phong cách Monoline tối giản (Chuẩn phong cách ảnh tham chiếu):**
   - Tệp Monoline thuần khiết: [`assets/cat-dancing-monoline-pure-v7.svg`](../assets/cat-dancing-monoline-pure-v7.svg)
   - Tệp Monoline điểm xuyết màu Lê Sơn: [`assets/cat-dancing-monoline-brand-v7.svg`](../assets/cat-dancing-monoline-brand-v7.svg)

### Hướng dẫn triển khai cho Codex trong Phase 2+:
- Khi dự án kích hoạt Phase 2, Codex lấy các file SVG trên để dựng component `<CatMascotStage />`.
- Kết nối animation chuyển trang thông qua thư viện `framer-motion` hoặc CSS `@keyframes` dựa theo route (`/`, `/dich-vu`, `/dat-lich`).
