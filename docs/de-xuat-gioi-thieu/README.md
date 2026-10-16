# Đề xuất: phần Giới thiệu ngay sau Hero, chuyển cảnh gắn theo thanh cuộn

- Người đề xuất: Claude (thiết kế, theo `shared/requirements` @ 43e4adc)
- Ngày: 2026-10-16
- Bản: **v2** (sửa theo góp ý của chủ dự án sau v1 @ 57b37e5ba1647934a126ced45a8def9b948581e6)
- Trạng thái: **CHỜ CHỦ DỰ ÁN DUYỆT v2**. Chưa giao Antigravity/Codex, chưa đụng `demo/`.
- Nền: Hero quỹ đạo v5 đã chốt (`docs/de-xuat-hero-quy-dao/`), bản trong demo ở `codex/hero-chinh-quy-dao` @ 0873d129fdfbdf87c082c09945548a26e3553902.

## 1. Chủ dự án đã chốt (sự thật)

| Câu hỏi | Trả lời |
|---|---|
| Thứ tự trang | Hero → **Giới thiệu** → Dịch vụ |
| Cách chạy | Gắn theo thanh cuộn |
| Kiểu chuyển cảnh (v1) | **Đã duyệt**: khung ảnh rời quỹ đạo, bay xuống thành bộ ảnh Giới thiệu |
| Khung bay lướt qua mép cột chữ | **Không cần tránh** |
| Góp ý v1 | Giảm tốc độ. Bộ ảnh đang "khá phổ thông": cần các khung **khác kích thước** (cái dài, cái bình thường), **chỉ 3 khung**. |

## 2. Thay đổi ở v2

| # | Góp ý | Cách làm |
|---|---|---|
| 1 | Giảm tốc độ | Khi tới phần Giới thiệu, phần này **đứng yên một nhịp cuộn** (≈ 80% chiều cao màn hình) để ảnh hạ cánh từ từ. Quãng cuộn chuyển cảnh ≈ **1,8 lần** v1 (PC 1440×900: 765px → 1371px; mobile 390×844: 0,85 × chiều cao Hero → 1350px). Mỗi khung trễ nhau nhiều hơn (0,07 → 0,1). |
| 2 | Khung khác kích thước, 3 khung | Bộ ảnh 3 khung xếp so le và chồng nhẹ lên nhau: **khung dọc (dài)** 3:4,3 bên trái, **khung ngang** 4:3 chồng lên góc dưới, **khung vuông** nhỏ ở góc trên phải. Mỗi khung xoay nhẹ khác nhau. Mobile dùng đúng bố cục này, thu nhỏ theo bề ngang. |
| 3 | Chuyển cảnh liền với khung mới | Khung trên quỹ đạo (vuông) **đổi dần hình dạng** khi bay: thành khung dọc, khung ngang hoặc giữ vuông. Bo góc và viền không bị kéo méo. Ba khung lớn nhất trên quỹ đạo hạ xuống, các khung còn lại mờ đi sớm. |

Hero giữ nguyên bản đã chốt (9/8/6 khung trên quỹ đạo).

Xem:
- `anh/chuyen-canh-pc.webp` (ảnh động)
- `anh/chuoi-cuon-pc-1440.png`
- `anh/chuoi-cuon-mobile-390.png`
- `anh/bo-anh-3-khung.png` (bộ ảnh lúc đã hạ cánh, PC và mobile)

## 3. Bố cục phần Giới thiệu

| Thành phần | Nội dung | Loại |
|---|---|---|
| Nhãn nhỏ | "VỀ LÊ SƠN" | Đề xuất chữ |
| Tiêu đề | "Bệnh viện Thú y Lê Sơn" | Sự thật (tên) |
| Đoạn giới thiệu | Khung nét đứt `[Đoạn giới thiệu 2–3 câu…]` | **CHỜ NỘI DUNG**: chủ dự án viết. Không dùng câu giới thiệu trên Facebook. |
| Dòng thông tin | Nhận cấp cứu 24/24 · 101 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội · 097 355 51 05 (bấm gọi) | Sự thật đã có trên site |
| Nút | "Xem dịch vụ →" (xuống Dịch vụ) · "Chỉ đường" (Google Maps) | Đề xuất |
| Bộ ảnh | 3 khung: dọc, ngang, vuông (xem mục 2) | Đề xuất |
| Chú thích ô | "Gợi ý ảnh: bác sĩ" (khung dọc) / "sảnh đón tiếp" (khung ngang) / "thú cưng và chủ" (khung vuông) | **Chỉ là gợi ý chụp ảnh**, bỏ khi có ảnh thật |

