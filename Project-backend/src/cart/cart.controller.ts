import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common/decorators";
import { Public } from "src/auth/common/decorators/public.decorator";
import { CartService } from "./cart.service";
import { GetCurrentUserId } from "src/auth/common/decorators";
import { AtGuard } from "src/auth/common/guards";
import { CreateProductDTO } from "src/product/dto";
import { ProductIdDto } from "./dto";

@UseGuards(AtGuard)
@Controller('cart')
export class CartController {
    constructor (private cartService: CartService) {}

    // @UseGuards(AtGuard)
    @Public()
    @Post('add')
    async addTocart(@GetCurrentUserId() id: number, @Body() dto: ProductIdDto) {
        return this.cartService.addToCart(id,dto.product_id)    
    }

    @UseGuards(AtGuard)
    @Public()
    @Get('viewitems')
    async viewCart(@GetCurrentUserId() id: number) {
        return this.cartService.viewCart(id)
    }
}
