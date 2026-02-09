---
phase: testing
title: Testing Strategy
description: Define testing approach, test cases, and quality assurance
---

# Chiến lược Kiểm thử

## Mục tiêu Độ bao phủ Kiểm thử
**Chúng ta hướng tới mức độ kiểm thử nào?**

- Mục tiêu độ bao phủ kiểm thử đơn vị (unit test) (mặc định: 100% mã mới/thay đổi)
- Phạm vi kiểm thử tích hợp (integration test) (các luồng quan trọng + xử lý lỗi)
- Các kịch bản kiểm thử đầu cuối (end-to-end test) (hành trình chính của người dùng)
- Sự phù hợp với tiêu chí chấp nhận của yêu cầu/thiết kế

## Kiểm thử Đơn vị (Unit Tests)
**Những thành phần riêng lẻ nào cần được kiểm thử?**

### Thành phần/Mô-đun 1
- [ ] Trường hợp kiểm thử 1: [Mô tả] (bao phủ kịch bản / nhánh)
- [ ] Trường hợp kiểm thử 2: [Mô tả] (bao phủ trường hợp biên / xử lý lỗi)
- [ ] Độ bao phủ bổ sung: [Mô tả]

### Thành phần/Mô-đun 2
- [ ] Trường hợp kiểm thử 1: [Mô tả]
- [ ] Trường hợp kiểm thử 2: [Mô tả]
- [ ] Độ bao phủ bổ sung: [Mô tả]

## Kiểm thử Tích hợp (Integration Tests)
**Chúng ta kiểm tra sự tương tác giữa các thành phần như thế nào?**

- [ ] Kịch bản tích hợp 1
- [ ] Kịch bản tích hợp 2
- [ ] Kiểm thử các điểm cuối (endpoint) API
- [ ] Kịch bản tích hợp 3 (chế độ thất bại / hoàn tác)

## Kiểm thử Đầu cuối (End-to-End Tests)
**Những luồng người dùng nào cần được xác nhận?**

- [ ] Luồng người dùng 1: [Mô tả]
- [ ] Luồng người dùng 2: [Mô tả]
- [ ] Kiểm thử các luồng quan trọng
- [ ] Kiểm thử hồi quy (regression) các tính năng lân cận

## Dữ liệu Kiểm thử
**Chúng ta sử dụng dữ liệu gì để kiểm thử?**

- Các bản mẫu kiểm thử (fixtures) và giả lập (mocks)
- Yêu cầu về dữ liệu mẫu (seed data)
- Thiết lập cơ sở dữ liệu kiểm thử

## Báo cáo Kiểm thử & Độ bao phủ
**Làm thế nào để chúng ta xác minh và thông báo kết quả kiểm thử?**

- Các lệnh kiểm tra độ bao phủ và ngưỡng chấp nhận (`npm run test -- --coverage`)
- Các khoảng trống độ bao phủ (các tệp/hàm dưới 100% và lý do)
- Liên kết đến các báo cáo kiểm thử hoặc bảng điều khiển (dashboards)
- Kết quả kiểm thử thủ công và phê duyệt cuối cùng

## Kiểm thử Thủ công (Manual Testing)
**Điều gì cần sự xác nhận của con người?**

- Danh mục kiểm tra UI/UX (bao gồm khả năng tiếp cận - accessibility)
- Khả năng tương thích trình duyệt/thiết bị
- Kiểm thử nhanh (smoke tests) sau khi triển khai

## Kiểm thử Hiệu suất (Performance Testing)
**Làm thế nào để xác nhận hiệu suất?**

- Các kịch bản kiểm thử tải (load testing)
- Cách tiếp cận kiểm thử áp lực (stress testing)
- Điểm chuẩn hiệu suất (performance benchmarks)

## Theo dõi Lỗi (Bug Tracking)
**Chúng ta quản lý các vấn đề như thế nào?**

- Quy trình theo dõi vấn đề
- Các mức độ nghiêm trọng của lỗi
- Chiến lược kiểm thử hồi quy
