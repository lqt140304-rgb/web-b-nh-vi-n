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

---

# LƯỢT 2 — Kiểm tra bản sửa (commit `843504e`)

**Ngày:** 14/10/2026 · **Người rà soát:** Claude (Sonnet, lượt sau theo [quy trình QA](quy-trinh-qa-ui-ux.md)) · Không sửa nhánh Antigravity, không duyệt thay chủ dự án.

**Phạm vi đã kiểm:** đối chiếu từng mục trong [yêu cầu sửa](yeu-cau-sua-services-v1-antigravity.md); đo ở 1440, 1280, 1024, 900, 768, 681, 600, 390, 360 px; bàn phím; bốn cửa sổ chi tiết; menu điện thoại; header đã đăng nhập; liên kết; mạng ngoài; trang Hero (liên kết sang Dịch vụ). **Chưa kiểm:** Safari, thiết bị thật, trình đọc màn hình thật, và liên kết Google Maps/Facebook có mở đúng trang (mạng ngoài bị chặn).

## Kết luận lượt 2: **FIX (nhẹ hơn lượt 1)** — 1 lỗi Cao, 4 Trung bình, còn lại nhỏ

## A. Đối chiếu yêu cầu sửa

| # | Mục | Nhãn | Bằng chứng |
|---|---|---|---|
| 1 | Ảnh sạch (F1) | **PASS một phần** | Bốn ảnh mới là ảnh thật, không còn mép thẻ khác hay icon nướng sẵn; rộng 1000 px (đủ nét). Nhưng **ảnh Cấp cứu cắt mất đầu con chó** (chỉ thấy thân, ảnh 06, 07) → xem B2. Nguồn và bản quyền từng ảnh: chưa thấy ghi trong tài liệu bàn giao, **chưa xác nhận** |
| 2 | Chữ giữ chỗ (F2) | **PASS** | Ba dòng mỗi thẻ và toàn bộ phần mô tả trong cửa sổ đều là "[Nội dung mẫu — chờ bệnh viện cung cấp]"; không còn lời hứa kết quả; H1 bỏ chữ "toàn diện". Một câu ngoài phạm vi, xem B7 |
| 3 | Cấp cứu: gọi điện (F3) | **PASS một phần** | Thẻ có "Cấp cứu 24/24", nút `tel:+84973555105`, không có nút gửi yêu cầu. Nhưng nút "Tìm hiểu thêm & Chỉ đường" không mở được (B1) và số điện thoại bị ngắt dòng (B3) |
| 4 | Đường đặt lịch (F4) | **PASS** | Có khối "Gửi yêu cầu đặt lịch" kèm "Nhân viên sẽ liên hệ để xác nhận lịch hẹn" và "Không cần tài khoản"; mọi nút trỏ `index.html#form-dat-lich`, chữ đúng |
| 5 | Menu điện thoại giống Hero (F5) | **PASS** | Có logo, nút đặt lịch, ghi chú khách vãng lai; Enter mở và tiêu điểm vào nút đóng, Tab quay vòng, Escape trả về nút menu; nội dung phía sau `inert`. Ảnh 08 |
| 6 | Nối Hero sang Dịch vụ (F6) | **PASS** | Cả ba liên kết "Dịch vụ", "Xem dịch vụ" trên `index.html` trỏ `services.html` |
| 7 | Đổi "Spa & Grooming" | **PASS** | Hiển thị đúng ở thẻ, mô tả ảnh, cửa sổ; một dòng ở 360 px |
| 8 | Phông chữ tải một lần (F7) | **PASS** | Một liên kết Google Fonts, đã bỏ Caveat (vẫn tải từ Google, xem ghi nhận) |
| 9 | Icon Cấp cứu (F8) | **PASS** | Đổi sang dấu cộng trong vòng tròn |
| 10 | Ghi chú `server.js` (F9) | **Chưa thấy** | Không tìm thấy ghi chú trong tài liệu bàn giao mới (mức Thấp) |
| 11 | Lỗi nhỏ Hero | **PASS** | Hero không còn chấm tròn; menu "Dịch vụ" đã nối |

