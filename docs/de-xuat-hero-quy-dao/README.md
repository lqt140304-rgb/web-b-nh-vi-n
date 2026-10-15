# Đề xuất Hero "khung ảnh bay vòng" (Claude, 15/10/2026)

**Trạng thái:** bản xem thử làm theo ý tưởng của chủ dự án, **chờ chủ dự án xem và quyết định**. Đây chưa phải yêu cầu cho Antigravity và không thay đổi Hero hiện tại trên `antigravity/design`.

**Xem nhanh:**
- Ảnh động 14 giây: [xem-truoc-chuyen-dong.webp](xem-truoc-chuyen-dong.webp).
- Ảnh tĩnh:
  - [Desktop 1440](01-desktop-1440.png)
  - [Lúc khung bay qua chữ](02-desktop-1440-khung-bay-qua-chu.png)
  - [Mobile 390](03-mobile-390.png)
  - [Chế độ giảm chuyển động](04-desktop-1440-giam-chuyen-dong.png)
- Bản chạy được: [hero-quy-dao.html](hero-quy-dao.html). Tải cả thư mục về rồi mở file này; cần mạng để tải font Google.
- Ảnh tham khảo của chủ dự án: [anh-tham-khao-chu-du-an.webp](anh-tham-khao-chu-du-an.webp).

## Ý tưởng chủ dự án đưa ra (15/10)

- Bố cục giống ảnh tham khảo.
- Khi mở trang, phần chữ ở giữa xuất hiện trước.
- Sau đó các ảnh bay ra từ chữ. Ảnh chưa có nên dùng khung ảnh trống.
- Các ảnh bay vòng liên tục ở vùng ngoài của trang, thỉnh thoảng bay vòng qua chữ ở giữa.

## Bản xem thử chạy thế nào

Thời gian tính từ lúc font tải xong. Trang chờ font tối đa 0,7 giây.

| Thời điểm | Diễn biến |
|---|---|
| 0–1 s | Nhãn "CHÀO MỪNG ĐẾN VỚI LÊ SƠN", tiêu đề, câu phụ và hai nút hiện dần. Chưa có khung nào. |
| 1–2,9 s | Các khung "ẢNH ĐANG CHỜ" bay ra từ phía sau chữ, mỗi khung cách nhau khoảng 0,1 s. |
| Từ khoảng 3 s | Khung bay vòng liên tục trên hai quỹ đạo elip nghiêng. Khung ở phía sau nhỏ hơn, nhạt và mờ hơn. |
| Khoảng 7,4 s, sau đó cứ 7–12 s một lần | Một khung bay vòng qua giữa, đi **phía sau** chữ rồi sang phía bên kia, mất khoảng 3,6 s. |

- Số khung: 9 trên desktop, 8 trên tablet (768–992 px), 6 trên mobile.
- Chữ và nút luôn nằm trên khung. Khung không bắt được chuột hay chạm (`pointer-events: none`).

## Khác với ảnh tham khảo (cố ý)

1. **Tiêu đề** dùng câu đã chốt "Không gian lớn / cho những người bạn nhỏ". Câu trong ảnh tham khảo ("Khoảng an toàn nhỏ cho những người bạn lớn") chưa được chốt.
2. **Menu** chỉ có các mục đã chốt: Trang chủ, Dịch vụ, Giới thiệu, Liên hệ, Đăng nhập, Đăng ký. Bản này bỏ Bảng giá, Tin tức, kính lúp tìm kiếm và nút "Đặt lịch hẹn" vì chưa chốt.
3. **Màu cam của chữ "người bạn nhỏ"** đậm hơn: `#C2560C`, tương phản 4,25:1. Màu cam trong ảnh `#EA7A24` chỉ đạt 2,69:1, dưới mức tối thiểu 3:1 cho chữ lớn. Cam sáng vẫn dùng cho đường quỹ đạo và các chi tiết trang trí.
4. **Khung ảnh nhỏ hơn ảnh tham khảo một chút** (desktop rộng 78–195 px) để không đè lên chữ và nút.
5. **Thêm hai chi tiết:**
   - Nút "Tạm dừng chuyển động" ở góc phải dưới. Chuyển động chạy quá 5 giây phải có cách dừng.
   - Nhãn góc trái "Bản xem thử · ảnh sẽ thay sau".

## Đã kiểm

Kiểm bằng Playwright trên Chromium, ngày 15/10/2026. Lượt kiểm cuối do một agent khác làm, không phải agent đã sửa file.

