import { Controller, Get, Post, Param } from '@nestjs/common';
import { QrTablesService } from './qr-tables.service';
import { UserRole } from 'src/common/enums/user-role.enum';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('qr-tables')
export class QrTablesController {
  constructor(private readonly qrTablesService: QrTablesService) {}

  @Post(':tableId/open')
  @Auth(UserRole.ADMIN, UserRole.STAFF)
  openTable(@Param('tableId') tableId: string) {
    return this.qrTablesService.openTable(tableId);
  }

  @Post(':tableId/checkout')
  @Auth(UserRole.ADMIN, UserRole.STAFF)
  checkoutTable(@Param('tableId') tableId: string) {
    return this.qrTablesService.checkoutTable(tableId);
  }

  @Get('validate/:token')
  validateSession(@Param('token') token: string) {
    return this.qrTablesService.validateSession(token);
  }

  @Get(':tableId/sessions')
  @Auth(UserRole.ADMIN, UserRole.STAFF)
  findSessionsByTable(@Param('tableId') tableId: string) {
    return this.qrTablesService.findSessionsByTable(tableId);
  }
}
