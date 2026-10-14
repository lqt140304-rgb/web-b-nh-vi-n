# Brief cho Antigravity: thiết kế Hero/Header, website Bệnh viện thú y Lê Sơn

**Ngày:** 14/10/2026 · **Người soạn:** Claude · **Trạng thái:** brief khởi động, chưa phải thiết kế được duyệt. Bản này thay brief trước dành cho Gemini, sau quyết định của chủ dự án giao thiết kế UI/UX cho **Google Antigravity**.

**Cập nhật phạm vi (14/10, chủ dự án) [Đã chốt]:**
- **Tạm hoãn** tính năng mèo chuyển đổi **ba tư thế** giữa các trang sang giai đoạn phát triển sau. **Không triển khai animation hay logic chuyển đổi tư thế mèo** trong Hero/Header phiên bản đầu.
- **Giữ lại toàn bộ tài nguyên SVG đã tạo** để dùng trong tương lai: không xóa, không gộp mất bản gốc. Antigravity bàn giao **danh sách các tệp SVG đã tạo** (tên tệp, nội dung, nơi lưu) cùng bản thiết kế; Claude chưa nhận các tệp này.
- Nếu Hero hiện tại cần hình mèo, **chỉ dùng một phiên bản tĩnh**, không chuyển động, không đổi tư thế.
- **Ưu tiên hoàn thiện giao diện Minimal Creative đã chọn:** bố cục gọn gàng, **không chồng lấn**, responsive, trải nghiệm người dùng. Tính năng mèo **không được làm chậm** tiến độ hoàn thiện Hero/Header.

**Phạm vi:** chỉ phần **Hero và Header** (thanh đầu trang chứa Hero). Chưa thiết kế các phần khác, chưa tích hợp dịch vụ nào. **Chỉ dựng bản demo giao diện với dữ liệu giả.** Codex lập trình chính thức **sau khi chủ dự án duyệt giao diện**.

**Quy ước nhãn** (xin giữ khi trả lời): **[Đã chốt]** chủ dự án quyết định · **[Giả định]** chưa xác nhận · **[Đề xuất]** của Antigravity hoặc Claude, cần phản biện · **[Còn thiếu]** cần nội dung hoặc quyết định. Đề xuất của riêng bạn không phải quyết định chung.

---

## 0. Phân công

| Bên | Việc |
|---|---|
| Chủ dự án | Cung cấp logo, duyệt giao diện trước khi Codex triển khai chính thức |
| **Antigravity** | Thiết kế UI/UX, responsive, hiệu ứng, bản demo giao diện (dữ liệu giả) |
| Claude | Phân tích nghiệp vụ, tài liệu, **tiêu chí nghiệm thu** (mục 7), rà soát |
| Codex | Lập trình chính thức, tích hợp Supabase, kiểm thử, triển khai Vercel |
| ChatGPT | Hỗ trợ điều phối, đánh giá phương án |

## 1. Bối cảnh ngắn

- **[Đã chốt]** Bệnh viện thú y Lê Sơn, một cơ sở, **có khu nội trú**. Website giai đoạn 1 gồm: giới thiệu bệnh viện, dịch vụ, tài khoản khách, hồ sơ thú cưng, form yêu cầu đặt lịch.
- **[Đã chốt]** Đặt lịch là **gửi yêu cầu**; nhân viên **gọi điện xác nhận**. Gửi yêu cầu **chưa phải** đã có lịch hẹn.
- **[Đã chốt]** Khách vãng lai (không tài khoản) và khách có tài khoản đều gửi được yêu cầu. Tài khoản dùng để xem lại yêu cầu của mình. Đăng ký gồm: tên khách, tên đăng nhập, số điện thoại, mật khẩu. **Không dùng OTP.** Đăng nhập bằng số điện thoại hoặc tên đăng nhập + mật khẩu.
- **[Đã chốt]** Trạng thái hiển thị cho khách lấy từ sáu trạng thái: Chờ xác nhận, Đang liên hệ, Đã xác nhận, Không liên lạc được, Đã hủy, Từ chối. **"Đã xác nhận" chỉ nghĩa là đã chốt lịch, không phải đã khám.** Thông điệp cần rõ: **"Chờ nhân viên xác nhận"**.
- **[Giả định]** Phần lớn khách dùng điện thoại. Thiết kế **mobile trước** (khoảng 360–430 px), rồi máy tính bảng và máy tính (khoảng 1280 px).
- Nguồn đầy đủ về quy tắc: [tài liệu rà soát](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/rasoat-tai-khoan-va-form-dat-lich.md), các mục 4.2a (trạng thái) và 4.4 (thông báo phản hồi); [định hướng sản phẩm](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/dinh-huong-san-pham.md).

