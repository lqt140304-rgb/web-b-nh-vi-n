# Codex rà soát QA Claude — bộ icon Services V1

Ngày: 15/10/2026. Đối tượng: Services `f20a7e43af094b7b75fbb9754c05ab31d15f7c2d`.
Căn cứ: [Claude lượt 5](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/b95bb386ef9700115ff9ad8c47be0dd723fabc4c/docs/ra-soat-services-v1-claude.md), [quyết định chủ dự án](chot-icon-services-v1.md) và ảnh mẫu người dùng chọn trong cuộc trò chuyện.

## Kết luận

Bộ hình đúng hướng đã chốt. Không cần vẽ lại toàn bộ icon. Claude ghi PASS kèm FIX, không phải duyệt hoàn tất mọi mục. Còn một mục cần sửa để khớp yêu cầu và một ý kiến đối chiếu màu, không phải lỗi chức năng mới.

## P2 — Cần sửa: bỏ hiệu ứng lặp trái quyết định đã chốt

Claude đã nêu đúng, không phải phát hiện mới. Tuy nhiên không nên bỏ qua chỉ vì xếp “Thấp”: tài liệu chủ dự án đã chốt không rung/nhấp nháy lặp.

Trong [styles.css](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/f20a7e43af094b7b75fbb9754c05ab31d15f7c2d/demo/styles.css):
- Dòng 906: eyebrowHeartbeat chạy tự động infinite.
- Dòng 1982, 2003, 2024, 2042: bốn icon dịch vụ chạy infinite khi hover.
- Dòng 2178: điện thoại trên nút cấp cứu rung infinite khi hover.

**Sửa tối thiểu đề xuất:** bỏ animation ở các selector này. Giữ thay đổi màu nền nhẹ khi hover nếu cần. Không cần tạo hiệu ứng thay thế. Áp dụng cả Hero khi dùng cùng CSS; không đổi luồng gọi/đặt lịch. Chế độ reduced-motion không thay thế yêu cầu bỏ lặp trong chế độ mặc định.

Đạt khi:
- [ ] Để trang mở bình thường, tim đầu trang không tự đập mãi.
- [ ] Giữ chuột trên từng thẻ và nút cấp cứu trên 5 giây, icon không rung/nhún/đập lặp.
- [ ] Không đổi hình, độ dày nét, vị trí hoặc kích thước huy hiệu.
- [ ] Nút tel vẫn không bị chặn; ba cửa sổ dịch vụ giữ hành vi đã QA.

## P3 — Đối chiếu màu với ảnh đã chọn (ý kiến, không bắt buộc)

Claude nói chưa có ảnh người dùng chọn để so. Codex đã so trực quan ảnh đó với ảnh desktop bàn giao: bốn hình phù hợp, nhưng nền hiện tại nhìn nhạt hơn mẫu, nhất là cam đào và mint. Mẫu được duyệt là nét mảnh với màu nền đậm hơn, không phải tăng độ dày nét.

Màu triển khai: cam #FCDCC7, mint #C8ECEE, lilac #E8CEEC, rose #F8C8D2. Màu trong ảnh AI không phải thông số màu chính thức; không yêu cầu khớp pixel hay tự đổi palette chỉ dựa vào nhận xét này. Nếu chủ dự án thấy bản hiện tại đủ đậm thì giữ.

Khi bàn giao lần sửa hiệu ứng, đặt ảnh bốn huy hiệu ở kích thước thực tế cạnh mẫu đã chọn để chủ dự án xác nhận. Không dùng ảnh phóng to 3× làm bằng chứng duy nhất về độ rõ.

## Có thể giữ

Ống nghe, kéo, nhà viền có dấu chân, tim viền có ECG; nét 2px, icon 26px và huy hiệu 52px; icon tím đậm; nền bốn nhóm màu; nội dung giữ chỗ, logo và ảnh hiện tại theo phạm vi đã chốt. Không thêm hàng “Chi tiết bộ icon” lên website.

Luồng gọi đã được sửa: selector .btn-card-learn[data-service] vẫn có trong services.js, liên kết cấp cứu không dùng lớp đó. Không phát hiện tái xuất hiện lỗi chặn cuộc gọi qua đối chiếu code.

## Phạm vi và giới hạn

Codex đọc HTML/CSS/JS ở commit trên, xem ảnh desktop bàn giao và so với ảnh đã chốt trong chat. Các số đo responsive, tương phản và tương tác trình duyệt ở Claude lượt 5 là bằng chứng của Claude, chưa được Codex chạy lại độc lập lần này. Chưa thử thiết bị thật, Safari hoặc trình đọc màn hình. Trình gọi thực tế vẫn cần kết quả kiểm tra của chủ dự án như đã thống nhất. Không sửa code hoặc merge.
