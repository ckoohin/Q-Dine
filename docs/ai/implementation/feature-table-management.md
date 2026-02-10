---
phase: implementation
title: Implementation Guide - Table Management
description: Technical implementation notes, patterns, and code guidelines for Table Management
---

# Hướng dẫn Triển khai - Quản lý Bàn

## Thiết lập Phát triển
**Chúng ta bắt đầu như thế nào?**

- Các điều kiện tiên quyết và phụ thuộc
- Các bước thiết lập môi trường
- Cấu hình cần thiết

## Cấu trúc Mã nguồn
**Mã nguồn được tổ chức như thế nào?**

- `Be/src/table/`: Module chứa TableController, TableService, TableEntity.
- `Be/src/database/migrations/`: Chứa file migration tạo bảng `tables`.
- `Fe/src/components/Table/`: Chứa các components liên quan (`TableList`, `TableCard`).
- `Fe/src/hooks/useTables.ts`: Custom hook sử dụng React Query.

## Ghi chú Triển khai
**Các chi tiết kỹ thuật chính cần lưu ý:**

### Các tính năng cốt lõi
- **CRUD Bàn**: 
  - `POST`: Validate `number` unique.
  - `DELETE`: Chặn xóa nếu bàn đang có khách (`OCCUPIED`).
- **Quản lý trạng thái**: 
  - Sử dụng Enum `TableStatus`.
  - Validate chuyển đổi trạng thái hợp lệ (Ví dụ: Không thể từ `AVAILABLE` -> `CLEANING` trực tiếp nếu logic yêu cầu phải qua `OCCUPIED`).
- **Giao diện**:
  - Grid Layout (Responsiveness).
  - Màu sắc trực quan: Green (Available), Red (Occupied), Yellow (Reserved), Blue (Cleaning).

### Các mẫu & Thực hành tốt nhất
- **Repository Pattern**: Sử dụng `InjectRepository(Table)` trong NestJS Service.
- **DTOs**: Sử dụng `CreateTableDto`, `UpdateTableDto` với `class-validator` để kiểm tra dữ liệu đầu vào.
- **Optimistic Updates**: React Query cập nhật UI ngay lập tức khi đổi trạng thái, revert nếu API lỗi.

## Các điểm Tích hợp
**Các phần kết nối với nhau như thế nào?**

- **API**: `/api/tables` endpoints.
- **Database**: PostgreSQL `tables` table.
- **Auth**: Cần bảo vệ route (Admin/Manager only for Create/Delete, Staff for Update Status).

## Xử lý Lỗi
**Chúng ta xử lý các thất bại như thế nào?**

- **400 Bad Request**: Trùng số bàn, thiếu trường bắt buộc.
- **404 Not Found**: ID không tồn tại.
- **409 Conflict**: Trạng thái không hợp lệ (nếu áp dụng state machine chặt chẽ).

## Xem xét về Hiệu suất
**Làm thế nào để duy trì tốc độ?**

- Chiến lược tối ưu hóa
- Cách tiếp cận bộ nhớ đệm (caching)
- Tối ưu hóa truy vấn
- Quản lý nguồn lực

## Ghi chú Bảo mật
**Các biện pháp bảo mật nào đang được áp dụng?**

- Xác thực/phân quyền (Authentication/Authorization)
- Xác thực đầu vào (Input validation)
- Mã hóa dữ liệu
- Quản lý bí mật (Secrets management)
