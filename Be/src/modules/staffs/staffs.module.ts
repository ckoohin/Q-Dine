import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffsController } from './staffs.controller';
import { StaffsService } from './staffs.service';
import { Staff } from './entities/staff.entity';
import { User } from '../users/entities/user.entity';
import { MailModule } from 'src/common/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([Staff, User]), MailModule],
  controllers: [StaffsController],
  providers: [StaffsService],
  exports: [StaffsService],
})
export class StaffsModule {}
