import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterInputDto, LoginDto, ResponseUserDto } from './dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { asyncHandleOperation } from 'src/common/utils/async-handle.utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(dto: RegisterInputDto): Promise<ResponseUserDto> {
    return asyncHandleOperation(async () => {
      if (dto.password !== dto.repassword) {
        throw new BadRequestException('Mật khẩu xác nhận không khớp');
      }

      const { repassword, ...userData } = dto;
      const newUser = await this.usersService.create(userData);
      return newUser;
    }, 'Lỗi khi đăng ký');
  }
  async login(dto: LoginDto) {
    return asyncHandleOperation(async () => {
      const user = await this.validateUser(dto.username, dto.password);
      if (!user) {
        throw new UnauthorizedException('Username hoặc password không đúng');
      }

      if (!user.isActive) {
        throw new UnauthorizedException('Tài khoản đã bị vô hiệu hóa');
      }

      await this.usersService.updateLastLogin(user.id);

      const token = this.jwtService.sign({
        sub: user.id,
        username: user.username,
        role: user.role,
      });

      const { password, ...result } = user;
      return {
        token,
        user: {
          ...result,
        },
      };
    }, 'Lỗi khi đăng nhập');
  }

  async validateUser(username: string, password: string) {
    return asyncHandleOperation(async () => {
      const user = await this.usersService.findByUsername(username);

      if (!user) {
        return null;
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return null;
      }

      return user;
    }, 'Lỗi khi xác thực người dùng');
  }
}
