import { IsEmail, IsNotEmpty } from 'class-validator';

export class  UserDto {
  @IsNotEmpty()
  first_name: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  last_name: string;

  @IsNotEmpty()
  password: string;
}