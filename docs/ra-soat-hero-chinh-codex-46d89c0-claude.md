# Rà soát QA: Hero chính do Codex tích hợp vào `demo/` (Claude, 15/10/2026)

- **Nhánh:** `codex/hero-chinh-quy-dao` · **SHA:** `46d89c01a2417c8595b2a5f9a637de6bd599bb3a` · **Base:** `8bb446f779e7c5cb137022a18a4b38b400990847`
- **Đối chiếu:** [yêu cầu Hero chính](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-hero-chinh-khung-anh-bay-vong-2026-10-15.md) (a17b54b, mục "Đạt khi" 1–11) và bản duyệt `hero-quy-dao.html` (f58c2d7).
- **Cách kiểm:** Chromium (Playwright), mở `demo/` bằng `file://` ở chế độ `?mode=responsive`, chạy thật có chuyển động; so sánh với bản duyệt bằng cùng một phép đo. Số đo và mã: [ra-soat-hero-chinh-codex-bang-chung/](ra-soat-hero-chinh-codex-bang-chung/).
- **Lưu ý quy trình:** lượt này do Sonnet 5.5 làm. Quy tắc trong `quy-trinh-qa-ui-ux.md` mục 4a là lượt đầu cho trang mới dùng Opus. Nếu chủ dự án muốn đủ quy tắc, cần chạy lại bằng Opus.

## Kết luận

**Không có lỗi chặn (P1).** Phần chuyển động chép nguyên đúng như bản duyệt. Có **1 FIX P2** (bảng "Tiêu chí" trong demo mô tả sai Hero mới) và vài mục P3/Ý KIẾN. Chưa thể coi là xong hoàn toàn vì còn mục HOÃN ĐÃ CHỐT và mục cần thiết bị thật.

## Nhãn theo mục "Đạt khi"

| # | Mục | Nhãn | Bằng chứng |
|---|---|---|---|
| 1 | Chữ hiện trước, khung bay ra sau | **PASS** | Chữ đủ rõ trước khi khung đầu tiên hiện: codex 2,33 s và 2,51 s; bản duyệt 1,79 s và 1,91 s. Thứ tự đúng ở cả hai. Thời gian tuyệt đối của demo chậm hơn khoảng 0,5 s trong lần đo này (nạp `file://` và phông); chưa kết luận được nguyên nhân, không coi là lỗi. |
| 2 | Khung không đi vào giữa / không che chữ | **PASS, kèm Ý KIẾN** | `nextExc = Infinity`, không có `is-crossing`. Ảnh chụp lúc khung gần chữ nhất trong 40 mẫu (1440 và 390): không khung nào che nét chữ. Chi tiết ở "Ý KIẾN 1" dưới đây. |
| 3 | Chữ/nút nằm trên khung; hai nút bấm được | **PASS** | Bấm chuột thật: "Gửi yêu cầu đặt lịch" ra `index.html#form-dat-lich`, "Xem dịch vụ" ra `services.html`. `href` đúng. Xem P3 số 1. |
| 4 | Không tràn ngang; menu ☰ | **PASS (tràn ngang), CHƯA KIỂM (menu)** | 320, 360, 390, 768, 992, 1024, 1280, 1440, **có chuyển động**: `scrollWidth` bằng chiều rộng cửa sổ và khung giả lập. Menu ☰ và Esc: chỉ có kết quả của Codex, tôi chưa chạy lại. |
| 5 | Khung không chồng nhau > ~25% | **PASS** | 300 mẫu cách 200 ms (60 s) ở 1440 và 390: 0% mẫu có hai khung chồng quá 25% diện tích khung nhỏ hơn; chồng lớn nhất 8% (1440) và 14% (390). |
| 6 | Nút tạm dừng, tab ẩn | **PASS (nút), CHƯA KIỂM (tab ẩn thật)** | Enter dừng, khung đứng yên, `aria-pressed` đúng; Space tiếp tục. Tab ẩn: Codex chỉ giả lập `visibilitychange`; tôi chưa thử chuyển tab thật. |
| 7 | `prefers-reduced-motion` | **PASS** | Nút ẩn, 9 khung ở vị trí tĩnh, chữ hiện ngay, 0 hiệu ứng đang chạy. |
| 8 | Tương phản, focus | **PASS** | Đo trên nền thật đang chạy (40 ảnh chụp mỗi cỡ), chữ dùng màu đã biết: "người bạn nhỏ" thấp nhất 3,88:1 (1440) và **3,19:1 (390)**, đạt ngưỡng chữ lớn 3:1 nhưng sát; tiêu đề ≥ 10,4:1; nhãn đầu ≥ 5,0:1; câu phụ ≥ 6,0:1. Focus bàn phím: viền tím 3 px trên liên kết, nút, Đăng nhập, Đăng ký, nút chính. |
| 9 | Không có nội dung chưa chốt | **FIX P2** | Hero, menu: đúng, không có Bảng giá, Tin tức, tìm kiếm, "Đặt lịch hẹn". Nhưng bảng "Tiêu chí" mở từ demo còn nội dung Hero cũ. Xem FIX 1. |
| 10 | Console, hồi quy Dịch vụ | **PASS (smoke)** | 0 lỗi console, 0 yêu cầu lỗi. `services.html` ở 1440 và 390 so với base: ảnh chụp toàn trang chỉ khác ở vùng nút Đăng nhập/Đăng ký của header (1.296 và 3.181 điểm ảnh), đúng thay đổi có chủ ý. Chưa kiểm sâu các cửa sổ chi tiết dịch vụ. |
| 11 | Hiệu năng điện thoại Android cấu hình thấp | **CHƯA KIỂM** | Không có thiết bị. Bắt buộc thử trước khi xuất bản. |

