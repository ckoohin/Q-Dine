import { Dish } from 'src/modules/dishes/entities/dish.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('OrderItems')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  orderId: string;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column()
  dishId: string;

  @ManyToOne(() => Dish)
  @JoinColumn({ name: 'dishId' })
  dish: Dish;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 })
  price: number;

  @Column({ type: 'text', nullable: true })
  notes: string;
}
