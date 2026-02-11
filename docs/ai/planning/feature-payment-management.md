---
phase: planning
title: Project Planning & Task Breakdown - Payment Management
description: Break down work into actionable tasks and estimate timeline for Payment Management
---

# Lập Kế hoạch Dự án & Phân chia Công việc

## Các Cột mốc (Milestones)

**Các điểm kiểm soát chính là gì?**

- [ ] Cột mốc 1: Hoàn thành logic tính toán tổng tiền và gộp đơn hàng.
- [ ] Cột mốc 2: Triển khai API VietQR và giao diện xem trước hóa đơn.
- [ ] Cột mốc 3: Hoàn thiện luồng xác nhận thanh toán, giải phóng bàn và báo cáo Admin.

## Phân chia Công việc

**Những công việc cụ thể nào cần được thực hiện?**

### Giai đoạn 1: Backend Logic

- [ ] Nhiệm vụ 1.1: Tạo `InvoiceEntity` và các quan hệ với `TableSession`, `Order`.
- [ ] Nhiệm vụ 1.2: Xây dựng service tính toán tổng tiền (nhân số lượng, cộng dồn món, áp dụng discount).

### Giai đoạn 2: API & Integration

- [ ] Nhiệm vụ 2.1: Triển khai API Preview Invoice hỗ trợ gộp nhiều `tableId`.
- [ ] Nhiệm vụ 2.2: Tích hợp thư viện hoặc API sinh VietQR.

### Giai đoạn 3: Workflow & Reporting

- [ ] Nhiệm vụ 3.1: Implement `confirmPayment`: Cập nhật Invoice, đóng Sessions, cập nhật trạng thái Bàn về `AVAILABLE`.
- [ ] Nhiệm vụ 3.2: Xây dựng API báo cáo doanh thu cơ bản cho Admin.

## Phụ thuộc

- Phụ thuộc vào `table-qr-management` để vô hiệu hóa mã QR sau khi thanh toán.
- Phụ thuộc vào `table-management` để cập nhật trạng thái bàn.

## Tiến độ & Ước tính

- Tổng thời gian: 2 ngày làm việc.
