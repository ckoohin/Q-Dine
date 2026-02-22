import { DishStatus } from 'src/common/enums/dish-status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Dishes')
export class Dish {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 0 })
  price: number;

  @Column({
    type: 'enum',
    enum: DishStatus,
    default: DishStatus.AVAILABLE,
  })
  status: DishStatus;

  @Column({ type: 'uuid', nullable: true })
  categoryId: string;

  @Column({ length: 255, nullable: true })
  imageUrl: string;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
