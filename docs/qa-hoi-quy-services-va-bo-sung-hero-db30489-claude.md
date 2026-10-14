# QA hồi quy Services và bổ sung Hero theo quy tắc README (Claude)

**Người kiểm:** Claude (Opus) · **Ngày:** 15/10/2026 · **Nhánh/commit:** `antigravity/design` @ `db3048994dcdbcf2d83090af03e98cf688b127e4` (mã demo giống `252ad9d`, chỉ thêm README). Kiểm trên bản lấy thẳng từ GitHub, **không** dùng bản local. · **Căn cứ:** [Quy tắc kiểm tra trong README](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/README.md) và [Codex đối chiếu](codex-doi-chieu-qa-hero-va-services-252ad9d.md).

**Vì sao làm lượt này:** theo README, khi CSS chung đổi phải kiểm cả Hero và Services; QA Hero trước ([ra-soat-hero-chot-15-10-claude.md](ra-soat-hero-chot-15-10-claude.md)) chưa kiểm hồi quy Services, chưa giữ hover trên 5 giây, chưa kiểm gần điểm chuyển bố cục và chưa đối chiếu tài liệu. Claude nhận các thiếu sót này; lượt này bù. **Không dùng PASS Hero để suy ra PASS Services** và ngược lại.

**Loại bằng chứng:** [Tự tái hiện] chạy trình duyệt (Chromium/Playwright) trên commit trên · [Đọc mã] · [Xem ảnh]. **Chưa kiểm:** iPhone/Android, Safari, trình đọc màn hình, trình gọi `tel:` thật.

## A. Hồi quy Services — đạt các mục dưới, không có FIX mới

| Mục | Nhãn | Bằng chứng |
|---|---|---|
| Bố cục 1440, 1280, 1024, 993/992, 768, 681/680, 390, 360 | **PASS** | [Tự tái hiện] `scrollWidth` = chiều rộng, không phần tử nào lọt ra ngoài; header 84/72/64/60 px đúng theo cỡ; không lỗi JS, không tài nguyên lỗi. Ảnh 01, 02 |
| Nút gọi cấp cứu | **PASS** | [Tự tái hiện] `href="tel:+84973555105"`; sự kiện bấm **không bị `preventDefault`**, không mở cửa sổ. Trình gọi thực tế: **CHƯA KIỂM** (chủ dự án tự kiểm) |
| Ba cửa sổ Khám, Spa & Grooming, Nội trú | **PASS** | [Tự tái hiện] tiêu điểm vào nút đóng; Tab giữ trong cửa sổ; Escape đóng và trả về đúng nút; header và nội dung nền `inert` khi mở, khôi phục khi đóng |
| Hover chỉ trên thiết bị có hover | **PASS** | [Đọc mã] các khối hover đã bọc `@media (hover: hover)`; [Tự tái hiện] màn hình cảm ứng: sau khi chạm 1,5 giây không còn hoạt ảnh nào |
| Hiệu ứng khi giữ chuột **hơn 5 giây** | **PASS** | [Tự tái hiện] giữ chuột 5,5 giây trên ba ảnh Hero, nút "Gửi yêu cầu", thẻ dịch vụ và nút Gọi cấp cứu: **không có hoạt ảnh `infinite` nào** |
| Nội dung | **PASS** | Số 097 355 51 05, địa chỉ 101, "Spa & Grooming", "Cấp cứu 24/24" đúng quyết định; không thêm thiết bị, giờ, lời hứa; chữ giữ chỗ còn có nhãn |
| Menu điện thoại và header đã đăng nhập (tên dài) | **PASS** | [Tự tái hiện] như lượt trước, không đổi |
| Đích liên kết: `#form-dat-lich`, `#gioi-thieu`, `#lien-he`, `#yeu-cau`, `#thu-cung`, `#cai-dat` | **HOÃN ĐÃ CHỐT** | [Tự tái hiện] các đích chưa tồn tại: form đặt lịch và các trang chưa làm; đã chốt hoãn (form/backend và trang sau). `#top` là đích đặc biệt của trình duyệt, cuộn lên đầu trang |

