# Đề xuất CTA mới cho trang Dịch vụ (Claude, 15/10/2026)

**Trạng thái:** đề xuất, **chờ chủ dự án duyệt**. Chưa là yêu cầu cho Antigravity. Thay khối cũ "Bạn cần đặt lịch chăm sóc cho thú cưng?" (thẻ tím nhạt cao, thừa khoảng trống) ở cuối trang Dịch vụ.

Xem: [ảnh](cta-moi.png) · [bản HTML chạy được](cta-moi.html) (có CSS đầy đủ để Antigravity dùng nếu được duyệt).

## Thiết kế

- Dải tím đậm `#5A1E5E → #421247`, chữ kem `#FBF7F1` (tương phản 11,0 đến 14,0:1), bo 28 px, thấp gọn (cao khoảng 154 px ở desktop, bỏ khoảng trống thừa của khối cũ).
- Trái: tiêu đề giữ nguyên "Bạn cần đặt lịch chăm sóc cho thú cưng?" và một dòng "Nhân viên sẽ liên hệ để xác nhận lịch hẹn. Không cần tài khoản để gửi yêu cầu." (nội dung đã có, đúng nghiệp vụ).
- Phải: nút kem "Gửi yêu cầu đặt lịch →" (cao 52 px, chữ tím đậm 14:1, trỏ `index.html#form-dat-lich`), bên dưới "Hoặc gọi **097 355 51 05**" (`tel:+84973555105`, số chung đã xác nhận).
- Trang trí tĩnh, rất nhẹ: hai vòm mảnh (tím nhạt và cam) ở góc phải và một dấu chân mờ ở góc trái, cùng ngôn ngữ vòm của Hero. Không hiệu ứng lặp; hover chỉ nhấc nút một lần, bọc `@media (hover: hover)`.
- Mobile (≤ 760 px): xếp dọc, căn giữa, nút rộng hết khung, ẩn vòm và dấu chân.
- Focus bàn phím: viền kem cộng vòng cam quanh nút (nền tím nên nhìn rõ).

## Điểm cần chủ dự án quyết

1. Có giữ dòng "Hoặc gọi 097 355 51 05" không (thêm đường gọi nhanh, nhưng không nằm trong CTA cũ).
2. Có giữ dòng ghi chú ("Nhân viên sẽ liên hệ… Không cần tài khoản…") ở trang Services không (quyết định bỏ chỉ áp dụng cho Hero).
3. Nền tím đậm hay muốn bản nền kem viền tím nhạt (nhẹ hơn, giống khối cũ hơn).

Đạt khi (nếu được duyệt, Claude kiểm): chữ và liên kết đúng như trên; không tràn ngang ở 1440, 1024, 390, 360 px; không khoảng trống thừa; focus thấy rõ; không hiệu ứng lặp; nút đặt lịch trỏ đúng đích đã thống nhất (đích form chưa có là HOÃN ĐÃ CHỐT).
