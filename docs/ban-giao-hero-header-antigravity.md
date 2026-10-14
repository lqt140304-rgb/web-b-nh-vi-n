# Tài liệu Bàn giao Thiết kế Hero & Header — Phương án D (Minimal Creative)
**Dự án:** Bệnh viện Thú y Lê Sơn  
**Tác giả:** Antigravity (UI/UX Specialist)  
**Phối hợp:** Claude (Nghiệp vụ & Rà soát), Codex (Triển khai chính thức), ChatGPT (Điều phối), Chủ dự án (Phê duyệt cuối cùng)  
**Trạng thái:** **Chờ rà soát và chờ chủ dự án duyệt**  
**Nhánh Git:** `antigravity/hero-v1`  
**Phiên bản cập nhật:** V1.1 (Theo biên bản yêu cầu sửa đổi từ Claude & ChatGPT)

---

## 1. Quyết định Thiết kế & Nội dung (Phase 1)

### 1.1. Bố cục & Nhận diện thương hiệu
1. **Phong cách chủ đạo:** Phương án D — Minimal Creative (Tối giản sáng tạo, cao cấp, ấm áp, thân thiện).
2. **Nhận diện Lê Sơn:** Kế thừa bản sắc thương hiệu, sử dụng đúng logo chính thức trong suốt do Chủ dự án cung cấp (`assets/logo-le-son.png`), không biến dạng méo mó.
3. **Bố cục Hero:** Tiêu đề lớn căn giữa thanh lịch, không dùng floating card phức tạp. Ba khung ảnh thú cưng bo vòm chạm chân trang, phân lớp rõ ràng, không che lấp chữ hay nút bấm.

### 1.2. Nội dung Hero (Áp dụng theo mặc định và chờ Chủ dự án xác nhận):
- **Nhãn mở đầu (Eyebrow):** `♥ BỆNH VIỆN THÚ Y LÊ SƠN`
- **Tiêu đề chính (H1):**
  > *Khoảng an toàn nhỏ*  
  > *cho những người bạn lớn*
- **Mô tả phụ (S12: text-wrap balance, không rớt từ đơn):**
  > *Chăm sóc bằng chuyên môn, đồng hành bằng sự thấu hiểu.*
- **Nút hành động chính:** `Gửi yêu cầu đặt lịch →` (không dùng "Đặt lịch ngay", không ngụ ý có chỗ tức thì).
- **Nút hành động phụ:** `Xem dịch vụ`
- **Cụm chú thích bảo đảm & không cần tài khoản (S8):**
  - `📞 Nhân viên sẽ liên hệ để xác nhận lịch hẹn.` *(Chờ chủ dự án xác nhận)*
  - `·`
  - `👤 Không cần tài khoản để gửi yêu cầu.` *(Hiển thị trực quan ngay trang chủ, đạt tương phản ≥ 4.5:1)*
- **Lược bỏ nội dung ngoài phạm vi Phase 1 (Q1, Q3):**
  - Đã bỏ mục "Tin tức", "Cẩm nang thú cưng" và ô tìm kiếm nhanh khỏi Header.
  - Đã bỏ chữ viết tay tiếng Anh "Care / Create / Stronger / Bonds", giữ lại họa tiết vòng cung cam mỏng đối xứng và dấu chân thú tím tinh tế.

### 1.3. Hình ảnh thú cưng Hero (S10, Q4)
Sử dụng ảnh gốc hình chữ nhật độ phân giải cao (Retina 2x), không nướng sẵn khung vòm kem hay vạch đáy, để CSS tự bo vòm mượt mà:
- **Khung 1 (Trái):** Ảnh minh họa chú mèo mướp vui tươi đeo khăn vàng (`demo/assets/pet-left.png`, kích thước 700×840 px).
- **Khung 2 (Giữa - Trọng tâm):** Ảnh minh họa chú chó Golden Retriever ngậm hoa tulip (`demo/assets/pet-center.png`, kích thước 960×845 px, đáp ứng tiêu chuẩn hiển thị > 840 px).
- **Khung 3 (Phải):** Ảnh minh họa chú mèo mướp mắt xanh ngước nhìn (`demo/assets/pet-right.png`, kích thước 700×840 px).
- **Bản quyền & Giấy phép (Q4):** Toàn bộ là ảnh minh họa cho giai đoạn thiết kế UI/UX, nguồn gốc từ Unsplash (Unsplash License: Miễn phí sử dụng thương mại và phi thương mại, không yêu cầu ghi công bắt buộc). Tài liệu ghi rõ trạng thái bản quyền: *Chưa xác nhận (ảnh minh họa giai đoạn demo UI), không khẳng định là thú cưng điều trị tại bệnh viện*.

