import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { TableSession } from '../qr-tables/entities/table-session.entity';
import { Dish } from '../dishes/entities/dish.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { SessionStatus } from 'src/common/enums/session-status.enum';
import { DishStatus } from 'src/common/enums/dish-status.enum';
import { OrderStatus } from 'src/common/enums/order-status.enum';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,

    @InjectRepository(TableSession)
    private readonly sessionRepository: Repository<TableSession>,

    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  /**
   * Tạo đơn hàng mới — khách đặt món qua session token
   */
  async create(dto: CreateOrderDto): Promise<Order> {
    return asyncHandleOperation(async () => {
      // Validate session token
      const session = await this.sessionRepository.findOne({
        where: { sessionToken: dto.sessionToken },
      });

      if (!session) {
        throw new NotFoundException('Session không tồn tại');
      }

      if (session.status !== SessionStatus.ACTIVE) {
        throw new BadRequestException('Session đã kết thúc, không thể đặt món');
      }

      // Validate và lấy thông tin các món
      let totalAmount = 0;
      const orderItems: Partial<OrderItem>[] = [];

      for (const item of dto.items) {
        const dish = await this.dishRepository.findOne({
          where: { id: item.dishId, isDeleted: false },
        });

        if (!dish) {
          throw new NotFoundException(
            `Không tìm thấy món ăn với id ${item.dishId}`,
          );
        }

        if (dish.status !== DishStatus.AVAILABLE) {
          throw new BadRequestException(
            `Món "${dish.name}" hiện không khả dụng (${dish.status})`,
          );
        }

        totalAmount += dish.price * item.quantity;

        orderItems.push({
          dishId: item.dishId,
          quantity: item.quantity,
          price: dish.price,
          notes: item.notes,
        });
      }

      // Tạo order với items (cascade)
      const order = this.orderRepository.create({
        sessionId: session.id,
        totalAmount,
        notes: dto.notes,
        items: orderItems as OrderItem[],
      });

      return await this.orderRepository.save(order);
    }, 'Lỗi khi tạo đơn hàng');
  }

  /**
   * Khách xem đơn hàng của mình qua session token
   */
  async findBySessionToken(token: string): Promise<Order[]> {
    return asyncHandleOperation(async () => {
      const session = await this.sessionRepository.findOne({
        where: { sessionToken: token },
      });

      if (!session) {
        throw new NotFoundException('Session không tồn tại');
      }

      return await this.orderRepository.find({
        where: { sessionId: session.id },
        relations: ['items', 'items.dish'],
        order: { createdAt: 'DESC' },
      });
    }, 'Lỗi khi lấy đơn hàng theo session');
  }

  /**
   * Nhân viên xem tất cả đơn hàng
   */
  async findAll(status?: OrderStatus): Promise<Order[]> {
    return asyncHandleOperation(async () => {
      const where = status ? { status } : {};

      return await this.orderRepository.find({
        where,
        relations: ['items', 'items.dish', 'session', 'session.table'],
        order: { createdAt: 'DESC' },
      });
    }, 'Lỗi khi lấy danh sách đơn hàng');
  }

  /**
   * Chi tiết đơn hàng
   */
  async findOne(id: string): Promise<Order> {
    return asyncHandleOperation(async () => {
      const order = await this.orderRepository.findOne({
        where: { id },
        relations: ['items', 'items.dish', 'session', 'session.table'],
      });

      if (!order) {
        throw new NotFoundException(`Không tìm thấy đơn hàng với id ${id}`);
      }

      return order;
    }, 'Lỗi khi lấy chi tiết đơn hàng');
  }

  /**
   * Nhân viên cập nhật trạng thái đơn
   */
  async updateStatus(id: string, dto: UpdateOrderDto): Promise<Order> {
    return asyncHandleOperation(async () => {
      const order = await this.orderRepository.findOne({
        where: { id },
      });

      if (!order) {
        throw new NotFoundException(`Không tìm thấy đơn hàng với id ${id}`);
      }

      await this.orderRepository.update(id, { status: dto.status });

      const updatedOrder = await this.orderRepository.findOne({
        where: { id },
        relations: ['items', 'items.dish', 'session', 'session.table'],
      });

      if (!updatedOrder) {
        throw new NotFoundException('Không tìm thấy đơn hàng sau khi cập nhật');
      }

      return updatedOrder;
    }, 'Lỗi khi cập nhật trạng thái đơn hàng');
  }
}
