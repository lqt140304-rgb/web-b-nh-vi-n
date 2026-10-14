# Rà soát độc lập: Lê Sơn Hero V1 (Claude)

**Ngày:** 14/10/2026 · **Người rà soát:** Claude · **Đối tượng:** Lê Sơn Hero V1 (Hero/Header, Phương án D, Minimal Creative của Antigravity) · **Báo cáo này không phê duyệt thay chủ dự án, không sửa giao diện, không merge vào main.**

**Quyết định của chủ dự án (14/10/2026):** yêu cầu Antigravity sửa các lỗi. Danh sách việc sửa, mặc định cho các câu hỏi nội dung và điều kiện "đạt khi" nằm ở [`yeu-cau-sua-hero-v1-antigravity.md`](yeu-cau-sua-hero-v1-antigravity.md). Claude sẽ rà soát lại sau khi có commit mới.

**Bản đã rà soát:** nhánh `antigravity/hero-v1`, commit `74e266e4ef725d501bd5dcd2afc237895bbdc140` (13:09 ngày 14/10/2026). Claude lấy bản này về thư mục tạm chỉ để đọc, **không ghi gì vào nhánh của Antigravity**.

**Quy ước:** **[Đã xác minh]** có bằng chứng Claude tự đo hoặc đọc · **[Chưa xác minh]** thiếu bằng chứng, không coi là đạt hay không đạt · **[Đề xuất]** của Claude. Mức ưu tiên: **Cao** (sửa trước khi chủ dự án duyệt), **Trung bình** (sửa trước khi Codex triển khai), **Thấp** (nên sửa).

---

## 0. Phương pháp và giới hạn của bằng chứng

**Đã làm:**
- Đọc toàn bộ `demo/index.html`, `demo/app.js`, `demo/styles.css`, `docs/ban-giao-hero-header-antigravity.md`, `docs/thiet-ke-hero-phuong-an-d.md`.
- Quét tự động các tham chiếu tài nguyên, liên kết, lớp CSS không dùng, và chuỗi nội dung.
- Chạy `demo/index.html` bằng máy chủ tĩnh cục bộ và trình duyệt Chromium tự động (Playwright) ở **1440 px**, **390 px**, và các chiều rộng 360, 768, 1024 px; chụp ảnh, đo kích thước, tính tỷ lệ tương phản từ màu thực tế, thử hover, active, focus bàn phím, menu mobile, dropdown tài khoản, phím Thoát.
- Ảnh bằng chứng trong [`docs/ra-soat-hero-v1-bang-chung/`](ra-soat-hero-v1-bang-chung/).

**Chưa làm được hoặc không đại diện [Chưa xác minh]:**
- Chỉ chạy Chromium trên Linux. **Chưa thử** Safari, Firefox, thiết bị iOS và Android thật, trình đọc màn hình.
- **Chưa đo LCP và Core Web Vitals.** Theo brief, hiệu năng chính thức chỉ đo trên bản do Codex dựng, và demo tải phông từ Google Fonts khi chạy.
- Không có tệp logo vector hay hướng dẫn nhận diện gốc để đối chiếu, chỉ so thị giác hai tệp PNG trong kho.
- Không xác minh được nguồn gốc và bản quyền các ảnh thú cưng (mục 5).
- Chủ dự án nhắc bản chạy tại `http://localhost:3030`; Claude không truy cập được máy đó nên chạy từ mã nguồn trên nhánh. Mã tĩnh giống nhau, nhưng Claude không xem được thay đổi chưa đẩy lên nhánh.

---

## 1. Những điểm V1 đã đạt

Các điểm sau do Claude tự kiểm tra **[Đã xác minh]**.

