> **Quyết định hiện hành — 17/10/2026:** Antigravity đã bị loại khỏi kế hoạch. Claude thay thế hoàn toàn Antigravity về thiết kế, bản mẫu, triển khai giao diện và bàn giao; Codex tích hợp và kiểm chéo. Các phân công Antigravity trong tài liệu cũ chỉ còn là lịch sử. [Quyết định chính thức](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/claude-thay-the-antigravity-2026-10-17.md).

# Phân quyền thiết kế: Claude phụ trách, Antigravity chỉ triển khai bản chốt

**Quyết định chủ dự án ngày 15/10/2026:** “bây giờ hạn chế quyền thiết kế của anti và giao việc đó cho claude”. Codex ghi lại quyết định; có hiệu lực từ commit chứa tài liệu này và thay thế phân công cũ ở những điểm xung đột.

## Vai trò từ nay

- **Claude:** phụ trách thiết kế giao diện, lựa chọn bố cục/màu/typography/trang trí/chuyển động trong phạm vi yêu cầu; chuẩn bị bản mẫu và đặc tả để chủ dự án duyệt. Có thể trực tiếp sửa các lỗi CTA được giao cụ thể bên dưới.
- **Antigravity:** chỉ triển khai theo thiết kế/ảnh mẫu/thông số đã được chủ dự án chốt và đặc tả Claude bàn giao. Không tự thiết kế lại, thêm trang trí, đổi bố cục, màu, font, kích thước, chuyển động, nội dung, menu hoặc luồng nghiệp vụ. Nếu thiếu đặc tả hoặc cần làm khác mẫu, ghi vấn đề cho Claude/chủ dự án quyết định trước khi sửa phần đó. Được chọn cách tổ chức mã và sửa lỗi kỹ thuật trong phạm vi không đổi thiết kế/hành vi đã chốt.
- **Codex:** tích hợp và kiểm tra kỹ thuật/hồi quy, ghi bằng chứng và giới hạn kiểm tra. Không tự thay quyết định thiết kế của chủ dự án.
- **Chủ dự án:** duyệt thiết kế và phạm vi; kết quả QA không thay quyền duyệt. Không agent nào tự merge main, deploy, hoặc đẩy kết quả sang nhánh khác khi chưa được giao.

Đây là giới hạn quyền quyết định trong quy trình dự án, **không phải thay đổi quyền tài khoản GitHub hay khóa kỹ thuật khả năng push của Antigravity**.

## Giao Claude ngay

### 1. Sửa hai điểm của CTA Dịch vụ

Nền để đối chiếu: `antigravity/design` @ `40aa56dcaa60b31c7be15f5c3a4f5c6eaa13d9f2`. Bản đã gộp với Hero chính: `codex/hero-chinh-quy-dao` @ `0873d129fdfbdf87c082c09945548a26e3553902`.

- **Họa tiết góc CTA chạm vùng nút:** desktop đi vào nút gọi, tablet đi sau vùng nút đặt lịch. Đổi vị trí/thu nhỏ hoặc ẩn họa tiết để không chạm chữ/nút. Không thêm trang trí mới.
- **Hai nút chưa cùng cao:** desktop đo khoảng 50,8px và 52,8px, tablet 44px và 45,2px. Thống nhất chiều cao/box model; giữ mobile tối thiểu 48px.

Bằng chứng chụp riêng bản nguồn Antigravity: [1440px](bang-chung-cta-giao-claude-2026-10-15/cta-1440.png), [768px](bang-chung-cta-giao-claude-2026-10-15/cta-768.png). Yêu cầu CTA gốc vẫn áp dụng: [yeu-cau-cta-dich-vu-2026-10-15.md](yeu-cau-cta-dich-vu-2026-10-15.md).

Claude sửa tối thiểu từ bản gộp 0873d12 trên nhánh riêng, không tự ghi đè nhánh Codex, không đẩy antigravity/design/main hoặc merge. Bàn giao SHA đầy đủ, tệp đổi, ảnh CTA 1440/1024/768/390/360 và những gì đã/chưa kiểm. Codex kiểm chéo sau sửa. Giữ nguyên câu chữ, số điện thoại, liên kết, bốn thẻ, modal, Hero và header.

### 2. Nhận phần thiết kế header/menu mobile theo ảnh chủ dự án

Chuyển trách nhiệm **thiết kế** từ Antigravity sang Claude cho [yêu cầu header mobile](yeu-cau-header-mobile-antigravity-2026-10-15.md). Ảnh chủ dự án đã chọn vẫn là chuẩn, không đổi sang mẫu mới. Claude hoàn thiện đặc tả trạng thái đóng/mở, khách/tài khoản, logo, kích thước/spacing và các mốc 320/360/390/420px cùng khung Mobile 390. Antigravity chỉ được triển khai khi có đặc tả thiết kế đã chốt và việc triển khai được giao tiếp.

Không thực hiện thay đổi header trong lượt sửa CTA. Không đổi bộ mô phỏng Hero. Không tự gộp hoặc deploy để hoàn tất phân công này.

## Trạng thái

Codex đã đăng quyết định và giao việc qua nhánh yêu cầu chính thức. Chưa có bằng chứng Claude đã đọc/nhận hoặc bắt đầu. Không coi việc đăng tài liệu là Claude đã thực hiện.
