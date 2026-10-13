# Rà soát của Claude: tài khoản khách và form đặt lịch (bản 3, sau quyết định chống trùng)

**Ngày:** 13/10/2026 · **Người soạn:** Claude · **Trạng thái:** bản nháp để Codex, Gemini và chủ dự án phản biện. Duy nhất mục 4.2 (phạm vi chống trùng) đã được chủ dự án chốt. Quyết định này **không** duyệt toàn bộ thiết kế, cơ chế đăng nhập, quy trình khôi phục hay tập trạng thái; các mục khác giữ nguyên nhãn.

**Quy ước nhãn**
- **[Đã chốt]**: do chủ dự án quyết định.
- **[Đề xuất]**: ý kiến của Claude hoặc Codex, cần phản biện.
- **[Chờ kiểm chứng]**: chưa có căn cứ đủ để khẳng định, phải thử hoặc đọc tài liệu hiện hành.
- **[Cần chốt]**: quyết định còn thiếu.

Không có dữ liệu cá nhân thật. Chưa có mã, chưa mua dịch vụ nào.

---

## 0. Thay đổi so với các bản trước

Các bản trước nằm ở lịch sử git của nhánh. Bản 2 tiếp thu phản hồi của Codex, bản 3 ghi nhận quyết định chống trùng của chủ dự án, như sau.

| Điểm Codex nêu | Claude xử lý |
|---|---|
| Email nội bộ không phải bí mật; trình duyệt có thể thấy nó (JWT chứa email) | **Chấp nhận.** Bỏ câu "trình duyệt không bao giờ thấy". Chỉ giữ ý: danh tính ngẫu nhiên, không suy ra từ số điện thoại, là lớp phụ chứ không phải bảo vệ chính (mục 3.2). |
| Giới hạn ở đường dẫn Next.js không áp dụng cho API Auth của Supabase | **Chấp nhận.** Phải kiểm tra việc gọi trực tiếp Auth (mục 3.3). |
| Chưa đủ căn cứ loại phương án điện thoại + mật khẩu | **Chấp nhận.** Giữ cả A và B ở trạng thái chờ kiểm chứng; bỏ lời khuyến nghị B (mục 3.1). |
| Gọi lại số đang lưu không chứng minh quyền với tài khoản cũ (số có thể đã cấp lại) | **Chấp nhận.** Tách ba việc: khôi phục tài khoản cũ, giải phóng số, đặt lại mật khẩu (mục 5). |
| Mật khẩu tạm không tự hết hạn; thu hồi phiên chưa chắc có hiệu lực ngay | **Chấp nhận.** Chuyển sang [Chờ kiểm chứng], bỏ lời hứa "mọi phiên mất hiệu lực ngay" (mục 5.3). |
| Câu "bảng không bật RLS là bảng mở" chưa chính xác | **Chấp nhận.** Diễn đạt lại (mục 6). |
| Chống trùng theo phạm vi tài khoản là ngoại lệ so với điều đã chốt | **Chấp nhận.** Bản 2 ghi là ngoại lệ cần duyệt. **Cập nhật bản 3:** chủ dự án đã chọn phương án 1, chống trùng trong từng phạm vi, và chấp nhận ngoại lệ (mục 4.2, **[Đã chốt]**). |
| Giữ phạm vi nhỏ: chưa gộp yêu cầu, đặt hộ, form hỗ trợ riêng, nhiều tầng cảnh báo | **Chấp nhận.** Gỡ các mục này khỏi thiết kế chính, chuyển sang mục 8 "chưa duyệt". |
| Bộ đếm lưu trong PostgreSQL, không mua Redis | **Đồng ý.** |

**Điều Claude giữ lại một phần:** danh tính nội bộ ngẫu nhiên vẫn nên dùng nếu chọn B, vì nếu suy ra được từ số điện thoại thì kẻ tấn công đoán được danh tính của người khác. Nó không thay cho việc kiểm tra gọi trực tiếp.

**Lưu ý kiểm chứng:** môi trường của Claude không truy cập được `supabase.com` (lỗi mạng), nên Claude **chưa tự đọc** các trang tài liệu Codex dẫn. Các khẳng định về Supabase trong tài liệu này dựa trên đoạn trích tìm kiếm và phản hồi của Codex, đều cần xác minh trên tài liệu hiện hành.