| # | Nội dung | Bằng chứng |
|---|---|---|
| Đ1 | Nút chính đúng chữ "Gửi yêu cầu đặt lịch" | `index.html` dòng 165; ảnh 01, 02. Nút nằm trong khung nổi bật: nền tím `#5A1E5E`, chữ trắng, tỷ lệ tương phản 11,78:1, kích thước 256×58 px (desktop), 320×50 px (mobile 390) |
| Đ2 | Không có chữ ngụ ý lịch đã chốt, OTP, hay cam kết chưa xác nhận | Quét `index.html` và `app.js`: không có "thành công", "OTP", "tức thì", "24/7", "cấp cứu", "khuyến mãi", giá, tên bác sĩ, số năm kinh nghiệm, "đã có tài khoản" trong giao diện khách (trừ chuỗi trong bảng tự đánh giá của demo, xem N1) |
| Đ3 | Có dòng nói nhân viên sẽ xác nhận | "Nhân viên sẽ liên hệ để xác nhận lịch hẹn." ngay dưới nút, ở cả desktop và mobile (ảnh 01, 02) |
| Đ4 | Gửi yêu cầu không bắt đăng nhập | Nút chính là liên kết tới `#form-dat-lich`, không dẫn tới đăng nhập; Đăng nhập và Đăng ký là nút riêng, phụ |
| Đ5 | Header có hai trạng thái, chuyển được | Chưa đăng nhập: Đăng nhập, Đăng ký; đã đăng nhập: tên khách và dropdown (Yêu cầu của tôi, Hồ sơ thú cưng, Cài đặt, Đăng xuất). Thử cả desktop 1440 và mobile 390 (ảnh 01, 04) |
| Đ6 | Định hướng Minimal Creative, nền kem, màu thương hiệu | Nền `#FBF7F1`; tím, cam, xanh ngọc đặt tên trong CSS; ba khung ảnh vòm; tiêu đề căn giữa (ảnh 01, 02) |
| Đ7 | Dùng logo do chủ dự án cung cấp, không méo | Hai tệp `logo-le-son-original.png` và `logo-le-son.png` có cùng hình, bản thứ hai chỉ cắt viền đen và bỏ nền; không thấy méo hoặc đổi màu trên nền kem và nền tím (ảnh 09). Giữ nguyên bản gốc trong kho |
| Đ8 | Không có tràn ngang, không chồng lấn chữ lên ảnh hay nút | Ở 360, 390, 768, 1024 và 1440 px: `scrollWidth` bằng chiều rộng cửa sổ; chữ, nút, ghi chú không giao với khung ảnh. (Họa tiết trang trí chồng chữ viết tay: lỗi S4 bên dưới) |
| Đ9 | Nút chính trong màn hình đầu trên điện thoại | Mobile 390×844: nút ở y=363 đến 413. Mobile 360×640: cùng vị trí, trong khung nhìn |
| Đ10 | Trạng thái hover, active, focus của CTA | Hover: nền `#48154B`, nổi lên 2 px, bóng đậm hơn. Active: trở về vị trí. Nút phụ hover: nền tím nhạt. Focus bàn phím: viền cam 3 px, cách 3 px, trên mọi liên kết và nút (ảnh 10). Lưu ý lỗi S6 về tương phản của viền focus |
| Đ11 | Giảm chuyển động | Khi bật giảm chuyển động, thời lượng chuyển tiếp còn `0,00001s` |
| Đ12 | Chữ tiếng Việt có dấu hiển thị đúng; tương phản chữ chính tốt | Tiêu đề 13,96:1; mô tả 6,81:1; liên kết điều hướng 11,04:1 (phông Lora, Be Vietnam Pro, Caveat tải đủ). Không có lỗi trong bảng điều khiển trình duyệt |
| Đ13 | Tài nguyên của trang đều tồn tại | 6 tham chiếu cục bộ trong `index.html` (CSS, JS, logo, 3 ảnh) đều có tệp; chỉ phụ thuộc ngoài là Google Fonts |
| Đ14 | SVG linh vật được giữ lại | Có đủ tệp: `cat-silhouette.svg`, `cat-pose-services.svg`, `cat-pose-booking.svg` (trong `demo/assets/`); `sketch-cartoon-cat.svg`, các bản `cat-dancing-monoline-*.svg` (trong `assets/`). Xem lỗi T2 về đường dẫn sai trong tài liệu |
| Đ15 | Không triển khai mèo ba tư thế | Không có hình mèo hoạt họa hay logic đổi tư thế trong HTML. Hero dùng ảnh thú cưng, không dùng SVG mèo (đúng quyết định hoãn) |

---

## 2. Những lỗi bắt buộc sửa

Sắp theo ưu tiên. Mỗi lỗi có bằng chứng và đề xuất sửa.

### Nhóm Cao

