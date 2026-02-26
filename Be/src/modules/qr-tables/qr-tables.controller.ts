import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { QrTablesService } from './qr-tables.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';

@Controller('qr-tables')
export class QrTablesController {
  constructor(private readonly qrTablesService: QrTablesService) {}

  @Post(':tableId/open')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.STAFF)
  openTable(@Param('tableId') tableId: string) {
    return this.qrTablesService.openTable(tableId);
  }

  @Post(':tableId/checkout')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.STAFF)
  checkoutTable(@Param('tableId') tableId: string) {
    return this.qrTablesService.checkoutTable(tableId);
  }

  @Get('validate/:token')
  validateSession(@Param('token') token: string) {
    return this.qrTablesService.validateSession(token);
  }

  @Get(':tableId/sessions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.STAFF)
  findSessionsByTable(@Param('tableId') tableId: string) {
    return this.qrTablesService.findSessionsByTable(tableId);
  }
}
