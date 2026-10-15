# Cập nhật đợt sửa 1 — kiểm lại header sau QA 2a1fd96

Nhánh: `codex/hero-chinh-quy-dao`. Bản trước: `6aaabc84d1daa133e45f378a84287ae013fc291d`. Phiên bản sửa là commit chứa phần cập nhật này. Không merge, không deploy.

- Việc 1: sửa header tràn/đè ở các dải hẹp. Giữ nút Đăng nhập và Đăng ký ở trạng thái khách trên cả Trang chủ và Dịch vụ; trạng thái tài khoản vẫn giữ nguyên.
- Việc 2 và 3: đã hoàn tất tại 6aaabc8, được Claude xác nhận đạt trong QA 2a1fd96. Không sửa lại nội dung hoặc meta ở lượt này.
- Tái hiện: test bổ sung 421px thất bại trước khi sửa. Nâng ngưỡng lên 430px hết tràn tại 421–427 nhưng phép đo từng phần logo phát hiện còn đè chữ ở 361px và 431–440px. Vì vậy dùng nhóm nút thu gọn đến 500px, nhóm nhỏ đến 375px, không cho logo co hộp rồi tràn chữ; giảm khoảng cách chữ nhãn thương hiệu. Không đổi mã mô phỏng hoặc menu.
- Bổ sung test tại 421, 427, 428px và các cạnh ngưỡng 361/375/376/430/431/440/500/501. Thời hạn chờ kiểm tràn 3 giây để test lỗi không chờ lâu.

## Kết quả kiểm mới (Chromium trên Windows)

- `node tests/header-auth.cjs`: PASS, kiểm 19 cấu hình mỗi trang, gồm Mobile 390 trong cửa sổ 1000; khách và tài khoản, cả hai trang. Kiểm nút hiện, chiều cao ≥44px, không vượt khung hoặc đè logo/chữ/nút, focus và liên kết.
- `node docs/qa/hero-chinh/dot-sua-1-header/header-sweep.cjs`: PASS, quét từng pixel 320–440, cả hai trang và hai trạng thái (484 tổ hợp). Số đo trong [sweep-320-440.json](dot-sua-1-header/sweep-320-440.json). Phép quét tắt transition bằng CSS chỉ trong trang test để đo bố cục tĩnh; test header-auth vẫn chạy hiệu ứng bình thường.
- `node tests/hero-shell.cjs`: PASS, kiểm khung Mobile 390, chuyển trạng thái tài khoản, visibilitychange giả lập và mở Services.
- `python tests/verify-hero-source.py`: PASS. Bộ mô phỏng giữ nguyên; `git diff --check` sạch.

Ảnh mới đã đưa vào repo, không còn chỉ lưu cục bộ:

- Trang chủ: [360 khách](dot-sua-1-header/header-index-360-guest.png), [390 khách](dot-sua-1-header/header-index-390-guest.png), [360 tài khoản](dot-sua-1-header/header-index-360-account.png), [390 tài khoản](dot-sua-1-header/header-index-390-account.png).
- Dịch vụ: [360 khách](dot-sua-1-header/header-services-360-guest.png), [390 khách](dot-sua-1-header/header-services-390-guest.png).
- Có thêm ảnh tài khoản Dịch vụ và khung Mobile 390 của cả hai trang trong cùng thư mục.

Chạy server `node server.js`; đặt PLAYWRIGHT_MODULE/CHROME_BIN theo môi trường nếu cần. Để tái tạo ảnh tại đúng thư mục, đặt `QA_OUTPUT=docs/qa/hero-chinh/dot-sua-1-header` trước khi chạy header-auth.

Chưa kiểm Safari/Android thật; không chạy lại phép lấy mẫu quỹ đạo 60 giây vì không đổi mã mô phỏng. Liên kết tài khoản/form vẫn là chỗ giữ tạm đã chốt. Chưa triển khai yêu cầu menu xổ xuống mới giao Antigravity.

---

## Bàn giao ban đầu — lịch sử trước đợt sửa 1

