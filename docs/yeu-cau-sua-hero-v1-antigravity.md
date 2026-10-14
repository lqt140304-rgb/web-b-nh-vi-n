# Yêu cầu sửa Lê Sơn Hero V1 (gửi Antigravity)

**Ngày:** 14/10/2026 · **Người soạn:** Claude, theo quyết định của chủ dự án "có yêu cầu sửa các lỗi" · **Căn cứ:** [báo cáo rà soát](ra-soat-hero-v1-claude.md) (commit rà soát `ceef4b7`, bản V1 `74e266e` trên nhánh `antigravity/hero-v1`).

**Trạng thái:** yêu cầu sửa để chủ dự án duyệt V1. **Chưa phải phê duyệt.** Sau khi sửa, Claude rà soát lại và báo kết quả cho chủ dự án.

## 0. Quy tắc làm việc

1. Làm trên nhánh `antigravity/hero-v1`, đẩy **commit mới** (không ghi đè lịch sử). **Không merge vào main.**
2. Chỉ sửa trong `demo/`, `assets/` và hai tài liệu của Antigravity (`docs/ban-giao-hero-header-antigravity.md`, `docs/thiet-ke-hero-phuong-an-d.md`). **Không sửa** các tệp `docs/` khác (Claude giữ). Nhánh của bạn dựng từ commit cũ nên các bản `docs/` khác trên nhánh bạn đã lỗi thời; đừng sao chép chúng ngược lên nhánh Claude.
3. **Không thêm tính năng mới.** Giữ hướng **Minimal Creative**, logo, tím, kem, cam, xanh ngọc. Mèo ba tư thế vẫn **hoãn**; **giữ nguyên toàn bộ SVG**, không xóa.
4. Chỉ dữ liệu giả trong demo; không nhúng khóa hay dịch vụ thật.
5. Mỗi lỗi sửa xong phải có **cách tự kiểm tra** (cột "Đạt khi") và ghi lại trong bảng kết quả ở mục 4. Không tự ghi "đạt 100%" hay "đã phê duyệt".
6. Không cần sửa các mục "nên làm" N1 đến N9 của báo cáo trong đợt này, trừ khi nó nằm trong lỗi bên dưới. Hiệu năng ảnh và phông (N2) sẽ do Codex xử lý khi triển khai chính thức.

## 1. Quyết định nội dung cần chủ dự án (mặc định nếu chưa trả lời)

Antigravity **cứ làm theo mặc định** để không bị chặn; chủ dự án đổi sau nếu muốn.

| # | Câu hỏi cho chủ dự án | Mặc định trong V1 |
|---|---|---|
| Q1 | "Tin tức", "Cẩm nang thú cưng", ô tìm kiếm có thuộc giai đoạn 1 không? | **Bỏ** khỏi V1 |
| Q2 | Câu chữ chính thức của tiêu đề, mô tả, dòng trấn an (xem mục 2, S7 và S8) | Giữ như hiện tại, đánh dấu "chờ chủ dự án xác nhận" trong tài liệu |
| Q3 | Chữ viết tay tiếng Anh "Care / Create / Stronger / Bonds" có giữ không? | **Bỏ**, giữ vòng cung và dấu chân |
| Q4 | Nguồn và giấy phép ba ảnh thú cưng | Ghi "chưa xác nhận" (mục S10); **không** mô tả ảnh là thú cưng của bệnh viện |

## 2. Danh sách lỗi cần sửa

Thứ tự theo ưu tiên. "Đạt khi" là điều kiện Claude sẽ kiểm tra lại.

### Nhóm Cao

**S1. Trạng thái và nhãn tự chấm sai**
- Sửa: `docs/ban-giao-hero-header-antigravity.md` dòng 5 đổi "[ĐÃ PHÊ DUYỆT]" thành "Chờ rà soát và chờ chủ dự án duyệt"; bảng nghiệm thu mục 4 (dòng 128 đến 140): đổi tiêu đề cột thành "Antigravity tự đánh giá", bỏ dấu "✅ Đạt" cho các mục chưa được rà soát; trong `demo/index.html` dòng 281 đến 351: đổi nhãn "(Claude soạn)" và thẻ "ĐẠT 100%" thành "Tiêu chí do Claude soạn; kết quả do Antigravity tự đánh giá, chưa qua rà soát". Bỏ con số "100%".
- Đạt khi: không còn chữ "ĐÃ PHÊ DUYỆT" hay "ĐẠT 100%" ở bất kỳ nơi nào trong hai tài liệu và demo.