Đạt thêm: bốn thẻ vẫn một hàng ở ≥ 1280, 2×2 ở 681–1024, một cột ≤ 680, không tràn ngang ở mọi cỡ; header 64 và 60 px ở 390 và 360 kể cả tên dài; cửa sổ chi tiết của Khám, Spa & Grooming, Nội trú: tiêu điểm vào nút đóng, Tab quay vòng, Escape trả đúng nút; không lỗi JavaScript.

## B. FIX

| # | Ưu tiên | Lỗi | Bằng chứng | Đạt khi |
|---|---|---|---|---|
| B1 | **Cao** | **Nút "Tìm hiểu thêm & Chỉ đường" của thẻ Cấp cứu không hoạt động.** Bấm xong cửa sổ hiện tiêu đề mặc định "Chi tiết Dịch vụ", **nội dung trống**, tiêu điểm không vào cửa sổ, Tab không bị giữ, Escape không trả về nút. Nguyên nhân khả dĩ: mã gắn sự kiện chỉ cho lớp `.btn-card-learn`, nút này dùng lớp `.btn-card-sublink`. Như vậy nội dung Cấp cứu (cảnh báo gọi trực tiếp, nút chỉ đường) **không bao giờ hiển thị** | Ảnh 09; đo bằng kịch bản | Bấm nút mở cửa sổ Cấp cứu có đủ cảnh báo, nút gọi, nút chỉ đường; tiêu điểm, Tab, Escape như ba cửa sổ kia |
| B2 | Trung bình | **Ảnh Cấp cứu cắt mất đầu chú chó**, chỉ thấy thân; lỗi này lặp ở mọi cỡ màn hình | Ảnh 06, 07 | Ảnh thấy rõ mặt/đầu con vật (đổi ảnh hoặc chỉnh vùng cắt) |
| B3 | Trung bình | **Số điện thoại bị ngắt làm đôi** trên nút Cấp cứu ở desktop: "Gọi cấp cứu: 097 355 / 51 05" | Ảnh 06 | Số điện thoại không bị ngắt (không dùng "Gọi cấp cứu:" trước số, hoặc ngăn ngắt giữa số, ví dụ `white-space: nowrap` cho số) |
| B4 | Trung bình | **Đường cong cam đè lên tiêu đề**: do H1 nay một dòng dài, đường cong trái cắt chữ "D" của "Dịch", đường cong phải chạm chữ "bạn" ở 1440 px (lặp lỗi chồng họa tiết lên chữ đã sửa ở Hero) | Ảnh 06 | Họa tiết không chạm hay cắt chữ ở 1440, 1280, 1024 px |
| B5 | Trung bình | **Sai địa chỉ trong chú thích**: `title` của nút bản đồ trên header ghi "**105** Khuất Duy Tiến" (trên `services.html` và `index.html`); địa chỉ đúng là **101** | Đọc mã | Sửa 105 thành 101 ở mọi nơi; tìm lại toàn bộ mã |
| B6 | Trung bình | **Thêm ngoài yêu cầu**: nút Google Maps và Facebook trên header, khối "BỆNH VIỆN THÚ Y LÊ SƠN / địa chỉ / hotline / Chỉ đường / Facebook" trong menu điện thoại, nút Maps/Facebook trong cửa sổ các dịch vụ. Yêu cầu chỉ nói liên kết Maps tùy chọn trong thẻ Cấp cứu và **Facebook để dành về sau**. Header đã duyệt ở Hero nay thay đổi, và liên kết Facebook ở header còn kèm `?locale=vi_VN` (đã dặn bỏ) | Ảnh 06, 08; đọc mã | Chủ dự án quyết định giữ hay bỏ (xem Q4). Nếu giữ: bỏ `?locale=vi_VN`, ghi rõ trong tài liệu bàn giao là phần bổ sung |
| B7 | Trung bình | **Tài liệu `thong-tin-benh-vien-le-son.md` ghi thông tin chưa xác nhận** như sự thật: "phòng mổ vô trùng, máy gây mê kèm thở", "máy siêu âm Doppler màu, X-quang kỹ thuật số", "máy xét nghiệm huyết học, sinh hóa", "chuồng inox y tế cao cấp, khu cách ly", "camera theo dõi", "trục đường vành đai 3", cùng tọa độ và kế hoạch "trích xuất ảnh từ Fanpage và Google Maps". Chủ dự án chưa cung cấp các thông tin này; ảnh trên Facebook/Maps thuộc người chụp, chưa có cho phép | Đọc tài liệu | Gỡ các mục chưa xác nhận hoặc ghi rõ "chưa xác nhận, không dùng"; không dùng ảnh Facebook/Maps khi chưa có xác nhận của chủ dự án. Nếu có tọa độ, ghi rõ nguồn |
| B8 | Thấp | Cửa sổ Cấp cứu ghi "hỗ trợ **tức thì**" và "**tất cả các ngày trong tuần**": lời hứa mạnh hơn "24/24" chủ dự án xác nhận | Đọc mã | Dùng đúng "Cấp cứu 24/24" |
| B9 | Thấp | Mô tả ảnh Khám ghi "**Bác sĩ** thú y thăm khám" cho một người trong ảnh minh họa chưa rõ là bác sĩ | Đọc mô tả | Mô tả trung tính ("người chăm sóc vuốt ve bé mèo") |
| B10 | Thấp | Mã có tham số `?drawer=open` thêm vào để chụp xem thử; không có trong yêu cầu | Đọc mã | Ghi chú là công cụ xem thử, Codex không tái sử dụng |