---

## 1. Những gì đã chốt

- **[Đã chốt]** Đăng ký bắt buộc: tên đăng nhập, số điện thoại, mật khẩu; hồ sơ có tên khách.
- **[Đã chốt]** Tên đăng nhập duy nhất; mỗi số điện thoại một tài khoản; đăng nhập bằng số điện thoại hoặc tên đăng nhập + mật khẩu; tên đăng nhập không có dạng số điện thoại; chuẩn hóa số điện thoại trước khi kiểm tra trùng và đăng nhập.
- **[Đã chốt]** Email không bắt buộc. Không OTP ở bản đầu.
- **[Đã chốt]** Khách vãng lai và khách đăng nhập đều gửi form. Khách vãng lai không bị tự gắn vào tài khoản theo số điện thoại và không tra cứu lịch sử chỉ bằng số điện thoại.
- **[Đã chốt]** Yêu cầu giữ bản chụp thông tin tại thời điểm gửi. Khác thông tin thì tiếp nhận; giống toàn bộ thông tin sau chuẩn hóa thì chống tạo trùng; không dùng riêng số điện thoại để chặn. Gửi form chưa phải đã duyệt lịch.
- **[Đã chốt]** Có trang quản trị và email báo nhân viên. Giữ giới hạn tần suất và kiểm tra dữ liệu phía máy chủ.
- **[Đã chốt]** Chống trùng **trong từng phạm vi**: mỗi tài khoản một phạm vi, mọi khách vãng lai chung một phạm vi (chi tiết mục 4.2). Cùng nội dung gửi ở hai phạm vi khác nhau có thể thành hai yêu cầu; chủ dự án đã hiểu và chấp nhận.
- **Giới hạn cần ghi rõ:** số điện thoại **chưa được xác minh quyền sở hữu**. Chưa có quy trình được duyệt cho đăng ký nhầm, tranh chấp số, quên mật khẩu.

---

## 2. Tình trạng kiểm chứng Supabase

| Nội dung | Tình trạng |
|---|---|
| Đăng nhập bằng điện thoại cần nhà cung cấp SMS khi muốn xác nhận điện thoại lúc đăng ký | Hai bên cùng thấy trong tài liệu (qua đoạn trích). |
| Đăng nhập bằng điện thoại + mật khẩu; API quản trị tạo tài khoản có tham số xác nhận điện thoại | Codex dẫn tài liệu. [Chờ kiểm chứng] trên dự án thử. |
| Đăng ký điện thoại + mật khẩu **không gửi SMS** và không cần nhà cung cấp SMS trên bản hosted | [Chờ kiểm chứng]. Chưa có bằng chứng đã chạy được. |
| Không có đăng nhập bằng tên đăng nhập có sẵn; dùng tra cứu phía máy chủ | Xác nhận theo đoạn trích. |
| Token truy cập (JWT) được ký chứ không mã hóa mặc định; có thể chứa email | Codex dẫn tài liệu. Claude chấp nhận. |
| Quản trị viên đổi mật khẩu bằng API quản trị (cần khóa quyền cao, chỉ ở máy chủ) | Xác nhận theo đoạn trích. |
| Mật khẩu tạm có hết hạn riêng; ép đổi mật khẩu ở mọi đường truy cập | **Không có sẵn** theo Codex. Phải tự thiết kế và kiểm chứng. |
| Thu hồi phiên có hiệu lực ngay, kể cả token truy cập còn hạn | [Chờ kiểm chứng]. Không hứa trước. |
| Giới hạn tần suất đăng nhập mật khẩu theo gói; chặn mật khẩu bị rò rỉ theo gói | [Chờ kiểm chứng]. |
| Xác thực hai bước không dùng SMS cho tài khoản quản lý | [Chờ kiểm chứng]. |

