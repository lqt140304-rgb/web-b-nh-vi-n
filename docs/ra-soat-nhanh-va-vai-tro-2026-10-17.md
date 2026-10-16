# Rà soát nhánh và vai trò — Codex, 17/10/2026

Đã kiểm trực tiếp git ls-remote --heads/--symref, fetch HEAD mới nhất, so lịch sử commit trên cả 8 nhánh. Đây là rà soát quản lý nhánh và tài liệu, không phải QA giao diện của commit Claude mới.

| Nhánh | Trạng thái / đề xuất |
|---|---|
| shared/requirements | Giữ: yêu cầu và quyết định chủ dự án |
| shared/qa-review | Giữ: Codex QA chính; Claude bổ sung tự kiểm/bản mẫu |
| claude/cta-dich-vu-sua | Giữ: Claude thiết kế/triển khai; có CTA và Giới thiệu chưa QA/tích hợp xong |
| codex/hero-chinh-quy-dao | Giữ: tích hợp được giao và QA chính, demo hiện hành |
| antigravity/design | Có thể xóa sau khi chủ dự án chọn; mã 40aa56d đã có trong lịch sử nhánh giữ lại, commit riêng chỉ là cập nhật tài liệu vai trò |
| antigravity/services-v1 | Có thể xóa sau khi chủ dự án chọn; mã acc18e7 đã có trong lịch sử nhánh giữ lại, commit riêng chỉ là cập nhật tài liệu vai trò |
| antigravity/hero-v1 | Không dùng tiếp; lưu bản sao/tag trước khi xóa vì còn 8 commit mã riêng chưa nằm trong lịch sử nhánh giữ lại |
| claude/optimistic-mccarthy-d1d15i | Không dùng tiếp; chưa xóa vì đang là default branch GitHub. Đổi default branch và lưu lịch sử riêng trước |

## Bằng chứng và giới hạn

- Bản mã antigravity/design 40aa56dcaa60b31c7be15f5c3a4f5c6eaa13d9f2 và Services acc18e782786940f8a5c88a85b3f1f5b1b298959 đều đã là tổ tiên của bản Codex hiện hành. Các commit sau đó ở hai nhánh này chỉ cập nhật Markdown phân công; chính sách tương đương đã có ở shared/requirements. Các link dùng tên nhánh Antigravity trong tài liệu lịch sử có thể hỏng sau khi xóa; nên giữ tag nếu cần truy cập nguyên trạng bằng tên tham chiếu.
- Hero cũ còn 8 commit mã riêng: a47f4e2, 634895a, a70b7db, 6165c39, c52d475, 777b2d6, 3769623, 081637e. Việc một số nội dung từng được chép sang nhánh khác không đồng nghĩa giữ nguyên lịch sử commit. Chưa xác minh từng thay đổi đều đã được thay thế; cần lưu tag/bản sao trước khi xóa.
- GitHub HEAD hiện trỏ claude/optimistic-mccarthy-d1d15i @ c9ae9d9ea9e0cd566e7453e9a8e2e579c0f5e35f; chưa được đổi. Có commit tài liệu riêng d8ab6df/961e6fa cùng các cập nhật vai trò. Nếu muốn xóa, chủ dự án cần chọn nhánh mặc định thay thế và lưu lịch sử trước.
- Claude hiện bàn giao 86565c1f21cf04cb9009502615aa9f4cf93b2dd5: có Giới thiệu/chuyển cảnh mới và CTA 229cf79; chưa được Codex QA trong lần rà soát nhánh này, chưa gộp vào Codex. Tuyệt đối giữ nhánh Claude này.
- Các nhánh codex/qa-services-v1, codex/review-claude-qa và main không xuất hiện trong danh sách heads hiện tại; không phải nhánh cần xóa thêm.

## Vai trò và kiểm tra

Codex QA chính: đối chiếu đúng yêu cầu/SHA, kiểm giao diện/hành vi, hồi quy, báo lỗi và kiểm lại; tích hợp khi được giao. Claude thiết kế, triển khai, tự kiểm và sửa lỗi. Chủ dự án duyệt cuối. Antigravity không còn tham gia.

Theo chỉ đạo hiện hành, ưu tiên Chrome desktop/mobile mô phỏng. Safari, Firefox, Edge, Android/iPhone thật kiểm sau; ghi CHƯA KIỂM nếu chưa chạy. Không coi giả lập viewport là thiết bị thật hoặc WebKit là Safari thật.

Chỉ thay Markdown trên các nhánh, không đổi mã, không xóa nhánh, tạo tag, đổi default branch, merge hoặc deploy. Chưa rà GitHub branch protection và các PR tham chiếu nhánh; danh sách là đề xuất để chủ dự án chọn xóa. Các SHA ở đây là snapshot trước commit chứa báo cáo này.
