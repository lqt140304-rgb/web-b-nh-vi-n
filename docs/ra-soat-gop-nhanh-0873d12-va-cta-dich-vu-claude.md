# Rà soát QA: bản gộp Hero chính + CTA Dịch vụ (Claude, 15/10/2026)

- **Nhánh đã kiểm:** `codex/hero-chinh-quy-dao` · **SHA:** `0873d129fdfbdf87c082c09945548a26e3553902` (commit gộp, hai cha: `2efb96b` và `40aa56d`).
- **Đối chiếu:** [giao Codex gộp](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/giao-codex-gop-nhanh-hero-chinh-2026-10-15.md) (`1447dd9`), [yêu cầu CTA](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-cta-dich-vu-2026-10-15.md), [phân quyền](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/phan-quyen-thiet-ke-giao-claude-2026-10-15.md) (`43e4adc`).
- **Cách kiểm:** Chromium, `demo/` bằng `file://`. Lượt này do Sonnet 5.5 làm (xem lưu ý Opus ở báo cáo 46d89c0).

## Kết luận

**Việc gộp: PASS.** Không có lỗi chặn (P1). Hero chính và header không bị đổi, trang Dịch vụ giữ nguyên ngoài khối CTA và nút tài khoản. **CTA Dịch vụ của Antigravity có 2 điểm không đạt** (P2 và P3); Codex cũng đã tìm ra đúng hai điểm này. Theo phân quyền `43e4adc`, tôi đã sửa chúng trên nhánh riêng: [claude/cta-dich-vu-sua @ 229cf79](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/claude/cta-dich-vu-sua) (xem mục cuối).

## 1. Bản gộp 0873d12

| Mục | Nhãn | Bằng chứng |
|---|---|---|
| Hero không đổi | **PASS** | `demo/hero-orbit.js` và `demo/hero-orbit.css` trùng từng byte với `2efb96b`; `demo/index.html` trùng `2efb96b`; `tests/verify-hero-source.py` PASS. Mở `index.html` ở 1440, 1024, 390, 360: 9 / 9 / 6 / 6 khung, không `is-crossing`, không còn lớp Hero cũ (`.hero-minimal-creative`, `.pet-arch-card`, `.hero-decor-yarn`), tiêu đề đúng, không tràn ngang, 0 lỗi console. |
| Xung đột `index.html` | **PASS** | Lấy trọn phía Hero chính; vòm cam và cuộn len cũ của Antigravity bị bỏ đúng như điều phối. |
| `services.html`, `styles.css` | **PASS** | So với `40aa56d`, `services.html` chỉ khác 10 dòng và `styles.css` 25 dòng (đều là phần header Codex đã chỉnh). Ảnh chụp toàn trang `services.html` ở 1440 và 390 (giảm chuyển động) khác `40aa56d` chỉ ở vùng nút Đăng nhập/Đăng ký của header. |
| Header | **PASS** | Đo từng px từ 320 đến 560, cộng 600 đến 1440, hai trang, khách và đã đăng nhập (khoảng 1.000 phép đo): không đè nhau, không vượt mép, không tràn ngang, nút Đăng nhập luôn hiện. |
| Hiệu ứng lặp ở Dịch vụ | **PASS** | 0 hiệu ứng vô hạn khi tải và sau khi giữ chuột 6 giây trên nút CTA; focus bàn phím viền 3 px trên cả hai nút. |

## 2. CTA Dịch vụ (mã của Antigravity, đo trên 0873d12)