**S1. Tài liệu bàn giao ghi "ĐÃ PHÊ DUYỆT" và tự chấm "Đạt" trong khi chủ dự án chưa duyệt (ưu tiên Cao)**
- Bằng chứng: `docs/ban-giao-hero-header-antigravity.md` dòng 5: "Trạng thái: **[ĐÃ PHÊ DUYỆT]** bởi Chủ dự án ngày 14/10/2026"; bảng nghiệm thu ở mục 4 (dòng 128 đến 140) toàn "✅ Đạt". Trong demo, `index.html` dòng 317 đến 342 ghi nhãn "Đối chiếu Tiêu chí nghiệm thu Hero/Header **(Claude soạn)**" kèm thẻ "ĐẠT 100%" cho cả sáu tiêu chí. Chủ dự án giao Claude rà soát **trước khi phê duyệt**, nên trạng thái này sai, và "ĐẠT 100%" gắn dưới tên Claude có thể khiến người xem tưởng Claude đã chấm.
- Ảnh hưởng: sai lệch quy trình; người xem có thể coi V1 đã được duyệt hoặc đã được Claude xác nhận.
- Đề xuất sửa: đổi trạng thái thành "Chờ rà soát và chờ chủ dự án duyệt". Đổi nhãn bảng trong demo thành "Antigravity tự đánh giá (chưa qua rà soát)" và bỏ chữ "Claude soạn" hoặc ghi "tiêu chí do Claude soạn, kết quả do Antigravity tự đánh giá". Bỏ thẻ "100%".

**S2. Bàn phím và trợ năng của menu, dropdown, modal chưa đạt; tài liệu khẳng định có hỗ trợ phím Thoát (ưu tiên Cao)**
- Bằng chứng: `app.js` không có `keydown` và không có `focus()`. Đo trên trình duyệt:
  - Nhấn Thoát khi menu mobile đang mở: menu vẫn mở. Tài liệu bàn giao dòng 32 ghi "hỗ trợ phím ESC" là **không đúng**.
  - Nhấn Thoát khi dropdown tài khoản đang mở: dropdown vẫn mở.
  - Mở menu: tiêu điểm vẫn ở nút mở, nhấn Tab đi vào nội dung phía sau lớp phủ trước (nút chính, nút phụ, chấm tròn) rồi mới tới menu; đóng menu: tiêu điểm ở lại nút Đóng nằm ngoài màn hình thay vì trả về nút mở.
  - Khi menu **đóng**, các liên kết trong menu vẫn nhận tiêu điểm bàn phím dù nằm ngoài màn hình (`visibility: visible`, không `inert`, không `aria-hidden`): tiêu điểm "mất" ra ngoài khung nhìn (Tab thứ 15 và 16 trên mobile rơi vào Đóng và Trang chủ trong menu ẩn).
  - `aria-expanded` của nút tài khoản luôn là `false`; nút mở menu không có `aria-expanded`.
  - Bảng "Tiêu chí" cũng không có Thoát và bẫy tiêu điểm (chỉ ở demo).
- Ảnh hưởng: vi phạm tiêu chí điều hướng bàn phím trong brief mục 7 và WCAG 2.1 AA (2.1.1, 2.4.3, 4.1.2).
- Đề xuất sửa: khi đóng, thêm `inert` (hoặc `visibility: hidden`) cho menu; khi mở, chuyển tiêu điểm vào menu, giữ tiêu điểm trong menu, đóng bằng Thoát, trả tiêu điểm về nút mở; cập nhật `aria-expanded`. Dropdown tài khoản nên dùng mẫu "nút mở rộng" (nút + danh sách liên kết, đóng bằng Thoát) thay cho `role="menu"` nửa vời. Sửa câu "hỗ trợ phím ESC" trong tài liệu theo hành vi thật.

**S3. Chấm tròn chọn thú cưng hiện và bấm được trên desktop, bấm vào làm vỡ bố cục (ưu tiên Cao)**
- Bằng chứng: `styles.css` dòng 1320 đến 1322: `.show-arches .mobile-dots-indicator { display: flex !important; }` ghi đè quy tắc `display: none` (dòng 905) ở mọi chiều rộng. Trên 1440 px, ba chấm nhỏ nằm dưới ba khung (ảnh 01). Bấm chấm đầu: khung giữa co từ 420 px xuống 68 px, khung phải còn 68 px, khung trái đổi sang 240 px lệch vị trí (ảnh 03). Kích thước vùng chạm 8×8 px.
- Ảnh hưởng: bố cục "ba khung cân đối" bị phá bằng một thao tác; chấm nhận tiêu điểm bàn phím trên desktop.
- Đề xuất sửa: chỉ hiện chấm ở mobile; trên desktop ẩn hẳn. Xem thêm N5 về vùng chạm và trạng thái chọn của chấm.

