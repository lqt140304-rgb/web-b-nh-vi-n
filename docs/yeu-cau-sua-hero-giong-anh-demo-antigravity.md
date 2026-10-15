> **Đã bị thay thế (15/10/2026):** chủ dự án chốt Hero khác làm Hero chính. Xem [yeu-cau-hero-chinh-khung-anh-bay-vong-2026-10-15.md](yeu-cau-hero-chinh-khung-anh-bay-vong-2026-10-15.md). Không làm tiếp 4 việc dưới đây.

# Yêu cầu sửa Hero: làm giống ảnh demo (gửi Antigravity)

**Người soạn:** Claude · **Ngày:** 15/10/2026 · **Căn cứ:** [QA Hero của Claude](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/qa-review/docs/ra-soat-hero-chot-15-10-claude.md) (commit `252ad9d` trên `antigravity/design`) và quyết định của chủ dự án 15/10/2026: **Hero phải làm giống ảnh demo** ([ảnh](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/assets/design/hero-chot-2026-10-15.jpg), [mô tả chốt](thiet-ke-hero-chot-2026-10-15.md)). Sửa trên nhánh `antigravity/design`, chỉ trong phạm vi Hero (`demo/index.html`, `demo/styles.css`); báo commit mới và "đã làm / chưa làm".

## Giữ nguyên (đã đạt)

Tiêu đề "Không gian lớn / cho những người bạn nhỏ"; đã bỏ hàng ghi chú; đã bỏ nhãn "BỆNH VIỆN THÚ Y LÊ SƠN" (đúng ảnh demo); hai nút và liên kết; header, menu điện thoại; ba ảnh; không có hiệu ứng lặp; mobile ẩn họa tiết. Logo, ảnh gốc, kiểu chữ trong repo (ảnh AI chỉ chuẩn về bố cục và trang trí).

## Việc cần sửa (cả bốn bắt buộc)

| # | Việc | Đạt khi |
|---|---|---|
| 1 | **Hai cung cam ôm ngoài hai ảnh bên**, theo đường cong vòm, **khe hở đều khoảng 20 px** với ảnh; đầu cung nhô lên trên đỉnh ảnh như ảnh demo. Không đè lên ảnh | Ở 1440, 1280, 1024 toàn bộ nét cam nằm ngoài ảnh, khe ≥ 12 px và đều hai bên; không đè chữ, nút, họa tiết khác |
| 2 | **Quả bóng nhỏ ở góc dưới trái**, ngoài hẳn cung cam và ảnh trái (x ≈ 6% chiều rộng màn hình, gần đáy ảnh) | Ở 1440 và 1280 bóng không chạm cung hay ảnh; ở 1024 hiển thị trọn trong màn hình hoặc ẩn có chủ đích (không bị cắt nửa) |
| 3 | **Ba dấu chân và nét cong góc trên phải đúng vị trí ảnh demo**: ba dấu chân nhỏ dần lên trên ở khoảng 83–89% chiều rộng, **xa chữ**; nét cong và hai chấm ở khoảng 90–96% ngay dưới nút Đăng ký | Dấu chân cách chữ "nhỏ" ≥ 40 px; không chạm chữ, nút, header |
| 4 | **Cuộn len ở khoảng 15% chiều rộng** (ngoài lề trái tiêu đề); **sợi len cong nhẹ đi xuống và chạm đỉnh ảnh mèo trái**, cùng màu tím nhạt | Cuộn len không chạm chữ; sợi len kết thúc ở đỉnh ảnh trái, không chạm nút |

## Cách tự kiểm

Đặt ảnh demo cạnh ảnh chụp trang ở 1440 px (cùng chiều rộng) và so vị trí từng họa tiết; sai lệch không quá khoảng 3% chiều rộng. Ở 1024 các họa tiết co theo, không đè chữ/ảnh/nút. Mobile (390, 360) giữ nguyên: ẩn họa tiết, không tràn ngang.

Claude kiểm lại đúng bốn mục này khi có commit mới.
