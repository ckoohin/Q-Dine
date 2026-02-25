import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from 'src/common/enums/order-status.enum';

export class UpdateOrderDto {
  @IsEnum(OrderStatus, {
    message: 'Trạng thái phải là PENDING, CONFIRMED, COMPLETED hoặc CANCELLED',
  })
  @IsNotEmpty({ message: 'Trạng thái không được để trống' })
  status!: OrderStatus;
}
