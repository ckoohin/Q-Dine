---
phase: requirements
title: Requirements & Problem Understanding - Table QR Management
description: Clarify the problem space, gather requirements, and define success criteria for Table QR
---

# Yêu cầu & Thấu hiểu Vấn đề

## Tuyên bố Vấn đề

**Chúng ta đang giải quyết vấn đề gì?**

- Quy trình gọi món truyền thống phụ thuộc vào việc nhân viên có mặt tại bàn, gây chậm trễ và sai sót khi ghi chép thủ công.
- Khó quản lý trạng thái thực tế của bàn (Trống, Đang sử dụng) một cách tức thời.
- Khách hàng muốn chủ động xem menu và gọi món mà không cần đợi nhân viên.

## Mục tiêu & Đối tượng

**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính:** Xây dựng hệ thống quản lý bàn qua mã QR, cho phép nhân viên "Mở bàn" sinh mã QR và "Đóng bàn" (Thanh toán) vô hiệu hóa mã QR.
- **Mục tiêu phụ:** Quản lý trạng thái bàn trực quan; hiển thị thời gian chờ ước tính cho khách hàng.
- **Mục tiêu loại trừ:** Giai đoạn này chưa bao gồm việc thanh toán online trực tiếp trên app (chỉ tạo mã QR thanh toán để nhân viên xác nhận).

## Câu chuyện Người dùng & Các trường hợp Sử dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- **Với tư cách là Nhân viên:** Tôi muốn chọn số bàn và nhấn 'Mở bàn' để hệ thống sinh ra một mã QR duy nhất cho khách đó, đồng thời trạng thái bàn trên dashboard được cập nhật.
- **Với tư cách là Nhân viên:** Tôi muốn nhận được thông báo ngay lập tức khi khách tại bàn đặt món để kịp thời xử lý.
- **Với tư cách là Nhân viên:** Tôi muốn khi nhấn 'Thanh toán', mã QR cũ sẽ bị vô hiệu hóa ngay lập tức để đảm bảo khách sau không gọi món vào hóa đơn của người trước.
- **Với tư cách là Khách hàng:** Tôi muốn quét mã QR tại bàn để truy cập trực tiếp vào menu, tự chủ động gọi món và xem được thời gian chờ món ăn ước tính.

## Tiêu chí Thành công

**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Nhân viên có thể tạo/vô hiệu hóa mã QR cho từng bàn.
- Khách hàng quét QR truy cập đúng menu của bàn đó (Session được duy trì nếu khách tải lại trang).
- Trạng thái bàn được cập nhật chính xác trên giao diện quản lý (Trống/Đang dùng) thời gian thực.
- Thông báo đặt món được gửi đến nhân viên ngay khi khách xác nhận order.
- Hiển thị thời gian chờ dựa trên số lượng đơn hàng đang xử lý.

## Ràng buộc & Giả định

**Chúng ta cần làm việc trong giới hạn nào?**

- **Ràng buộc kỹ thuật:** Sử dụng thư viện sinh mã QR (ví dụ `qrcode` trong Node.js/Javascript).
- **Ràng buộc kỳ thuật:** Sử dụng Websockets (có thể là Socket.io) để đảm bảo thông báo thời gian thực giữa Khách và Nhân viên.
- **Giả định:** Mỗi bàn có một mã định danh cố định, nhưng mã QR sinh ra cho mỗi khách là duy nhất (chứa session token).

## Câu hỏi & Các mục còn bỏ ngỏ

**Chúng ta vẫn cần làm rõ điều gì?**

- **Thuật toán tính thời gian chờ ước tính:** Sẽ dựa trên số lượng món đang đợi hay số đơn hàng (bill) đang đợi?
- **Thông báo cho Nhân viên:** Hiển thị dưới dạng âm thanh báo động, popup trên màn hình hay gửi tới app di động?
- **Vấn đề In ấn:** Mã QR sẽ được hiển thị trên máy nhân viên hay hỗ trợ in ra giấy nhiệt tại bàn?
- **Duy trì phiên:** Nếu khách đổi sang điện thoại khác (cùng bàn), hệ thống có gom chung vào một session không?
