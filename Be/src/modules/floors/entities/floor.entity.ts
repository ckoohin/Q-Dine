import { DEFAULT_MAX_AREAS } from 'src/common/constants/floor-constraints.constants';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Area } from '../../areas/entities/area.entity';

@Entity('Floors')
export class Floor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({ type: 'int', default: DEFAULT_MAX_AREAS })
  maxAreas: number;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @OneToMany(() => Area, (area) => area.floor)
  areas: Area[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
