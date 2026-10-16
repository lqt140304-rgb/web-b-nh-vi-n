# Đề xuất: phần Giới thiệu ngay sau Hero, chuyển cảnh gắn theo thanh cuộn

- Người đề xuất: Claude (thiết kế, theo `shared/requirements` @ 43e4adc)
- Ngày: 2026-10-16
- Bản: **v3** (v1 @ 57b37e5ba1647934a126ced45a8def9b948581e6, v2 @ 93fd44b80037cf655906dedd3fe3a8c4d0160b0d)
- Trạng thái: **CHỜ CHỦ DỰ ÁN DUYỆT v3**. Chưa triển khai vào `demo/`, chưa giao Codex.
- Nền: Hero quỹ đạo v5 đã chốt (`docs/de-xuat-hero-quy-dao/`), bản trong demo ở `codex/hero-chinh-quy-dao` @ 0873d129fdfbdf87c082c09945548a26e3553902.

## 1. Chủ dự án đã chốt (sự thật)

| Câu hỏi | Trả lời |
|---|---|
| Thứ tự trang | Hero → **Giới thiệu** → Dịch vụ |
| Cách chạy | Gắn theo thanh cuộn |
| Kiểu chuyển cảnh (v1) | **Đã duyệt**: khung ảnh rời quỹ đạo, bay xuống thành bộ ảnh Giới thiệu |
| Khung bay lướt qua mép cột chữ | **Không cần tránh** |
| Góp ý v2 | Nhịp khung ảnh nhập vào phần Giới thiệu "còn khá khựng": đổi tốc độ cho mượt nhất. Khung ảnh to hơn một chút ở **cả Hero và Giới thiệu**. |
| Góp ý v1 | Giảm tốc độ. Bộ ảnh đang "khá phổ thông": cần các khung **khác kích thước** (cái dài, cái bình thường), **chỉ 3 khung**. |

## 2. Thay đổi ở v3

Nguyên nhân khựng (Claude tìm ra khi đo):

1. **Điểm xuất phát bị kéo trôi.** Khung bay từ vị trí trên quỹ đạo, mà quỹ đạo nằm trong Hero nên bị cuộn đi. Khi phần Giới thiệu dừng (sticky), đích đứng yên nhưng phần "chưa bay hết" của khung vẫn bị kéo lên, nên khung chững lại hoặc giật ngược.
2. **Bám từng nấc lăn chuột.** Tiến độ đọc thẳng từ thanh cuộn, nên mỗi nấc lăn là một bước nhảy.
3. **Vòng quay dừng đột ngột.** Khi Hero ra khỏi màn hình, vòng quay quỹ đạo dừng ngay, kể cả lúc khung còn đang bay.
4. Đường cong tăng/giảm tốc bậc 3 có đỉnh vận tốc gắt (gấp 3 lần trung bình).

| # | Cách sửa |
|---|---|
| 1 | Khi bắt đầu cuộn, khung **đứng nguyên chỗ trên màn hình** (bù quãng cuộn) trong lúc Hero trôi đi, rồi bay xuống ô ảnh. Đường bay không còn đổi chiều. |
| 2 | Tiến độ được **làm mượt**: khung "đuổi theo" thanh cuộn với độ trễ mềm (giảm dần theo hàm mũ, `SMOOTH_K = 7`), nên mỗi nấc lăn chuột không còn là một bước nhảy. |
| 3 | Vòng quay **chạy tiếp cho tới khi hạ cánh xong** rồi mới dừng (vẫn dừng khi người dùng bấm tạm dừng hoặc chuyển tab). |
| 4 | Đổi sang đường cong sin (đỉnh vận tốc ≈ 1,57 lần trung bình). Mỗi khung trễ nhau 0,08, mỗi khung bay trong 84% quãng chuyển cảnh. |
| 5 | **Khung to hơn**: khung trên quỹ đạo Hero +8% (`FRAME_SCALE = 1.08`). Bộ ảnh Giới thiệu: cột ảnh rộng hơn (1,08fr → 1,22fr, khối nội dung 1160 → 1200px), khung dọc 47 → 50%, khung ngang 59 → 62%, khung vuông 36 → 37% bề rộng bộ ảnh. |
| 6 | Tiêu đề "Bệnh viện Thú y Lê Sơn" tự cân hai dòng (`text-wrap: balance`) vì cột chữ hẹp lại. Nếu không, chữ "Sơn" rớt một mình xuống dòng. |

Đo độ mượt (`do-do-muot.js`): PC 1440×900, giả lập cuộn mượt như trình duyệt thật (16 nấc × 100px). Đo vị trí tâm khung lớn nhất mỗi khung hình. Số liệu dao động giữa các lần chạy.

| | v2 | v3 |
|---|---|---|
| Bước nhảy lớn nhất / khung hình | 67–84px | 29–36px |
| Bước lớn nhất ÷ bước trung bình (càng gần 1 càng đều) | 4,1–4,9 | 2,3–2,7 |

