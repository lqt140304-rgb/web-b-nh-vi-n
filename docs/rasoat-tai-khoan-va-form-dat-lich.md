# Rà soát của Claude: tài khoản khách và form đặt lịch (bản cập nhật không OTP)

**Ngày:** 13/10/2026 · **Người soạn:** Claude · **Trạng thái:** bản nháp để Codex và Gemini phản biện, chưa phải quyết định chung.

**Quy ước nhãn**
- **[Đã chốt]**: do chủ dự án quyết định (theo bản cập nhật gần nhất).
- **[Đề xuất]**: ý kiến của Claude, cần phản biện.
- **[Giả định]**: điều tạm dùng để tính, chưa được xác nhận.
- **[Đã xác minh]** / **[Chưa xác minh]**: tình trạng kiểm chứng với tài liệu Supabase (xem mục 2).
- **[Cần chốt]**: quyết định còn thiếu.

Không có dữ liệu cá nhân thật trong tài liệu này. Chưa có mã, chưa mua dịch vụ nào.

---

## 1. Những gì đã chốt (nhắc lại để đối chiếu)

- **[Đã chốt]** Đăng ký bắt buộc: tên đăng nhập, số điện thoại, mật khẩu; hồ sơ có tên khách.
- **[Đã chốt]** Tên đăng nhập duy nhất; mỗi số điện thoại một tài khoản; đăng nhập bằng số điện thoại **hoặc** tên đăng nhập + mật khẩu.
- **[Đã chốt]** Tên đăng nhập không được có dạng số điện thoại. Chuẩn hóa số điện thoại trước khi kiểm tra trùng và đăng nhập.
- **[Đã chốt]** Email không bắt buộc. Không OTP ở bản đầu.
- **[Đã chốt]** Cả khách vãng lai và khách đăng nhập đều gửi được form. Khách vãng lai không bị tự gắn vào tài khoản theo số điện thoại và không tra cứu lịch sử chỉ bằng số điện thoại.
- **[Đã chốt]** Yêu cầu giữ bản chụp thông tin tại thời điểm gửi.
- **[Đã chốt]** Khác thông tin thì tiếp nhận; giống toàn bộ thông tin sau chuẩn hóa thì chống trùng; không dùng riêng số điện thoại để chặn.
- **[Đã chốt]** Vẫn giữ giới hạn tần suất và kiểm tra dữ liệu phía máy chủ.
- **Giới hạn cần ghi rõ:** số điện thoại **chưa được xác minh quyền sở hữu**, và chưa có quy trình được duyệt cho đăng ký nhầm, tranh chấp số, quên mật khẩu. Mục 5 đề xuất quy trình tối thiểu.

---

## 2. Kết quả kiểm chứng Supabase

Ghi chú về phương pháp: truy cập trực tiếp trang `supabase.com` từ môi trường làm việc bị lỗi mạng, nên tôi chỉ đọc được **đoạn trích kết quả tìm kiếm**, không đọc được toàn văn tài liệu. Vì vậy mọi mục dưới đây cần Codex xác minh lại trên tài liệu hiện hành trước khi dựa vào.

