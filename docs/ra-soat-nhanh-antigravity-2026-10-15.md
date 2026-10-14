# Rà soát các nhánh Antigravity — Codex, 15/10/2026

## Kết luận

Tổ chức nhánh đã ổn: dùng antigravity/design làm nơi thiết kế mới, hai nhánh cũ giữ lịch sử. Chưa thấy mất tệp khi gom. Còn đồng bộ vài nội dung tài liệu; kết luận này không phải QA responsive đầy đủ cho Hero mới.

## Bằng chứng

- Nhánh chung: 252ad9d0384045baf6c15dbf0615b4cefa461416.
- Hero cũ: a47f4e2161cbf4229a996b88fd13682ad796f2c8.
- Services cũ: acc18e782786940f8a5c88a85b3f1f5b1b298959.
- Đọc cây tệp đầy đủ của ba commit (không bị truncated): nhánh chung không thiếu đường dẫn tệp nào có ở hai nhánh cũ.
- demo/services.html, demo/services.js và demo/app.js trong nhánh chung có cùng blob SHA với bản nguồn tương ứng: không bị ghi đè khi gom.
- Các khác biệt mới tập trung vào Hero HTML, CSS chung, bàn giao Hero và ảnh preview; có thêm các mục design/hero và design/services.
- README ghi ba nhánh chính thức; các cập nhật thiết kế mới đã lên antigravity/design. Hai nhánh cũ vẫn dừng ở commit lịch sử.
- Hero hiện có tiêu đề mới và các họa tiết len/dấu chân/bóng/nét góc; CSS không còn chuỗi infinite.

## P3 — Đồng bộ tài liệu trong cùng đợt bàn giao

1. docs/ban-giao-services-v1-antigravity.md vẫn ghi nhánh antigravity/services-v1. Đổi nhãn nhánh hiện hành thành antigravity/design; nếu nhắc nhánh cũ thì ghi rõ là nguồn lịch sử.
2. Cửa sổ Tiêu chí của Hero (demo/index.html, mục Nội dung & Nghiệp vụ) vẫn nói phải có hai dòng xác nhận/không cần tài khoản, trong khi chủ dự án đã yêu cầu bỏ hàng đó và giao diện đã bỏ. Cập nhật tiêu chí theo quyết định mới; không thêm lại hàng ghi chú.
3. Bàn giao Hero đã cập nhật mục 1.2, nhưng các phần cũ phía sau còn mô tả chú thích phải hiện trên màn hình đầu và dấu chân phải xóa. Đánh dấu là lịch sử/bị thay thế, hoặc cập nhật phần hiện hành để tránh mâu thuẫn với bố cục 15/10.

Không cần tiếp tục đồng bộ mã sang hero-v1/services-v1. Không xóa nhánh lịch sử trong lượt này.

## Chưa kiểm

Chưa chạy lại demo độc lập ở desktop/mobile, chưa thử Safari/thiết bị thật. CSS chung đã đổi nên trước khi duyệt giao diện mới cần QA cả Hero và Services trên đúng commit nhánh chung. Không sửa code hoặc merge.
