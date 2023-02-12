import { IsEmail, IsNotEmpty } from 'class-validator';

export class CartDto {
  @IsNotEmpty()
  customer_id: number;

  @IsNotEmpty()
  order_id: number;
  
@IsNotEmpty()
  total_amount: number;
}
