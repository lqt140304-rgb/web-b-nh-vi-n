# Đề xuất CTA mới cho trang Dịch vụ (Claude, 15/10/2026, bản 3)

**Trạng thái:** đề xuất, **chờ chủ dự án duyệt**; chưa là yêu cầu cho Antigravity. Thay khối cũ "Bạn cần đặt lịch chăm sóc cho thú cưng?" ở cuối trang Dịch vụ. Xem [ảnh](cta-moi.png) và [bản HTML chạy được](cta-moi.html).

## Thay đổi theo góp ý của chủ dự án (bản 3)

- **Ô "Gửi yêu cầu đặt lịch" to hơn:** cao 68 px (trước 52), chữ 18 px đậm, rộng 300 px (desktop); mobile cao 64 px, rộng hết khung.
- **Thêm ô "Gọi 097 355 51 05" thật** (nút viền kem, cao 56 px, cùng bề rộng với nút chính, có biểu tượng điện thoại, bấm là gọi `tel:+84973555105`). Thay cho dòng chữ nhỏ "Hoặc gọi…".
- **Bé cún là ảnh động vật xóa phông**, đứng bên trái, thân nằm sau mép dải và đầu nhô lên trên (mobile: nhô lên phía trên, giữa). **Ảnh cún trong bản minh họa là ảnh tạm**: ảnh có sẵn trong demo, tách nền tự động nên đường cắt chưa tinh (nguồn chưa xác nhận). Chủ dự án gửi ảnh động vật đã xóa phông (PNG/WebP nền trong suốt, dọc, thấy rõ mặt và nửa thân trên); Antigravity dùng nguyên ảnh đó.

## Thiết kế

- Dải tím đậm `#5A1E5E → #421247`, chữ kem `#FBF7F1` (11,0 đến 14,0:1), bo 28 px, trang trí tĩnh: hai vòm mảnh (tím nhạt, cam) ở góc phải. Không hiệu ứng lặp; hover chỉ nhấc nút một lần, bọc `@media (hover: hover)`.
- Chữ: tiêu đề giữ "Bạn cần đặt lịch chăm sóc cho thú cưng?"; một dòng "Nhân viên sẽ liên hệ để xác nhận lịch hẹn. Không cần tài khoản để gửi yêu cầu."
- Nút chính: nền kem, chữ tím đậm, trỏ `index.html#form-dat-lich` (đích form chưa có là HOÃN ĐÃ CHỐT).
- Focus bàn phím: viền kem cộng vòng cam quanh cả hai nút.
- Mobile (≤ 860 px chiều rộng khung): xếp dọc, căn giữa, ẩn vòm trang trí; hai nút rộng hết khung, cao ≥ 56 px.

## Điểm cần chủ dự án quyết

1. Ảnh cún: gửi ảnh đã xóa phông (hoặc đồng ý dùng ảnh Golden tạm sau khi tách nền tinh hơn).
2. Cún bên trái (như bản này) hay bên phải.
3. Giữ dòng ghi chú "Nhân viên sẽ liên hệ… Không cần tài khoản…" ở trang Services (quyết định bỏ chỉ áp dụng cho Hero).
4. Nền tím đậm hay nền kem viền tím nhạt.

Đạt khi (nếu được duyệt, Claude kiểm): chữ, số và liên kết đúng như trên; hai nút đúng kích thước và bấm được (tel không bị chặn); không tràn ngang ở 1440, 1024, 390, 360; cún không đè chữ/nút; ảnh đã xóa phông, không viền trắng/răng cưa ở cạnh; focus thấy rõ; không hiệu ứng lặp.
