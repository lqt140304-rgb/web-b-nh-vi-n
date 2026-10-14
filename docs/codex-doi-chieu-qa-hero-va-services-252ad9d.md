# Codex đối chiếu QA Claude và thay đổi Services — 15/10/2026

Commit thiết kế: 252ad9d0384045baf6c15dbf0615b4cefa461416, nhánh antigravity/design. Lúc kiểm tra nhánh vẫn tại commit này, chưa có bản sửa sau QA Claude.

## 1. Claude chưa duyệt hoàn tất

[QA Claude hiện hành](ra-soat-hero-chot-15-10-claude.md) kết luận **FIX**, cả bốn mục bắt buộc sửa theo mẫu chủ dự án đã chốt:
- Cung cam phải nằm ngoài ảnh, không cắt vào ảnh.
- Bóng phải tách khỏi cung/ảnh; tránh ra ngoài màn hình ở 1024.
- Dấu chân và nét góc phải đưa ra xa vùng chữ, đúng vị trí mẫu.
- Cuộn len đưa ra bên trái hơn, sợi tím nối xuống đỉnh ảnh mèo thay vì kết thúc lửng.

Codex xem ảnh Hero desktop bàn giao và đối chiếu mẫu trong chat: thấy rõ cung sát ảnh, bóng chạm vùng cung/ảnh, sợi len kết thúc cách xa ảnh. Đồng ý cần sửa. Các tọa độ 1440/1024 và khoảng cách trong báo cáo Claude là số đo của Claude, Codex chưa đo lại độc lập.

Không mở rộng thành thiết kế mới; Antigravity sửa vị trí đúng mẫu.

## 2. Vì sao Antigravity sửa cả Services?

Đối chiếu với nhánh Services cũ acc18e782786940f8a5c88a85b3f1f5b1b298959:
- demo/services.html, demo/services.js: không thay đổi.
- Các ảnh dịch vụ gốc: không thay đổi theo đối chiếu cây tệp ở lượt kiểm trước.
- Ảnh preview Services desktop/mobile đã chụp lại.
- demo/styles.css là tệp chung: các selector hover của thẻ, ảnh, huy hiệu, bullet, nút chi tiết và nút gọi được bọc trong @media (hover: hover). Giá trị màu, kích thước và transform trong những selector đó giữ nguyên; việc này giới hạn hover trên thiết bị có khả năng hover để tránh hiệu ứng dính trên cảm ứng.

Đây là sửa tương tác dùng chung, chưa có bằng chứng Antigravity thiết kế lại Services hoặc đổi nội dung/nghiệp vụ ngoài yêu cầu. Không cần hoàn tác các thay đổi hover này chỉ vì đang chỉnh Hero.

## 3. Bổ sung cần thiết khi bàn giao lần sửa tới

- Claude QA hiện tại tập trung Hero; cần ghi riêng kiểm tra hồi quy Services sau thay đổi CSS chung: desktop/cảm ứng, không tràn ngang, ba modal và nút tel không bị chặn. Không dùng PASS Hero để suy ra PASS toàn bộ Services.
- Khi sửa bốn họa tiết Hero, giới hạn selector vào .hero-* và .pet-arch-*; không đổi bộ icon, màu, ảnh, nội dung Services đã chốt.
- Bàn giao Services vẫn ghi antigravity/services-v1: cập nhật nhánh hiện hành thành antigravity/design.
- Cửa sổ Tiêu chí Hero và các mục bàn giao lịch sử còn yêu cầu hai dòng ghi chú đã bỏ: cập nhật/đánh dấu bị thay thế để không yêu cầu thêm lại.

## Phạm vi kiểm tra

Đọc QA mới nhất, so commit và tệp thay đổi, xem ảnh desktop Hero/Services, đọc CSS hover. Chưa chạy lại demo tương tác trên trình duyệt, chưa đo mobile độc lập hoặc thử thiết bị thật/Safari. Những sửa local chưa đẩy lên GitHub không nằm trong phạm vi này. Không sửa code hoặc merge.