Nguồn đã dẫn (Claude chưa đọc toàn văn được):
- https://supabase.com/docs/guides/auth/passwords
- https://supabase.com/docs/guides/auth/jwts
- https://supabase.com/docs/guides/auth/sessions
- https://supabase.com/docs/guides/database/secure-data
- https://supabase.com/docs/reference/javascript/auth-admin-createuser
- https://supabase.com/docs/reference/javascript/auth-admin-updateuserbyid
- https://supabase.com/docs/guides/auth/rate-limits

---

## 3. Mô hình tài khoản [Đề xuất, chờ kiểm chứng]

### 3.1. Hai phương án nền, chưa chọn

Cả hai đều để Supabase Auth lưu và băm mật khẩu. **Chúng ta không tự xây hệ thống lưu mật khẩu.**

- **Phương án A: danh tính là số điện thoại + mật khẩu của Supabase, không gửi SMS.** Đơn giản nếu chạy được. Tên đăng nhập vẫn cần tra cứu phía máy chủ ra số điện thoại. Chờ kiểm chứng việc có cần nhà cung cấp SMS không.
- **Phương án B: danh tính nội bộ + tra cứu phía máy chủ.** Mỗi tài khoản có danh tính nội bộ trong Supabase Auth (ví dụ email ngẫu nhiên không suy ra từ số hay tên). Đường dẫn máy chủ nhận "số điện thoại hoặc tên đăng nhập", tra hồ sơ rồi đăng nhập bằng mật khẩu. Không phụ thuộc SMS, nhưng email nội bộ **không phải bí mật** và phải chịu được việc gọi trực tiếp Auth.

**[Đề xuất của cả hai bên]** chọn phương án sau khi kiểm chứng, không chọn trước (mục 3.3). Không yêu cầu chủ dự án bật lại OTP.

### 3.2. Thực thể (mức khái niệm, chưa phải schema)

- **Danh tính đăng nhập** (Supabase Auth): chỉ danh tính và mật khẩu băm. Không chứa dữ liệu nghiệp vụ. Nếu chọn B, danh tính nội bộ nên ngẫu nhiên và không suy ra từ số điện thoại hay tên đăng nhập, như lớp phụ, **không** coi là bí mật.
- **Hồ sơ tài khoản web** (bảng của ta): tên khách; tên đăng nhập đã chuẩn hóa (duy nhất không phân biệt hoa thường); số điện thoại dạng chuẩn quốc tế (duy nhất trong các tài khoản đang hoạt động); trạng thái số điện thoại (`chưa_xác_minh` là mặc định); email tùy chọn chưa xác minh; trạng thái tài khoản; cờ "phải đổi mật khẩu" nếu giữ cơ chế mật khẩu tạm.
- **Hồ sơ khách hàng** (bản ghi chuẩn của bệnh viện, dùng khi nhập GPet): **chưa tạo ở bản đầu.** Sau này liên kết giữa tài khoản web và hồ sơ khách hàng do nhân viên tạo sau khi xác minh, **không bao giờ tự động theo số điện thoại.**
- **Thú cưng** thuộc tài khoản. **Yêu cầu đặt lịch** giữ bản chụp riêng nên không đổi khi sửa hoặc xóa thú cưng.
- **Nhật ký thao tác nhạy cảm** (đặt lại mật khẩu, giải phóng số, khóa tài khoản): ai, lúc nào, tài khoản nào. **Không ghi mật khẩu hay token.**

### 3.3. Kế hoạch kiểm chứng trước khi chọn A hay B (Codex đề xuất, Claude đồng ý)

Làm trên **dự án thử, dữ liệu giả, cấu hình không gửi SMS**. **[Cần chốt]** dự án thử có phát sinh chi phí không, và ai tạo; chưa mua gì khi chưa duyệt.

1. Tạo tài khoản bằng điện thoại + mật khẩu mà không gửi SMS: có được không, có cần nhà cung cấp SMS không.
2. Đăng nhập, đổi số, đổi mật khẩu.
3. Tắt đăng ký trực tiếp: có còn tạo được tài khoản từ trình duyệt không.
4. **Gọi trực tiếp API Auth từ ngoài, đi vòng qua đường dẫn Next.js:** giới hạn tần suất nào còn hiệu lực; có thể dò danh tính hay thử mật khẩu bao nhiêu lần.
5. Nội dung token trình duyệt nhận (có email, số điện thoại không).
6. Thu hồi phiên: token truy cập còn hạn dùng được bao lâu sau khi đổi mật khẩu hay đăng xuất.
7. Hành vi khi cùng số điện thoại đăng ký hai lần hoặc hai định dạng khác nhau.

