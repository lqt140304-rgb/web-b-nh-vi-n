# QA chính: Giới thiệu v3, chuyển cảnh, Hero/Header và CTA Services — Codex, 17/10/2026

**Bản đã kiểm:** `claude/cta-dich-vu-sua` @ `86565c1f21cf04cb9009502615aa9f4cf93b2dd5`, server HTTP local riêng cổng 3035. Đối chiếu nền `1ec77ac6000e9aec0eec7edb1ef8abbb333c686d` ở 3036, mẫu Giới thiệu v3 `shared/qa-review` @ `ea269d0ca391893d26d523d6e326b43e001682a5`, header mẫu `196f2ba`, thông tin liên hệ chính thức. Chrome thật cài trên Windows, headless, phiên bản **155.0.8059.80**. Không dùng tự kiểm của Claude làm bằng chứng kiểm độc lập.

## Kết luận

**Đạt các mục Giới thiệu/chuyển cảnh và hồi quy Chrome đã liệt kê; hai lỗi CTA cũ đã được sửa đạt. Không kết luận PASS toàn trang:** còn lỗi tràn Services có sẵn tại 681–688px (FIX P2), và Safari/Android thật chưa kiểm. Không phát hiện lỗi chặn P1 trong phần đã chạy. Chưa merge bản Claude vào nhánh Codex, không deploy.

## Đã kiểm độc lập

| Hạng mục | Kết quả và bằng chứng |
|---|---|
| Giới thiệu/chuyển cảnh | **110 phép kiểm PASS**, 0 pageerror, sáu cấu hình: responsive 1440×900, 768×1024, 390×844, 320×700; Mobile 390 trong cửa sổ1280; Desktop1440 trong cửa sổ1500. Cuộn xuôi/ngược, sticky dưới controller, không tràn document, thay ảnh tĩnh sau hạ cánh, đổi lần lượt Mobile/Desktop/Responsive khi đang cuộn, giảm chuyển động và bật lại. [JSON](transition-results.json), [log](transition.log). |
| Hình học hạ cánh | Đo ở tiến độ0,999, trước lúc khung bay bị ẩn để ảnh tĩnh thay thế; đủ3 khung, sai số lớn nhất **0.487px**. Sau tiến độ1, khung bay ẩn và ảnh tĩnh hiện là đúng mẫu, không phải mất ảnh. Lần đầu harness nhầm trạng thái này; đã sửa kỳ vọng và chạy lại toàn bộ110 phép kiểm. |
| Header/mobile | `header-mobile`: **1.928** trạng thái mỗi px320–560, khách/tài khoản, đóng/mở, hai trang, keyboard/aria/account. `header-names`: **3.312** trạng thái tên và các mốc rộng hơn, tên dài/title/aria. [Số đo header](measurements-320-560.json), [tên](name-measurements.json). Chỉ dải320–560 kết luận document không tràn; các mốc lớn hơn kiểm bounds header như test hiện có. |
| Header theo mẫu | `verify-header-source`:31 rule CSS +6 handler/hàm PASS; `header-parity`:240 phép so mẫu và baseline1ec77ac PASS. HTML Services/modal giữ nguyên so nền, style nav không đổi. [Parity](parity.json). |
| Hero/header desktop | Sáu cấu hình993/1024/1440 × cao900/1000; header96, logo72×65, Hero ngay dưới header, nội dung nằm trong Hero, chạy/dừng được. Mobile preview390/tài khoản và visibilitychange giả lập PASS. |
| Hero responsive/keyboard | `hero-orbit`: giảm chuyển động320/360/390/420/768/992/1024/1280/1440, menu, pause/resume Enter/Space, CTA Hero, Services PASS. Lấy mẫu **600×100ms tại1440 và390**, 0 console error. [Kết quả](test-results.json). |
| Hộp bao quỹ đạo | Giao nhau hộp bao cặp khung tối đa khoảng20,23%/18,93% tại1440/390. Test vẫn ghi640/4958 lần giao hộp bao với vùng chữ; đây là số đo AABB, không phải diện tích ảnh thực hoặc khẳng định luôn tránh mọi chữ. Không suy ra toàn bộ tiêu chí thị giác đạt chỉ từ test lấy mẫu. Đã xem trực tiếp ảnh Hero390, Giới thiệu390 và CTA1440; các cấu hình khác chủ yếu là đo tự động. |
| Services | Bốn thẻ, ba modal nội dung, inert nền/khôi phục, Escape/trả focus, liên kết gọi/cấp cứu/đặt lịch và menu ở1440/1024/390/360 PASS. [Số đo](services-checks.json). Không gọi thật, form vẫn giữ chỗ theo phạm vi cũ. |
| CTA229cf79 | Nút cùng cao52px tại desktop/mobile;48px tablet. Họa tiết không chạm nút tại1440/1280/1101; ẩn từ1100 trở xuống và Mobile390. Đã đo thêm680/681/768/1024, tách lỗi tràn cũ bên dưới. Khung Mobile390 hiện52/52 (tự kiểm Claude từng ghi48); vẫn đạt min48 và cùng cao. Hover giữ5,5giây ổn định cả hai nút. [Đo CTA/focus](focus-cta-results.json), [preview/hover](cta-preview-hover.json). |
| Bàn phím/trợ năng Giới thiệu | Tab đến số điện thoại → Xem dịch vụ → Chỉ đường, có viền focus; Enter đến Services; Maps mở tab riêng, opener null. Cây trợ năng có region tên bệnh viện/h2, ảnh trang trí ẩn. Maps response dùng stub để kiểm ý định mở tab/URL, chưa xác minh nội dung trang đích; chưa dùng screen reader thật. [Kết quả](about-links-aria.json). |
| Nội dung | Địa chỉ, 24/24 chỉ cho cấp cứu, số0973555105/tel và URL Maps khớp docs/thong-tin-lien-he.md. Ảnh/đoạn giới thiệu vẫn là chỗ chờ được bàn giao, không coi là nội dung công khai hoàn chỉnh. |

