# Giao Codex: gộp `antigravity/design` vào nhánh Hero chính (chủ dự án đồng ý thứ tự 15/10/2026)

**Chủ dự án đã đồng ý thứ tự điều phối** trong [dieu-phoi-gop-nhanh-hero-chinh-2026-10-15.md](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/dieu-phoi-gop-nhanh-hero-chinh-2026-10-15.md) (`shared/qa-review` @ `b8ebc8d`). Bước 1 giao **Codex**. Chưa quyết: ai được đẩy kết quả gộp lên `antigravity/design` (bước 3); Codex **không** đẩy lên `antigravity/design`.

## Việc của Codex

Trên nhánh `codex/hero-chinh-quy-dao` (đang ở `2efb96bd7223b7b1588fca30d95435f7c783c33c`), gộp `antigravity/design` @ `40aa56dcaa60b31c7be15f5c3a4f5c6eaa13d9f2`. Chung gốc `8bb446f`.

1. `demo/index.html` (xung đột đã biết): lấy phía Hero chính; bỏ vòm cam và cuộn len cũ của Antigravity (chỉ là trang trí Hero cũ).
2. Giữ CTA Dịch vụ mới của Antigravity trong `demo/services.html` và `demo/styles.css`, cùng `docs/ban-giao-services-v1-antigravity.md`.
3. Kiểm CSS dùng chung không đè nhau: header Codex đã chỉnh (nút Đăng nhập, ngưỡng 500/375 px) và khối CTA Dịch vụ mới; hai trang vẫn dùng chung header.
4. Không đổi `demo/hero-orbit.js`, `demo/hero-orbit.css`, nội dung hay hành vi Hero. Không sửa thêm header (sẽ giao Antigravity). Không merge `main`, không deploy.

## Đạt khi (Claude kiểm)

- `tests/verify-hero-source.py` vẫn PASS; `hero-orbit.js` và `hero-orbit.css` không đổi so với `2efb96b`.
- Hero: không còn lớp Hero cũ (`.hero-minimal-creative`, ảnh vòm) trong `index.html`; Hero chính chạy như cũ.
- Header: đo lại từng px 320–560 ở hai trang, cả khách lẫn đã đăng nhập: không đè, không tràn ngang, nút Đăng nhập luôn hiện.
- Trang Dịch vụ: CTA mới hiện và đúng như [yêu cầu CTA](yeu-cau-cta-dich-vu-2026-10-15.md); thẻ dịch vụ, cửa sổ chi tiết, nút cấp cứu không đổi so với `40aa56d`.
- Không lỗi console.

## Bàn giao

Báo branch, SHA đầy đủ, danh sách tệp đổi, cách xử lý từng xung đột (kể cả phần tự gộp được ở `services.html` và `styles.css`), ảnh chụp Hero và Dịch vụ ở 1440 và 390, và ghi rõ đã kiểm hay chưa kiểm. Claude kiểm theo mục trên.
