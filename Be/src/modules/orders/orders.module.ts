import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { QrTablesModule } from '../qr-tables/qr-tables.module';
import { DishesModule } from '../dishes/dishes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]),
    QrTablesModule,
    DishesModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
