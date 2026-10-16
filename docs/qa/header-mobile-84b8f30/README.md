# Tích hợp header mobile đã duyệt — 17/10/2026

Nhánh: `codex/hero-chinh-quy-dao`. Nền: `0873d129fdfbdf87c082c09945548a26e3553902`. Phiên bản kết quả là commit riêng chứa báo cáo này, không gộp nhánh CTA hoặc thay đổi ngoài header/menu.

Đặc tả: `shared/requirements` @ `84b8f30`, `docs/dac-ta-header-mobile-2026-10-15.md`; chuẩn mã là `docs/dac-ta-header-mobile-mau/header-mobile-mau.html` trong cùng commit.

## Đã tích hợp

- Chép CSS và JS bản mẫu thành `demo/header-mobile.css`, `demo/header-mobile.js`; giữ giá trị màu, cỡ, khoảng cách và logic setOpen/bốn handler của mẫu. Chỉ thêm phạm vi selector, ngưỡng áp dụng ≤992px, nhánh preview cố định 390px và các điểm nối tài khoản/bộ điều khiển xem thử.
- Hai trang thêm lớp/khối inner theo mẫu, giữ liên kết và dropdown tài khoản có sẵn. Bỏ DOM drawer/lớp phủ và các handler khóa cuộn/inert/focus trap của drawer. Menu mới không khóa cuộn, không đặt Hero/Services thành inert.
- Trạng thái tài khoản có sẵn đồng bộ lớp is-user ở header để đổi hàng cuối menu thành Đăng xuất; link vẫn là `#dang-xuat`. Bấm nút tài khoản đóng menu điều hướng trước, dropdown tài khoản vẫn hoạt động.
- Bỏ các override header mobile cũ trong styles.css để không đè cỡ chữ/nút mẫu. Giữ định dạng desktop và CSS các phần khác. Các token vốn kế thừa body của mẫu được giới hạn trong header, không áp dụng nền/body của mẫu lên Hero.
- Đóng menu khi đổi chế độ xem thử, chuyển sang desktop hoặc đổi trạng thái tài khoản. Query mẫu `?user=1`, `?open=1` được nối với trạng thái demo; giữ alias lịch sử `?drawer=open` nhưng mở dropdown mới.
- Cập nhật dòng Tiêu chí nhắc header cũ trong index.html; không đổi các modal hoặc nội dung dịch vụ.

## Tệp đổi

Mã: `demo/index.html`, `demo/services.html`, `demo/app.js`, `demo/services.js`, `demo/styles.css`; thêm `demo/header-mobile.css`, `demo/header-mobile.js`.

Test: cập nhật `tests/header-auth.cjs` (cho phép thu thương hiệu đúng mẫu), `tests/hero-orbit.cjs` (dropdown thay drawer); thêm `tests/header-mobile.cjs`, `tests/header-parity.cjs`, `tests/services-header-regression.cjs`, `tests/verify-header-source.cjs`.

Tài liệu/bằng chứng: README QA liên kết tới thư mục này, ảnh và JSON tại đây. Không đổi `hero-orbit.js`, `hero-orbit.css`, markup Hero, CTA, thẻ dịch vụ hoặc mã modal. Không nhận nhánh `claude/cta-dich-vu-sua` trong commit header.

## Kiểm đã thực hiện

1. **Đo từng px 320–560: PASS 1.928 tổ hợp** (241 chiều rộng × hai trang × khách/tài khoản × đóng/mở). Header không đè/vượt mép/tràn ngang; vùng logo cách nút ít nhất **6px**; header ít nhất **68px**; nút ít nhất **44px**; chữ nút khách ít nhất **13,5px**. Menu mở không đổi vị trí Hero/Services; hộp trong khung, hàng cuối theo đúng tài khoản; không khóa cuộn/inert nội dung. [Toàn bộ số đo](measurements-320-560.json).
2. **Hành vi/aria: PASS** mở/đóng bằng nút, Enter/Space, Tab/Shift+Tab, Escape trả focus về nút mở, bấm ngoài, liên kết đóng menu, aria-controls/aria-expanded/nhãn, focus 3px cách 3px; đóng khi đổi tài khoản/chế độ. Dòng trang hiện tại đúng ở cả hai trang. Dropdown tài khoản cũ mở/đóng, Đăng xuất là đích giữ chỗ đúng yêu cầu. Menu đóng hidden và không có drawer/overlay trong DOM. Không lỗi console trong test header.
3. **Giống mẫu/desktop: PASS 312 phép so sánh computed style** tại các cạnh 320/340/341/360/375/376/390/410/411/420/500/501/560/992; desktop hai trang, khách/tài khoản ở 993/1024/1440 so với snapshot 0873d12, cùng vị trí/kích thước/style. [Kết quả](parity.json). Dung sai <0,1px cho làm tròn kích thước chữ của mẫu; bỏ font mặc định không hiển thị trên nút chỉ có SVG, kích thước wrapper header-actions và chiều cao wrapper chữ thương hiệu; vẫn kiểm kiểu chữ hiển thị và kích thước toàn phần thương hiệu/nút. Mẫu nguồn chạy riêng, không dùng CSS tích hợp để tạo expected.
4. **Chép nguồn: PASS** `tests/verify-header-source.cjs` xác nhận 30 quy tắc CSS header và 5 hàm/handler gốc nguyên giá trị/nội dung, ngoài phạm vi selector và các hook tích hợp. Các mốc breakpoint mẫu được đối chiếu trong parity test.
5. **Hồi quy: PASS** `tests/header-auth.cjs`, `tests/hero-shell.cjs`, `tests/hero-orbit.cjs` (responsive, reduced-motion, bàn phím, CTA, Services, lấy mẫu quỹ đạo 60 giây ở 1440/390). [Kết quả Hero](test-results.json). Header-only nên không đổi thông số quỹ đạo; `tests/verify-hero-source.py` vẫn PASS.
6. **Services: PASS phần đã kiểm** ở 1440/1024/390/360: bốn thẻ, nội dung/href CTA, ba modal, inert của modal và trả focus, nút cấp cứu, menu mới. [Kết quả](services-checks.json). Sự kiện tel được ghi nhận qua handler của trang rồi test chặn ở window, không gọi thật.
7. Đối chiếu source: hai file orbit giữ hash blob `41fe56c306c1580379abeff9a8265f1b0ef98047` / `a534ca628e8416ebaa049fd2d4af43a2b7f62699`; markup Hero và đoạn CSS CTA giữ nguyên. Đoạn mã modal trong app.js/services.js giữ nguyên, HTML Services main/modal so với baseline cũng giữ nguyên.

