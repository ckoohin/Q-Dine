---
phase: planning
title: Project Planning & Task Breakdown - Table Management
description: Break down work into actionable tasks and estimate timeline for Table Management
---

# Lập Kế hoạch Dự án & Phân chia Công việc - Quản lý Bàn

## Các Cột mốc (Milestones)
**Các điểm kiểm soát chính là gì?**

- [ ] Cột mốc 1: Backend API Ready (CRUD & Status Logic)
- [ ] Cột mốc 2: Frontend Basic UI (List & Create)
- [ ] Cột mốc 3: Hoàn thiện luồng nghiệp vụ (Status Transition, Notes) & Testing

## Phân chia Công việc
**Những công việc cụ thể nào cần được thực hiện?**

### Giai đoạn 1: Backend (NestJS)
- [ ] Nhiệm vụ 1.1: Tạo Entity `Table` và Migration.
    - Định nghĩa các trường: number, capacity, status (enum), notes.
- [ ] Nhiệm vụ 1.2: Tạo `TableModule`, `TableController`, `TableService`.
- [ ] Nhiệm vụ 1.3: Hiện thực hóa CRUD APIs.
    - POST /tables (Create)
    - GET /tables (List with Filters)
    - GET /tables/:id (Detail)
    - PATCH /tables/:id (Update)
    - DELETE /tables/:id (Delete)
- [ ] Nhiệm vụ 1.4: Viết Unit Test cho `TableService`.

### Giai đoạn 2: Frontend (Next.js)
- [ ] Nhiệm vụ 2.1: Khởi tạo dự án Next.js (nếu chưa có trong thư mục `Fe`).
    - Cài đặt dependencies (TailwindCSS, React Query, Axios).
- [ ] Nhiệm vụ 2.2: Tạo các Component UI cơ bản.
    - `TableCard`: Hiển thị bàn và trạng thái màu sắc.
    - `StatusBadge`: Badge hiển thị trạng thái.
- [ ] Nhiệm vụ 2.3: Tạo trang Quản lý Bàn (`/admin/tables`).
    - Grid view hiển thị danh sách bàn.
    - Filter bar (Lọc theo trạng thái, sức chứa).
- [ ] Nhiệm vụ 2.4: Tạo Modal/Form thêm và sửa bàn.

### Giai đoạn 3: Tích hợp & Hoàn thiện
- [ ] Nhiệm vụ 3.1: Kết nối API (Intergration).
    - Viết hook `useTables`, `useCreateTable`, `useUpdateTable`.
- [ ] Nhiệm vụ 3.2: Xử lý chuyển trạng thái bàn nhanh (Quick Action).
    - Click vào bàn -> Menu chọn trạng thái.
- [ ] Nhiệm vụ 3.3: Kiểm thử toàn hệ thống (Manual Test).
    - Tạo bàn -> Đặt bàn -> Có khách -> Dọn dẹp -> Trống.

## Phụ thuộc
**Những việc gì cần xảy ra theo thứ tự nào?**

- Backend cần hoàn thành API cơ bản (1.1, 1.2, 1.3) trước khi làm Frontend Integration (3.1).
- Frontend UI (2.2, 2.3) có thể làm song song với Backend (dùng Mock data).

## Tiến độ & Ước tính
**Khi nào công việc sẽ hoàn thành?**

- Backend: 2 ngày.
- Frontend: 3 ngày.
- Integration & Testing: 1 ngày.
- Tổng cộng: ~1 tuần làm việc.

## Rủi ro & Giảm thiểu
**Điều gì có thể xảy ra sai sót?**

- **Rủi ro**: Trạng thái bàn bị lệch giữa 2 người dùng cùng lúc (Concurrency).
- **Giảm thiểu**: Chấp nhận mức độ nhất quán cuối cùng (Eventual Consistency) cho phiên bản đầu. Nếu cần thiết sẽ thêm Socket.io sau.
- **Rủi ro**: Frontend chưa được setup chuẩn.
- **Giảm thiểu**: Dành thời gian setup ban đầu kỹ lưỡng cho `Fe`.

## Nguồn lực Cần thiết
**Chúng ta cần gì để thành công?**

- Access to Database (Local PostgreSQL).
- Node.js Environment.