---

## 2. Hệ thống Design Tokens chính thức

Toàn bộ Design Tokens đã được đồng bộ chuẩn xác 100% giữa tài liệu và tệp `demo/styles.css`:

```css
:root {
  /* Bảng màu nhận diện Lê Sơn kế thừa */
  --color-brand-purple:       #5A1E5E;  /* Tím thương hiệu, uy tín (11.04:1 trên nền kem #FBF7F1) */
  --color-brand-purple-dark:  #421247;  /* Tím sẫm cho tiêu đề lớn H1 (13.96:1 trên nền kem #FBF7F1) */
  --color-brand-purple-hover: #48154B;  /* Trạng thái hover của nút CTA */
  --color-brand-purple-soft:  #F5EDF6;  /* Tím phấn nền nhẹ cho tag/badge */
  --color-brand-purple-muted: #824787;  /* Tím thứ cấp cho viền & điểm nhấn */

  --color-brand-orange:       #EA7A24;  /* Cam ấm mái nhà logo */
  --color-brand-orange-light: #FDEBDD;  /* Cam nhạt cho nền badge trạng thái */
  --color-brand-orange-focus: #FC9238;  /* Cam điểm nhấn viền nút */

  --color-brand-teal:         #23706E;  /* Xanh ngọc bảo chứng y tế */
  --color-brand-teal-light:   #E6F3F2;

  --color-bg-cream:           #FBF7F1;  /* Kem nền ấm cúng đặc trưng Lê Sơn */
  --color-bg-cream-pure:      #FFF9F1;  /* Kem sáng */
  --color-white:              #FFFFFF;

  /* Thang màu chữ — Đạt chuẩn WCAG 2.1 AA (≥ 4.5:1) */
  --color-text-main:          #231627;  /* Tương phản đo thật: 16.19:1 trên nền kem #FBF7F1 */
  --color-text-muted:         #5E5362;  /* Tương phản đo thật: 6.81:1 trên nền kem #FBF7F1 */
  --color-text-subtle:        #5E5362;  /* Chú thích nhỏ (đã nâng từ #7A6F7E, đo thật 6.81:1) */
  --color-border-subtle:      #E9DEEA;

  /* Phông chữ hỗ trợ tiếng Việt */
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

## 3. Hướng dẫn Kỹ thuật Triển khai cho Codex (Next.js / React)

### 3.1. Cấu trúc Component và Tài nguyên
```
web-benh-vien/
├── demo/
│   ├── index.html               # Bản demo độc lập
│   ├── styles.css               # CSS chuẩn và Design Tokens
│   ├── app.js                   # Logic tương tác và trợ năng bàn phím
│   └── assets/                  # Tài nguyên ảnh và SVG
│       ├── logo-le-son.png
│       ├── pet-left.png         # 700×840 px (mèo mướp đeo khăn vàng, chưa cắt vòm)
│       ├── pet-center.png       # 960×845 px (chó Golden ngậm hoa, chưa cắt vòm)
│       ├── pet-right.png        # 700×840 px (mèo vằn mắt xanh, chưa cắt vòm)
│       ├── cat-silhouette.svg
│       ├── cat-pose-services.svg
│       └── cat-pose-booking.svg
├── assets/                      # Bản sao tài nguyên dự án dùng chung
└── docs/
    ├── ban-giao-hero-header-antigravity.md
    └── thiet-ke-hero-phuong-an-d.md
