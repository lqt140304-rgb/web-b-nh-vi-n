# Điều phối: gộp nhánh Hero chính và giao tiếp việc cho Antigravity, Codex (Claude soạn, 15/10/2026)

**Trạng thái: ĐỀ XUẤT, chờ chủ dự án gửi.** Chưa phải quyết định. Claude không gộp nhánh, không đẩy lên nhánh của người khác. Không merge `main`, không xuất bản.

## 1. Hiện trạng (đã kiểm bằng `git`, 15/10/2026)

| Nhánh | SHA | Có gì |
|---|---|---|
| `antigravity/design` | `40aa56dcaa60b31c7be15f5c3a4f5c6eaa13d9f2` | Hero **cũ** (3 khung vòm) với vòm cam và cuộn len mới sửa; CTA Dịch vụ mới ("nâng cấp CTA đặt lịch"); ảnh xem trước mới. Chưa có Hero chính. |
| `codex/hero-chinh-quy-dao` | `2efb96bd7223b7b1588fca30d95435f7c783c33c` | Hero chính (khung ảnh bay vòng) trong `demo/`; header giữ nút Đăng nhập; QA của Claude: Hero đạt, header đạt ([2efb96b](ra-soat-hero-chinh-codex-2efb96b-claude.md)). |
| Chung gốc | `8bb446f779e7c5cb137022a18a4b38b400990847` | Cả hai nhánh đều đi ra từ đây, độc lập nhau. |

Thử gộp hai nhánh bằng `git merge-tree` (không ghi gì vào nhánh nào): **1 xung đột chữ ở `demo/index.html`**; `demo/services.html` và `demo/styles.css` tự gộp được về chữ nhưng chưa ai kiểm hậu quả giao diện.
- Phần Antigravity đổi trong `demo/index.html` chỉ là vòm cam và cuộn len của Hero cũ. Hero cũ đã bị thay, nên phần này **bỏ**.
- Phần đáng giữ của `40aa56d` là CTA Dịch vụ (`demo/services.html`, `demo/styles.css`) và `docs/ban-giao-services-v1-antigravity.md`. Claude **chưa kiểm** CTA này.

Việc đang chờ: [yêu cầu header mobile](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-header-mobile-antigravity-2026-10-15.md) (`01c94b0`) giao Antigravity làm lại header mobile và menu xổ xuống. Yêu cầu đó nói "không ghi đè Hero mới bằng Hero cũ" nhưng nền mã của Antigravity hiện vẫn là Hero cũ.

## 2. Đề xuất thứ tự

1. **Codex gộp `antigravity/design` @ `40aa56d` vào nhánh Hero chính** (không ngược lại), trên nhánh `codex/hero-chinh-quy-dao`:
   - xung đột `demo/index.html`: lấy phía Hero chính, bỏ vòm cam và cuộn len cũ;
   - giữ CTA Dịch vụ của Antigravity trong `services.html` và `styles.css`; kiểm các quy tắc CSS dùng chung (header Codex đã chỉnh, CTA Dịch vụ mới) không đè nhau;
   - không đổi `hero-orbit.js`, `hero-orbit.css`, nội dung hay hành vi Hero.
2. **Claude kiểm kết quả gộp:** Hero không đổi, header, trang Dịch vụ và CTA Dịch vụ mới theo [yêu cầu CTA](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-cta-dich-vu-2026-10-15.md) (CTA chưa từng được kiểm).
3. **Chủ dự án (hoặc người điều phối) quyết cách đưa kết quả về `antigravity/design`**: đẩy thẳng cùng SHA, hoặc để Antigravity lấy nhánh này. Chưa nên để Antigravity tự gộp, vì dễ kéo Hero cũ trở lại.
4. **Antigravity làm header mobile trên nền đã gộp**, chỉ sau bước 3. Từ giờ Codex không sửa thêm header.
5. Claude kiểm header mobile khi Antigravity bàn giao.

Lý do: gộp theo hướng này chỉ có 1 xung đột nhỏ và Hero chính (phần khó, đã kiểm) không bị chạm. Làm ngược lại (Antigravity gộp Codex vào) có rủi ro mất Hero mới hoặc làm hỏng mã chép nguyên.

## 3. Việc còn mở (không chặn việc gộp)

- Hiệu năng Hero trên Android cấu hình thấp: chưa kiểm được trong môi trường của Claude; chủ dự án hoặc Codex thử trên máy thật.
- Chuyển tab thật; cửa sổ chi tiết dịch vụ; nút Gọi và nút Maps trên thiết bị thật.
- Đích `#form-dat-lich`, `#dang-nhap`, `#dang-ky`: vẫn HOÃN ĐÃ CHỐT.
- Lượt QA vừa rồi do Sonnet 5.5 làm; quy trình quy định lượt đầu cho trang mới dùng Opus. Chủ dự án quyết có chạy lại bằng Opus không.

## 4. Tin nhắn cho từng bên (chủ dự án chép gửi)

### Gửi Codex

> Codex, điều phối gộp nhánh Hero chính. Đọc `shared/qa-review` → `docs/dieu-phoi-gop-nhanh-hero-chinh-2026-10-15.md`. Việc của bạn: trên `codex/hero-chinh-quy-dao` (@ `2efb96b`) gộp `antigravity/design` @ `40aa56d`. Xung đột `demo/index.html`: lấy phía Hero chính, bỏ vòm cam và cuộn len cũ của Antigravity. Giữ CTA Dịch vụ của họ (`services.html`, `styles.css`) và kiểm CSS dùng chung không đè nhau (header bạn đã chỉnh, CTA mới). Không đổi `hero-orbit.js`, `hero-orbit.css`, nội dung hay hành vi Hero. Không sửa thêm header (sẽ giao Antigravity). Không merge `main`, không deploy. Xong báo SHA đầy đủ, danh sách tệp đổi, cách xử lý xung đột, ảnh chụp Hero và Dịch vụ ở 1440 và 390 để Claude kiểm.

### Gửi Antigravity

> Antigravity, tạm dừng làm tiếp trên Hero cũ. Chủ dự án đã chốt Hero "khung ảnh bay vòng" làm Hero chính; nó nằm trên nhánh của Codex và đang được gộp với `40aa56d` của bạn (phần CTA Dịch vụ giữ lại, phần vòm cam và cuộn len Hero cũ bỏ). Đừng tự gộp nhánh và đừng đẩy thêm lên `antigravity/design` cho tới khi có tin nền mã mới. Sau đó bạn nhận việc header mobile và menu xổ xuống: `shared/requirements` → `docs/yeu-cau-header-mobile-antigravity-2026-10-15.md`, làm trên nền đã gộp, không ghi đè Hero mới bằng Hero cũ.

### Gửi người điều phối / chủ dự án

> Đề xuất thứ tự: Codex gộp 40aa56d vào nhánh Hero chính → Claude kiểm kết quả gộp và CTA Dịch vụ → chủ dự án quyết cách đưa về `antigravity/design` → Antigravity làm header mobile trên nền mới → Claude kiểm. Cần chủ dự án quyết: (1) đồng ý thứ tự này; (2) ai được phép đẩy kết quả gộp lên `antigravity/design`; (3) có chạy lại QA Hero bằng Opus không.
