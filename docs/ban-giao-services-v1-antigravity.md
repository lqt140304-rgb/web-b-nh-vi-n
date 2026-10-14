# Bàn giao Thiết kế Trang Dịch vụ — Services V1 (Phương án C: Creative Arch Cards)

**Dự án:** Bệnh viện Thú y Lê Sơn  
**Đơn vị thực hiện:** Antigravity (UI/UX Specialist)  
**Nhánh làm việc:** `antigravity/services-v1`  
**Phiên bản:** Services V1.1 (Cập nhật hoàn tất 10 hạng mục F1–F10 theo yêu cầu ngày 14/10/2026)  
**Trạng thái:** **Đã hoàn thành sửa 1 đợt — Sẵn sàng bàn giao Claude QA & Chủ dự án nghiệm thu**  
**Quy trình áp dụng:** Antigravity bàn giao → Claude QA (Codex kiểm tra bổ sung nếu cần) → Claude tổng hợp → Chủ dự án duyệt  

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

Tuân thủ nghiêm ngặt các quyết định đã chốt ngày 14/10/2026 của Chủ dự án:
- Dùng chữ giữ chỗ placeholder có nhãn `[Nội dung mẫu — chờ bệnh viện cung cấp]`, không tự viết câu khẳng định chuyên môn hay cam kết kết quả.
- Dịch vụ Grooming đổi tên chính thức thành **"Spa & Grooming"**.
- Dịch vụ Cấp cứu tiếp nhận **24/24** [Đã xác nhận], nút chính là gọi điện khẩn cấp tới hotline **`097 355 51 05`** (`tel:+84973555105`), không có nút đặt lịch ở Cấp cứu.

| # | Tên Dịch vụ | Icon | Tông màu vòm | 3 Điểm nổi bật chính | Hành động chính |
|---|---|:---:|:---:|---|---|
| **1** | **Khám và điều trị** | Ống nghe (`stethoscope`) | Cam phấn `#FDF2E8` | ✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp] | `Tìm hiểu thêm →` (Mở modal có nút "Gửi yêu cầu đặt lịch") |
| **2** | **Spa & Grooming** | Cây kéo tỉa lông (`scissors`) | Xanh pastel `#EDF6F7` | ✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp] | `Tìm hiểu thêm →` (Mở modal có nút "Gửi yêu cầu đặt lịch") |
| **3** | **Nội trú** | Ngôi nhà (`home`) | Kem tím `#F7EFF5` | ✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp] | `Tìm hiểu thêm →` (Mở modal có nút "Gửi yêu cầu đặt lịch") |
| **4** | **Cấp cứu 24/24** | Chữ thập y tế khẩn cấp | Tím hồng `#F8ECF3` | ✦ Tiếp nhận cấp cứu 24/24 [Đã xác nhận]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp]<br>✦ [Nội dung mẫu — chờ bệnh viện cung cấp] | `<a href="tel:+84973555105">` **Gọi cấp cứu: 097 355 51 05** |

---

## 4. Bảng Đối Chiếu 10 Hạng Mục Sửa (F1–F10) Theo Yêu Cầu 14/10/2026

