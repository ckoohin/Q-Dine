---
phase: implementation
title: Implementation Guide - Payment Management
description: Technical implementation notes, patterns, and code guidelines for Payment Management
---

# Hướng dẫn Triển khai

## Thiết lập Phát triển

- Đảm bảo môi trường có thể gọi đến các service sinh mã VietQR hoặc cài đặt thư viện xử lý QR nếu làm offline.

## Ghi chú Triển khai

### Xử lý Gộp bàn

- Khi nhân viên chọn nhiều bàn, hệ thống cần tìm các `TableSession` đang `ACTIVE` của những bàn đó và gom toàn bộ `Order` thuộc các session này vào một `Invoice`.

### Giải phóng tài nguyên

- Trong transaction xác nhận thanh toán, cần thực hiện đồng thời:
  1. Cập nhật `Invoice` thành `PAID`.
  2. Cập nhật `TableSession.status` thành `COMPLETED`.
  3. Cập nhật `Table.status` thành `AVAILABLE`.

### In hóa đơn

- Sử dụng thư viện như `ejs` hoặc `mustache` để render template HTML hóa đơn, sau đó frontend có thể mở tab mới để in (Ctrl+P).