| # | Tiêu chí | Nhãn | Ghi chú |
|---|---|---|---|
| 1 | Câu chữ, bỏ "Không cần tài khoản", nút gọi | **PASS** | Đúng từng chữ; nút "097 355 51 05" `tel:+84973555105`; không còn khối CTA cũ, không cún. |
| 2 | Nền, viền, bo, bóng | **PASS** | Nền `rgba(90,30,94,.035)`, viền 1 px tím nhạt, bo 24 px (20 px mobile), bóng rất nhẹ. |
| 3 | Desktop và tablet | **PASS (bố cục), FIX P3 (cao nút)** | 1440: chữ trái, hai nút cạnh nhau, khối cao 128 px. 701–1100: hai nút xếp dọc rộng 236 px, tiêu đề và mô tả một dòng, khối cao 149 px. **Hai nút không cùng cao**: 51 và 53 px (desktop), 44 và 45 px (tablet). |
| 4 | Mobile 390 và 360 | **PASS** | Xếp dọc, hai nút 50 và 52 px, rộng hết khung, không tràn. Ở 360 tiêu đề và mô tả xuống hai dòng, chấp nhận được. |
| 5 | Phông, màu, tương phản | **PASS** | Lora, `#421247` (13,96:1), 26 px (22 px tablet, 20 px mobile) nhỏ hơn H1. |
| 6 | Nút chính, nút gọi, đích | **PASS** | Đúng `index.html#form-dat-lich` và `tel:`. Gọi thật trên điện thoại: **CHƯA KIỂM** (chờ chủ dự án thử). Đích form: **HOÃN ĐÃ CHỐT**. |
| 7 | Không hiệu ứng lặp, hover, focus | **PASS** | Xem bảng 1. |
| 8 | Họa tiết không chạm chữ/nút | **FIX P2** | Ở 1440 nét vòm đi vào chữ "05" và viền nút gọi; ở 701–1100 nét vòm và chấm cam đi sau vùng nút đặt lịch. Đo bằng hộp bao họa tiết (80×80 px, nằm trong vùng nút) và nhìn ảnh phóng to. |
| 9 | Hồi quy | **PASS** | Bốn thẻ, icon, header không đổi trong ảnh chụp toàn trang; 0 lỗi JS. Ba cửa sổ chi tiết và nút cấp cứu: **CHƯA KIỂM** lượt này. |
| 10 | Tài liệu bàn giao | **CHƯA KIỂM** | Chưa mở `docs/ban-giao-services-v1-antigravity.md` để đối chiếu mục CTA. |

## 3. Sửa của Claude (theo `43e4adc`)

- **Nhánh:** `claude/cta-dich-vu-sua` · **SHA:** `229cf79839d18a6d998d1693c1efd3f5161d0830`, một commit trên `0873d12`. Không ghi đè nhánh Codex, không đẩy `antigravity/design` hay `main`.
- **Tệp đổi:** `demo/styles.css` (một khối thêm cuối tệp) và `docs/qa/cta-dich-vu-sua-claude/` (README, ảnh 1440/1200/1101/1024/768/390/360 và khung Mobile 390, mã đo).
- **Sửa:** thu nhỏ họa tiết từ 80 px còn 24 px ở góc trống (cách chữ và nút ít nhất 6 px ở 1440), ẩn từ 1100 px trở xuống; hai nút cùng viền và cùng `height` cố định: 52/52 (desktop và mobile), 48/48 (tablet, khối cao 156 px ≤ 180 px), 48/48 trong khung Mobile 390.
- **Giới hạn:** họa tiết ở 1440 giờ gần như chỉ còn một nét rất nhỏ. Muốn họa tiết rõ hơn phải thêm chỗ trống ở góc (đổi bố cục), tôi chưa làm vì ngoài phạm vi "sửa tối thiểu"; chủ dự án quyết sau khi xem ảnh.
- **Chưa kiểm:** Codex kiểm chéo theo phân công; gọi `tel:` thật; hover; ba cửa sổ chi tiết dịch vụ.

## Việc còn lại theo `43e4adc`

Việc 2 (đặc tả header mobile theo ảnh chủ dự án: trạng thái đóng và mở, khách và tài khoản, logo, kích thước, các mốc 320/360/390/420 và khung Mobile 390) **chưa bắt đầu**. Antigravity chưa được triển khai mục này.