| Mã | Ưu tiên | Hạng mục yêu cầu | Tình trạng | Chi tiết thực hiện |
|:---:|:---:|---|:---:|---|
| **F1** | Cao | **Thay 4 ảnh dịch vụ sạch ≥ 912px** | **PASS** | Đã thay toàn bộ 4 ảnh chụp thực tế chất lượng cao từ Unsplash (độ rộng gốc 1000px ≥ 912px), hoàn toàn không còn mép thẻ khác, không icon nướng sẵn, không viền nhân tạo. Ảnh được trình duyệt bo vòm tự nhiên bằng CSS `border-radius: 120px 120px 0 0`. Bảng chi tiết nguồn ảnh ở Mục 5 bên dưới. |
| **F2** | Cao | **Chữ giữ chỗ placeholder & bỏ cam kết chuyên môn** | **PASS** | Tiêu đề H1 đổi thành `"Dịch vụ chăm sóc thú cưng của bạn"` (đã bỏ chữ "toàn diện"). Toàn bộ 3 gạch đầu dòng trên 3 thẻ thường và nội dung chi tiết trong modal đã được thay bằng nhãn `[Nội dung mẫu — chờ bệnh viện cung cấp]`. Tuyệt đối không còn câu khẳng định chuyên môn hay hứa hẹn kết quả điều trị. Bố cục co giãn mượt mà. |
| **F3** | Cao | **Cấp cứu: Gọi điện trực tiếp, không gửi yêu cầu** | **PASS** | Thẻ và modal Cấp cứu ghi rõ "Cấp cứu 24/24". Nút bấm chính trên thẻ là liên kết gọi điện trực tiếp: `<a href="tel:+84973555105" class="btn-card-learn btn-card-emergency">Gọi cấp cứu: 097 355 51 05</a>`. Trong modal Cấp cứu hiển thị hộp cảnh báo: *"Ca khẩn cấp vui lòng gọi trực tiếp hotline, không gửi yêu cầu qua web"* cùng nút gọi điện to và nút "Chỉ đường trên Google Maps". **Tuyệt đối không có nút "Gửi yêu cầu đặt lịch" ở Cấp cứu.** |
| **F4** | Cao | **Đường đặt lịch chuẩn** | **PASS** | Bổ sung khối CTA đặt lịch ngoài cửa sổ `.services-booking-cta` đặt ngay dưới lưới 4 thẻ, hiển thị nút chuẩn `"Gửi yêu cầu đặt lịch"` (trỏ `index.html#form-dat-lich`) kèm dòng giải thích: *"Nhân viên sẽ liên hệ để xác nhận lịch hẹn."* Trong modal của 3 dịch vụ thường, nút hành động cũng hiển thị đúng `"Gửi yêu cầu đặt lịch →"` trỏ cùng đích `index.html#form-dat-lich`. |
| **F5** | Trung bình | **Menu điện thoại (Drawer) đồng bộ với Hero** | **PASS** | Drawer mobile trên `services.html` tái sử dụng đầy đủ cấu trúc của Hero: Logo Lê Sơn trong suốt, nút đóng ✕, 4 liên kết điều hướng (với "Dịch vụ" có `aria-current="page"`), khối thẻ liên hệ hiển thị địa chỉ chuẩn **101 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội**, hotline bấm gọi ngay `097 355 51 05`, nút "Gửi yêu cầu đặt lịch", 2 nút Đăng nhập / Đăng ký và dòng ghi chú *"Khách vãng lai gửi yêu cầu không bắt buộc có tài khoản"*. Đã bỏ toàn bộ khẩu hiệu chưa xác nhận. |
| **F6** | Trung bình | **Nối Hero sang Dịch vụ** | **PASS** | Trên trang `demo/index.html`, liên kết menu "Dịch vụ" (trên Header Desktop và Mobile Drawer) cùng nút bấm phụ `btnCtaSecondary` ("Xem dịch vụ") đã được cấu hình trỏ chính xác sang `services.html`. |
| **F7** | Trung bình | **Đổi tên Grooming thành "Spa & Grooming"** | **PASS** | Đã đổi tên trên thẻ, modal chi tiết, thuộc tính `aria-label`, thẻ alt hình ảnh và tài liệu bàn giao. Tên hiển thị gọn gàng trên 1 dòng ở màn hình hẹp 360px nhờ cấu hình typography `font-size: clamp(1.2rem, 1.8vw, 1.35rem)`. |
| **F8** | Thấp | **Phông chữ tải 1 lần, bỏ phông không dùng** | **PASS** | Xóa hoàn toàn cú pháp `@import` trong file `demo/styles.css`. Cả hai trang `index.html` và `services.html` sử dụng duy nhất một thẻ `<link rel="stylesheet">` từ Google Fonts tải 2 họ phông: `Be Vietnam Pro` (400, 500, 600, 700) và `Lora` (500, 600, 700). Đã loại bỏ hoàn toàn phông chữ `Caveat` không sử dụng. |
| **F9** | Thấp | **Icon Cấp cứu y tế khẩn cấp** | **PASS** | Thay biểu tượng chiếc chuông (`siren`) bằng biểu tượng chữ thập y tế cấp cứu trong hình tròn màu đỏ/tím thương hiệu, dễ hiểu trực quan cho tình huống cứu hộ khẩn cấp y khoa. |
| **F10** | Thấp | **Ghi chú kỹ thuật về `server.js`** | **PASS** | Tệp `server.js` là máy chủ HTTP tĩnh Node.js độc lập, được Antigravity tạo để phục vụ riêng việc chạy xem thử demo và chụp ảnh kiểm thử trên máy cá nhân (`http://127.0.0.1:3030`). Tệp này **không phải là mã nguồn backend** và Codex không tái sử dụng khi xây dựng hệ thống website chính thức. |

---

## 5. Bảng Kê Nguồn Gốc & Bản Quyền 4 Ảnh Dịch Vụ Mới (F1)

