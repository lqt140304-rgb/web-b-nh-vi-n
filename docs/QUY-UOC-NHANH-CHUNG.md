# Hai nhánh tài liệu dùng chung — 15/10/2026

Theo quyết định chủ dự án, Claude và Codex dùng chung hai nơi:
- **shared/requirements:** yêu cầu, quyết định đã chốt, ảnh mẫu, hướng dẫn Antigravity triển khai.
- **shared/qa-review:** báo cáo QA, rà soát chéo, bằng chứng kiểm tra, kết luận PASS/FIX/chưa kiểm.

## Cách làm

1. Trước mỗi lần viết, đọc HEAD mới nhất của đúng nhánh. Không ghi đè nội dung của agent khác bằng bản cũ.
2. Một tài liệu cho từng chủ đề/đợt sửa, ghi tác giả và ngày. Bổ sung quyết định mới trong nhánh requirements; bổ sung QA trong nhánh qa-review.
3. QA phải ghi nhánh/commit đã kiểm, bằng chứng, giới hạn kiểm tra. PASS kỹ thuật không đồng nghĩa chủ dự án đã duyệt.
4. Đề xuất trong QA chưa được duyệt không tự trở thành yêu cầu. Khi chủ dự án chốt, ghi danh sách triển khai vào requirements.
5. Liên kết giữa hai loại tài liệu dùng URL có tên nhánh rõ ràng, không dựa vào bản sao lịch sử trong cùng nhánh.
6. Claude phụ trách thiết kế; Antigravity chỉ triển khai bản đã chốt theo đặc tả và nhiệm vụ được giao, không tự thay đổi thiết kế. Xem [quyết định phân quyền hiện hành](phan-quyen-thiet-ke-giao-claude-2026-10-15.md). Claude/Codex ghi kết quả kiểm tra vào qa-review.
7. Nhánh claude/optimistic-mccarthy-d1d15i, codex/review-claude-qa và codex/qa-services-v1 chỉ giữ lịch sử, không dùng làm nơi đăng tài liệu mới sau quyết định này.
8. Không merge code thiết kế/main chỉ vì tạo hai nhánh tài liệu.

Hai nhánh được khởi tạo từ tài liệu Claude hiện tại để giữ lịch sử. Tài liệu cũ vẫn có thể xuất hiện trên cả hai; nơi cập nhật chính thức từ nay được xác định bằng danh sách trong docs/README-shared.md.
