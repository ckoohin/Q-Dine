---
phase: planning
title: Project Planning & Task Breakdown - User Management
description: Break down work into actionable tasks and estimate timeline for User Management
---

# Lập Kế hoạch Dự án & Phân chia Công việc

## Các Cột mốc (Milestones)

**Các điểm kiểm soát chính là gì?**

- [ ] Cột mốc 1: Hoàn thiện User Entity và Migration cơ bản.
- [ ] Cột mốc 2: Triển khai bộ API CRUD dành cho Admin.
- [ ] Cột mốc 3: Triển khai API Profile và đổi mật khẩu cho người dùng.

## Phân chia Công việc

**Những công việc cụ thể nào cần được thực hiện?**

### Giai đoạn 1: Backend Foundation

- [ ] Nhiệm vụ 1.1: Cập nhật `UserEntity` với các trường `fullName`, `role`, `isActive`.
- [ ] Nhiệm vụ 1.2: Tạo `UsersService.create` tích hợp băm mật khẩu bcrypt.

### Giai đoạn 2: Admin Features

- [ ] Nhiệm vụ 2.1: API lấy danh sách người dùng kèm phân trang (Pagination).
- [ ] Nhiệm vụ 2.2: API cập nhật thông tin và trạng thái khóa tài khoản.

### Giai đoạn 3: Personal Features

- [ ] Nhiệm vụ 3.1: API `GET /users/me` sử dụng JWT để nhận biết người dùng hiện tại.
- [ ] Nhiệm vụ 3.2: API đổi mật khẩu (yêu cầu verify mật khẩu cũ).

## Phụ thuộc

- Phụ thuộc vào `AuthModule` để xác thực người dùng qua JWT.

## Tiến độ & Ước tính

- Tổng thời gian: 1.5 ngày làm việc.
