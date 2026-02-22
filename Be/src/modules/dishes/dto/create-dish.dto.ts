import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
  MaxLength,
  Min,
} from 'class-validator';
import { DishStatus } from 'src/common/enums/dish-status.enum';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên món ăn không được để trống' })
  @MaxLength(100, { message: 'Tên món ăn không được vượt quá 100 ký tự' })
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'Giá phải là một số' })
  @Min(0, { message: 'Giá không được âm' })
  @IsNotEmpty({ message: 'Giá không được để trống' })
  price!: number;

  @IsEnum(DishStatus, {
    message: 'Trạng thái phải là AVAILABLE, OUT_OF_STOCK hoặc INACTIVE',
  })
  @IsOptional()
  status?: DishStatus;

  @IsUUID('4', { message: 'categoryId phải là UUID hợp lệ' })
  @IsOptional()
  categoryId?: string;

  @IsUrl({}, { message: 'imageUrl phải là URL hợp lệ' })
  @IsOptional()
  imageUrl?: string;
}
