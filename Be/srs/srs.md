1. Tổng quan dự án
1.1. Tên dự án
1.2. Mục tiêu

Xây dựng hệ thống cho phép: Khách đặt món trực tiếp tại bàn thông qua QR Code

Hỗ trợ 2 mô hình phục vụ:
Gọi món theo menu (à la carte)

Buffet

Hỗ trợ khách đặt bàn trước

Giảm tải cho nhân viên phục vụ

Tăng trải nghiệm người dùng và tối ưu quy trình nhà hàng

2. Đối tượng sử dụng (Actors)
Actor	            Mô tả
Khách hàng	        Quét QR, xem menu, đặt món, chọn buffety
Nhân viên	        Tạo QR cho bàn, quản lý trạng thái bàn
Quản lý/Admin	    Quản lý menu, bàn, đơn hàng, báo cáo
3. Tech Stack
3.1 Backend
NestJS + TypeORM

PostgreSQL / MySQL

JWT Authentication

QR Code Generator

RESTful API

3.2 Frontend

Next.js

Tailwind CSS / Ant Design

Axios / Fetch API

Responsive (mobile-first)

4. Mô hình nghiệp vụ tổng quát (Business Flow)
Flow 1: Khách đến bàn – gọi món tại bàn (QR)

Nhân viên chọn bàn → hệ thống tạo QR Code duy nhất

Khách quét QR → truy cập giao diện đặt món

Khách:

Xem menu

Thêm món vào giỏ

Gửi đơn

Đơn được gửi về bếp / thu ngân

Flow 2: Khách chọn Buffet

Khách quét QR hoặc nhân viên tạo order buffet

Khách chọn gói buffet

Hệ thống:

Giới hạn thời gian

Giới hạn số lượng/món

Khách gọi món trong phạm vi buffet

Flow 3: Khách đặt bàn trước

Khách truy cập website

Chọn:

Ngày giờ

Số người

Hệ thống xác nhận bàn trống

Khi khách đến → nhân viên check-in → tạo QR cho bàn

5. SRS – Software Requirements Specification
5.1. Functional Requirements (Yêu cầu chức năng)
5.1.1. Quản lý bàn

Tạo bàn

Cập nhật trạng thái:

Trống

Đã đặt trước

Đang phục vụ

Mỗi bàn có mã định danh duy nhất

5.1.2. QR Code tại bàn

Nhân viên tạo QR cho từng phiên ngồi

QR chứa:

tableId

sessionId

QR hết hạn khi thanh toán xong

5.1.3. Đặt món tại bàn

Khách không cần đăng nhập

Chức năng:

Xem menu theo danh mục

Xem chi tiết món

Thêm / xóa / cập nhật số lượng

Gửi đơn

Có thể gửi nhiều lần trong cùng 1 session

5.1.4. Buffet

Quản lý gói buffet:

Giá

Thời gian

Danh sách món

Khách:

Chọn buffet

Gọi món trong phạm vi cho phép

Hệ thống kiểm soát:

Thời gian sử dụng

Số lượng món

5.1.5. Đặt bàn trước

Khách nhập thông tin:

Tên

SĐT

Ngày giờ

Số người

Hệ thống:

Kiểm tra bàn trống

Lưu lịch đặt

Nhân viên check-in khi khách đến

5.1.6. Quản lý đơn hàng

Trạng thái đơn:

Pending

Cooking

Served

Paid

Gửi đơn đến bếp

Gộp nhiều order vào một bill

5.1.7. Thanh toán

Thanh toán tại quầy

Thanh toán theo bàn

Kết thúc session → QR hết hiệu lực

5.2. Non-Functional Requirements (Phi chức năng)
Yêu cầu	Mô tả
Hiệu năng	Đáp ứng nhanh trên mobile
Bảo mật	QR chỉ hợp lệ trong session
Khả dụng	Giao diện dễ dùng cho khách
Mở rộng	Dễ thêm chi nhánh
Tính ổn định	Không mất order khi reload
6. Thiết kế Database (khái quát)
Bảng chính:

users

tables

table_sessions

qr_codes

menus

menu_categories

buffet_packages

buffet_items

orders

order_items

reservations (đặt bàn trước)

payments

7. Kiến trúc hệ thống
Next.js (Client)
   |
REST API
   |
NestJS
   |-- Auth Module
   |-- Table Module
   |-- QR Module
   |-- Order Module
   |-- Buffet Module
   |-- Reservation Module
   |
Database (TypeORM)