import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { DishesModule } from './modules/dishes/dishes.module';
import { TablesModule } from './modules/tables/tables.module';
import { QrTablesModule } from './modules/qr-tables/qr-tables.module';
import { OrdersModule } from './modules/orders/orders.module';
import { FloorsModule } from './modules/floors/floors.module';
import { AreasModule } from './modules/areas/areas.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { StaffsModule } from './modules/staffs/staffs.module';
import mailConfig from './config/mail.config';
import { MailModule } from './common/mail/mail.module';
import { SocketModule } from "./modules/socket/socket.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [mailConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getDatabaseConfig,
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    DishesModule,
    TablesModule,
    QrTablesModule,
    OrdersModule,
    FloorsModule,
    AreasModule,
    CategoriesModule,
    StaffsModule,
    MailModule,
    SocketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
