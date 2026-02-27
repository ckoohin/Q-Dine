import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { User } from '../users/entities/user.entity';
import { DishStatus } from 'src/common/enums/dish-status.enum';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';
import { AdminOnly } from '../auth/decorators/admin-only.decorator';

@Controller('dishes')
@Auth()
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  @AdminOnly()
  create(@Body() createDishDto: CreateDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @Get()
  findAll(
    @CurrentUser() user: User,
    @Query('status') status?: DishStatus,
    @Query('deleted') deleted?: string,
  ) {
    return this.dishesService.findAll(user.role, status, deleted);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishesService.findOne(id);
  }

  @Patch(':id')
  @AdminOnly()
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishesService.update(id, updateDishDto);
  }

  @Delete(':id')
  @AdminOnly()
  remove(@Param('id') id: string) {
    return this.dishesService.remove(id);
  }
}
