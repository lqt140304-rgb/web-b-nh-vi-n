# Báo cáo Thiết kế Hero & Header — Phương án D (Minimal Creative)
**Dự án:** Bệnh viện Thú y Lê Sơn  
**Đơn vị thực hiện:** Antigravity (UI/UX Specialist)  
**Trạng thái:** **[HOÀN THIỆN PHASE 1]** — Sẵn sàng rà soát và bàn giao  
**Nhánh làm việc:** `antigravity/hero-v1`  

---

## 1. Cập nhật Phạm vi Thiết kế chính thức (14/10/2026)

Theo quyết định mới nhất của Chủ dự án:
1. **Giao diện Hero chính thức Phase 1:** Hoàn thiện trọn vẹn **Phương án D — Minimal Creative** với bố cục **3 Khung ảnh vòm thú cưng sáng tạo**.
2. **Không triển khai animation chuyển đổi tư thế mèo:** Tạm hoãn tính năng mèo đổi 3 tư thế giữa các trang sang giai đoạn sau (Phase 2+) để không làm chậm tiến độ hoàn thiện Hero/Header.
3. **Bảo tồn toàn bộ tài nguyên SVG:** Toàn bộ các bản vẽ vector linh vật (Bóng mèo duỗi thảnh thơi, Mèo Cartoon Bé Cam, Mèo Dancing Monoline) đã được bảo lưu an toàn trong thư mục `assets/` để sẵn sàng cho Phase 2+.
4. **Quy chuẩn bố cục:** Tuyệt đối không chồng lấn chữ, nút bấm và hình ảnh; giao diện thoáng đãng, ấm áp, chuẩn Mobile-First và WCAG 2.1 AA.

---

## 2. Hình ảnh Giao diện Thực tế Phương án D (Minimal Creative)

### 2.1. Giao diện Desktop 1440px
![Giao diện Desktop Phương án D](../assets/demo-minimal-creative-desktop.png)

### 2.2. Giao diện Mobile 390px (iPhone 15)
![Giao diện Mobile Phương án D](../assets/demo-minimal-creative-mobile.png)

---

## 3. Các điểm ưu việt của Giao diện Minimal Creative

1. **Bố cục phân tầng mạch lạc:**
   - **Header:** Logo Lê Sơn chính thức, điều hướng 5 mục, ô tìm kiếm nhanh và cụm xác thực (Khách vãng lai & Đã đăng nhập).
   - **Hero:** Eyebrow trang trọng `♥ BỆNH VIỆN THÚ Y LÊ SƠN`, tiêu đề chính H1 `Khoảng an toàn nhỏ / cho những người bạn lớn` căn giữa thanh lịch.
   - **CTA Group:** Nút chính `Gửi yêu cầu đặt lịch →` bo góc êm ái, nút phụ `Xem dịch vụ`. Dưới nút có dòng chú thích cam kết: `📞 Nhân viên sẽ liên hệ để xác nhận lịch hẹn.`
2. **Ba khung ảnh vòm chạm đáy (Three Arched Frames):**
   - Khung 1 (Trái): Chú mèo vàng giơ chân khoe đệm thịt chào đón.
   - Khung 2 (Giữa - Trọng tâm): Chú chó Golden Retriever với ánh nhìn ấm áp, tin cậy.
   - Khung 3 (Phải): Bé mèo vằn ngước nhìn tò mò.
   - Họa tiết trang trí: Vòng cung cam mỏng (`#FC9238`), dấu chân tím nhỏ, chữ viết tay mềm mại `Care / Create / Stronger / Bonds`.
3. **Responsive Mobile-First (390px):**
   - Không ép 3 ảnh nhỏ vào một hàng gây vụn nát thị giác.
   - Khung ảnh trung tâm nổi bật, hai ảnh bên thu gọn nhẹ nhàng kèm bộ chuyển đổi chấm tròn tương tác 1 chạm.
   - Menu Drawer mở êm ái, thân thiện khi thao tác bằng một ngón tay cái.

---

## 4. Cách trải nghiệm Bản Demo tương tác trực tiếp

Bản demo giao diện chạy độc lập, mở trực tiếp tệp:
👉 [`demo/index.html`](../demo/index.html)

Hoặc khởi chạy server cục bộ:
```bash
# Khởi chạy máy chủ HTTP phục vụ thư mục demo
python -m http.server 3030 --directory demo
# Truy cập: http://localhost:3030
```

### Thao tác thử nghiệm nhanh:
1. **Chuyển đổi Khung nhìn:** Bấm chọn `Desktop (1440px)`, `Mobile (390px)` hoặc `Toàn màn hình` trên thanh công cụ màu tím.
2. **Kiểm tra trạng thái Tài khoản:** Bấm `👤 Trạng thái: Khách vãng lai` để hoán đổi với trạng thái đã đăng nhập (`Nguyễn Minh Khang`).
3. **Bấm thử CTA & Search:** Trải nghiệm phản hồi toast hướng dẫn nghiệp vụ rõ ràng.
4. **Xem Tiêu chí nghiệm thu:** Bấm nút `📋 Tiêu chí` để kiểm tra đối chiếu kỹ thuật.

---

## 5. Danh mục Lưu trữ Tài nguyên cho Giai đoạn sau (Phase 2+ Backlog)

Các tệp vector linh vật mèo phục vụ tính năng chuyển đổi tư thế giữa các trang đã được lưu trữ đầy đủ tại:
- [`assets/cat-silhouette.svg`](../assets/cat-silhouette.svg) — Silhouette duỗi thảnh thơi (Trang chủ)
- [`assets/cat-pose-services.svg`](../assets/cat-pose-services.svg) — Silhouette chỉ chân khám phá (Dịch vụ)
- [`assets/cat-pose-booking.svg`](../assets/cat-pose-booking.svg) — Silhouette vẫy chân chào mừng (Đặt lịch)
- [`assets/sketch-cartoon-cat.svg`](../assets/sketch-cartoon-cat.svg) — Phác thảo Cartoon Bé Cam
- [`assets/cat-dancing-monoline-pure-v7.svg`](../assets/cat-dancing-monoline-pure-v7.svg) — Mèo Dancing Monoline thuần khiết
- [`assets/cat-dancing-monoline-brand-v7.svg`](../assets/cat-dancing-monoline-brand-v7.svg) — Mèo Dancing Monoline nhận diện Lê Sơn
