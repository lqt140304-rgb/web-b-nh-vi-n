# Yêu cầu sửa: bỏ hiệu ứng lặp (gửi Antigravity)

**Người soạn:** Claude · **Căn cứ:** [QA lượt 5](ra-soat-services-v1-claude.md) và [chốt icon](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/codex/review-claude-qa/docs/chot-icon-services-v1.md) ("không thêm hiệu ứng rung/nhấp nháy lặp"). **Chủ dự án đã yêu cầu gửi sửa (15/10/2026).** Áp dụng cho Services (`f20a7e4`) và Hero (`a70b7db`); sửa trong `demo/styles.css`, không đổi gì khác.

## Việc cần sửa

| # | Hiệu ứng lặp hiện tại | Sửa thành | Đạt khi |
|---|---|---|---|
| 1 | Trái tim nhãn đầu trang `eyebrowHeartbeat` (`infinite`), Hero và Dịch vụ | Chạy 2 lần rồi dừng khi tải trang (`animation-iteration-count: 2`), hoặc bỏ | Sau 6 giây không còn chuyển động nào ở nhãn đầu trang |
| 2 | Bốn icon dịch vụ khi rê chuột: `iconStethoscopeBreath`, `iconScissorSnip`, `iconHomeCozy`, `iconHeartECG` (`infinite`) | Chạy 1 lần mỗi lần rê chuột (`animation-iteration-count: 1`, giữ nguyên thời lượng và hình chuyển động), hoặc bỏ | Rê chuột vào thẻ: icon chuyển động một lần rồi đứng yên dù chuột còn ở đó |
| 3 | Icon điện thoại rung `iconPhoneRing` (`infinite`) trên nút "Gọi cấp cứu" khi rê chuột | Rung 1 lần (`animation-iteration-count: 1`) hoặc bỏ | Rê chuột: rung một lần rồi dừng |
| 4 | Mọi hiệu ứng rê chuột còn lại | Bọc trong `@media (hover: hover)` để điện thoại không bị "kẹt" hiệu ứng sau khi chạm | Trên màn hình cảm ứng không có hiệu ứng nào chạy sau khi chạm |

## Giữ nguyên

Hình icon, màu nền, kích thước, vị trí; nút gọi cấp cứu; ba cửa sổ chi tiết; mọi hiệu ứng chuyển màu và nhấc nhẹ một lần (hover của thẻ, nút, mũi tên). Chế độ giảm chuyển động (`prefers-reduced-motion`) giữ như hiện tại.

## Cách tự kiểm (đủ, không cần báo cáo dài)

Tìm `infinite` trong `demo/styles.css`: không còn trong các hiệu ứng trên. Báo commit mới và "đã làm / chưa làm" cho 4 mục. Claude kiểm lại đúng bốn mục này.