| Nội dung | Tình trạng | Ghi chú |
|---|---|---|
| Đăng nhập bằng số điện thoại cần cấu hình nhà cung cấp SMS | [Đã xác minh] theo đoạn trích | Tài liệu về đăng nhập bằng điện thoại nói cần thiết lập nhà cung cấp SMS. |
| Khi bật xác minh điện thoại, người dùng nhận mã 6 số qua SMS và phải xác nhận trong 60 giây | [Đã xác minh] theo đoạn trích | Khi tắt thì không có bước này, nhưng tôi **chưa thấy** tài liệu hosted nêu rõ công tắc tương ứng. |
| Có thể đăng ký bằng điện thoại **không cần xác nhận** | [Chưa xác minh] | Mẫu cấu hình cộng đồng cho môi trường cục bộ có tùy chọn tắt xác nhận. Chưa rõ trên bản hosted có tương đương không, và chưa rõ có còn cần nhà cung cấp SMS khi tắt xác nhận hay không. |
| Tài liệu cảnh báo số điện thoại bị nhà mạng cấp lại, khuyến nghị dùng xác thực hai bước | [Đã xác minh] theo đoạn trích | Đúng với rủi ro chiếm số ở dự án này. |
| Không có đăng nhập bằng tên đăng nhập có sẵn | [Đã xác minh] theo đoạn trích | Hướng thường dùng là hàm phía máy chủ: tra tên đăng nhập, rồi đăng nhập bằng danh tính nội bộ. Một bài hướng dẫn của Supabase mô tả hướng này nhưng đoạn trích không đầy đủ. |
| Quản trị viên đổi mật khẩu người dùng bằng API quản trị (cần khóa service-role, chỉ chạy ở máy chủ) | [Đã xác minh] theo đoạn trích | Trang tham chiếu `updateUserById` có ví dụ đổi mật khẩu. |
| Giới hạn tần suất của Auth, một số mức chỉnh được | [Đã xác minh] một phần | Email gửi mặc định rất thấp (3/giờ, số liệu năm 2023) cho tới khi dùng SMTP riêng; OTP mặc định 30/giờ. Mức giới hạn đăng nhập bằng mật khẩu theo từng gói **chưa xác minh**. |
| Chặn mật khẩu bị lộ (kiểm tra qua cơ sở dữ liệu rò rỉ) chỉ ở gói Pro trở lên | [Chưa xác minh] | Chỉ có nguồn thứ cấp. Cần kiểm tra trang giá và tài liệu chính thức. |
| API thu hồi toàn bộ phiên của một người dùng khi đổi mật khẩu | [Chưa xác minh] | Cần Codex tra cứu. |

Nguồn đã đọc (đoạn trích):
- Đăng nhập bằng điện thoại: https://supabase.io/docs/guides/auth/phone-login và https://supabase.com/docs/guides/auth/phone-login/twilio
- Mật khẩu: https://supabase.com/docs/guides/auth/passwords?flow=pkce
- Quản trị đổi người dùng: https://supabase.com/docs/reference/javascript/auth-admin-updateuserbyid
- Giới hạn tần suất: https://supabase.com/docs/guides/auth/rate-limits
- Đăng nhập bằng tên đăng nhập (bài hướng dẫn): https://dev.to/supabase/building-user-authentication-with-username-and-password-using-supabase-n4h

---

## 3. Mô hình tài khoản [Đề xuất]

### 3.1. Hai phương án nền

**Phương án B (khuyến nghị): danh tín nội bộ + tra cứu phía máy chủ.**
- Mỗi tài khoản khách có một **danh tính nội bộ** trong Supabase Auth (email giả ngẫu nhiên, không lộ ra ngoài, không suy ra từ số điện thoại hay tên đăng nhập). Mật khẩu do Supabase Auth lưu và băm. **Chúng ta không tự lưu mật khẩu.**
- Form đăng nhập gửi "số điện thoại hoặc tên đăng nhập" + mật khẩu tới **một đường dẫn phía máy chủ**. Máy chủ chuẩn hóa, tra bảng hồ sơ để lấy danh tính nội bộ, rồi gọi đăng nhập bằng mật khẩu của Supabase. Trình duyệt không bao giờ thấy email giả.
- **Tắt đăng ký trực tiếp** trên Supabase. Mọi đăng ký đi qua đường dẫn máy chủ của chúng ta: kiểm tra dữ liệu, giới hạn tần suất, chống bot, tạo tài khoản, tạo hồ sơ.
- Ưu điểm: không phụ thuộc nhà cung cấp SMS, không cần xác nhận điện thoại hay email, chi phí thấp. Hai cách đăng nhập chạy cùng một cơ chế.
- Nhược điểm: ta tự viết tầng tra cứu và đăng ký, nên phải tự lo chống dò quét (mục 3.4). Chức năng gửi email đặt lại mật khẩu có sẵn của Supabase không dùng được với email giả.