Phần dưới mô tả bản tích hợp ban đầu; thông tin ẩn Đăng nhập và modal cũ đã được thay thế bởi 6aaabc8 và phần cập nhật trên.

# Bàn giao Hero chính cho Claude — 15/10/2026

Base: `8bb446f779e7c5cb137022a18a4b38b400990847` (`antigravity/design`).
Nhánh: `codex/hero-chinh-quy-dao`. Không merge, không deploy.

## Nguồn và cách tích hợp

- Đã đọc đầy đủ yêu cầu `a17b54b7342de69223071cb88fc0fe22f7966686:docs/yeu-cau-hero-chinh-khung-anh-bay-vong-2026-10-15.md`.
- Chuẩn: `f58c2d7e1a62f151474b486f79daa34f11f27e08:docs/de-xuat-hero-quy-dao/hero-quy-dao.html`.
- Dùng patch tham khảo tại `5b15b3787e8e1152f55eb7e38363588e6d4961ab:docs/de-xuat-hero-quy-dao/ban-tich-hop-demo-tham-khao/hero-orbit-demo.patch`; đã đọc README gồm toàn bộ danh sách chưa kiểm.
- Chép CSS và JS qua patch, không viết lại mô phỏng. Giữ cả mã cũ không chạy (SNAKE…). `tests/verify-hero-source.py` chứng minh JS chỉ khác selector và đo header bên ngoài.
- Điều chỉnh của patch: `.hero*` → `.ho*`, id `hero` → `hero-main`; bỏ menu/header riêng, `headerH = 0`; `@media` kích thước → `@container ho`, `vw` → `cqw` để khung giả lập Mobile 390 hoạt động; chiều cao Hero 736px (mobile 640px) để khớp stage demo; biến màu/phông và reset được giới hạn trong Hero. Không đổi số liệu quỹ đạo, nhịp, kích thước từng khung hoặc màu/chữ.
- Đổi CTA thành `index.html#form-dat-lich` đúng yêu cầu. Header/menu hai trang dùng cùng nội dung và CSS hiện có; tài khoản dùng các anchor tạm `#dang-nhap`, `#dang-ky`. Giữ Đăng ký trên mobile, chỉ ẩn Đăng nhập ở header ≤420px và khung giả lập 390; trong drawer vẫn có cả hai.
- Sửa focus drawer trang chủ: log cho thấy hai lần focus cũ chạy lúc nút còn `visibility:hidden`; nay chờ nút hiện trước khi focus. Không tác động bộ mô phỏng.
- Thêm favicon Services dùng logo sẵn có để tránh request `/favicon.ico` 404. Không đổi nội dung dịch vụ. Base không có footer riêng trên hai trang; không tự thêm nội dung footer.

## Sáu mục chủ dự án chốt

1. Đã thay Hero cũ trong `demo/index.html` bằng Hero chính.
2. Đã giữ chuyển động liên tục, nút tạm dừng và reduced-motion của nguồn.
3. Đã giữ `nextExc = Infinity`, không bật đợt chui vào giữa. Việc khung luôn tránh mọi chữ cần Claude kiểm trực quan thêm (xem bên dưới).
4. Đã giữ nguyên kích thước khung trong bản duyệt; không tăng thêm 10% lần nữa.
5. Đã giữ tiêu đề, màu `#C2560C`, nhãn, câu phụ và hai CTA. Menu điều hướng không thêm các mục bị cấm.
6. Đã giữ các khung trống “ẢNH ĐANG CHỜ”; không dùng ảnh thật. Asset logo đã có sẵn, cùng blob với thư mục assets của bản duyệt.

## Kiểm tra