## B. Bổ sung Hero theo quy tắc README

| Mục | Nhãn | Ghi chú |
|---|---|---|
| Bốn lỗi họa tiết (cung cam đè ảnh, bóng đè cung, dấu chân/nét góc lệch, sợi len lửng) | **FIX P2** | Giữ nguyên kết luận ở [báo cáo Hero](ra-soat-hero-chot-15-10-claude.md); sai yêu cầu đã chốt "giống ảnh demo". Antigravity chưa sửa tại `db30489` |
| Gần điểm chuyển 993/992 và 681/680 | **PASS** | [Tự tái hiện] không tràn, header đổi đúng 84 → 72 px, ba ảnh một hàng |
| Hover/hoạt ảnh Hero | **PASS** | Không `infinite` khi tải và khi giữ chuột 5,5 giây |
| **Cửa sổ Tiêu chí của Hero còn tiêu chí cũ** | **FIX P3** | [Tự tái hiện + đọc mã] mục "Nội dung & Nghiệp vụ" (`demo/index.html` dòng ~373) vẫn ghi phải có hai dòng "Nhân viên sẽ liên hệ…" và "Không cần tài khoản…", trái quyết định đã bỏ hàng này. Cập nhật tiêu chí; không thêm lại hàng ghi chú |
| **Tài liệu bàn giao Hero còn nội dung đã bị thay thế** | **FIX P3** | [Đọc mã] `docs/ban-giao-hero-header-antigravity.md` dòng 176 vẫn ghi "Cả 2 dòng hiển thị ngay trang chủ — Đạt" (mâu thuẫn dòng 27 đã ghi bỏ); các dòng 182, 215 và `thiet-ke-hero-phuong-an-d.md` dòng 6 ghi nhánh `antigravity/hero-v1` |
| **Tài liệu bàn giao Services còn tên nhánh cũ** | **FIX P3** | [Đọc mã] `docs/ban-giao-services-v1-antigravity.md` dòng 5 ghi `antigravity/services-v1`; nhánh hiện hành là `antigravity/design` (như Codex đã nêu) |
| Cách đánh dấu | Đề nghị | Với phần lịch sử, ghi "(lịch sử, đã bị thay thế bởi …)" thay vì xóa, để không bị hiểu là yêu cầu làm lại thiết kế cũ |

## C. Điều Claude điều chỉnh trong cách kiểm từ nay (theo README)

- Mỗi báo cáo ghi **nhánh, SHA đầy đủ, nguồn bản chạy** (bản lấy từ GitHub) và loại bằng chứng.
- Khi CSS/header/tài nguyên chung đổi: kiểm **cả hai trang**.
- Hiệu ứng: quan sát lúc tải, **giữ chuột trên 5 giây**, cảm ứng; không coi giảm chuyển động là thay thế.
- Kiểm gần điểm chuyển bố cục (993/992, 681/680) và đối chiếu tài liệu bàn giao với mã.
- Dùng nhãn **PASS / FIX / CHƯA KIỂM / HOÃN ĐÃ CHỐT / Ý KIẾN** và mức **P1/P2/P3** (thay "Cao/Trung bình/Thấp" của các báo cáo cũ: Cao → P1/P2 theo hậu quả, Trung bình → P2, Thấp → P3). Không kết luận PASS toàn trang khi còn FIX bắt buộc.
- Sau sửa chỉ kiểm lại các lỗi đã báo và phần dùng chung bị ảnh hưởng, không lặp lại lỗi cũ đã được chấp nhận.

## D. Kết luận

**Services:** đạt các mục ở phần A; chưa có FIX mới. **Hero:** đạt các mục kỹ thuật; **còn 4 FIX P2 về họa tiết** và **3 FIX P3 về tài liệu/tiêu chí**. Không phải chủ dự án đã duyệt giao diện.
