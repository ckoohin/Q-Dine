---
phase: planning
title: Project Planning & Task Breakdown - JWT Authentication & Authorization
description: Break down work into actionable tasks and estimate timeline for JWT Auth
---

# Lập Kế hoạch Dự án & Phân chia Công việc

## Các Cột mốc (Milestones)

**Các điểm kiểm soát chính là gì?**

- [ ] Cột mốc 1: Hoàn thành cơ chế Đăng nhập và cấp Token.
- [ ] Cột mốc 2: Triển khai Guards bảo mật cho các tài nguyên (Resources).
- [ ] Cột mốc 3: Hoàn thiện phân quyền Role-based Access Control (RBAC).

## Phân chia Công việc

**Những công việc cụ thể nào cần được thực hiện?**

### Giai đoạn 1: Nền tảng

- [ ] Nhiệm vụ 1.1: Cấu hình `JwtModule` và `PassportModule` trong NestJS.
- [ ] Nhiệm vụ 1.2: Tạo Entity `User` (nếu chưa có) và các trường cần thiết (username, password, role).
- [ ] Nhiệm vụ 1.3: Triển khai dịch vụ băm mật khẩu bằng `bcrypt`.

### Giai đoạn 2: Tính năng cốt lõi

- [ ] Nhiệm vụ 2.1: Xây dựng `AuthService.validateUser` để kiểm tra thông tin đăng nhập.
- [ ] Nhiệm vụ 2.2: Triển khai `AuthService.login` để tạo JWT.
- [ ] Nhiệm vụ 2.3: Tạo `LocalStrategy` và `JwtStrategy`.

### Giai đoạn 3: Phân quyền & Bảo mật

- [ ] Nhiệm vụ 3.1: Tạo `JwtAuthGuard` để bảo vệ các route.
- [ ] Nhiệm vụ 3.2: Tạo `RolesGuard` và Decorator `@Roles()` để kiểm soát quyền Admin/Staff.
- [ ] Nhiệm vụ 3.3: Áp dụng Guard vào các API quản lý món ăn (chỉ Admin) và đơn hàng.

## Phụ thuộc

**Những việc gì cần xảy ra theo thứ tự nào?**

- Phải có Entity `User` trước khi làm logic xác thực.
- Phải hoàn thành `JwtStrategy` trước khi có thể áp dụng `AuthGuard`.

## Tiến độ & Ước tính

**Khi nào công việc sẽ hoàn thành?**

- Giai đoạn 1: 0.5 ngày.
- Giai đoạn 2: 1 ngày.
- Giai đoạn 3: 0.5 ngày.
- Tổng cộng: ~2 ngày làm việc.

## Rủi ro & Giảm thiểu

**Điều gì có thể xảy ra sai sót?**

- **Rủi ro:** Lộ Secret Key của JWT.
- **Giảm thiểu:** Lưu Secret Key trong biến môi trường (.env) và không push lên git.
