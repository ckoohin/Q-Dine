import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class RegisterInputDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên đăng nhập không được bỏ trống' })
  @MinLength(3, { message: 'Tên đăng nhập chứa ít nhất chứa 3 ký tự' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Tên không được bỏ trống' })
  @MinLength(2, { message: 'Tên ít nhất chứa 2 ký tự' })
  fullName: string;

  @IsString()
  @IsNotEmpty({ message: 'Password không được để trống' })
  @MinLength(6, { message: 'Password phải có ít nhất 6 ký tự' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/, {
    message: 'Password phải chứa ít nhất một chữ hoa, một chữ thường và một số',
  })
  password!: string;

  @IsString()
  @IsNotEmpty({ message: 'Nhập lại mật khẩu không được để trống' })
  repassword: string;
}