## Ảnh yêu cầu (32 ảnh)

Mỗi hàng có đủ menu đóng/mở và khách/tài khoản. Khung Mobile 390 chụp trong cửa sổ 1000px, không phải chỉ đổi viewport thật.

| Trang/khung | Khách đóng | Khách mở | Tài khoản đóng | Tài khoản mở |
|---|---|---|---|---|
| Trang chủ / 360 | [Ảnh](index-360-guest-closed.png) | [Ảnh](index-360-guest-open.png) | [Ảnh](index-360-account-closed.png) | [Ảnh](index-360-account-open.png) |
| Trang chủ / 390 | [Ảnh](index-390-guest-closed.png) | [Ảnh](index-390-guest-open.png) | [Ảnh](index-390-account-closed.png) | [Ảnh](index-390-account-open.png) |
| Trang chủ / 420 | [Ảnh](index-420-guest-closed.png) | [Ảnh](index-420-guest-open.png) | [Ảnh](index-420-account-closed.png) | [Ảnh](index-420-account-open.png) |
| Trang chủ / mobile-390 | [Ảnh](index-mobile-390-guest-closed.png) | [Ảnh](index-mobile-390-guest-open.png) | [Ảnh](index-mobile-390-account-closed.png) | [Ảnh](index-mobile-390-account-open.png) |
| Dịch vụ / 360 | [Ảnh](services-360-guest-closed.png) | [Ảnh](services-360-guest-open.png) | [Ảnh](services-360-account-closed.png) | [Ảnh](services-360-account-open.png) |
| Dịch vụ / 390 | [Ảnh](services-390-guest-closed.png) | [Ảnh](services-390-guest-open.png) | [Ảnh](services-390-account-closed.png) | [Ảnh](services-390-account-open.png) |
| Dịch vụ / 420 | [Ảnh](services-420-guest-closed.png) | [Ảnh](services-420-guest-open.png) | [Ảnh](services-420-account-closed.png) | [Ảnh](services-420-account-open.png) |
| Dịch vụ / mobile-390 | [Ảnh](services-mobile-390-guest-closed.png) | [Ảnh](services-mobile-390-guest-open.png) | [Ảnh](services-mobile-390-account-closed.png) | [Ảnh](services-mobile-390-account-open.png) |

Đã xem trực tiếp ảnh mở 360/390/420 khách và Mobile 390 tài khoản; các ảnh còn lại được kiểm hình học/trạng thái tự động, không gọi đó là QA trực quan độc lập của Claude.

## Chưa kiểm và giới hạn

Safari/WebKit, Firefox, thiết bị thật, screen reader, gọi/đăng nhập/đăng xuất thật; hiệu năng Android yếu và chuyển tab thật (test visibilitychange giả lập). Không sửa hai điểm CTA kế thừa từ Antigravity hoặc triển khai nhánh sửa CTA của Claude. Không tự kết luận toàn bộ trang được duyệt; Claude kiểm lại đúng commit header này. Không merge, không deploy, không đẩy antigravity/design hoặc main.

## Chạy lại

Chạy `node server.js` tại gốc repo. Cần Playwright/Chromium có sẵn, không thêm dependency sản phẩm; tùy môi trường đặt `PLAYWRIGHT_MODULE`, `CHROME_BIN`; đặt `QA_OUTPUT=docs/qa/header-mobile-84b8f30`.

Chạy `node tests/header-mobile.cjs`, `node tests/header-auth.cjs`, `node tests/hero-shell.cjs`, `node tests/hero-orbit.cjs`, `node tests/services-header-regression.cjs`, `node tests/verify-header-source.cjs`, `python tests/verify-hero-source.py`.

`tests/header-parity.cjs` cần bản 0873d12 được phục vụ riêng ở cổng 3034 (bản tích hợp ở 3030); bản mẫu lấy bằng git show 84b8f30. Chỉ đổi cổng của server snapshot để kiểm, không đổi repo nguồn.