### 3.4. Quy tắc tên đăng nhập và số điện thoại [Đề xuất]

**Tên đăng nhập:** khoảng 4–30 ký tự; ASCII, chữ thường, số và vài dấu nối; **phải có ít nhất một chữ cái**; nếu bỏ khoảng trắng, dấu nối và dấu `+` mà thành số điện thoại hợp lệ thì từ chối; chặn từ dành riêng; không phân biệt hoa thường. Nhờ đó một chuỗi nhập luôn thuộc đúng một loại: số điện thoại hoặc tên đăng nhập.

**Số điện thoại:** chuẩn hóa về dạng quốc tế (`0900000001`, `84900000001`, `+84900000001` cùng một khóa); dùng thư viện số điện thoại đã kiểm chứng; **[Cần chốt]** có nhận số cố định không. Chuẩn hóa dùng chung cho đăng ký, đăng nhập, form đặt lịch và chống trùng.

### 3.5. Chống đoán mật khẩu và dò tài khoản

- Thông báo đăng nhập sai chung chung.
- Làm chậm lũy tiến và kiểm tra chống bot sau vài lần sai, thay vì khóa cứng (khóa cứng cho phép kẻ xấu khóa tài khoản người khác).
- **Giới hạn phải đặt ở nơi áp dụng thật**: giới hạn ở đường dẫn Next.js không tự áp dụng cho API Auth của Supabase (mục 3.3, bước 4). Kết quả kiểm chứng quyết định cần thêm biện pháp nào.
- Đăng ký phải báo "số/tên đã dùng", nên người ngoài dò được số nào đã có tài khoản. Không tránh được khi không có OTP. Giảm bằng chống bot và giới hạn tần suất; ghi nhận đây là rủi ro chấp nhận có chủ đích.
- Mật khẩu: độ dài tối thiểu hợp lý (từ 8, nên 10), cho phép dài, chặn mật khẩu rất phổ biến; chặn mật khẩu bị rò rỉ nếu gói hỗ trợ [chờ kiểm chứng]. Dùng thư viện chính thức của Supabase cho Next.js để quản lý phiên.
- Bộ đếm giới hạn tần suất lưu **trong PostgreSQL** bằng cập nhật nguyên tử, chưa cần dịch vụ riêng.

---

## 4. Form đặt lịch và chống trùng

### 4.1. Bất biến cần giữ và kiểm thử

1. Khách chỉ đọc được yêu cầu thuộc tài khoản của mình. Yêu cầu không có chủ sở hữu tài khoản thì **không khách nào đọc được**.
2. Không có truy vấn dành cho khách nối số điện thoại trong yêu cầu với số điện thoại của tài khoản.
3. Khách vãng lai không có cách xem, tìm hay đoán trạng thái của bất kỳ yêu cầu nào.
4. **Chủ thể của yêu cầu (tài khoản hay vãng lai) chỉ lấy từ phiên đăng nhập đã kiểm tra phía máy chủ.** Không bao giờ tin mã tài khoản hay cờ "vãng lai" do trình duyệt gửi lên. Nếu không có phiên hợp lệ thì chủ thể là vãng lai.

### 4.2. Phạm vi chống trùng **[Đã chốt: phương án 1, chống trùng trong từng phạm vi]**

Chủ dự án đã chọn (xác nhận trong chat Codex ngày 13/10/2026):

