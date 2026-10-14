# QA Services V1 (Claude, lượt đầu)

**Ngày:** 14/10/2026 · **Đối tượng:** nhánh `antigravity/services-v1`, commit `a5a6a7d` (tách từ Hero `64b059e`) · **Người rà soát:** Claude (lượt đầu dùng Opus theo [quy trình QA](quy-trinh-qa-ui-ux.md)) · Không sửa nhánh Antigravity, không duyệt thay chủ dự án, không merge main.

**Phạm vi đã kiểm:** đọc `services.html`, `services.js`, phần CSS mới, `server.js`, tài liệu bàn giao; đo bằng Chromium + Playwright ở 1440, 1280, 1024, 900, 768, 681, 600, 390, 360 px; bàn phím, cửa sổ chi tiết, menu điện thoại, lỗi JavaScript, tải tài nguyên ngoài; xem từng ảnh gốc. **Chưa kiểm:** Safari và thiết bị thật, trình đọc màn hình thật, hiệu năng mạng chậm (NEED CODEX nếu cần).

## Kết luận: **FIX** — chưa nên trình duyệt

Bố cục, responsive và bàn phím phần lớn đạt. Nhưng có 4 lỗi mức Cao: ảnh là mảnh cắt từ ảnh mẫu, nội dung chưa xác nhận trong cửa sổ chi tiết, thẻ Cấp cứu dẫn khách tới "gửi yêu cầu" (sai nghiệp vụ khẩn cấp), và trang không có đường dẫn đặt lịch hoạt động.

## A. PASS

| Mục | Bằng chứng |
|---|---|
| Bốn thẻ, đúng bốn dịch vụ, không có giá, không có chữ "24/7" | Đọc HTML và JS |
| Desktop 1440/1280: 4 thẻ một hàng, cao bằng nhau (484 px), không tràn | Ảnh 01 |
| 681–1024: 2×2; ≤ 680: một cột; 390 và 360 không tràn ngang, tiêu đề thẻ một dòng | Số đo `scrollWidth` = chiều rộng cửa sổ |
| Nút "Tìm hiểu thêm" cao 42 px (desktop) và 46 px (mobile), rộng ≥ 224 px | Đo |
| Tương phản: H1 13,96:1; mô tả 6,81:1; chữ thẻ `#5E5362` trên trắng 7,3:1; eyebrow 6,15:1 | Tính theo WCAG |
| Viền focus tím đậm 3 px kèm vòng trắng trên mọi nút; thứ tự Tab hợp lý | Đo 20 lần Tab |
| Cửa sổ chi tiết: tiêu điểm vào nút đóng, Tab quay vòng, Escape đóng và trả về đúng nút đã bấm | Đo |
| Menu điện thoại: Enter mở, tiêu điểm vào nút đóng, nội dung trang bị khóa (`inert` đúng id `services-main`, khác lỗi A1 của Hero), Escape trả tiêu điểm | Đo |
| Không có lỗi JavaScript khi đổi chế độ xem và trạng thái đăng nhập | Console sạch |

## B. FIX

