import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import { TableSession } from './entities/table-session.entity';
import { Table } from '../tables/entities/table.entity';
import { SessionStatus } from 'src/common/enums/session-status.enum';
import { TableStatus } from 'src/common/enums/table-status.enum';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class QrTablesService {
  constructor(
    @InjectRepository(TableSession)
    private readonly sessionRepository: Repository<TableSession>,

    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  /**
   * Mở bàn: tạo session mới, sinh token QR, đổi trạng thái bàn sang OCCUPIED
   */
  async openTable(tableId: string): Promise<TableSession> {
    return asyncHandleOperation(async () => {
      // Kiểm tra bàn tồn tại
      const table = await this.tableRepository.findOne({
        where: { id: tableId, isDeleted: false },
      });

      if (!table) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${tableId}`);
      }

      // Kiểm tra bàn đang trống
      if (table.status !== TableStatus.AVAILABLE) {
        throw new BadRequestException(
          `Bàn ${table.number} đang ở trạng thái ${table.status}, không thể mở`,
        );
      }

      // Kiểm tra không có session đang hoạt động
      const activeSession = await this.sessionRepository.findOne({
        where: { tableId, status: SessionStatus.ACTIVE },
      });

      if (activeSession) {
        throw new BadRequestException(
          `Bàn ${table.number} đã có phiên đang hoạt động`,
        );
      }

      // Tạo session mới với token
      const session = this.sessionRepository.create({
        tableId,
        sessionToken: randomUUID(),
        status: SessionStatus.ACTIVE,
      });

      const savedSession = await this.sessionRepository.save(session);

      // Đổi trạng thái bàn sang OCCUPIED
      await this.tableRepository.update(tableId, {
        status: TableStatus.OCCUPIED,
      });

      return savedSession;
    }, 'Lỗi khi mở bàn');
  }

  /**
   * Checkout bàn: đóng session, đổi trạng thái bàn sang CLEANING
   */
  async checkoutTable(tableId: string): Promise<TableSession> {
    return asyncHandleOperation(async () => {
      // Kiểm tra bàn tồn tại
      const table = await this.tableRepository.findOne({
        where: { id: tableId, isDeleted: false },
      });

      if (!table) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${tableId}`);
      }

      // Tìm session đang hoạt động
      const activeSession = await this.sessionRepository.findOne({
        where: { tableId, status: SessionStatus.ACTIVE },
      });

      if (!activeSession) {
        throw new BadRequestException(
          `Bàn ${table.number} không có phiên đang hoạt động`,
        );
      }

      // Đóng session
      await this.sessionRepository.update(activeSession.id, {
        status: SessionStatus.COMPLETED,
        completedAt: new Date(),
      });

      // Đổi trạng thái bàn sang CLEANING
      await this.tableRepository.update(tableId, {
        status: TableStatus.CLEANING,
      });

      const updatedSession = await this.sessionRepository.findOne({
        where: { id: activeSession.id },
      });

      if (!updatedSession) {
        throw new NotFoundException('Không tìm thấy session sau khi cập nhật');
      }

      return updatedSession;
    }, 'Lỗi khi checkout bàn');
  }

  /**
   * Xác thực session token (cho khách quét QR)
   */
  async validateSession(token: string): Promise<TableSession> {
    return asyncHandleOperation(async () => {
      const session = await this.sessionRepository.findOne({
        where: { sessionToken: token },
        relations: ['table'],
      });

      if (!session) {
        throw new NotFoundException('Session không tồn tại');
      }

      if (session.status !== SessionStatus.ACTIVE) {
        throw new BadRequestException('Session đã kết thúc');
      }

      return session;
    }, 'Lỗi khi xác thực session');
  }

  /**
   * Lấy lịch sử session của một bàn
   */
  async findSessionsByTable(tableId: string): Promise<TableSession[]> {
    return asyncHandleOperation(async () => {
      // Kiểm tra bàn tồn tại
      const table = await this.tableRepository.findOne({
        where: { id: tableId, isDeleted: false },
      });

      if (!table) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${tableId}`);
      }

      return await this.sessionRepository.find({
        where: { tableId },
        order: { createdAt: 'DESC' },
      });
    }, 'Lỗi khi lấy lịch sử session');
  }
}