## 2. Nhận diện thương hiệu

- **[Đã chốt]** Dùng **logo Lê Sơn do chủ dự án cung cấp**. **Không vẽ lại, không chỉnh sửa, không thay logo.** Claude chưa nhận tệp logo; chủ dự án đưa trực tiếp cho Antigravity.
- **[Đã chốt về hướng]** Kế thừa định hướng nhận diện **tím, kem, cam, xanh ngọc**. Mã màu cụ thể và vai trò từng màu **[Còn thiếu]**: Antigravity đề xuất dựa trên logo, chủ dự án duyệt.
- **[Đề xuất]** Quy tắc dùng logo cần ghi rõ trong thiết kế: vùng an toàn, kích thước tối thiểu, nền cho phép, không méo, không đổi màu.
- **[Đề xuất]** Phân vai màu để vừa đẹp vừa đọc được: màu nào cho chữ, nền, nút chính, nút phụ, điểm nhấn. Lưu ý màu cam hoặc xanh ngọc nhạt trên nền kem thường **không đủ tương phản** cho chữ nhỏ; kiểm tra theo mục 7.
- Mọi phông chữ chọn là **[Đề xuất]**. Phông phải hiển thị đúng đầy đủ **dấu tiếng Việt**.

## 3. Hero và Header cần làm được gì

1. Khách hiểu ngay đây là **Bệnh viện thú y Lê Sơn** và bệnh viện làm gì.
2. Nút hành động chính: **gửi yêu cầu đặt lịch**.
3. Nút phụ: **xem dịch vụ**.
4. Từ đầu trang, khách thấy đường vào **Đăng nhập / Đăng ký**, nhưng **không bắt buộc** để gửi yêu cầu.
5. Đặt đúng kỳ vọng: khách gửi yêu cầu, **nhân viên sẽ gọi xác nhận**; không hứa lịch hẹn tức thì.
6. Có chỗ cho thông tin liên hệ nhanh (điện thoại), khi có nội dung chính thức.
7. Header có hai trạng thái: chưa đăng nhập (Đăng nhập, Đăng ký) và đã đăng nhập (tên khách, "Yêu cầu của tôi").

Gợi ý khung quy trình ba bước dưới nút chính [Đề xuất, khớp luồng đã chốt]: **Gửi yêu cầu → Nhân viên gọi xác nhận → Chốt lịch hẹn.**

## 4. Ràng buộc nội dung (bắt buộc)

**Không được viết hoặc ngụ ý:**
- "Đặt lịch thành công", "đã có lịch", "đặt ngay, có chỗ ngay". Nút và câu chữ dùng **"Gửi yêu cầu đặt lịch"**, không dùng "Đặt lịch ngay" nếu nó ngụ ý lịch được chốt tức thì.
- Cam kết thời gian phản hồi, **24/7**, **cấp cứu**, số năm kinh nghiệm, giải thưởng, số chuồng nội trú, tên bác sĩ, giá, khuyến mãi. Tất cả **chưa được xác nhận**.
- Bất kỳ điều gì về OTP, xác minh số điện thoại, hay việc "số này đã có tài khoản".

**Chỉ dùng điều đã xác nhận:** tên bệnh viện; có khu nội trú; giới thiệu bệnh viện, dịch vụ, đặt lịch qua gửi yêu cầu; nhân viên gọi xác nhận.

**Nội dung còn thiếu:** ảnh bệnh viện, địa chỉ, số điện thoại, giờ làm việc, danh sách dịch vụ, bảng giá, câu giới thiệu chính thức. Dùng **chỗ giữ chỗ rõ ràng**, đánh dấu **[Còn thiếu: cần nội dung chính thức]**, không bịa nội dung thật.

