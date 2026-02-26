import { Test, TestingModule } from '@nestjs/testing';
import { QrTablesController } from './qr-tables.controller';
import { QrTablesService } from './qr-tables.service';

describe('QrTablesController', () => {
  let controller: QrTablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrTablesController],
      providers: [QrTablesService],
    }).compile();

    controller = module.get<QrTablesController>(QrTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
