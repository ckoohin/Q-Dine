---
phase: requirements
title: Requirements & Problem Understanding - Table Management
description: Clarify the problem space, gather requirements, and define success criteria for Table Management
---

# Yêu cầu & Thấu hiểu Vấn đề - Quản lý Bàn

## Tuyên bố Vấn đề
**Chúng ta đang giải quyết vấn đề gì?**

- Quản lý danh sách và trạng thái bàn ăn trong nhà hàng.
- Theo dõi trạng thái thời gian thực: AVAILABLE (Trống), RESERVED (Đã đặt), OCCUPIED (Đang có khách), CLEANING (Đang dọn).
- Quản lý thông tin bàn: Số chỗ ngồi, Ghi chú (món ăn, yêu cầu đặc biệt).
- Cần giao diện trực quan cho nhân viên và quản lý để thao tác nhanh chóng.

## Mục tiêu & Đối tượng
**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính**: Xây dựng hệ thống CRUD bàn và quản lý trạng thái bàn hiệu quả.
- **Mục tiêu phụ**: Tối ưu hóa quy trình xếp bàn của nhân viên.
- **Mục tiêu loại trừ (Non-goals)**:
    - Chưa hỗ trợ sơ đồ bàn dạng bản đồ (Map/Layout Drag & Drop) trong giai đoạn đầu (MVP).
    - Chưa tích hợp module Đặt bàn (Reservation) phức tạp (chỉ có trạng thái RESERVED đơn giản).
- **Đối tượng sử dụng**:
    - Quản lý (Manager)
    - Admin
    - Nhân viên (Staff/Waiter)

## Câu chuyện Người dùng & Các trường hợp Sử dụng
**Người dùng sẽ tương tác với giải pháp như thế nào?**

- **Nhân viên (Staff)**:
    - Là nhân viên, tôi muốn xem danh sách bàn và trạng thái hiện tại (trống, có khách...) để sắp xếp chỗ ngồi.
    - Là nhân viên, tôi muốn chuyển bàn cho khách khi khách yêu cầu đổi chỗ.
    - Là nhân viên, tôi muốn tìm bàn trống phù hợp với số lượng khách (ví dụ: bàn 4 người, bàn 8 người).
    - Là nhân viên, tôi muốn thêm ghi chú cho bàn (ví dụ: khách dị ứng, cần ghế trẻ em) để phục vụ tốt hơn.
    - Là nhân viên, tôi muốn cập nhật trạng thái bàn (từ Trống -> Có khách -> Đang dọn -> Trống).

- **Quản lý/Admin**:
    - Là quản lý/admin, tôi muốn thêm, sửa, xóa bàn trong hệ thống (CRUD).
    - Là quản lý/admin, tôi muốn thiết lập số chỗ ngồi cho từng bàn.
    - Là quản lý/admin, tôi muốn có cái nhìn tổng quan về tình hình hoạt động của nhà hàng qua trạng thái bàn.

## Tiêu chí Thành công
**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Hệ thống cho phép thêm/sửa/xóa bàn với đầy đủ thông tin (Tên/Số bàn, Sức chứa, Trạng thái, Ghi chú).
- Trạng thái bàn chuyển đổi chính xác theo luồng hoạt động (Available -> Occupied -> Cleaning -> Available).
- Tìm kiếm/Lọc bàn theo trạng thái và sức chứa hoạt động chính xác.
- Ghi chú được lưu và hiển thị rõ ràng.

## Ràng buộc & Giảm định
**Chúng ta cần làm việc trong giới hạn nào?**

- **Ràng buộc kỹ thuật**: 
    - Sử dụng Tech Stack hiện tại của dự án (Next.js/React, Database hiện có).
    - Đảm bảo tính real-time (hoặc cập nhật nhanh) trạng thái bàn nếu có thể (cần xem xét).
- **Giả định**:
    - Một bàn chỉ có một trạng thái tại một thời điểm.

## Câu hỏi & Các mục còn bỏ ngỏ
**Chúng ta vẫn cần làm rõ điều gì?**

- Có cần sơ đồ bàn dạng kéo thả (Drag & Drop Layout) không hay chỉ là danh sách/lưới (Grid)? (Tạm thời giả định là danh sách/lưới trước).
- Logic "Đặt bàn" (Reservation) có liên kết chặt chẽ với module Booking không? (Tạm thời xử lý trạng thái RESERVED như một cờ trạng thái).
