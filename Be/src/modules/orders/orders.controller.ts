import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UserRole } from 'src/common/enums/user-role.enum';
import { OrderStatus } from 'src/common/enums/order-status.enum';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get('session/:token')
  findBySession(@Param('token') token: string) {
    return this.ordersService.findBySessionToken(token);
  }

  @Get()
  @Auth(UserRole.ADMIN, UserRole.STAFF)
  findAll(@Query('status') status?: OrderStatus) {
    return this.ordersService.findAll(status);
  }

  @Get(':id')
  @Auth(UserRole.ADMIN, UserRole.STAFF)
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id/status')
  @Auth(UserRole.ADMIN, UserRole.STAFF)
  updateStatus(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.updateStatus(id, updateOrderDto);
  }
}
