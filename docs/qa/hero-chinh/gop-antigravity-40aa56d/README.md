# Gộp Antigravity 40aa56d vào Hero chính

Nhánh kết quả: `codex/hero-chinh-quy-dao`. Hai cha: `2efb96bd7223b7b1588fca30d95435f7c783c33c` và `40aa56dcaa60b31c7be15f5c3a4f5c6eaa13d9f2`. Bản kết quả là merge commit chứa báo cáo này. Thực hiện theo `shared/requirements` @ `1447dd9`, file `docs/giao-codex-gop-nhanh-hero-chinh-2026-10-15.md`.

## Xử lý gộp

- **Xung đột thực: `demo/index.html`.** Lấy toàn bộ phía Hero chính (`git checkout --ours`); blob giữ nguyên so với 2efb96b. Không có `.hero-minimal-creative`, ảnh vòm hoặc `.hero-decor-yarn` trong HTML kết quả. Không đưa vòm cam/cuộn len của Hero cũ vào trang.
- **Tự gộp: `demo/services.html`.** Giữ nguyên khối CTA của 40aa56d (tiêu đề, mô tả, hai nút đặt lịch/gọi, họa tiết). So với Antigravity chỉ khác favicon và anchor Đăng nhập/Đăng ký của Codex tại header/drawer. Bốn thẻ dịch vụ, ba cửa sổ chi tiết và nút cấp cứu không đổi.
- **Tự gộp: `demo/styles.css`.** Nhận CSS CTA mới, tablet và mobile của Antigravity; giữ các quy tắc header của 2efb96b, gồm việc bỏ ẩn nhóm khách và ngưỡng 500/375px. Không sửa thêm header. Quy tắc vị trí cuộn len cũ đi theo merge nhưng không được dùng bởi HTML Hero chính; không có tác động lên `.ho`/`.frame`.
- **Giữ nguyên từ Antigravity:** `docs/ban-giao-services-v1-antigravity.md` và sáu ảnh trong `assets/`: hero-preview-desktop.png, hero-preview-tablet.png, services-preview-desktop.png, services-preview-mobile-full.png, services-preview-mobile.png, services-preview-tablet-1024.png. Hai ảnh Hero cũ chỉ là tài liệu lịch sử của commit nguồn, không phải ảnh Hero hiện tại; xem ảnh mới bên dưới.
- **Không đổi:** `demo/hero-orbit.js`, `demo/hero-orbit.css`, `demo/app.js`, nội dung Hero. `demo/services.js` và tài nguyên `demo/assets/` không khác 40aa56d. Không merge main, không deploy, không đẩy antigravity/design.

Tệp đổi so với cha Hero: demo/services.html, demo/styles.css, docs/ban-giao-services-v1-antigravity.md, sáu ảnh assets nêu trên; bổ sung báo cáo/bằng chứng trong thư mục này và liên kết ở README QA cấp trên. `demo/index.html` đã được giải quyết xung đột nhưng không có diff so với cha Hero.

## Đã kiểm trực tiếp

