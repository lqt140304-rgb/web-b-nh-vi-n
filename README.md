# Website Bệnh viện Thú y Lê Sơn

> **Quyết định hiện hành — 17/10/2026:** Antigravity đã bị loại khỏi kế hoạch. Claude thay thế hoàn toàn Antigravity về thiết kế, bản mẫu, triển khai giao diện và bàn giao; Codex tích hợp và kiểm chéo. Các phân công Antigravity trong tài liệu cũ chỉ còn là lịch sử. [Quyết định chính thức](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/claude-thay-the-antigravity-2026-10-17.md).

## Các nhánh làm việc hiện hành

| Nhánh | Nội dung | Người cập nhật |
|---|---|---|
| [shared/requirements](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/shared/requirements) | Yêu cầu, quyết định chủ dự án, thiết kế tham khảo và hướng dẫn triển khai | Claude + Codex |
| [shared/qa-review](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/shared/qa-review) | Báo cáo QA, rà soát chéo, bằng chứng và kết luận PASS/FIX/chưa kiểm | Claude + Codex |
| `claude/*` được giao, hiện có [claude/cta-dich-vu-sua](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/claude/cta-dich-vu-sua) | Claude thiết kế, dựng mẫu, triển khai giao diện và bàn giao theo yêu cầu được duyệt | Claude |
| [codex/hero-chinh-quy-dao](https://github.com/lqt140304-rgb/web-b-nh-vi-n/tree/codex/hero-chinh-quy-dao) | Tích hợp demo hiện hành, kiểm kỹ thuật và hồi quy | Codex |

### Điểm vào tài liệu

- [Yêu cầu đã chốt](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/README-shared.md)
- [QA và rà soát](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/README-shared.md)
- [Danh mục giao diện đã tích hợp](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/codex/hero-chinh-quy-dao/design/README.md)
- [Thiết kế Hero / Header](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/codex/hero-chinh-quy-dao/design/hero/README.md)
- [Thiết kế Services](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/codex/hero-chinh-quy-dao/design/services/README.md)

## Quy trình chung

1. Claude/Codex ghi yêu cầu và quyết định được chủ dự án chốt ở shared/requirements.
2. Claude nhận toàn bộ phần thiết kế, bản mẫu và triển khai giao diện trước đây giao Antigravity; làm trên nhánh Claude được giao, bám yêu cầu và thiết kế chủ dự án đã duyệt.
3. Claude bàn giao SHA đầy đủ, tệp đổi, ảnh desktop/mobile và kết quả tự kiểm. Codex tích hợp khi được giao và kiểm chéo; không ghi đè nhánh của nhau.
4. Claude/Codex kiểm đúng commit, đăng QA ở shared/qa-review; ghi rõ đã kiểm, chưa kiểm và việc cần sửa.
5. Chủ dự án duyệt; kết quả QA không tự thay thế quyết định của chủ dự án.

Trước mỗi lần cập nhật đọc HEAD mới nhất để tránh ghi đè thay đổi của người khác. Chỉ đưa đề xuất QA sang nhánh requirements khi đã được chủ dự án chốt.

## Quy tắc kiểm tra và rà soát QA

### Vai trò và phạm vi

- Claude phụ trách toàn bộ thiết kế và triển khai giao diện thay Antigravity, sửa theo yêu cầu đã chốt và bàn giao commit/ảnh/bằng chứng tự kiểm. Antigravity không còn nhiệm vụ hoặc quyền quyết định trong kế hoạch.
- Claude tự kiểm phần mình thực hiện; Codex kiểm chéo độc lập phần được giao. Không gọi việc tự kiểm hoặc kết quả của người khác là QA độc lập. Chủ dự án duyệt cuối.
- Kiểm theo từng phần và giai đoạn. Không ép làm backend, trang chưa triển khai hoặc thay ảnh tạm nếu đã được chủ dự án cho phép hoãn.

### Trước khi kiểm

1. Đọc yêu cầu mới nhất trên shared/requirements, ảnh mẫu đã chốt và các quyết định thay thế yêu cầu cũ.
2. Ghi tên nhánh, SHA commit cụ thể và phiên bản demo đang chạy. Nếu chưa đối chiếu được bản local với commit, ghi rõ; không suy ra local là bản mới nhất.
3. Đọc thay đổi so với bản QA trước, xác định các trang/tệp dùng chung bị ảnh hưởng. CSS, header hoặc tài nguyên chung đổi thì kiểm cả Hero và Services.
4. Khi chủ dự án yêu cầu giống ảnh mẫu, dùng ảnh làm chuẩn vị trí/tỷ lệ/màu/trang trí; vẫn giữ logo, ảnh gốc và nội dung được xác nhận trong repo. Không lấy nội dung do AI sinh làm thông tin bệnh viện.

### Kiểm tra bắt buộc trong phần bị ảnh hưởng

- **Giao diện:** desktop 1440, 1280, 1024 px; mobile 390, 360 px. Kiểm thêm gần điểm chuyển bố cục khi CSS liên quan thay đổi. Không tràn ngang, đè chữ/ảnh/nút; icon rõ ở kích thước thật, không chỉ ở ảnh phóng to.
- **Nút và liên kết:** bấm thử và quan sát kết quả, không chỉ đọc href. Kiểm điểm đến có tồn tại. Nút tel giữ đúng số, không bị preventDefault hoặc mở nhầm cửa sổ. Mở trình gọi trên thiết bị thật là kiểm riêng; chưa thử thì ghi chưa xác minh.
- **Cửa sổ/menu:** tiêu điểm vào đúng chỗ, Tab/Shift+Tab nằm trong vùng mở, Escape đóng, trả tiêu điểm về nút mở; nền có inert và được khôi phục. Đọc aria-modal không thay thế kiểm hành vi.
- **Tài khoản/header:** trạng thái khách và đăng nhập, tên dài, menu desktop/mobile trong phạm vi thay đổi.
- **Hiệu ứng:** quan sát khi tải, rê chuột giữ trên 5 giây và cảm ứng/giảm chuyển động khi liên quan. Không rung/nhấp nháy lặp nếu chủ dự án đã cấm; reduced-motion không thay thế yêu cầu đó.
- **Nội dung:** số điện thoại/địa chỉ/tên dịch vụ đúng quyết định; không tự thêm khả năng chuyên môn, thiết bị, lời hứa kết quả hoặc giờ hoạt động chưa xác nhận.
- **Tài liệu:** nhánh, tiêu chí, phiên bản và ảnh bàn giao khớp mã hiện tại; đánh dấu nội dung lịch sử đã bị thay thế để tránh yêu cầu làm lại thiết kế cũ.
- **Lỗi chạy:** ghi lỗi JavaScript, tài nguyên không tải và ảnh hưởng thực tế. Test mức phù hợp, không chạy lại toàn bộ mọi thứ khi chỉ đổi tài liệu.

### Cách kết luận

| Nhãn | Ý nghĩa |
|---|---|
| PASS | Đạt mục cụ thể bằng bằng chứng đã kiểm |
| FIX | Có việc phải sửa; ghi tình huống, vị trí và điều kiện đạt |
| CHƯA KIỂM | Chưa đủ bằng chứng hoặc môi trường không hỗ trợ |
| HOÃN ĐÃ CHỐT | Chưa triển khai nhưng chủ dự án cho phép hoãn, có ghi nơi cần hoàn thiện |
| Ý KIẾN | Lựa chọn thẩm mỹ ngoài tiêu chí bắt buộc, không tự biến thành yêu cầu |

Không kết luận PASS toàn trang khi còn FIX bắt buộc; dùng “đạt các mục X, còn FIX Y”. PASS kỹ thuật không phải chủ dự án duyệt giao diện, cũng không phải được phép xuất bản/merge.

P1: sai luồng quan trọng, nút cấp cứu hỏng, sai thông tin liên hệ hoặc lỗi gây hậu quả trực tiếp. P2: sai yêu cầu đã chốt, giao diện/trợ năng bị hỏng. P3: tài liệu hoặc hoàn thiện nhỏ. Việc bắt buộc vẫn phải sửa dù xếp ưu tiên thấp; ưu tiên chỉ quyết định thứ tự.

Ảnh tạm, nội dung giữ chỗ, điểm đến form chưa làm được hoãn khi đã chốt và ghi rõ; không gọi là tính năng hoạt động hoàn chỉnh. Không lặp lại lỗi cũ đã sửa hoặc phần đã được chủ dự án chấp nhận chỉ để kéo dài vòng QA.

### Báo cáo và kiểm lại

- Đăng trên shared/qa-review: người kiểm, ngày, nhánh/commit, phạm vi, bằng chứng, phát hiện và điều kiện đạt, phần chưa kiểm/được hoãn.
- Phân biệt rõ: tự tái hiện bằng trình duyệt, kiểm logic bằng mã, xem ảnh bàn giao, hay trích số đo của QA trước. Safari/điện thoại/trình đọc màn hình thật chưa thử phải ghi đúng.
- Sau sửa, kiểm lại các lỗi và phần dùng chung bị ảnh hưởng. Chỉ mở rộng khi có thay đổi mới hoặc bằng chứng lỗi mới.
- Yêu cầu triển khai đã được chủ dự án chốt ghi ở shared/requirements, có link từ QA. Không sửa thiết kế hoặc merge chỉ vì đang rà soát.

## Cấu trúc nhánh thiết kế

- design/hero/: mục riêng cho Hero và Header, liên kết mã/tài nguyên/bàn giao.
- design/services/: mục riêng cho trang Services, liên kết mã/tài nguyên/bàn giao.
- demo/index.html, demo/app.js: demo Hero.
- demo/services.html, demo/services.js: demo Services.
- demo/styles.css và demo/assets/: phần dùng chung; thay đổi phải kiểm ảnh hưởng tới cả hai trang.

Mục mới tạo thư mục design/<ten-muc>/ và thêm vào design/README.md. Không sao chép CSS/ảnh dùng chung chỉ để tách mục.

## Chạy demo cục bộ

Trên nhánh codex/hero-chinh-quy-dao: chạy `node server.js`, mở http://127.0.0.1:3030/index.html hoặc http://127.0.0.1:3030/services.html.
server.js chỉ phục vụ demo trên máy cá nhân, không dùng cho vận hành công khai.

## Nhánh cũ

antigravity/design, antigravity/hero-v1, antigravity/services-v1 và claude/optimistic-mccarthy-d1d15i chỉ giữ lịch sử; không nhận việc mới. Các nhánh codex/qa-services-v1 và codex/review-claude-qa nếu còn bản lưu cũng chỉ dùng tra cứu. Từ 17/10/2026 dùng phân công và các nhánh hiện hành ở trên. Không xóa hoặc merge code lên nhánh mặc định trong việc tổ chức này.

Nhánh thiết kế chung khởi tạo từ Services acc18e7, bổ sung Hero a47f4e2 (dòng tiêu chí mới); mã app.js và styles.css ở hai nhánh nguồn giống nhau tại thời điểm gom.
