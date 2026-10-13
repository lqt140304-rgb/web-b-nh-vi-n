# Kế hoạch đề xuất: phiên bản đầu website Bệnh viện thú y Lê Sơn

**Ngày:** 14/10/2026 · **Người soạn:** Claude · **Trạng thái:** **bản nháp đề xuất**, chưa phải kế hoạch được duyệt. Cần chủ dự án duyệt trước khi triển khai; Codex và Gemini phản biện phần của mình. Chưa có mã, chưa mua dịch vụ nào, chưa merge vào main.

**Quy ước nhãn:** **[Đã chốt]** chủ dự án quyết định · **[Đề xuất]** của Claude, cần phản biện · **[Giả định]** chưa xác nhận · **[Cần chốt]** quyết định còn thiếu · **[Chờ kiểm chứng]** chưa có bằng chứng.

Nguồn chi tiết: [tài liệu rà soát](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/rasoat-tai-khoan-va-form-dat-lich.md) (số mục dẫn bên dưới là mục của tài liệu đó) và [brief Hero cho Gemini](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/gemini-brief-hero.md).

---

## 1. Phạm vi và nguyên tắc

**[Đã chốt] Có trong phiên bản đầu:** website giới thiệu bệnh viện, dịch vụ và đặt lịch; tài khoản khách; trang quản trị cho nhân viên xử lý yêu cầu; email báo nhân viên.

**[Đã chốt] Ngoài phạm vi:** nhập hoặc đồng bộ dữ liệu GPet; bệnh án, nội trú, bán hàng, kho; thanh toán; hóa đơn điện tử; trạng thái "đã đến/đã khám". GPet vẫn là hệ thống vận hành chính.

**[Đã chốt] Quy tắc đã khóa:**
- Nền tảng Cloudflare Workers Paid + Supabase Free thay Vercel. Không OTP cho khách.
- Khách vãng lai và khách đăng nhập đều gửi được form; không tự gắn yêu cầu vãng lai vào tài khoản theo số điện thoại.
- Chống trùng theo phạm vi (mục 4.2); sáu trạng thái và luồng chính (mục 4.2a); dấu nhắc "cần gọi lại" khi Không liên lạc được (mục 4.2b).
- Giữ bản chụp thông tin tại thời điểm gửi; nhân viên gọi xác nhận, gửi form chưa phải đã có lịch.

**[Đã chốt về hướng, [Đề xuất] về phê duyệt]** Phương án A (điện thoại + mật khẩu không OTP) đã chạy được với số giả; là đề xuất của Codex làm hướng chính, chưa phải phê duyệt toàn bộ cơ chế tài khoản.

**Nguyên tắc làm việc [Đề xuất]:** dữ liệu giả cho mọi thử nghiệm; không đưa dữ liệu khách thật vào cho đến khi qua cổng ở Giai đoạn 4; mỗi giai đoạn có cổng chuyển tiếp rõ; điều chưa chốt là điều kiện chặn, không phải để tự quyết.

---

## 2. Vai trò

| Bên | Việc chính |
|---|---|
| Chủ dự án | Quyết định, duyệt cổng, cung cấp nội dung chính thức, chạy các công cụ cần quyền bí mật trên dự án thử |
| Codex | Xây dựng, tích hợp, kiểm thử, kiểm chứng kỹ thuật trên môi trường thử |
| Claude | Rà soát nghiệp vụ, mô hình dữ liệu, phân quyền, chất lượng mã; soạn tài liệu và kịch bản kiểm thử |
| Gemini | Trải nghiệm và giao diện, **bắt đầu từ Hero** (đã có brief), sau đó các phần còn lại |

Phân công có thể điều chỉnh. Việc của Gemini về Hero chạy song song, không chờ các giai đoạn dưới.

---

## 3. Các giai đoạn

### Giai đoạn 0: chốt đầu vào [Đề xuất]

**Việc:**
- Chủ dự án cung cấp nội dung chính thức: logo và nhận diện, ảnh, địa chỉ, số điện thoại, giờ làm việc, danh sách dịch vụ, bảng giá (có hiển thị công khai không), câu giới thiệu.
- Chốt các quyết định ở mục 9 của tài liệu rà soát: bảng chuyển trạng thái hợp lệ và quyền (lễ tân, quản lý), mở lại yêu cầu đã hủy hoặc từ chối, bằng chứng đủ để khôi phục tài khoản cũ, ngưỡng giới hạn tần suất, chính sách lưu trữ và xóa dữ liệu, nội dung thông báo đồng ý, số lễ tân, người nhận email, người dự phòng quản lý, thời gian gọi lại, có nhận số cố định không, kỳ tính của ngân sách 300.000 đồng (Codex nêu, chưa rõ).
- Gemini nộp thiết kế Hero; chủ dự án chọn hướng.

