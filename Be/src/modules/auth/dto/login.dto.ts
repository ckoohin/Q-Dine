import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên đăng nhập không được bỏ trống' })
  @MinLength(3, { message: 'Tên đăng nhập chứa ít nhất chứa 3 ký tự' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @MaxLength(50, { message: 'Mật khẩu không dài quá 50 ký tự' })
  @MinLength(6, { message: 'Mật khẩu tối thiểu 6 ký tự' })
  password: string;
}
