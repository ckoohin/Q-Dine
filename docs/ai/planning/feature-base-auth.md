---
phase: planning
title: Project Planning & Task Breakdown - Base Auth
description: Break down work into actionable tasks and estimate timeline
---

# Lập Kế hoạch Dự án & Phân chia Công việc

## Các Cột mốc (Milestones)

- [ ] Cột mốc 1: Cài đặt HTTP Core và Authentication Logic.
- [ ] Cột mốc 2: Đồng bộ Middleware SSR và Query Cache.
- [ ] Cột mốc 3: Hoàn thiện Layout và RoleGuard (Authorization).

## Phân chia Công việc

### Giai đoạn 1: Nền tảng (Core Network)

- [ ] Nhiệm vụ 1.1: Tạo và config `libs/api/http.ts` (Axios với `withCredentials`).
- [ ] Nhiệm vụ 1.2: Triển khai kịch bản Refresh Token queue ở Axios Interceptors. Cần bẫy lỗi 401.

### Giai đoạn 2: Trọng tâm (React Query & Services)

- [ ] Nhiệm vụ 2.1: Viết lớp Service `features/auth/api/auth.api.ts` hỗ trợ type chẽ.
- [ ] Nhiệm vụ 2.2: Tạo chùm Hook React Query (`useAuth`, `useLogin`, `useLogout`, ...).
- [ ] Nhiệm vụ 2.3: Viết Login UI gắn Mutations. Khi Login/Logout thành công, phải gọi `queryClient.invalidateQueries` hoặc reset cache.

### Giai đoạn 3: Phân quyền & Bảo vệ

- [ ] Nhiệm vụ 3.1: Config `middleware.ts` bắt mọi Endpoint private (`/admin`, `/customer`). Redirect `/login` nếu không có Cookie.
- [ ] Nhiệm vụ 3.2: Render Component `<RoleGuard>` kiểm tra role và bọc App Layout.

## Phụ thuộc

- Cần cài đặt `axios`, `@tanstack/react-query`.
- Đòi hỏi Backend đã Deploy / Start chạy Local để test Cookie `Domain` / `SameSite`.

## Rủi ro & Giảm thiểu

- **Rủi ro rò rỉ JWT lên Client**: Giảm thiểu: Xóa hoàn toàn mã đọc Set-Cookie thủ công ở FE, nhường lại cho trình duyệt xử lý qua `withCredentials`.
- **Infinite refresh loop**: API `/profile` gọi ném 401 thì gọi vào `/refresh`, `/refresh` cũng 401 rồi lại gọi. Giảm thiểu: Tại Interceptor, loại trừ /refresh endpoint ra khỏi logic tự retry.
