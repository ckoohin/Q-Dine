import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/common/enums/user-role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Request } from 'express';
import { AuthUser } from '../types/AuthRequest';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    console.log(requiredRoles);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as AuthUser;
    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    return requiredRoles.some((role) => user.role === role);
  }
}
