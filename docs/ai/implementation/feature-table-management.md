---
phase: implementation
title: Implementation Guide - Table Management
description: Technical implementation notes, patterns, and code guidelines for Table CRUD
---

# Hướng dẫn Triển khai

## Thiết lập Phát triển

- Đảm bảo đã thiết lập kết nối Database trong project NestJS.

## Cấu trúc Mã nguồn

- `src/modules/tables/`: Chứa toàn bộ mã nguồn module quản lý bàn.

## Ghi chú Triển khai

### Các tính năng cốt lõi

- **Validation:** Sử dụng `class-validator` để kiểm tra input (ví dụ: capacity phải là số dương, tableNumber không được rỗng).
- **Error Handling:** Trả về `ConflictException` nếu `tableNumber` đã tồn tại.

### Các mẫu & Thực hành tốt nhất

- Tuân thủ Repository Pattern của NestJS.
- Sử dụng DTO (Data Transfer Objects) cho các request body.
