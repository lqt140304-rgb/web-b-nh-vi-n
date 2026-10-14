# Yêu cầu sửa Hero V1, lần 2 (gửi Antigravity)

**Người soạn:** Claude · **Căn cứ:** rà soát lại commit `904c4dd` ([bản 2](ra-soat-hero-v1-claude.md), phần "BẢN 2") và quyết định của chủ dự án ngày 14/10/2026. Claude không sửa nhánh của Antigravity, không phê duyệt thay chủ dự án, không merge main.

## 1. Quyết định của chủ dự án (đã xác nhận)

- **Bỏ chấm tròn** dưới ảnh, theo form gốc Phương án D.
- **Ba ảnh luôn nằm trong một hàng** ở mọi kích thước, kể cả điện thoại (bố cục gốc). Không còn chế độ chú chó giữa với hai ảnh hé hai bên, không còn chuyển ảnh.

## 2. Việc cần sửa

| # | Ưu tiên | Việc | Đạt khi (Claude sẽ đo lại) |
|---|---|---|---|
| 1 | Cao | Xóa `#mobileDotsIndicator`, ba nút `.dot-btn`, CSS và JS liên quan (kể cả `.show-arches .mobile-dots-indicator`, quy tắc `display:flex !important` trong `@media (max-width: 680px)`) | Không còn nút nhỏ dưới ảnh ở mọi kích thước; Tab không dừng ở chấm; không còn mã chết về chấm |
| 2 | Cao | Ba ảnh một hàng ở 360, 390, 680, 768, 1024, 1440 px. Ba ảnh cùng hiển thị, không bị cắt mất, không chồng lên nhau, không tràn ngang | Ở 360 và 390 cả ba ảnh nhìn thấy đủ trong khung, mỗi ảnh rộng ≥ 90 px; `scrollWidth` = chiều rộng cửa sổ; không có ảnh nào ẩn hoặc bị thu còn vài chục px. Ảnh giữa vẫn nổi bật hơn hai ảnh bên (cao hơn hoặc lớn hơn nhẹ) |
| 3 | Cao | Sau khi bỏ chấm, kiểm tra khoảng trống dưới ảnh trên điện thoại | Không có khoảng trắng thừa lớn dưới ảnh; ảnh vẫn chạm đáy bố cục như bản gốc |
| 4 | Cao | S2: mở menu bằng bàn phím phải đưa tiêu điểm vào menu và giữ trong menu. Gợi ý: chờ menu hết `visibility:hidden` rồi mới gọi `focus()` (ví dụ sau `transitionend`, hoặc bỏ chuyển `visibility` khi mở) | Nhấn Enter ở nút menu, đợi 1 giây: `document.activeElement` là nút đóng menu; Tab quay vòng trong menu; Escape trả tiêu điểm về nút menu |
| 5 | Trung bình | S6: viền focus nút tím không dùng cam trên nền kem | Màu viền ngoài ≥ 3:1 với nền liền kề (đề xuất tím `#5A1E5E` 11,04:1, hoặc viền kép tím và trắng) |
| 6 | Trung bình | Sửa số tương phản sai trong cửa sổ Tiêu chí và tài liệu bàn giao | Không còn "14,8:1". Số đúng: `#231627` 16,19:1; `#421247` 13,96:1; `#5A1E5E` 11,04:1; `#5E5362` 6,81:1 (đều trên `#FBF7F1`) |
| 7 | Trung bình | Nguồn ba ảnh thú cưng | Mỗi ảnh có địa chỉ gốc, tác giả, giấy phép kiểm chứng được; nếu chưa có thì ghi rõ "ảnh minh họa, chưa xác nhận bản quyền, không dùng công khai" |
| 8 | Thấp | Dấu chân tím đứng rời cạnh cung trái | Gắn vào cung hoặc bỏ |
| 9 | Thấp | Đồng bộ tài liệu bàn giao với mã (ví dụ ngưỡng ẩn chấm 993 px so với 680 px; sau khi bỏ chấm thì xóa mục này) | Tài liệu khớp mã |

## 3. Quy tắc giữ nguyên

Không thêm nội dung chưa xác nhận; không đổi logo, màu, tiêu đề, nút chính; không gọi kết quả tự đánh giá là "đã duyệt"; dùng nhánh `antigravity/hero-v1`, không merge main.

## 4. Báo cáo lại

Khi sửa xong, Antigravity ghi commit mới và bảng: mục 1–9, đã làm gì, cách tự kiểm tra, ảnh chụp ở 360, 390, 768, 1440 px. Claude rà soát lại đúng các tiêu chí "Đạt khi" ở trên rồi báo chủ dự án.