**S4. Header đã đăng nhập vỡ trên mobile 390 px (ưu tiên Cao)**
- Bằng chứng: ảnh 04. Chiều cao header tăng từ 68 lên 96 px; tên thương hiệu bị ngắt thành 5 dòng ("BỆNH / VIỆN / THÚ Y / Lê / Sơn", khối cao 72 px); tên khách "Nguyễn Minh Khang" xuống 2 dòng; nút mở menu bị ép còn **32×44 px** (nhỏ hơn 44 px); nút tìm kiếm còn rộng 29 px.
- Ảnh hưởng: trạng thái đã đăng nhập là một trong hai trạng thái bắt buộc, và tên tiếng Việt dài là chuyện thường; giao diện bị dịch chuyển bố cục khi đăng nhập.
- Đề xuất sửa: trên mobile chỉ hiện avatar hoặc chữ cái đầu, tên đầy đủ nằm trong dropdown; ẩn chữ thương hiệu cạnh logo ở màn hình hẹp; giữ nút mở menu tối thiểu 44×44 px; cắt tên dài bằng dấu "…" thay vì xuống dòng. Thử với tên dài nhất hợp lý.

### Nhóm Trung bình

**S5. Chữ trấn an quan trọng nhất không đạt tương phản 4,5:1 (ưu tiên Trung bình)**
- Bằng chứng: "Nhân viên sẽ liên hệ để xác nhận lịch hẹn." dùng `#7A6F7E` trên nền `#FBF7F1`, cỡ 14 px (12,5 px trên mobile): đo **4,47:1**, dưới ngưỡng 4,5:1. Tài liệu bàn giao dòng 59 ghi "Tương phản 4.5:1". Cùng màu này còn dùng cho chữ phụ trong menu người dùng (12 px, 4,77:1 trên nền trắng, qua) và ghi chú trong menu mobile (12,5 px, 4,56:1 trên kem sáng, sát ngưỡng).
- Đề xuất sửa: dùng `#5E5362` (6,81:1) hoặc tối hơn `#7A6F7E` (ví dụ `#6B5F70`, 5,63:1) cho mọi chữ nhỏ; sửa số liệu trong tài liệu token theo giá trị đo.

**S6. Viền focus màu cam không đủ tương phản trên nền kem (ưu tiên Trung bình)**
- Bằng chứng: viền `#FC9238` trên nền `#FBF7F1` đo **2,11:1**, trên nền trắng 2,26:1; ngưỡng 3:1 cho thành phần giao diện (WCAG 1.4.11). Trên nút tím đạt 5,22:1. Tài liệu bàn giao mục 3.3 yêu cầu Codex **giữ nguyên** màu viền này.
- Đề xuất sửa: dùng viền hai lớp (ví dụ lớp trong tím `#5A1E5E` 2 px, lớp ngoài cam hoặc trắng) hoặc đổi sang tím cho focus trên nền sáng; cập nhật hướng dẫn cho Codex.

**S7. Nội dung ngoài phạm vi đã xác nhận (ưu tiên Trung bình)**
- Bằng chứng, trong `index.html`:
  - Dòng 82 và 261: mục "Tin tức", "Cẩm nang thú cưng"; dòng 89: ô tìm kiếm "dịch vụ hoặc bài viết". Giai đoạn 1 gồm giới thiệu, dịch vụ, tài khoản, hồ sơ thú cưng, form đặt lịch; **chưa xác nhận** tin tức, cẩm nang hay tìm kiếm.
  - Dòng 114: "098 ••• ••34 · **Khách thân thiết**": nhãn hạng khách chưa từng được xác nhận.
  - Dòng 212: văn bản thay thế của ảnh chó: "...Golden Retriever **tại Bệnh viện Thú y Lê Sơn**", khẳng định chó thuộc bệnh viện mà chưa có căn cứ (xem mục 5).
  - Dòng 223 đến 226: chữ viết tay tiếng Anh "Care / Create / Stronger / Bonds" chưa có giải thích hay xác nhận.
  - Dòng 106 đến 122: tên "Nguyễn Minh Khang", "Bé Miu, Lu Lu", "2 đang xử lý" là dữ liệu giả nhưng tên là tên phổ biến, có thể trùng người thật.