| Mục | Kết quả |
|---|---|
| Thứ tự xuất hiện | Chữ hiện đủ trước khi khung đầu tiên xuất hiện. Đúng ở 1440, 768 và 390. |
| Chữ và nút luôn nằm trên | Ở 1440, 1024 và 390, lấy mẫu 120 điểm, mỗi 250 ms, trong 20 giây: 0 lần trúng khung. Bấm nút "Gửi yêu cầu đặt lịch" đúng lúc khung đang bay qua vẫn mở `#form-dat-lich`. |
| Tràn ngang | Không tràn ở 1440, 1280, 1024, 768, 390, 360 và 320. |
| Tương phản | Tiêu đề 13,96:1. Chữ cam 4,25:1, đo trên nền thật lúc khung bay qua vẫn từ 3,86:1 trở lên. Các chữ khác từ 5,9:1 trở lên. |
| Nút tạm dừng | Có `aria-pressed`, đổi nhãn "Tạm dừng chuyển động" / "Tiếp tục chuyển động", dùng được bằng Enter và Space. Chuyển động tự dừng khi chuyển sang tab khác. |
| Giảm chuyển động (`prefers-reduced-motion`) | Chữ hiện ngay, khung đứng yên ở vị trí sắp sẵn, không chạy hiệu ứng, ẩn nút tạm dừng. |
| Bàn phím | Mọi liên kết và nút có viền focus tím 3 px. Menu ☰ (từ 992 px trở xuống) mở và đóng được, đóng bằng Esc. |
| Lỗi console | Không có. |
| Nội dung | Đúng các câu chữ đã chốt. Không có Bảng giá, Tin tức, tìm kiếm hay "Đặt lịch hẹn". |

## Cần chủ dự án quyết

1. **Có dùng hướng này thay Hero hiện tại không?**
   - Nếu duyệt, Claude viết yêu cầu chính thức trên `shared/requirements` cho Antigravity.
   - Lưu ý: Antigravity vừa đẩy `b013731` và `8bb446f` sửa Hero hiện tại (bản vòm cam, cuộn len). Claude **chưa kiểm** hai commit này.
2. **Ngoại lệ hiệu ứng lặp.** Ngày 15/10 dự án đã yêu cầu bỏ hiệu ứng lặp ([yeu-cau-sua-hieu-ung-lap-antigravity.md](../yeu-cau-sua-hieu-ung-lap-antigravity.md)). Hero này chuyển động liên tục đúng theo ý tưởng. Nếu duyệt, cần ghi rõ đây là ngoại lệ riêng cho Hero, có nút tạm dừng và chế độ giảm chuyển động.
3. **Độ rõ khi khung bay qua chữ.**
   - Hiện tại: ở khoảng giữa đường (khoảng 1,5 s), lớp sáng phía sau chữ làm khung mờ đi để chữ vẫn dễ đọc.
   - Nếu muốn thấy khung rõ hơn: giảm lớp sáng đó. Khi đó phải đo lại độ tương phản của chữ cam (cần từ 3:1 trở lên).
4. **Mobile từ 420 px trở xuống:** ẩn nút "Đăng nhập" ở đầu trang cho đủ chỗ; nút này vẫn có trong menu ☰. Chủ dự án có đồng ý không?
5. **Ảnh thật:** khi có ảnh, cần 9 ảnh tỉ lệ gần vuông (khung khoảng 1:1,06), thấy rõ con vật hoặc không gian bệnh viện.

## Chưa kiểm và giới hạn

- **Hiệu năng trên máy thật: chưa kiểm.**
  - Trình duyệt kiểm không có GPU, chạy khoảng 20 khung hình/giây. Phần tốn là 9 khung có bóng đổ và hiệu ứng 3D.
  - Giả định: máy có GPU sẽ mượt. Cần thử trên điện thoại Android cấu hình thấp.
- **Mobile:** hai khung ở dải trên, phía sau, chạy rất chậm, có lúc trông như đứng yên. Có thể tăng tốc nếu chủ dự án muốn.
- **Logo:** file PNG có nhiều viền trong suốt nên trông nhỏ. Nên có bản logo xuất sạch.
- **Liên kết:** "Đăng nhập" và "Đăng ký" trỏ tạm `#dang-nhap` và `#dang-ky` vì chưa có trang. "Gửi yêu cầu đặt lịch" trỏ `#form-dat-lich` (HOÃN ĐÃ CHỐT).
- **Phạm vi:** đây là bản xem thử độc lập, chưa ghép vào `demo/` của Antigravity.
