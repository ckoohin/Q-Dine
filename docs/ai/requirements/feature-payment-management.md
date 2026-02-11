---
phase: requirements
title: Requirements & Problem Understanding - Payment Management
description: Clarify the problem space, gather requirements, and define success criteria for Payment and Checkout
---

# Yêu cầu & Thấu hiểu Vấn đề

## Tuyên bố Vấn đề

**Chúng ta đang giải quyết vấn đề gì?**

- Cần một quy trình thanh toán chính xác, minh bạch giữa khách hàng và nhà hàng.
- Quy trình thanh toán cần linh hoạt: có thể thanh toán cho một bàn, hoặc một bàn thanh toán hộ cho các bàn khác (gộp hóa đơn).
- Nhân viên cần bước xác nhận cuối cùng để đảm bảo đơn hàng khớp với thực tế trước khi giải phóng bàn và vô hiệu hóa mã QR gọi món.

## Mục tiêu & Đối tượng

**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính:** Triển khai hệ thống quản lý thanh toán, cho phép tính tổng tiền, gộp bàn và xác nhận thanh toán.
- **Mục tiêu phụ:** Sinh mã QR chuyển khoản ngân hàng (VietQR/VietinBank/v.v.) dựa trên tổng tiền; In hóa đơn điện tử/giấy.
- **Mục tiêu loại trừ:** Thanh toán tự động qua cổng (Payment Gateway) như MoMo/ZaloPay (chỉ dừng ở mức xác nhận thủ công từ nhân viên sau khi khách chuyển khoản/trả tiền mặt).

## Câu chuyện Người dùng & Các trường hợp Sử dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- **Với tư cách là Khách hàng:** Tôi muốn xem chi tiết danh sách món ăn đã gọi và tổng số tiền cần thanh toán ngay trên điện thoại của mình.
- **Với tư cách là Khách hàng:** Tôi muốn thấy mã QR chuyển khoản ngân hàng kèm nội dung chuyển khoản được gen tự động để thanh toán nhanh chóng.
- **Với tư cách là Nhân viên:** Tôi muốn chọn một hoặc nhiều bàn để gộp hóa đơn nếu khách có nhu cầu thanh toán hộ bàn khác.
- **Với tư cách là Nhân viên:** Tôi muốn kiểm tra lại danh sách món ăn đã order, xác nhận số tiền với khách, nhấn 'Xác nhận thanh toán' để đóng phiên bàn và hệ thống tự động sinh hóa đơn.
- **Với tư cách là Admin:** Tôi muốn xem báo cáo doanh thu chi tiết từ các hóa đơn đã thanh toán để quản lý tình hình kinh doanh.

## Tiêu chí Thành công

**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Tổng tiền được tính chính xác (bao gồm món ăn, số lượng và giảm giá nếu có).
- Chức năng gộp bàn hoạt động đúng logic (phiên của tất cả các bàn liên quan đều kết thúc).
- Mã QR gọi món của các bàn đã thanh toán bị vô hiệu hóa ngay lập tức.
- Admin xem được báo cáo doanh thu theo thời gian.

## Ràng buộc & Giả định

**Chúng ta cần làm việc trong giới hạn nào?**

- **Ràng buộc kỹ thuật:** Sử dụng API của bên thứ ba để sinh VietQR (ví dụ VietQR.io) nếu cần.
- **Giả định:** Nhân viên là người chịu trách nhiệm cuối cùng cho việc xác nhận tiền đã vào tài khoản/nhận tiền mặt.

## Câu hỏi & Các mục còn bỏ ngỏ

**Chúng ta vẫn cần làm rõ điều gì?**

- Khi gộp bàn thanh toán, thông tin hóa đơn sẽ lưu theo bàn chính hay lưu cả danh sách các bàn?
- Có cần hỗ trợ tách hóa đơn (Split bill) trong cùng một bàn không?
- Định dạng hóa đơn in ra như thế nào (HTML template cho máy in nhiệt)?
