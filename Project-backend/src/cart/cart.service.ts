import { Injectable } from "@nestjs/common/decorators";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "src/product/dto";
import { ProductService } from "src/product/product.service";

@Injectable()
export class CartService {
    constructor (
        private productServie: ProductService,
        private prisma: PrismaService,
        private authService: AuthService
        ) {}
    async addToCart(userId: number, product_id: number){
        const currentCart = await this.prisma.cart.findFirst({
            where: {
                customer_id: userId,
            }
        })
        let currentCartId = currentCart.cart_id;
        if (!currentCart){
            currentCartId = (await this.createCart(userId)).cart_id;
        } else {
            currentCartId = currentCart['cart_id']
        }
        const product = await this.productServie.getProduct(product_id);
        const productPrice = product['price'];

        const curretProduct  = await this.prisma.items_in_cart.create({
            data : {
                cart_id: currentCartId,
                product_id: product_id,
                num_of_item: 1,
            }
        })

        return curretProduct;
        }
    
    async createCart(userId: number) {
        const newCart = await this.prisma.cart.create({
            data : {
                customer_id: userId,
                order_id: 5,
                total_amount: 0,
            }
        })

        return newCart
    }

    async viewCart(userId: number) {
        const currentCart = await this.prisma.cart.findFirst({
            where: {
                customer_id: userId,
            }
        })
        let currentCartId = currentCart.cart_id;
        if (!currentCart){
            currentCartId = (await this.createCart(userId)).cart_id;
        } else {
            currentCartId = currentCart['cart_id']
        }
        const selectedItems = this.prisma.items_in_cart.findMany({
            where: {
                cart_id: currentCartId
            }
        })
        return selectedItems

    }
    
}