Không thêm: giờ mở cửa, giá, trang thiết bị, số năm hoạt động, Tin tức, Bảng giá.

## 4. Kiểm tra đã chạy trên v2 (Playwright, file://)

| Hạng mục | Kết quả |
|---|---|
| Lỗi console / pageerror (1440×900, 390×844) | PASS: 0 lỗi |
| Tràn ngang | PASS: scrollWidth = clientWidth (1440, 390) |
| Khung hạ cánh trùng ô ảnh (vị trí và kích thước) | PASS: lệch ≤ 1px, 3/3 ô ở cả PC và mobile |
| Phần Giới thiệu đứng yên trong nhịp hạ cánh, sau đó cuộn tiếp bình thường | PASS (ảnh 7–10 và "about" trong chuỗi cuộn) |
| Cuộn ngược về đầu trang | PASS: khung về lại quỹ đạo, đúng hình vuông |
| Chú thích không bị khung khác che | PASS sau khi sửa (khung dọc: chú thích đặt phía trên; chú thích một dòng) |
| Giảm chuyển động (`prefers-reduced-motion`) | PASS: không chạy chuyển cảnh, không có nhịp đứng yên, bộ ảnh tĩnh hiện sẵn (`anh/reduce-about.png`) |
| Thiết bị thật Android / iOS, hiệu năng cuộn | CHƯA KIỂM. Lưu ý: khung đổi kích thước thật (không chỉ `transform`) trong lúc bay, chỉ áp dụng cho 3 khung, cần đo trên Android tầm trung. |
| Bàn phím, trình đọc màn hình | CHƯA KIỂM (khung bay có `aria-hidden`) |

Chạy lại: `node kiem-tra-chuyen-canh.js` trong thư mục này (cần Playwright).

## 5. Điểm cần chủ dự án quyết

1. Duyệt v2: tốc độ mới và bộ ảnh 3 khung.
2. Ý KIẾN P3: nhịp đứng yên đang ≈ 80% chiều cao màn hình. Muốn chậm hơn nữa hay nhanh hơn thì chỉnh một con số (`PIN_VH`).
3. Ảnh thật và đoạn giới thiệu: chủ dự án cung cấp khi sẵn sàng. Ảnh nên có đúng 1 ảnh dọc, 1 ảnh ngang, 1 ảnh vuông.

## 6. Sau khi duyệt (dự kiến, chưa giao)

- Antigravity: dựng phần Giới thiệu vào `demo/` theo đúng bản này.
- Codex: nối chuyển cảnh vào `demo/hero-orbit.js` (chỉ thêm, không đổi quỹ đạo đã chốt) và QA kỹ thuật.
- Claude: QA (lượt đầu trang mới chạy bằng Opus), quét từng px như với header.

## 7. Ghi chú kỹ thuật cho người tích hợp

- Hero: `z-index:2; overflow:visible`, nền `.hero__bg` giữ `overflow:hidden`; `html, body { overflow-x: clip }`. Không dùng `overflow:hidden` trên tổ tiên của `.about`, vì sẽ làm hỏng `position: sticky`.
- Cấu trúc: `.about-pin` > `.about` (sticky, `top: --about-top`) + `.about-pin__space` (cao `--pin-len`).
  - `--about-top = max(0, (cao màn hình − cao .about) / 2)`: trên PC phần Giới thiệu đứng giữa màn hình, trên mobile đứng sát mép trên.
  - `--pin-len = cao màn hình × PIN_VH`.
- Tiến độ: `P = clamp(scrollY / END)`, với `END = (đỉnh .about-pin − --about-top) + 0,75 × --pin-len`.
- Mỗi lần vẽ, `trackSlots()` đo lại tâm 3 ô ảnh (vì `.about` đứng yên trong khi Hero cuộn đi). Kích thước và góc xoay ô đo một lần trong `measureSlots()` (ResizeObserver).
- Khi đang hạ cánh, khung đặt `scale(1)` và nội suy `--fw` / `--h` (kích thước khung), `--w = min(rộng, cao)` (bo góc, viền, cỡ chữ). Khi cuộn về thì gỡ `--fw`.
- Khi `P ≥ 1`, khung bay ẩn, `.about.is-landed` hiện ô tĩnh.
- Khi giảm chuyển động: `.about-pin.is-static` bỏ sticky và khoảng đứng yên.
