# Rà soát QA lại lần 2: sửa header của Codex (Claude, 15/10/2026)

- **Nhánh:** `codex/hero-chinh-quy-dao` · **SHA:** `2efb96bd7223b7b1588fca30d95435f7c783c33c` (trước: `6aaabc8`) · Base `8bb446f`.
- **Đối chiếu:** FIX 1 (P2) của [báo cáo 6aaabc8](ra-soat-hero-chinh-codex-6aaabc8-claude.md): header tràn ngang ở 421–427 px.
- **Thay đổi của Codex:** chỉ `demo/styles.css` (4 dòng thêm, 3 xóa), `tests/header-auth.cjs` và ảnh/số đo trong `docs/qa/hero-chinh/dot-sua-1-header/`. Ngưỡng thu gọn đổi từ 420 lên **500 px** (và 360 lên **375 px**). Không đụng `hero-orbit.js`, `hero-orbit.css`, `index.html`.
- **Lượt này do Sonnet 5.5 làm** (xem lưu ý về Opus ở báo cáo 46d89c0).

## Kết luận

**FIX 1: PASS.** Không còn lỗi header. Các mục Hero khác của báo cáo trước không đổi (mã Hero không thay đổi).

## Bằng chứng

Đo **từng px** từ 320 đến 560 (241 cỡ), cộng 600, 768, 900, 992, 993, 1024, 1280, 1440, trên `index.html` và `services.html`, ở trạng thái khách và đã đăng nhập (tổng khoảng 1.000 phép đo): không có phép đo nào mà logo, "Đăng nhập", "Đăng ký", nút tài khoản hoặc ☰ đè nhau, vượt mép cửa sổ, hoặc làm trang tràn ngang; trạng thái khách luôn hiện cả hai nút. Mã đo: [do-header-tung-px.js](ra-soat-hero-chinh-codex-2efb96b-bang-chung/do-header-tung-px.js). Codex đã có ảnh header 360/390 (khách, đã đăng nhập, khung Mobile 390) và số đo 320–440 trong `docs/qa/hero-chinh/dot-sua-1-header/`; tôi chưa xem từng ảnh.

## P3 còn lại

Chữ nút "Đăng nhập"/"Đăng ký" là 12 px đến 500 px và 11 px đến 375 px (báo cáo trước đã ghi). Chấp nhận được; sẽ đổi khi Antigravity làm lại header mobile theo ảnh chủ dự án (xem dưới).

## Lưu ý để điều phối (ngoài phạm vi sửa này)

1. **Header mobile sẽ được làm lại.** `shared/requirements` @ `01c94b0` giao Antigravity làm header mobile và menu xổ xuống theo ảnh chủ dự án. Phần CSS header Codex vừa chỉnh sẽ bị thay; nên Codex dừng sửa header thêm, và nền mã của Antigravity phải lấy từ nhánh Hero chính.
2. **`antigravity/design` đã đi lệch.** Commit `40aa56d` (Antigravity, sau `8bb446f`) sửa vòm cam và cuộn len của **Hero cũ** và nâng CTA Dịch vụ; nhánh đó vẫn chứa Hero cũ. Nhánh Hero chính của Codex dựa trên `8bb446f`, nên `40aa56d` chưa có trong đó và có thể xung đột ở `demo/index.html`, `demo/services.html`, `demo/styles.css`. Yêu cầu header mobile cũng nói "không ghi đè Hero mới bằng Hero cũ". Cần chủ dự án (hoặc người điều phối) quyết thứ tự gộp: đưa nhánh Hero chính vào trước rồi để Antigravity làm tiếp trên đó, và xử lý riêng CTA Dịch vụ của `40aa56d`.
3. Tôi chưa kiểm `40aa56d` (CTA Dịch vụ, ảnh xem trước mới).

## Chưa kiểm

Như báo cáo trước: hiệu năng thiết bị thật, tab ẩn thật, cửa sổ chi tiết dịch vụ, menu ☰ mở bằng mắt ở dải 320–500 px.