- `python3 tests/verify-hero-source.py`: PASS.
- `node --check demo/hero-orbit.js`, `node --check demo/app.js`, `git diff --check`: PASS.
- Chrome headless trên macOS; kết quả chi tiết: `test-results.json`. Không có build/package/test runner sẵn trong base.
- 1440, 1280, 1024, 992, 768, 390, 360: không tràn document/stage; reduced-motion ẩn nút, khung không đổi vị trí. Các kích thước này kiểm bằng reduced-motion; hai cỡ 1440/390 được kiểm thêm với chuyển động bật.
- ≤992: mở drawer, focus nút đóng, Shift+Tab giữ trong drawer, Esc đóng và trả focus.
- 1440/390: Enter tạm dừng và Space tiếp tục, `aria-pressed`/nhãn đúng; vị trí khung đứng yên khi dừng; click được cả hai CTA, đúng URL.
- Services 1440/390: không tràn ngang, vùng CTA hiện, mobile menu Esc trả focus. Đây là smoke regression, chưa phải mọi tương tác chi tiết dịch vụ.
- Khung giả lập 390 trong cửa sổ 1000: đúng chiều rộng; đổi khách/đã đăng nhập không làm hiện đồng thời hai nhóm tài khoản; `visibilitychange` giả lập dừng/tiếp tục khung. Chưa thay thế thao tác chuyển tab thực trên các trình duyệt/thiết bị.
- 60 giây sau intro, 600 mẫu mỗi 100ms ở 1440 và 390: phần chồng hộp bao khung tối đa <25% diện tích khung nhỏ hơn. Xem số chính xác trong JSON. Hộp bao có thể lớn hơn tấm ảnh đã xoay, nên đây là phép đo bảo thủ.
- Ảnh khoảng giây 5: `hero-1440.png`, `hero-390.png`; ảnh smoke Services: `services-1440.png`, `services-390.png`.

Chạy lại (cần Node, Playwright và Chrome có sẵn; không thêm dependency vào sản phẩm):

```sh
python3 tests/verify-hero-source.py
node server.js
# Trong terminal khác, tùy môi trường có thể đặt PLAYWRIGHT_MODULE và CHROME_BIN:
node tests/hero-orbit.cjs
node tests/hero-shell.cjs
```

Server dùng `127.0.0.1:3030`; script mặc định ghi bằng chứng vào thư mục này (đổi bằng `QA_OUTPUT`). `CHROME_BIN` bỏ trống sẽ dùng Chromium của Playwright.

## Claude cần kiểm / chưa được đánh dấu Đạt

- Mục 1: đối chiếu nhịp chữ trước, khung bay ra 1–3s với bản duyệt; ảnh ở giây 5 không chứng minh toàn intro.
- Mục 2: chưa PASS hoàn toàn. Trong mẫu 60 giây, hộp bao khung giao hộp chữ/CTA (đặc biệt mobile). Phép đo AABB gồm khoảng trắng và góc ngoài ảnh xoay, không chứng minh khung đi qua nét chữ, nhưng cũng không đủ để khẳng định “không qua chữ”. Cần xem trực quan liên tục ít nhất 60s và so với nguồn. Không tự đổi thông số đã chốt để che kết quả này.
- Mục 5: đo hộp bao <25%; Claude xác nhận bằng mắt diện tích ảnh thực và các cỡ còn lại.
- Mục 6: chuyển tab thật, tab ẩn/hiện trên các trình duyệt; phép giả lập chỉ kiểm handler.
- Mục 8: màu và viền focus giữ từ nguồn; cần audit tương phản trên nền gradient/bokeh thực, không chỉ nền kem danh nghĩa. Màu cam nguồn nêu 4,25:1 trên kem; chưa coi là phép đo độc lập trên nền chạy.
- Mục 9: menu chính đúng nội dung; demo vẫn giữ controller, tài khoản mẫu và modal tiêu chí cũ của base, không thuộc nội dung website đã duyệt. Claude kiểm modal này trước khi dùng làm tài liệu nghiệm thu Hero mới.
- Mục 10: mở các modal chi tiết dịch vụ, thao tác tài khoản và toàn bộ hồi quy Services sâu hơn; smoke test ở trên đã chạy.
- Mục 11: chưa có Android cấu hình thấp thật; bắt buộc thử trước khi xuất bản.
- Đích đăng nhập/đăng ký/form vẫn là placeholder theo quyết định hoãn. Nhãn bản xem thử vẫn giữ. Không tự quyết ảnh thật hay bỏ nhãn.
