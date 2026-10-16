# Codex làm QA chính — 17/10/2026

Chủ dự án chỉ đạo trực tiếp: “codex h bạn là Qa chính cập nhật đi”. Quyết định này có hiệu lực từ lần cập nhật này, thay thế phân công QA cũ ở các điểm xung đột. Quyết định Claude thay thế hoàn toàn Antigravity vẫn giữ nguyên.

- Codex là QA chính: đối chiếu yêu cầu đã duyệt với đúng nhánh/SHA; kiểm giao diện, nội dung, hành vi, trợ năng và hồi quy trong phần bị ảnh hưởng; ghi bằng chứng, lỗi, điều kiện đạt và phần chưa kiểm; kiểm lại sau khi Claude sửa.
- Claude phụ trách thiết kế, bản mẫu, triển khai và bàn giao; tự kiểm trước khi giao, sửa các lỗi QA rồi báo SHA và bằng chứng mới. Tự kiểm không được gọi là QA độc lập.
- Codex tiếp tục tích hợp khi được giao. Nếu Codex tự sửa mã, báo rõ phần đó là tự kiểm và chưa có QA độc lập nếu chưa được người khác kiểm lại; không tự gọi kết quả của mình là kiểm chéo độc lập.
- Kết quả QA chính đăng tại shared/qa-review, yêu cầu/quyết định tại shared/requirements. Báo cáo có nhánh, SHA đầy đủ, phạm vi, đã kiểm/chưa kiểm, PASS/FIX và bằng chứng. Báo cáo cũ giữ nguyên tác giả và giá trị lịch sử.
- Chủ dự án duyệt cuối; PASS kỹ thuật không cho phép tự merge main hoặc deploy. Antigravity không còn nhiệm vụ; các nhánh Antigravity chỉ lưu lịch sử.

Codex cập nhật README/phân công trên các nhánh hiện có, chỉ thay tài liệu. Không đổi mã demo hoặc quyền tài khoản GitHub; việc đăng tài liệu không chứng minh Claude đã đọc.
