---
phase: testing
title: Testing Strategy - Base Auth
description: Define testing approach, test cases, and quality assurance
---

# Chiến lược Kiểm thử

## Kiểm thử Đơn vị (Unit Tests)

### Thành phần: Axios Interceptor (http.ts)

- [ ] Nhập: Giả lập gọi 3 API đồng thời & ném lỗi `401`. Xuất: API `/refresh` chỉ bị gọi duy nhất 1 lần. Mảng Array nhận đủ 3 requests đẩy vào.
- [ ] Nhập: Gọi `refresh` thất bại. Xuất: Mảng Promise Queue reject. Router bị dội ra `/login`.

### Thành phần: React Query Hooks

- [ ] `useAuth`: Khi chưa có dữ liệu => trả `isPending = true`. Data null.
- [ ] `useLogin`: Thành công, query key `authKeys.profile()` bị invalidated.

## Kiểm thử Tích hợp (Integration Tests)

- [ ] Cấp 1 quyền truy cập Admin, người dùng sử dụng API `/profile`, hệ thống load và hiển thị layout Admin.
- [ ] Cung cấp Role 'Customer', kiểm tra Guard bật người dùng ra khỏi nhánh route của Staff/Admin.

## Kiểm thử Thủ công (Manual Testing)

**Rất quan trọng - kiểm tra các kịch bản Edge:**

1. **SSM Mismatch**: Reset máy chủ BE. Cấp Cookie ở Client, F5 trình duyệt. App re-hydrate không được chớp trắng UI hay in cảnh báo "React Hydration Error".
2. **Hết hạn Cookie**: Xóa Cookie `accessToken` ở tab Application. Click link trong app => Axios gọi, báo lỗi, gọi refresh, lấy lại token mới, tiếp tục tác vụ mà khách không hề hay biết.
3. **Redirect Loop**: Truy cập `/login` khi đã Auth, middleware phải bẻ sang Dashboard (`/admin`). Tránh bị redirect lặp vô hạn.

## Kiểm thử Hiệu suất

- Theo dõi F12 Network xem số lượng Request `/profile` khi qua các trang, đảm bảo Query cache hoạt động, không bị re-fetch API vô nghĩa.
