# Brief cho Gemini: thiết kế phần Hero, website Bệnh viện thú y Lê Sơn

**Ngày:** 14/10/2026 · **Người soạn:** Claude, theo yêu cầu của chủ dự án "cho Gemini bắt đầu thiết kế từ hero" · **Trạng thái:** brief khởi động, chưa phải thiết kế được duyệt.

**Phạm vi:** chỉ phần **Hero** (và thanh đầu trang chứa Hero). Chưa thiết kế các phần khác, chưa viết mã, chưa chọn công nghệ. Codex sẽ xây sau; thiết kế không nên phụ thuộc công nghệ.

**Quy ước nhãn** (xin giữ khi trả lời): **[Đã chốt]** chủ dự án quyết định · **[Giả định]** chưa xác nhận · **[Đề xuất]** của Gemini hoặc Claude, cần phản biện · **[Còn thiếu]** cần nội dung hoặc quyết định. Đề xuất của riêng bạn không phải quyết định chung.

---

## 1. Bối cảnh ngắn

- **[Đã chốt]** Bệnh viện thú y Lê Sơn, một cơ sở, **có khu nội trú**. Website bản đầu gồm: giới thiệu bệnh viện, dịch vụ, đặt lịch.
- **[Đã chốt]** Đặt lịch là **gửi yêu cầu**; nhân viên **gọi điện xác nhận**. Gửi yêu cầu **chưa phải** đã có lịch hẹn.
- **[Đã chốt]** Khách vãng lai (không tài khoản) và khách có tài khoản đều gửi được yêu cầu. Tài khoản dùng để xem lại yêu cầu của mình. Đăng ký tài khoản gồm: tên khách, tên đăng nhập, số điện thoại, mật khẩu. **Không dùng OTP.** Đăng nhập bằng số điện thoại hoặc tên đăng nhập + mật khẩu.
- **[Đã chốt]** Trạng thái hiển thị cho khách lấy từ sáu trạng thái: Chờ xác nhận, Đang liên hệ, Đã xác nhận, Không liên lạc được, Đã hủy, Từ chối. **"Đã xác nhận" chỉ nghĩa là đã chốt lịch, không phải đã khám.** Thông điệp cần rõ: **"Chờ nhân viên xác nhận"**.
- **[Giả định]** Phần lớn khách dùng điện thoại. Hãy thiết kế **mobile trước** (khoảng 360–430 px), rồi đến máy tính (khoảng 1280 px).
- Nguồn đầy đủ về quy tắc: [tài liệu rà soát](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/rasoat-tai-khoan-va-form-dat-lich.md), các mục 4.2a (trạng thái) và 4.4 (thông báo phản hồi).

## 2. Hero cần làm được gì

1. Khách hiểu ngay đây là **Bệnh viện thú y Lê Sơn** và bệnh viện làm gì.
2. Nút hành động chính: **gửi yêu cầu đặt lịch**.
3. Nút phụ: **xem dịch vụ**.
4. Từ đầu trang, khách thấy đường vào **Đăng nhập / Đăng ký**, nhưng **không bắt buộc** để gửi yêu cầu.
5. Đặt đúng kỳ vọng: khách gửi yêu cầu, **nhân viên sẽ gọi xác nhận**; không hứa lịch hẹn tức thì.
6. Có chỗ cho thông tin liên hệ nhanh (điện thoại), khi có nội dung chính thức.

Gợi ý khung quy trình ba bước dưới nút chính [Đề xuất, khớp luồng đã chốt]: **Gửi yêu cầu → Nhân viên gọi xác nhận → Chốt lịch hẹn.**

## 3. Ràng buộc nội dung (bắt buộc)

