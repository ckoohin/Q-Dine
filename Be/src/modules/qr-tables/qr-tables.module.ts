import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrTablesService } from './qr-tables.service';
import { QrTablesController } from './qr-tables.controller';
import { TableSession } from './entities/table-session.entity';
import { TablesModule } from '../tables/tables.module';

@Module({
  imports: [TypeOrmModule.forFeature([TableSession]), TablesModule],
  controllers: [QrTablesController],
  providers: [QrTablesService],
  exports: [QrTablesService, TypeOrmModule],
})
export class QrTablesModule {}
