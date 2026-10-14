# Tóm tắt cập nhật 14/10/2026 và quyết định cần chủ dự án

**Người soạn:** Claude · **Mục đích:** tóm tắt ngắn để chủ dự án và Codex xem, không tạo thêm vòng duyệt. Chưa có mã, chưa merge vào main, chưa bắt đầu triển khai chính thức.

Tài liệu: [kế hoạch bản 3](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/ke-hoach-phien-ban-dau.md) · [định hướng sản phẩm (mới)](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/dinh-huong-san-pham.md) · [rà soát bản 12](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/claude/optimistic-mccarthy-d1d15i/docs/rasoat-tai-khoan-va-form-dat-lich.md)

## 1. Điểm đã thay đổi

| Yêu cầu của chủ dự án | Đã làm |
|---|---|
| Làm rõ phạm vi | Giai đoạn 1 = website giới thiệu, tài khoản khách, hồ sơ thú cưng, form yêu cầu đặt lịch. Hệ thống tổng thể (bệnh án, nội trú, chăm sóc, điều trị, video, quản lý công việc, kho, thanh toán…) ghi là **chưa triển khai trong giai đoạn này, không loại bỏ vĩnh viễn**. Có bảng ở `dinh-huong-san-pham.md` mục 1 |
| Cơ cấu nhân sự | Không có lễ tân riêng. Phân quyền theo **khả năng kiêm nhiệm**: một người giữ nhiều khả năng, mỗi người một tài khoản cá nhân; "quản lý/bác sĩ/nhân viên Spa" chỉ là bộ khả năng soạn sẵn. Đổi thuật ngữ "lễ tân" thành "người tiếp nhận" (là khả năng, không phải chức danh) trong ba tài liệu hiện có |
| Yêu cầu hệ thống tổng thể | Lưu đầy đủ ở `dinh-huong-san-pham.md` mục 3: phía khách (hồ sơ thú cưng, lịch sử mua sắm, báo cáo sức khỏe được chia sẻ, lịch hẹn, nhật ký nội trú, tình trạng chăm sóc chung, video; **không** xem tên thuốc, liều, giờ tiêm, y lệnh); phía nhân viên và quản lý (lịch điều trị, thuốc, giờ thực hiện, y lệnh tiếp theo, giao nhiệm vụ, lịch làm việc, lịch trực, bảng công việc, checklist, cảnh báo, bàn giao ca); video nội trú mặc định bỏ âm thanh và tự xóa sau 60 ngày; không quét QR chuồng |
| Kiến trúc và chi phí | Cloudflare Workers Paid + Supabase Free và khoảng 300.000 đồng/tháng ghi là **chỉ cho website giai đoạn 1**, không suy rộng ra toàn bộ phần mềm bệnh viện. **Cổng 2** của kế hoạch yêu cầu kiểm chứng Next.js/OpenNext trên Cloudflare Workers; đến lúc đó kiến trúc chưa khóa |
| Trước khi viết mã | Kế hoạch ghi rõ chưa được phê duyệt để lập trình; còn quyết định nghiệp vụ, thiết kế giao diện, mô hình dữ liệu. Không merge main |

## 2. Ba lưu ý mới của Claude (không chặn giai đoạn 1, là đề xuất)

1. **Liên kết tài khoản web với hồ sơ khách của bệnh viện:** vì số điện thoại không xác minh, **không được tự động liên kết** để khách xem hồ sơ bệnh, mua sắm hay nội trú. Chỉ nhân viên tạo liên kết sau khi xác minh đủ mạnh. Thiết kế giai đoạn 1 (tách tài khoản khỏi hồ sơ khách, không tự ghép) đã chuẩn bị nền cho điều này.
2. **Tách dữ liệu nội bộ và dữ liệu hiển thị cho khách** ngay từ khi thiết kế phân hệ nội trú, thay vì giấu từng trường bằng giao diện.
3. **Video:** 1 GB Storage của gói hiện tại và 300.000 đồng/tháng không đủ cơ sở để cam kết chứa video; cần ước lượng riêng. Xóa tự động 60 ngày và bản sao lưu cần chính sách riêng; có vấn đề quyền riêng tư với thú cưng của khách khác và nhân viên bị quay.

## 3. Quyết định thật sự cần chủ dự án lựa chọn (rút gọn)

Chỉ những điều chủ dự án mới quyết định được. Chi tiết kỹ thuật để Codex đề xuất.

1. **Duyệt chọn phương án A** (đề xuất của Codex) cho tài khoản.
2. **Ai giữ khả năng nào:** ai ngoài quản lý tiếp nhận và xử lý yêu cầu; ai được thao tác nhạy cảm; ai dự phòng khi quản lý vắng.
3. **Chuyển trạng thái:** ai được hủy, mở lại yêu cầu đã hủy/từ chối, chuyển ngược từ Đã xác nhận; xác nhận nhóm trạng thái còn chặn tạo trùng (đề xuất ở mục 4.2a).
4. **Bằng chứng đủ để khôi phục tài khoản cũ** và ai quyết định.
5. **Thời gian gọi lại và số lần liên hệ tối đa.**
6. **Lý do hủy/từ chối:** văn bản tự do hay danh mục; có hiện cho khách không.
7. **Số cố định có nhận không;** khách đăng nhập có sửa số liên hệ trong từng yêu cầu không (đề xuất: khóa).
8. **Chính sách lưu trữ và xóa dữ liệu;** nội dung thông báo đồng ý.
9. **Email báo nhân viên:** ai nhận; có gửi email khi khách gửi lại không.
10. **Chấp nhận rủi ro gói Free:** dự án có thể bị tạm dừng khi ít dùng; mất tối đa dữ liệu từ lần sao lưu cuối khi có sự cố.
11. **Nội dung chính thức** cho website: nhận diện, ảnh, liên hệ, danh sách dịch vụ, có hiển thị bảng giá công khai không.

## 4. Việc Codex làm tiếp khi được duyệt (không cần thêm vòng duyệt)

- Probe tương thích Next.js/OpenNext trên Cloudflare Workers.
- Các kiểm chứng kỹ thuật còn lại ở mục 2 và 10 của tài liệu rà soát (số di động Việt Nam, tên đăng nhập qua tra cứu, chuyển IP khách, quyền dữ liệu, thử xuất và khôi phục).
- Cùng Claude hoàn thiện mô hình dữ liệu và phân quyền theo khả năng; Gemini hoàn thiện thiết kế giao diện, bắt đầu từ Hero/Header.