## C. Ghi nhận (không chặn)

- Hai trang vẫn tải phông từ Google (Codex tự lưu trữ khi làm thật).
- Tài liệu bàn giao chưa nêu nguồn và giấy phép từng ảnh dịch vụ như đã yêu cầu ở mục 1 (đã ghi ở A1).
- Chấp nhận được ở demo: liên kết "Giới thiệu", "Liên hệ" và các mục trong menu tài khoản vẫn chưa có đích.

## D. Câu hỏi cho chủ dự án

- **Q4:** Giữ hay bỏ nút Google Maps và Facebook ở header, và khối liên hệ trong menu điện thoại? Claude đề xuất: **giữ khối liên hệ ở menu điện thoại** (hữu ích), **bỏ hai nút trên header** (header đã duyệt ở Hero cần gọn, để về chân trang), Facebook chuyển sang chân trang hoặc trang Liên hệ sau.

## E. NEED CODEX

Không bắt buộc. Tùy chọn sau khi sửa: Safari và iPhone thật.

Ảnh bằng chứng lượt 2: 06 đến 09 trong `ra-soat-services-v1-bang-chung/`.

---

# LƯỢT 3 — Kiểm tra đợt sửa cuối (Services `41995ca`, Hero `c52d475`) và đối chiếu Codex

**Ngày:** 14/10/2026 · **Người rà soát:** Claude (Sonnet) · Không sửa nhánh Antigravity, không duyệt thay chủ dự án.

**Phạm vi đã kiểm:** 9 mục của [yêu cầu sửa đợt cuối](yeu-cau-sua-services-v1-lan-2-antigravity.md) và các mục Codex giao Antigravity ([QA bổ sung của Codex](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/codex/qa-services-v1/docs/qa-services-v1-bo-sung-codex.md)); đo ở 1440, 1280, 1024, 768, 390, 360 px; bàn phím; ba cửa sổ chi tiết; menu điện thoại của Dịch vụ và Hero; chế độ xem thử Mobile của Hero; lỗi JavaScript. **Chưa kiểm:** trình gọi điện trên điện thoại thật, trình đọc màn hình, Safari.

## Kết luận lượt 3: **PASS** cho Services V1 và hai lỗi nhỏ của Hero. Chờ chủ dự án duyệt giao diện.

## A. Đối chiếu 9 mục đợt cuối

