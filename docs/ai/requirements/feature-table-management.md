---
phase: requirements
title: Requirements & Problem Understanding - Table Management
description: Clarify the problem space, gather requirements, and define success criteria for Table CRUD
---

# Yêu cầu & Thấu hiểu Vấn đề

## Tuyên bố Vấn đề

**Chúng ta đang giải quyết vấn đề gì?**

- Quản trị viên cần một công cụ chính thức để quản lý danh sách bàn ăn trong nhà hàng.
- Khi nhà hàng mở rộng hoặc thu hẹp quy mô, việc thêm/xóa bàn cần được thực hiện trên hệ thống để đồng bộ với ứng dụng gọi món.
- Cần theo dõi trạng thái thực tế của bàn để điều phối nhân viên và khách hàng hiệu quả.

## Mục tiêu & Đối tượng

**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính:** Xây dựng tính năng CRUD (Thêm, Xem, Sửa, Xóa) cho thực thể Bàn (Table).
- **Mục tiêu phụ:** Gắn kèm thông tin số lượng chỗ ngồi (capacity) cho từng bàn để hỗ trợ nghiệp vụ xếp chỗ.
- **Mục tiêu loại trừ:** Giai đoạn này chưa bao gồm sơ đồ mặt bằng (floor plan) trực quan dạng kéo thả.

## Câu chuyện Người dùng & Các trường hợp Sử dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- **Với tư cách là Admin:** Tôi muốn thêm một bàn mới vào hệ thống với số bàn (Unique identifier) và số lượng chỗ ngồi cụ thể. Trạng thái mặc định khi tạo mới là `AVAILABLE`.
- **Với tư cách là Admin & Nhân viên:** Tôi muốn xem danh sách tất cả các bàn kèm theo trạng thái hiện tại của chúng (Trống/Đang dùng) để phục vụ việc điều phối và đón khách.
- **Với tư cách là Admin:** Tôi muốn chỉnh sửa thông tin bàn hoặc xóa bàn khỏi hệ thống. Hệ thống phải ngăn chặn việc xóa nếu bàn đang trong trạng thái `OCCUPIED`.

## Tiêu chí Thành công

**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Admin thực hiện thành công CRUD bàn; Nhân viên có thể xem danh sách nhưng không hể Thêm/Sửa/Xóa.
- Quy tắc Unique trên `tableNumber` hoạt động chính xác.
- Logic kiểm tra tính toàn vẹn khi xóa bàn (không cho xóa bàn đang có khách).
- Các thay đổi về bàn được phản ánh chính xác trên các module khác (như QR Management).
  ## Ràng buộc & Giả định

**Chúng ta cần làm việc trong giới hạn nào?**

- **Ràng buộc kỹ thuật:** Sử dụng NestJS, TypeORM và Validation Pipe để kiểm tra định dạng `tableNumber` (chỉ cho phép chữ và số).
- **Giả định:** Số bàn (table number) là duy nhất. Một bàn chỉ có thể xóa khi ở trạng thái `AVAILABLE`.

## Câu hỏi & Các mục còn bỏ ngỏ

**Chúng ta vẫn cần làm rõ điều gì?**

- Định dạng `tableNumber` có cần theo một quy chuẩn chung không (ví dụ: T[Tầng]\_SốBàn)?
- Có nên hỗ trợ thêm bàn hàng loạt (bulk create) để tiết kiệm thời gian thiết lập ban đầu không?
- Bàn có cần thuộc về các khu vực khác nhau (Tầng 1, Tầng 2, Sân vườn) không?
