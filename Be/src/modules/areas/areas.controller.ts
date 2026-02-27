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
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { AdminOnly } from '../auth/decorators/admin-only.decorator';

@Controller('areas')
@Auth()
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Post()
  @AdminOnly()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areasService.create(createAreaDto);
  }

  @Get()
  findAll(
    @Query('floorId') floorId?: string,
    @Query('deleted') deleted?: string,
  ) {
    return this.areasService.findAll(floorId, deleted);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areasService.findOne(id);
  }

  @Patch(':id')
  @AdminOnly()
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areasService.update(id, updateAreaDto);
  }

  @Delete(':id')
  @AdminOnly()
  remove(@Param('id') id: string) {
    return this.areasService.remove(id);
  }
}