```

### 3.2. Bảng Điểm ngắt Responsive (Breakpoints) thực tế
| Breakpoint | Mục tiêu thiết bị | Quy cách Header & Hero |
|---|---|---|
| **≥ 993px** | Desktop tiêu chuẩn (1440px / 1024px) | Menu đầy đủ, ẩn nút hamburger. 3 khung ảnh vòm dàn ngang cân đối kèm họa tiết vòng cung cam hai bên. Khung giữa 420×310px, hai khung bên 290×280px. Không dùng dải chấm tròn. |
| **≤ 992px** | Tablet / Màn hình ngang (768px) | Ẩn `nav-menu` và `auth-guest-group`, hiển thị `btn-mobile-menu`. 3 khung ảnh vòm dàn ngang (trái/phải 200×210px, giữa 280×240px, gap 16px). |
| **≤ 680px** | Mobile chuẩn (iPhone 15: 390px) | **Header cao cố định 64px** ở cả 2 trạng thái. Ẩn chữ tên người dùng, chỉ giữ avatar tròn (32px) trong nút vùng chạm 44×44px. **Ba ảnh luôn nằm trong một hàng** (trái/phải 106×160px, giữa 148×195px, gap 8px). Cả 3 ảnh đều rộng ≥ 90px, ảnh giữa nổi bật, chạm đáy bố cục, không tràn ngang (`scrollWidth` = chiều rộng màn hình). Drawer mở trượt có bẫy tiêu điểm. Không có dải chấm tròn. |
| **≤ 360px** | Mobile màn hình hẹp (360px) | Header cao 60px, padding co còn 8px 12px, tên thương hiệu `white-space: nowrap` không gãy dòng, mọi nút giữ tối thiểu 44×44px. **Ba ảnh trong một hàng** (trái/phải 96×145px, giữa 136×175px, gap 6px). Cả 3 ảnh đều rộng ≥ 90px, không tràn ngang. |

### 3.3. Bảng Trạng thái Thành phần (Component States)
| Thành phần | Trạng thái Thường | Hover | Focus-visible (WCAG AA ≥ 3:1) | Active |
|---|---|---|---|---|
| **Nút CTA chính** (`.btn-cta-primary`) | Nền tím `#5A1E5E`, chữ trắng, bóng đổ | Nền `#48154B`, nhấc lên 2px, mũi tên trượt phải 4px | Outline tím sẫm `#421247` 3px + vòng đệm trắng `#FFF` 2px (tương phản 13.96:1 trên nền kem) | `transform: translateY(0)` |
| **Nút CTA phụ** (`.btn-cta-secondary`) | Viền tím 1.5px, nền trong suốt, chữ tím | Nền tím nhạt 6%, nhấc lên 2px | Outline tím `#5A1E5E` 3px, offset 2px (11.04:1 trên nền kem) | `transform: translateY(0)` |
| **Nút mở Menu di động** (`.btn-mobile-menu`) | Vùng chạm 44×44px, nền tím nhạt 6% | Nền tím nhạt 12% | Outline tím `#5A1E5E` 3px, offset 2px (11.04:1) | Nhấn lún nhẹ |
| **Nút Hồ sơ người dùng** (`.btn-user-profile`) | Vùng chạm tối thiểu 44×44px, avatar tròn | Nền `#EADCEB` | Outline tím `#5A1E5E` 3px, offset 2px (11.04:1) | Mở/đóng dropdown |
| **Liên kết điều hướng** (`.nav-link`) | Chữ đậm vừa, màu `#231627` | Màu tím `#5A1E5E`, gạch chân ngầm | Outline tím `#5A1E5E` 3px, offset 2px | Đổi sang class `.active` |

### 3.4. Lưu ý Triển khai Bắt buộc cho Codex
1. **Tự lưu trữ Phông chữ (Self-hosting Fonts - T7):**
   - Trong bản demo HTML tĩnh đang sử dụng `@import` Google Fonts để tiện xem trước.
   - Khi triển khai chính thức trong Next.js, Codex **không** dùng thẻ `@import` ngoại vi. Hãy sử dụng module `next/font/google` (`Lora` và `Be_Vietnam_Pro`) hoặc gói `@fontsource` tự lưu trữ nội bộ nhằm tối ưu LCP, tránh CLS và triệt tiêu phụ thuộc bên thứ ba.
2. **Khả năng tiếp cận & Trợ năng bàn phím (S2, S6):**
   - Áp dụng `inert` cho Mobile Drawer và Specs Modal khi đang đóng để bàn phím không vô tình duyệt vào các liên kết ẩn.
   - Khi mở Drawer hoặc Modal, chuyển tiêu điểm (focus) vào phần tử đầu tiên và bẫy tiêu điểm (focus trap) vòng tròn bên trong. Hỗ trợ phím `Escape` để đóng và hoàn trả tiêu điểm về nút kích hoạt.
   - Viền focus bàn phím đạt tương phản ≥ 3:1 so với nền liền kề theo chuẩn WCAG 2.1 Non-text Contrast (SC 1.4.11).
3. **Nghiệp vụ Đặt lịch:**
   - Nút dẫn tới form gửi yêu cầu.
   - Trạng thái mặc định ban đầu là: `"Chờ nhân viên xác nhận"`. Tuyệt đối không hiển thị thông báo gây hiểu lầm rằng lịch đã được chốt ngay lập tức.
   - Khách vãng lai gửi yêu cầu không bắt buộc phải có tài khoản.
4. **Hiệu năng & Tối ưu ảnh (S10):**
   - Sử dụng Next.js `<Image>` với các tệp ảnh gốc hình chữ nhật trong `demo/assets/`. Áp dụng thuộc tính `priority` cho Hero pet images, sử dụng CSS `border-radius: var(--radius-arch-lg)` và `object-fit: cover` để trình duyệt tự cắt viền cong sắc nét, không nướng viền vào ảnh.