**Chép nguyên mã: PASS.** `demo/hero-orbit.js` và `demo/hero-orbit.css` trùng từng dòng với bản tích hợp thử của Claude (0 dòng khác); `tests/verify-hero-source.py` chạy PASS: JS chỉ khác bộ chọn và việc đo header ngoài. Tôi chỉ so với patch của Claude và script kiểm của Codex; chưa tự so lại từng dòng với `hero-quy-dao.html`.

## FIX

**FIX 1 (P2): bảng "Tiêu chí" trong `demo/index.html` mô tả sai Hero mới.**
- Mục "Bố cục Hero khung ảnh bay vòng": tiêu đề đã đổi, nhưng nội dung vẫn là "3 khung vòm thú cưng cân đối dưới chân trang, ảnh gốc sắc nét do CSS bo góc, không xếp chồng chữ lên ảnh". Hero mới không có ảnh gốc và không có 3 khung vòm.
- Mục "Mobile Ergonomics": vẫn viết "Ba ảnh vòm thú cưng luôn nằm trong một hàng... không dùng chấm tròn".
- Hậu quả: người xem demo mở "Tiêu chí" sẽ đọc tiêu chí sai về chính Hero chủ dự án vừa chốt. Codex đã tự nêu rủi ro này ("Claude kiểm modal này trước khi dùng làm tài liệu nghiệm thu"); chưa sửa.
- Đạt khi: hai mục ghi đúng Hero mới (khung "ẢNH ĐANG CHỜ" bay vòng ngoài rìa, 9/8/6 khung theo cỡ màn hình, chữ luôn nằm trên khung, có nút tạm dừng), hoặc bỏ hai mục nếu không muốn duy trì.
- Cùng chỗ, mức P3: thẻ `<meta name="description">` còn ghi "Phương án D".

## P3 / Ý KIẾN

