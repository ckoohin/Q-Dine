import { IsNotEmpty, IsString } from 'class-validator';

export class CheckoutTableDto {
  @IsString()
  @IsNotEmpty({ message: 'Session token không được để trống' })
  sessionToken!: string;
}
