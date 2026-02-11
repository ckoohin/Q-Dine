---
phase: planning
title: Project Planning & Task Breakdown - Table Management
description: Break down work into actionable tasks and estimate timeline for Table CRUD
---

# Lập Kế hoạch Dự án & Phân chia Công việc

## Các Cột mốc (Milestones)

**Các điểm kiểm soát chính là gì?**

- [ ] Cột mốc 1: Hoàn thành Database Schema và Entity.
- [ ] Cột mốc 2: Hoàn thành bộ API CRUD cơ bản.
- [ ] Cột mốc 3: Tích hợp bảo mật (Admin Role) và kiểm tra toàn vẹn dữ liệu.

## Phân chia Công việc

**Những công việc cụ thể nào cần được thực hiện?**

### Giai đoạn 1: Nền tảng

- [ ] Nhiệm vụ 1.1: Tạo `TableEntity` và chạy migration cơ sở dữ liệu.
- [ ] Nhiệm vụ 1.2: Khởi tạo `TableModule`, `TableService`, `TableController`.

### Giai đoạn 2: Phát triển API

- [ ] Nhiệm vụ 2.1: Triển khai API lấy danh sách và chi tiết bàn.
- [ ] Nhiệm vụ 2.2: Triển khai API thêm mới và chỉnh sửa bàn kèm Validation.
- [ ] Nhiệm vụ 2.3: Triển khai API xóa bàn kèm logic kiểm tra bàn trống.

### Giai đoạn 3: Hoàn thiện

- [ ] Nhiệm vụ 3.1: Áp dụng `JwtAuthGuard` và `RolesGuard` cho các endpoint.
- [ ] Nhiệm vụ 3.2: Viết Unit Test cho `TableService`.

## Phụ thuộc

- Phụ thuộc vào `AuthModule` (JWT và Roles) để bảo vệ các API.

## Tiến độ & Ước tính

- Tổng thời gian dự kiến: 1 ngày làm việc.
