# Bàn giao Thiết kế Trang Dịch vụ — Services V1 (Phương án C: Creative Arch Cards)

**Dự án:** Bệnh viện Thú y Lê Sơn  
**Đơn vị thực hiện:** Antigravity (UI/UX Specialist)  
**Nhánh làm việc:** `antigravity/services-v1`  
**Phiên bản:** Services V1.2 (Đợt sửa cuối cùng theo duyệt của Chủ dự án ngày 14/10/2026)  
**Trạng thái:** **Đã hoàn thành 9/9 mục — Sẵn sàng để Claude QA & Chủ dự án nghiệm thu**  
**Quy trình áp dụng:** Antigravity bàn giao → Claude QA → Chủ dự án duyệt  

---

## 1. Giới thiệu Định hướng Giao diện (Phương án C)

Theo quyết định định hướng của Chủ dự án, Trang Dịch vụ của Bệnh viện Thú y Lê Sơn áp dụng **Phương án C — Creative Arch Cards (Thẻ Khung Vòm Sáng Tạo)**.

Thiết kế này mang lại:
1. **Tính kế thừa tự nhiên từ Hero V1:** Tiếp nối ngôn ngữ hình học khung vòm đặc trưng của Lê Sơn, tạo cảm giác thân thiện, bảo bọc và ấm áp như một ngôi nhà an toàn cho thú cưng.
2. **Cân đối trên Desktop 1440px:** 4 thẻ dịch vụ chính được dàn ngang trên một hàng đồng đều, tỷ lệ thanh thoát, không chen chúc.
3. **Thoáng đãng trên Mobile 390px & 360px:** Các thẻ tự động chuyển sang bố cục xếp dọc 1 cột, giữ trọn vẹn kích thước chữ, hình ảnh và vùng bấm nút tối ưu cho ngón tay cái.
4. **Trợ năng & Tương tác:** Hỗ trợ điều hướng bàn phím đầy đủ, viền focus tương phản cao (≥ 3:1 WCAG AA), modal xem chi tiết dịch vụ có bẫy tiêu điểm xoay vòng.

---

## 2. Hình ảnh Xem thử Thực tế (Visual Previews)

### 2.1. Giao diện Desktop 1440px
![Giao diện Desktop Trang Dịch Vụ](../assets/services-preview-desktop.png)

### 2.2. Giao diện Mobile 390px (iPhone 15)
![Giao diện Mobile Trang Dịch Vụ](../assets/services-preview-mobile.png)

---

## 3. Danh mục 4 Dịch vụ Trọng tâm

Tuân thủ nghiêm ngặt các quyết định đã chốt của Chủ dự án:
- Dùng chữ giữ chỗ placeholder có nhãn `[Nội dung mẫu — chờ bệnh viện cung cấp]`, không tự viết câu khẳng định chuyên môn hay cam kết kết quả.
- Dịch vụ Grooming đổi tên chính thức thành **"Spa & Grooming"**.
- Dịch vụ Cấp cứu tiếp nhận **24/24** [Đã xác nhận], thẻ Cấp cứu chỉ có duy nhất nút gọi khẩn cấp tới hotline **`097 355 51 05`** (`tel:+84973555105`), không có nút đặt lịch và không mở modal.

| # | Tên Dịch vụ | Icon | Tông màu vòm | 3 Điểm nổi bật chính | Hành động chính |
|---|---|:---:|:---:|---|---|
| **1** | **Khám và điều trị** | Ống nghe (`stethoscope`) | Cam phấn `#FDF2E8` | ✦ [Nội dung mẫu 1 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 2 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 3 — chờ bệnh viện cung cấp] | `Tìm hiểu thêm →` (Mở modal có nút "Gửi yêu cầu đặt lịch") |
| **2** | **Spa & Grooming** | Cây kéo tỉa lông (`scissors`) | Xanh pastel `#EDF6F7` | ✦ [Nội dung mẫu 1 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 2 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 3 — chờ bệnh viện cung cấp] | `Tìm hiểu thêm →` (Mở modal có nút "Gửi yêu cầu đặt lịch") |
| **3** | **Nội trú** | Ngôi nhà (`home`) | Kem tím `#F7EFF5` | ✦ [Nội dung mẫu 1 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 2 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 3 — chờ bệnh viện cung cấp] | `Tìm hiểu thêm →` (Mở modal có nút "Gửi yêu cầu đặt lịch") |
| **4** | **Cấp cứu 24/24** | Chữ thập y tế khẩn cấp | Tím hồng `#F8ECF3` | ✦ Tiếp nhận cấp cứu 24/24<br>✦ [Nội dung mẫu 1 — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu 2 — chờ bệnh viện cung cấp] | `<a href="tel:+84973555105">` **Gọi cấp cứu 24/24: 097 355 51 05** |

