---
phase: design
title: System Design & Architecture - Dish Management
description: Define the technical architecture, components, and data models for dish CRUD
---

# Thiết kế Hệ thống & Kiến trúc

## Tổng quan Kiến trúc
**Cấu trúc cấp cao của hệ thống như thế nào?**

- Thao tác CRUD sẽ được thực hiện thông qua API.
  ```mermaid
  graph TD
    AdminUI[Giao diện Quản trị] -->|REST API| DishService[Dịch vụ Món ăn]
    DishService --> Database[(Cơ sở dữ liệu)]
  ```

## Mô hình Dữ liệu
**Chúng ta cần quản lý dữ liệu gì?**

- Table: `dishes`
  - `id`: UUID (Primary Key)
  - `name`: string
  - `description`: text
  - `price`: decimal
  - `status`: enum (available, out_of_stock, inactive)
  - `category_id`: UUID (Foreign Key)
  - `image_url`: string
  - `created_at`: datetime
  - `updated_at`: datetime
  - `is_deleted`: boolean

## Thiết kế API
**Các thành phần giao tiếp với nhau như thế nào?**

- `GET /api/dishes`: Lấy danh sách món ăn
- `POST /api/dishes`: Tạo món ăn mới
- `GET /api/dishes/:id`: Lấy chi tiết món ăn
- `PUT /api/dishes/:id`: Cập nhật thông tin món ăn
- `DELETE /api/dishes/:id`: Xóa món ăn (hoặc soft delete)

## Phân chia Thành phần
**Các khối xây dựng chính là gì?**

- `DishList`: Component hiển thị danh sách
- `DishForm`: Component thêm/sửa món
- `DishCard`: Hiển thị thông tin tóm tắt từng món
- `DishService`: Xử lý logic gọi API

## Quyết định Thiết kế
**Tại sao chúng ta chọn cách tiếp cận này?**

- Sử dụng Soft Delete để tránh mất dữ liệu nếu lỡ tay xóa.
- Sử dụng mô hình RESTful chuẩn để dễ bảo trì.

## Yêu cầu Phi chức năng
**Hệ thống cần vận hành như thế nào?**

- Hiệu suất: API trả về kết quả < 200ms.
- Bảo mật: Chỉ Admin mới có quyền POST/PUT/DELETE.