- Mỗi tài khoản là một phạm vi riêng. Tất cả khách vãng lai dùng chung một phạm vi.
- Trong cùng phạm vi, nếu toàn bộ thông tin đặt lịch giống nhau sau chuẩn hóa thì **không tạo thêm yêu cầu**, theo các trạng thái được phép áp dụng (tập trạng thái vẫn **[Cần chốt]**, xem mục 4.3).
- Khác thông tin thì vẫn tiếp nhận để nhân viên xét duyệt; không tự xác nhận lịch.
- **Ngoại lệ đã được chấp nhận:** cùng nội dung gửi khi vãng lai rồi gửi lại sau khi đăng nhập có thể thành hai yêu cầu.
- Nhân viên kiểm tra khi liên hệ xác nhận. **Không tự gộp, không chuyển chủ sở hữu, không đưa yêu cầu vãng lai vào lịch sử tài khoản.**
- Khách chỉ thấy yêu cầu thuộc tài khoản của mình. Khách vãng lai không tra cứu lịch sử bằng số điện thoại.

**Ví dụ đã được chủ dự án đồng ý** (dữ liệu giả): khách Lan đặt khám cho mèo Miu ngày 20/10.

| Bước | Hành động | Kết quả |
|---|---|---|
| 1 | Chưa đăng nhập, gửi form | Tạo yêu cầu A (phạm vi vãng lai) |
| 2 | Vẫn chưa đăng nhập, gửi lại nội dung giống hệt | Không tạo thêm |
| 3 | Đăng nhập, gửi lại cùng nội dung | Tạo yêu cầu B (phạm vi tài khoản) |
| 4 | Đang đăng nhập, gửi lại giống B | Không tạo thêm |
| 5 | Đổi ngày mong muốn sang 21/10 | Tạo yêu cầu mới |

Nhân viên thấy A và B. Khách chỉ thấy B trong tài khoản.

**Hệ quả thiết kế:** khóa chống trùng gồm **phạm vi** (mã tài khoản đã kiểm tra phía máy chủ, hoặc giá trị cố định "vãng lai") cộng các trường đã chuẩn hóa. Chống trùng không bao giờ vượt qua ranh giới giữa các phạm vi, nên không lộ chéo và không gắn yêu cầu vãng lai vào tài khoản.

**Phạm vi của quyết định này:** chỉ chốt phạm vi chống trùng. Chưa duyệt toàn bộ thiết kế, cơ chế đăng nhập (phương án A/B), quy trình khôi phục tài khoản hay tập trạng thái yêu cầu.

### 4.3. Cơ chế chống trùng chịu được hai lần gửi đồng thời [Đề xuất]

Cơ sở dữ liệu là nơi phân xử, không phải đoạn kiểm tra trong ứng dụng:
1. Máy chủ chuẩn hóa các trường (Unicode NFC, cắt và gộp khoảng trắng, không phân biệt hoa thường, **không bỏ dấu tiếng Việt**; điện thoại về dạng quốc tế; email viết thường) rồi tạo **một khóa trùng gồm phạm vi (mục 4.2) và các trường đã chuẩn hóa**, lưu cùng yêu cầu, kèm số phiên bản của cách tạo khóa.
2. Ràng buộc duy nhất cho khóa này, **chỉ áp dụng khi yêu cầu còn ở nhóm trạng thái đang xử lý**. Yêu cầu bị hủy hoặc bị từ chối giải phóng khóa nên khách gửi lại được.
3. Máy chủ thử ghi; nếu cơ sở dữ liệu báo trùng thì bỏ qua việc tạo mới. Hai lần gửi đồng thời: một lần ghi được, lần kia nhận "đã có".
4. Ngày mong muốn bắt buộc và không được là ngày đã qua, nên yêu cầu "đã xác nhận" chỉ chặn tạo trùng trong giới hạn tự nhiên.
5. Chỉ gửi email cho nhân viên khi tạo mới.
6. Nút gửi bị vô hiệu sau khi bấm; trình duyệt coi phản hồi "trùng" như thành công.
7. Trạng thái "Không liên lạc được" khi khách gửi lại giống hệt: **[Cần chốt]** vẫn chống trùng, hay cho tạo yêu cầu mới.

### 4.4. Phản hồi giống hệt cho mọi trường hợp

