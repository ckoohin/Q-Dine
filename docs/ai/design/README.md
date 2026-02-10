---
phase: design
title: System Design & Architecture
description: Define the technical architecture, components, and data models
---

# Thiết kế Hệ thống & Kiến trúc

## Tổng quan Kiến trúc
**Cấu trúc cấp cao của hệ thống như thế nào?**

- Bao gồm sơ đồ mermaid ghi lại các thành phần chính và mối quan hệ giữa chúng. Ví dụ:
  ```mermaid
  graph TD
    Client -->|HTTPS| API
    API --> ServiceA
    API --> ServiceB
    ServiceA --> Database[(DB)]
  ```
- Các thành phần chính và trách nhiệm của chúng
- Các lựa chọn ngăn xếp công nghệ (stack) và cơ sở lựa chọn

## Mô hình Dữ liệu
**Chúng ta cần quản lý dữ liệu gì?**

- Các thực thể cốt lõi và mối quan hệ giữa chúng
- Lược đồ/cấu trúc dữ liệu
- Luồng dữ liệu giữa các thành phần

## Thiết kế API
**Các thành phần giao tiếp với nhau như thế nào?**

- Các API bên ngoài (nếu có)
- Các giao diện nội bộ
- Định dạng yêu cầu/phản hồi (request/response)
- Cách tiếp cận xác thực/phân quyền

## Phân chia Thành phần
**Các khối xây dựng chính là gì?**

- Thành phần Frontend (nếu có)
- Các dịch vụ/mô-đun Backend
- Lớp cơ sở dữ liệu/lưu trữ
- Tích hợp của bên thứ ba

## Quyết định Thiết kế
**Tại sao chúng ta chọn cách tiếp cận này?**

- Các quyết định kiến trúc chính và sự đánh đổi
- Các phương án thay thế đã xem xét
- Các mẫu (patterns) và nguyên tắc được áp dụng

## Yêu cầu Phi chức năng
**Hệ thống cần vận hành như thế nào?**

- Mục tiêu hiệu suất
- Cân nhắc về khả năng mở rộng
- Yêu cầu bảo mật
- Nhu cầu về độ tin cậy/tính sẵn sàng