| # | Mục | Nhãn | Bằng chứng |
|---|---|---|---|
| 1 | Bỏ nút "Tìm hiểu thêm & Chỉ đường" của Cấp cứu, xóa mã Cấp cứu | **PASS** | Không còn nút nào mở cửa sổ ở thẻ Cấp cứu; không còn dữ liệu `capcuu` trong mã; không còn chữ "tức thì", "tất cả các ngày trong tuần" |
| 2 | Số điện thoại không bị ngắt | **PASS** | "097 355 51 05" nằm trọn một dòng ở 1440, 1280, 1024, 768, 390, 360 px (nút hai dòng: "Gọi cấp cứu 24/24:" rồi số) |
| 3 | Đường cong cam không chạm chữ H1 | **PASS** | Họa tiết nằm ngoài khung tiêu đề ở 1440, 1280, 1024 (cách ≥ 100 px); ẩn ở ≤ 768. Ảnh 10 |
| 4 | Sửa 105 thành 101 | **PASS** | Không còn chuỗi "105 Khuất" trong mã và tài liệu |
| 5 | Bỏ nút Maps/Facebook ở header | **PASS** | Header chỉ còn logo, menu, Đăng nhập/Đăng ký; không tràn; đăng nhập với tên dài vẫn 64 px ở 390 |
| 6 | Khối liên hệ trong menu điện thoại | **PASS** | Địa chỉ 101…, hotline `tel:`, Chỉ đường, Facebook không kèm `?locale`, `rel="noopener noreferrer"`; Tab quay vòng, Escape trả tiêu điểm. Ảnh 13 |
| 7 | Bỏ Maps/Facebook trong cửa sổ ba dịch vụ | **PASS** | Cửa sổ Khám, Spa & Grooming, Nội trú chỉ có chữ giữ chỗ và nút "Gửi yêu cầu đặt lịch". Ảnh 12 |
| 8 | Tài liệu thông tin bệnh viện | **PASS** | Chỉ còn thông tin chủ dự án đã cung cấp; có mục "Thông tin chưa xác nhận — không dùng" nêu rõ thiết bị, camera, giờ làm việc, ảnh Facebook/Maps |
| 9 | Hero: `inert` khi mở menu; menu trong chế độ xem thử | **PASS** | Mở menu bằng bàn phím: phần Hero và header đều `inert`; ở chế độ Mobile (390px) menu nằm trong khung điện thoại; hộp Tiêu chí của Hero cũng khóa nền và đóng đúng |

Không lỗi JavaScript khi bấm qua các chế độ; thẻ cùng hàng cao bằng nhau; không tràn ngang ở mọi cỡ.

## B. Đối chiếu với Codex (Claude nhận phần bỏ sót)

Codex đã đọc mã và phát hiện hai điều **Claude đã bỏ sót ở lượt 1 và 2**:

| Mục Codex | Claude ghi nhận | Kiểm tra |
|---|---|---|
| **P1:** nút "Gọi cấp cứu" bị chặn: mã mở cửa sổ cho mọi `.btn-card-learn` và gọi `preventDefault`, nên bấm không gọi được | **Claude bỏ sót.** Lượt 2 chỉ đo nút "Tìm hiểu thêm", ghi PASS nút gọi vì thấy `href="tel:"`, không bấm thử | **Đã sửa, PASS:** mã chỉ gắn sự kiện cho `.btn-card-learn[data-service]`; Claude phát sự kiện bấm lên nút gọi: **không bị `preventDefault`**, không mở cửa sổ. Trình gọi thực tế trên điện thoại **chưa xác minh** (Codex và Antigravity cũng ghi như vậy) |
| **P2:** `index.html` chưa có `id="form-dat-lich"`: liên kết đặt lịch trỏ tới chỗ chưa tồn tại | **Claude ghi PASS F4 quá rộng.** Claude đã thấy đích này thiếu từ lúc đo Hero nhưng không đưa vào kết luận | **Chấp nhận hoãn:** tài liệu bàn giao ghi rõ "điểm đến đặt lịch chưa triển khai", form thuộc giai đoạn làm form. Mọi nút đặt lịch dùng cùng một đích `index.html#form-dat-lich` |
| **P2:** cửa sổ chi tiết dịch vụ chưa khóa nền (`inert`) dù có `aria-modal` | **Claude chưa đo khóa nền** (chỉ đo Tab quay vòng) | **Đã sửa, PASS:** mở cửa sổ thì header và nội dung trang `inert`, đóng thì mở lại; tiêu điểm trả về đúng nút. Trình đọc màn hình thật chưa kiểm |

