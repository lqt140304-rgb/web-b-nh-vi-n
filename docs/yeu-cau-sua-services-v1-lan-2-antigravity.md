# Yêu cầu sửa Services V1, đợt cuối (gửi Antigravity)

**Người soạn:** Claude · **Căn cứ:** [QA Services lượt 2](ra-soat-services-v1-claude.md) (commit `843504e`), [phân loại lỗi theo giai đoạn](phan-loai-loi-theo-giai-doan.md) và quyết định của chủ dự án ngày 14/10/2026. **Chủ dự án đã duyệt.** Antigravity sửa **đúng bảng dưới đây, không sửa thêm**, không đổi thiết kế đã duyệt, không thêm nội dung mới.

## 1. Quyết định của chủ dự án

- Bỏ hai nút Google Maps và Facebook ở header.
- Ảnh Cấp cứu là ảnh tạm thời (không sửa việc cắt mất đầu chú chó).
- Bỏ nút "Tìm hiểu thêm & Chỉ đường" ở thẻ Cấp cứu.

## 2. Việc cần sửa

| # | Việc | Đạt khi |
|---|---|---|
| 1 | **Bỏ nút "Tìm hiểu thêm & Chỉ đường"** ở thẻ Cấp cứu; xóa dữ liệu và mã cửa sổ chi tiết của Cấp cứu không còn dùng (`capcuu` trong `serviceData` và nhánh `serviceKey === 'capcuu'`). Thẻ Cấp cứu chỉ còn nút "Gọi cấp cứu" | Thẻ Cấp cứu không còn nút nào mở cửa sổ; nút gọi vẫn hoạt động; không còn các chữ "hỗ trợ tức thì", "tất cả các ngày trong tuần" ở bất kỳ đâu trong mã |
| 2 | **Số điện thoại không bị ngắt dòng** trên nút Cấp cứu ở desktop (thẻ rộng 270 px) | "097 355 51 05" nằm trọn trên một dòng ở 1440, 1280, 1024, 768, 390, 360 px (ví dụ rút chữ thành "Gọi cấp cứu 24/24" và đặt số trên dòng riêng, hoặc `white-space: nowrap` cho số) |
| 3 | **Đường cong cam không chạm chữ H1** ở trang Dịch vụ | Ở 1440, 1280, 1024 px họa tiết không cắt hay chạm chữ nào của tiêu đề |
| 4 | **Sửa "105" thành "101" Khuất Duy Tiến** ở `services.html` và `index.html`; tìm lại toàn bộ mã và tài liệu | Không còn chuỗi "105 Khuất" (không tính tọa độ) |
| 5 | **Bỏ hai nút Maps và Facebook khỏi header** của `services.html` và `index.html` (cả desktop và khi đã đăng nhập) | Header giống Hero đã duyệt (logo, menu, Đăng nhập/Đăng ký hoặc tài khoản); không tràn ở 1024 và 390 px |
| 6 | **Khối liên hệ trong menu điện thoại: giữ**, nhưng liên kết Facebook dùng `https://www.facebook.com/benhvienthuyleson` (không kèm `?locale`), mở tab mới có `rel="noopener noreferrer"`; địa chỉ chữ ghi 101 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội | Khối hiển thị đúng; Tab quay vòng trong menu vẫn đúng |
| 7 | **Nút Maps/Facebook trong cửa sổ chi tiết của ba dịch vụ còn lại: bỏ** (không nằm trong yêu cầu); giữ nút "Gửi yêu cầu đặt lịch" | Cửa sổ Khám, Spa & Grooming, Nội trú chỉ có chữ giữ chỗ và nút "Gửi yêu cầu đặt lịch" |
| 8 | **Tài liệu `thong-tin-benh-vien-le-son.md`**: xóa hoặc đánh dấu "chưa xác nhận, không dùng" các mục thiết bị, phòng mổ, máy móc, camera, "trục vành đai 3", và kế hoạch lấy ảnh từ Facebook/Google Maps; chỉ giữ thông tin chủ dự án đã cung cấp (xem [`thong-tin-lien-he.md`](thong-tin-lien-he.md)) | Tài liệu không còn khẳng định nào chủ dự án chưa xác nhận |
| 9 | **Hero**: kiểm và sửa nếu còn: khóa đúng phần Hero khi mở menu (`id="hero-main"`); menu trong chế độ xem thử "Mobile (390px)" nằm trong khung điện thoại | Mở menu bằng bàn phím: phần Hero phía sau có `inert`; ở chế độ Mobile (390px) menu nằm trong khung |

## 3. Không sửa trong đợt này

Mô tả ảnh "bác sĩ"; nguồn bản quyền ảnh tạm (vẫn ghi "ảnh minh họa tạm, không dùng công khai"); ảnh Cấp cứu cắt đầu; Google Fonts; liên kết chưa có trang; chữ giữ chỗ; `server.js` và công cụ xem thử.

## 4. Báo cáo lại

Antigravity ghi commit mới và một bảng ngắn: mục 1–9, "đã làm / chưa làm". Không kèm báo cáo dài hay tự đánh giá nhiều vòng. Claude (Sonnet) kiểm lại đúng các mục này.
