import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateFloorDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên tầng không được để trống' })
  @MaxLength(100, { message: 'Tên tầng không được vượt quá 100 ký tự' })
  name!: string;

  @IsInt({ message: 'Số khu vực tối đa phải là số nguyên' })
  @Min(1, { message: 'Số khu vực tối đa phải ít nhất 1' })
  @Max(100, { message: 'Số khu vực tối đa không được vượt quá 100' })
  @IsOptional()
  maxAreas?: number;

  @IsInt({ message: 'Số bàn tối đa mỗi khu vực phải là số nguyên' })
  @Min(1, { message: 'Số bàn tối đa mỗi khu vực phải ít nhất 1' })
  @Max(500, { message: 'Số bàn tối đa mỗi khu vực không được vượt quá 500' })
  @IsOptional()
  maxTablesPerArea?: number;

  @IsInt({ message: 'Sức chứa tối đa mỗi khu vực phải là số nguyên' })
  @Min(1, { message: 'Sức chứa tối đa mỗi khu vực phải ít nhất 1' })
  @Max(1000, {
    message: 'Sức chứa tối đa mỗi khu vực không được vượt quá 1000',
  })
  @IsOptional()
  maxCapacityPerArea?: number;
}