## FIX P2 có sẵn: Services tràn tại điểm chuyển tablet

- Cách tái hiện: Chrome, `services.html?mode=responsive`, trạng thái khách, cửa sổ681px. Document scrollWidth688; site-stage/header/Services bị kéo rộng khoảng688,219px. Tại688px, scrollWidth692. Tại680 và700px không tái hiện trong phép đo này.
- **Đối chiếu bản nền1ec77ac:** cùng681→688 và688→692, y hệt bản86565c1. Vì vậy không quy lỗi cho Giới thiệu hoặc sửa CTA mới. Đây là tràn vùng website, không chỉ viền focus; chưa kết luận chính xác rule gốc cần sửa từ số đo này. Kiểm các rule tablet Services/CTA tại demo/styles.css:2288 trước khi sửa.
- Bằng chứng: [JSON hai bản](overflow-baseline.json), [bản mới681](services-overflow-3035-681.png), [nền681](services-overflow-3036-681.png).
- Claude cần sửa rồi bàn giao SHA; đạt khi hai trang không tràn ở dải chuyển680–700px, cả khách/tài khoản, và CTA/Header không bị co đè. Codex sẽ kiểm lại. Không sửa sản phẩm trong lượt QA này.

## Focus header-auth và cập nhật test

- Lỗi viền focus mà Claude báo **chưa tái hiện** trên Chrome phiên bản này: tại320px nút tài khoản/menu ở cả hai trang và cả86565c1/1ec77ac đều focus-visible solid3px ngay sau Tab/Shift+Tab và sau450ms. Chạy lại header-auth đầy đủ các mốc hiện có PASS sau cập nhật phép kiểm stage. Không kết luận lỗi cũ đã được sửa trên mọi môi trường. [Đo focus hai bản](focus-cta-results.json), [log từng mốc](auth-diagnostic.log).
- Hai test gốc header-auth/hero-orbit ban đầu dừng vì so scrollWidth bên trong stage với viewport. v3 cho khung bay ra rồi cắt bằng overflow:clip; document không tràn. Cập nhật chỉ chấp nhận scroll nội bộ dư khi **overflowX=clip và chính khung nằm trong viewport**; giữ assertion document và bounds các nút. Chạy lại hai test PASS. Giữ log thất bại lần đầu cùng log rerun để đối chiếu.
- `verify-hero-source.py` cập nhật nguồn sang v3 @ea269d0 đầy đủSHA; chỉ cho phép đổi selector, header ngoài, chừa thanh controller sticky và hook resize được nêu trong bàn giao. So toàn bộ phần mô phỏng/chuyển cảnh, không chỉ đổi hash để bỏ qua khác biệt.
- `services-header-regression.cjs` sửa một dòng dùng QA_OUTPUT và tạo outputfolder, tránh ghi đè bằng chứng header cũ. Đã chạy lại PASS với output riêng.
- Commit test riêng trên nhánh Claude: **ecd8869a30d266288da0c25ad73c82c6b8a7ecf3**, chỉ4 tệp tests/. Không sửa demo, không merge main. HEAD nhánh còn có cập nhật tài liệu vai trò và commit chữ trong Tiêu chí b2d20d6 sau bản86565c1; khác demo chỉ bỏ nhãn tự đánh giá Antigravity, chưa coi đó là một lượt QA giao diện độc lập mới.

