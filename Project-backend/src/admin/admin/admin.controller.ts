import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Public } from "src/auth/common/decorators/public.decorator";
import { AdminDto } from "./dto";
import { AdminService } from "./admin.service";
import { CreateProductDTO } from "src/product/dto";

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Public()
    @Post('signin')
    async signIn(@Body() dto: AdminDto) {
        return this.adminService.signIn(dto);
    }

    @Public()
    @Post('signup')
    async signUp(@Body() dto: AdminDto) {
        return this.adminService.signUp(dto);
    }

    @Public()
    @Post('addproduct')
    async addProduct(@Body()  dto: CreateProductDTO) {
        return this.adminService.addProduct(dto);
    }

    @Public()
    @Get('getallproducts')
    async getallProducts() {
        return this.adminService.getallproducts();
    }

    @Public()
    @Put('updateproduct') 
    async updateProduct(@Body() dto: CreateProductDTO) {
        return this.updateProduct(dto)
    }

    @Public()
    @Delete('deleteproduct')
    async deleteProduct(@Body() dto: CreateProductDTO) {
        return this.deleteProduct(dto);
    }
}