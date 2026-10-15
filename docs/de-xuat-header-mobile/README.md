# Đặc tả header mobile và menu xổ xuống (Claude, 15/10/2026)

**Trạng thái: ĐẶC TẢ ĐỀ XUẤT, chờ chủ dự án duyệt.** Soạn theo [phân quyền `43e4adc`](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/phan-quyen-thiet-ke-giao-claude-2026-10-15.md), việc 2, dựa trên [ảnh chủ dự án chọn](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/anh-mau-header-mobile-2026-10-15/header-mobile-chu-du-an.png) và [yêu cầu cũ](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-header-mobile-antigravity-2026-10-15.md). Antigravity **chưa** được triển khai cho tới khi chủ dự án duyệt và giao. Không đổi header desktop, Hero, nội dung.

**Bản mẫu chạy được:** [header-mobile-mau.html](header-mobile-mau.html) (mở trực tiếp; cần mạng để tải phông; thêm `?open=1` để mở sẵn menu, `?user=1` để xem trạng thái đã đăng nhập). Ảnh: [tổng hợp](anh/00-tong-hop.png) và từng cỡ trong [anh/](anh/).

## Nguồn của ảnh mẫu

Đo màu và kích thước trực tiếp từ ảnh: ảnh khớp với menu đã có trong Hero chính (`hero-quy-dao.html`), cùng bộ màu (nền dòng đang chọn `#F6EFF4`, nút tím `#5A1E5E`). Bản mẫu này dùng lại đúng bộ màu và kiểu đó, mở rộng cho mọi cỡ 320–600 px và hai trạng thái tài khoản.

## 1. Header (menu đóng)

Bố cục một hàng: **logo bên trái; bên phải: Đăng nhập, Đăng ký, nút ☰.** Cả hai nút khách luôn hiện, khi menu đóng và khi mở (chủ dự án chốt: giữ nút Đăng nhập).

| Phần | Đặc tả |
|---|---|
| Nút **Đăng nhập** | Viên thuốc, nền trắng đục 70% (`rgba(255,255,255,.7)`), viền 1,5 px `rgba(90,30,94,.2)`, chữ tím `#5A1E5E`, đậm 600 |
| Nút **Đăng ký** | Viên thuốc, nền `#5A1E5E`, chữ kem `#FBF7F1`, đậm 600, bóng `0 10px 22px -12px rgba(90,30,94,.7)` |
| Nút **☰** | Ô vuông 44×44, bo 14 px, nền `#FEF7F1`, viền 1,5 px `rgba(90,30,94,.16)`, biểu tượng 22 px tím `#5A1E5E` |
| Chiều cao nút | Mọi nút ≥ 44 px, header cao tối thiểu 68 px |
| Khoảng cách giữa các nút | 10 px (≥ 501 px), 6 px (≤ 500 px), 4 px (≤ 350 px) |
| Logo | Giữ nguyên logo chính thức, không đổi màu hay bỏ chữ |

**Các mốc kích thước** (đã đo từng px từ 320 đến 600):

| Chiều rộng | Chữ nút | Đệm ngang nút | Logo (ảnh / chữ "Lê Sơn" / dòng nhỏ) | Lề header |
|---|---|---|---|---|
| ≥ 501 px | 14,5 px | 18 px | 46×42 / 21 px / 9,5 px | 16 px |
| 401–500 px | 13 px | 12 px | 46×42 / 21 px / 9,5 px | 14 px |
| 351–400 px | 12 px | 9 px | 38×35 / 18 px / 8 px | 12 px |
| 320–350 px | 11,5 px | 7 px | 34×31 / 17 px / 8 px | 10 px |

Chữ nút nhỏ ở cỡ hẹp là giới hạn của chiều ngang: ở 320 px phải đủ chỗ cho logo, hai nút và ☰ trên một hàng. Vùng chạm vẫn ≥ 44 px chiều cao. Nếu chủ dự án muốn chữ to hơn ở máy rất hẹp thì phải đổi bố cục (ví dụ bỏ dòng "BỆNH VIỆN THÚ Y" dưới logo), cần chủ dự án quyết.

## 2. Menu xổ xuống (mở bằng ☰)