Toàn bộ 4 ảnh đều có độ phân giải gốc cao (rộng 1000px, vượt mức tối thiểu 912px), chụp cận cảnh chân thực, màu sắc tươi sáng, tương thích tự nhiên với bảng màu kem-tím của Bệnh viện Thú y Lê Sơn.

| Dịch vụ | Tệp ảnh lưu trữ | Kích thước | Mô tả nhân vật trong ảnh | Tác giả & Nguồn | Tình trạng bản quyền |
|---|---|:---:|---|---|:---:|
| **Khám và điều trị** | `demo/assets/service-kham.jpg`<br>`demo/assets/service-kham.png` | 1000 × 667 px | Bác sĩ thú y dịu dàng thăm khám cho một bé mèo mướp trên bàn y tế vô trùng | Nhiếp ảnh gia **Christin Hume** (Unsplash) | **Giấy phép Unsplash Free**<br>(Cho phép sử dụng thương mại & phi thương mại miễn phí) |
| **Spa & Grooming** | `demo/assets/service-grooming.jpg`<br>`demo/assets/service-grooming.png` | 1000 × 667 px | Chú cún trắng nhỏ đang được tắm bọt spa thư giãn chuyên nghiệp | Nhiếp ảnh gia **Autri Taheri** (Unsplash) | **Giấy phép Unsplash Free**<br>(Cho phép sử dụng thương mại & phi thương mại miễn phí) |
| **Nội trú** | `demo/assets/service-noitru.jpg`<br>`demo/assets/service-noitru.png` | 1000 × 1333 px | Bé mèo cuộn mình ngủ say sưa, ấm áp dưới lớp chăn sạch sẽ trong phòng lưu trú | Nhiếp ảnh gia **Unsplash Creator** (Unsplash) | **Giấy phép Unsplash Free**<br>(Cho phép sử dụng thương mại & phi thương mại miễn phí) |
| **Cấp cứu 24/24** | `demo/assets/service-capcuu.jpg`<br>`demo/assets/service-capcuu.png` | 1000 × 1600 px | Chú chó Golden Retriever thông minh, ánh mắt trung thành và tin cậy | Nhiếp ảnh gia **Richard Brutyo** (Unsplash) | **Giấy phép Unsplash Free**<br>(Cho phép sử dụng thương mại & phi thương mại miễn phí) |

> [!NOTE]
> *Cả 4 tệp ảnh đều có sẵn dưới cả 2 định dạng: `.jpg` (tải nhẹ, tối ưu nạp nhanh) và `.png` trong thư mục `demo/assets/` để tiện phục vụ Codex chuyển đổi tối ưu khi đưa lên Next.js / WebP.*

---

## 6. Hướng dẫn Trải nghiệm Bản Demo

Bản demo Dịch vụ V1 được lưu trữ độc lập tại:
👉 [`demo/services.html`](../demo/services.html)

Khởi chạy máy chủ xem thử:
```bash
node server.js
# hoặc: python -m http.server 3030 --directory demo
# Truy cập: http://127.0.0.1:3030/services.html
```

### Các thao tác kiểm tra đề xuất cho Claude QA:
1. **Kiểm tra 4 ảnh (F1):** Quan sát 4 khung vòm, ảnh sắc nét, viền cong tự nhiên, không tì vết, không mép thẻ khác.
2. **Kiểm tra nội dung & placeholder (F2):** Xem H1 không còn chữ "toàn diện"; 3 gạch đầu dòng và modal dịch vụ thường mang nhãn placeholder rõ ràng.
3. **Kiểm tra Cấp cứu 24/24 (F3):** Bấm nút thẻ Cấp cứu -> kích hoạt gọi điện thoại `tel:+84973555105`; bấm modal Cấp cứu -> hiển thị cảnh báo không gửi yêu cầu qua web, có nút gọi khẩn cấp và nút mở Google Maps.
4. **Kiểm tra CTA đặt lịch (F4):** Cuộn xuống dưới 4 thẻ, bấm nút "Gửi yêu cầu đặt lịch" -> chuyển về form đặt lịch trên `index.html#form-dat-lich`.
5. **Kiểm tra Mobile Drawer (F5 & A2):** Bấm xem chế độ `Mobile (390px)`, bấm nút mở menu hamburger -> Drawer mở gọn gàng bên trong khung điện thoại mô phỏng, tiêu điểm nhảy vào nút đóng, đầy đủ thông tin liên hệ 101 Khuất Duy Tiến và hotline `097 355 51 05`.
6. **Kiểm tra liên kết qua lại giữa Hero và Services (F6):** Bấm "Trang chủ" để về `index.html`, từ `index.html` bấm "Dịch vụ" hoặc nút "Xem dịch vụ" để quay lại `services.html`.
