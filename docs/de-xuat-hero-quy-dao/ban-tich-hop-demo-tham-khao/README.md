# Bản tích hợp Hero chính vào `demo/` (Claude, tham khảo cho Codex)

**Trạng thái:** bản làm thử, **chưa đẩy lên nhánh nào của Antigravity**. Chủ dự án giao Codex đưa Hero vào `demo/`; đây chỉ là bản tham khảo để Codex đỡ làm lại từ đầu. Codex được phép dùng, sửa hoặc bỏ.

**File:** [hero-orbit-demo.patch](hero-orbit-demo.patch), áp được vào `antigravity/design` @ `8bb446f` (đã chạy `git apply --check`):

    git checkout -b hero-chinh origin/antigravity/design
    git apply <đường dẫn>/hero-orbit-demo.patch

Gồm: `demo/hero-orbit.css` (mới), `demo/hero-orbit.js` (mới), `demo/index.html` (thay khối `.hero-minimal-creative` bằng Hero mới, thêm 2 thẻ nạp file, đổi liên kết phông).

## Đã làm

- **Chép nguyên** CSS và JS của `hero-quy-dao.html`; header riêng của bản duyệt bỏ đi, dùng header chung của trang.
- **Đổi `@media` thành `@container`** với khối bọc `.ho-wrap` (`container: ho / inline-size`), đổi `vw` thành `cqw`. Lý do: khung xem thử "Mobile (390px)" của Antigravity chỉ là khung 390 px trong cửa sổ rộng, nên `@media` theo cửa sổ sẽ không bật bố cục điện thoại.
- **Đổi tên:** lớp `.hero*` thành `.ho*` (tránh trùng với lớp Hero cũ); id `hero` thành `hero-main` (giữ chỗ để `app.js` đặt `inert` khi mở menu); `headerH = 0`.
- **Thêm vào `<head>`:** `<script>document.documentElement.classList.add('js')</script>` trước CSS (nếu không, chữ sẽ chớp). Thêm Lora nghiêng 600 và 700 vào liên kết phông, vì bản duyệt dùng chữ nghiêng đậm cho "người bạn nhỏ".
- **Bẫy đã gặp:** quy tắc gốc `a { color: inherit }` phải viết thành `:where(.ho a)`. Nếu viết `.ho a` thì nó thắng `.btn--primary` và chữ nút chính thành màu tối trên nền tím.

## Đã chạy thử (Chromium, 15/10/2026)

Ảnh: [toàn màn hình 1440](01-demo-toan-man-hinh-1440.png), [chế độ Mobile 390](02-demo-che-do-mobile-390.png).

- 5 cấu hình (Toàn màn hình 1440, Desktop 1440 trong cửa sổ 1600, Mobile 390 trong cửa sổ 1000, cửa sổ 390, cửa sổ 1024): 9, 9, 6, 6, 9 khung hiện ra, không tràn ngang, không lỗi console.

## Chưa kiểm (Codex cần kiểm)

- Trang Dịch vụ (`services.html`) không nạp file mới nên chắc không đổi, nhưng chưa chạy lại hồi quy.
- Mở menu ☰ trong demo: `app.js` đặt `inert` lên `#hero-main`; chưa thử đóng/mở với chuyển động đang chạy.
- Nút "Đăng nhập" ≤ 420 px: header của demo tự quyết, chưa đối chiếu với bản duyệt.
- Các mục "Đạt khi" 2–10 của [yêu cầu Hero chính](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-hero-chinh-khung-anh-bay-vong-2026-10-15.md): chưa chạy bộ đo trên bản tích hợp (chỉ chụp màn hình).
- Chế độ giảm chuyển động, nút tạm dừng, tab ẩn trong khung xem thử.
- CSS Hero cũ (`.hero-minimal-creative`, `.pet-arch-*`, ...) trong `demo/styles.css` giờ là mã chết; chưa xóa vì không chắc phần nào trang Dịch vụ còn dùng.
- Bộ mô phỏng vẫn còn mã không dùng của các bản chuyển động trước (`SNAKE`, `conv`, `startSnake`, `relax`, ...). Được phép xóa nếu hành vi không đổi.
