import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { Area } from './entities/area.entity';
import { FloorsModule } from '../floors/floors.module';

@Module({
  imports: [TypeOrmModule.forFeature([Area]), FloorsModule],
  controllers: [AreasController],
  providers: [AreasService],
  exports: [AreasService, TypeOrmModule],
})
export class AreasModule {}
