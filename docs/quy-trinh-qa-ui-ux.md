# Quy trình kiểm tra UI/UX (QA) từ Services V1

**Người soạn:** Claude · **Nguồn:** quyết định phân công của chủ dự án ngày 14/10/2026 (tối ưu hạn mức Antigravity). Áp dụng từ **Services V1** và các trang tiếp theo. Hero/Header V1 đang rà soát dở theo [yêu cầu sửa lần 2](yeu-cau-sua-hero-v1-lan-2-antigravity.md); Claude coi đó là đợt phản hồi đã gom, Antigravity không cần tự kiểm tra thêm.

## 1. Phân công

| Bên | Việc | Không làm |
|---|---|---|
| **Antigravity** | Thiết kế UI/UX, responsive, animation, demo; kiểm tra cơ bản để demo chạy được; sửa theo phản hồi đã tổng hợp và đã được chủ dự án duyệt | Kiểm thử chuyên sâu, báo cáo dài, tự đánh giá nhiều vòng, tự sửa từng lỗi nhỏ lẻ, tự đổi thiết kế đã duyệt |
| **Claude (QA chính)** | Rà soát bản bàn giao: nhất quán với Hero/Header đã duyệt; chất lượng UI/UX và bố cục; responsive desktop/mobile; accessibility (tương phản, vùng bấm, bàn phím); nội dung, nghiệp vụ, thông tin chưa xác nhận; tương tác, điều hướng, lỗi logic; đọc mã frontend nếu truy cập được. Gom lỗi thành **một đợt** phản hồi | Phê duyệt thay chủ dự án; sửa mã của Antigravity |
| **Codex (QA kỹ thuật dự phòng)** | Chỉ nhận danh sách `NEED CODEX` từ Claude: kiểm thử tự động, browser/runtime, responsive bằng công cụ, lỗi JS/CSS, accessibility bằng công cụ. Trả kết quả về Claude | Kiểm tra trùng việc Claude đã xác minh |
| **Chủ dự án** | Duyệt danh sách phản hồi tổng hợp trước khi Antigravity sửa; duyệt giao diện | |

## 2. Phân loại kết quả

Mỗi mục kiểm tra có đúng một nhãn:

- **PASS:** đạt, có bằng chứng.
- **FIX:** có lỗi cần sửa; ghi rõ mức ưu tiên (Cao, Trung bình, Thấp) và tiêu chí "Đạt khi" đo được.
- **NEED CODEX:** Claude không đủ khả năng hoặc công cụ để kết luận; ghi cụ thể cần kiểm gì, ở đâu, đạt khi nào.

Nhận xét thẩm mỹ chủ quan **tách riêng** khỏi lỗi đã xác minh, ghi là "ý kiến", không đưa vào danh sách FIX bắt buộc.

## 3. Quy trình

1. Antigravity bàn giao (nhánh, commit, kiểm tra cơ bản demo chạy được).
2. Claude QA, ra báo cáo PASS / FIX / NEED CODEX.
3. Nếu có NEED CODEX: Claude gửi danh sách cụ thể cho Codex; Codex trả kết quả; Claude tổng hợp.
4. Claude gửi chủ dự án **một báo cáo tổng hợp** kèm danh sách sửa đề xuất.
5. Chủ dự án duyệt danh sách.
6. Antigravity sửa **đúng danh sách đã duyệt**, một đợt.
7. Claude kiểm tra lại chỉ các mục FIX (và mục bị ảnh hưởng); Antigravity không được yêu cầu kiểm tra lại điều Claude đã xác minh.

## 4. Quy tắc tiết kiệm hạn mức

- Không để nhiều AI kiểm tra trùng; Claude kiểm tra được thì không chuyển Codex.
- Không yêu cầu Antigravity tự đánh giá nhiều vòng hoặc viết báo cáo dài.
- Gom lỗi một đợt, không sửa từng lỗi nhỏ riêng lẻ.
- Phân biệt lỗi đã xác minh với nhận xét thẩm mỹ.

## 4a. Chọn model cho Claude QA (chủ dự án quyết định 14/10)

- **Lượt kiểm đầu** của mỗi trang mới (bắt đầu với Services V1): dùng **Opus** để tìm lỗi chưa ai nghĩ tới (logic, id sai giữa các tệp, bàn phím, trình đọc màn hình, nghiệp vụ).
- **Các lượt rà soát sau** (kiểm lại danh sách FIX): dùng **Sonnet**, kiểm đúng các mục "Đạt khi".
- Mỗi báo cáo ghi rõ **phạm vi đã kiểm và phần chưa kiểm**, để kết luận "PASS" không bị hiểu rộng hơn thực tế.

## 5. Giới hạn bắt buộc

Không tự thay đổi thiết kế đã phê duyệt; không merge main; không deploy production khi chưa được chủ dự án cho phép.

## 6. Việc Claude thường kiểm tra được và việc thường cần Codex [Đề xuất]

| Claude tự kiểm (trên máy rà soát: Chromium + Playwright, đọc mã) | Thường chuyển Codex |
|---|---|
| Đo bố cục, tràn ngang, chồng lấn, vùng bấm, thứ tự Tab, Escape, `aria-*`, tương phản (tính theo WCAG), nội dung chưa xác nhận, liên kết chết | Chạy axe hoặc Lighthouse trên nhiều trang; kiểm thử tự động lặp lại; Safari và thiết bị thật; hiệu năng trên mạng chậm; kiểm tra bản build Next.js; công cụ mà môi trường Claude không truy cập được (ví dụ mạng ngoài) |

Claude sẽ ghi rõ ở từng báo cáo mục nào đã tự đo và mục nào thuộc NEED CODEX, không đoán.
