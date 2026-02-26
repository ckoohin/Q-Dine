import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { FloorsService } from '../floors/floors.service';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
    private readonly floorsService: FloorsService,
  ) {}

  async create(dto: CreateAreaDto): Promise<Area> {
    return asyncHandleOperation(async () => {
      // Kiểm tra floor tồn tại
      const floor = await this.floorsService.findOne(dto.floorId);

      // Kiểm tra tên khu vực trùng trong cùng tầng
      const existing = await this.areaRepository.findOne({
        where: { name: dto.name, floorId: dto.floorId, isDeleted: false },
      });

      if (existing) {
        throw new ConflictException(
          `Khu vực "${dto.name}" đã tồn tại trên tầng "${floor.name}"`,
        );
      }

      // Kiểm tra số khu vực tối đa trên tầng
      const currentAreaCount = await this.areaRepository.count({
        where: { floorId: dto.floorId, isDeleted: false },
      });

      if (currentAreaCount >= floor.maxAreas) {
        throw new BadRequestException(
          `Tầng "${floor.name}" đã đạt giới hạn ${floor.maxAreas} khu vực. Không thể thêm khu vực mới`,
        );
      }

      const area = this.areaRepository.create({
        ...dto,
      });
      return await this.areaRepository.save(area);
    }, 'Lỗi khi tạo khu vực');
  }

  async findAll(floorId?: string, deleted?: string): Promise<Area[]> {
    return asyncHandleOperation(async () => {
      const where = {
        isDeleted: deleted?.trim() === 'true',
        floorId: floorId ?? undefined,
      };
      return await this.areaRepository.find({
        where,
        relations: ['floor'],
        order: { createdAt: 'ASC' },
      });
    }, 'Lỗi khi lấy danh sách khu vực');
  }

  async findOne(id: string): Promise<Area> {
    return asyncHandleOperation(async () => {
      const area = await this.areaRepository.findOne({
        where: { id, isDeleted: false },
        relations: ['floor'],
      });

      if (!area) {
        throw new NotFoundException(`Không tìm thấy khu vực với id ${id}`);
      }

      return area;
    }, 'Lỗi khi lấy chi tiết khu vực');
  }

  async update(id: string, dto: UpdateAreaDto): Promise<Area> {
    return asyncHandleOperation(async () => {
      const area = await this.areaRepository.findOne({
        where: { id, isDeleted: false },
        relations: ['floor'],
      });

      if (!area) {
        throw new NotFoundException(`Không tìm thấy khu vực với id ${id}`);
      }

      const floor = area.floor;

      // Kiểm tra tên trùng nếu đổi tên
      if (dto.name && dto.name !== area.name) {
        const existing = await this.areaRepository.findOne({
          where: {
            name: dto.name,
            floorId: area.floorId,
            isDeleted: false,
            id: Not(id),
          },
        });

        if (existing) {
          throw new ConflictException(
            `Khu vực "${dto.name}" đã tồn tại trên tầng "${floor.name}"`,
          );
        }
      }

      // Validate nếu thay đổi floorId
      if (dto.floorId && dto.floorId !== area.floorId) {
        const newFloor = await this.floorsService.findOne(dto.floorId);

        const currentAreaCount = await this.areaRepository.count({
          where: { floorId: dto.floorId, isDeleted: false },
        });

        if (currentAreaCount >= newFloor.maxAreas) {
          throw new BadRequestException(
            `Tầng "${newFloor.name}" đã đạt giới hạn ${newFloor.maxAreas} khu vực`,
          );
        }
      }

      await this.areaRepository.update(id, dto);

      const updatedArea = await this.areaRepository.findOne({
        where: { id },
        relations: ['floor'],
      });
      if (!updatedArea) {
        throw new NotFoundException(`Không tìm thấy khu vực với id ${id}`);
      }

      return updatedArea;
    }, 'Lỗi khi cập nhật khu vực');
  }

  async remove(id: string): Promise<Area> {
    return asyncHandleOperation(async () => {
      const area = await this.areaRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!area) {
        throw new NotFoundException(`Không tìm thấy khu vực với id ${id}`);
      }

      // Soft delete
      await this.areaRepository.update(id, { isDeleted: true });

      return area;
    }, 'Lỗi khi xóa khu vực');
  }
}
