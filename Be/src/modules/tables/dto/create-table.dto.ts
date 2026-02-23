import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { TableStatus } from 'src/common/enums/table-status.enum';

export class CreateTableDto {
  @IsString()
  @IsNotEmpty({ message: 'Số bàn không được để trống' })
  @MaxLength(50, { message: 'Số bàn không được vượt quá 50 ký tự' })
  number!: string;

  @IsInt({ message: 'Sức chứa phải là số nguyên' })
  @Min(1, { message: 'Sức chứa phải ít nhất 1' })
  @IsNotEmpty({ message: 'Sức chứa không được để trống' })
  capacity!: number;

  @IsEnum(TableStatus, {
    message: 'Trạng thái phải là AVAILABLE, RESERVED, OCCUPIED hoặc CLEANING',
  })
  @IsOptional()
  status?: TableStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}
