import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Table } from './entities/table.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableStatus } from 'src/common/enums/table-status.enum';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  async create(dto: CreateTableDto): Promise<Table> {
    return asyncHandleOperation(async () => {
      // Kiểm tra số bàn đã tồn tại chưa
      const existing = await this.tableRepository.findOne({
        where: { number: dto.number, isDeleted: false },
      });

      if (existing) {
        throw new ConflictException(`Bàn số ${dto.number} đã tồn tại`);
      }

      const table = this.tableRepository.create(dto);
      return await this.tableRepository.save(table);
    }, 'Lỗi khi tạo bàn');
  }

  async findAll(
    status?: TableStatus,
    capacity?: number,
    deleted?: string,
  ): Promise<Table[]> {
    return asyncHandleOperation(async () => {
      const where = {
        isDeleted: deleted === 'true' ? true : false,
        status: status ?? undefined,
        capacity: capacity ?? undefined,
      };

      return await this.tableRepository.find({ where });
    }, 'Lỗi khi lấy danh sách bàn');
  }

  async findOne(id: string): Promise<Table> {
    return asyncHandleOperation(async () => {
      const table = await this.tableRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!table) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${id}`);
      }

      return table;
    }, 'Lỗi khi lấy chi tiết bàn');
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    return asyncHandleOperation(async () => {
      const table = await this.tableRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!table) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${id}`);
      }

      // Kiểm tra số bàn trùng nếu đổi số bàn
      if (dto.number && dto.number !== table.number) {
        const existing = await this.tableRepository.findOne({
          where: { number: dto.number, isDeleted: false, id: Not(id) },
        });

        if (existing) {
          throw new ConflictException(`Bàn số ${dto.number} đã tồn tại`);
        }
      }

      await this.tableRepository.update(id, dto);

      const updatedTable = await this.tableRepository.findOneBy({ id });
      if (!updatedTable) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${id}`);
      }

      return updatedTable;
    }, 'Lỗi khi cập nhật bàn');
  }

  async remove(id: string): Promise<Table> {
    return asyncHandleOperation(async () => {
      const table = await this.tableRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!table) {
        throw new NotFoundException(`Không tìm thấy bàn với id ${id}`);
      }

      // Soft delete: chỉ đánh dấu isDeleted = true
      await this.tableRepository.update(id, { isDeleted: true });

      return table;
    }, 'Lỗi khi xóa bàn');
  }
}
