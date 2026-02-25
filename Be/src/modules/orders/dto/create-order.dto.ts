import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateOrderItemDto {
  @IsString()
  @IsNotEmpty({ message: 'dishId không được để trống' })
  dishId!: string;

  @IsInt({ message: 'Số lượng phải là số nguyên' })
  @Min(1, { message: 'Số lượng phải ít nhất 1' })
  quantity!: number;

  @IsString()
  @IsOptional()
  notes?: string;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty({ message: 'Session token không được để trống' })
  sessionToken!: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Đơn hàng phải có ít nhất 1 món' })
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items!: CreateOrderItemDto[];

  @IsString()
  @IsOptional()
  notes?: string;
}
