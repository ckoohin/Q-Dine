---
phase: testing
title: Testing Strategy - Table QR Management
description: Define testing approach, test cases, and quality assurance for Table QR
---

# Chiến lược Kiểm thử

## Kiểm thử Đơn vị (Unit Tests)

- [ ] `TableSessionService`: Kiểm tra việc sinh token không trùng lặp.
- [ ] `WaitTimeService`: Kiểm tra tính chính xác của thuật toán tính thời gian.

## Kiểm thử Tích hợp (Integration Tests)

- [ ] Luồng: Open Table -> Generate QR -> Scan QR -> Get Menu.
- [ ] Luồng: Checkout Table -> QR cũ trở nên vô hiệu.

## Kiểm thử Thủ công (Manual Testing)

- [ ] Kiểm tra khả năng quét mã QR trên các thiết bị di động khác nhau (iOS/Android).
- [ ] Kiểm tra hiển thị trạng thái bàn trên dashboard của nhân viên.