**Phương án A: dùng số điện thoại làm danh tính của Supabase với xác nhận tắt.**
- Đơn giản hơn nếu hoạt động, nhưng **[Chưa xác minh]** còn cần nhà cung cấp SMS hay không khi tắt xác nhận. Tên đăng nhập vẫn phải tra cứu phía máy chủ. Thêm rủi ro: danh tính gắn với số điện thoại làm dễ dò quét trực tiếp vào Supabase, đi vòng qua giới hạn của ta.
- Chỉ nên xét nếu Codex xác minh được rằng nó chạy không cần SMS.

**[Cần chốt]** Codex đánh giá và chọn phương án; Claude nghiêng về B.

### 3.2. Thực thể (mức khái niệm, chưa phải schema)

- **Danh tính đăng nhập** (Supabase Auth): chỉ chứa danh tính nội bộ và mật khẩu băm. Không chứa dữ liệu nghiệp vụ.
- **Hồ sơ tài khoản web** (bảng của ta, khóa = mã danh tính nội bộ):
  - Tên khách.
  - Tên đăng nhập (chuẩn hóa chữ thường, duy nhất không phân biệt hoa thường).
  - Số điện thoại dạng chuẩn quốc tế (duy nhất trong các tài khoản đang hoạt động).
  - Trạng thái số điện thoại: `chưa_xác_minh`, `nhân_viên_đã_xác_minh`, `đang_tranh_chấp`.
  - Email tùy chọn và thời điểm xác minh (trống ở bản đầu).
  - Trạng thái tài khoản (hoạt động, bị khóa, đã xóa), cờ "phải đổi mật khẩu".
- **Hồ sơ khách hàng** (bản ghi chuẩn của bệnh viện): **chưa tạo ở bản đầu.** Khi nhập GPet sau này, liên kết giữa tài khoản web và hồ sơ khách hàng chỉ do nhân viên tạo sau khi xác minh, **không bao giờ tự động theo số điện thoại**. Chừa sẵn chỗ cho tham chiếu GPet.
- **Thú cưng** thuộc về tài khoản. **Yêu cầu đặt lịch** giữ bản chụp riêng nên không bị đổi khi sửa hoặc xóa thú cưng.
- Các bảng hỗ trợ: yêu cầu hỗ trợ tài khoản, nhật ký thao tác nhạy cảm, bộ đếm giới hạn tần suất, bản ghi đồng ý, hàng đợi thông báo. Chi tiết ở các mục 5, 6, 7.

### 3.3. Quy tắc tên đăng nhập và số điện thoại [Đề xuất]

**Tên đăng nhập**
- Dài khoảng 4–30 ký tự, chỉ dùng chữ Latin không dấu, số, và vài dấu nối (ví dụ `.`, `_`, `-`). Dùng ASCII để tránh ký tự lừa mắt.
- **Phải có ít nhất một chữ cái.** Quy tắc này đã loại các chuỗi chỉ gồm số. Sau khi bỏ khoảng trắng, dấu nối và dấu `+`, nếu kết quả là một số điện thoại hợp lệ thì từ chối. Như vậy một chuỗi nhập vào luôn thuộc đúng một trong hai loại: số điện thoại hoặc tên đăng nhập.
- Chặn từ dành riêng (ví dụ admin, lễ tân, tên bệnh viện).
- Không phân biệt hoa thường: lưu dạng chuẩn thường, kiểm tra duy nhất trên dạng đó.

**Số điện thoại**
- Chuẩn hóa về dạng quốc tế: `0912…`, `84912…`, `+84912…` cùng một khóa.
- Dùng thư viện số điện thoại đã được kiểm chứng để kiểm tra, không tự viết biểu thức. Có thể giới hạn ở số di động Việt Nam; **[Cần chốt]** có nhận số cố định không.
- Chuẩn hóa dùng chung cho đăng ký, đăng nhập, form đặt lịch và so khớp chống trùng, để không lệch.

### 3.4. Chống dò quét và tấn công đoán mật khẩu

