# Sửa 2 điểm CTA Dịch vụ (Claude, 15/10/2026)

Giao theo [phan-quyen-thiet-ke-giao-claude-2026-10-15.md](https://github.com/lqt140304-rgb/web-b-nh-vi-n/blob/shared/requirements/docs/phan-quyen-thiet-ke-giao-claude-2026-10-15.md) (`shared/requirements` @ `43e4adc`), mục 1.

- **Nền:** `codex/hero-chinh-quy-dao` @ `0873d129fdfbdf87c082c09945548a26e3553902` (bản gộp với Hero chính).
- **Nhánh này:** `claude/cta-dich-vu-sua`, một commit trên nền trên. Không ghi đè nhánh Codex, không đẩy `antigravity/design` hay `main`, không merge.
- **Tệp đổi:** chỉ `demo/styles.css` (thêm một khối cuối tệp, không sửa dòng cũ) và thư mục `docs/qa/cta-dich-vu-sua-claude/`.
- Không đổi câu chữ, số điện thoại, liên kết, màu, bố cục, bốn thẻ, modal, Hero, header.

## Đã sửa

1. **Họa tiết góc chạm nút.** Thu nhỏ vòm và các chấm từ 80 px còn 24 px, đặt ở góc trống trên cùng bên phải (cách mép trên 8 px, mép phải 10 px). Từ 1100 px trở xuống (nút xếp dọc) ẩn hẳn; mobile vốn đã ẩn. Đo ở 1440: họa tiết cách chữ và nút ít nhất 6 px. Không thêm trang trí mới. Lưu ý: ở 1440 họa tiết giờ rất nhỏ và mờ, gần như chỉ còn một nét vòm nhỏ ở góc.
2. **Hai nút không cùng cao.** Đặt cùng viền 1,5 px và cùng `height` cố định thay vì phụ thuộc đệm và dòng chữ.

| Cỡ | Trước (đo ở 0873d12) | Sau |
|---|---|---|
| Desktop 1440 và 1101–1440 | 51 px và 53 px | 52 px và 52 px |
| Tablet 681–1100 | 44 px và 45 px | 48 px và 48 px (khối cao 156 px, ≤ 180 px) |
| Mobile ≤ 680 | 50 px và 52 px | 52 px và 52 px (khung Mobile 390: 48 px và 48 px) |

Nút tablet tăng lên 48 px (trước 44 px) cho cùng cao và đủ vùng chạm; khối vẫn ≤ 180 px. Mobile vẫn ≥ 48 px.

## Đã kiểm (Chromium, `file://`)

- 1440, 1200, 1101, 1024, 768, 701, 700, 390, 360 và khung Mobile 390: không tràn ngang, tiêu đề và mô tả một dòng từ 701 đến 1440 (hai dòng ở 360 như trước), hai nút cùng cao, họa tiết không chạm.
- Không lỗi console.
- So ảnh chụp toàn trang `services.html` 1440 với bản gộp: chỉ khác ở vùng nút CTA.

Ảnh: `cta-1440.png`, `cta-1200.png`, `cta-1101.png`, `cta-1024.png`, `cta-768.png`, `cta-390.png`, `cta-360.png`, `cta-khung-mobile-390.png`. Mã đo: `do-cta.js` (đặt biến `TREE` là tên thư mục chứa nhánh).

## Chưa kiểm

Codex kiểm chéo (theo phân công). Hover và focus của hai nút (không đổi so với bản gộp). Gọi `tel:` thật trên điện thoại. Hiện tượng "họa tiết gần như biến mất ở 1440" chủ dự án cần xem bằng mắt: nếu muốn họa tiết rõ hơn thì phải thêm chỗ trống ở góc (tăng đệm phải của khối), tức đổi bố cục, nên tôi chưa làm.