**S2. Bàn phím và trợ năng của menu, dropdown, bảng tiêu chí**
- Sửa:
  - Menu mobile: khi đóng, thêm `inert` (hoặc `visibility: hidden`) để liên kết trong menu không nhận tiêu điểm; khi mở, chuyển tiêu điểm vào menu (nút Đóng hoặc liên kết đầu), giữ tiêu điểm trong menu, **đóng bằng Thoát**, đóng xong trả tiêu điểm về nút mở; nút mở có `aria-expanded` cập nhật đúng; có `aria-controls`.
  - Dropdown tài khoản: `aria-expanded` cập nhật đúng; **đóng bằng Thoát** và trả tiêu điểm về nút; bỏ `role="menu"`/`menuitem` nếu không làm điều khiển bằng mũi tên (dùng mẫu nút mở rộng với danh sách liên kết).
  - Bảng "Tiêu chí" (demo): Thoát đóng, giữ tiêu điểm trong hộp thoại, trả tiêu điểm khi đóng.
  - Sửa dòng 32 tài liệu bàn giao cho khớp hành vi thật.
- Đạt khi: (a) mở menu rồi nhấn Thoát: menu đóng; (b) khi menu đóng, nhấn Tab 20 lần ở 390 px: tiêu điểm **không** bao giờ vào phần tử nằm trong menu; (c) khi menu mở, Tab và Shift+Tab chỉ xoay vòng trong menu; (d) `aria-expanded` đổi `true`/`false` đúng; (e) dropdown đóng bằng Thoát.

**S3. Chấm tròn chọn thú cưng hiện và bấm được trên desktop**
- Sửa: bỏ quy tắc `.show-arches .mobile-dots-indicator { display: flex !important; }` (`styles.css` dòng 1320 đến 1322) hoặc giới hạn trong khung nhìn nhỏ; trên desktop chấm **ẩn hẳn** (không còn nhận tiêu điểm).
- Đạt khi: ở 1024, 1440 px không thấy chấm và không Tab tới chấm; ở 390 px chấm hiện và hoạt động; bấm chấm không làm vỡ bố cục ở bất kỳ chiều rộng nào.

**S4. Header đã đăng nhập vỡ trên mobile 390 px**
- Sửa: trên mobile hiện **avatar hoặc chữ cái đầu** thay cho tên đầy đủ (tên đầy đủ nằm trong dropdown); tên thương hiệu cạnh logo không được ngắt thành nhiều dòng (ẩn chữ hoặc rút gọn ở màn hình hẹp); nút mở menu giữ tối thiểu **44×44 px**; tên dài cắt bằng dấu "…" thay vì xuống dòng; **chiều cao header giống nhau** giữa hai trạng thái.
- Đạt khi: ở 360 và 390 px, hai trạng thái header có cùng chiều cao (lệch không quá 2 px), không dòng nào ngắt giữa chừng, mọi nút trong header đạt tối thiểu 44×44 px. Thử với tên "Nguyễn Thị Phương Thảo Nguyên".

### Nhóm Trung bình

**S5. Tương phản chữ nhỏ**
- Sửa: dòng trấn an "Nhân viên sẽ liên hệ để xác nhận lịch hẹn." và mọi chữ nhỏ dùng `#7A6F7E` (ghi chú menu mobile, chữ phụ trong dropdown) đổi sang `#5E5362` (6,81:1 trên kem) hoặc tối hơn. Sửa số liệu trong tài liệu token theo giá trị đo.
- Đạt khi: mọi chữ cỡ dưới 18,66 px (đậm) hoặc dưới 24 px đạt **tối thiểu 4,5:1** với nền thật của nó; tài liệu token ghi đúng số.

