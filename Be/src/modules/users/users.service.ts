import {
  Injectable,
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<Omit<User, 'password'>> {
    // Kiểm tra username đã tồn tại chưa
    const existingUser = await this.userRepository.findOne({
      where: { username: dto.username },
    });

    if (existingUser) {
      throw new ConflictException('Username đã tồn tại');
    }

    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      // Tạo user mới
      const user = this.userRepository.create({
        ...dto,
        password: hashedPassword,
      });

      const savedUser = await this.userRepository.save(user);

      // Loại bỏ password khỏi response
      const { password: _password, ...result } = savedUser;
      return result;
    } catch {
      throw new InternalServerErrorException('Lỗi khi tạo user');
    }
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    const users = await this.userRepository.find();
    return users.map(({ password, ...user }) => user);
  }

  async findOne(id: number): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`Không tìm thấy user với id ${id}`);
    }
    const { password, ...result } = user;
    return result;
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .addSelect('user.password')
      .getOne();
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`Không tìm thấy user với id ${id}`);
    }

    // Nếu cập nhật password, hash lại
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    await this.userRepository.update(id, updateUserDto);
    const updatedUser = await this.userRepository.findOneBy({ id });
    if (!updatedUser) {
      throw new NotFoundException(`Không tìm thấy user với id ${id}`);
    }
    const { password, ...result } = updatedUser;
    return result;
  }

  async updateLastLogin(id: number): Promise<void> {
    await this.userRepository.update(id, { lastLogin: new Date() });
  }

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Không tìm thấy user với id ${id}`);
    }
  }
}
