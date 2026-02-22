import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './entities/dish.entity';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { DishStatus } from 'src/common/enums/dish-status.enum';
import { UserRole } from 'src/common/enums/user-role.enum';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async create(dto: CreateDishDto): Promise<Dish> {
    return asyncHandleOperation(async () => {
      const dish = this.dishRepository.create(dto);
      return await this.dishRepository.save(dish);
    }, 'Lỗi khi tạo món ăn');
  }

  async findAll(role: UserRole): Promise<Dish[]> {
    return asyncHandleOperation(async () => {
      if (role === UserRole.ADMIN) {
        // Admin thấy tất cả món (trừ đã xóa)
        return await this.dishRepository.find({
          where: { isDeleted: false },
        });
      }

      // Staff / Khách chỉ thấy món AVAILABLE
      return await this.dishRepository.find({
        where: { isDeleted: false, status: DishStatus.AVAILABLE },
      });
    }, 'Lỗi khi lấy danh sách món ăn');
  }

  async findOne(id: string): Promise<Dish> {
    return asyncHandleOperation(async () => {
      const dish = await this.dishRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!dish) {
        throw new NotFoundException(`Không tìm thấy món ăn với id ${id}`);
      }

      return dish;
    }, 'Lỗi khi lấy chi tiết món ăn');
  }

  async update(id: string, dto: UpdateDishDto): Promise<Dish> {
    return asyncHandleOperation(async () => {
      const dish = await this.dishRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!dish) {
        throw new NotFoundException(`Không tìm thấy món ăn với id ${id}`);
      }

      await this.dishRepository.update(id, dto);

      const updatedDish = await this.dishRepository.findOneBy({ id });
      if (!updatedDish) {
        throw new NotFoundException(`Không tìm thấy món ăn với id ${id}`);
      }

      return updatedDish;
    }, 'Lỗi khi cập nhật món ăn');
  }

  async remove(id: string): Promise<Dish> {
    return asyncHandleOperation(async () => {
      const dish = await this.dishRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!dish) {
        throw new NotFoundException(`Không tìm thấy món ăn với id ${id}`);
      }

      // Soft delete: chỉ đánh dấu isDeleted = true
      await this.dishRepository.update(id, { isDeleted: true });

      return dish;
    }, 'Lỗi khi xóa món ăn');
  }
}
