import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { FloorsService } from './floors.service';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';

@Controller('floors')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FloorsController {
  constructor(private readonly floorsService: FloorsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  create(@Body() createFloorDto: CreateFloorDto) {
    return this.floorsService.create(createFloorDto);
  }

  @Get()
  findAll(@Query('deleted') deleted?: string) {
    return this.floorsService.findAll(deleted);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.floorsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() updateFloorDto: UpdateFloorDto) {
    return this.floorsService.update(id, updateFloorDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.floorsService.remove(id);
  }
}
