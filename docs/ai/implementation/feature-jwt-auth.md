---
phase: implementation
title: Implementation Guide - JWT Authentication & Authorization
description: Technical implementation notes, patterns, and code guidelines for JWT Auth
---

# Hướng dẫn Triển khai

## Thiết lập Phát triển

**Chúng ta bắt đầu như thế nào?**

- Cài đặt các thư viện cần thiết:
  - `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `passport-local`
  - `bcrypt`, `@types/bcrypt`, `@types/passport-jwt`, `@types/passport-local`

## Cấu trúc Mã nguồn

**Mã nguồn được tổ chức như thế nào?**

- `src/modules/auth/`: Chứa `auth.module.ts`, `auth.service.ts`, `auth.controller.ts`.
- `src/modules/auth/strategies/`: Chứa các Passport strategies.
- `src/modules/auth/guards/`: Chứa các Auth guards.
- `src/modules/auth/decorators/`: Chứa các custom decorators (ví dụ: `@Roles`).

## Ghi chú Triển khai

**Các chi tiết kỹ thuật chính cần lưu ý:**

### Các tính năng cốt lõi

- **Băm mật khẩu:** Sử dụng `bcrypt.hash(password, saltOrRounds)` với số rounds tối thiểu là 10.
- **JWT Payload:** Nên chứa `sub` (user id), `username`, và `role`. Tránh đưa các thông tin nhạy cảm vào payload.

### Các mẫu & Thực hành tốt nhất

- Sử dụng **Guards** ở cấp Controller hoặc Method để tường minh về việc bảo mật.
- Tách biệt `AuthService` (xử lý token) và `UsersService` (xử lý dữ liệu database).

## Xử lý Lỗi

**Chúng ta xử lý các thất bại như thế nào?**

- Trả về `UnauthorizedException` (401) khi đăng nhập sai hoặc token không hợp lệ.
- Trả về `ForbiddenException` (403) khi người dùng không đủ quyền hạn (Roles).

## Ghi chú Bảo mật

**Các biện pháp bảo mật nào đang được áp dụng?**

- **JWT Secret:** Phải dài và phức tạp.
- **HTTPS:** Bắt buộc sử dụng HTTPS trong môi trường production để bảo vệ token trên đường truyền.
- **Role Validation:** Kiểm tra quyền ở phía Backend, không tin tưởng vào thông tin từ Frontend gửi lên (ngoại trừ token đã được xác thực).
