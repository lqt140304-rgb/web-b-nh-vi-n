# Đề xuất: phần Giới thiệu ngay sau Hero, chuyển cảnh gắn theo thanh cuộn

- Người đề xuất: Claude (thiết kế, theo `shared/requirements` @ 43e4adc)
- Ngày: 2026-10-16
- Trạng thái: **CHỜ CHỦ DỰ ÁN DUYỆT**. Chưa giao Antigravity/Codex, chưa đụng `demo/`.
- Nền: Hero quỹ đạo v5 đã chốt (`docs/de-xuat-hero-quy-dao/`), bản trong demo ở `codex/hero-chinh-quy-dao` @ 0873d129fdfbdf87c082c09945548a26e3553902.

## 1. Chủ dự án đã chốt (sự thật)

| Câu hỏi | Trả lời |
|---|---|
| Thứ tự trang | Hero → **Giới thiệu** → Dịch vụ |
| Kiểu chuyển cảnh | Claude chọn |
| Cách chạy | Gắn theo thanh cuộn (cuộn tới đâu chạy tới đó, cuộn ngược thì chạy ngược) |

## 2. Chuyển cảnh Claude chọn (đề xuất)

Các khung "ẢNH ĐANG CHỜ" đang bay trên quỹ đạo của Hero chính là ảnh của phần Giới thiệu:

1. Khi bắt đầu cuộn, từng khung **rời quỹ đạo, bay xuống và nằm đúng vào ô ảnh** của bộ ảnh Giới thiệu.
   - Các khung hạ cánh lần lượt, khung lớn nhất vào ô lớn nhất.
   - Đường bay hơi cong, luôn phồng ra phía ngoài để tránh cột chữ.
2. Cùng lúc, đường quỹ đạo và đốm sáng mờ dần. Khung không có ô thì mờ đi.
3. Hết quãng chuyển cảnh (cuộn ≈ 85% chiều cao Hero), các khung đã nằm trùng khít ô ảnh.
   - Bộ ảnh tĩnh thay vào, chú thích gợi ý ảnh hiện ra.
   - Lệch đo được ≤ 1px ở cả 1440 và 390.
4. Cuộn ngược lên thì khung bay ngược về quỹ đạo.

Lý do chọn: chính các khung ảnh làm cầu nối giữa hai phần, nên người xem thấy Hero "trôi" sang Giới thiệu chứ không cắt cảnh. Không thêm hiệu ứng nào mới. Khi có ảnh thật, mỗi khung trên quỹ đạo sẽ là đúng tấm ảnh nó hạ xuống.

Xem: `anh/chuyen-canh-pc.webp` (ảnh động), `anh/chuoi-cuon-pc-1440.png`, `anh/chuoi-cuon-mobile-390.png`.

## 3. Bố cục phần Giới thiệu

| Thành phần | Nội dung | Loại |
|---|---|---|
| Nhãn nhỏ | "VỀ LÊ SƠN" | Đề xuất chữ |
| Tiêu đề | "Bệnh viện Thú y Lê Sơn" | Sự thật (tên) |
| Đoạn giới thiệu | Khung nét đứt `[Đoạn giới thiệu 2–3 câu…]` | **CHỜ NỘI DUNG**: chủ dự án viết. Không dùng câu giới thiệu trên Facebook. |
| Dòng thông tin | Nhận cấp cứu 24/24 · 101 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội · 097 355 51 05 (bấm gọi) | Sự thật đã có trên site |
| Nút | "Xem dịch vụ →" (cuộn xuống Dịch vụ) · "Chỉ đường" (mở Google Maps) | Đề xuất |
| Bộ ảnh | PC: 5 ô, 1 ô lớn cao 2 hàng, mỗi ô xoay nhẹ. Mobile: lưới 2×2, ẩn ô thứ 5. | Đề xuất |
| Chú thích ô | "Gợi ý ảnh: sảnh đón tiếp / phòng khám / đội ngũ / khu nội trú / thú cưng và chủ" | **Chỉ là gợi ý chụp ảnh**, sẽ bỏ khi có ảnh thật |

Không thêm: giờ mở cửa, giá, trang thiết bị, số năm hoạt động, Tin tức, Bảng giá.

## 4. Kiểm tra đã chạy (Playwright, file://)

| Hạng mục | Kết quả |
|---|---|
| Lỗi console / pageerror (1440×900, 390×844) | PASS: 0 lỗi |
| Tràn ngang | PASS: scrollWidth = clientWidth (1440, 390) |
| Khung hạ cánh trùng ô ảnh | PASS: lệch ≤ 1px, 5/5 ô PC, 4/4 ô mobile |
| Cuộn ngược về đầu trang | PASS: khung về lại quỹ đạo |
| Giảm chuyển động (`prefers-reduced-motion`) | PASS: không chạy chuyển cảnh, bộ ảnh tĩnh hiện sẵn (`anh/reduce-about.png`) |
| Thiết bị thật Android / iOS, hiệu năng cuộn | CHƯA KIỂM |
| Bàn phím, trình đọc màn hình phần Giới thiệu | CHƯA KIỂM (khung bay có `aria-hidden`) |

Chạy lại: `node kiem-tra-chuyen-canh.js` trong thư mục này (cần Playwright).

## 5. Điểm cần chủ dự án quyết

1. **Duyệt kiểu chuyển cảnh** (khung bay xuống thành bộ ảnh Giới thiệu): đồng ý / muốn đổi.
2. **Tốc độ**: hiện hoàn tất sau khi cuộn ≈ 85% chiều cao Hero. Có thể kéo dài hoặc rút ngắn.
3. Ý KIẾN P3: giữa quãng bay, hai khung bên phải lướt qua mép cột chữ khoảng một nhịp cuộn rồi rời đi. Cùng tinh thần quy định đã chốt cho Hero ("khung được đi qua chữ"). Nếu muốn tránh hẳn, có thể cho khung đi phía sau cột chữ.
4. Nội dung đoạn giới thiệu và ảnh thật: chủ dự án cung cấp khi sẵn sàng. Chưa có thì giữ khung chờ.

## 6. Sau khi duyệt (dự kiến, chưa giao)

- Antigravity: dựng phần Giới thiệu vào `demo/` theo đúng bản này.
- Codex: nối chuyển cảnh vào `demo/hero-orbit.js` (chỉ thêm, không đổi quỹ đạo đã chốt) và QA kỹ thuật.
- Claude: QA (lượt đầu trang mới chạy bằng Opus), quét từng px như với header.

## 7. Ghi chú kỹ thuật cho người tích hợp

- Hero: `z-index:2; overflow:visible`, nền `.hero__bg` giữ `overflow:hidden`; `html, body { overflow-x: clip }`.
- `measureSlots()` đo tâm và góc xoay mỗi ô so với Hero. Chạy lại khi resize (ResizeObserver trên `.about`).
- Tiến độ `P = clamp(scrollY / (chiều cao Hero × 0.85))`. Mỗi khung trễ `0.07 × thứ tự ô`, nội suy vị trí, tỉ lệ và góc xoay bằng easeInOut.
- Khi `P ≥ 1`, khung bay ẩn, `.about.is-landed` hiện ô tĩnh.
- Khi vòng chạy đang dừng (nút tạm dừng), cuộn vẫn cập nhật nhờ listener `scroll` + rAF.
