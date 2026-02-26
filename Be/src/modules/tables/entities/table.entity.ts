import { TableStatus } from 'src/common/enums/table-status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
@Unique(['number', 'floorId'])
@Entity('Tables')
export class Table {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: '1' })
  floorId: string;

  @Column({ nullable: true })
  areaId: string;

  @Column({ length: 50 })
  number: string;

  @Column({ type: 'int' })
  capacity: number;

  @Column({
    type: 'enum',
    enum: TableStatus,
    default: TableStatus.AVAILABLE,
  })
  status: TableStatus;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
