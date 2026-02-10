---
phase: testing
title: Testing Strategy - Dish Management
description: Define testing approach, test cases, and quality assurance for dish CRUD
---

# Chiến lược Kiểm thử

## Mục tiêu Độ bao phủ Kiểm thử
**Chúng ta hướng tới mức độ kiểm thử nào?**

- Mục tiêu: 80% coverage cho phần logic CRUD.

## Kiểm thử Đơn vị (Unit Tests)
**Những thành phần riêng lẻ nào cần được kiểm thử?**

### Dish Model Validation
- [ ] Kiểm tra thêm món thiếu tên (fails)
- [ ] Kiểm tra thêm món giá âm (fails)
- [ ] Kiểm tra cập nhật trạng thái hợp lệ (passes)

## Kiểm thử Tích hợp (Integration Tests)
**Chúng ta kiểm tra sự tương tác giữa các thành phần như thế nào?**

- [ ] Quy trình: Tạo món -> Lấy danh sách -> Sửa món -> Xóa món.
- [ ] Kiểm tra phân quyền: User thường không thể xóa món.

## Kiểm thử Đầu cuối (End-to-End Tests)
**Những luồng người dùng nào cần được xác nhận?**

- [ ] Admin đăng nhập, vào trang quản lý và thêm thành công một món mới.
- [ ] Admin chuyển trạng thái món sang "Hết hàng" và kiểm tra ngoài trang Menu khách hàng.

## Dữ liệu Kiểm thử
**Chúng ta sử dụng dữ liệu gì để kiểm thử?**

- Sử dụng Faker để tạo dữ liệu món ăn ngẫu nhiên.

## Báo cáo Kiểm thử & Độ bao phủ
**Làm thế nào để chúng ta xác minh và thông báo kết quả kiểm thử?**

- Chạy `npm run test:dish`.

## Kiểm thử Thủ công (Manual Testing)
**Điều gì cần sự xác nhận của con người?**

- Kiểm tra hiển thị ảnh món ăn có bị méo hay vỡ không.
- Kiểm tra tính dễ dùng của form thêm món.
