---
phase: requirements
title: Requirements & Problem Understanding - User Management
description: Clarify the problem space, gather requirements, and define success criteria for User/Staff management
---

# Yêu cầu & Thấu hiểu Vấn đề

## Tuyên bố Vấn đề

**Chúng ta đang giải quyết vấn đề gì?**

- Hệ thống cần một cơ chế chính thức để quản lý danh sách nhân viên và quản trị viên.
- Việc tạo tài khoản cần được kiểm soát bởi Admin để đảm bảo chỉ những người có trách nhiệm mới được truy cập hệ thống quản lý.
- Cần có khả năng thu hồi quyền truy cập ngay lập tức khi nhân viên nghỉ việc hoặc thay đổi vai trò.
- Người dùng cần có khả năng tự quản lý thông tin cá nhân và mật khẩu của mình.

## Mục tiêu & Đối tượng

**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính:** Xây dựng tính năng quản lý tài khoản người dùng (CRUD) dành riêng cho Quản trị viên.
- **Mục tiêu phụ:** Triển khai chức năng khóa/mở khóa tài khoản (Active/Inactive) và tự cập nhật hồ sơ (Profile update).
- **Mục tiêu loại trừ:** Giai đoạn này chưa bao gồm việc phân quyền chi tiết đến từng hành động đơn lẻ (Fine-grained permissions), chỉ sử dụng Role-based Access Control (RBAC) cơ bản.

## Câu chuyện Người dùng & Các trường hợp Sử dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- **Với tư cách là Admin:** Tôi muốn tạo tài khoản cho nhân viên mới với các thông tin: tên đăng nhập, mật khẩu, họ tên và vai trò (Staff/Admin) để họ có thể bắt đầu làm việc.
- **Với tư cách là Admin:** Tôi muốn xem danh sách tất cả nhân viên kèm theo trạng thái tài khoản của họ để dễ dàng quản lý nhân sự.
- **Với tư cách là Admin:** Tôi muốn có khả năng thu hồi quyền truy cập (khóa tài khoản) khi một nhân viên nghỉ việc để đảm bảo an toàn hệ thống.
- **Với tư cách là Người dùng (Staff/Admin):** Tôi muốn có thể tự cập nhật thông tin cá nhân (họ tên) hoặc đổi mật khẩu sau khi đăng nhập để bảo mật tài khoản cá nhân.

## Tiêu chí Thành công

**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Admin có thể tạo, liệt kê, chỉnh sửa và thay đổi trạng thái tài khoản người dùng.
- Người dùng không có quyền Admin không thể xem hoặc sửa tài khoản của người khác.
- Chức năng đổi mật khẩu hoạt động chính xác và yêu cầu mật khẩu cũ (để bảo mật).
- Dữ liệu mật khẩu được mã hóa an toàn trong cơ sở dữ liệu.

## Ràng buộc & Giả định

**Chúng ta cần làm việc trong giới hạn nào?**

- **Ràng buộc kỹ thuật:** Sử dụng `bcrypt` để băm mật khẩu. Tên đăng nhập (username) phải là duy nhất.
- **Giả định:** Tài khoản Admin đầu tiên sẽ được khởi tạo thông qua script hoặc seed dữ liệu.

## Câu hỏi & Các mục còn bỏ ngỏ

**Chúng ta vẫn cần làm rõ điều gì?**

- Có cần ghi lại nhật ký (Audit log) mỗi khi Admin thay đổi thông tin hoặc khóa tài khoản nhân viên không?
- Có cần cơ chế gửi email thông báo khi tài khoản được tạo hoặc mật khẩu được đổi không?