## Hiệu năng và chưa kiểm

- Đã chạy cuộn liên tục4giây trong Chrome mobile mô phỏng390, cảm ứng/DPR2; CPU bình thường và giảm tốc4× bằng CDP. Thống kê rAF và long task có trong transition-results.json; cả hai không thấy gap>50ms hoặc long task trong cửa sổ đo. Số liệu chỉ mô tả máy Windows/headless này, không phải benchmark Android, GPU hoặc tốc độ khung hình bảo đảm trên thiết bị thật.
- **CHƯA KIỂM:** Safari/macOS/iOS, Android thật/tầm trung, Firefox/Edge, screen reader thật, bàn phím điện thoại, cuộn bằng thao tác ngón tay thật, gọi điện/đăng nhập/đăng xuất thật, Maps đích thật, hiệu năng pin/nhiệt/GPU, chuyển tab thật. Phiên hiện tại là Windows, không có Mac/iPhone/Android kết nối; WebKit cũng chưa cài. Không dùng viewport hoặc CPU throttle thay kết quả thiết bị thật.
- Theo ưu tiên chủ dự án, Chrome kiểm trước; các môi trường khác để kiểm sau. PASS phần đã kiểm không thay quyết định duyệt của chủ dự án.

## Ảnh và chạy lại

- [Hero1440](hero-1440.png), [Hero390](hero-390.png), [Giới thiệu1440 gần hạ cánh](introduction-pc-landed.png), [390](introduction-mobile-landed.png), [Mobile390 preview](introduction-preview-landed.png), [giảm chuyển động](introduction-reduced-mobile.png).
- [CTA1440](cta-extra-1440.png), [768](cta-extra-768.png), [390](cta-extra-390.png), [Mobile390 preview](cta-preview-mobile390.png). Ảnh toàn trang có sticky nên dùng số đo JSON để đối chiếu vị trí trong viewport, không suy vị trí chỉ từ ảnh ghép toàn trang.
- [Tổng hợp trạng thái test sau chạy lại](validation-summary.json). Các script đo độc lập ở scripts/; runner run-suite.cjs dùng QA_TREE trỏ checkout bản đã kiểm, ONLY để chọn test nếu cần. Đặt PLAYWRIGHT_MODULE/CHROME_BIN theo máy và QA_OUTPUT tới thư mục output riêng. Server86565c1 ở3035, baseline1ec77ac ở3036. Các tests/ của repo mặc định3030: chạy ứng với cùng bản mã ở3030 hoặc thay cổng chỉ trong runner. Mẫu v3/header cần có git objects ea269d0/196f2ba.
- Header parity dùng baseline1ec77ac thay vìf1ea490 (đều đã tích hợp header); adapter cổng và metadata nằm ở runner. Không ghi đè bộ bằng chứng cũ. Báo cáo tự kiểm Claude vẫn giữ riêng.