- `tests/verify-hero-source.py`: PASS. Hash blob JS `41fe56c306c1580379abeff9a8265f1b0ef98047`, CSS `a534ca628e8416ebaa049fd2d4af43a2b7f62699` đúng 2efb96b. Đối chiếu index/app và phần CSS header cũng không đổi (chuẩn hóa CRLF khi đọc trên Windows).
- `header-sweep.cjs`: PASS **964 tổ hợp**, mỗi pixel 320–560, hai trang, khách/tài khoản; không tràn, không đè logo/chữ/nút, nút khách hiện và cao ≥44px. Quét tắt transition chỉ trong trang test để đo tĩnh; số đo [sweep-320-560.json](sweep-320-560.json).
- `tests/header-auth.cjs`: kiểm các mốc 320/360/361/375/376/390/420/421/427/428/430/431/440/500/501/768/1024/1440 và khung Mobile 390; hai trang/hai trạng thái, focus, liên kết, chiều cao nút. Không đổi test hoặc CSS header trong lần gộp.
- `services-check.cjs`: PASS phần được assert ở 1440/1024/390/360: bốn thẻ, nội dung CTA/href đúng, khối và nút nằm trong khung; CTA desktop cao khoảng 128px, tablet 149px, nút mobile ≥48px; mở/đóng cả ba modal, inert nền và trả focus, Shift+Tab trong modal, menu mobile/Escape, click đặt lịch đi đúng URL. [Số đo](services-checks.json). Nhãn PASS này không bao gồm mọi tiêu chí thẩm mỹ của CTA.
- Nút gọi và cấp cứu: href `tel:+84973555105`; sự kiện được gửi qua handler của trang, test ghi nhận chưa bị preventDefault rồi tự chặn ở window để tránh mở ứng dụng ngoài. Không gọi điện thật.
- `tests/hero-orbit.cjs`: PASS responsive, reduced-motion, menu/focus/Escape, Enter/Space tạm dừng, CTA, Services; 600 mẫu trong ít nhất 60 giây ở 1440/390; chồng hộp bao khung lớn nhất khoảng 13,08%/15,25%; không lỗi console. [Kết quả](test-results.json).
- `tests/hero-shell.cjs`: PASS Mobile 390, trạng thái tài khoản và visibilitychange giả lập.
- Đã xem trực tiếp ảnh Hero, Services và cận cảnh CTA 1440/390 sau gộp.

## Điểm giữ từ nguồn cần Claude đánh giá

- Họa tiết CTA góc trên phải đi vào vùng nút gọi ở 1440px: xem [cta-1440.png](cta-1440.png). Hộp bao họa tiết và nút gọi giao nhau khoảng 2045px²; đây là phép đo hộp bao, ảnh cho thấy nét trang trí đi qua khu vực nút. Mã CTA giữ đúng 40aa56d, không tự sửa thiết kế trong lần gộp. Chưa kết luận toàn bộ tiêu chí CTA đạt.
- Hai nút CTA desktop đo cao khoảng 50,8px và 52,8px (chênh 2px), cũng kế thừa CSS nguồn; cần Claude xem theo yêu cầu cùng cao.
- `git diff --cached --check` báo hai điểm whitespace có sẵn trong tài liệu bàn giao Antigravity (Markdown hai dấu cách ngắt dòng ở dòng 96, dòng trống cuối file). Giữ nguyên file nguồn; không có conflict marker hoặc entry chưa giải quyết.

## Ảnh mới

| Trang | 1440 | 390 |
|---|---|---|
| Hero | [hero-1440.png](hero-1440.png) | [hero-390.png](hero-390.png) |
| Dịch vụ | [services-1440.png](services-1440.png) | [services-390.png](services-390.png) |
| Cận CTA | [cta-1440.png](cta-1440.png) | [cta-390.png](cta-390.png) |

Bằng chứng trong thư mục này sinh từ bản gộp; không dùng ảnh assets của Antigravity thay cho lần kiểm này.

## Chưa kiểm

Safari, Android thật, hiệu năng phần cứng yếu, gọi thật, chuyển tab thật (visibilitychange chỉ giả lập), audit đầy đủ tương phản và mọi tiêu chí trang trí CTA. Form đặt lịch/đăng nhập/đăng ký vẫn là phần giữ chỗ đã chốt. Chưa triển khai menu mobile mới giao Antigravity.

## Chạy lại

Chạy `node server.js`, đặt `PLAYWRIGHT_MODULE`/`CHROME_BIN` nếu môi trường cần. Đặt `QA_OUTPUT=docs/qa/hero-chinh/gop-antigravity-40aa56d` cho các test hiện có. Từ gốc repo chạy `node docs/qa/hero-chinh/gop-antigravity-40aa56d/services-check.cjs` và `node docs/qa/hero-chinh/gop-antigravity-40aa56d/header-sweep.cjs` để tái tạo phép kiểm bổ sung.
