import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, DeepPartial } from 'typeorm';

import { Staff } from './entities/staff.entity';
import { User } from '../users/entities/user.entity';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { StaffResponseDto } from './dto/staff-response.dto';
import { UserRole } from '../../common/enums/user-role.enum';
import { asyncHandleOperation } from '../../common/utils/async-handle.utils';
import { MailService } from 'src/common/mail/mail.service';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly dataSource: DataSource,
    private readonly mailService: MailService,
  ) {}

  private generateTempPassword(length = 10): string {
    const chars =
      'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789@#$!';
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length)),
    ).join('');
  }

  private toResponseDto(staff: Staff & { user: User }): StaffResponseDto {
    const { user, ...staffData } = staff;
    const { password, ...userWithoutPassword } = user;

    return {
      ...staffData,
      user: userWithoutPassword,
    };
  }

  async create(dto: CreateStaffDto): Promise<StaffResponseDto> {
    return asyncHandleOperation<StaffResponseDto>(async () => {
      const existingUser = await this.userRepository.findOne({
        where: { email: dto.email },
      });
      if (existingUser) {
        throw new ConflictException('Email đã được sử dụng');
      }

      const tempPassword = this.generateTempPassword();

      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        const newUser = queryRunner.manager.create(User, {
          email: dto.email,
          fullName: dto.fullName,
          password: tempPassword,
          role: UserRole.STAFF,
          isActive: true,
        });
        const savedUser = await queryRunner.manager.save(User, newUser);

        const staffData: DeepPartial<Staff> = {
          userId: savedUser.id,
          phone: dto.phone,
          department: dto.department,
          position: dto.position,
          dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
          address: dto.address,
        };

        const staff = queryRunner.manager.create(Staff, staffData);
        const savedStaff = await queryRunner.manager.save(Staff, staff);

        await queryRunner.commitTransaction();

        try {
          await this.mailService.sendStaffWelcomeEmail(
            dto.email,
            dto.fullName,
            tempPassword,
          );
        } catch (mailError) {
          console.error('Lỗi gửi email, nhưng staff đã được tạo:', mailError);
        }

        //Load lại vs relation
        const result = await this.staffRepository.findOne({
          where: { id: savedStaff.id },
          relations: ['user'],
        });

        if (!result) {
          throw new NotFoundException('Không tìm thấy nhân viên');
        }

        return this.toResponseDto(result);
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      } finally {
        await queryRunner.release();
      }
    }, 'Lỗi khi tạo nhân viên');
  }

  async findAll(): Promise<StaffResponseDto[]> {
    return asyncHandleOperation<StaffResponseDto[]>(async () => {
      const staffs = await this.staffRepository.find({
        relations: ['user'],
      });

      return staffs.map((staff) => this.toResponseDto(staff));
    }, 'Lỗi khi lấy danh sách nhân viên');
  }

  async findOne(id: string): Promise<StaffResponseDto> {
    return asyncHandleOperation<StaffResponseDto>(async () => {
      const staff = await this.staffRepository.findOne({
        where: { id },
        relations: ['user'],
      });
      if (!staff) {
        throw new NotFoundException(`Không tìm thấy nhân viên với id ${id}`);
      }

      return this.toResponseDto(staff);
    }, 'Lỗi khi lấy thông tin nhân viên');
  }

  async update(id: string, dto: UpdateStaffDto): Promise<StaffResponseDto> {
    return asyncHandleOperation(async () => {
      const staff = await this.staffRepository.findOne({
        where: { id },
        relations: ['user'],
      });
      if (!staff) {
        throw new NotFoundException(`Không tìm thấy nhân viên với id ${id}`);
      }

      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        //Upd user nếu có thay đổi fullName/email
        if (dto.fullName || dto.email) {
          const userUpdate: Partial<User> = {};
          if (dto.fullName) userUpdate.fullName = dto.fullName;
          if (dto.email) {
            const emailExists = await this.userRepository.findOne({
              where: { email: dto.email },
            });
            if (emailExists && emailExists.id !== staff.userId) {
              throw new ConflictException('Email đã được sử dụng');
            }
            userUpdate.email = dto.email;
          }
          await queryRunner.manager.update(User, staff.userId, userUpdate);
        }

        const { fullName, email, ...staffFields } = dto;
        const staffUpdate: Partial<Staff> = {};
        if (staffFields.phone !== undefined)
          staffUpdate.phone = staffFields.phone;
        if (staffFields.department !== undefined)
          staffUpdate.department = staffFields.department;
        if (staffFields.position !== undefined)
          staffUpdate.position = staffFields.position;
        if (staffFields.dateOfBirth !== undefined)
          staffUpdate.dateOfBirth = new Date(staffFields.dateOfBirth);
        if (staffFields.address !== undefined)
          staffUpdate.address = staffFields.address;

        if (Object.keys(staffUpdate).length > 0) {
          await queryRunner.manager.update(Staff, id, staffUpdate);
        }

        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      } finally {
        await queryRunner.release();
      }

      return this.findOne(id);
    }, 'Lỗi khi cập nhật nhân viên');
  }

  async remove(id: string): Promise<StaffResponseDto> {
    return asyncHandleOperation<StaffResponseDto>(async () => {
      const staff = await this.staffRepository.findOne({
        where: { id },
        relations: ['user'],
      });
      if (!staff) {
        throw new NotFoundException(`Không tìm thấy nhân viên với id ${id}`);
      }

      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        await queryRunner.manager.delete(Staff, id);
        await queryRunner.manager.delete(User, staff.userId);
        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      } finally {
        await queryRunner.release();
      }

      return this.toResponseDto(staff);
    }, 'Lỗi khi xóa nhân viên');
  }
}
