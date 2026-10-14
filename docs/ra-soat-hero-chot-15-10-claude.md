# QA Hero theo thiết kế chốt 15/10/2026 (Claude, lượt đầu)

**Người rà soát:** Claude (Opus) · **Ngày:** 15/10/2026 · **Đối tượng:** nhánh `antigravity/design`, commit `252ad9d` ("implement 15/10/2026 approved Hero layout") · **Yêu cầu đối chiếu:** [thiết kế Hero đã chốt](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/thiet-ke-hero-chot-2026-10-15.md) và [yêu cầu chỉnh Hero](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-chinh-hero-chu-du-an-2026-10-15.md). Không sửa code, không duyệt thay chủ dự án.

**Phạm vi đã kiểm:** đọc `index.html`; đo ở 1440, 1280, 1024, 768, 390, 360 px (tràn ngang, chồng lấn, vị trí họa tiết so với ảnh/chữ/nút); hiệu ứng lặp (khi tải và khi rê chuột); liên kết hai nút và menu; menu điện thoại; header đã đăng nhập; lỗi JS; so ảnh chụp với ảnh tham khảo đã chốt (ảnh 00). **Chưa kiểm:** iPhone/Android thật, Safari.

## Kết luận: **FIX** (2 lỗi Trung bình, 2 lỗi Thấp). Phần còn lại PASS.

## PASS

| Mục chốt | Bằng chứng |
|---|---|
| Tiêu đề "Không gian lớn / cho những người bạn nhỏ", ngắt hai dòng, không cắt chữ | Đo ở mọi cỡ; font và màu tím giữ nguyên |
| Bỏ hàng hai ghi chú dưới nút, không để lại khoảng trống thừa | Không còn `.hero-reassurance-block`; khoảng cách nút–ảnh gọn |
| Hai nút giữ liên kết: "Gửi yêu cầu đặt lịch" → `#form-dat-lich`, "Xem dịch vụ" → `services.html` | Đo `href` (đích đặt lịch vẫn chưa có, đã hoãn có ghi nhận) |
| Không tràn ngang; header, menu điện thoại, tài khoản | `scrollWidth` = chiều rộng ở mọi cỡ; menu mở bằng bàn phím vào đúng nút đóng, nền Hero và header `inert`, Escape trả tiêu điểm; header đã đăng nhập 64 px ở 390 |
| Trang trí tĩnh, không rung/nhấp nháy lặp | Không còn phần tử nào `infinite`, cả khi tải và khi rê chuột vào ba ảnh và nút; không lỗi JS |
| Cuộn len, ba dấu chân nhỏ dần, nét cong và hai chấm, quả bóng: màu tím nhạt, dựng SVG | Có đủ, `#B896BF` |
| Mobile (390, 360): ẩn họa tiết, ba ảnh một hàng, tiêu đề và nút rõ | Ảnh 02 |

## FIX

| # | Ưu tiên | Lỗi | Bằng chứng | Đạt khi |
|---|---|---|---|---|
| 1 | **Trung bình** | **Hai cung cam đè lên ảnh, không ôm phía ngoài.** Yêu cầu: "ôm phía ngoài hai ảnh bên, chừa khe nhỏ đều, không đè ảnh". Thực tế cung trái cắt qua mép trái ảnh mèo (cung bắt đầu x = 180, ảnh bắt đầu x = 192) và cung phải cắt vào mép phải ảnh mèo vằn (cung kết thúc x = 1260, ảnh kết thúc x = 1248); phần lớn nét cam nằm chồng lên ảnh | Ảnh 03 (phóng to trái/phải), ảnh 01; số đo trên 1440 và 1024 | Toàn bộ nét cam nằm ngoài ảnh, cách mép ảnh khoảng đều ≥ 8 px, theo đường cong vòm; giống ảnh tham khảo 00 |
| 2 | **Trung bình** | **Quả bóng đè lên cung cam và mép ảnh trái** ở 1440 (bóng 160–196, ảnh bắt đầu 192). Ở 1024 bóng nằm ngoài màn hình (x = −48), tức biến mất | Ảnh 03, số đo | Bóng nằm ở góc dưới trái, tách khỏi cung và ảnh (như ảnh 00), hiển thị trọn ở 1280 và 1024 hoặc ẩn có chủ đích |
| 3 | Thấp | **Dấu chân dưới cùng gần sát chữ "nhỏ"** (cách khoảng 15 px ở 1440); ảnh tham khảo đặt ba dấu chân xa hơn về bên phải, ngoài vùng chữ | Ảnh 03 (phải) | Dấu chân cách chữ ≥ 40 px |
| 4 | Thấp | Sợi len không dẫn xuống ảnh mèo trái như ảnh tham khảo (kết thúc lửng ở y ≈ 375, ảnh bắt đầu y = 548) | Ảnh 01 so với 00 | Sợi cong nhẹ hướng xuống ảnh mèo trái, không chạm nút hay chữ |

## Ghi nhận / ý kiến

- **Nhãn "BỆNH VIỆN THÚ Y LÊ SƠN" phía trên tiêu đề đã bị bỏ.** Ảnh tham khảo không có nhãn này nhưng yêu cầu bằng chữ không nói bỏ. **Chủ dự án xác nhận** bỏ hay giữ. Nếu giữ, đặt lại và không cho tim đập liên tục.
- Dấu chân không nằm trong bounding của chữ nhưng bounding của nhóm dấu chân chạm khung tiêu đề; chỉ cảm nhận gần, không phải lỗi chồng chữ.
- Chưa kiểm trên thiết bị thật.

Ảnh bằng chứng: `docs/ra-soat-hero-chot-15-10-bang-chung/` (00 ảnh tham khảo, 01 desktop, 02 mobile, 03 phóng to cung cam).