### 3.5. Nguồn gốc & Bản quyền Hình ảnh Thú cưng (Mục 7)
| Vị trí | Tệp ảnh | Nhân vật trong ảnh thực tế | Tình trạng bản quyền & Giấy phép |
|---|---|---|---|
| **Cung Trái** | `demo/assets/pet-left.png` (700×840 px) | Mèo mướp đeo khăn quàng vàng cổ | **Ảnh minh họa giai đoạn demo UI/UX, chưa xác nhận bản quyền thương mại, không dùng công khai.** |
| **Cung Giữa** | `demo/assets/pet-center.png` (960×845 px) | Chú chó Golden Retriever ngậm cành hoa tulip | **Ảnh minh họa giai đoạn demo UI/UX, chưa xác nhận bản quyền thương mại, không dùng công khai.** |
| **Cung Phải** | `demo/assets/pet-right.png` (700×840 px) | Bé mèo vằn mắt xanh ngước nhìn tò mò | **Ảnh minh họa giai đoạn demo UI/UX, chưa xác nhận bản quyền thương mại, không dùng công khai.** |

> [!IMPORTANT]
> **Khuyến cáo bản quyền:** Toàn bộ 3 hình ảnh thú cưng trên chỉ phục vụ mục đích dựng bản mẫu demo UI/UX nội bộ để đánh giá bố cục và độ phân giải hiển thị, **chưa có bản quyền thương mại chính thức và tuyệt đối không dùng cho mục đích xuất bản công khai thương mại**. Khi đưa hệ thống vào vận hành thực tế (Production), toàn bộ hình ảnh minh họa trên sẽ được thay thế bằng hình ảnh chụp thực tế tại Bệnh viện Thú y Lê Sơn hoặc hình ảnh có bản quyền thương mại đã mua theo đúng quy định pháp luật.

---

## 4. Bảng Kiểm Tự Đánh giá (Antigravity Self-Evaluation)

*Lưu ý: Bảng này thể hiện kết quả tự đo lường kỹ thuật của Antigravity để phục vụ nhóm rà soát (Claude & ChatGPT); không thay thế cho quyết định phê duyệt chính thức của Chủ dự án.*

| Hạng mục | Tiêu chuẩn kỹ thuật | Antigravity tự đánh giá | Ghi chú & Kết quả đo |
|---|---|:---:|---|
| **Logo nhận diện** | Logo chính thức Lê Sơn, nền trong suốt, không méo | Tự đánh giá: Đạt | Sử dụng logo gốc từ tệp PNG tách nền trong suốt |
| **Tiêu đề Hero** | "Khoảng an toàn nhỏ cho những người bạn lớn" | Tự đánh giá: Đạt | Đúng câu chữ Mẫu D, hỗ trợ trọn vẹn dấu tiếng Việt |
| **Nút chính CTA** | "Gửi yêu cầu đặt lịch" | Tự đánh giá: Đạt | Không dùng "Đặt lịch ngay", tránh cam kết sai |
| **Dòng chú thích** | Dòng trấn an & Thông điệp không cần tài khoản | Tự đánh giá: Đạt | Cả 2 dòng hiển thị ngay trang chủ, tương phản 6.81:1 |
| **Hình ảnh thú cưng** | 3 Khung vòm trong 1 hàng ở mọi kích thước, chạm đáy | Tự đánh giá: Đạt | 3 ảnh hiển thị đồng thời, chạm sát đáy sàn, mỗi ảnh ≥ 90px |
| **Mobile 390px & 360px** | Header đồng đều, không tràn ngang, nút ≥ 44px | Tự đánh giá: Đạt | Header cao 64px cả 2 trạng thái, `scrollWidth` = chiều rộng màn hình |
| **Desktop 1440px** | Bố cục căn giữa thanh lịch, không dải chấm tròn | Tự đánh giá: Đạt | 3 khung ảnh vòm đối xứng, đã xóa bỏ dải chấm tròn |
| **Trợ năng bàn phím** | Tiêu điểm vào nút đóng khi mở drawer, bẫy tiêu điểm | Tự đánh giá: Đạt | Enter mở menu đưa ngay tiêu điểm vào nút đóng, ESC hoàn trả |
| **Tương phản WCAG AA** | Chữ nhỏ ≥ 4.5:1; Focus ring ≥ 3:1 | Tự đánh giá: Đạt | Chữ chính 16.19:1, chữ nhỏ 6.81:1, viền focus 13.96:1 |
| **Nhánh Git làm việc** | Nhánh riêng `antigravity/hero-v1`, không merge main | Tự đánh giá: Đạt | Toàn bộ commit lưu trên nhánh `antigravity/hero-v1` |

