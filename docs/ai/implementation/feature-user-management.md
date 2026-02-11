---
phase: implementation
title: Implementation Guide - User Management
description: Technical implementation notes, patterns, and code guidelines for User Management
---

# Hướng dẫn Triển khai

## Thiết lập Phát triển

- Cài đặt `bcrypt` và `@types/bcrypt`.

## Ghi chú Triển khai

### Xử lý mật khẩu

- Luôn sử dụng `bcrypt.hash()` trước khi lưu vào DB.
- Khi cập nhật người dùng, nếu trường mật khẩu bị trống thì không thực hiện băm hoặc cập nhật trường đó.

### Bảo mật API

- Sử dụng `@UseGuards(JwtAuthGuard, RolesGuard)` và Decorator `@Roles(UserRole.ADMIN)`.

### Xử lý Lỗi

- `ConflictException`: Nếu username đã tồn tại.
- `ForbiddenException`: Nếu user cố gắng sửa thông tin của người khác mà không có quyền Admin.