- Mọi lần gửi hợp lệ (tạo mới hay bị chống trùng) trả cùng một thông báo, ví dụ: "Chúng tôi đã nhận yêu cầu. Nhân viên sẽ gọi xác nhận."
- Không bao giờ hiển thị nội dung, trạng thái hay thời gian của yêu cầu có sẵn.
- **Không nhắc "số này đã có tài khoản, hãy đăng nhập"** khi khách vãng lai gửi form: đó là bộ dò số điện thoại. Lời mời đăng ký, nếu có, phải giống nhau cho mọi khách vãng lai.
- Không gửi email xác nhận tới email do khách nhập. Email báo nhân viên không chứa tên chủ, số điện thoại hay thông tin thú cưng, chỉ có "có yêu cầu mới" và liên kết đăng nhập.

### 4.5. Các điểm khác của form

- Khách đăng nhập: điền sẵn tên và số điện thoại; chọn thú cưng đã lưu hoặc thêm mới; chọn dịch vụ và ngày mong muốn.
- Khách đăng nhập có sửa số liên hệ trong từng yêu cầu không: **[Cần chốt]**. Đề xuất mặc định khóa, vì "đặt hộ" nằm ngoài phạm vi chưa duyệt (mục 8).
- Kiểm tra dữ liệu phía máy chủ: độ dài, định dạng, danh sách giá trị cho loài và dịch vụ.
- Ghi nhận đồng ý xử lý dữ liệu cá nhân (phiên bản nội dung, thời điểm).
- Chống spam là lớp riêng với chống trùng: giới hạn tần suất theo địa chỉ mạng, số điện thoại và tài khoản; chống bot. Ngưỡng và cách xử lý khi vượt: **[Cần chốt]**.

---

## 5. Hỗ trợ tài khoản tối thiểu [Đề xuất, chưa duyệt]

Phạm vi thu hẹp: **không mở form hỗ trợ riêng**. Khách liên hệ bệnh viện qua thông tin liên hệ sẵn có (điện thoại, tại quầy); quản lý xử lý và ghi nhận trên trang quản trị. Cần quản lý và lễ tân duyệt quy trình này.

### 5.1. Ba việc phải tách riêng

Một cuộc gọi chứng minh người đó **hiện nhận được cuộc gọi ở số này**, không chứng minh họ **có quyền với tài khoản và lịch sử cũ** (số có thể đã được nhà mạng cấp cho người khác).

1. **Khôi phục quyền vào tài khoản cũ.** Cần bằng chứng mạnh hơn việc giữ số. Tên thú cưng hay ngày yêu cầu **không đủ** làm bằng chứng duy nhất. Nếu không đủ bằng chứng: **không giao tài khoản hay dữ liệu cũ.** Chứng cứ nào được coi là đủ (ví dụ gặp trực tiếp tại bệnh viện kèm thú cưng và nhân viên nhận ra) là **[Cần chốt]** của quản lý.
2. **Giải phóng số để đăng ký tài khoản mới.** Quản lý quyết định, tách khỏi việc 1. Tài khoản cũ bị khóa, không xóa. **Không sao chép lịch sử cũ sang tài khoản mới.**
3. **Đặt lại mật khẩu cho người đã chứng minh được quyền ở việc 1.**

### 5.2. Đăng ký nhầm, số cấp lại

Chủ số thật báo số đã bị đăng ký: quản lý liên hệ, xét theo 5.1, và nếu quyết định giải phóng thì khóa tài khoản cũ và ghi nhật ký. Nếu hai bên cùng nhận và không đủ bằng chứng, quản lý quyết định; không thể giải quyết hoàn toàn bằng kỹ thuật.

### 5.3. Đặt lại mật khẩu [Chờ kiểm chứng]

Codex chỉ ra: đổi mật khẩu bằng API quản trị **không tự tạo hết hạn cho mật khẩu tạm** và **không tự ép đổi mật khẩu ở mọi đường truy cập**; thu hồi phiên chưa chắc làm token còn hạn mất hiệu lực ngay. Nếu vẫn dùng mật khẩu tạm:
- Việc bắt buộc đổi mật khẩu phải được kiểm tra **ở máy chủ cho mọi thao tác dữ liệu**, không chỉ chuyển hướng giao diện.
- Mật khẩu tạm phải ngẫu nhiên, hiện một lần, và có cách hết hạn do ta thiết kế.
- Không hứa mọi phiên cũ mất hiệu lực ngay; mô tả đúng hành vi sau khi chạy kiểm chứng ở mục 3.3.
- Phương án khác (mã dùng một lần do nhân viên đọc, khách tự đặt mật khẩu mới) an toàn hơn về việc nhân viên không biết mật khẩu, nhưng phải tự xây phần kiểm tra mã. Codex đánh giá chi phí.
- Khôi phục qua email chỉ nên có khi email đã xác minh. Chưa đưa vào bản đầu.

