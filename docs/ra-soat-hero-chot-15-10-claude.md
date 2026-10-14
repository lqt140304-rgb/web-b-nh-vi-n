# QA Hero theo thiết kế chốt 15/10/2026 (Claude, lượt đầu)

**Người rà soát:** Claude (Opus) · **Ngày:** 15/10/2026 · **Đối tượng:** nhánh `antigravity/design`, commit `252ad9d` ("implement 15/10/2026 approved Hero layout") · **Yêu cầu đối chiếu:** [thiết kế Hero đã chốt](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/thiet-ke-hero-chot-2026-10-15.md) và [yêu cầu chỉnh Hero](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/yeu-cau-chinh-hero-chu-du-an-2026-10-15.md). Không sửa code, không duyệt thay chủ dự án.

**Bổ sung 15/10 theo quy tắc README:** xem [QA hồi quy Services và bổ sung Hero](qa-hoi-quy-services-va-bo-sung-hero-db30489-claude.md) (kiểm trên `db30489`, thêm 3 FIX P3 về tài liệu; mức ưu tiên ở báo cáo này quy đổi: Trung bình = P2).

**Phạm vi đã kiểm:** đọc `index.html`; đo ở 1440, 1280, 1024, 768, 390, 360 px (tràn ngang, chồng lấn, vị trí họa tiết so với ảnh/chữ/nút); hiệu ứng lặp (khi tải và khi rê chuột); liên kết hai nút và menu; menu điện thoại; header đã đăng nhập; lỗi JS; so ảnh chụp với ảnh tham khảo đã chốt (ảnh 00). **Chưa kiểm:** iPhone/Android thật, Safari.

## Kết luận: **FIX** (4 lỗi, **cả bốn bắt buộc sửa** theo quy tắc "giống ảnh demo"). Phần còn lại PASS.

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

## Quy tắc của chủ dự án (15/10): làm giống ảnh demo

Chủ dự án chốt: **Hero phải làm giống ảnh demo** (ảnh 00). Ảnh là chuẩn để nghiệm thu bố cục và vị trí họa tiết, không chỉ là tham khảo. Vì vậy: (a) **cả bốn lỗi bên dưới đều bắt buộc sửa**; (b) **việc bỏ nhãn "BỆNH VIỆN THÚ Y LÊ SƠN" là đúng** vì ảnh không có nhãn này (câu hỏi của Claude đã được giải); (c) vẫn giữ logo, ảnh gốc và kiểu chữ trong repo (ảnh AI chỉ chuẩn về bố cục và trang trí).

**Đối chiếu vị trí với ảnh demo** (tỉ lệ theo chiều rộng màn hình ở 1440 px; ảnh demo rộng 1586 px):

| Họa tiết | Ảnh demo | Hiện tại | Kết luận |
|---|---|---|---|
| Cuộn len | tâm x ≈ 15%, nằm ngoài lề trái tiêu đề, dòng 2 chữ bắt đầu sau cuộn len; sợi cong xuống **chạm đỉnh ảnh mèo trái** | tâm x ≈ 22%, sát chữ; sợi lửng giữa chừng | **Lệch**, FIX 4 |
| Ba dấu chân | x ≈ 83% đến 89%, nhỏ dần lên trên, **xa chữ**, cạnh nút Đăng ký trở xuống | x ≈ 74% đến 76%, sát chữ "nhỏ" | **Lệch**, FIX 3 |
| Nét cong và hai chấm góc trên phải | x ≈ 90% đến 96%, ngay dưới nút Đăng ký | x ≈ 79% đến 82% | **Lệch** (thêm vào FIX 3) |
| Quả bóng nhỏ | góc dưới trái x ≈ 6%, **ngoài hẳn cung cam và ảnh** | x ≈ 11% đến 13%, chạm cung và mép ảnh | **Lệch**, FIX 2 |
| Hai cung cam | ôm ngoài ảnh trái và ảnh phải, **khe hở đều khoảng 20 px** so với ảnh, đầu cung nhô lên trên đỉnh ảnh | nằm sát và đè lên ảnh | **Sai**, FIX 1 |
| Tiêu đề, hai nút, ba ảnh, header | như ảnh | khớp | PASS |

## FIX

| # | Ưu tiên | Lỗi | Bằng chứng | Đạt khi |
|---|---|---|---|---|
| 1 | **Trung bình** | **Hai cung cam đè lên ảnh, không ôm phía ngoài.** Yêu cầu: "ôm phía ngoài hai ảnh bên, chừa khe nhỏ đều, không đè ảnh". Thực tế cung trái cắt qua mép trái ảnh mèo (cung bắt đầu x = 180, ảnh bắt đầu x = 192) và cung phải cắt vào mép phải ảnh mèo vằn (cung kết thúc x = 1260, ảnh kết thúc x = 1248); phần lớn nét cam nằm chồng lên ảnh | Ảnh 03 (phóng to trái/phải), ảnh 01; số đo trên 1440 và 1024 | Toàn bộ nét cam nằm ngoài ảnh, cách mép ảnh khoảng đều ≥ 8 px, theo đường cong vòm; giống ảnh tham khảo 00 |
| 2 | **Trung bình** | **Quả bóng đè lên cung cam và mép ảnh trái** ở 1440 (bóng 160–196, ảnh bắt đầu 192). Ở 1024 bóng nằm ngoài màn hình (x = −48), tức biến mất | Ảnh 03, số đo | Bóng nằm ở góc dưới trái, tách khỏi cung và ảnh (như ảnh 00), hiển thị trọn ở 1280 và 1024 hoặc ẩn có chủ đích |
| 3 | **Trung bình** | **Dấu chân dưới cùng gần sát chữ "nhỏ"** (cách khoảng 15 px ở 1440); ảnh tham khảo đặt ba dấu chân xa hơn về bên phải, ngoài vùng chữ | Ảnh 03 (phải) | Dấu chân và nét cong góc trên phải đúng vị trí ảnh demo (x ≈ 83–89% và 90–96%), cách chữ ≥ 40 px |
| 4 | **Trung bình** | Sợi len không dẫn xuống ảnh mèo trái như ảnh tham khảo (kết thúc lửng ở y ≈ 375, ảnh bắt đầu y = 548) | Ảnh 01 so với 00 | Cuộn len ở x ≈ 15% ngoài lề chữ; sợi cong nhẹ xuống chạm đỉnh ảnh mèo trái, không chạm nút hay chữ |

## Ghi nhận / ý kiến

- Nhãn "BỆNH VIỆN THÚ Y LÊ SƠN" đã bỏ: **đúng theo quy tắc làm giống ảnh demo**, không còn là câu hỏi.
- Dấu chân không nằm trong bounding của chữ nhưng bounding của nhóm dấu chân chạm khung tiêu đề; chỉ cảm nhận gần, không phải lỗi chồng chữ.
- Chưa kiểm trên thiết bị thật.

Ảnh bằng chứng: `docs/ra-soat-hero-chot-15-10-bang-chung/` (00 ảnh tham khảo, 01 desktop, 02 mobile, 03 phóng to cung cam).