**Không được viết hoặc ngụ ý:**
- "Đặt lịch thành công", "đã có lịch", "đặt ngay, có chỗ ngay". Nút và câu chữ dùng **"Gửi yêu cầu đặt lịch"**, không dùng "Đặt lịch ngay" nếu nó ngụ ý lịch được chốt tức thì.
- Cam kết thời gian phản hồi, **24/7**, **cấp cứu**, số năm kinh nghiệm, giải thưởng, số chuồng nội trú, tên bác sĩ, giá, khuyến mãi. Tất cả **chưa được xác nhận**.
- Bất kỳ điều gì về OTP, xác minh số điện thoại, hay việc "số này đã có tài khoản".
- Dữ liệu hoặc ảnh khách hàng thật, thú cưng của khách thật. **Không dùng dữ liệu cá nhân thật** trong ví dụ hay bản mẫu.

**Chỉ dùng điều đã xác nhận:** tên bệnh viện; có khu nội trú; giới thiệu bệnh viện, dịch vụ, đặt lịch qua gửi yêu cầu; nhân viên gọi xác nhận.

**Nội dung chưa có:** logo và nhận diện thương hiệu, màu chủ đạo, ảnh bệnh viện, địa chỉ, số điện thoại, giờ làm việc, danh sách dịch vụ, bảng giá, câu giới thiệu chính thức. Dùng **chỗ giữ chỗ rõ ràng**, đánh dấu **[Còn thiếu: cần nội dung chính thức]**, không bịa nội dung thật. Mọi màu và phông chữ bạn chọn là **[Đề xuất]**.

## 4. Nên trả về những gì

Xin trả về **một tệp `.md`** (kèm hình minh họa nếu công cụ của bạn tạo được), gồm:
1. **Hai đến ba hướng Hero** khác nhau về bố cục hoặc cảm xúc, mỗi hướng có lý do chọn và đánh đổi. Nêu hướng bạn nghiêng về và vì sao, nhưng để chủ dự án chọn.
2. Bố cục **mobile** và **desktop** của từng hướng: thứ tự từ trên xuống, kích thước vùng chạm, vị trí nút.
3. **Thanh đầu trang** ở hai trạng thái: chưa đăng nhập (Đăng nhập, Đăng ký) và đã đăng nhập (tên khách, "Yêu cầu của tôi").
4. Cách xử lý **khi chưa có ảnh**: Hero vẫn đẹp và rõ chỉ bằng chữ, màu, hình khối.
5. **Hai đến ba phương án câu chữ** cho tiêu đề và dòng phụ, đánh dấu rõ là chỗ giữ chỗ, chỉ dùng điều đã xác nhận ở mục 3.
6. Đề xuất **token thiết kế** ở mức tối thiểu cho Hero: màu, kiểu chữ (phải hiển thị tốt đầy đủ **dấu tiếng Việt**), khoảng cách, bo góc. Ghi là đề xuất.
7. Ghi chú **khả năng tiếp cận**: độ tương phản chữ, vùng chạm tối thiểu khoảng 44 px, trạng thái focus bằng bàn phím, giảm chuyển động nếu người dùng chọn, văn bản thay thế cho ảnh, chiều cao dòng đủ cho chữ có dấu.
8. Ghi chú **hiệu năng**: ảnh nhẹ, chữ hiển thị trước ảnh, không có hiệu ứng nặng trên điện thoại cấu hình thấp.
9. Danh sách **câu hỏi cần chủ dự án trả lời** (nội dung, nhận diện, ảnh).

## 5. Ngoài phạm vi (chưa làm)

- Các phần khác của trang (dịch vụ, giới thiệu, form đặt lịch, chân trang).
- Màn hình đăng ký, đăng nhập, khôi phục mật khẩu, hỗ trợ tài khoản, trang lễ tân. Một số quy trình tài khoản **chưa được duyệt**; chưa vẽ.
- Chọn công nghệ hoặc viết mã hoàn chỉnh; mua ảnh, phông chữ hay dịch vụ.
- Quyết định nhận diện thương hiệu cuối cùng.

## 6. Cách phối hợp

Chủ dự án chuyển tệp trả lời của bạn cho Claude và Codex. Claude sẽ rà soát câu chữ so với quy tắc đã chốt (mục 3) và các rủi ro nghiệp vụ; Codex đánh giá khả năng xây. Xin ghi rõ điều nào là xác nhận, giả định, đề xuất hay còn thiếu.