- **Thông báo đăng nhập sai chung chung**, không phân biệt "không có tài khoản" với "sai mật khẩu".
- **Giới hạn đăng nhập sai** theo từng định danh được nhập và theo địa chỉ mạng, ở lớp máy chủ của ta (đường dẫn tra cứu), vì Supabase chỉ thấy danh tính nội bộ. Ưu tiên **làm chậm lũy tiến và yêu cầu kiểm tra chống bot sau vài lần sai**, thay vì khóa cứng. Khóa cứng cho phép kẻ xấu cố ý khóa tài khoản người khác.
- **Đăng ký tiết lộ sự tồn tại.** Khi báo "số này đã đăng ký" hoặc "tên đăng nhập đã dùng", người ngoài dò được số điện thoại nào là khách của bệnh viện. Không tránh được hoàn toàn khi không có OTP. Giảm bằng chống bot, giới hạn tần suất theo địa chỉ và theo số điện thoại, và đặt thông báo ở mức tối thiểu cần thiết. Cần ghi nhận đây là rủi ro được chấp nhận có chủ đích. Kiểm tra tên đăng nhập còn trống (nếu có) cũng cần giới hạn tần suất.
- **Danh tính nội bộ ngẫu nhiên**, không suy ra từ điện thoại hay tên đăng nhập. Nếu suy ra được, kẻ tấn công gọi thẳng vào Supabase để đi vòng giới hạn của ta.
- **Chính sách mật khẩu:** độ dài tối thiểu hợp lý (từ 8, nên 10) và cho phép dài; không bắt quy tắc ký tự phức tạp; chặn mật khẩu rất phổ biến. Chặn mật khẩu bị rò rỉ nếu gói dịch vụ hỗ trợ **[Chưa xác minh]**.
- **Phiên đăng nhập:** dùng thư viện chính thức của Supabase cho Next.js, không tự phát minh cách lưu phiên. Sau khi đổi hoặc đặt lại mật khẩu, thu hồi các phiên khác **[Chưa xác minh] API**.
- **Mật khẩu của khách không bao giờ hiện cho nhân viên**, không ghi vào nhật ký, không đưa vào email.

---

## 4. Form đặt lịch, chống trùng và rò rỉ giữa khách vãng lai và tài khoản [Đề xuất]

### 4.1. Nguyên tắc: không bao giờ nối theo nội dung hoặc số điện thoại

Một yêu cầu của khách vãng lai không có chủ sở hữu là tài khoản. Không cơ chế nào được tạo liên kết giữa yêu cầu và tài khoản dựa trên số điện thoại, tên hay nội dung trùng.

**Bất biến cần giữ và kiểm thử:**
1. Khách chỉ đọc được yêu cầu có mã tài khoản trùng với tài khoản đang đăng nhập. Yêu cầu không có mã tài khoản thì **không ai trong số khách đọc được**.
2. Không có truy vấn nào dành cho khách nối số điện thoại của yêu cầu với số điện thoại của tài khoản.
3. Khách vãng lai không có cách xem, tìm hay đoán trạng thái của bất kỳ yêu cầu nào.

### 4.2. Chống trùng theo phạm vi chủ thể [Đề xuất chính]

Khóa chống trùng gồm **chủ thể** + các trường đã chuẩn hóa:
- Chủ thể = mã tài khoản nếu đang đăng nhập; = một giá trị cố định "vãng lai" nếu không.
- Hệ quả: chống trùng **không bao giờ vượt qua ranh giới giữa các chủ thể**.
  - Khách vãng lai gửi nội dung giống một yêu cầu của tài khoản: tạo yêu cầu mới (không khớp, không lộ gì, không gắn vào tài khoản đó).
  - Tài khoản gửi nội dung giống một yêu cầu vãng lai: cũng tạo yêu cầu mới, và xuất hiện đúng trong danh sách của tài khoản đó.
- Chi phí chấp nhận được: thỉnh thoảng nhân viên thấy hai yêu cầu cùng nội dung. Giao diện nhân viên đã có gợi ý "còn N yêu cầu cùng số điện thoại" và thao tác gộp, nên không cần chặn thêm.
- Lý do không dùng khóa chung toàn hệ thống: nếu tài khoản gửi nội dung trùng với yêu cầu vãng lai cũ, hệ thống chống trùng sẽ thông báo thành công mà yêu cầu không xuất hiện trong danh sách "Yêu cầu của tôi", gây khó hiểu; còn nếu để khắc phục bằng cách gắn yêu cầu cũ vào tài khoản thì vi phạm điều đã chốt.
- Bên trong chủ thể "vãng lai": các khách vãng lai khác nhau gửi nội dung giống hệt nhau cũng bị coi là trùng. Điều này vô hại vì nhân viên sẽ gọi đúng số điện thoại đó.