**Cổng 0:** danh sách quyết định bắt buộc cho Giai đoạn 2 đã chốt hoặc ghi rõ là tạm thời. Nội dung còn thiếu dùng chỗ giữ chỗ có nhãn.

### Giai đoạn 1: kiểm chứng kỹ thuật trên dự án thử [Đề xuất]

Chỉ trên `leson-test` hoặc môi trường thử, **dữ liệu giả**, không gửi SMS, không mua dịch vụ, không gửi bí mật qua chat hay GitHub.

**Còn phải kiểm chứng (mục 2 và 3.3 của tài liệu rà soát):**
- Số di động Việt Nam và chuẩn hóa 0/+84 trong đăng ký, đăng nhập, form.
- Tên đăng nhập qua tra cứu phía máy chủ.
- Đăng ký số trùng; khóa đăng ký trực tiếp; tạo tài khoản qua máy chủ.
- Đổi số, đổi mật khẩu, thu hồi phiên (token còn hạn).
- **Chuyển IP khách cho Auth trên Cloudflare** và khả năng đi vòng tầng ứng dụng.
- Độ bền cấu hình Phone không SMS khi dùng dashboard.
- Quyền dữ liệu (khách chỉ thấy dữ liệu của mình), kiểm tra cả quyền được cấp lẫn chính sách RLS.
- **Xuất sao lưu và khôi phục thử** sang môi trường tách biệt (mục 6a).
- Cách đặt lại mật khẩu: mật khẩu tạm hay quyền đặt lại dùng một lần.

**Cổng 1:** các mục trên đạt, hoặc có quyết định rõ cho từng mục không đạt (đổi sang phương án B, đổi quy trình, hoặc hạ phạm vi). Nếu A không đáp ứng thì mới thử B.

### Giai đoạn 2: thiết kế [Đề xuất]

**Việc:**
- Claude + Codex: mô hình dữ liệu và phân quyền (tài khoản web tách khỏi hồ sơ khách hàng; bản chụp yêu cầu; lịch sử đổi trạng thái chỉ ghi thêm; ba mốc thời gian; dấu nhắc; khóa chống trùng theo phạm vi; nhật ký thao tác nhạy cảm).
- Gemini: luồng đăng ký và đăng nhập, form đặt lịch (vãng lai và đăng nhập), xem lại yêu cầu, thông báo "Chờ nhân viên xác nhận", màn hình lễ tân (danh sách, dấu nhắc, đổi trạng thái, báo xung đột phiên bản), các phần còn lại của trang.
- Quy trình hỗ trợ tài khoản (quên mật khẩu, đổi số, tranh chấp số) chỉ vẽ **sau khi** được duyệt.

**Cổng 2:** chủ dự án duyệt mô hình, phân quyền, thiết kế màn hình và quy trình khôi phục. Claude rà soát thông báo công khai theo mục 4.4 (phản hồi giống nhau, không lộ yêu cầu).

### Giai đoạn 3: xây dựng trên môi trường thử [Đề xuất]

**Việc (Codex xây, Claude rà soát):**
- Website giới thiệu và dịch vụ; nội dung do chủ dự án quản lý.
- Đăng ký, đăng nhập (điện thoại hoặc tên đăng nhập), xem lại yêu cầu.
- Form đặt lịch cho khách vãng lai và khách đăng nhập; chống trùng theo phạm vi; dấu nhắc gọi lại; giới hạn tần suất và chống bot.
- Trang quản trị: danh sách yêu cầu, đổi trạng thái có lý do, lịch sử, kiểm tra phiên bản; tài khoản nhân viên do quản lý tạo; bật xác thực hai bước cho quản lý.
- Email báo nhân viên khi có yêu cầu mới (không chứa dữ liệu cá nhân).
- Kiểm thử theo danh sách kịch bản ở mục 10 của tài liệu rà soát, dữ liệu giả.

**Cổng 3:** các kịch bản kiểm thử đạt; Claude rà soát phân quyền và dữ liệu; Codex xác nhận không có lỗ hổng đã biết chưa xử lý.

