import { IsNotEmpty } from "class-validator";

export class CreateProductDTO {
    product_id: number;
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image_url: string;

    @IsNotEmpty()
    price: number;
  }