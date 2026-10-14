# Yêu cầu: nâng cấp khối CTA đặt lịch dưới bốn thẻ dịch vụ (chủ dự án chốt 15/10/2026)

**Ghi bởi:** Claude, chép yêu cầu chủ dự án gửi 15/10/2026 (cập nhật lần 2 cùng ngày) và thêm mục "Đạt khi" để QA. **Thay thế** mọi đề xuất CTA trước của Claude (nền tím đậm, có cún); các đề xuất đó không triển khai. Ảnh minh họa của Claude theo yêu cầu này (bản cập nhật lần 2) (chỉ để tham khảo, không phải bản duyệt): [cta-chot-15-10.png](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/de-xuat-cta-dich-vu/cta-chot-15-10.png).

## Yêu cầu của chủ dự án

**Mục tiêu:** sang trọng, tinh tế và đồng bộ với trang hiện tại. CTA dễ nhận biết nhưng không lấn át các thẻ dịch vụ.

**Thiết kế**
- Nền kem pha tím rất nhẹ, viền tím nhạt mảnh, bo góc khoảng 20–24 px. Không dùng nền tím đậm toàn khối, gradient hoặc bóng đổ nặng.
- Desktop: nội dung bên trái, nút đặt lịch bên phải; căn giữa theo chiều dọc, khoảng cách thoáng nhưng không để khối quá cao.
- Mobile: nội dung và nút xếp dọc, không tràn ngang; nút cao tối thiểu 48 px.
- Tiêu đề dùng font serif hiện tại, màu tím mận, nhỏ hơn tiêu đề trang.
- Chỉ nút chính dùng nền tím đậm, chữ kem và mũi tên nhỏ. Không rung, nhấp nháy hoặc chuyển động lặp.
- Có thể thêm một nét vòm tím nhạt ở góc, không chạm chữ hoặc nút. Không thêm minh họa lớn.

**Nội dung (đúng từng chữ)**
- Tiêu đề: "Đặt lịch chăm sóc cho người bạn nhỏ"
- Mô tả: "Gửi yêu cầu, nhân viên sẽ liên hệ xác nhận lịch hẹn."
- Nút: "Gửi yêu cầu đặt lịch →"
- ~~Ghi chú nhỏ: "Không cần tài khoản"~~ **Bỏ** (cập nhật lần 2).
- Thêm **nút gọi điện** cạnh nút đặt lịch, hiển thị số điện thoại: "097 355 51 05" (liên kết `tel:+84973555105`), thay cho ghi chú đã bỏ. Nút phụ: nền trong, viền tím mảnh, chữ tím, biểu tượng điện thoại nhỏ; nút đặt lịch vẫn là nút chính duy nhất nền tím đậm.
- **Trang trí thêm vài điểm nhỏ** tím nhạt/cam nhạt (ví dụ ba chấm nhỏ, một hai dấu chân, một nét cong ngắn) đặt ở rìa, cạnh nét vòm; tĩnh, không chạm chữ hoặc nút, không minh họa lớn.

**Phạm vi:** chỉ chỉnh khối CTA này. Giữ nguyên bốn thẻ dịch vụ, bộ icon, Hero, header và luồng đặt lịch đã chốt. Giữ đích liên kết hiện tại (`index.html#form-dat-lich`); không tự thêm form/backend hoặc ngụ ý lịch được xác nhận tức thì. Triển khai trên nhánh `antigravity/design`; kiểm tra desktop 1440/1024 px và mobile 390/360 px; bàn giao commit cùng ảnh xem thử. Chưa merge hoặc xuất bản.

## Đạt khi (Claude dùng để QA)

| # | Tiêu chí |
|---|---|
| 1 | Ba câu chữ đúng từng chữ (tiêu đề, mô tả, nút đặt lịch); **không còn chữ "Không cần tài khoản"**; có nút "097 355 51 05" gọi được; không còn khối CTA cũ, không có cún trong khối này |
| 2 | Nền kem pha tím nhạt (không tím đậm, không gradient), viền tím nhạt 1–2 px, bo 20–24 px, bóng đổ không có hoặc rất nhẹ |
| 3 | **Desktop 1440:** chữ trái, hai nút phải **cạnh nhau** (đặt lịch và gọi, cùng cao), căn giữa dọc, khối cao ≤ khoảng 180 px. **Tablet/laptop nhỏ 1024 (khoảng 701–1100 px):** hai nút **xếp dọc**, nút đặt lịch ở trên, nút gọi ở dưới (cùng rộng khoảng 236 px), tiêu đề và mô tả **dài một dòng như ở 1440** (không ngắt xuống dòng); khối cao ≤ khoảng 180 px; không tràn |
| 4 | Mobile 390/360: xếp dọc (chữ, nút đặt lịch, nút gọi), không tràn ngang, cả hai nút cao ≥ 48 px (đề xuất rộng hết khung) |
| 5 | Tiêu đề font serif hiện tại (Lora), màu tím mận, cỡ nhỏ hơn H1 trang; tương phản chữ ≥ 4,5:1 |
| 6 | Chỉ nút đặt lịch nền tím đậm, chữ kem, mũi tên nhỏ, trỏ đúng `index.html#form-dat-lich` (đích form: HOÃN ĐÃ CHỐT); nút gọi nền trong, `tel:+84973555105` không bị `preventDefault` (gọi thật trên điện thoại: CHƯA KIỂM đến khi chủ dự án thử) |
| 7 | Không hiệu ứng lặp, rung, nhấp nháy (kiểm khi tải và giữ chuột > 5 giây); hover nếu có chỉ chạy một lần, bọc `@media (hover: hover)`; focus bàn phím thấy rõ |
| 8 | Nét vòm và các điểm trang trí nhỏ không chạm chữ hoặc nút ở mọi cỡ; tĩnh, tím nhạt/cam nhạt; mobile được giảm bớt hoặc ẩn |
| 9 | Hồi quy: bốn thẻ, icon, ba cửa sổ chi tiết, nút gọi cấp cứu trong thẻ, Hero và header không đổi (CSS chung); không lỗi JS |
| 10 | Tài liệu bàn giao Services cập nhật mục CTA và ghi nhánh `antigravity/design` |
