---
phase: deployment
title: Deployment Strategy
description: Define deployment process, infrastructure, and release procedures
---

# Chiến lược Triển khai

## Cơ sở Hạ tầng
**Ứng dụng sẽ chạy ở đâu?**

- Nền tảng lưu trữ (Hosting platform - AWS, GCP, Azure, v.v.)
- Các thành phần cơ sở hạ tầng (máy chủ, cơ sở dữ liệu, v.v.)
- Phân tách môi trường (dev, staging, production)

## Quy trình Triển khai (Pipeline)
**Chúng ta triển khai các thay đổi như thế nào?**

### Quy trình Xây dựng (Build Process)
- Các bước và lệnh xây dựng
- Biên dịch/tối ưu hóa tài nguyên (assets)
- Cấu hình môi trường

### Quy trình CI/CD
- Các rào cản kiểm thử tự động (testing gates)
- Tự động hóa xây dựng (Build automation)
- Tự động hóa triển khai (Deployment automation)

## Cấu hình Môi trường
**Những thiết lập nào khác nhau giữa các môi trường?**

### Phát triển (Development)
- Chi tiết cấu hình
- Thiết lập cục bộ

### Thử nghiệm (Staging)
- Chi tiết cấu hình
- Môi trường kiểm thử

### Vận hành (Production)
- Chi tiết cấu hình
- Thiết lập giám sát

## Các bước Triển khai
**Quy trình phát hành là gì?**

1. Danh mục kiểm tra trước triển khai
2. Các bước thực hiện triển khai
3. Xác nhận sau triển khai
4. Thủ tục hoàn tác (nếu cần)

## Di trú Cơ sở Dữ liệu (Database Migrations)
**Chúng ta xử lý các thay đổi lược đồ như thế nào?**

- Chiến lược di trú
- Thủ tục sao lưu
- Cách tiếp cận hoàn tác

## Quản lý Bí mật (Secrets Management)
**Chúng ta xử lý dữ liệu nhạy cảm như thế nào?**

- Biến môi trường
- Giải pháp lưu trữ bí mật
- Chiến lược xoay vòng khóa (key rotation)

## Kế hoạch Hoàn tác (Rollback Plan)
**Điều gì xảy ra nếu có lỗi?**

- Các yếu tố kích hoạt hoàn tác
- Các bước hoàn tác
- Kế hoạch truyền thông