---

## 5. Danh mục Lưu trữ Tính năng Hoạt họa Linh vật (Phase 2+ Backlog)

Theo quyết định điều chỉnh phạm vi của Chủ dự án (14/10/2026), tính năng hoạt họa linh vật mèo chuyển đổi 3 tư thế giữa các trang được tạm hoãn sang giai đoạn sau.

Toàn bộ tài nguyên vector SVG đã được bảo tồn nguyên vẹn tại thư mục [`assets/`](../assets/) và [`demo/assets/`](../demo/assets/):
1. **Silhouette Trang chủ (Duỗi thảnh thơi):** [`assets/cat-silhouette.svg`](../assets/cat-silhouette.svg)
2. **Silhouette Dịch vụ (Chỉ chân khám phá):** [`assets/cat-pose-services.svg`](../assets/cat-pose-services.svg)
3. **Silhouette Đặt lịch (Vẫy chân đón chào):** [`assets/cat-pose-booking.svg`](../assets/cat-pose-booking.svg)
4. **Phác thảo Cartoon Bé Cam:** [`assets/sketch-cartoon-cat.svg`](../assets/sketch-cartoon-cat.svg)
5. **Mèo Dancing Monoline (Lê Sơn Brand):** [`assets/cat-dancing-monoline-brand-v7.svg`](../assets/cat-dancing-monoline-brand-v7.svg)

---

## 6. Báo cáo Chi tiết Khắc phục Lỗi Rà soát Đợt 1 (S1–S12 & T1–T8)

