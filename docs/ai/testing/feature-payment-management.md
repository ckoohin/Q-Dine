---
phase: testing
title: Testing Strategy - Payment Management
description: Define testing approach, test cases, and quality assurance for Payment Management
---

# Chiến lược Kiểm thử

## Kiểm thử Đơn vị (Unit Tests)

- [ ] `PaymentService.calculateTotal`: Kiểm tra tính toán với món có giá khác nhau, có/không có giảm giá.
- [ ] `PaymentService.mergeTables`: Kiểm tra gom đơn từ 2 bàn khác nhau vào 1 tổng.

## Kiểm thử Tích hợp (Integration Tests)

- [ ] Luồng: Khách gọi món -> Nhân viên xác nhận thanh toán -> Bàn trở về trạng thái trống -> Khách quét lại QR cũ (Mong đợi: 404/Invalid).
- [ ] Kiểm tra báo cáo doanh thu hiển thị đúng số tiền của hóa đơn vừa thanh toán.

## Kiểm thử Thủ công (Manual Testing)

- [ ] Quét mã VietQR bằng ứng dụng ngân hàng thực tế để kiểm tra tính chính xác của thông tin.
- [ ] Thử nghiệm gộp 3 bàn cùng lúc và thanh toán.