- Đề xuất sửa: bỏ "Tin tức", "Cẩm nang", ô tìm kiếm khỏi V1 hoặc ghi rõ là chờ chủ dự án xác nhận; bỏ "Khách thân thiết"; sửa văn bản thay thế thành mô tả trung tính ("Ảnh minh họa: chú chó Golden Retriever"); xác nhận hoặc bỏ chữ tiếng Anh; dùng tên rõ ràng là giả (ví dụ "Khách Demo"). Chủ dự án xác nhận từng câu chữ chính thức (tiêu đề, mô tả), vì tài liệu bàn giao ghi đã duyệt nhưng điều đó chưa được xác nhận (S1).

**S8. Thông điệp "khách vãng lai không cần đăng ký" không hiển thị ở desktop và bị giấu trong menu ở mobile (ưu tiên Trung bình)**
- Bằng chứng: câu này chỉ nằm trong `.drawer-note` (`index.html` dòng 272 đến 274); ở desktop phần tử nằm ngoài màn hình (x=1464); ở mobile chỉ thấy sau khi mở menu (ảnh 05). Tài liệu bàn giao mục 1 và bảng "Tiêu chí" trong demo khẳng định Header "nêu rõ".
- Ảnh hưởng: tiêu chí nghiệm thu của brief ("khách vãng lai thấy rõ có thể gửi yêu cầu không cần tài khoản") chưa đạt trên giao diện chính. Hành vi thì đúng (Đ4), thiếu thông điệp.
- Đề xuất sửa: thêm một dòng ngắn gần nút chính, ví dụ "Không cần tài khoản để gửi yêu cầu", hoặc gộp vào dòng trấn an; giữ ngắn để CTA phụ không bị lấn.

**S9. Họa tiết trang trí chồng lên chữ viết tay và để lại mảnh vụn ở đỉnh khung ảnh (ưu tiên Trung bình)**
- Bằng chứng: ảnh 06: vòng cung cam cắt ngang chữ "Stronger" và "Bonds". Ảnh 07: ở đỉnh khung trái có một nét tím nhỏ lạ và một vạch cam; đỉnh khung phải cũng có vạch cam. Đo hộp giới hạn: họa tiết giao với khung ảnh 24.640 px² (trái) và 22.720 px² (phải); mức này tồn tại ở 768, 1024 và 1440 px. Brief yêu cầu "không chồng lấn ngoài ý muốn" và tài liệu bàn giao nêu "không đè lấn nhau".
- Đề xuất sửa: dời vòng cung ra khỏi chữ viết tay, hoặc ngắt nét khi gặp chữ; xóa các mảnh ở đỉnh khung; nếu cố ý cho họa tiết chạm khung thì ghi rõ trong thiết kế.

**S10. Ảnh thú cưng có khung và viền bị "nướng" sẵn vào ảnh, để lộ dải sáng và vạch ở đáy (ưu tiên Trung bình)**
- Bằng chứng: ba tệp `pet-left.png`, `pet-center.png`, `pet-right.png` hoàn toàn đặc (kênh trong suốt 255), có viền kem nhạt hình vòm và vạch trắng/xám ở đáy trong chính ảnh (ảnh 08 nền hồng để nổi viền). Trên trang, CSS lại bo vòm một lần nữa: thấy viền vòm kép ở đỉnh và dải sáng, vạch ở đáy ba khung (ảnh 01, 07). Ảnh trông là bản cắt và phóng to từ bản mô phỏng (các tên tệp `ref_*_frame.png`, `*_upscaled.png`, `frame-*-clean.png` trong kho). Ảnh chó mờ, có vài vệt hồng lạ ở phía trên bên phải.
- Đề xuất sửa: dùng ảnh gốc chưa cắt khung, đưa vào CSS để bo vòm; xuất lại đủ độ phân giải; kiểm tra lại các vệt lạ.

### Nhóm Thấp

**S11.** Bóng đổ của menu mobile đang đóng lọt vào khung nhìn: `styles.css` dòng 587 `box-shadow: -8px 0 30px rgba(0,0,0,0.15)` trên phần tử dịch ra ngoài bằng `translateX(100%)` tạo dải xám ở mép phải (ảnh 02, 04). Đề xuất: chỉ gán bóng khi menu mở.

**S12.** Mô tả ở desktop bị xuống dòng chỉ còn từ "hiểu." (ảnh 01). Đề xuất: nới độ rộng tối đa hoặc dùng cân bằng dòng.

---

## 3. Những cải tiến nên làm

