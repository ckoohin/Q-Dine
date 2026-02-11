---
phase: testing
title: Testing Strategy - User Management
description: Define testing approach, test cases, and quality assurance for User Management
---

# Chiến lược Kiểm thử

## Kiểm thử Đơn vị (Unit Tests)

- [ ] `UsersService.create`: Xác minh mật khẩu được băm.
- [ ] `UsersService.changePassword`: Kiểm tra logic so sánh mật khẩu cũ.

## Kiểm thử Tích hợp (Integration Tests)

- [ ] Admin tạo Staff thành công.
- [ ] Staff cố gắng truy cập API danh sách người dùng (Mong đợi: 403 Forbidden).
- [ ] Khóa tài khoản -> User không thể đăng nhập được nữa.

## Dữ liệu Kiểm thử

- Tạo 1 Admin mặc định thông qua SQL script hoặc Seeder.
