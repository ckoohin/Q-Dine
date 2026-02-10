---
phase: design
title: System Design & Architecture - Table Management
description: Define the technical architecture, components, and data models for Table Management
---

# Thiết kế Hệ thống & Kiến trúc - Quản lý Bàn

## Tổng quan Kiến trúc
**Cấu trúc cấp cao của hệ thống như thế nào?**

- **Mô hình Client-Server**:
  - **Frontend (Fe)**: Next.js application, sử dụng React Query để fetch data, TailwindCSS (nếu có) để style.
  - **Backend (Be)**: NestJS framework, cung cấp RESTful APIs.
  - **Database**: PostgreSQL, tương tác qua TypeORM.

```mermaid
graph TD
  Client[Client (Next.js)] -->|HTTP/REST| API[Backend API (NestJS)]
  API -->|TypeORM| DB[(PostgreSQL)]
  API -->|Updates| Socket[Socket.io (Optional for Realtime)]
```

## Mô hình Dữ liệu
**Chúng ta cần quản lý dữ liệu gì?**

### Entity: `Table`
Bảng lưu trữ thông tin bàn ăn.

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID/Integer | Primary Key |
| `number` | String | Số bàn/Tên bàn (Unique) |
| `capacity` | Integer | Sức chứa (số ghế) |
| `status` | Enum | AVAILABLE, RESERVED, OCCUPIED, CLEANING |
| `notes` | Text | Ghi chú (Optional) |
| `created_at` | Timestamp | Thời gian tạo |
| `updated_at` | Timestamp | Thời gian cập nhật cuối |

### Enum: `TableStatus`
- `AVAILABLE`: Bàn trống, sẵn sàng đón khách.
- `RESERVED`: Bàn đã được đặt trước.
- `OCCUPIED`: Bàn đang có khách.
- `CLEANING`: Bàn đang được dọn dẹp.

## Thiết kế API
**Các thành phần giao tiếp với nhau như thế nào?**

### Endpoints
- `GET /tables`: Lấy danh sách bàn (Hỗ trợ filter theo status, capacity).
- `GET /tables/:id`: Lấy chi tiết bàn.
- `POST /tables`: Tạo bàn mới (Admin/Manager).
- `PATCH /tables/:id`: Cập nhật thông tin bàn (Status, Notes...).
- `DELETE /tables/:id`: Xóa bàn (Admin/Manager).

### Payload Example (Create/Update)
```json
{
  "number": "T-01",
  "capacity": 4,
  "status": "AVAILABLE",
  "notes": "Near window"
}
```

## Phân chia Thành phần
**Các khối xây dựng chính là gì?**

### Backend (NestJS)
- **TableModule**: Module chính.
- **TableController**: Xử lý request HTTP.
- **TableService**: Logic nghiệp vụ (Validate trạng thái, tìm bàn trống...).
- **TableEntity**: Định nghĩa TypeORM Entity.

### Frontend (Next.js)
- **TableList Component**: Hiển thị lưới/danh sách bàn với màu sắc theo trạng thái.
- **TableFilter Component**: Bộ lọc bàn (Trống, Đầy...).
- **TableActionModal**: Modal để chuyển trạng thái, thêm ghi chú, hoặc xếp bàn.

## Quyết định Thiết kế
**Tại sao chúng ta chọn cách tiếp cận này?**

- **NestJS + TypeORM**: Tận dụng kiến trúc có sẵn của dự án (`Be`), đảm bảo tính nhất quán và dễ bảo trì.
- **RESTful API**: Đơn giản, dễ triển khai cho các thao tác CRUD.
- **Real-time (Cân nhắc)**: Nếu cần trạng thái cập nhật tức thời cho nhiều nhân viên, có thể cần tích hợp Socket.io sau này (Giai đoạn 2). Hiện tại dùng polling hoặc manual refresh để đơn giản hóa MVP.

## Yêu cầu Phi chức năng
**Hệ thống cần vận hành như thế nào?**

- **Hiệu suất**: Danh sách bàn phải tải dưới 500ms.
- **Tính toàn vẹn**: Trạng thái bàn phải chính xác, tránh race condition (2 nhân viên cùng đặt 1 bàn -> cần Transaction hoặc Optimistic Locking nếu traffic cao).