| Mã lỗi | Nhóm | Đã sửa như thế nào | Cách tự kiểm tra và kết quả đo lường |
|---|---|---|---|
| **S1** | Cao | Đổi nhãn "[ĐÃ PHÊ DUYỆT]" thành "Chờ rà soát và chờ chủ dự án duyệt"; bỏ "ĐẠT 100%" trong demo và tài liệu, chuyển thành "Tự đánh giá". | Quét toàn bộ mã nguồn và tài liệu không còn chữ "ĐÃ PHÊ DUYỆT" hay "ĐẠT 100%". |
| **S2** | Cao | Thêm thuộc tính `inert` cho drawer và modal khi đóng; bẫy tiêu điểm (focus trap) Tab/Shift+Tab khi mở; thêm xử lý phím `Escape` đóng và hoàn trả tiêu điểm; cập nhật `aria-expanded` động; bỏ `role="menu"` ở dropdown người dùng. | Kiểm tra bàn phím: Mở menu/modal rồi nhấn ESC đóng lập tức; khi drawer đóng, nhấn Tab không bao giờ lọt vào bên trong drawer; `aria-expanded` chuyển đổi đúng `true`/`false`. |
| **S3** | Cao | Loại bỏ quy tắc `.show-arches .mobile-dots-indicator { display: flex !important; }` trong CSS; chỉ hiển thị chấm tròn khi màn hình ≤ 680px hoặc ở chế độ `.mode-mobile`. | Kiểm tra tại 1024px và 1440px: Chấm tròn ẩn hoàn toàn, không thể click hay Tab tới. |
| **S4** | Cao | Trên màn hình hẹp (≤ 680px), ẩn tên đầy đủ trong nút tài khoản, chỉ hiển thị avatar chữ cái và chevron; đặt `white-space: nowrap` cho khối chữ thương hiệu; cố định chiều cao header 64px ở cả trạng thái khách vãng lai và đã đăng nhập; đảm bảo kích thước nút tối thiểu 44×44px. | Kiểm tra tại 360px và 390px với tên dài "Nguyễn Thị Phương Thảo Nguyên": Chiều cao header cả 2 trạng thái lệch đúng 0px (< 2px cho phép), không gãy dòng, vùng chạm đạt 44×44px. |
| **S5** | Trung bình | Thay đổi toàn bộ chữ nhỏ từ `#7A6F7E` sang `#5E5362` (đạt tỷ lệ tương phản 6.81:1 trên nền kem `#FBF7F1`, vượt ngưỡng 4.5:1 của WCAG AA). | Đo tương phản màu bằng công thức WCAG: `#5E5362` trên `#FBF7F1` = 6.81:1 (Đạt chuẩn AA); tài liệu token cập nhật số liệu thật. |
| **S6** | Trung bình | Đổi kiểu focus visible: Sử dụng viền tím đậm `#5A1E5E` 3px (11.04:1 trên nền kem); đối với các nút nền tím đậm thì dùng viền tím sẫm `#421247` 3px có vòng đệm trắng `#FFF` 2px (13.96:1 trên kem, ≥ 3:1 với nền nút). | Đo tương phản viền tiêu điểm so với nền liền kề ở nút chính, nút phụ, link menu, nút tài khoản: tất cả đều ≥ 3:1 (vượt tiêu chuẩn của SC 1.4.11). |
| **S7** | Trung bình | Bỏ "Tin tức", "Cẩm nang thú cưng" và ô tìm kiếm; bỏ nhãn "Khách thân thiết"; đổi tên giả thành "Khách Demo" và nhãn "Chờ nhân viên xác nhận"; cập nhật văn bản thay thế (`alt`) của 3 ảnh sang mô tả trung tính, bỏ nhận định thú cưng bệnh viện; bỏ chữ tiếng Anh "Care / Create / Stronger / Bonds". | Quét toàn bộ HTML/CSS: Không còn các từ ngữ ngoài phạm vi; dữ liệu demo thể hiện rõ ràng là dữ liệu giả lập. |
| **S8** | Trung bình | Thêm thông điệp "Không cần tài khoản để gửi yêu cầu." nằm cạnh dòng trấn an trong Hero, hiển thị trên giao diện chính mà không cần mở menu. | Tại 1440px và 390px, thông điệp hiển thị ngay trong màn hình đầu tiên khi tải trang, không chồng lấn, đạt tương phản 6.81:1. |
| **S9** | Trung bình | Bỏ chữ viết tay cắt ngang họa tiết; chuẩn hóa 2 vòng cung cam hai bên thanh mảnh, đối xứng, không chạm hoặc cắt ngang chữ hay khung ảnh; loại bỏ toàn bộ mảnh vụn và vệt màu lạ. | Kiểm tra ảnh chụp ở 768px, 1024px, 1440px: Không có nét cắt ngang chữ; đỉnh hai khung ảnh sạch sẽ, thanh thoát. |
| **S10** | Trung bình | Thay thế 3 ảnh thú cưng bằng ảnh gốc chất lượng cao hình chữ nhật (không có khung kem nướng sẵn, không có vạch đáy); ảnh giữa đạt độ phân giải thật 960×845 px (> 840 px); ghi rõ nguồn Unsplash và giấy phép Unsplash License trong tài liệu bàn giao. | Tại 1440px, kiểm tra phóng to ảnh không còn dải sáng đáy hay viền kép ở đỉnh; ảnh sắc nét và CSS tự bo vòm. |
| **S11** | Thấp | Bổ sung quy tắc: Chỉ áp dụng `box-shadow` cho `.mobile-drawer` khi có class `.open`; khi menu đóng thì `box-shadow: none` và `visibility: hidden`. | Kiểm tra mép phải màn hình ở 390px khi menu đóng: Hoàn toàn không còn vệt bóng xám lọt vào khung nhìn. |
| **S12** | Thấp | Bổ sung thuộc tính `text-wrap: balance` và giới hạn `max-width: 580px` cho `.hero-description`. | Kiểm tra tại 1024px và 1440px: Dòng mô tả hiển thị trọn vẹn, không còn hiện tượng rớt một từ "hiểu." xuống dòng riêng lẻ. |
| **T1** | Tài liệu | Thống nhất tên nhánh làm việc là `antigravity/hero-v1`; bỏ dòng "Nhánh Git ✅ Đạt" ghi sai. | Cả hai tài liệu bàn giao đều ghi đúng nhánh `antigravity/hero-v1`. |
| **T2** | Tài liệu | Sửa toàn bộ liên kết SVG: Đồng bộ các tệp vector linh vật ở cả `demo/assets/` và `assets/`, sửa đường dẫn tương đối để mở được trực tiếp từ tài liệu. | Nhấp thử toàn bộ liên kết vector trong tài liệu: 100% tệp mở thành công. |
| **T3** | Tài liệu | Cập nhật sơ đồ cây thư mục thành phần và tài nguyên khớp chính xác với cấu trúc thực tế của repo. | Kiểm tra đối chiếu: Mọi đường dẫn trong mục 3.1 đều tồn tại thật. |
| **T4** | Tài liệu | Bổ sung các token còn thiếu vào bảng Design Tokens (`--color-brand-purple-muted`, `--color-brand-orange-light`), cập nhật số liệu đo tương phản thật. | Khớp từng biến trong bảng token với tệp `demo/styles.css`. |
| **T5** | Tài liệu | Chuyển bảng nghiệm thu thành "Bảng kiểm tự đánh giá của Antigravity", ghi rõ chờ nhóm rà soát và quyết định của Chủ dự án. | Không còn khẳng định "Đạt" thay cho người thẩm định. |
| **T6** | Tài liệu | Bổ sung hướng dẫn chi tiết cho Codex: Bảng trạng thái tương tác từng component, bảng điểm ngắt responsive thật (992px, 680px, 360px), thời lượng chuyển cảnh và vị trí ảnh gốc chưa cắt khung. | Mục 3.2 và 3.3 có bảng đầy đủ cho Codex lập trình. |
| **T7** | Tài liệu | Bổ sung hướng dẫn tự lưu trữ phông chữ (Next.js font / self-hosting) thay cho việc sử dụng `@import` Google Fonts khi đưa vào triển khai chính thức. | Mục 3.4 ghi rõ chỉ dẫn kỹ thuật font cho Codex. |
| **T8** | Tài liệu | Giữ gìn tính toàn vẹn của thư mục `docs/`: Chỉ chỉnh sửa 2 tệp tài liệu được phân công của Antigravity, không ghi đè bất kỳ tệp nào của Claude. | Lệnh `git status` và `git diff` xác nhận chỉ có 2 file markdown của Antigravity trong `docs/` thay đổi. |

