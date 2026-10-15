# Đề xuất Hero "khung ảnh bay vòng" (Claude, 15/10/2026, bản 3: khung đi như con rắn)

**Bản 3 (theo góp ý chủ dự án: "khung đầu chui vào giữa, những khung sau tiếp tục di chuyển trên quỹ đạo chính rồi theo quán tính đi dần theo, không rẽ ngay tại vị trí của nó"):** ba khung đầu đi sát nhau thành một đoàn và đi như một con rắn. Bản 3 thay bản 2 (hai dòng đổi chỗ) và bản 1 (một khung đơn lẻ).

**Trạng thái:** bản xem thử làm theo ý tưởng của chủ dự án, **chờ chủ dự án xem và quyết định**. Đây chưa phải yêu cầu cho Antigravity và không thay đổi Hero hiện tại trên `antigravity/design`.

**Xem nhanh:**
- Ảnh động 20 giây (con rắn chui vào giữa từ khoảng giây 8 đến 14): [xem-truoc-chuyen-dong.webp](xem-truoc-chuyen-dong.webp).
- Ảnh tĩnh:
  - [Desktop 1440](01-desktop-1440.png)
  - [Khung đầu đang chui vào giữa](02-desktop-1440-con-ran-chui-vao-giua.png)
  - [Cả đoàn về lại vòng](03-desktop-1440-con-ran-ve-lai-vong.png)
  - [Mobile 390, 4 thời điểm](04-mobile-390-4-thoi-diem.png)
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
| Khoảng 8 s, sau đó cứ 9–13 s nghỉ rồi lại có một đợt | **Con rắn.** Ba khung đầu luôn đi sát nhau trên quỹ đạo. Khung đầu rẽ vào giữa theo một đường cong mượt, đi phía sau chữ rồi ra lại quỹ đạo ở phía đối diện. Hai khung sau **không rẽ ngay tại chỗ**: chúng tiếp tục chạy trên quỹ đạo chính, nhờ quán tính tăng tốc dần tới đúng điểm rẽ rồi đi theo đúng vệt của khung đầu, cách nhau khoảng một nhịp. Cuối đợt cả ba giảm tốc và về đúng chỗ vốn có của mình trên vòng. Cả đợt kéo dài khoảng 6–10 s. |

- Số khung: 9 trên desktop, 8 trên tablet (768–992 px), 6 trên mobile.
- Mỗi khung về lại đúng chỗ vốn có trên vòng sau đợt rắn, nên đội hình không bị lệch hay dồn cục. Ba khung đầu luôn nằm gần nhau hơn các khung còn lại. Trên mobile giữ khoảng đều vì khung to so với vòng.
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
| Chữ và nút luôn nằm trên | Ở 1440 và 390, lấy mẫu 126 điểm trên chữ và nút trong lúc quỹ đạo và lúc rắn đang đi qua: tất cả đều trúng chữ, không trúng khung. Bản 1 đã bấm thử nút "Gửi yêu cầu đặt lịch" lúc khung bay qua và mở đúng `#form-dat-lich`; bản 3 chỉ đo bằng `elementFromPoint`, chưa bấm lại. |
| Khung không chồng nhau | Chạy mô phỏng 100 giây. Hai khung chồng nhau quá 25% diện tích: ở 1440 khoảng 8% thời gian giữa các khung trong đoàn rắn và khoảng 2% giữa khung rắn với khung khác; ở 390 khoảng 4% và 4%; ở 1024 khoảng 6% và 1%; ở 768 khoảng 9% và 4%. Chỉ xảy ra trong lúc đang có đợt rắn, không xảy ra lúc quỹ đạo bình thường. Chưa ở mức 0%. |
| Tràn ngang | Không tràn ở 1440, 1280, 1024, 768, 390, 360 và 320. |
| Tương phản | Tiêu đề 13,96:1. Chữ cam 4,25:1 trên nền kem; đo gần đúng trên ảnh chụp lúc rắn đi qua phía sau, thấp nhất khoảng 3,64:1 (cần từ 3:1). Bản 3 giảm tiếp lớp sáng nền phía sau chữ và giữ nhãn "ẢNH ĐANG CHỜ" ở độ đậm 55% lúc khung đi qua chữ, để thấy rõ con rắn. Các chữ khác từ 5,9:1 trở lên. |
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
3. **Con rắn.** Hiện 3 khung, nghỉ 9–13 s giữa các đợt, cong qua giữa khối chữ. Anh/chị muốn rắn dài hơn (4 khung), nhanh hơn hoặc thưa đợt hơn không?
4. **Mobile từ 420 px trở xuống:** ẩn nút "Đăng nhập" ở đầu trang cho đủ chỗ; nút này vẫn có trong menu ☰. Chủ dự án có đồng ý không?
5. **Ảnh thật:** khi có ảnh, cần 9 ảnh tỉ lệ gần vuông (khung khoảng 1:1,06), thấy rõ con vật hoặc không gian bệnh viện.

## Chưa kiểm và giới hạn

- **Hiệu năng trên máy thật: chưa kiểm.**
  - Trình duyệt kiểm không có GPU, chạy khoảng 20 khung hình/giây. Phần tốn là 9 khung có bóng đổ và hiệu ứng 3D.
  - Giả định: máy có GPU sẽ mượt. Cần thử trên điện thoại Android cấu hình thấp.
- **Mobile:** hai khung ở dải trên, phía sau, chạy rất chậm, có lúc trông như đứng yên. Có thể tăng tốc nếu chủ dự án muốn.
- **Logo:** file PNG có nhiều viền trong suốt nên trông nhỏ. Nên có bản logo xuất sạch.
- **Liên kết:** "Đăng nhập" và "Đăng ký" trỏ tạm `#dang-nhap` và `#dang-ky` vì chưa có trang. "Gửi yêu cầu đặt lịch" trỏ `#form-dat-lich` (HOÃN ĐÃ CHỐT).
- **Bản 3 chưa kiểm lại đủ như bản 1:** bản 1 có thêm lượt kiểm độc lập bằng agent khác; bản 3 chỉ do tôi tự chạy lại bộ kiểm cũ (ALL PASS: thứ tự xuất hiện, tràn ngang ở 7 cỡ màn hình, nút tạm dừng, tab ẩn, giảm chuyển động, focus, console) cùng đo chồng khung. Chưa đo lại độ tương phản đầy đủ. Bản 3 làm lại chuyển động của đợt rắn, nên cần xem lại bằng mắt ở 768 và 360.
- **Phạm vi:** đây là bản xem thử độc lập, chưa ghép vào `demo/` của Antigravity.
