import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    return asyncHandleOperation(async () => {
      const existing = await this.categoryRepository.findOne({
        where: { name: dto.name, isDeleted: false },
      });

      if (existing) {
        throw new ConflictException(
          `Danh mục với tên "${dto.name}" đã tồn tại`,
        );
      }

      const category = this.categoryRepository.create(dto);
      return await this.categoryRepository.save(category);
    }, 'Lỗi khi tạo danh mục');
  }

  async findAll(): Promise<Category[]> {
    return asyncHandleOperation(async () => {
      return await this.categoryRepository.find({
        where: { isDeleted: false },
      });
    }, 'Lỗi khi lấy danh sách danh mục');
  }

  async findOne(id: string): Promise<Category> {
    return asyncHandleOperation(async () => {
      const category = await this.categoryRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!category) {
        throw new NotFoundException(`Không tìm thấy danh mục với id ${id}`);
      }

      return category;
    }, 'Lỗi khi lấy chi tiết danh mục');
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    return asyncHandleOperation(async () => {
      const category = await this.categoryRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!category) {
        throw new NotFoundException(`Không tìm thấy danh mục với id ${id}`);
      }

      if (dto.name && dto.name !== category.name) {
        const duplicate = await this.categoryRepository.findOne({
          where: { name: dto.name, isDeleted: false },
        });

        if (duplicate) {
          throw new ConflictException(
            `Danh mục với tên "${dto.name}" đã tồn tại`,
          );
        }
      }

      await this.categoryRepository.update(id, dto);

      const updatedCategory = await this.categoryRepository.findOneBy({ id });
      if (!updatedCategory) {
        throw new NotFoundException(`Không tìm thấy danh mục với id ${id}`);
      }

      return updatedCategory;
    }, 'Lỗi khi cập nhật danh mục');
  }

  async remove(id: string): Promise<Category> {
    return asyncHandleOperation(async () => {
      const category = await this.categoryRepository.findOne({
        where: { id, isDeleted: false },
      });

      if (!category) {
        throw new NotFoundException(`Không tìm thấy danh mục với id ${id}`);
      }

      // Soft delete: chỉ đánh dấu isDeleted = true
      await this.categoryRepository.update(id, { isDeleted: true });

      return category;
    }, 'Lỗi khi xóa danh mục');
  }
}
