import { IsNotEmpty } from "class-validator";

export class AdminDto {
    @IsNotEmpty()
    username : string

    @IsNotEmpty()
    password: string
}