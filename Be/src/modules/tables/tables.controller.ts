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
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableStatus } from 'src/common/enums/table-status.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { AdminOnly } from '../auth/decorators/admin-only.decorator';

@Controller('tables')
@Auth()
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  @AdminOnly()
  create(@Body() createTableDto: CreateTableDto) {
    return this.tablesService.create(createTableDto);
  }

  @Get()
  findAll(
    @Query('status') status?: TableStatus,
    @Query('capacity') capacity?: number,
    @Query('deleted') isDeleted?: string,
  ) {
    return this.tablesService.findAll(status, capacity, isDeleted);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tablesService.findOne(id);
  }

  @Patch(':id')
  @AdminOnly()
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.tablesService.update(id, updateTableDto);
  }

  @Delete(':id')
  @AdminOnly()
  remove(@Param('id') id: string) {
    return this.tablesService.remove(id);
  }
}