Bài học ghi vào quy trình: với nút có thể bấm, Claude **bấm thử và xem kết quả**, không chỉ đọc `href`; với cửa sổ, **đo cả khóa nền**.

## C. Ghi nhận, không chặn

- Đích `#form-dat-lich` chưa có (hoãn có ghi nhận).
- Phông Google tải từ ngoài; ảnh minh họa là ảnh tạm không dùng công khai; liên kết "Giới thiệu", "Liên hệ", menu tài khoản chưa có trang; Safari và điện thoại thật chưa kiểm: đều đã xếp vào mục bỏ qua ở [phân loại lỗi](phan-loai-loi-theo-giai-doan.md).
- Ý kiến thẩm mỹ: khối "Bạn cần đặt lịch" có khoảng trống thừa ở đáy thẻ (ảnh 10); chữ số điện thoại trên nút Cấp cứu hơi nhỏ so với nút. Không bắt buộc.

## D. NEED CODEX (tùy chọn)

~~Thử `tel:` trên điện thoại có SIM~~ → **chủ dự án tự kiểm sau (14/10)**, chưa xác minh, giữ trạng thái "chưa xác minh trình gọi thực tế" cho đến khi có kết quả; trình đọc màn hình (VoiceOver/TalkBack) cho cửa sổ chi tiết và menu; Safari.

Ảnh bằng chứng lượt 3: 10 đến 13.

---

# LƯỢT 4 — Icon và hiệu ứng mới (Services `5e5b442`, Hero `6165c39`)

**Ngày:** 14/10/2026 · Claude (Opus). **Đã kiểm:** thay đổi CSS/HTML so với `41995ca`/`c52d475`, bốn icon khi rê chuột, chuyển động liên tục, chế độ giảm chuyển động, bố cục, lỗi JavaScript, chạm trên điện thoại giả lập. **Chưa kiểm:** iPhone/Android thật.

**Kết luận: PASS, kèm 1 FIX nhỏ.**

| Mục | Nhãn | Bằng chứng |
|---|---|---|
| Icon bốn dịch vụ có màu riêng (cam đậm, xanh ngọc, tím, đỏ) | **PASS** | Tương phản icon trên nền huy hiệu 4,63 đến 8,68:1 (≥ 3:1). Ảnh 14. Lưu ý: **hình vẽ icon không đổi**, chỉ đổi màu và thêm chuyển động |
| Hiệu ứng khi rê chuột (ống nghe đập, kéo cắt, nhà nổi, chữ thập phát sáng, điện thoại rung, mũi tên, nút đóng xoay) | **PASS** | Chỉ chạy khi rê chuột; không làm xô bố cục (chiều cao thẻ trước/sau như nhau) |
| Chế độ giảm chuyển động | **PASS** | Bật `prefers-reduced-motion`: mọi chuyển động chạy 1 lần trong 0,01 ms |
| Lỗi JavaScript, Hero và Services đồng bộ | **PASS** | Không lỗi; CSS hai nhánh giống nhau |
| **Tim ở nhãn đầu trang đập mãi không dừng** (`eyebrowHeartbeat infinite`) trên cả Hero và Dịch vụ | **FIX (Thấp)** | Chuyển động tự chạy quá 5 giây, không có cách dừng (WCAG 2.2.2), dễ gây phân tâm. **Đạt khi:** đập 2–3 lần rồi dừng, hoặc chỉ đập khi rê chuột |
| Hiệu ứng rê chuột trên điện thoại | **Ghi nhận** | Giả lập không thấy "kẹt" hiệu ứng sau khi chạm; iPhone thật chưa kiểm. Nên bọc các hiệu ứng rê chuột trong `@media (hover: hover)` khi Codex làm thật |
| Màu cam đậm `#B8530B` của icon Khám không nằm trong bảng màu đã chốt | **Ý kiến** | Chủ dự án quyết định có chấp nhận không |
