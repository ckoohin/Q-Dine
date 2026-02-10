---
phase: testing
title: Testing Strategy - Table Management
description: Define testing approach, test cases, and quality assurance for Table Management
---

# Chiến lược Kiểm thử - Quản lý Bàn

## Mục tiêu Độ bao phủ Kiểm thử
**Chúng ta hướng tới mức độ kiểm thử nào?**

- Mục tiêu độ bao phủ kiểm thử đơn vị (unit test) (mặc định: 100% mã mới/thay đổi)
- Phạm vi kiểm thử tích hợp (integration test) (các luồng quan trọng + xử lý lỗi)
- Các kịch bản kiểm thử đầu cuối (end-to-end test) (hành trình chính của người dùng)
- Sự phù hợp với tiêu chí chấp nhận của yêu cầu/thiết kế

## Kiểm thử Đơn vị (Unit Tests)
**Những thành phần riêng lẻ nào cần được kiểm thử?**

### Backend Services (`TableService`)
- [ ] `create()`: Thành công khi số bàn chưa tồn tại.
- [ ] `create()`: Thất bại (400) khi số bàn trùng lặp.
- [ ] `update()`: Cập nhật thành công trạng thái và ghi chú.
- [ ] `findAll()`: Trả về danh sách bàn với đúng bộ lọc (status, capacity).
- [ ] `remove()`: Xóa bàn thành công hoặc báo lỗi nếu bàn đang có khách (Business Rule).

### UI Components
- [ ] `TableCard`: Hiển thị đúng màu sắc theo status prop.
- [ ] `TableForm`: Validation (số bàn bắt buộc, sức chứa > 0).

## Kiểm thử Tích hợp (Integration Tests)
**Chúng ta kiểm tra sự tương tác giữa các thành phần như thế nào?**

- [ ] **Flow CRUD**: Tạo bàn mới -> Lấy chi tiết -> Sửa thông tin -> Xóa.
- [ ] **Flow Trạng thái**: Đổi trạng thái từ `AVAILABLE` -> `OCCUPIED` -> `CLEANING` -> `AVAILABLE` qua API.
- [ ] **Database Constraints**: Kiểm tra ràng buộc Unique của `number` trong DB.

## Kiểm thử Đầu cuối (End-to-End Tests)
**Những luồng người dùng nào cần được xác nhận?**

- [ ] **Luồng Quản lý**: Đăng nhập Admin -> Vào trang quản lý bàn -> Thêm bàn T-99 -> Thấy T-99 trên lưới.
- [ ] **Luồng Nhân viên**: Đăng nhập Staff -> Thấy bàn T-99 trống -> Chuyển sang `OCCUPIED` (Có khách).
- [ ] **Luồng Dọn dẹp**: Staff chuyển bàn sang `CLEANING` -> Sau khi xong chuyển về `AVAILABLE`.

## Dữ liệu Kiểm thử
**Chúng ta sử dụng dữ liệu gì để kiểm thử?**

- **Seed Data**: 10 bàn với các trạng thái khác nhau (5 Available, 2 Occupied, 1 Reserved, 2 Cleaning).
- **Test Users**: 1 Admin User, 1 Staff User.

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
