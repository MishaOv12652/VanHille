import { IsEmail, IsString, MinLength, IsIn, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsIn(['admin', 'educator', 'student'])
  role?: string;
}
