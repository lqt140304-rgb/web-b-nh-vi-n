# Rà soát độc lập: Lê Sơn Hero V1 (Claude)

**Ngày:** 14/10/2026 · **Người rà soát:** Claude · **Đối tượng:** Lê Sơn Hero V1 (Hero/Header đầu tiên của Antigravity) · **Trạng thái báo cáo:** **chưa rà soát được nội dung V1 vì thiếu bằng chứng.** Báo cáo này không phê duyệt thay chủ dự án, không sửa giao diện, không merge vào main.

**Quy ước:** **[Đã xác minh]** có bằng chứng Claude tự kiểm tra · **[Chưa xác minh]** thiếu bằng chứng, **không** coi là đạt hay không đạt · **[Đề xuất]** của Claude.

---

## 0. Bằng chứng đã tiếp cận và chưa tiếp cận

Kiểm tra ngày 14/10/2026 trên nhánh `claude/optimistic-mccarthy-d1d15i`, commit `bfa9130`.

| Tài liệu hoặc tài nguyên yêu cầu | Kết quả kiểm tra | Tình trạng |
|---|---|---|
| `demo/index.html` (bản demo của Antigravity) | Thư mục `demo/` **không tồn tại** trong kho; không có tệp nào tên `demo` trong lịch sử git của nhánh | **Thiếu bằng chứng** |
| `docs/ban-giao-hero-header-antigravity.md` | **Không có** trong `docs/` (chỉ có `antigravity-brief-hero.md`, `dinh-huong-san-pham.md`, `ke-hoach-phien-ban-dau.md`, `rasoat-tai-khoan-va-form-dat-lich.md`, `tom-tat-cap-nhat-2026-10-14.md`) | **Thiếu bằng chứng** |
| `thiet-ke-hero-phuong-an-d.md` | **Không có** trong kho | **Thiếu bằng chứng** |
| Bộ tài nguyên logo, hình ảnh, SVG | **Không có** trong kho | **Thiếu bằng chứng** |
| Demo đang chạy tại `http://localhost:3030` | Môi trường làm việc của Claude là một máy chủ đám mây riêng; `localhost` ở đây **không phải máy của chủ dự án**. Yêu cầu kết nối thất bại (mã trả về `000`) | **Không truy cập được** |
| Kho từ xa | Chỉ có **một** nhánh (`claude/optimistic-mccarthy-d1d15i`); không có nhánh nào khác chứa các tệp trên | Không bổ sung được |
| Tài liệu nghiệp vụ hiện hành trong `docs/` | Đọc được và đối chiếu được | **Đã tiếp cận** |

**Hệ quả:** toàn bộ ba mảng A (nghiệp vụ), B (giao diện), C (kỹ thuật và bàn giao) đều **không thể xác minh** trên V1. Báo cáo này **không kết luận V1 đạt** ở bất kỳ mục nào.

---

## 1. Những điểm V1 đã đạt

**Không có điểm nào được xác minh.** Claude không ghi "đạt" cho điều chưa tự kiểm tra.

Điều duy nhất đã có là **tiêu chí nghiệm thu** để đối chiếu, nằm ở mục 7 của [brief Antigravity](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/antigravity-brief-hero.md). Đây là tiêu chí, không phải kết quả.

## 2. Những lỗi bắt buộc sửa

**Không có lỗi nào được ghi nhận**, vì chưa có V1 để kiểm tra. Việc không có lỗi trong báo cáo này **không có nghĩa V1 không có lỗi**.

Khi có V1, các lỗi được ghi theo mẫu: **mã lỗi, bằng chứng cụ thể (đường dẫn tệp và dòng, hoặc ảnh chụp kèm chiều rộng màn hình), ảnh hưởng, mức ưu tiên (Bắt buộc / Nên / Có thể), đề xuất sửa.** Chưa có mục nào để điền.

## 3. Những cải tiến nên làm

Chưa có. Cùng lý do ở mục 2.

## 4. Những tính năng chuyển sang giai đoạn sau

Theo quyết định của chủ dự án (14/10), các mục sau **không tính là lỗi của V1**:

- **Mèo chuyển đổi ba tư thế giữa các trang** (animation và logic chuyển tư thế): tạm hoãn sang giai đoạn phát triển sau; ghi ở mục 7.1 của [tài liệu định hướng sản phẩm](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/dinh-huong-san-pham.md). **Thiếu animation ba tư thế không phải lỗi.**
- Các tài nguyên SVG phải được **giữ lại** (chưa kiểm tra được vì chưa có tệp). Nếu V1 dùng hình mèo thì chỉ một phiên bản tĩnh.
- Các màn hình ngoài Hero/Header (đăng ký, đăng nhập, form đầy đủ, hỗ trợ tài khoản, trang tiếp nhận): theo brief mục 8, chưa thuộc phạm vi V1.

