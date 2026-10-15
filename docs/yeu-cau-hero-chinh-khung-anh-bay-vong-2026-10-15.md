# Yêu cầu: Hero "khung ảnh bay vòng" là Hero chính của website (chủ dự án chốt 15/10/2026)

**Ghi bởi:** Claude, chép quyết định của chủ dự án ngày 15/10/2026 ("oke đây sẽ là hero chính của website") và thêm mục "Đạt khi" để QA. **Thay thế** Hero hiện tại trên `antigravity/design` và mọi yêu cầu sửa Hero cũ, gồm [yeu-cau-sua-hero-giong-anh-demo-antigravity.md](yeu-cau-sua-hero-giong-anh-demo-antigravity.md). Chưa merge `main`, chưa xuất bản.

## Nguồn tham chiếu (bản duyệt)

Thư mục [docs/de-xuat-hero-quy-dao/](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/shared/qa-review/docs/de-xuat-hero-quy-dao) trên nhánh `shared/qa-review`, commit `f58c2d7`:
- [hero-quy-dao.html](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/de-xuat-hero-quy-dao/hero-quy-dao.html): bản chạy được, là chuẩn về chuyển động và bố cục (cần cả thư mục `assets/`).
- [xem-truoc-chuyen-dong.webp](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/de-xuat-hero-quy-dao/xem-truoc-chuyen-dong.webp): ảnh động 16 giây.
- [README.md](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/de-xuat-hero-quy-dao/README.md): giải thích, điểm khác ảnh tham khảo, những gì đã và chưa kiểm.

## Chủ dự án đã chốt

1. Hero này là Hero chính. Antigravity đưa vào `demo/` của `antigravity/design`, thay Hero cũ.
2. **Chuyển động liên tục là ngoại lệ riêng của Hero**, dù ngày 15/10 đã yêu cầu bỏ hiệu ứng lặp ([yeu-cau-sua-hieu-ung-lap-antigravity.md](yeu-cau-sua-hieu-ung-lap-antigravity.md)). Điều kiện: có nút "Tạm dừng chuyển động" và tôn trọng `prefers-reduced-motion`.
3. Khung ảnh chỉ bay vòng ở vùng ngoài. **Không còn đợt khung bay vào giữa hay qua chữ** (chủ dự án đã bỏ ý này).
4. Khung ảnh to hơn bản đầu khoảng 10%.
5. Nội dung giữ như bản duyệt:
   - Tiêu đề "Không gian lớn / cho những người bạn nhỏ", "người bạn nhỏ" màu cam đậm `#C2560C`.
   - Nhãn "CHÀO MỪNG ĐẾN VỚI LÊ SƠN".
   - Câu phụ "Chăm sóc bằng chuyên môn, đồng hành bằng sự thấu hiểu."
   - Hai nút "Gửi yêu cầu đặt lịch →" (`index.html#form-dat-lich`) và "Xem dịch vụ" (`services.html`).
   - Menu chỉ gồm Trang chủ, Dịch vụ, Giới thiệu, Liên hệ, Đăng nhập, Đăng ký.
   - Không có Bảng giá, Tin tức, tìm kiếm, "Đặt lịch hẹn" (chưa chốt).
6. Khung ảnh hiện là khung trống "ẢNH ĐANG CHỜ"; ảnh thật chủ dự án cung cấp sau.

## Chưa chốt (không tự quyết, hỏi chủ dự án)

- Ẩn nút "Đăng nhập" ở đầu trang khi màn hình ≤ 420 px (bản duyệt đang ẩn, vẫn có trong menu ☰). Chủ dự án chưa trả lời; giữ như bản duyệt cho tới khi có ý kiến.
- Ảnh thật: khi có ảnh, cần 9 ảnh tỉ lệ gần vuông (khoảng 1:1,06), thấy rõ con vật hoặc không gian bệnh viện. Chưa có ảnh; chưa làm.
- Nhãn góc "Bản xem thử · ảnh sẽ thay sau": chỉ là nhãn tạm, bỏ khi có ảnh thật hoặc khi chủ dự án bảo bỏ.
- Liên kết "Đăng nhập", "Đăng ký" (`#dang-nhap`, `#dang-ky`) đang là chỗ giữ tạm vì chưa có trang. Đích `#form-dat-lich` chưa có form: HOÃN ĐÃ CHỐT.

