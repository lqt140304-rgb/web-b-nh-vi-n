# Phân loại lỗi QA theo giai đoạn: cái nào sửa ngay, cái nào được bỏ qua

**Người soạn:** Claude · **Ngày:** 14/10/2026 · **Căn cứ:** chủ dự án nói dự án làm theo từng phần nên có chỗ chưa hiển thị; yêu cầu xem phần nào đủ điều kiện bỏ qua. Áp dụng cho Hero V1 và Services V1 (báo cáo [Hero bản 3a](ra-soat-hero-v1-claude.md), [Services lượt 2](ra-soat-services-v1-claude.md)). **Đề xuất của Claude. Chủ dự án đã trả lời ba câu hỏi 14/10/2026 (mục 4); bảng chốt cuối nằm ở [`yeu-cau-sua-services-v1-lan-2-antigravity.md`](yeu-cau-sua-services-v1-lan-2-antigravity.md).**

## 1. Tiêu chí được bỏ qua (cả bốn ý đều đúng thì mới bỏ)

1. Khách chưa nhìn thấy hoặc không dùng được trong giai đoạn này (demo nội bộ).
2. Sẽ bị thay ở phần sau hoặc khi Codex làm chính thức (nội dung, ảnh thật, phông, nối liên kết).
3. Không sai thông tin, không gây hiểu nhầm về an toàn, nghiệp vụ hay pháp lý.
4. Để lại không làm hỏng việc chủ dự án đang duyệt ở bước này.

**Không bỏ qua** (dù ở giai đoạn nào): thông tin sai (số, địa chỉ), lời hứa chưa xác nhận, nút hay liên kết hiển thị mà không hoạt động, họa tiết đè chữ, chữ/số điện thoại bị vỡ, mọi thứ liên quan Cấp cứu.

## 2. Có thể bỏ qua (đủ cả bốn tiêu chí)

| Mục | Lý do bỏ qua | Đến khi nào |
|---|---|---|
| Liên kết "Giới thiệu", "Liên hệ", mục trong menu tài khoản chưa có đích | Các trang này chưa làm; là chỗ chưa hiển thị trong kế hoạch | Làm trang tương ứng, Codex nối |
| Chữ giữ chỗ "[Nội dung mẫu — chờ bệnh viện cung cấp]" | Cố ý, đúng quyết định của chủ dự án | Chủ dự án cung cấp nội dung |
| Tải Google Fonts từ ngoài, ảnh PNG/JPG nặng | Việc của Codex khi làm chính thức (tự lưu phông, nén ảnh) | Khi Codex làm |
| `server.js` đọc tệp ngoài thư mục demo; tham số `?drawer=open`; chế độ xem thử Mobile/Desktop | Chỉ là công cụ xem thử trên máy cá nhân, không đưa lên web; Codex không dùng lại | Không cần sửa; đã ghi chú |
| Màn hình 320 px (ảnh trái lệch mép ở Hero) | Dự án chỉ yêu cầu từ 360 px | Nếu sau này cần hỗ trợ |
| Laptop 1366×768 chỉ thấy phần trên ba ảnh Hero | Ý kiến thẩm mỹ, chữ và nút chính vẫn đủ trong màn hình đầu | Chủ dự án quyết định nếu muốn |
| Dấu chân tím đứng rời cạnh cung (Hero, mức Thấp) | Trang trí, không sai thông tin | Tùy chọn |
| Mô tả ảnh ghi "bác sĩ" (B9) và nguồn/bản quyền từng ảnh ghi trong tài liệu bàn giao | Ảnh hiện là ảnh minh họa tạm sẽ thay bằng ảnh thật; vẫn ghi "**không dùng công khai**" | Khi chọn ảnh thật |
| Ảnh Cấp cứu cắt mất đầu chú chó (B2) | Ảnh minh họa tạm; **chỉ bỏ qua nếu chủ dự án đồng ý đây là ảnh tạm**, nếu giữ làm ảnh chính thức thì phải sửa | Khi chọn ảnh thật |
| Kiểm tra Safari, thiết bị thật, trình đọc màn hình thật, axe tự động | Việc của Codex, chưa cần ở bản demo | Khi Codex làm chính thức |
| Bảng nguồn ảnh Hero mô tả sai ảnh (mục 7 của Hero) | Chỉ là chú thích tài liệu cho ảnh tạm; ảnh vẫn ghi "không dùng công khai". Gỡ bảng hoặc ghi "chưa xác minh" là đủ | Khi chọn ảnh thật |

