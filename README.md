# Website Bệnh viện Thú y Lê Sơn

## Ba nhánh làm việc chính thức

| Nhánh | Nội dung | Người cập nhật |
|---|---|---|
| [shared/requirements](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/shared/requirements) | Yêu cầu, quyết định chủ dự án, thiết kế tham khảo và hướng dẫn triển khai | Claude + Codex |
| [shared/qa-review](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/shared/qa-review) | Báo cáo QA, rà soát chéo, bằng chứng và kết luận PASS/FIX/chưa kiểm | Claude + Codex |
| [antigravity/design](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/antigravity/design) | Mã demo, tài nguyên, bàn giao thiết kế; tổ chức riêng từng mục Hero, Services và các phần sau | Antigravity |

### Điểm vào tài liệu

- [Yêu cầu đã chốt](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/README-shared.md)
- [QA và rà soát](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/README-shared.md)
- [Danh mục thiết kế Antigravity](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/antigravity/design/design/README.md)
- [Thiết kế Hero / Header](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/antigravity/design/design/hero/README.md)
- [Thiết kế Services](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/antigravity/design/design/services/README.md)

## Quy trình chung

1. Claude/Codex ghi yêu cầu và quyết định được chủ dự án chốt ở shared/requirements.
2. Antigravity đọc nhánh yêu cầu, triển khai trên **antigravity/design**. Không tạo nhánh riêng hero-v1/services-v1 để tiếp tục công việc mới.
3. Antigravity bàn giao commit và ảnh demo theo từng mục trong design/.
4. Claude/Codex kiểm đúng commit, đăng QA ở shared/qa-review; ghi rõ đã kiểm, chưa kiểm và việc cần sửa.
5. Chủ dự án duyệt; kết quả QA không tự thay thế quyết định của chủ dự án.

Trước mỗi lần cập nhật đọc HEAD mới nhất để tránh ghi đè thay đổi của người khác. Chỉ đưa đề xuất QA sang nhánh requirements khi đã được chủ dự án chốt.

## Cấu trúc nhánh thiết kế

- design/hero/: mục riêng cho Hero và Header, liên kết mã/tài nguyên/bàn giao.
- design/services/: mục riêng cho trang Services, liên kết mã/tài nguyên/bàn giao.
- demo/index.html, demo/app.js: demo Hero.
- demo/services.html, demo/services.js: demo Services.
- demo/styles.css và demo/assets/: phần dùng chung; thay đổi phải kiểm ảnh hưởng tới cả hai trang.

Mục mới tạo thư mục design/<ten-muc>/ và thêm vào design/README.md. Không sao chép CSS/ảnh dùng chung chỉ để tách mục.

## Chạy demo cục bộ

Trên nhánh antigravity/design: chạy `node server.js`, mở http://127.0.0.1:3030/index.html hoặc http://127.0.0.1:3030/services.html.
server.js chỉ phục vụ demo trên máy cá nhân, không dùng cho vận hành công khai.

## Nhánh cũ

antigravity/hero-v1, antigravity/services-v1, claude/optimistic-mccarthy-d1d15i, codex/qa-services-v1 và codex/review-claude-qa giữ làm lịch sử; từ 15/10/2026 các cập nhật mới dùng ba nhánh chính thức trên. Không xóa hoặc merge code lên nhánh mặc định trong việc tổ chức này.

Nhánh thiết kế chung khởi tạo từ Services acc18e7, bổ sung Hero a47f4e2 (dòng tiêu chí mới); mã app.js và styles.css ở hai nhánh nguồn giống nhau tại thời điểm gom.
