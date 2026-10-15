# Rà soát QA lại: đợt sửa 1 của Codex (Claude, 15/10/2026)

- **Nhánh:** `codex/hero-chinh-quy-dao` · **SHA:** `6aaabc84d1daa133e45f378a84287ae013fc291d` (trước: `46d89c0`) · **Base:** `8bb446f`.
- **Đối chiếu:** mục "Đợt sửa 1 cho Codex" và "Đạt khi" 8 trong [yêu cầu Hero chính](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-hero-chinh-khung-anh-bay-vong-2026-10-15.md) (c90de82); báo cáo trước: [46d89c0](ra-soat-hero-chinh-codex-46d89c0-claude.md).
- **Cách kiểm:** Chromium, `demo/` mở bằng `file://`, đo từng nút của header ở 21 cỡ (320–1440) trên cả `index.html` và `services.html`, trong khung Mobile 390, và ở trạng thái khách lẫn đã đăng nhập. Mã đo: [do-header-nhieu-do-rong.js](ra-soat-hero-chinh-codex-6aaabc8-bang-chung/do-header-nhieu-do-rong.js). Lượt này do Sonnet 5.5 làm (xem lưu ý về Opus ở báo cáo trước).

## Kết luận

Việc 2 và 3 đạt. Việc 1 (giữ nút "Đăng nhập") đạt ở mọi cỡ được yêu cầu, **trừ một dải hẹp 421–427 px: nút ☰ bị đẩy ra ngoài mép phải và trang tràn ngang tới 7 px.** Đó là **FIX P2**. Không có lỗi chặn (P1). Không đổi gì ở bộ mô phỏng Hero.

## Nhãn

| # | Việc | Nhãn | Bằng chứng |
|---|---|---|---|
| 1 | Giữ "Đăng nhập" ở mọi cỡ | **PASS (320–420, 428–1440, khung Mobile 390), FIX P2 (421–427)** | Ở 320, 360, 375, 390, 414, 420 và trong khung Mobile 390: hiện cả "Đăng nhập" và "Đăng ký", cao 44 px, không đè logo hay ☰, không tràn ngang; cả hai trang. Từ 428 đến 1440 cũng đạt. **Ở 421, 422, 424, 426, 427 px: nút ☰ vượt mép phải và `scrollWidth` = 428 > chiều rộng cửa sổ** (cả hai trang). Nguyên nhân: nhóm quy tắc thu gọn dừng ở `max-width: 420px`, nhưng nội dung header cần tối thiểu 428 px. Xem FIX 1. |
| 2 | Bảng "Tiêu chí" đúng Hero mới | **PASS** | Hai mục đã viết lại: khung trống "ẢNH ĐANG CHỜ" bay vòng, chữ và nút nằm trên khung, có nút tạm dừng; header giữ cả hai nút. Không còn "khung vòm", "ảnh gốc", "Ba ảnh vòm". Tôi chưa mở lại bảng bằng mắt, chỉ đọc mã. |
| 3 | Bỏ "Phương án D" | **PASS** | Meta description đã đổi; không còn "Phương án D" trong `index.html`. |
| - | Trạng thái đã đăng nhập | **PASS** | Ở 360 và 390: nhóm khách ẩn, nhóm tài khoản hiện, ☰ trong khung, không tràn. |

## FIX

**FIX 1 (P2): header tràn ngang ở 421–427 px.**
- Hiện tượng: cửa sổ rộng 421–427 px, nút ☰ có mép phải ở 428 px (vượt cửa sổ tới 7 px) và trang cuộn ngang. Đây là dải hẹp, ít máy thật rơi vào; nhưng mục "Đạt khi" 8 yêu cầu không tràn ngang và không bị cắt ở mọi cỡ.
- Gợi ý (Codex tự quyết cách làm): đưa ngưỡng thu gọn từ 420 lên 430 px (hoặc cho `.brand-link` và nhóm nút co lại bằng `flex-shrink`/`min-width: 0` thay vì chỉ theo ngưỡng cố định).
- Đạt khi: mọi cỡ từ 320 đến 440 px (đo từng px ở 421–430 và 320–360) không có nút nào vượt mép, không tràn ngang; cả hai trang; cả khách lẫn đã đăng nhập. Thêm 421, 427 và 428 vào `tests/header-auth.cjs`.

## P3 / Ý KIẾN

- **P3: chữ nút nhỏ.** Ở ≤ 420 px chữ nút là 12 px, ở ≤ 360 px là 11 px (so với 14,5 px ở cỡ lớn); chữ nhãn "BỆNH VIỆN THÚ Y" 8 px ở ≤ 360 px. Đọc được trong ảnh 01 và 02 nhưng nhỏ; vùng chạm vẫn 44 px. Không chặn. Nếu muốn dễ đọc hơn thì phải đổi bố cục header (ví dụ chỉ hiện logo rút gọn).
- **P3: báo cáo bàn giao thiếu.** Tôi yêu cầu "báo branch, SHA, đã làm/chưa làm cho 3 việc và ảnh chụp header 360, 390". Trong repo chưa có ảnh mới và README `docs/qa/hero-chinh/` chưa được cập nhật cho đợt sửa này. Có thể Codex đã báo qua tin nhắn; nếu vậy chỉ cần ghi vào README cho khớp.

## Chưa kiểm

Menu ☰ mở thật ở dải 320–430 px sau khi sửa header (kiểm bằng mắt), hiệu năng thiết bị thật, tab ẩn thật, cửa sổ chi tiết dịch vụ (như báo cáo trước).
