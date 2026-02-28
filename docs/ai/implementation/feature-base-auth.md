---
phase: implementation
title: Implementation Guide - Base Auth
description: Technical implementation notes, patterns, and code guidelines
---

# Hướng dẫn Triển khai

## Thiết lập Phát triển

- Cấu hình baseURL cho Axios, trỏ về BE server.
- Đảm bảo các domain Localhost trùng hoặc hỗ trợ CORS truyền Cookie (Nếu BE khác port cần allow methods và allow credentials).

## Cấu trúc Mã nguồn

```text
src/
├── app/
│   ├── (auth)/login/page.tsx
│   ├── (admin)/layout.tsx
├── features/
│   └── auth/
│       ├── api/auth.api.ts      # Chứa các endpoint func định nghĩa Axios
│       ├── api/auth.keys.ts     # Các khóa (keys) của React Query cho auth
│       ├── components/LoginForm.tsx
│       ├── components/RoleGuard.tsx
│       ├── hooks/useAuth.ts
│       ├── hooks/useLogin.ts
│       ├── hooks/useLogout.ts
│       └── types/auth.types.ts
├── libs/
│   └── api/
│       └── http.ts              # Axios instance setup
└── middleware.ts
```

## Ghi chú Triển khai - Các tính năng cốt lõi

### 1. Interceptor Xử lý Refresh Token:

Mẫu Promise Queue cho Axios:

```typescript
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};
```

### 2. Quản lý Cache (React Query):

`useAuth`: `source of truth` duy nhất.
Sử dụng `staleTime` và `refetchOnWindowFocus` cẩn thận để tránh gọi `/profile` quá dầy.

### 3. Middleware (Edge):

Đọc từ `req.cookies.get("accessToken")?.value`. Nếu không có, redirect sang `/login?next=...`. Ghi nhớ luồng để người dùng login xong quay lại đúng trang họ cần truy cập.

## Xem xét về Hiệu suất

`useAuth` chỉ fetch dữ liệu nhỏ. Do dùng caching, những components dưới sâu lấy state qua `useAuth()` không tạo ra request HTTP mới.