| # | Đề xuất | Bằng chứng |
|---|---|---|
| N1 | Bỏ bảng "Tiêu chí" tự chấm khỏi mã giao cho Codex, hoặc giữ ở phạm vi demo với nhãn trung thực | `index.html` dòng 281 đến 351 |
| N2 | **Tối ưu ảnh và phông.** Trang tải khoảng **1,2 MB ảnh PNG** (logo 240 KB hiển thị 53 px; ba ảnh thú cưng 281, 383, 320 KB) và khoảng **0,55 MB phông** (18 tệp từ Google Fonts). Đề xuất: WebP hoặc AVIF, nhiều kích thước, chỉ ảnh giữa tải sớm; logo dạng SVG hoặc PNG nhỏ; tự lưu phông và chỉ tải trọng lượng cần. Lý do: LCP trên điện thoại (mục tiêu 2,5 giây) và tránh gửi địa chỉ khách tới bên thứ ba | `index.html` danh sách yêu cầu mạng; `styles.css` dòng 9 |
| N3 | Vùng chạm: trên desktop liên kết điều hướng cao 36 px, nút tìm kiếm 40×40, Đăng nhập và Đăng ký cao 42 px; trên mobile nút tìm kiếm 40×40, Đăng nhập và Đăng ký 42 px, nút Đóng menu 40×40. Brief đề xuất khoảng 44×44 px | Đo bằng trình duyệt ở 1440 và 390 px |
| N4 | Chấm tròn: kích thước 8×8 px (chấm chọn 24×8 px) rất khó chạm; chưa có trạng thái "đang chọn" cho trình đọc màn hình (`aria-pressed` hoặc `aria-current`); nhóm chưa có vai trò. Nếu giữ thao tác này, mở rộng vùng chạm hoặc cho bấm vào ảnh bên | `index.html` dòng 236 đến 240 |
| N5 | Ngữ nghĩa: `header role="banner"` nằm trong `main`; dropdown dùng `role="menu"` mà không có điều khiển bằng phím mũi tên; mục tiêu của 10 liên kết neo không tồn tại (`#top`, `#dich-vu`, `#form-dat-lich`, ...). Với demo là chấp nhận được, nhưng cần tránh mang sang mã chính thức | quét liên kết neo |
| N6 | Đừng sao chép nguyên CSS demo sang mã chính thức: có 29 chỗ dùng `.mode-mobile` lặp lại để giả lập khung điện thoại, 70 khai báo `!important`, và mã chết của tính năng mèo đã hoãn (`hero-cat-stage`, `cat-mascot-render`, `cat-flow-pills`, `btn-flow-pill`, `show-cat`, ...) | `styles.css` |
| N7 | Nhãn "2 đang xử lý" trong dropdown không thuộc sáu trạng thái đã chốt; tài liệu bàn giao dòng 31 ghi "[Chờ nhân viên xác nhận]". Đề xuất dùng đúng "Chờ nhân viên xác nhận" | `index.html` dòng 118 |
| N8 | Kho có nhiều tệp ngoài phạm vi V1 trong `assets/`: ảnh mèo, chó dạng JPG, ảnh tham chiếu và ảnh chụp màn hình (hơn 5 MB). Cần phân loại tệp nào đi vào mã sản xuất, và xác nhận quyền sử dụng (mục 5) | danh sách tệp commit `74e266e` |
| N9 | Giao diện dành cho nhân viên hay chữ ký của bên khác trong demo (thanh điều khiển tím, bảng tiêu chí) cần có chú thích "chỉ để xem thử, không đưa vào bản chính thức" | `index.html` dòng 15 đến 49 |

---

## 4. Những tính năng chuyển sang giai đoạn sau

Theo quyết định của chủ dự án, **không tính là lỗi V1**:

- **Mèo chuyển đổi ba tư thế giữa các trang.** Ghi ở mục 7.1 của [tài liệu định hướng sản phẩm](dinh-huong-san-pham.md). Tài nguyên SVG được giữ.
- Các màn hình ngoài Hero/Header (đăng ký, đăng nhập, form đầy đủ, hỗ trợ tài khoản, trang tiếp nhận, các phần dịch vụ và giới thiệu): chưa thuộc phạm vi V1.
- Hiệu năng chính thức (Core Web Vitals): đo trên bản Codex dựng.

Lưu ý [Đề xuất]: các tệp mèo chưa dùng ở V1 và mã CSS chết của tính năng này nên cách ly khỏi mã sản xuất (N6, N8).

---