---

## 7. Báo cáo Chi tiết Khắc phục Yêu cầu Rà soát Lần 2 (Mục 1 – Mục 9)

*Căn cứ tài liệu yêu cầu sửa đổi Lần 2 từ Claude (`docs/yeu-cau-sua-hero-v1-lan-2-antigravity.md`) và quyết định của Chủ dự án ngày 14/10/2026.*

| # | Yêu cầu | Ưu tiên | Đã làm gì | Cách tự kiểm tra và kết quả đo lường |
|---|---|:---:|---|---|
| **1** | **Xóa `#mobileDotsIndicator`, ba nút `.dot-btn`, CSS và JS liên quan** | Cao | • Xóa hoàn toàn cụm HTML `#mobileDotsIndicator` và các nút con trong `demo/index.html`.<br>• Xóa sạch CSS `.mobile-dots-indicator`, `.dot-btn`, `.dot-btn.active` và mọi quy tắc `display: flex !important` trong `demo/styles.css`.<br>• Xóa biến `petDots`, event listener click và logic chuyển ảnh trong `demo/app.js`. | Kiểm tra toàn bộ mã nguồn `demo/`: Không còn bất kỳ tham chiếu nào tới `dot-btn` hay `mobileDotsIndicator`. Nhấn phím Tab trên màn hình không dừng ở chấm tròn; không còn mã chết. |
| **2** | **Ba ảnh luôn nằm trong một hàng ở mọi kích thước** (360, 390, 680, 768, 1024, 1440 px) | Cao | • Thiết lập bố cục flex 1 hàng cố định (`flex-direction: row !important; align-items: flex-end;`).<br>• Ở 360px: 2 ảnh bên rộng 96px, ảnh giữa rộng 136px (tổng 340px <= 360px).<br>• Ở 390px: 2 ảnh bên rộng 106px, ảnh giữa rộng 148px (tổng 376px <= 390px).<br>• Cả 3 ảnh hiển thị đầy đủ, mỗi ảnh đều có chiều rộng ≥ 90px. Ảnh giữa cao hơn 30–35px, nổi bật hơn hai ảnh bên. | Đo tại 360px và 390px: `document.documentElement.scrollWidth === window.innerWidth` (không tràn ngang). Cả 3 ảnh cùng hiển thị trong khung nhìn, không bị cắt cụt, không chồng lấn. |
| **3** | **Không có khoảng trắng thừa lớn dưới ảnh trên mobile** | Cao | • Thiết lập `.hero-arches-stage` có `margin-bottom: 0 !important; padding-bottom: 0 !important; align-items: flex-end;`.<br>• Ba khung ảnh chạm sát đáy sàn của Hero section như form gốc Phương án D sau khi bỏ dải chấm tròn. | Kiểm tra giao diện mobile 360px và 390px: Đáy ảnh tiếp giáp trực tiếp với chân khối hero, không tồn tại khoảng trống thừa. |
| **4** | **S2: Bàn phím & Mobile Drawer** | Cao | • Bỏ `visibility` khỏi thuộc tính `transition` của `.mobile-drawer` (`transition: transform 260ms ..., box-shadow 260ms ...`). Khi có class `.open`, `visibility: visible !important` ngay lập tức.<br>• Khi mở drawer (qua Click hoặc phím Enter): gán `inert` cho `#siteHeader` và `#heroMain`, gỡ `inert` khỏi drawer, và gọi ngay `btnCloseDrawer.focus()`.<br>• Bẫy tiêu điểm xoay vòng Tab / Shift+Tab trong drawer.<br>• Phím Escape đóng drawer và trả tiêu điểm về `btnMobileMenu`. | Đo bằng script tự động và tương tác bàn phím: Nhấn Enter tại `btnMobileMenu`, sau 1 giây `document.activeElement` chính xác là `btnCloseDrawer`. Tab tuần hoàn trong drawer. Nhấn ESC hoàn trả tiêu điểm về `btnMobileMenu`. |
| **5** | **S6: Viền focus nút tím không dùng cam trên nền kem** | Trung bình | • Đổi viền focus cho các nút nền tối/tím đậm (`.btn-cta-primary`, `.btn-auth-register`, `.skip-link`) thành `outline: 3px solid #421247 !important; box-shadow: 0 0 0 2px #FFFFFF !important;`.<br>• Màu viền ngoài tím sẫm `#421247` đạt tỷ lệ tương phản 13.96:1 trên nền kem `#FBF7F1`. Vòng đệm trắng tạo tương phản rõ rệt trên cả nền tím lẫn nền kem. | Đo độ tương phản màu viền: `#421247` trên nền kem `#FBF7F1` = 13.96:1 (vượt xa yêu cầu ≥ 3:1 của WCAG 2.1 SC 1.4.11). |
| **6** | **Sửa số tương phản sai trong cửa sổ Tiêu chí và tài liệu** | Trung bình | • Xóa bỏ hoàn toàn con số không chính xác "14,8:1".<br>• Cập nhật số liệu đo đạc thật theo công thức WCAG 2.1:<br>  - `#231627` (chữ chính): **16.19:1** trên nền kem `#FBF7F1`.<br>  - `#421247` (tím sẫm H1/viền focus): **13.96:1** trên nền kem.<br>  - `#5A1E5E` (tím thương hiệu): **11.04:1** trên nền kem.<br>  - `#5E5362` (chữ phụ/mô tả): **6.81:1** trên nền kem. | Quét toàn bộ repository: Không còn xuất hiện chuỗi "14,8:1" hay "14.8". Bảng tiêu chí trong Modal (`index.html`) và tài liệu bàn giao khớp 100% với số đo thật. |
| **7** | **Nguồn ba ảnh thú cưng** | Trung bình | • Bổ sung bảng kê Mục 3.5 chi tiết: mô tả chuẩn xác 3 nhân vật trong ảnh thực tế (trái: mèo mướp đeo khăn vàng, giữa: chó Golden ngậm hoa tulip, phải: mèo vằn mắt xanh ngước nhìn).<br>• Ghi rõ tuyên bố pháp lý: *"Toàn bộ 3 ảnh thú cưng là ảnh minh họa giai đoạn demo UI/UX, chưa xác nhận bản quyền thương mại chính thức, không dùng cho mục đích xuất bản công khai thương mại. Khi vận hành sẽ thay thế bằng ảnh chụp thực tế hoặc ảnh có bản quyền đã mua."* | Kiểm tra Mục 3.5 trong tài liệu bàn giao: Khớp chính xác ảnh thực tế và khuyến cáo bản quyền. |
| **8** | **Dấu chân tím (`decor-paw`) đứng rời cạnh cung trái** | Thấp | • Xóa bỏ hoàn toàn phần tử SVG `decor-paw` trong `demo/index.html`.<br>• Xóa sạch quy tắc CSS `.decor-paw` trong `demo/styles.css`. Vòng cung cam hai bên giữ nguyên thanh mảnh, sạch sẽ, đối xứng. | Kiểm tra cây DOM và CSS: Không còn `decor-paw`. Vùng họa tiết cung trái liền lạc, không còn đối tượng rời rạc. |
| **9** | **Đồng bộ tài liệu bàn giao với mã** | Thấp | • Đồng bộ lại Bảng Điểm ngắt Responsive (Mục 3.2): xóa bỏ mô tả dải chấm tròn và chế độ hé lộ 2 ảnh bên; cập nhật chuẩn xác quy cách 3 ảnh nằm trong một hàng ở mọi kích thước.<br>• Xóa toàn bộ các đoạn văn nhắc tới việc ẩn/hiện chấm tròn ở các ngưỡng màn hình khác nhau. | Đối chiếu từng thông số trong Mục 3.2 với các quy tắc media query trong `demo/styles.css`: 100% khớp nhau. |
