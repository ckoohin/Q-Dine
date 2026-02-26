import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { Table } from './entities/table.entity';
import { AreasModule } from '../areas/areas.module';
import { FloorsModule } from '../floors/floors.module';
@Module({
  imports: [TypeOrmModule.forFeature([Table]), AreasModule, FloorsModule],
  controllers: [TablesController],
  providers: [TablesService],
  exports: [TablesService, TypeOrmModule],
})
export class TablesModule {}
