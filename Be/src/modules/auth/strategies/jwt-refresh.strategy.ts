import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptionsWithRequest } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../users/entities/user.entity';
import { JwtPayload } from '../types/JwtPayLoad';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    configService: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    const options: StrategyOptionsWithRequest = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET')!,
      passReqToCallback: true,
    };

    super(options);
  }

  async validate(
    req: Request,
    payload: JwtPayload,
  ): Promise<{ user: User; refreshToken: string }> {
    const authHeader = req.headers['authorization'];
    const refreshToken = authHeader?.replace('Bearer ', '').trim();

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token không tồn tại');
    }

    const user = await this.userRepository.findOne({
      where: { id: payload.sub, isActive: true },
    });

    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Phiên đăng nhập đã hết hạn');
    }

    const isRefreshTokenValid = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );

    if (!isRefreshTokenValid) {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }

    return {
      user,
      refreshToken,
    };
  }
}
