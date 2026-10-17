# Bỏ trang Dịch vụ — Codex thực hiện và tự kiểm, 17/10/2026

Chủ dự án xác nhận: **Bỏ hẳn trang Dịch vụ và các liên kết dẫn tới nó**. [Quyết định chính thức](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/bo-trang-dich-vu-2026-10-17.md).

## Bản kết quả

- codex/hero-chinh-quy-dao: `239a0ae564c6da0cd6e674a0f0d43f857db199ad` (nền63d2643).
- claude/cta-dich-vu-sua: `ee11ffa3cb8382c2462f0c679dee6a89e6d673f7` (nền e1c43df7eab172a716271d0b6d3687b629cf4c1d).
- Không gộp Giới thiệu sang Codex, không merge main/deploy/xóa nhánh. Chỉ đẩy hai nhánh demo hiện hành và hai nhánh shared. Mã nhánh Antigravity giữ lịch sử. Các commit README bổ sung ở bốn nhánh lịch sử còn cục bộ, chưa push: lần push gồm Antigravity bị hệ thống duyệt tự động từ chối, nên đã thu hẹp về bốn nhánh hiện hành.

## Đã thay đổi

- Xóa demo/services.html và demo/services.js ở hai bản demo hiện hành.
- Bỏ Dịch vụ trong nav desktop/menu mobile, bỏ nút Xem dịch vụ trong Hero; bản Claude còn bỏ nút đó trong Giới thiệu. Giữ gửi yêu cầu đặt lịch, Chỉ đường, tài khoản và các mục menu còn lại.
- Cập nhật dòng Tiêu chí, README/điểm vào thiết kế và yêu cầu chính thức. Tài liệu QA/bàn giao cũ vẫn giữ làm lịch sử.
- Bỏ test Services cũ, cập nhật các vòng kiểm header chỉ còn trang hiện hành và menu3 mục; mẫu parity loại đúng mục Dịch vụ theo quyết định mới. Thêm tests/services-removed.cjs để bắt lại tệp/route/liên kết đã bỏ.
- Không đổi hero-orbit.js/css, header-mobile.js/css, app.js hoặc styles.css. CSS/tài nguyên Services chưa dùng còn trong file chung; không dọn hàng loạt trong lượt bỏ trang này.

## Tự kiểm Chrome Windows

Mỗi bản chạy8 bộ kiểm, kết quả cuối đều đạt: services-removed, verify-header-source, hero-shell, header-auth, header-mobile, header-names, header-parity và hero-orbit. Kiểm source mô phỏng riêng cũng đạt (Codex so mẫu Hero cũ; Claude so mẫu Giới thiệu v3).

- 14 trạng thái theo các khung360/390/681/700/768/1440 và Mobile390 trong cửa sổ1000; khách và tài khoản. Không còn liên kết Services; menu3 mục và bàn phím/Escape hoạt động; hai route services.html/js trả404. Bản Claude vẫn hạ cánh ảnh Giới thiệu và giữ Chỉ đường.
- Header:964 trạng thái mỗi px320–560 đóng/mở,16 ảnh;1.656 trạng thái tên và11 ảnh tên;234 phép parity. Không giả rằng việc bỏ một mục menu là thiết kế lại CSS header.
- Hero: giảm chuyển động, Enter/Space tạm dừng/tiếp tục, nút gửi yêu cầu đặt lịch;600 mẫu×100ms tại1440/390 trên mỗi bản, không có console error. Giữ raw số đo giao hộp bao; không coi đó là duyệt thị giác toàn trang.
- Bộ kiểm gỡ trang ban đầu dùng nhầm API browser.request; đã sửa sang BrowserContext.request và chạy lại đạt. Các validation-summary.json là trạng thái cuối, khác log harness ban đầu. Server Codex cũng được khởi động lại trước lượt kiểm cuối.
- **Đây là tự kiểm của người thực hiện thay đổi (Codex), không phải QA độc lập.** Chưa kiểm Safari/Android thật, screen reader hoặc các tài khoản/form thật.

[Codex: tổng hợp](codex/validation-summary.json) · [Claude: tổng hợp](claude/validation-summary.json) · [Gỡ trang Codex](codex/services-removed.json) · [Gỡ trang Claude](claude/services-removed.json).

Ảnh sau khi intro Hero chạy: [Codex1440](codex/hero-1440.png), [Codex390](codex/hero-390.png), [Claude1440](claude/hero-1440.png), [Claude390](claude/hero-390.png). Ảnh without-services được chụp sớm khi intro có thể chưa kết thúc; không dùng để kết luận khung ảnh đã mất.

## Kết thúc việc sửa Services cũ

Lượt QA bản sửaP2 e1c43df đã bị ngắt và được thay thế bởi quyết định bỏ trang. Không ghi sửa e1c43df PASS hoặc coi lỗi tràn681–692px đã được sửa trong lượt này; đóng công việc Services do trang ngừng dùng. Các báo cáo86565c1 và bàn giaoServices cũ không còn mô tả phạm vi website hiện hành.

## Chạy lại / demo

Chạy node server.js từ đúng checkout. Đặt PLAYWRIGHT_MODULE, CHROME_BIN và QA_OUTPUT vào thư mục bằng chứng mới. tests/services-removed.cjs hỗ trợ BASE_URL; các test có sẵn mặc định3030. Trong lượt này bản Codex ở3030, Claude ở3037; runner chỉ thay cổng lúc chạy. Parity dùng snapshot1ec77ac ở3036. Demo là local, không có deploy công khai.