### 4.3. Thông báo phản hồi: giống hệt trong mọi trường hợp

- Mọi lần gửi hợp lệ (tạo mới hoặc bị chống trùng) trả về **cùng một thông báo thành công**, ví dụ: "Chúng tôi đã nhận yêu cầu. Nhân viên sẽ gọi xác nhận."
- Không bao giờ hiển thị nội dung, trạng thái hay thời gian của yêu cầu đang có.
- **Không bao giờ nhắc "số này đã có tài khoản, hãy đăng nhập"** khi khách vãng lai gửi form. Lời nhắc đó là bộ dò số điện thoại. Chỉ hiển thị lời mời đăng ký tài khoản **giống nhau cho mọi khách vãng lai**.
- Sự kiện "khách gửi lại" chỉ ghi vào lịch sử cho nhân viên, **không hiện cho khách**.
- Không gửi email xác nhận tới email do khách nhập (tránh bị lợi dụng gửi thư cho người thứ ba). Email chỉ báo cho nhân viên và không chứa tên chủ, số điện thoại hay thú cưng.

### 4.4. Các điểm khác của form

- **Khách đăng nhập:** tự điền tên và số điện thoại từ hồ sơ; chọn thú cưng đã lưu hoặc thêm mới; chọn dịch vụ và ngày. **[Cần chốt]** khách có được sửa số liên hệ trong từng yêu cầu (ví dụ đặt hộ người thân) không. Đề xuất: cho sửa, vì bản chụp đã lưu số được dùng cho yêu cầu đó, nhưng gắn cờ cho nhân viên khi số khác số trong hồ sơ.
- **Thú cưng đã lưu:** khi lưu thêm, cảnh báo mềm nếu trùng tên + loài + giống với con đã có (không chặn, vì có thể là hai con cùng tên).
- **Bản chụp:** yêu cầu lưu sao chép tên chủ, số liên hệ, thông tin thú cưng, tên dịch vụ tại thời điểm gửi.
- **Ngày mong muốn bắt buộc** và không được là ngày đã qua. Điều này giữ cho chặn trùng với yêu cầu "đã xác nhận" có giới hạn tự nhiên.
- **Kiểm tra dữ liệu phía máy chủ**: độ dài, định dạng, danh sách giá trị cho loài và dịch vụ; ghi chú (nếu có) giới hạn độ dài.
- **Ghi nhận đồng ý** xử lý dữ liệu cá nhân với phiên bản nội dung và thời điểm.

### 4.5. Chống spam (tách riêng với chống trùng)

Chống trùng là quy tắc xác định, bảo vệ khỏi gửi lặp. Chống spam là lớp giới hạn khác (theo địa chỉ mạng, theo số điện thoại đã nhập, theo tài khoản; chống bot; cờ "cần xem xét" ở ngưỡng thấp, từ chối ở ngưỡng cao). Ngưỡng cần điều chỉnh theo thực tế, **[Cần chốt]**. Bộ đếm phải nằm ở nơi dùng chung (cơ sở dữ liệu hoặc kho khóa-giá trị), vì môi trường serverless không giữ bộ nhớ giữa các lần gọi.

---

## 5. Quy trình tối thiểu không dùng OTP [Đề xuất]

Nguyên tắc: khối lượng nhỏ, làm thủ công qua nhân viên, mọi bước nhạy cảm ghi nhật ký. Cần quản lý và lễ tân duyệt quy trình, vì chủ dự án chưa duyệt quy trình nào.

### 5.1. Công cụ chung: yêu cầu hỗ trợ tài khoản

- Một form công khai "Cần hỗ trợ tài khoản" (loại: quên mật khẩu, đổi số, số bị đăng ký nhầm, khác), thu: định danh khách nhớ (tên đăng nhập hoặc số), số điện thoại liên hệ, mô tả ngắn.
- Phản hồi thống nhất "Chúng tôi sẽ liên hệ lại", không tiết lộ tài khoản có tồn tại không. Khách cũng có thể gọi thẳng cho bệnh viện.
- Nhân viên xử lý yêu cầu trên trang quản trị, có trạng thái và nhật ký như yêu cầu đặt lịch. Giới hạn tần suất và chống bot cho form này.

