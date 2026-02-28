---
phase: requirements
title: Requirements & Problem Understanding - Base Auth
description: Clarify the problem space, gather requirements, and define success criteria
---

# Yêu cầu & Thấu hiểu Vấn đề

## Tuyên bố Vấn đề

**Chúng ta đang giải quyết vấn đề gì?**

- Tạo nền tảng xác thực (Authentication) và phân quyền (Authorization) cốt lõi cho ứng dụng Next.js (App Router).
- Hiện tại thiếu cơ chế quản lý phiền đăng nhập an toàn và tái tạo token tự động, dễ gặp lỗi bảo mật (như lưu ở localStorage mắc lỗi XSS) và lỗi race-condition khi đồng loạt có nhiều request gọi refresh token.
- Tác động tới: Tất cả người dùng (Admin, Staff, Customer).

## Mục tiêu & Đối tượng

**Chúng ta muốn đạt được điều gì?**

- **Mục tiêu chính**:
  1. Bảo vệ token 100% bằng **httpOnly Cookie** (không lưu token ở localStorage).
  2. Implement cơ chế auto-refresh token một cách mượt mà và an toàn khi bị `401 Unauthorized` (chống race-condition khi React Query gọi lại song song nhiều API).
  3. Dùng React Query call endpoint "me" (`/auth/profile`) làm **Source of Truth** để định đoạt quyền và trạng thái đăng nhập trên UI.
  4. Kiến trúc gọn gàng, chia layer rõ ràng cho Auth logic.
  5. Dễ mở rộng RBAC cho nhiều Role.
- **Mục tiêu loại trừ**:
  - Không viết hoặc can thiệp Logic ở Backend (BE đã cung cấp đủ endpoint).

## Câu chuyện Người dùng & Các trường hợp Sử dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- Trình tải App: Khách vào ứng dụng, App tự lấy thông tin profile qua API.
- Đăng nhập (Login): Điền Form, bấm đăng nhập => Redirect vào dashboard tương ứng theo Role.
- Refresh (401): Người dùng đang xài, token hết hạn => App ngầm gọi `/refresh` giữ nguyên trải nghiệm, tự retry các payload đang dở.
- Phân quyền (Guard): Người dùng mạo danh nhập đường dẫn (VD: `/admin`), hệ thống đá văng về `/login`.

## Tiêu chí Thành công

**Làm thế nào để chúng ta biết khi nào công việc hoàn tất?**

- Middleware cạnh (Edge) chặn được các lượt truy cập `/admin`, `/customer` nếu không có Cookie.
- Login và hook cập nhật cache React Query ngay lập tức.
- Giả lập 5 API cùng bị 401, endpoint `/refresh` chỉ bị gọi 1 lần (queue hoạt động đúng).

## Ràng buộc & Giả định

**Chúng ta cần làm việc trong giới hạn nào?**

- **Frontend**: Next.js App Router, TypeScript, React Query, Axios, shadcn/ui.
- **Backend API**:
  - `POST /auth/register`
  - `POST /auth/login`
  - `GET /auth/profile` ("me")
  - `PATCH /auth/change-password`
  - `POST /auth/refresh`
  - `POST /auth/logout`

## Câu hỏi & Các mục còn bỏ ngỏ

- Next.js SSR mismatch issue: Cần thống nhất pass Cookie cho SSR Query.
