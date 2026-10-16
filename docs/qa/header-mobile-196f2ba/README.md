# Header bổ sung logo lớn và quy tắc tên — 17/10/2026

Nhánh: `codex/hero-chinh-quy-dao`. Nền: `f1ea4903a7b4051c6ef29d5b7122e37cd28452e1`. Bản kết quả là commit riêng chứa báo cáo này; không merge nhánh khác.

Đọc và chép mẫu `shared/requirements` @ `196f2ba`, `docs/dac-ta-header-mobile-2026-10-15.md` và `docs/dac-ta-header-mobile-mau/header-mobile-mau.html`. Quy tắc tên mới thay thế yêu cầu giữ mọi từ của bản 6f0a3ee. Hai bổ sung (logo/tên) được hoàn tất cùng một commit, sau khi chủ dự án cập nhật yêu cầu trong lúc đang tích hợp.

## Thay đổi và phạm vi

- Chép CSS logo mobile **56×51px**, desktop **72×65px**, header desktop tối thiểu **96px**, các mốc thu chữ thương hiệu 500/460/420/340px từ mẫu. Nav giữ nội dung, font/line-height, màu và gap cũ; chép flex/justify-content của container nav mẫu để các nút nằm phía phải trong inner mới. Vị trí/nav container thay đổi theo kích thước header mới, không thiết kế lại link.
- Chép nguyên hàm `shortName()`: 1–3 từ giữ đủ, từ 4 từ lấy 2 từ cuối. Chép phần gán tên/avatar/title/aria-label mẫu: tên đầy đủ ở title và `aria-label="Tài khoản của ..."`; avatar là chữ đầu của từ cuối. Thêm kết nối tên đầy đủ vào tên trong dropdown sẵn có; không làm chức năng đăng nhập/đăng xuất thật.
- Gỡ hiệu lực single-line ellipsis/white-space cũ trên span tên bằng adapter header, dùng nguyên quy tắc hai dòng/overflow-wrap của mẫu. Adapter min-width/max-width cho wrapper tài khoản hiện có giúp flex co giống nút trực tiếp trong mẫu.
- Giữ dropdown/menu/keyboard của mẫu đã tích hợp; không khóa cuộn hoặc inert Hero. Khung Mobile luôn dùng các ngưỡng ứng với 390px.
- Cập nhật đúng dòng Tiêu chí nói về tên/logo/header trong index.html. Không đổi CTA, thẻ, modal, app.js/services.js/styles.css hoặc bộ mô phỏng.

**Tệp sản phẩm:** `demo/header-mobile.css`, `demo/header-mobile.js`, dòng Tiêu chí trong `demo/index.html`. Test cập nhật nguồn/mốc/output: header-auth.cjs, header-mobile.cjs, header-parity.cjs, services-header-regression.cjs, verify-header-source.cjs; thêm header-names.cjs và hero-header-height.cjs. Bổ sung thư mục bằng chứng này và link README QA.

## Số đo và kiểm đã làm