### 5.2. Quên mật khẩu

1. Khách gửi yêu cầu hỗ trợ hoặc gọi.
2. Nhân viên **gọi lại đúng số điện thoại đang lưu trong tài khoản** (không gọi số khách tự đọc). Gọi lại là điểm bảo vệ: nếu số bị người khác chiếm đăng ký, cuộc gọi sẽ đến chủ số thật.
3. Hỏi vài thông tin chỉ chủ tài khoản biết (ví dụ tên thú cưng đã lưu, ngày gần nhất gửi yêu cầu). Nhân viên **không đọc dữ liệu tài khoản cho người gọi**.
4. Nếu đạt: nhân viên kích hoạt "đặt lại mật khẩu"; hệ thống tạo **mật khẩu tạm ngẫu nhiên**, hiển thị **một lần** cho nhân viên đọc qua điện thoại, và bật cờ "phải đổi mật khẩu". Khách đăng nhập và phải đặt mật khẩu mới ngay. Mật khẩu tạm dùng API quản trị của Supabase (đã xác minh cơ bản ở mục 2), hết hạn nếu không dùng.
5. Thu hồi các phiên cũ. Ghi nhật ký: ai, lúc nào, tài khoản nào, kết quả.
6. Nếu tài khoản có email đã xác minh (giai đoạn sau), gửi thông báo "mật khẩu vừa được đặt lại".
- **Rủi ro chính:** đây là điểm tấn công kỹ thuật xã hội (kẻ xấu gọi bệnh viện giả làm chủ tài khoản). Giảm bằng: gọi lại số trên hồ sơ, câu hỏi kiểm tra, không tiết lộ dữ liệu, bắt buộc đổi mật khẩu, nhật ký. Dữ liệu trong tài khoản là mức nhạy cảm vừa (tên, số điện thoại, thông tin thú cưng, lịch sử yêu cầu).
- **Phương án khác:** mã dùng một lần do nhân viên đọc cho khách rồi khách tự đặt mật khẩu mới trên web. An toàn hơn (nhân viên không biết mật khẩu nào), nhưng phải tự xây phần kiểm tra mã. Codex đánh giá chi phí.
- **Khôi phục bằng email (giai đoạn sau, tùy chọn):** chỉ khi email đã xác minh bằng thư xác nhận. Với phương án B, cần tự gửi thư thông qua dịch vụ email riêng vì email giả không dùng được. Chưa đưa vào bản đầu.

### 5.3. Đổi số điện thoại

- **Khách tự đổi khi đang đăng nhập:** yêu cầu nhập lại mật khẩu hiện tại; kiểm tra số mới chưa có tài khoản; trạng thái số quay về `chưa_xác_minh`; ghi nhật ký; giới hạn số lần đổi. Không thêm rủi ro mới so với đăng ký (vì đăng ký cũng không xác minh), nhưng cần giới hạn để tránh chiếm hàng loạt số.
- **Khách mất cả mật khẩu và số cũ:** đi qua quy trình hỗ trợ 5.1, nhân viên xác minh bằng thông tin kiểm tra và cuộc gọi, rồi quản lý đổi số hoặc cấp tài khoản mới. Chọn cách nào là **[Cần chốt]**.

### 5.4. Đăng ký nhầm và tranh chấp số

