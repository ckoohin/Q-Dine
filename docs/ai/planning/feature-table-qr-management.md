---
phase: planning
title: Project Planning & Task Breakdown - Table QR Management
description: Break down work into actionable tasks and estimate timeline for Table QR
---

# Lập Kế hoạch Dự án & Phân chia Công việc

## Các Cột mốc (Milestones)

**Các điểm kiểm soát chính là gì?**

- [ ] Cột mốc 1: Hoàn thành API quản lý trạng thái bàn và sinh session token.
- [ ] Cột mốc 2: Triển khai logic sinh mã QR và hiển thị trên Staff App.
- [ ] Cột mốc 3: Tích hợp logic tính thời gian chờ và hiển thị cho Guest.

## Phân chia Công việc

**Những công việc cụ thể nào cần được thực hiện?**

### Giai đoạn 1: Nền tảng Dữ liệu

- [ ] Nhiệm vụ 1.1: Thiết kế schema cho `Table` và `TableSession`.
- [ ] Nhiệm vụ 1.2: Xây dựng API CRUD cho Table (dành cho Admin).

### Giai đoạn 2: Logic QR & Session

- [ ] Nhiệm vụ 2.1: Implement API `openTable` (sinh unique token).
- [ ] Nhiệm vụ 2.2: Tích hợp thư viện sinh QR Code trên Backend/Frontend.
- [ ] Nhiệm vụ 2.3: API `checkoutTable` để hoàn tất phiên.

### Giai đoạn 3: Guest Experience

- [ ] Nhiệm vụ 3.1: Trang Menu của khách nhận session token từ URL.
- [ ] Nhiệm vụ 3.2: Logic tính thời gian chờ (Wait Time Algorithm).

## Phụ thuộc

**Những việc gì cần xảy ra theo thứ tự nào?**

- Cần hoàn thành `jwt-auth` để bảo mật các API của Staff/Admin.
- Cần có DB Schema Table trước khi làm logic sinh QR.
