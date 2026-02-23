import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { User } from '../users/entities/user.entity';
import { UserRole } from 'src/common/enums/user-role.enum';
import { DishStatus } from 'src/common/enums/dish-status.enum';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('dishes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishesService.update(id, updateDishDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.dishesService.remove(id);
  }
}
