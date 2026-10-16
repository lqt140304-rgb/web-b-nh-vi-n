# Bàn giao: phần Giới thiệu + chuyển cảnh Hero → Giới thiệu trong demo/ (Claude, 17/10/2026)

- Nhánh: `claude/cta-dich-vu-sua` (nhánh Claude được giao theo `docs/claude-thay-the-antigravity-2026-10-17.md`). SHA đầy đủ ghi trong tin nhắn bàn giao.
- Nền:
  - Merge `codex/hero-chinh-quy-dao` @ 1ec77ac (đã có header tích hợp) vào nhánh này.
  - Xung đột duy nhất ở `demo/styles.css`. Phần header lấy theo bản của Codex (bỏ các rule header cũ); giữ khối sửa CTA 229cf79 (chưa được Codex kiểm chéo).
- Bản duyệt: chủ dự án duyệt v3 ("duyệt v3, đưa vào demo đi"). Mẫu ở `shared/qa-review` @ ea269d0, `docs/de-xuat-gioi-thieu/`.
- **Đây là tự kiểm, không phải QA độc lập.** Theo chỉ đạo chủ dự án, Claude không kiểm sâu, **Codex kiểm chính**.

## Tệp đổi

| Tệp | Thay đổi |
|---|---|
| `demo/gioi-thieu.css` (mới) | CSS phần Giới thiệu, chép từ mẫu v3. Đổi `.about` → `.gt`, `@media` → `@container gt` (khung Mobile 390 chạy như điện thoại thật), `vw` → `cqw`. Thêm 3 chỗ đụng phần có sẵn, ghi ở cuối tệp (xem dưới). |
| `demo/hero-orbit.js` | Áp đúng phần chênh giữa Hero v5 đã chốt và mẫu v3 (đổi tên lớp như trên). Nội dung xem mục "JS" bên dưới. Quỹ đạo không đổi. |
| `demo/index.html` | Thêm `<link gioi-thieu.css>` và markup `.gt-wrap > .gt-pin > section#gioi-thieu.gt` ngay sau Hero. Thêm `data-sticky-top` cho thanh điều khiển bản xem thử. Thêm 1 dòng tiêu chí "Giới thiệu & chuyển cảnh" trong modal Tiêu chí, sửa `<title>`. |

**3 chỗ đụng phần có sẵn (cần Codex chú ý):**

1. `.ho { overflow: visible; z-index: 2 }` và `.ho__bg, .ho__orbits, .ho__decor { overflow: hidden }`. Khung bay ra được khỏi Hero; nền, quỹ đạo và trang trí vẫn bị cắt trong Hero như cũ.
2. `.site-stage` (cả 3 chế độ) `overflow: clip` thay cho `hidden`. Lý do: `hidden` biến khung xem thử thành vùng cuộn riêng, làm `position: sticky` (nhịp đứng yên) mất tác dụng. Ở chế độ Toàn màn hình, `clip` cắt khung bay sát mép để không sinh thanh cuộn ngang.
3. `.ho__frames .frame { width: var(--fw, var(--w)) }`: khung đổi dần hình dạng khi hạ cánh.

**JS (`demo/hero-orbit.js`):**

- `FRAME_SCALE = 1.08`: khung Hero to hơn 8% theo yêu cầu chủ dự án. Cùng với phần chuyển cảnh, thay đổi này làm `tests/verify-hero-source.py` báo "Approved simulation differs…". Đây là kết quả dự kiến, vì bản duyệt mới là v3. Cần Codex cập nhật mốc so sánh sang mẫu v3.
- `measureSlots` / `trackSlots`: đo 3 ô ảnh.
- `smoothP` / `glide`: làm mượt tiến độ.
- Bù cuộn `Y += SY`.
- Đổi hình khung bằng `--fw` / `--h` / `--w`.
- `sync()` giữ vòng quay chạy khi đang chuyển cảnh.
- Chừa chỗ cho phần tử `[data-sticky-top]`.
- Đo lại khi `window` đổi cỡ.

Không đổi: header, Services, CTA, app.js, quỹ đạo, intro, nút tạm dừng.

## Tự kiểm đã chạy (file://, Chromium Playwright) — `tu-kiem-gioi-thieu.js`

| Hạng mục | Desktop 1440 | Mobile 390 | Toàn màn hình 1440 / 768 / 390 |
|---|---|---|---|
| Lỗi console / pageerror | 0 | 0 | 0 / 0 / 0 |
| Tràn ngang (scrollWidth = clientWidth) | đạt | đạt | đạt |
| 3 khung hạ khớp 3 ô (vị trí + kích thước) | ≤ 1px | ≤ 1px | ≤ 1px |
| Phần Giới thiệu đứng yên ngay dưới thanh điều khiển | đạt | đạt | đạt |
| Cuộn ngược về đầu: khung về quỹ đạo, quỹ đạo hiện lại | đạt | đạt | đạt |

- Giảm chuyển động (1440): `.gt-pin.is-static`, không sticky, không khoảng đứng yên, bộ ảnh hiện sẵn.
- Số liệu: `ket-qua-tu-kiem.json`. Ảnh: `chuoi-cuon-*.png`, `giam-chuyen-dong.png`.

Chạy nhanh bộ test có sẵn của Codex trên nhánh này (server 3030):

- `hero-shell`, `hero-header-height`, `header-mobile`, `header-names`, `services-header-regression`: thoát 0.
- `header-auth` thất bại ở bước viền focus của mục trong menu tài khoản (`outlineWidth >= 2`). Lỗi này **tái hiện y hệt trên `codex/hero-chinh-quy-dao` @ 1ec77ac chưa có thay đổi của Claude**, nên không do phần Giới thiệu gây ra. Có thể do môi trường chạy; nhờ Codex xem.
- Lưu ý khi chạy lại: `services-header-regression` (hoặc test khác) ghi đè ảnh/JSON trong `docs/qa/header-mobile-196f2ba/` dù đã đặt `QA_OUTPUT`. Claude đã khôi phục các tệp đó, không commit thay đổi.
- Chưa chạy: `hero-orbit.cjs` (lấy mẫu 60 giây), `header-parity`, `verify-header-source`. `verify-hero-source.py` báo khác như dự kiến (xem mục JS).

## Chưa kiểm (giao Codex kiểm chính)

- Hồi quy đầy đủ Hero / Header / Services, các mốc px trung gian, chuyển chế độ xem khi đang cuộn giữa chừng.
- Bàn phím và trình đọc màn hình phần Giới thiệu. Khung bay và ô ảnh có `aria-hidden`; chú thích "Gợi ý ảnh" là chữ thật.
- Hiệu năng trên Android tầm trung (3 khung đổi kích thước thật khi bay), Safari/iOS (`overflow: clip`, sticky), Firefox.
- Nút "Chỉ đường" (tab mới) và `tel:` trên máy thật.

## Nội dung

- Đúng bản duyệt v3. Địa chỉ, số điện thoại và link Maps lấy từ `shared/requirements` `docs/thong-tin-lien-he.md`.
- Đoạn giới thiệu vẫn là khung chờ, ảnh thật chờ chủ dự án.
- "Xem dịch vụ →" trỏ `services.html`, vì demo có trang Dịch vụ riêng.