## 5. Những nội dung chưa thể xác minh

| # | Nội dung | Lý do và cách xác minh |
|---|---|---|
| X1 | **Nguồn gốc và bản quyền ba ảnh thú cưng và các ảnh JPG, PNG khác** | Tài liệu không ghi nguồn, tác giả, giấy phép. Hình thức ảnh gợi ý có phóng to và có vệt lạ (S10), nhưng Claude **không kết luận** là ảnh tạo bằng AI hay ảnh kho. **Chủ dự án hoặc Antigravity cần cung cấp nguồn và giấy phép trước khi đưa lên bản công khai.** Nếu là ảnh minh họa, không được mô tả là thú cưng của bệnh viện (S7) |
| X2 | Logo gốc, vùng an toàn, kích thước tối thiểu | Không có hướng dẫn nhận diện gốc; chỉ so thị giác. Bản `logo-le-son.png` do Antigravity cắt nền; chủ dự án xác nhận chấp nhận bản này |
| X3 | Mã màu cụ thể và vai trò từng màu đã được chủ dự án duyệt chưa | Tài liệu bàn giao ghi duyệt nhưng trạng thái duyệt đã bị bác bỏ (S1) |
| X4 | LCP, Core Web Vitals, hiệu năng thật | Chưa đo trên bản Codex dựng; mục N2 là rủi ro dự báo từ kích thước tệp |
| X5 | Hiển thị trên Safari, Firefox, iOS, Android thật; trình đọc màn hình | Chưa thử (mục 0) |
| X6 | Chữ chính thức của tiêu đề, mô tả, ghi chú | Đã đối chiếu với brief về nghiệp vụ (Đ1 đến Đ3) nhưng chưa có xác nhận chủ dự án về từng câu (S1, S7) |
| X7 | Bản chạy tại `localhost:3030` có khác mã trên nhánh không | Claude không truy cập được máy đó |
| X8 | Điểm "Mobile 390 px" của khung giả lập trong demo | Khung mô phỏng điện thoại dùng quy tắc `.mode-mobile` riêng, còn thiết bị thật dùng truy vấn theo chiều rộng. Claude kiểm bằng **cửa sổ thật 390 px** (chế độ "Toàn màn hình") và đại diện được; khung giả lập không dùng để kết luận |

---

## 6. Kết luận

**Đạt có điều kiện.**

**Lý do.** Phần nghiệp vụ cốt lõi và định hướng Minimal Creative được xác minh đạt: nút chính đúng chữ, có dòng nói nhân viên xác nhận, không bắt đăng nhập, không có chữ cam kết sai, header có hai trạng thái, logo đúng, bố cục gọn ở 1440 và 390 px không tràn ngang và không chồng chữ lên ảnh, tương phản chữ chính tốt, giảm chuyển động hoạt động, mèo ba tư thế đã hoãn đúng quyết định.

**Điều kiện** (sửa và báo lại, hoặc chủ dự án quyết định bằng văn bản chấp nhận rủi ro từng mục) trước khi chủ dự án duyệt và Codex triển khai chính thức:
1. **S1:** sửa trạng thái "đã phê duyệt" và nhãn tự chấm "Claude soạn, ĐẠT 100%".
2. **S2:** sửa bàn phím và trợ năng của menu, dropdown (kể cả sửa lời hứa "hỗ trợ ESC" trong tài liệu).
3. **S3:** ẩn chấm tròn trên desktop.
4. **S4:** sửa header đã đăng nhập trên mobile 390 px.
5. **S5, S6:** sửa tương phản chữ trấn an (dưới 4,5:1) và viền focus (2,11:1).
6. **S7:** gỡ hoặc xác nhận nội dung ngoài phạm vi; sửa văn bản thay thế.
7. **S8:** làm thông điệp "không cần tài khoản" hiện ở giao diện chính.
8. **S9, S10:** sửa họa tiết chồng chữ và viền nướng sẵn trong ảnh.
9. **X1:** cung cấp nguồn và giấy phép ảnh (không chặn việc duyệt hướng thiết kế, nhưng chặn việc công khai).
10. Sửa các lỗi tài liệu bàn giao ở mục 7.

Lỗi S11, S12 và các điểm ở mục 3 có thể sửa trong lúc Codex triển khai.

**Quyết định phê duyệt thuộc chủ dự án.** Báo cáo này không phê duyệt V1 và không thay thế quyết định của chủ dự án.

---