**S6. Viền focus màu cam không đạt 3:1 trên nền sáng**
- Sửa: đổi kiểu focus để chỉ báo tương phản tối thiểu **3:1** với màu liền kề, trên cả nền kem lẫn nền tím. Gợi ý [Đề xuất]: vòng trong tím `#5A1E5E` 2 px kèm vòng ngoài cam hoặc trắng, hoặc đổi sang tím trên nền sáng. Cập nhật mục 3.3 của tài liệu bàn giao (hiện yêu cầu Codex giữ nguyên `#FC9238`).
- Đạt khi: đo tương phản chỉ báo focus so với nền ≥ 3:1 ở nút chính, nút phụ, liên kết điều hướng, nút tài khoản.

**S7. Nội dung ngoài phạm vi và chưa xác nhận**
- Sửa (theo mặc định ở mục 1):
  - Bỏ "Tin tức" (`index.html` dòng 82) và "Cẩm nang thú cưng" (dòng 261); bỏ ô tìm kiếm hoặc đổi nhãn thành "Tìm kiếm" nếu chủ dự án xác nhận Q1; không còn chữ "bài viết".
  - Bỏ "Khách thân thiết" (dòng 114).
  - Văn bản thay thế ba ảnh: mô tả trung tính, **không** khẳng định thuộc bệnh viện. Ví dụ: "Ảnh minh họa: chú chó Golden Retriever". Dòng 212 hiện ghi "...tại Bệnh viện Thú y Lê Sơn".
  - Bỏ chữ viết tay "Care / Create / Stronger / Bonds" (dòng 223 đến 226) theo mặc định Q3.
  - Dữ liệu giả rõ ràng là giả: thay "Nguyễn Minh Khang" bằng "Khách Demo" hoặc tương đương; nhãn "2 đang xử lý" đổi thành "Chờ nhân viên xác nhận" theo trạng thái đã chốt.
- Đạt khi: quét chữ hiển thị không còn các cụm trên; mọi tên và số trong demo là giả rõ ràng.

**S8. Thông điệp "không cần tài khoản" phải hiện ở giao diện chính**
- Sửa: thêm một dòng ngắn nằm cạnh dòng trấn an, hiển thị ở cả desktop và mobile **không cần mở menu**. Gợi ý nội dung [Đề xuất]: "Không cần tài khoản để gửi yêu cầu." Dòng này không được ngụ ý lịch đã chốt, không làm nút phụ bị lấn, và đạt tương phản 4,5:1. Chủ dự án xác nhận câu chữ (Q2).
- Đạt khi: ở 1440 và 390 px, khi tải trang, dòng này nằm trong khung nhìn đầu trang, không cần tương tác; không chồng lấn.

**S9. Họa tiết trang trí chồng lên chữ và để lại mảnh vụn**
- Sửa: vòng cung cam không được cắt ngang chữ nào (nếu bỏ chữ viết tay theo Q3 thì mục này chỉ còn kiểm tra vòng cung); xóa nét tím lạ và vạch cam ở đỉnh khung ảnh trái và phải; nếu họa tiết chạm khung là chủ ý thì phải **đều và có chủ đích** ở cả hai bên.
- Đạt khi: ở 768, 1024, 1440 px, không có họa tiết nào đi qua chữ; ảnh chụp phóng to đỉnh hai khung bên không còn mảnh vụn.

**S10. Ảnh thú cưng có khung và viền nướng sẵn**
- Sửa: dùng ảnh **gốc chưa cắt khung** (không viền kem, không vạch ở đáy), để CSS bo vòm; xuất lại độ phân giải thật, đủ nét ở 2 lần kích thước hiển thị (ảnh giữa hiển thị 420 px nên cần ít nhất 840 px chiều rộng thật, không phải ảnh phóng to); kiểm tra lại các vệt lạ trong ảnh chó. Ghi **nguồn, tác giả hoặc cách tạo, giấy phép** từng ảnh vào tài liệu bàn giao; nếu chưa có thì ghi "chưa xác nhận" (Q4).
- Đạt khi: ảnh không còn dải sáng ở đáy và viền kép ở đỉnh ở 1440 px; mỗi ảnh có dòng nguồn và giấy phép trong tài liệu.