## 3. Phải sửa ngay (một đợt nhỏ gửi Antigravity)

| # | Mục | Vì sao không bỏ qua | Việc |
|---|---|---|---|
| 1 | **B1** Nút "Tìm hiểu thêm & Chỉ đường" của Cấp cứu mở ra cửa sổ trống | Nút hiển thị mà không hoạt động, liên quan Cấp cứu | **Sửa cho mở đủ nội dung, hoặc bỏ nút này.** Nếu chủ dự án muốn gọn: bỏ nút, thẻ vẫn giữ nút "Gọi cấp cứu" |
| 2 | **B8** "hỗ trợ tức thì", "tất cả các ngày trong tuần" trong cửa sổ Cấp cứu | Lời hứa mạnh hơn "24/24" đã xác nhận | Dùng đúng "Cấp cứu 24/24" (nếu bỏ nút ở mục 1 thì đổi luôn chữ trong dữ liệu) |
| 3 | **B3** Số điện thoại bị ngắt làm đôi trên nút Cấp cứu | Chữ vỡ, trên mục Cấp cứu | Không ngắt giữa số |
| 4 | **B4** Đường cong cam đè lên chữ H1 Services | Họa tiết đè chữ | Họa tiết không chạm chữ ở 1440, 1280, 1024 px |
| 5 | **B5** Chú thích bản đồ ghi 105 Khuất Duy Tiến | Sai địa chỉ (đúng là 101) | Sửa ở `services.html` và `index.html`; tìm lại toàn bộ mã |
| 6 | **B7** Tài liệu `thong-tin-benh-vien-le-son.md` ghi thiết bị, phòng mổ, camera, vành đai 3, kế hoạch lấy ảnh Facebook/Maps | Thông tin chưa xác nhận, dễ bị Codex dùng như thật | Gỡ các mục chưa xác nhận hoặc ghi "chưa xác nhận, không dùng"; ghi rõ không dùng ảnh Facebook/Maps khi chưa có cho phép |
| 7 | **B6** Nút Maps/Facebook ở header, khối liên hệ ở menu điện thoại | Đổi header đã duyệt ở Hero ngoài yêu cầu; liên kết Facebook còn kèm `?locale=vi_VN` | **Chờ chủ dự án trả lời Q4**. Đề xuất mặc định: bỏ hai nút trên header; giữ khối liên hệ ở menu điện thoại (địa chỉ 101, số `tel:`, Chỉ đường, Facebook không kèm `?locale`) và ghi rõ là phần bổ sung |
| 8 | Hero: id `hero-main` khi mở menu; menu trong chế độ xem thử Mobile (390px) nằm ngoài khung | Đã xác minh còn lỗi; **nếu Antigravity đã sửa trong commit `843504e`** (menu điện thoại Services đã đúng) thì chỉ cần xác nhận Hero tương tự | Claude kiểm lại sau lần sửa tới |

Ghi chú: mục 8 không nằm trong báo cáo lượt 2; Claude đã chỉ kiểm menu của Services. Không coi là bỏ qua, chỉ chưa kiểm.

## 4. Quyết định của chủ dự án (14/10/2026)

- **Q4: bỏ hai nút Maps và Facebook ở header** [Đã chốt]. Khối liên hệ ở menu điện thoại giữ theo đề xuất (chủ dự án không nói bỏ).
- **B2: ảnh Cấp cứu là ảnh tạm thời** [Đã chốt] → bỏ qua lỗi cắt mất đầu chú chó.
- **Bỏ nút "Tìm hiểu thêm & Chỉ đường" ở thẻ Cấp cứu** [Đã chốt].

### Câu hỏi ban đầu (giữ để đối chiếu)

- **Duyệt bảng phân loại** (cột "có thể bỏ qua" và "phải sửa ngay").
- **Q4** (mục 3, số 7): giữ hay bỏ nút Maps/Facebook ở header.
- **B2**: ảnh Cấp cứu hiện tại là ảnh tạm (được bỏ qua) hay muốn đổi ngay?
- **Bỏ nút "Tìm hiểu thêm & Chỉ đường" ở Cấp cứu** cho gọn, hay sửa cho hoạt động (mục 3, số 1)?

Khi chủ dự án duyệt, Claude cập nhật `yeu-cau-sua-services-v1-antigravity.md` thành đợt sửa cuối và Antigravity sửa đúng bảng mục 3, không sửa mục 2.