### 5.4. Xóa tài khoản

Xóa mềm: giải phóng số và tên đăng nhập, giữ yêu cầu đã gửi theo chính sách lưu trữ. **[Cần chốt]** thời gian lưu, nội dung chính sách.

---

## 6. Phân quyền [Đề xuất]

- Khách chỉ đọc và thêm dữ liệu thuộc tài khoản mình; không bao giờ sửa trạng thái hay trường của nhân viên.
- Khả năng truy cập dữ liệu qua API của Supabase phụ thuộc **cả hai**: schema nào được đưa ra qua API, quyền đã cấp cho từng vai trò, và chính sách RLS. Kiểm tra cả quyền lẫn RLS cho từng bảng, không dựa vào riêng một lớp.
- Khóa có quyền cao có thể bỏ qua RLS; chỉ dùng ở máy chủ, không có trong biến môi trường công khai, và **mọi thao tác dùng khóa này phải kiểm tra người dùng và vai trò ở máy chủ**.
- Vai trò nhân viên lưu ở nơi người dùng không tự sửa được. Tài khoản nhân viên do quản lý tạo; khách tự đăng ký không bao giờ có vai trò nhân viên.
- Thao tác nhạy cảm (đặt lại mật khẩu, giải phóng số, khóa tài khoản) qua máy chủ, kiểm tra vai trò, ghi nhật ký. **[Cần chốt]** lễ tân được làm gì; quản lý chỉ một người nên cần phương án dự phòng.
- Quản lý bật xác thực hai bước không dùng SMS [chờ kiểm chứng cách Supabase hỗ trợ].
- Môi trường thử dùng dữ liệu giả, tách khỏi dữ liệu thật.

---

## 7. Rủi ro còn lại do bỏ OTP (ghi nhận)

1. Số điện thoại chưa xác minh: có thể bị chiếm đăng ký, nhân viên có thể gọi nhầm người.
2. Dò số điện thoại qua thông báo "số đã đăng ký".
3. Kỹ thuật xã hội vào quy trình hỗ trợ tài khoản qua điện thoại.
4. Quản lý là điểm nghẽn cho thao tác nhạy cảm.
5. Đăng ký rác và hàng loạt.
6. Chưa có kênh thông báo cho khách ngoài cuộc gọi.

---

## 8. Ý tưởng Claude từng nêu, nay NGOÀI phạm vi cho đến khi chủ dự án duyệt

Gộp yêu cầu; đặt hộ (sửa số liên hệ trong từng yêu cầu); form "Cần hỗ trợ tài khoản" riêng; nhiều tầng cảnh báo và cờ "cần xem xét"; trạng thái "nhân viên đã xác minh số điện thoại" sau cuộc gọi đầu tiên; sự kiện "khách gửi lại" cho nhân viên; cảnh báo mềm khi lưu thú cưng trùng; trạng thái "Spam/Không hợp lệ" riêng. Chỉ làm khi chủ dự án chọn.

---

## 9. Quyết định còn thiếu

**Đã chốt, không còn trong danh sách:** phạm vi chống trùng (mục 4.2).

**Chủ dự án:** (1) tập trạng thái yêu cầu và những trạng thái nào còn chặn tạo trùng (mục 4.3); (2) bằng chứng nào đủ để khôi phục tài khoản cũ, và ai quyết định; (3) lễ tân được làm thao tác nhạy cảm nào, ai dự phòng quản lý; (4) có nhận số cố định không; (5) xử lý "Không liên lạc được" khi khách gửi lại; (6) khách có sửa số liên hệ trong yêu cầu không; (7) ngưỡng giới hạn tần suất; (8) chính sách lưu trữ, xóa và nội dung đồng ý; (9) dự án thử cho kiểm chứng.

