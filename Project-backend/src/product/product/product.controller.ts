import { Controller, Post, Get, Put, Delete, Body, Param, Query, NotFoundException, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Public } from 'src/auth/common/decorators/public.decorator';
import { AtGuard } from 'src/auth/common/guards';

@UseGuards(AtGuard)
@Controller('store/products')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Public()
  @Get('getallproducts')
  async getProducts() {
      const allProducts = await this.productService.getAllProducts();
      return allProducts
    }

  @Public()
  @Get('getproduct')
  async getProduct(@Body('id') id: number) {
    console.log()
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }

  @Public()
  @Post('addproduct')
  async addProduct(@Body() createProductDTO: CreateProductDTO,@Req() req: Request) {
    const product = await this.productService.addProduct(createProductDTO);
    return product;
  }

  @Public()
  @Put('updateproduct')
  async updateProduct(@Body('id') id: number, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.updateProduct(createProductDTO);
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }

  @Public()
  @Delete('deleteproduct')
  async deleteProduct(@Body('id') dto: CreateProductDTO) {
    const product = await this.productService.deleteProduct(dto);
    if (!product) throw new NotFoundException('Product does not exist');
    return product;
  }
}