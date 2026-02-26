import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Floor } from '../../floors/entities/floor.entity';

@Entity('Areas')
export class Area {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column()
  floorId: string;

  @ManyToOne(() => Floor, (floor) => floor.areas)
  @JoinColumn({ name: 'floorId' })
  floor: Floor;

  @Column({ type: 'int', default: 50 })
  maxTables: number;

  @Column({ type: 'int', default: 200 })
  maxCapacity: number;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