---

## 4. Bảng Báo Cáo Kết Quả Đợt Sửa Cuối (9/9 Mục Đã Làm)

Theo đúng yêu cầu tại `docs/yeu-cau-sua-services-v1-lan-2-antigravity.md`:

| # | Việc cần sửa | Tình trạng | Chi tiết thực hiện |
|:---:|---|:---:|---|
| **1** | **Bỏ nút "Tìm hiểu thêm & Chỉ đường" ở thẻ Cấp cứu**; xóa dữ liệu và mã cửa sổ chi tiết của Cấp cứu (`capcuu` trong `serviceData` và nhánh modal). Thẻ Cấp cứu chỉ còn nút "Gọi cấp cứu". | **ĐÃ LÀM** | Đã xóa nút sublink ở thẻ Cấp cứu; xóa toàn bộ `capcuu` khỏi `serviceData`; xóa nhánh `if (serviceKey === 'capcuu')`. Đã kiểm tra toàn bộ mã: không còn xuất hiện các cụm từ "hỗ trợ tức thì", "tất cả các ngày trong tuần". |
| **2** | **Số điện thoại không bị ngắt dòng trên nút Cấp cứu ở desktop (thẻ rộng 270 px)**. | **ĐÃ LÀM** | Nút Cấp cứu hiển thị 2 dòng: dòng 1 `Gọi cấp cứu 24/24:`, dòng 2 số `097 355 51 05` to đậm có `white-space: nowrap !important;`. Số điện thoại luôn hiển thị liền mạch trên một dòng ở mọi kích thước màn hình (1440, 1280, 1024, 768, 390, 360 px). |
| **3** | **Đường cong cam không chạm chữ H1 ở trang Dịch vụ** (ở 1440, 1280, 1024 px). | **ĐÃ LÀM** | Cấu hình `.services-header-stage` rộng tối đa 1200px với padding 40px; định vị `.services-decor-curve-left` và `.services-decor-curve-right` ở biên ngoài thoáng (top 14px/10px, ngang tầm eyebrow); tiêu đề H1 có khoảng cách biên ≥ 80px. Tại 1024px, áp dụng scale 0.85 và margin an toàn. Họa tiết hoàn toàn không chạm hay cắt chữ nào của tiêu đề. |
| **4** | **Sửa "105" thành "101" Khuất Duy Tiến ở `services.html` và `index.html`; tìm lại toàn bộ mã và tài liệu**. | **ĐÃ LÀM** | Đã quét toàn bộ dự án (`*.html`, `*.js`, `*.css`, `*.md`). Không còn bất kỳ chuỗi "105 Khuất" nào trong toàn bộ repository. |
| **5** | **Bỏ hai nút Maps và Facebook khỏi header của `services.html` và `index.html` (cả desktop và khi đã đăng nhập)**. | **ĐÃ LÀM** | Đã xóa toàn bộ khối `.header-social-links` khỏi header của cả hai trang `services.html` và `index.html`. Header trở lại đúng chuẩn Hero V1 đã duyệt (Logo, Nav menu, Auth buttons / Profile button), không bị tràn ở 1024px và 390px. |
| **6** | **Khối liên hệ trong menu điện thoại: giữ**, liên kết Facebook dùng `https://www.facebook.com/benhvienthuyleson` (không kèm `?locale`), mở tab mới có `rel="noopener noreferrer"`; địa chỉ chữ ghi 101 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội. | **ĐÃ LÀM** | Khối liên hệ trong mobile drawer hiển thị đúng địa chỉ 101 Khuất Duy Tiến, hotline `tel:+84973555105`, Maps và Facebook sạch (`rel="noopener noreferrer"`). Tab quay vòng tuần hoàn trong drawer hoạt động trơn tru. |
| **7** | **Nút Maps/Facebook trong cửa sổ chi tiết của ba dịch vụ còn lại: bỏ**; giữ nút "Gửi yêu cầu đặt lịch". | **ĐÃ LÀM** | Cửa sổ modal của Khám, Spa & Grooming, Nội trú đã loại bỏ hai nút Maps/Facebook; chỉ còn nội dung chữ giữ chỗ và nút `"Gửi yêu cầu đặt lịch →"` trỏ về `index.html#form-dat-lich`. |
| **8** | **Tài liệu `thong-tin-benh-vien-le-son.md`**: xóa hoặc đánh dấu "chưa xác nhận, không dùng" các mục thiết bị, phòng mổ, máy móc, camera, "trục vành đai 3", và kế hoạch lấy ảnh từ Facebook/Google Maps; chỉ giữ thông tin chủ dự án đã cung cấp. | **ĐÃ LÀM** | Đã viết lại `docs/thong-tin-benh-vien-le-son.md`, loại bỏ toàn bộ các khẳng định chưa xác thực, chỉ giữ các thông tin liên hệ chính thức theo đúng `docs/thong-tin-lien-he.md`. |
| **9** | **Hero**: kiểm và sửa nếu còn: khóa đúng phần Hero khi mở menu (`id="hero-main"`); menu trong chế độ xem thử "Mobile (390px)" nằm trong khung điện thoại. | **ĐÃ LÀM** | `app.js` dùng `document.getElementById('hero-main')` bật `inert` khi mở drawer; `styles.css` có `.viewport-outer.mode-mobile .mobile-drawer { position: absolute !important; }` giữ menu luôn nằm trọn trong khung điện thoại 390px. |