| # | Ưu tiên | Lỗi | Bằng chứng | Đạt khi |
|---|---|---|---|---|
| F1 | **Cao** | **Bốn ảnh dịch vụ là mảnh cắt từ một ảnh mẫu**, chứa sẵn: mép vòm của thẻ bên cạnh (Nội trú, Cấp cứu có cung vòm thẻ trước ở mép trái), nửa vòng tròn icon nằm ở đáy ảnh (Nội trú thấy ngôi nhà tím, Cấp cứu thấy mảnh icon tím nằm sau huy hiệu CSS), mảnh hồng ở thẻ Grooming. Ảnh chỉ 400×380 px: ở 1024 px bị phóng to 1,14 lần; trên màn hình độ nét cao (×2) đều mờ | Ảnh 02, 01 (nhìn đáy ảnh thẻ 3 và 4) | Ảnh sạch, không có mảnh thẻ khác, không có icon nướng sẵn, rộng ≥ 2 lần khung hiển thị lớn nhất (≥ 912 px). Nguồn và bản quyền ghi rõ (như yêu cầu ở Hero) |
| F2 | **Cao** | **Nội dung chưa xác nhận trong cửa sổ chi tiết**, trình bày như sự thật: "chẩn đoán hình ảnh chuyên sâu", "vắt tuyến hôi", "phân khu cách ly riêng giữa chó và mèo", "đội ngũ điều dưỡng… ghi chép nhật ký hàng ngày", "khử trùng thường xuyên", "trang thiết bị… hiện đại", "thở oxy", "chuyển dạ khó", "thú cảnh nhỏ", "**Đội ngũ y tế luôn trong tư thế sẵn sàng**" (ngầm hứa trực liên tục, trái tinh thần không cam kết 24/7). Trên thẻ: "Điều trị hiệu quả", "Chẩn đoán chuyên sâu", "Hỗ trợ chuyên sâu" là lời hứa kết quả; H1 "Dịch vụ toàn diện" | Ảnh 05; `services.js` dòng 42–81 | Thay bằng chữ giữ chỗ có nhãn "[Nội dung mẫu — chờ bệnh viện xác nhận]" hoặc nội dung chủ dự án cung cấp; bỏ lời hứa kết quả và sẵn sàng liên tục |
| F3 | **Cao** | **Cấp cứu dẫn tới "Gửi yêu cầu đặt hẹn"**. Theo nghiệp vụ đã chốt, yêu cầu chỉ được nhân viên gọi lại sau, không phù hợp ca khẩn cấp; khách có thể chờ trong khi thú cưng nguy kịch | Ảnh 05 | Thẻ và cửa sổ Cấp cứu **không** có nút gửi yêu cầu; thay bằng chỉ dẫn "gọi trực tiếp [số điện thoại — chờ xác nhận]" và giờ tiếp nhận do chủ dự án cung cấp (xem câu hỏi Q1) |
| F4 | **Cao** | **Không có đường đặt lịch hoạt động**: trang không có nút "Gửi yêu cầu đặt lịch" ngoài cửa sổ; nút trong cửa sổ ghi "Gửi yêu cầu **đặt hẹn**" (khác chữ đã chốt) và trỏ tới `index.html#dat-lich`, đích không tồn tại (Hero dùng `#form-dat-lich`) | Đo `href` | Có ít nhất một nút "Gửi yêu cầu đặt lịch" trên trang (ví dụ dưới lưới thẻ) kèm dòng "Nhân viên sẽ liên hệ để xác nhận" như Hero; mọi nút dùng đúng chữ và cùng một đích |
| F5 | Trung bình | **Menu điện thoại khác Hero** dù tài liệu ghi "giữ nguyên Header": mất logo, mất nút "Gửi yêu cầu đặt lịch", mất ghi chú "không cần tài khoản", đảo thứ tự Đăng ký/Đăng nhập, nhãn khác ("Dịch vụ" so với "Dịch vụ khám & điều trị"), thêm khẩu hiệu chưa xác nhận "Chăm sóc tận tâm bằng tình yêu thương loài vật" | Ảnh 04 so với ảnh 19 của Hero | Menu điện thoại giống hệt Hero (trừ mục đang chọn) |
| F6 | Trung bình | **Từ Hero không sang được trang Dịch vụ**: menu "Dịch vụ" và nút "Xem dịch vụ" của `index.html` vẫn trỏ `#dich-vu` (không có đích) | Đo `href` trên `index.html` | Cả hai trỏ `services.html` |
| F7 | Thấp | Tải Google Fonts **hai lần** (thẻ `<link>` trong `services.html` và `@import` trong `styles.css`), kèm phông Caveat (chữ viết tay) không thấy dùng trên trang | Đo yêu cầu mạng | Một nguồn phông duy nhất; bỏ phông không dùng |
| F8 | Thấp | Icon Cấp cứu là **cái chuông** (tài liệu ghi còi báo khẩn), dễ hiểu là "thông báo" | Ảnh 01 | Icon phù hợp khẩn cấp, hoặc giữ nếu chủ dự án đồng ý |
| F9 | Thấp | `server.js` cho phép đọc tệp ngoài thư mục `demo` (đã thử `/../server.js` trả về mã nguồn). Chỉ chạy ở 127.0.0.1 nên rủi ro thấp | curl `--path-as-is` | Ghi chú "chỉ dùng trên máy cá nhân"; **Codex không tái sử dụng** tệp này |

## C. Câu hỏi cho chủ dự án (chặn F2, F3)

- **Q1:** Bệnh viện có nhận cấp cứu không; giờ nào; số điện thoại cấp cứu? Nếu chưa có, đề xuất ẩn thẻ Cấp cứu hoặc chỉ ghi "Vui lòng gọi trực tiếp" với số chờ xác nhận.
- **Q2:** Nội dung chi tiết từng dịch vụ do ai cung cấp? Đến khi có, Claude đề xuất dùng chữ giữ chỗ có nhãn (không đưa lên bản công khai).
- **Q3:** Có giữ chữ "Grooming" (tiếng Anh) hay đổi "Tắm và cắt tỉa lông"?

## D. Ý kiến thẩm mỹ (không bắt buộc)

- Bố cục bốn thẻ vòm nhất quán với Hero, gọn và dễ đọc.
- Họa tiết cong và dấu chân ở đầu trang hơi rời rạc so với Hero (ở Hero chúng bám vào khung ảnh).

## E. Đính chính báo cáo Hero bản 3

Bản 3 của Hero ghi "không còn tải tài nguyên ngoài". **Sai**: `styles.css` của Hero vẫn `@import` Google Fonts (dòng 9). Lần đo trước không bắt được vì kịch bản đo của Claude thiếu bộ đếm yêu cầu mạng. Mục này không đổi kết luận Hero nhưng cần biết khi Codex làm thật (nên tự lưu trữ phông).

## F. NEED CODEX

Không có mục bắt buộc. Tùy chọn: Safari và iPhone thật, chạy axe tự động sau khi sửa F1–F5.

Ảnh bằng chứng: `ra-soat-services-v1-bang-chung/` (01 đến 05).