## 5. Dữ liệu và demo

- **Chỉ dùng dữ liệu giả** trong bản demo: tên, số điện thoại, thú cưng, yêu cầu đều là dữ liệu hư cấu rõ ràng. **Không dùng dữ liệu hay ảnh khách hàng thật, thú cưng của khách thật.**
- **Không tích hợp** Supabase, đăng nhập thật, hay bất kỳ dịch vụ nào; **không nhúng khóa, token hay bí mật**. Đăng nhập, form chỉ mô phỏng.
- Demo chỉ để chủ dự án xem và duyệt; **không công khai cho khách**.
- **[Đề xuất]** Mã của bản demo là tham chiếu giao diện, **không phải mã chính thức**. Codex quyết định có tái sử dụng phần nào hay không.

## 6. Nên trả về những gì

Xin trả về **một tệp `.md`** mô tả thiết kế, kèm **bản demo giao diện** (dữ liệu giả) và hình minh họa nếu công cụ tạo được. Nội dung:
1. **Hướng đã chọn: Minimal Creative [Đã chốt].** Hoàn thiện hướng này; không cần đề xuất thêm hướng khác trừ khi chủ dự án yêu cầu. Nêu rõ các lựa chọn nhỏ còn lại (nếu có) và lý do.
2. Bố cục **mobile, máy tính bảng và máy tính** của từng hướng: thứ tự từ trên xuống, kích thước vùng chạm, vị trí nút, các **điểm ngắt responsive**.
3. **Header ở hai trạng thái** (mục 3, điểm 7) và cách xử lý trên màn hình nhỏ (ví dụ menu thu gọn).
4. Cách xử lý **khi chưa có ảnh**: Hero vẫn đẹp và rõ chỉ bằng logo, chữ, màu, hình khối.
5. **Hai đến ba phương án câu chữ** cho tiêu đề và dòng phụ, đánh dấu là chỗ giữ chỗ, chỉ dùng điều đã xác nhận ở mục 4.
6. **Token thiết kế** tối thiểu: màu (kế thừa tím, kem, cam, xanh ngọc), kiểu chữ, khoảng cách, bo góc, bóng. Ghi là đề xuất.
7. **Hiệu ứng**: mô tả từng hiệu ứng, thời lượng, mục đích; cách **tắt hoặc giảm** khi người dùng chọn giảm chuyển động; không hiệu ứng nặng trên điện thoại cấu hình thấp.
8. Các **trạng thái** của nút và liên kết: mặc định, hover, focus bằng bàn phím, nhấn, vô hiệu.
9. Ghi chú **khả năng tiếp cận** và **hiệu năng** (đối chiếu mục 7).
10. Danh sách **tài nguyên cần chủ dự án cung cấp** và **câu hỏi cần trả lời** (logo, mã màu, ảnh, nội dung).

## 7. Tiêu chí nghiệm thu Hero/Header (Claude soạn, chủ dự án duyệt)

Dùng để Claude rà soát và Codex kiểm tra khi triển khai chính thức. Mọi ngưỡng số là **[Đề xuất]**, chủ dự án có thể điều chỉnh.

**Nội dung và nghiệp vụ**
- Không có câu nào vi phạm mục 4 (không "đặt lịch thành công", không cam kết chưa xác nhận, không OTP, không nhắc "số đã có tài khoản").
- Nút chính ghi **"Gửi yêu cầu đặt lịch"** hoặc tương đương không ngụ ý lịch được chốt ngay; có dòng hoặc bước nói **nhân viên sẽ gọi xác nhận**.
- Thông điệp trạng thái ban đầu hiển thị đúng **"Chờ nhân viên xác nhận"** ở nơi liên quan.
- Khách vãng lai thấy rõ có thể gửi yêu cầu **không cần tài khoản**.
- Header đúng hai trạng thái chưa đăng nhập và đã đăng nhập.
- Không có dữ liệu, tên hay ảnh khách thật; mọi dữ liệu hiển thị trong demo là giả.

