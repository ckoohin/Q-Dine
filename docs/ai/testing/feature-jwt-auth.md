---
phase: testing
title: Testing Strategy - JWT Authentication & Authorization
description: Define testing approach, test cases, and quality assurance for JWT Auth
---

# Chiến lược Kiểm thử

## Mục tiêu Độ bao phủ Kiểm thử

**Chúng ta hướng tới mức độ kiểm thử nào?**

- **Unit test:** Đảm bảo `AuthService` xử lý đúng logic băm mật khẩu và tạo token. 100% độ bao phủ cho logic xử lý token.
- **Integration test:** Đăng nhập thành công, đăng nhập thất bại, truy cập API có/không có token.

## Kiểm thử Đơn vị (Unit Tests)

**Những thành phần riêng lẻ nào cần được kiểm thử?**

### AuthService

- [ ] Đăng nhập đúng thông tin: Trả về access_token.
- [ ] Đăng nhập sai mật khẩu: Trả về lỗi `Unauthorized`.
- [ ] Đăng nhập tài khoản không tồn tại: Trả về lỗi `Unauthorized`.

## Kiểm thử Tích hợp (Integration Tests)

**Chúng ta kiểm tra sự tương tác giữa các thành phần như thế nào?**

- [ ] Luồng đăng nhập -> Lấy Token -> Dùng Token gọi API `@UseGuards(JwtAuthGuard)`.
- [ ] Kiểm tra `RolesGuard`: Admin gọi API của Staff (OK), Staff gọi API của Admin (Fail - 403).

## Kiểm thử Đầu cuối (End-to-End Tests)

**Những luồng người dùng nào cần được xác nhận?**

- [ ] Luồng người dùng: Mở app -> Đăng nhập Staff -> Xem danh sách đơn hàng.
- [ ] Luồng bảo mật: Cố gắng truy cập trang quản lý món ăn mà chưa đăng nhập -> Chuyển hướng hoặc lỗi 401.

## Dữ liệu Kiểm thử

**Chúng ta sử dụng dữ liệu gì để kiểm thử?**

- Tạo 1 tài khoản Admin mẫu và 1 tài khoản Staff mẫu trong quá trình seed dữ liệu kiểm thử.