## 5. Những nội dung chưa thể xác minh

Tất cả mục dưới đây đang ở trạng thái **[Chưa xác minh]**. Cột phương pháp mô tả cách Claude sẽ kiểm tra khi có bằng chứng.

### A. Nghiệp vụ

| # | Yêu cầu | Phương pháp kiểm tra khi có V1 |
|---|---|---|
| A1 | Nút chính ghi đúng "Gửi yêu cầu đặt lịch" | Tìm chữ trong `demo/index.html`; chụp màn hình |
| A2 | Gửi form không đồng nghĩa lịch hẹn đã xác nhận; có nói rõ nhân viên sẽ gọi xác nhận; không có "đặt lịch thành công", "đã có lịch", "đặt ngay" | Tìm các cụm trên; đọc toàn bộ câu chữ hiển thị |
| A3 | Không bắt khách đăng nhập mới được gửi yêu cầu | Kiểm tra nút chính có dẫn tới đăng nhập hay không; đọc câu chữ |
| A4 | Không có nội dung chưa được chủ dự án xác nhận (24/7, cấp cứu, giá, số chuồng, năm kinh nghiệm, tên bác sĩ, giải thưởng, khuyến mãi, địa chỉ, số điện thoại, giờ làm việc nếu chưa cung cấp) | Quét toàn bộ chữ trong HTML; đối chiếu với danh sách đã xác nhận |
| A5 | Header đúng hai trạng thái: chưa đăng nhập (Đăng nhập, Đăng ký) và đã đăng nhập (tên khách, "Yêu cầu của tôi") | Kiểm tra từng trạng thái; kiểm tra cách chuyển đổi trong demo |
| A6 | Không nhắc OTP hay "số này đã có tài khoản" | Tìm chữ trong HTML |
| A7 | Dữ liệu trong demo là dữ liệu giả; không có dữ liệu, ảnh khách thật | Đọc toàn bộ dữ liệu mẫu và tên tệp ảnh |
| A8 | Thông điệp "Chờ nhân viên xác nhận" ở nơi liên quan (nếu có trong V1) | Tìm chữ |

### B. Giao diện

| # | Yêu cầu | Phương pháp kiểm tra khi có V1 |
|---|---|---|
| B1 | Đúng hướng Minimal Creative, nền kem, màu thương hiệu | So với phương án D trong `thiet-ke-hero-phuong-an-d.md` và ảnh chụp |
| B2 | Giữ đúng logo chính thức, không méo, không đổi màu, đúng vùng an toàn | So tệp logo trong demo với logo chủ dự án cung cấp |
| B3 | Bố cục gọn, dễ đọc, không chồng lấn ngoài ý muốn | Chụp màn hình ở **1440 px** và **390 px**; kiểm tra các điểm ngắt trung gian (ví dụ 768 px) |
| B4 | CTA chính nổi bật, CTA phụ không cạnh tranh | Đánh giá thứ bậc thị giác trên ảnh chụp |
| B5 | Trạng thái hover, focus, active, vô hiệu của nút và liên kết | Mở bằng trình duyệt tự động, kích hoạt từng trạng thái, chụp ảnh |
| B6 | Menu mobile: mở, đóng, điều khiển bằng bàn phím, đóng bằng phím thoát, trả focus | Thử trong trình duyệt ở 390 px |
| B7 | Tương phản chữ tối thiểu 4,5:1 (chữ thường) và 3:1 (chữ lớn), đặc biệt cam và xanh ngọc trên kem | Tính tỷ lệ từ mã màu thực tế trong CSS |
| B8 | Vùng chạm khoảng 44 × 44 px; điều hướng bàn phím; focus nhìn thấy; tôn trọng giảm chuyển động | Đo kích thước trong trình duyệt; thử bàn phím; kiểm tra truy vấn giảm chuyển động trong CSS |
| B9 | Chữ có dấu tiếng Việt hiển thị đúng; phông hỗ trợ đầy đủ | Chụp và đọc từng dấu |
| B10 | Hình mèo (nếu có) chỉ tĩnh, không chồng lấn, mang tính trang trí | Kiểm tra mã và ảnh chụp |

### C. Kỹ thuật và bàn giao