**Phạm vi mèo (cập nhật 14/10)**
- Không có animation hay logic chuyển đổi tư thế mèo trong Hero/Header; nếu có hình mèo thì chỉ **một phiên bản tĩnh**.
- Hình mèo (nếu có) **không chồng lấn** lên chữ, nút, logo hay nhau ở mọi chiều rộng đại diện, và không che nút chính.
- Hình mèo mang tính trang trí: có thuộc tính bỏ qua với trình đọc màn hình (hoặc văn bản thay thế phù hợp nếu mang thông tin); không phải điều kiện để hiểu nội dung.
- Hình mèo tĩnh **nhẹ**, không làm chậm hiển thị chữ và nút chính.
- Toàn bộ tài nguyên SVG đã tạo được **giữ lại** và có danh sách bàn giao; không bị xóa hay làm mất bản gốc.

**Nhận diện**
- Dùng đúng logo do chủ dự án cung cấp, không méo, không đổi màu, đúng quy tắc vùng an toàn và kích thước tối thiểu đã ghi.
- Bảng màu kế thừa tím, kem, cam, xanh ngọc; mã màu đã được chủ dự án duyệt.

**Responsive**
- Hiển thị đúng, không tràn ngang, không chồng chéo ở các chiều rộng đại diện **360, 390, 768, 1280 px** (hoặc các điểm ngắt do Antigravity đề xuất).
- Nút chính nằm trong tầm nhìn đầu trang trên điện thoại mà không cần cuộn quá nhiều [Đề xuất].

**Khả năng tiếp cận** (tham chiếu WCAG 2.1 mức AA)
- Chữ thường đạt tỷ lệ tương phản tối thiểu **4,5:1** với nền; chữ lớn đạt **3:1**; kiểm tra riêng cặp cam và xanh ngọc trên kem.
- Vùng chạm của nút và liên kết tối thiểu khoảng **44 × 44 px**.
- Điều hướng được hoàn toàn bằng bàn phím; **focus nhìn thấy rõ**; thứ tự focus hợp lý.
- Tôn trọng tùy chọn **giảm chuyển động**; không có nội dung nhấp nháy.
- Ảnh có văn bản thay thế phù hợp; chữ có dấu tiếng Việt hiển thị đúng, chiều cao dòng đủ.

**Hiệu năng** (đo trên bản chính thức do Codex dựng, không đo trên demo)
- Chữ hiển thị trước ảnh; ảnh Hero được nén, kích thước phù hợp thiết bị.
- Mục tiêu **LCP ≤ 2,5 giây** ở phân vị 75 trên điện thoại (ngưỡng "tốt" của Core Web Vitals) và **không có dịch chuyển bố cục đáng kể** [Đề xuất].

**Quy trình**
- Chủ dự án **duyệt giao diện trước khi Codex triển khai chính thức.** Chưa duyệt thì chưa viết mã chính thức.

## 8. Ngoài phạm vi (chưa làm)

- Các phần khác của trang (dịch vụ, giới thiệu, form đặt lịch đầy đủ, chân trang).
- Màn hình đăng ký, đăng nhập, khôi phục mật khẩu, hỗ trợ tài khoản, trang tiếp nhận. Một số quy trình tài khoản **chưa được duyệt**; chưa vẽ.
- **Tính năng mèo chuyển đổi ba tư thế giữa các trang** (animation và logic chuyển tư thế): tạm hoãn sang giai đoạn phát triển sau; tài nguyên SVG được giữ lại.
- Tích hợp dữ liệu hay dịch vụ thật; mã chính thức; chọn công nghệ.
- Mua ảnh, phông chữ hay dịch vụ; quyết định nhận diện cuối cùng.

## 9. Cách phối hợp

Chủ dự án chuyển bản thiết kế và demo của bạn cho Claude, Codex và ChatGPT. Claude rà soát câu chữ và nghiệp vụ theo mục 4 và 7; Codex đánh giá khả năng xây; ChatGPT hỗ trợ điều phối và đánh giá phương án. Chủ dự án duyệt trước khi triển khai chính thức. Xin ghi rõ điều nào là xác nhận, giả định, đề xuất hay còn thiếu.
