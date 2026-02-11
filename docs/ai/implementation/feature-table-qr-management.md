---
phase: implementation
title: Implementation Guide - Table QR Management
description: Technical implementation notes, patterns, and code guidelines for Table QR
---

# Hướng dẫn Triển khai

## Thiết lập Phát triển

**Chúng ta bắt đầu như thế nào?**

- Cài đặt thư viện `qrcode` (backend) hoặc `qrcode.react` (frontend).

## Ghi chú Triển khai

**Các chi tiết kỹ thuật chính cần lưu ý:**

### Các tính năng cốt lõi

- **Sinh Session Token:** Sử dụng `uuid` hoặc JWT ngắn hạn gắn với `tableId`.
- **Trạng thái Bàn:** Sử dụng Enum (`AVAILABLE`, `OCCUPIED`, `RESERVED`).

### Xử lý Lỗi

- Trả về lỗi 400 nếu cố gắng "Mở bàn" đã có khách.
- Trả về lỗi 404/410 (Gone) nếu khách quét mã QR của phiên đã thanh toán.