**Codex:** (10) chạy kế hoạch kiểm chứng mục 3.3 rồi chọn A hay B; (11) kết quả các mục [chờ kiểm chứng] ở mục 2; (12) phương án đặt lại mật khẩu (mật khẩu tạm hay mã dùng một lần) và chi phí.

**Gemini:** (13) luồng đăng ký và đăng nhập (một ô cho "số điện thoại hoặc tên đăng nhập"), thông báo lỗi chung, thông báo thành công thống nhất, và cách trình bày giới hạn "số điện thoại chưa xác minh" cho khách. Khoan vẽ màn hình hỗ trợ tài khoản cho đến khi quy trình mục 5 được duyệt.

---

## 10. Kịch bản kiểm thử gợi ý (dữ liệu giả)

| # | Tình huống | Kết quả mong đợi |
|---|---|---|
| 1 | Tên đăng nhập toàn số hoặc dạng số điện thoại | Từ chối |
| 2 | Đăng ký cùng số ở hai định dạng (`0900000001`, `+84900000001`) | Lần hai bị từ chối |
| 3 | Tên đăng nhập `Khach.A` và `khach.a` | Coi là trùng |
| 4 | Đăng nhập bằng số ở các định dạng khác nhau | Cùng một tài khoản |
| 5 | Không có tài khoản và sai mật khẩu | Cùng một thông báo, thời gian gần nhau |
| 6 | Sai mật khẩu nhiều lần | Làm chậm, chống bot; chủ thật vẫn vào được sau đó |
| 7 | Gọi trực tiếp API Auth đi vòng đường dẫn Next.js | Vẫn bị giới hạn theo kết quả kiểm chứng; ghi nhận hành vi thật |
| 8 | Khách vãng lai gửi form với số đã có tài khoản | Phản hồi như mọi khách vãng lai; không có gợi ý riêng; yêu cầu không xuất hiện trong tài khoản nào |
| 9 | Hai lần gửi đồng thời giống hệt, **cùng phạm vi** | Đúng một yêu cầu, cả hai thấy thành công |
| 9b | Hai lần gửi đồng thời giống hệt nhưng **khác phạm vi** (một vãng lai, một đã đăng nhập) | Có thể có hai yêu cầu; không lỗi, không gắn chéo |
| 10a | Ví dụ Lan/Miu bước 1–2: vãng lai gửi, rồi gửi lại giống hệt | Một yêu cầu A |
| 10b | Bước 3–4: đăng nhập gửi cùng nội dung, rồi gửi lại | Yêu cầu B riêng, sau đó không tạo thêm |
| 10c | Bước 5: đổi ngày mong muốn | Tạo yêu cầu mới |
| 10d | Sau 10a–10c, khách xem danh sách trong tài khoản | Chỉ thấy B (và yêu cầu mới của tài khoản); không thấy A |
| 10e | Nhân viên xem trang quản trị | Thấy cả A và B, không tự gộp hay chuyển chủ |
| 10f | Trình duyệt gửi kèm mã tài khoản hoặc cờ chủ thể giả | Bỏ qua; chủ thể lấy từ phiên đã kiểm tra phía máy chủ |
| 11 | Khách đọc yêu cầu của tài khoản khác hoặc yêu cầu vãng lai | Bị chặn ở tầng cơ sở dữ liệu |
| 12 | Truy cập dữ liệu bằng khóa công khai với bảng thiếu quyền hoặc RLS | Bị chặn; kiểm tra cả quyền được cấp lẫn RLS |
| 13 | Token trình duyệt nhận có chứa thông tin gì | Ghi nhận đúng, không giả định là bí mật |
| 14 | Đổi mật khẩu rồi dùng token cũ còn hạn | Ghi nhận hành vi thật, không hứa mất hiệu lực ngay |
| 15 | Giải phóng số sau tranh chấp | Tài khoản cũ khóa, giữ dữ liệu; số đăng ký lại được; **không** chuyển lịch sử cũ; có nhật ký |

---

*Tài liệu này chưa chốt kiến trúc hay công nghệ và chưa phê duyệt quy trình khôi phục tài khoản nào.*
