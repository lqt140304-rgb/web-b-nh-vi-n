# Yêu cầu sửa Services V1 (gửi Antigravity, một đợt)

**Người soạn:** Claude · **Căn cứ:** [QA Services V1 lượt đầu](ra-soat-services-v1-claude.md) (commit `a5a6a7d`) và trả lời của chủ dự án ngày 14/10/2026. **Trạng thái: chờ chủ dự án duyệt danh sách** trước khi Antigravity sửa (theo [quy trình QA](quy-trinh-qa-ui-ux.md)). Antigravity không cần tự kiểm tra lại các mục Claude đã ghi PASS.

## 1. Quyết định của chủ dự án

- **Cấp cứu: bệnh viện nhận cấp cứu 24/24** [Đã xác nhận]. Được ghi "Cấp cứu 24/24" trên thẻ và cửa sổ Cấp cứu. Lưu ý: chỉ áp dụng cho Cấp cứu, các dịch vụ khác vẫn không ghi 24/24.
- **Nội dung chi tiết dịch vụ:** chủ dự án cung cấp sau. **Trước mắt chỉ làm phần nhìn**: dùng chữ giữ chỗ có nhãn.
- **Tên "Grooming":** chủ dự án chưa chọn; xem mục 3.

## 2. Danh sách sửa

| # | Ưu tiên | Việc | Đạt khi |
|---|---|---|---|
| 1 | Cao | **Thay bốn ảnh dịch vụ** bằng ảnh sạch (F1) | Không còn mép thẻ khác, nửa icon nướng sẵn hay mảng màu lạ; mỗi ảnh rộng ≥ 912 px; ghi đúng mô tả, nguồn và trạng thái bản quyền từng ảnh |
| 2 | Cao | **Chữ giữ chỗ cho nội dung chưa có** (F2). Ba dòng trên thẻ và toàn bộ phần mô tả trong cửa sổ chi tiết đổi thành chữ giữ chỗ cùng độ dài tương đương, có nhãn rõ, ví dụ "Nội dung mẫu — chờ bệnh viện cung cấp" | Không còn câu khẳng định chuyên môn hay lời hứa kết quả (ví dụ "điều trị hiệu quả", "chẩn đoán hình ảnh chuyên sâu", "thở oxy", "điều dưỡng ghi nhật ký"); H1 bỏ chữ "toàn diện" hoặc đánh dấu chờ duyệt; bố cục vẫn đúng khi chữ dài hoặc ngắn |
| 3 | Cao | **Cấp cứu: gọi điện, không gửi yêu cầu** (F3) | Thẻ và cửa sổ Cấp cứu ghi "Cấp cứu 24/24"; nút chính là "Gọi cấp cứu" dạng liên kết `tel:` với số giữ chỗ `[Số cấp cứu — chờ xác nhận]`; **không** có nút "Gửi yêu cầu đặt lịch" ở Cấp cứu; có câu ngắn kiểu "Ca khẩn cấp vui lòng gọi trực tiếp, không gửi yêu cầu qua web" |
| 4 | Cao | **Đường đặt lịch** (F4) | Trang có nút "Gửi yêu cầu đặt lịch" (đúng chữ đã chốt, không dùng "đặt hẹn") ngoài cửa sổ, kèm dòng "Nhân viên sẽ liên hệ để xác nhận lịch hẹn."; mọi nút đặt lịch trỏ cùng một đích (tạm thời `index.html#form-dat-lich`) |
| 5 | Trung bình | **Menu điện thoại giống Hero** (F5) | Có logo, nút "Gửi yêu cầu đặt lịch", ghi chú khách vãng lai, thứ tự nút và nhãn giống Hero; bỏ khẩu hiệu chưa xác nhận |
| 6 | Trung bình | **Nối Hero sang Dịch vụ** (F6) | Trên `index.html`, menu "Dịch vụ" (desktop và menu điện thoại) và nút "Xem dịch vụ" trỏ `services.html` |
| 7 | Trung bình | **Đổi tên "Grooming"** theo lựa chọn của chủ dự án ở mục 3 | Tên mới hiển thị một dòng ở 360 px |
| 8 | Thấp | Phông chữ tải một lần, bỏ phông không dùng (F7) | Chỉ một nguồn Google Fonts; không còn Caveat nếu không dùng |
| 9 | Thấp | Icon Cấp cứu dễ hiểu là khẩn cấp (F8) | Không dùng chuông; ví dụ dấu cộng y tế hoặc nhịp tim |
| 10 | Thấp | Ghi chú `server.js` chỉ dùng trên máy cá nhân (F9) | Có dòng ghi chú trong tài liệu bàn giao |

Cùng đợt, sửa hai lỗi nhỏ còn lại của Hero (nếu chưa sửa): bảng nguồn ảnh Hero, id `hero-main` khi mở menu, vị trí menu trong chế độ xem thử Mobile (390px). Chi tiết ở `ra-soat-hero-v1-claude.md`, phần "BẢN 3" và "BẢN 3a".

## 3. Tên thay cho "Grooming" (chủ dự án chọn)

| Phương án | Ghi chú |
|---|---|
| **Tắm tỉa** (Claude đề xuất) | Ngắn, cách gọi phổ biến ở cửa hàng thú cưng Việt Nam, khách hiểu ngay |
| Spa thú cưng | Gợi cảm giác thư giãn, cao cấp; nhưng "spa" dễ hiểu là dịch vụ phụ, không rõ có cắt lông |
| Làm đẹp | Ngắn nhưng mơ hồ |
| Spa & Grooming | Giữ chữ quen với khách trẻ, nhưng vẫn có tiếng Anh |

Nếu chủ dự án chưa chọn khi Antigravity bắt đầu sửa, dùng tạm "Tắm tỉa".

## 4. Còn thiếu từ chủ dự án

- Số điện thoại cấp cứu (đến khi có, dùng số giữ chỗ).
- Nội dung chi tiết bốn dịch vụ.
- Tên chính thức thay "Grooming".
