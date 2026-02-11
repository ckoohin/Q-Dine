---
phase: requirements
title: Requirements & Problem Understanding - JWT Authentication & Authorization
description: Clarify the problem space, gather requirements, and define success criteria for JWT Auth
---

# Yêu cầu & Thấu hiểu Vấn đề

## Tuyên bố Vấn đề

**Chúng ta đang giải quyết vấn đề gì?**

- Hệ thống Q-Dine hiện tại chưa có cơ chế xác thực và phân quyền chính thức.
- Cần bảo mật các API quan trọng (quản lý món ăn, quản lý đơn hàng).
- Cần phân biệt quyền hạn giữa các nhóm người dùng: Nhân viên (Staff) và Quản trị viên (Admin).
- Khách hàng cần trải nghiệm gọi món nhanh chóng qua QR mà không bắt buộc đăng nhập, nhưng nhân viên và admin cần đăng nhập để quản lý.

## Mục tiêu & Đối tượng

**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính:** Triển khai hệ thống xác thực dựa trên JWT (JSON Web Token) để quản lý phiên làm việc và bảo mật API.
- **Mục tiêu phụ:** Thiết lập hệ thống phân quyền dựa trên vai trò (RBAC) cho Nhân viên và Admin.
- **Mục tiêu loại trừ:** Giai đoạn này chưa bao gồm đăng nhập bằng mạng xã hội (Google, Facebook) hoặc xác thực 2 lớp (2FA).

## Câu chuyện Người dùng & Các trường hợp Sử dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- **Với tư cách là Khách hàng:** Tôi muốn quét mã QR do nhân viên cung cấp tại bàn để xem menu và chọn món. Phiên làm việc của tôi gắn liền với mã QR này và sẽ kết thúc khi tôi yêu cầu thanh toán (nhân viên tạo mã QR thanh toán).
- **Với tư cách là Nhân viên:** Tôi muốn đăng nhập vào hệ thống để chọn bàn cho khách, tạo mã QR gọi món cho bàn đó, và cuối cùng tạo mã QR thanh toán để kết thúc phiên của khách.
- **Với tư cách là Quản trị viên:** Tôi muốn đăng nhập để có toàn quyền thêm, sửa, xóa các món ăn và cập nhật trạng thái (còn hàng/hết hàng) của món ăn.

## Tiêu chí Thành công

**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Người dùng (Staff/Admin) có thể đăng nhập bằng tài khoản/mật khẩu và nhận được mã JWT hợp lệ.
- Hệ thống có khả năng tạo mã QR chứa dấu ấn (token/identifier) định danh phiên làm việc cho bàn của khách.
- Các API quản lý món ăn chỉ có thể truy cập bởi người dùng có quyền Admin.
- Các API quản lý đơn hàng/bàn có thể truy cập bởi cả Staff và Admin.
- Token JWT có thời hạn hết hạn và có cơ chế refresh token cho Nhân viên/Admin.

## Ràng buộc & Giả định

**Chúng ta cần làm việc trong giới hạn nào?**

- **Ràng buộc kỹ thuật:** Sử dụng NestJS cùng với Passport.js và @nestjs/jwt.
- **Giả định:** Phiên gọi món của khách được xác thực dựa trên một mã định danh duy nhất gắn với bàn đang hoạt động, kết thúc khi có hóa đơn thanh toán.
- **Giả định:** Thông tin người dùng (tài khoản, mật khẩu băm, vai trò) đã được lưu trữ trong cơ sở dữ liệu.

## Câu hỏi & Các mục còn bỏ ngỏ

**Chúng ta vẫn cần làm rõ điều gì?**

- Mã QR gọi món sẽ chứa JWT ngắn hạn (Guest JWT) hay một mã định danh ngẫu nhiên (Session ID)?
- Thời gian hết hạn của Access Token và Refresh Token cho Nhân viên là bao lâu?
- Có cần cơ chế khóa tài khoản khi nhập sai mật khẩu nhiều lần không?