**P3 số 1: bấm "Gửi yêu cầu đặt lịch" làm trang tải lại và mất `?mode=` của demo.** `href` đúng yêu cầu (`index.html#form-dat-lich`) nhưng vì khác URL (không có `?mode=responsive`) nên trình duyệt tải lại, khung xem thử quay về chế độ mặc định. Chỉ là hiện tượng của khung xem thử; website thật không bị. Đích `#form-dat-lich` chưa có form: **HOÃN ĐÃ CHỐT**.

**Ý KIẾN 1: chiều cao Hero trong demo thấp hơn bản duyệt, nên khung sát chữ hơn.** Hero trong demo cao 736–763 px ở cửa sổ 800–900 px; bản duyệt cao bằng cả cửa sổ (kể cả header). Đo hộp bao của khung có chạm hộp bao chữ trong bao nhiêu mẫu (bản duyệt cùng cỡ cho kết quả tương đương, nên không phải lỗi tích hợp):

| Cửa sổ 1440 × | Hero cao | Chạm (Codex) | Chạm (bản duyệt) |
|---|---|---|---|
| 800 | 736 | 46% | 52% |
| 900 | 763 | 41–49% | 17% (Hero cao 900) |
| 1000 | 863 | 25% | 6% |
| 1100 | 963 | 1,7% | không đo |

Ảnh chụp lúc khung gần chữ nhất cho thấy chỉ là góc khung chạm vùng quanh chữ, không che nét chữ (xem ảnh 01 và 02). Trên mobile hộp bao luôn chạm chữ ở cả hai bản (100% mẫu), vì vòng quỹ đạo rất hẹp; khung đi sau nhãn đầu, câu phụ và nút. Chữ vẫn đọc được vì nằm trên khung.
**Sai sót của Claude:** mục "Đạt khi" 2 tôi viết là "không đi qua phía sau chữ ở bất kỳ thời điểm nào" quá chặt so với chính bản duyệt (bản duyệt cũng để khung đi sau mép chữ ở mobile). Đề nghị chủ dự án chọn: giữ như bản duyệt (khung có thể đi sau mép chữ nhưng không che nét chữ), hoặc yêu cầu khung tránh hẳn vùng chữ (phải đổi thông số quỹ đạo, tức khác bản đã duyệt).

**Ý KIẾN 2: Đăng nhập/Đăng ký.** Codex đổi hai nút thành liên kết `#dang-nhap`, `#dang-ky`, ẩn "Đăng nhập" ở header khi ≤ 420 px và trong khung giả lập 390, giữ "Đăng ký". Khớp bản duyệt; chủ dự án chưa trả lời câu hỏi này nên là **Ý KIẾN**, chưa phải đã chốt. Ảnh 04 và 05: header ở khung 390 (đã đăng nhập) và cửa sổ 360 không vỡ.

**Ý KIẾN 3: mã chết.** `demo/styles.css` còn khoảng 30 quy tắc của Hero cũ (`.hero-minimal-creative`, `.pet-arch-*`); `hero-orbit.js` còn mã không dùng của các bản chuyển động trước. Yêu cầu cho phép xóa nhưng Codex giữ để không đổi hành vi. Không chặn; nên dọn trước khi chuyển sang mã sản phẩm.

## Đã xem và ổn

- Thay đổi `app.js` (chờ nút đóng menu hiện rồi mới focus): logic hợp lý, tôi đọc mã nhưng chưa chạy lại.
- Thêm favicon cho `services.html`: không đổi nội dung.
- Test của Codex (`tests/`): đọc qua, hợp lý; các phép đo chồng khung của họ là hộp bao nên bảo thủ, khớp với số của tôi.

## Chưa kiểm

Menu ☰ ở ≤ 992 px (chỉ có kết quả của Codex), tab ẩn thật, chế độ giảm chuyển động ở khung giả lập 390, hiệu năng Android cấu hình thấp, cửa sổ chi tiết dịch vụ, bấm thật nút Gọi và nút Maps. Chưa so từng dòng JS/CSS với `hero-quy-dao.html` (chỉ so với patch của Claude và script của Codex).
