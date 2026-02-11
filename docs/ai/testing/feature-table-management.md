---
phase: testing
title: Testing Strategy - Table Management
description: Define testing approach, test cases, and quality assurance for Table CRUD
---

# Chiến lược Kiểm thử

## Kiểm thử Đơn vị (Unit Tests)

- [ ] `TableService.create`: Kiểm tra tạo bàn thành công và handle lỗi trùng số bàn.
- [ ] `TableService.remove`: Kiểm tra không cho phép xóa bàn đang có trạng thái `OCCUPIED`.

## Kiểm thử Tích hợp (Integration Tests)

- [ ] Kiểm tra flow CRUD hoàn chỉnh qua API (Sử dụng Supertest).
- [ ] Xác minh quyền Admin thông qua JWT Token.

## Dữ liệu Kiểm thử

- Sử dụng các bộ dữ liệu mẫu (e.g., bàn từ A01 đến A10 với sức chứa khác nhau).