`ban-v2-de-so-sanh.html` là bản v2 để mở song song so sánh.

Lưu ý: vì khung đứng nguyên chỗ lúc đầu, giữa quãng chuyển cảnh có lúc 1–2 khung nằm đè lên tiêu đề hoặc cột chữ của phần Giới thiệu khi phần này đang trượt lên. Chủ dự án đã chốt "không cần tránh".

## 2b. Thay đổi ở v2

| # | Góp ý | Cách làm |
|---|---|---|
| 1 | Giảm tốc độ | Khi tới phần Giới thiệu, phần này **đứng yên một nhịp cuộn** (≈ 80% chiều cao màn hình) để ảnh hạ cánh từ từ. Quãng cuộn chuyển cảnh ≈ **1,8 lần** v1 (PC 1440×900: 765px → 1371px; mobile 390×844: 0,85 × chiều cao Hero → 1350px). Mỗi khung trễ nhau nhiều hơn (0,07 → 0,1). |
| 2 | Khung khác kích thước, 3 khung | Bộ ảnh 3 khung xếp so le và chồng nhẹ lên nhau: **khung dọc (dài)** 3:4,3 bên trái, **khung ngang** 4:3 chồng lên góc dưới, **khung vuông** nhỏ ở góc trên phải. Mỗi khung xoay nhẹ khác nhau. Mobile dùng đúng bố cục này, thu nhỏ theo bề ngang. |
| 3 | Chuyển cảnh liền với khung mới | Khung trên quỹ đạo (vuông) **đổi dần hình dạng** khi bay: thành khung dọc, khung ngang hoặc giữ vuông. Bo góc và viền không bị kéo méo. Ba khung lớn nhất trên quỹ đạo hạ xuống, các khung còn lại mờ đi sớm. |

Hero giữ nguyên bản đã chốt (9/8/6 khung trên quỹ đạo). Từ v3 khung Hero to hơn 8% theo yêu cầu.

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

## 4. Kiểm tra đã chạy trên v3 (Playwright, file://)

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
| Khung Hero +8% có che chữ, nút ở mọi khổ | CHƯA KIỂM đủ: mới xem 1440 và 390. Khi Codex đưa vào `demo/` cần chạy lại bộ quét Hero. |

Chạy lại: `node kiem-tra-chuyen-canh.js` trong thư mục này (cần Playwright).

## 5. Điểm cần chủ dự án quyết

1. Duyệt v3: nhịp mượt mới và kích thước khung mới (Hero +8%, bộ ảnh lớn hơn).
2. Ý KIẾN P3: các con số có thể tinh chỉnh: độ dài nhịp đứng yên (`PIN_VH = 0.8`), độ "trôi" (`SMOOTH_K = 7`, nhỏ hơn thì trôi hơn), cỡ khung Hero (`FRAME_SCALE = 1.08`).
3. Ảnh thật và đoạn giới thiệu: chủ dự án cung cấp khi sẵn sàng. Ảnh nên có đúng 1 ảnh dọc, 1 ảnh ngang, 1 ảnh vuông.

## 6. Sau khi duyệt (dự kiến, chưa giao)

Theo quyết định 17/10/2026 (Claude thay thế Antigravity; Codex tích hợp và kiểm chéo):

- Claude: triển khai phần Giới thiệu và chuyển cảnh vào `demo/` trên một nhánh `claude/*` riêng, tách từ demo hiện hành `codex/hero-chinh-quy-dao`. Phần chuyển cảnh chỉ thêm vào `demo/hero-orbit.js`, không đổi quỹ đạo đã chốt; riêng `FRAME_SCALE` có đổi cỡ khung Hero. Bàn giao SHA đầy đủ, tệp đổi, ảnh desktop/mobile và kết quả **tự kiểm**, bao gồm quét từng px và bộ quét Hero. Tự kiểm không tính là QA độc lập.
- Codex: tích hợp, kiểm chéo độc lập và hồi quy Hero / Header / Dịch vụ.
- Chủ dự án duyệt cuối.

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
- v3:
  - `place()` cộng `scrollY` vào Y của mọi khung khi không giảm chuyển động. Đây là bước bù cuộn để khung đứng yên trên màn hình.
  - `smoothP()` làm mượt tiến độ. Khi vòng chính không chạy, `glide()` tự vẽ bằng rAF cho tới khi tiến độ bắt kịp thanh cuộn.
  - `sync()` giữ vòng quay chạy khi tiến độ nằm trong khoảng (0, 1).
  - Khung Hero nhân `FRAME_SCALE` trong `layout()`. Thay đổi này **có đụng tới Hero đã chốt** trong `demo/hero-orbit.js`, nên Codex cần áp và QA lại Hero.
