import { Test, TestingModule } from '@nestjs/testing';
import { QrTablesService } from './qr-tables.service';

describe('QrTablesService', () => {
  let service: QrTablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrTablesService],
    }).compile();

    service = module.get<QrTablesService>(QrTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