Tình huống: ai đó đã đăng ký tài khoản bằng số của người khác (cố ý hoặc nhầm), chủ số thật không đăng ký được.
1. Chủ số thật gửi yêu cầu hỗ trợ "số bị đăng ký nhầm" hoặc gọi bệnh viện.
2. Quản lý **gọi vào số đó** và xác nhận người nghe là chủ số, hỏi họ có đăng ký tài khoản không.
3. Nếu chủ số xác nhận **không đăng ký**: quản lý đặt tài khoản kia vào trạng thái `đang_tranh_chấp` và **khóa tạm** (không xóa, giữ lịch sử và yêu cầu), **giải phóng số** để chủ số thật đăng ký. Ghi nhật ký đầy đủ.
4. Nếu chủ số **là người đăng ký** nhưng đã quên: chuyển sang quy trình quên mật khẩu.
5. Nếu hai bên cùng nhận: quản lý quyết định theo thông tin sẵn có, có thể yêu cầu cả hai đến trực tiếp. Không thể giải quyết hoàn toàn bằng kỹ thuật.
- Khi nhân viên **gọi xác nhận lần đầu** một yêu cầu đặt lịch thành công, có thể đánh dấu số là `nhân_viên_đã_xác_minh`. Số đã xác minh khó bị chiếm hơn trong tranh chấp (cần quản lý), và là cách xác minh số điện thoại **không tốn phí SMS**.
- Chiếm số bởi người lạ **không cho họ xem dữ liệu của chủ số thật**, nhờ nguyên tắc ở mục 4.1: khách vãng lai không tự gắn vào tài khoản theo số điện thoại. Tác hại chính là chủ số thật bị chặn đăng ký và nhân viên có thể gọi nhầm người.

### 5.5. Số bị nhà mạng cấp lại cho người khác

Giống 5.4: người dùng mới của số gặp thông báo "số đã đăng ký". Quản lý gọi số đó, nếu chủ cũ không còn dùng được và người mới chứng minh đang giữ số, thì giải phóng. Nhật ký bắt buộc.

### 5.6. Xóa tài khoản

Xóa mềm: giải phóng số và tên đăng nhập, giữ yêu cầu đã gửi (đã có bản chụp) theo chính sách lưu trữ, bỏ thông tin định danh thừa nếu chính sách yêu cầu. **[Cần chốt]** thời gian lưu và nội dung chính sách.

---

## 6. Phân quyền [Đề xuất]

- Khách: chỉ đọc và thêm dữ liệu của chính tài khoản mình; không bao giờ sửa trạng thái hay trường nhân viên.
- Dữ liệu của khách bật Row Level Security cho mọi bảng; **bảng quên bật là bảng mở**. Khóa service-role chỉ có ở máy chủ, không bao giờ có trong biến môi trường công khai.
- Vai trò nhân viên lưu ở nơi người dùng không tự sửa được (bảng riêng, hoặc metadata chỉ máy chủ ghi). Tài khoản nhân viên do quản lý tạo; khách tự đăng ký không bao giờ có vai trò nhân viên.
- Thao tác nhạy cảm (đặt lại mật khẩu, giải phóng hoặc đổi số, khóa tài khoản) chỉ qua máy chủ, kiểm tra vai trò, ghi nhật ký. **[Cần chốt]** lễ tân được làm những thao tác nào. Gợi ý: lễ tân xử lý quên mật khẩu thông thường; chỉ quản lý giải phóng/đổi số và khóa tài khoản. Vì quản lý chỉ có một người nên cần phương án dự phòng.
- Quản lý bật xác thực hai bước cho tài khoản của mình (một người giữ toàn quyền, tài khoản đó là mục tiêu lớn nhất). Phương thức không cần SMS, ví dụ ứng dụng sinh mã, **[Chưa xác minh]** cách Supabase hỗ trợ.

---

## 7. Rủi ro còn lại do bỏ OTP (ghi nhận)

1. Số điện thoại chưa xác minh: có thể bị chiếm đăng ký, nhân viên có thể gọi nhầm người.
2. Dò số điện thoại qua thông báo "số đã đăng ký".
3. Kỹ thuật xã hội vào quy trình quên mật khẩu qua điện thoại.
4. Quản lý là một điểm nghẽn cho các thao tác nhạy cảm.
5. Tài khoản rác và đăng ký hàng loạt (chi phí nhỏ, nhưng làm bẩn dữ liệu và nhật ký).
6. Chưa có cách thông báo cho khách ngoài cuộc gọi, vì không có email hoặc SMS bắt buộc.
Các điểm này **không** phải lý do bỏ quyết định của chủ dự án, nhưng cần được ghi nhận và xem lại khi lưu lượng tăng.