- **Hộp nổi ngay dưới header**, không đẩy nội dung Hero xuống (định vị tuyệt đối, `z-index` cao hơn Hero), thay cho drawer trượt cạnh ở mobile.
- Hình dạng: nền trắng `#FFFFFF`, viền 1 px `rgba(90,30,94,.08)`, bo 22 px, đệm 10 px, bóng `0 24px 50px -20px rgba(66,18,71,.35)`. Rộng `min(318px, 100% − 24px)`, cách mép phải 12 px, mép trên chồng lên đáy header 6 px.
- **Liên kết xếp dọc**, mỗi dòng cao ≥ 48 px, đệm ngang 14 px, bo 12 px, chữ 16 px: Trang chủ, Dịch vụ, Giới thiệu, Liên hệ (đúng thứ tự, không thêm mục). Dòng của trang hiện tại (`aria-current="page"`): nền `#F6EFF4`, chữ tím `#5A1E5E`, đậm 700. Ở trang Dịch vụ thì đánh dấu Dịch vụ. Rê chuột: nền `#F6EFF4`.
- **Hàng cuối hộp** (trạng thái khách): Đăng nhập (viền) và Đăng ký (tím) đặt cạnh nhau, rộng bằng nhau, cách nhau 8 px, cao ≥ 44 px, cách danh sách 12 px.
- **Đã đăng nhập:** header hiện nút tài khoản có sẵn (avatar + tên) thay cho hai nút khách; hộp menu giữ bốn liên kết và **ẩn hàng Đăng nhập/Đăng ký**. Không ép hiện nút dành cho khách. Dropdown tài khoản hiện có giữ nguyên.

## 3. Hành vi và hỗ trợ tiếp cận

- Bấm ☰ mở/đóng; `aria-expanded` đúng và `aria-controls="mobileMenu"`; nhãn nút đổi giữa "Mở danh mục điều hướng" và "Đóng danh mục điều hướng".
- Escape đóng và trả tiêu điểm về ☰. Bấm ra ngoài hộp đóng. Bấm một liên kết trong hộp đóng.
- Menu đóng: `hidden` (không nhận tiêu điểm). Menu mở: Tab đi vào liên kết đầu tiên, rồi đến hai nút cuối hộp.
- Không khóa cuộn trang, không đặt `inert` lên Hero (khác drawer cũ), vì đây là hộp nhỏ không phủ màn hình.
- Viền focus 3 px `#5A1E5E`, cách 3 px, trên mọi nút và liên kết.
- Chỉ áp dụng từ 992 px trở xuống (nơi nav ngang đã ẩn) và trong khung xem thử Mobile 390. Desktop ≥ 993 px không đổi.

## 4. Đã kiểm trên bản mẫu (Chromium)

- Đo từng px từ 320 đến 600 (281 cỡ), bốn tổ hợp (khách/đã đăng nhập × menu đóng/mở): không phép đo nào có logo, nút đè nhau, vượt mép, trang tràn ngang, hộp menu vượt mép, nút thấp hơn 44 px, hoặc logo sát nút dưới 4 px. Mã đo: [do-tung-px.js](do-tung-px.js).
- Hành vi: mở bằng ☰, `aria-expanded` đổi đúng, Escape đóng và tiêu điểm về ☰, bấm ngoài đóng, menu đóng không hiển thị, Tab đi vào "Trang chủ".
- Hộp menu nằm đè lên nội dung (không đẩy Hero).

**Chưa kiểm:** chưa tích hợp vào `demo/` nên chưa kiểm khung Mobile 390, trang Dịch vụ, nút tài khoản và dropdown thật, hay tương tác với `app.js` (drawer cũ, `inert` của Hero). Chưa thử trên máy thật. Bản mẫu dùng liên kết giữ chỗ.

## 5. Điểm chủ dự án cần quyết

1. **Duyệt đặc tả này** để giao triển khai (Antigravity theo `43e4adc`, hoặc Codex nếu chủ dự án muốn tích hợp ngay).
2. **Chữ nút nhỏ ở 320–400 px** (11,5–12 px): chấp nhận, hay đổi bố cục logo để nút to hơn?
3. **Trạng thái đã đăng nhập:** hàng cuối menu ẩn (đề xuất) hay thay bằng liên kết tài khoản?

## 6. Lưu ý cho người triển khai

- Quy tắc cũ `a { color: inherit }` của trang phải có độ ưu tiên 0 (`:where`), nếu không chữ nút "Đăng ký" thành màu tối trên nền tím (đã gặp ở Hero).
- Bỏ drawer cũ ở mobile (`#mobileDrawer`, lớp phủ, khóa cuộn, `inert` Hero) cho các mốc ≤ 992 px; giữ mã desktop. Cập nhật bảng "Tiêu chí" trong demo cho đúng.
- Header dùng chung Trang chủ và Dịch vụ; kiểm cả hai.
- Sau khi triển khai, Claude kiểm lại bằng chính phép đo từng px trên.
