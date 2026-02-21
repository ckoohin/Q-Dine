import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { StringValue } from 'ms';

const EXPIRES_IN = (process.env.JWT_EXPIRES_IN ?? '1d') as StringValue;
@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'hehehe',
      signOptions: {
        expiresIn: EXPIRES_IN,
      },
    }),
  ],
})
export class AuthModule {}