---

## 8. Quyết định còn thiếu [Cần chốt]

**Từ chủ dự án**
1. Có nhận số cố định hay chỉ số di động?
2. Khách đăng nhập có được sửa số liên hệ trong từng yêu cầu không?
3. Lễ tân được làm thao tác nhạy cảm nào; ai dự phòng khi quản lý vắng?
4. Duyệt quy trình tối thiểu ở mục 5 (quên mật khẩu, đổi số, tranh chấp số) hay điều chỉnh.
5. Chính sách lưu trữ và xóa dữ liệu, nội dung thông báo đồng ý.
6. Ngưỡng giới hạn tần suất ban đầu, người theo dõi cờ "cần xem xét".
7. Có đưa email xác minh (khôi phục qua thư) vào giai đoạn sau không.

**Từ Codex**
8. Phương án A hay B (mục 3.1); xác minh phone+mật khẩu không xác nhận trên bản hosted có cần nhà cung cấp SMS không.
9. Xác minh các mục [Chưa xác minh] ở mục 2, đặc biệt: chặn mật khẩu bị rò rỉ theo gói, thu hồi phiên, hỗ trợ xác thực hai bước không SMS, giới hạn đăng nhập theo gói.
10. Đánh giá chi phí phương án "mã dùng một lần do nhân viên đọc" so với "mật khẩu tạm".
11. Cách chạy bộ đếm giới hạn tần suất trên Vercel (kho dùng chung).

**Từ Gemini**
12. Luồng đăng ký, đăng nhập (một ô cho "số điện thoại hoặc tên đăng nhập"), thông báo lỗi chung, màn hình "Cần hỗ trợ tài khoản", thông báo thành công thống nhất, và lời mời đăng ký không lộ trạng thái số điện thoại.

---

## 9. Kịch bản kiểm thử gợi ý (dữ liệu giả)

| # | Tình huống | Kết quả mong đợi |
|---|---|---|
| 1 | Đăng ký tên đăng nhập toàn số hoặc dạng số điện thoại | Từ chối |
| 2 | Đăng ký hai lần cùng số `0900000001` và `+84900000001` | Lần hai bị từ chối (cùng khóa chuẩn hóa) |
| 3 | Tên đăng nhập `Khach.A` và `khach.a` | Coi là trùng |
| 4 | Đăng nhập bằng số dạng `0900000001`, `+84900000001` | Cùng một tài khoản |
| 5 | Đăng nhập sai (không có tài khoản / sai mật khẩu) | Cùng một thông báo, thời gian gần nhau |
| 6 | Sai mật khẩu nhiều lần | Làm chậm và yêu cầu chống bot; chủ thật vẫn đăng nhập được sau đó |
| 7 | Khách vãng lai gửi form với số đã có tài khoản | Phản hồi như khách vãng lai khác; không có gợi ý đăng nhập riêng; yêu cầu **không** xuất hiện trong tài khoản nào |
| 8 | Tài khoản gửi nội dung giống một yêu cầu vãng lai | Tạo yêu cầu mới, hiện trong danh sách của tài khoản |
| 9 | Vãng lai gửi nội dung giống yêu cầu của tài khoản | Phản hồi thành công như thường, không lộ, không gắn vào tài khoản |
| 10 | Khách cố đọc yêu cầu của tài khoản khác hoặc yêu cầu vãng lai | Bị chặn ở tầng cơ sở dữ liệu |
| 11 | Mật khẩu tạm | Chỉ hiện một lần; đăng nhập xong bắt buộc đổi; phiên cũ bị thu hồi |
| 12 | Giải phóng số sau tranh chấp | Tài khoản cũ khóa, giữ dữ liệu; số đăng ký lại được; có nhật ký |
| 13 | Đổi số sang số đã có tài khoản | Từ chối, không lộ thêm thông tin |
| 14 | Gửi yêu cầu hỗ trợ cho tài khoản không tồn tại | Cùng phản hồi như tài khoản có tồn tại |

---

*Tài liệu này chưa chốt kiến trúc hay công nghệ; mọi nội dung [Đề xuất] cần các bên phản biện trước khi trở thành quyết định.*