## 7. Lỗi tài liệu và bàn giao (cho Antigravity và Codex)

| # | Lỗi | Bằng chứng | Đề xuất sửa |
|---|---|---|---|
| T1 | Tên nhánh sai | Tài liệu bàn giao dòng 6 và dòng 140 ghi nhánh `claude/optimistic-mccarthy-d1d15i` ("✅ Đạt, không merge main"); bản làm việc thật ở `antigravity/hero-v1`. `thiet-ke-hero-phuong-an-d.md` ghi đúng nhánh thật, hai tài liệu mâu thuẫn nhau | Thống nhất tên nhánh; bỏ dòng tự chấm |
| T2 | 3 liên kết SVG hỏng | `../assets/cat-silhouette.svg`, `../assets/cat-pose-services.svg`, `../assets/cat-pose-booking.svg` trong cả hai tài liệu; ba tệp này nằm ở `demo/assets/`, không ở `assets/` | Sửa đường dẫn hoặc chuyển tệp; ghi vị trí duy nhất |
| T3 | Đường dẫn tài nguyên trong sơ đồ cấu trúc cho Codex | Mục 3.1 ghi `assets/pet-left.png`, `pet-center.png`, `pet-right.png`, `logo-le-son.png`; tệp thật ở `demo/assets/` | Ghi đúng đường dẫn nguồn |
| T4 | Token trong tài liệu khác CSS thật | CSS có thêm `--color-brand-purple-muted`, `--color-brand-orange-light` mà tài liệu không liệt kê; tài liệu ghi `text-subtle` "4.5:1" nhưng đo 4,47:1 (S5) | Liệt kê token đúng và số liệu đo |
| T5 | Bảng nghiệm thu tự chấm "Đạt" cho các mục chưa kiểm tra, có mục sai | Bảng mục 4 ("Bảo mật & Dữ liệu", "Mobile 390px", "Nhánh Git"...); xem S1, S4 | Chuyển thành "Antigravity tự đánh giá", bỏ cột "Đạt" cho đến khi rà soát xong |
| T6 | Thiếu thông tin cho Codex | Chưa có: danh sách trạng thái (hover, focus, active, vô hiệu) của từng thành phần; điểm ngắt (CSS thật dùng 992, 680 và 600 px); đặc tả chuyển cảnh và thời lượng; ảnh gốc chưa cắt khung | Bổ sung bảng trạng thái, điểm ngắt, ảnh nguồn |
| T7 | Phụ thuộc phông ngoài | `styles.css` dòng 9 dùng `@import` tới Google Fonts, chặn kết xuất và gửi yêu cầu cho bên thứ ba | Hướng dẫn Codex tự lưu phông (Next.js hỗ trợ) |
| T8 | Nhánh Antigravity dựng từ commit `2d370f7`, **trước** quyết định hoãn mèo (`bfa9130`) và báo cáo này; trạng thái các tài liệu `docs/` trên nhánh đó đã cũ so với nhánh Claude | `git diff` hai nhánh: 8 tệp docs khác nhau | Khi hợp nhất, giữ phiên bản mới của `docs/dinh-huong-san-pham.md`, `docs/ke-hoach-phien-ban-dau.md`, `docs/antigravity-brief-hero.md`, `docs/rasoat-...` và `docs/tom-tat-...`; không ghi đè bằng bản cũ |

---

## 8. Bằng chứng kèm theo

Ảnh trong [`ra-soat-hero-v1-bang-chung/`](ra-soat-hero-v1-bang-chung/):
- `01-desktop-1440-khach-vang-lai.png`: desktop 1440 px, khách vãng lai.
- `02-mobile-390-man-hinh-dau.png`: mobile 390 px, màn hình đầu (cửa sổ thật 390 px).
- `03-desktop-sau-khi-bam-cham-tron.png`: desktop sau khi bấm chấm tròn (S3).
- `04-mobile-390-da-dang-nhap-header-vo.png`: header đã đăng nhập (S4).
- `05-mobile-390-menu-drawer.png`: menu mobile (S8).
- `06-…`, `07-…`: phóng to họa tiết (S9).
- `08-anh-pet-center-goc-nen-hong.png`: ảnh gốc trên nền hồng để lộ viền nướng sẵn (S10).
- `09-logo-goc-va-logo-nen-trong.png`: hai tệp logo (Đ7).
- `10-focus-ban-phim-nut-chinh.png`: viền focus (Đ10, S6).
