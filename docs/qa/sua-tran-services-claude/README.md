# Sửa FIX P2 Codex: Services tràn ở điểm chuyển tablet (Claude, 17/10/2026)

- Lỗi gốc: `shared/qa-review` @ 8c5bc5a, `docs/qa-gioi-thieu-86565c1-codex/README.md` mục "FIX P2 có sẵn".
- Nhánh `claude/cta-dich-vu-sua`. Nền là `ecd8869` (commit test của Codex). SHA đầy đủ của lần sửa ghi trong tin nhắn bàn giao.

## Nguyên nhân

Ở tablet (681–1100px), `.booking-cta-title` và `.booking-cta-desc` đặt `white-space: nowrap`, còn `.booking-cta-actions` rộng cố định 236px và không co (`flex-shrink: 0`). Vì vậy hàng CTA có bề rộng tối thiểu cứng, khoảng 381px chữ + 20px khoảng cách + 236px nút + 56px lề.

Chrome trên Windows có thanh cuộn cổ điển khoảng 17px. Ở cửa sổ 681–692px, `@media` vẫn tính 681+ nên áp bố cục tablet, nhưng chỗ trống thật chỉ khoảng 664–675px. Hàng CTA kéo rộng `.site-stage` và cả trang. Trên Linux headless, thanh cuộn nổi không chiếm chỗ nên không tái hiện được trực tiếp.

## Sửa (1 khối CSS ở cuối `demo/styles.css`, trong phần CTA của Claude)

```css
@media (max-width: 1100px) and (min-width: 681px) {
  .booking-cta-content { min-width: 0; }
  .booking-cta-title, .booking-cta-desc { white-space: normal; text-wrap: balance; }
}
```

Đủ chỗ thì chữ vẫn một dòng như cũ (đã đo ở 768, 1024, 1100). Thiếu chỗ thì tiêu đề xuống 2 dòng; khối CTA vẫn cao 156px vì cột nút cao hơn. Nút giữ 236×48px. Không đổi chữ, màu, liên kết.

## Tự kiểm (không phải QA độc lập)

- Giả lập thanh cuộn 17px: cửa sổ = w, bề rộng bố cục = w − 17 (`quet-tran-680-700.js`). Quét `services.html` và `index.html`, trạng thái khách và tài khoản, mỗi 2px từ 680 đến 700: không phần tử nào trong `#siteStage` vượt bề rộng bố cục. Trước khi sửa, cửa sổ 681 tái hiện `booking-cta-actions` vượt 2,4px.
- Đo khối CTA (`do-cta-tablet.js`) ở 681, 690, 700, 768, 1024, 1100.
- Còn lại (có từ trước, không thuộc website): ở trạng thái tài khoản, cửa sổ 681–703px, thanh điều khiển bản xem thử (`demo-extra-actions`) rộng tới 704px. Codex đã ghi nhận điểm này ở lần kiểm header.
- Nhờ Codex kiểm lại trên Chrome Windows thật ở dải 680–700px.