- **4.820 tổ hợp trong dải mỗi px 320–560:** 1.928 lượt khách/Khách Demo đóng/mở ở hai trang ([measurements-320-560.json](measurements-320-560.json)); thêm 2.892 lượt cho ba tên Nguyễn Văn An, Nguyễn Thị Phương Anh, Trần Nguyễn Thị Phương Anh Thư. Không đè/vượt mép/tràn ngang trong dải yêu cầu, tên hiển thị đúng, không bị cắt; title/aria-label giữ tên đầy đủ.
- Test tên có thêm 420 lượt tại các mốc rộng hơn (580 đến1500, thêm 993/1024), tổng **3.312** lượt trong [name-measurements.json](name-measurements.json). Ở mốc ngoài dải yêu cầu chỉ kết luận header nằm trong khung; xem giới hạn controller 700px bên dưới.
- Logo mobile đo **56×51px**, header mobile **71px**; logo desktop **72×65px**, header desktop **96px**. Chữ nút khách ≥13,5px; chữ tên ≥13px; nút ≥44px. Hỗ trợ tối đa hai dòng và title/aria cho tên dài bất thường đã thử riêng.
- Kiểm ranh giới tên thực tế ở320px: An → An; Khách Demo → Khách Demo; Nguyễn Văn An → Nguyễn Văn An; Nguyễn Thị Kim An → Kim An; Nguyễn Thị Phương Anh → Phương Anh; Trần Nguyễn Thị Phương Anh Thư → Anh Thư. Expected là literal độc lập, không dùng chính hàm shortName để tính expected.
- `verify-header-source.cjs`: PASS 31 quy tắc CSS và 6 hàm/handler (gồm shortName) giữ nguyên từ mẫu, ngoài selector/hook tích hợp. `header-parity.cjs`: đối chiếu computed styles mẫu tại các cạnh ngưỡng và desktop, giữ style nav so với snapshot f1ea490; [parity.json](parity.json). Không đòi vị trí/chiều rộng container nav bằng bản cũ vì header mới thay kích thước/layout.
- Header/mobile keyboard/aria/dropdown tài khoản và Services modal/CTA hồi quy theo test hiện có. [Số đo Services](services-checks.json). Sự kiện tel chỉ kiểm handler/href rồi test chặn ở window, không gọi thật.
- **Hero sau tăng header:** [hero-height-checks.json](hero-height-checks.json), kiểm 993/1024/1440 × cao900/1000: header ≥96px, Hero ngay dưới header, nội dung nằm trong Hero, không tràn ngang, khung chuyển động và tạm dừng được. Header desktop các vùng thương hiệu/nav/tác vụ không đè nhau. Ảnh [1440×900](hero-desktop-1440x900.png), [1440×1000](hero-desktop-1440x1000.png).
- `hero-orbit.js` và `hero-orbit.css` giữ nguyên blob `41fe56c306c1580379abeff9a8265f1b0ef98047` / `a534ca628e8416ebaa049fd2d4af43a2b7f62699`; verify-hero-source.py PASS. Markup Hero và phần nội dung Services không đổi, không sửa mô phỏng để bù chiều cao header.
- [Kết quả test Hero](test-results.json): responsive, reduced-motion, menu, bàn phím, CTA, 600 mẫu quỹ đạo ở1440/390, không lỗi console. Raw test khác nêu trong phần chạy lại. Không coi PASS phần kiểm này là duyệt thiết kế thay Claude/chủ dự án.

## Ảnh đóng/mở theo yêu cầu

Hai trang, mỗi khung có khách và tài khoản. Bảng thứ nhất dùng Khách Demo; bảng thứ hai dùng tên đầy đủ Nguyễn Thị Phương Anh và hiển thị Phương Anh theo quy tắc mới.

| Trang / khung | Khách đóng | Khách mở | Khách Demo đóng | Khách Demo mở |
|---|---|---|---|---|
| index / 360 | [Ảnh](index-360-guest-closed.png) | [Ảnh](index-360-guest-open.png) | [Ảnh](index-360-account-closed.png) | [Ảnh](index-360-account-open.png) |
| index / 390 | [Ảnh](index-390-guest-closed.png) | [Ảnh](index-390-guest-open.png) | [Ảnh](index-390-account-closed.png) | [Ảnh](index-390-account-open.png) |
| index / 420 | [Ảnh](index-420-guest-closed.png) | [Ảnh](index-420-guest-open.png) | [Ảnh](index-420-account-closed.png) | [Ảnh](index-420-account-open.png) |
| index / mobile-390 | [Ảnh](index-mobile-390-guest-closed.png) | [Ảnh](index-mobile-390-guest-open.png) | [Ảnh](index-mobile-390-account-closed.png) | [Ảnh](index-mobile-390-account-open.png) |
| services / 360 | [Ảnh](services-360-guest-closed.png) | [Ảnh](services-360-guest-open.png) | [Ảnh](services-360-account-closed.png) | [Ảnh](services-360-account-open.png) |
| services / 390 | [Ảnh](services-390-guest-closed.png) | [Ảnh](services-390-guest-open.png) | [Ảnh](services-390-account-closed.png) | [Ảnh](services-390-account-open.png) |
| services / 420 | [Ảnh](services-420-guest-closed.png) | [Ảnh](services-420-guest-open.png) | [Ảnh](services-420-account-closed.png) | [Ảnh](services-420-account-open.png) |
| services / mobile-390 | [Ảnh](services-mobile-390-guest-closed.png) | [Ảnh](services-mobile-390-guest-open.png) | [Ảnh](services-mobile-390-account-closed.png) | [Ảnh](services-mobile-390-account-open.png) |