| # | Yêu cầu | Phương pháp kiểm tra khi có V1 |
|---|---|---|
| C1 | Mọi tài nguyên được tham chiếu đều tồn tại và đường dẫn đúng | Quét `src` và `href` trong HTML và CSS; kiểm tra tệp; không có tài nguyên mồ côi hoặc liên kết gãy |
| C2 | Không nhúng khóa, token, dữ liệu thật, hay gọi dịch vụ ngoài | Tìm chuỗi nghi ngờ; xem yêu cầu mạng của trang |
| C3 | Phân biệt bản demo với mã nguồn triển khai chính thức | Đọc tài liệu bàn giao; kiểm tra có ghi rõ "mã demo là tham chiếu" |
| C4 | Design token: màu, kiểu chữ, khoảng cách, bo góc, bóng được đặt tên, có giá trị, có vai trò | Đọc tài liệu bàn giao và CSS; đối chiếu hai bên có khớp nhau không |
| C5 | Hướng dẫn bàn giao cho Codex đủ: cấu trúc, trạng thái, điểm ngắt, tài nguyên, tiêu chí | Đọc `docs/ban-giao-hero-header-antigravity.md` theo mục 6 của brief |
| C6 | Danh sách SVG đã tạo được giữ lại (gồm các tệp mèo ba tư thế) | So danh sách trong tài liệu với tệp thực tế |
| C7 | Hiệu năng của ảnh Hero: kích thước tệp hợp lý, chữ hiển thị trước ảnh | Đo kích thước tệp; ghi chú **hiệu năng chính thức chỉ đo trên bản Codex dựng**, không đo trên demo |
| C8 | Không có lỗi trong bảng điều khiển của trình duyệt | Mở trang, ghi lại lỗi |
| C9 | Đối chiếu tài liệu: bản demo, tài liệu bàn giao và `thiet-ke-hero-phuong-an-d.md` khớp nhau (tên phương án, màu, thành phần) | Đọc ba nguồn và đối chiếu |

**Các điểm ngoài khả năng kiểm tra của Claude kể cả khi có V1** [Đề xuất]: hiệu năng đo thật (Core Web Vitals) và chạy trên thiết bị thật cấu hình thấp; cần Codex đo trên bản triển khai.

---

## 6. Kết luận

**Chưa đạt, ở nghĩa chưa đủ bằng chứng để phê duyệt.** Cần phân biệt rõ:

- Đây **không phải** kết luận rằng V1 có lỗi giao diện hay nghiệp vụ. Claude **chưa thấy** V1 nên không phát hiện lỗi nào.
- Đây **cũng không phải** kết luận V1 đạt. Với ba mức Đạt, Đạt có điều kiện, Chưa đạt, mức duy nhất phù hợp khi chưa có bằng chứng là **Chưa đạt (thiếu bằng chứng)**.
- Chủ dự án **chưa nên phê duyệt** V1 dựa trên báo cáo này, vì báo cáo này không xác nhận gì về V1.

**Quyết định phê duyệt thuộc chủ dự án.** Claude không phê duyệt, không sửa giao diện, không merge vào main.

## 7. Cần gì để hoàn tất rà soát

Chọn một cách để đưa V1 vào nơi Claude đọc được:

1. **Đưa tệp lên nhánh** `claude/optimistic-mccarthy-d1d15i` hoặc nhánh khác trong kho: `demo/` (gồm `index.html`, CSS, JS, ảnh, logo, SVG), `docs/ban-giao-hero-header-antigravity.md`, `thiet-ke-hero-phuong-an-d.md`. Claude sẽ mở bằng trình duyệt tự động ở 1440 px và 390 px. Tệp ở máy chủ cục bộ không tới được Claude.
2. **Đính kèm tệp** trực tiếp vào chat nếu số lượng nhỏ.
3. Nếu chỉ gửi được ảnh chụp: gửi ảnh ở **1440 px** và **390 px**, kèm ảnh các trạng thái hover, focus, active, menu mobile và mã nguồn HTML/CSS. Kiểm tra bằng ảnh sẽ **không thay thế** kiểm tra mã (tài nguyên, token, tương phản tính từ mã màu).

Khi có bằng chứng, Claude cập nhật báo cáo này: điền mục 1 đến 3, đổi mục 5 từ "Chưa xác minh" sang kết quả cụ thể kèm bằng chứng, và đưa ra kết luận Đạt, Đạt có điều kiện hoặc Chưa đạt dựa trên lỗi thực tế.
