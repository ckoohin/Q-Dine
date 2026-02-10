---
phase: monitoring
title: Monitoring & Observability
description: Define monitoring strategy, metrics, alerts, and incident response
---

# Giám sát & Khả năng quan sát

## Các Chỉ số Chính
**Chúng ta cần theo dõi những gì?**

### Chỉ số Hiệu suất
- Thời gian phản hồi/độ trễ (latency)
- Thông lượng (throughput)/số yêu cầu mỗi giây
- Sử dụng tài nguyên (CPU, bộ nhớ, đĩa)

### Chỉ số Kinh doanh
- Chỉ số tương tác của người dùng
- Tỷ lệ chuyển đổi/thành công
- Mức độ sử dụng tính năng

### Chỉ số Lỗi
- Tỷ lệ lỗi theo loại
- Các yêu cầu thất bại
- Theo dõi ngoại lệ (exception tracking)

## Công cụ Giám sát
**Chúng ta đang sử dụng những công cụ gì?**

- Giám sát hiệu suất ứng dụng (APM)
- Giám sát cơ sở hạ tầng
- Tổng hợp nhật ký (Log aggregation)
- Phân tích người dùng

## Chiến lược Ghi nhật ký (Logging)
**Chúng ta ghi nhật ký những gì và như thế nào?**

- Các cấp độ và danh mục nhật ký
- Định dạng nhật ký có cấu trúc
- Chính sách lưu giữ nhật ký
- Xử lý dữ liệu nhạy cảm

## Cảnh báo & Thông báo
**Khi nào và bằng cách nào chúng ta được thông báo?**

### Cảnh báo Nghiêm trọng
- Cảnh báo 1: [Điều kiện] → [Hành động]
- Cảnh báo 2: [Điều kiện] → [Hành động]

### Cảnh báo Nhắc nhở
- Cảnh báo 1: [Điều kiện] → [Hành động]
- Cảnh báo 2: [Điều kiện] → [Hành động]

## Bảng điều khiển (Dashboards)
**Chúng ta trực quan hóa những gì?**

- Bảng điều khiển sức khỏe hệ thống
- Bảng điều khiển chỉ số kinh doanh
- Các chế độ xem tùy chỉnh theo nhóm/vai trò

## Ứng phó Sự cố
**Chúng ta xử lý các vấn đề như thế nào?**

### Trực chiến (On-Call Rotation)
- Lịch trình và liên hệ
- Quy trình leo thang (escalation path)

### Quy trình Sự cố
1. Phát hiện và phân loại
2. Điều tra và chẩn đoán
3. Giải quyết và giảm thiểu
4. Rút kinh nghiệm sau sự cố (post-mortem)

## Kiểm tra Sức khỏe (Health Checks)
**Làm thế nào để xác minh sức khỏe hệ thống?**

- Kiểm tra sức khỏe các điểm cuối (endpoint)
- Kiểm tra các phụ thuộc
- Kiểm thử nhanh tự động (smoke tests)