| Trang / khung | Phương Anh đóng | Phương Anh mở |
|---|---|---|
| index / 320 | [Ảnh](index-320-short-name-closed.png) | [Ảnh](index-320-short-name-open.png) |
| index / 360 | [Ảnh](index-360-short-name-closed.png) | [Ảnh](index-360-short-name-open.png) |
| index / 390 | [Ảnh](index-390-short-name-closed.png) | [Ảnh](index-390-short-name-open.png) |
| index / 420 | [Ảnh](index-420-short-name-closed.png) | [Ảnh](index-420-short-name-open.png) |
| index / mobile-390 | [Ảnh](index-mobile-390-short-name-closed.png) | [Ảnh](index-mobile-390-short-name-open.png) |
| services / 320 | [Ảnh](services-320-short-name-closed.png) | [Ảnh](services-320-short-name-open.png) |
| services / 360 | [Ảnh](services-360-short-name-closed.png) | [Ảnh](services-360-short-name-open.png) |
| services / 390 | [Ảnh](services-390-short-name-closed.png) | [Ảnh](services-390-short-name-open.png) |
| services / 420 | [Ảnh](services-420-short-name-closed.png) | [Ảnh](services-420-short-name-open.png) |
| services / mobile-390 | [Ảnh](services-mobile-390-short-name-closed.png) | [Ảnh](services-mobile-390-short-name-open.png) |

Desktop tài khoản: [Trang chủ1440](index-1440-short-name-closed.png), [Services1440](services-1440-short-name-closed.png). Có thêm ảnh cận CTA và toàn trang từ hồi quy trong thư mục này. Đã xem trực tiếp các ảnh 320/390 và desktop tên Phương Anh; các ảnh còn lại được đo tự động, để Claude kiểm trực quan tiếp.

## Chưa kiểm / giới hạn

- Chưa kiểm Safari/Firefox, điện thoại Android thật, screen reader, hiệu năng phần cứng yếu, gọi/đăng nhập/đăng xuất thật hoặc chuyển tab thật (test cũ giả lập visibilitychange).
- Kiểm mở rộng phát hiện bộ điều khiển demo Services có thể rộng704px tại cửa sổ700px khi trạng thái đã đăng nhập. Đã tái hiện **giống hệt ở snapshot f1ea490** (demo-extra-actions/nút Tiêu chí), không thuộc header website và không được sửa trong nhiệm vụ này. Dải320–560 vẫn kiểm document không tràn; ở mốc rộng hơn tên test chỉ kết luận hình học header, rawJSON giữ cả scrollWidth để không che lỗi cũ.
- Giữ nguyên CTA có các điểm đã giao Claude; không gộp nhánh CTA, không đổi các phần ngoài phạm vi. Không merge, không deploy, không đẩy antigravity/design hoặc main.

## Chạy lại

Server bản tích hợp cổng3030 (node server.js). Đặt PLAYWRIGHT_MODULE/CHROME_BIN theo môi trường và QA_OUTPUT=docs/qa/header-mobile-196f2ba. Chạy: header-mobile.cjs, header-names.cjs, header-auth.cjs, hero-shell.cjs, services-header-regression.cjs, hero-orbit.cjs, hero-header-height.cjs, verify-header-source.cjs trong tests/; python tests/verify-hero-source.py. header-parity.cjs cần snapshot f1ea490 phục vụ riêng ở3034; mẫu lấy trực tiếp bằng git show196f2ba. Script đo tắt transition chỉ trong trang kiểm hình học; ảnh và test hành vi giữ hiệu ứng bình thường.