## Lưu ý khi đưa vào `demo/`

- Giữ nguyên hành vi và bố cục của bản duyệt; đổi cách tổ chức mã cho khớp `demo/` thì được, nhưng không đổi nhịp chuyển động, kích thước khung, màu, chữ.
- Header, menu ☰ và chân trang phải dùng chung với trang Dịch vụ; không để hai trang có menu khác nhau.
- `hero-quy-dao.html` còn mã không dùng của các bản chuyển động trước (đợt khung chui vào giữa: `SNAKE`, `conv`, `startSnake`, `relax`, `pickExcursionFrame`, `chooseDelta`). Được phép xóa nếu hành vi không đổi.
- Phông chữ: bản duyệt tải Google Fonts (Lora, Be Vietnam Pro) như Hero hiện tại. Nếu Codex quyết định tự host phông thì làm ở bước sau, không thuộc yêu cầu này.
- Khi sửa CSS dùng chung, Claude sẽ kiểm cả Hero và Services.

## Đạt khi (Claude kiểm, lượt đầu dùng Opus)

1. Mở trang: chữ hiện trước, chưa có khung nào; sau đó các khung bay ra từ sau chữ (khoảng giây 1–3), rồi bay vòng liên tục ở vùng ngoài.
2. Khung không đi vào giữa, không đi qua phía sau chữ ở bất kỳ thời điểm nào trong ít nhất 60 giây.
3. Chữ và nút luôn nằm trên khung; khung không bắt chuột hay chạm. Bấm được hai nút bằng chuột; nút "Gửi yêu cầu đặt lịch" trỏ đúng `index.html#form-dat-lich`, nút "Xem dịch vụ" mở `services.html`.
4. Không tràn ngang ở 1440, 1280, 1024, 768, 390, 360. Từ 992 px trở xuống có menu ☰ mở và đóng được (Esc đóng, tiêu điểm bàn phím đúng).
5. Hai khung không chồng nhau quá khoảng 25% diện tích trong lúc bay vòng bình thường (ngoại trừ lúc bay ra ở giây 2–3).
6. Nút "Tạm dừng chuyển động" có `aria-pressed`, đổi nhãn "Tạm dừng chuyển động" / "Tiếp tục chuyển động", dùng được bằng Enter và Space; chuyển động tự dừng khi chuyển tab.
7. `prefers-reduced-motion: reduce`: chữ hiện ngay, khung đứng yên ở vị trí sắp sẵn, ẩn nút tạm dừng.
8. Chữ "người bạn nhỏ" tương phản ≥ 3:1 trên nền; các chữ còn lại ≥ 4,5:1. Có viền focus bàn phím rõ trên mọi liên kết và nút.
9. Không có Bảng giá, Tin tức, tìm kiếm, "Đặt lịch hẹn" và không có nội dung chưa chốt.
10. Không lỗi console; trang Dịch vụ không bị ảnh hưởng (hồi quy Services PASS).
11. Hiệu năng trên điện thoại Android cấu hình thấp: **chưa kiểm được trong môi trường của Claude**; chủ dự án hoặc Codex thử trên máy thật trước khi xuất bản.

## Cách tự kiểm (đủ, không cần báo cáo dài)

Báo branch và SHA đầy đủ, "đã làm / chưa làm" cho 6 mục "Chủ dự án đã chốt", và ảnh chụp 1440 và 390. Claude kiểm theo mục "Đạt khi".