### Giai đoạn 4: chuẩn bị vận hành [Đề xuất]

**Việc:**
- Sao lưu hằng ngày, mã hóa, lưu riêng, giữ 7–14 bản; **khôi phục thử đạt** trước khi nhận dữ liệu thật.
- Giám sát và cảnh báo; quy trình khi Supabase bị tạm dừng; thông báo "thử lại hoặc gọi bệnh viện" khi lưu thất bại.
- Chính sách quyền riêng tư và thông báo đồng ý; chính sách lưu trữ và xóa dữ liệu; rà soát pháp lý về lưu dữ liệu cá nhân (chưa có kết luận).
- Hướng dẫn lễ tân và quản lý; quy trình hỗ trợ tài khoản; quy trình khi lễ tân vắng.
- Tên miền và cấu hình Cloudflare; kiểm tra chi phí thực tế so với ngân sách.

**Cổng 4 (bắt buộc trước dữ liệu thật):** khôi phục thử đạt; chủ dự án duyệt quy trình vận hành và rủi ro còn lại; ngân sách được xác nhận.

### Giai đoạn 5: chạy hạn chế rồi mở rộng [Đề xuất]

- Chạy với nhóm nhỏ hoặc trong thời gian ngắn, nhân viên theo dõi sát; sửa lỗi; xem lại cảnh báo và tải thực tế.
- Mở cho khách rộng hơn khi chủ dự án chấp nhận kết quả.
- Xem lại các quyết định tạm thời: OTP, gói trả phí, chặn mật khẩu rò rỉ, theo số liệu thực tế. **Không tự nâng gói hay mua dịch vụ khi chưa được chủ dự án duyệt.**

---

## 4. Rủi ro chính cần theo dõi

| Rủi ro | Giảm thiểu |
|---|---|
| Số điện thoại chưa xác minh, có thể bị chiếm đăng ký | Quy trình tranh chấp số; không chuyển lịch sử cũ; thông báo công khai giống nhau |
| Gói Free không có sao lưu tự động | Sao lưu tự làm hằng ngày; cổng khôi phục thử trước dữ liệu thật |
| Dự án Free bị tạm dừng khi ít hoạt động | Cảnh báo, quy trình ứng phó; không báo "đã nhận" khi lưu thất bại; Free không bảo đảm luôn nhận lịch |
| Quản lý là một người giữ mọi quyền | Người dự phòng; xác thực hai bước; ghi nhật ký |
| Giới hạn IP của Auth khi đi qua máy chủ | Kiểm chứng trên Cloudflare ở Giai đoạn 1 |
| Cấu hình Phone chỉ đặt được qua Management API, dashboard từ chối | Kiểm thử độ bền; không bấm lưu mục Phone trong dashboard cho tới khi rõ hậu quả |
| Kỹ thuật xã hội vào quy trình khôi phục tài khoản | Quy trình có bằng chứng, nhật ký, không lộ dữ liệu qua điện thoại |
| Nội dung chính thức chậm | Chỗ giữ chỗ có nhãn; không bịa thông tin |
| Phạm vi phình ra | Giữ danh sách "ngoài phạm vi" ở mục 1 và mục 8 của tài liệu rà soát |
| Chưa kiểm thử tải, bảo mật ứng dụng | Kiểm thử ở Giai đoạn 3 và 4; hạn mức dịch vụ không phải bằng chứng chịu tải |

---

## 5. Điều kế hoạch này không nói

- **Chưa có mốc ngày hoặc ước lượng giờ công.** Không có cơ sở để ước lượng; sẽ chỉ báo khi Codex đánh giá được.
- Chưa là phê duyệt thiết kế, cơ chế tài khoản hay quy trình khôi phục.
- Chưa bảo đảm gói Free đáp ứng vận hành liên tục hoặc ngân sách ở mọi mức tải.

## 6. Việc cần chủ dự án quyết định ngay

1. Duyệt khung giai đoạn và các cổng ở trên (hoặc điều chỉnh).
2. Cung cấp nội dung chính thức (Giai đoạn 0), chọn hướng Hero khi Gemini nộp.
3. Chốt các quyết định bắt buộc cho Giai đoạn 2 ở mục 9 của tài liệu rà soát.
4. Xác nhận kỳ tính và phạm vi của ngân sách 300.000 đồng.