---

## 5. Hướng dẫn Trải nghiệm Bản Demo

Bản demo Dịch vụ V1 được lưu trữ độc lập tại:
👉 [`demo/services.html`](../demo/services.html)

Khởi chạy máy chủ xem thử:
```bash
node server.js
# Truy cập: http://127.0.0.1:3030/services.html
```

*(Ghi chú: `server.js` chỉ là công cụ xem thử demo nội bộ trên máy cá nhân, Codex không tái sử dụng khi triển khai).*

---

## 6. Phản hồi Rà soát Kỹ thuật của Codex (P1 & P2)

| Hạng mục | Nhận xét từ Codex | Kết quả xử lý của Antigravity |
|---|---|---|
| **P1 — Nút gọi cấp cứu bị chặn** | `btn-card-learn` trên thẻ `tel:+84973555105` bị JS gắn `preventDefault()` và mở modal trống với `data-service` null. | **ĐÃ SỬA TRIỆT ĐỂ:**<br>1. Loại bỏ hoàn toàn class `.btn-card-learn` khỏi thẻ liên kết gọi điện; nút gọi cấp cứu chỉ mang class `.btn-card-emergency`.<br>2. Trong `services.js`, giới hạn selector chỉ gắn sự kiện mở modal cho `.btn-card-learn[data-service]`. Nút gọi giữ nguyên `tel:+84973555105`, không bị `preventDefault()`, không kích hoạt mở modal. |
| **P2 — Trợ năng Modal (inert)** | `openServiceModal` và `closeServiceModal` chưa khóa nền bằng `inert` dù có `aria-modal="true"`. | **ĐÃ BỔ SUNG:** Cả `openServiceModal` và `openSpecsModal` (trên cả `services.js` và `app.js`) đều gán `inert` cho `#siteHeader` và `#services-main` / `#hero-main` khi mở modal, và gỡ bỏ `inert` khi đóng. Tiêu điểm bàn phím và trình đọc màn hình hoàn toàn bị cô lập trong modal theo chuẩn WCAG 2.1. |
| **P2 — Điểm đến đặt lịch** | `index.html` chưa có `id="form-dat-lich"`. | **GHI NHẬN RÕ RÀNG:** Đã thống nhất cấu trúc liên kết chuẩn `index.html#form-dat-lich`; điểm đến form đặt lịch chưa triển khai trên bản demo UI/UX và sẽ được xây dựng theo đúng kế hoạch phát triển form/backend của dự án sau này. |
| **Khuyến cáo kiểm thử** | Thử gọi trên điện thoại; nếu chưa có thiết bị thì ghi rõ chưa xác nhận trình gọi thực tế. | **GHI CHÚ:** Liên kết `tel:+84973555105` đã được kiểm tra cú pháp và sự kiện chuẩn trên trình duyệt (không bị chặn); trình quay số thực tế (phone dialer) cần kiểm thử trên thiết bị di động có gắn SIM thực tế. |
