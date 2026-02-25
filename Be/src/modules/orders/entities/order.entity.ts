import { OrderStatus } from 'src/common/enums/order-status.enum';
import { TableSession } from 'src/modules/qr-tables/entities/table-session.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity('Orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sessionId: string;

  @ManyToOne(() => TableSession)
  @JoinColumn({ name: 'sessionId' })
  session: TableSession;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalAmount: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
