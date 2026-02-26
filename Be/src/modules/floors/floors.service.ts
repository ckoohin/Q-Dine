import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Floor } from './entities/floor.entity';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class FloorsService {
  constructor(
    @InjectRepository(Floor)
    private readonly floorRepository: Repository<Floor>,
  ) {}

  async create(dto: CreateFloorDto): Promise<Floor> {
    return asyncHandleOperation(async () => {
      // Kiểm tra tên tầng đã tồn tại chưa
      const existing = await this.floorRepository.findOne({
        where: { name: dto.name, isDeleted: false },
      });

      if (existing) {
        throw new ConflictException(`Tầng "${dto.name}" đã tồn tại`);
      }

      const floor = this.floorRepository.create(dto);
      return await this.floorRepository.save(floor);
    }, 'Lỗi khi tạo tầng');
  }

  async findAll(deleted?: string): Promise<Floor[]> {
    return asyncHandleOperation(async () => {
      const isDeleted = deleted === 'true';
      return await this.floorRepository.find({
        where: { isDeleted },
        relations: ['areas'],
        order: { createdAt: 'ASC' },
      });
    }, 'Lỗi khi lấy danh sách tầng');
  }

  async findOne(id: string): Promise<Floor> {
    return asyncHandleOperation(async () => {
      const floor = await this.floorRepository.findOne({
        where: { id, isDeleted: false },
        relations: ['areas'],
      });

      if (!floor) {
        throw new NotFoundException(`Không tìm thấy tầng với id ${id}`);
      }

      return floor;
    }, 'Lỗi khi lấy chi tiết tầng');
  }

  async update(id: string, dto: UpdateFloorDto): Promise<Floor> {
    return asyncHandleOperation(async () => {
      const floor = await this.floorRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!floor) {
        throw new NotFoundException(`Không tìm thấy tầng với id ${id}`);
      }

      // Kiểm tra tên trùng nếu đổi tên
      if (dto.name && dto.name !== floor.name) {
        const existing = await this.floorRepository.findOne({
          where: { name: dto.name, isDeleted: false, id: Not(id) },
        });

        if (existing) {
          throw new ConflictException(`Tầng "${dto.name}" đã tồn tại`);
        }
      }

      await this.floorRepository.update(id, dto);

      const updatedFloor = await this.floorRepository.findOne({
        where: { id },
        relations: ['areas'],
      });
      if (!updatedFloor) {
        throw new NotFoundException(`Không tìm thấy tầng với id ${id}`);
      }

      return updatedFloor;
    }, 'Lỗi khi cập nhật tầng');
  }

  async remove(id: string): Promise<Floor> {
    return asyncHandleOperation(async () => {
      const floor = await this.floorRepository.findOne({
        where: { id, isDeleted: false },
        relations: ['areas'],
      });

      if (!floor) {
        throw new NotFoundException(`Không tìm thấy tầng với id ${id}`);
      }

      // Kiểm tra có khu vực chưa bị xóa không
      const activeAreas = floor.areas?.filter((a) => !a.isDeleted) ?? [];
      if (activeAreas.length > 0) {
        throw new ConflictException(
          `Không thể xóa tầng "${floor.name}" vì còn ${activeAreas.length} khu vực đang hoạt động`,
        );
      }

      // Soft delete
      await this.floorRepository.update(id, { isDeleted: true });

      return floor;
    }, 'Lỗi khi xóa tầng');
  }
}
