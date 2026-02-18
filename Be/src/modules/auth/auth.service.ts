import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDto, registerInputDto, responseUser } from './dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(dto: registerInputDto): Promise<responseUser> {
    const newUser = await this.usersService.create(dto);
    return newUser;
  }
  async login(dto: loginDto) {
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
  }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
