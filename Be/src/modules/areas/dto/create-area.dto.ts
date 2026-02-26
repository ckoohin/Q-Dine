import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateAreaDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên khu vực không được để trống' })
  @MaxLength(100, { message: 'Tên khu vực không được vượt quá 100 ký tự' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'ID tầng không được để trống' })
  floorId!: string;

  @IsInt({ message: 'Số bàn tối đa phải là số nguyên' })
  @Min(1, { message: 'Số bàn tối đa phải ít nhất 1' })
  @IsOptional()
  maxTables?: number;

  @IsInt({ message: 'Sức chứa tối đa phải là số nguyên' })
  @Min(1, { message: 'Sức chứa tối đa phải ít nhất 1' })
  @IsOptional()
  maxCapacity?: number;
}