### Nhóm Thấp

**S11.** Bóng đổ của menu mobile đang đóng lọt vào khung nhìn (`styles.css` dòng 587). Chỉ áp dụng bóng khi menu mở. Đạt khi: không thấy dải xám ở mép phải ở 390 px khi menu đóng.

**S12.** Mô tả ở desktop bị xuống dòng chỉ còn từ "hiểu.". Nới độ rộng tối đa hoặc cân bằng dòng. Đạt khi: không còn dòng chỉ có một từ ở 1440 và 1024 px.

## 3. Sửa tài liệu bàn giao (lỗi T1 đến T8)

| # | Việc | Đạt khi |
|---|---|---|
| T1 | Thống nhất tên nhánh làm việc (`antigravity/hero-v1`); bỏ dòng "Nhánh Git ✅ Đạt" ghi sai | Hai tài liệu ghi cùng một tên nhánh đúng |
| T2 | Sửa 3 liên kết SVG hỏng (`cat-silhouette.svg`, `cat-pose-services.svg`, `cat-pose-booking.svg`): các tệp đang nằm ở `demo/assets/`; chọn **một vị trí duy nhất** và ghi đúng | Tất cả liên kết trong hai tài liệu mở được |
| T3 | Đường dẫn tài nguyên trong sơ đồ cấu trúc cho Codex ghi đúng vị trí thật | Mọi đường dẫn trong mục 3.1 tồn tại |
| T4 | Bảng token khớp với CSS (kể cả token thêm `--color-brand-purple-muted`, `--color-brand-orange-light`) và số liệu tương phản đo thật | Mỗi token trong tài liệu có trong CSS và ngược lại |
| T5 | Bảng nghiệm thu chuyển thành tự đánh giá (xem S1) | Không còn cột "Đạt" cho mục chưa rà soát |
| T6 | Bổ sung cho Codex: trạng thái (hover, focus, active, vô hiệu) của từng thành phần; **điểm ngắt thật** (CSS đang dùng 992, 680, 600 px); thời lượng và kiểu chuyển cảnh; vị trí ảnh nguồn chưa cắt khung | Có bảng cho từng mục |
| T7 | Hướng dẫn tự lưu phông thay vì `@import` Google Fonts (`styles.css` dòng 9) khi triển khai chính thức; trong demo giữ nguyên được | Có dòng hướng dẫn trong mục 3.3 |
| T8 | Nhánh của bạn có bản `docs/` cũ của Claude; khi cập nhật không ghi đè các tệp `docs/` khác | `git diff` cho thấy chỉ hai tài liệu của Antigravity thay đổi trong `docs/` |

## 4. Cách báo lại

Khi sửa xong, đẩy commit lên `antigravity/hero-v1` và gửi chủ dự án một tệp ngắn (hoặc một mục cuối trong `docs/ban-giao-hero-header-antigravity.md`) gồm bảng:

| Mã lỗi | Commit | Đã sửa như thế nào | Cách tự kiểm tra và kết quả |
|---|---|---|---|
| S1 … S12, T1 … T8 | mã commit | mô tả ngắn | số đo hoặc ảnh chụp |

Ghi rõ lỗi nào **chưa sửa** và lý do. Không ghi "đạt" cho lỗi chưa tự kiểm tra.

## 5. Claude sẽ rà soát lại những gì

Sau khi nhận commit mới, Claude chạy lại **đúng các phép đo** của lần đầu trên trình duyệt tự động (1440, 1024, 768, 390, 360 px): tràn ngang, chồng lấn, vùng chạm, tương phản, tiêu điểm bàn phím và phím Thoát, trạng thái hover và active, menu mobile, hai trạng thái header, chấm tròn trên desktop, ảnh chụp phóng to các mảnh họa tiết, và đối chiếu chữ hiển thị với phạm vi đã xác nhận. Kết quả được ghi vào báo cáo rà soát (phiên bản mới) kèm kết luận Đạt, Đạt có điều kiện hoặc Chưa đạt. **Quyết định phê duyệt vẫn thuộc chủ dự án.**
