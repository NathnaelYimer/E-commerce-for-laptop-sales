import { ForbiddenException, Injectable } from "@nestjs/common";
import { ProductService } from "src/product/product.service";
import { AdminDto } from "./dto";
import * as argon from 'argon2';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "src/product/dto";

@Injectable()
export class AdminService {
    constructor(private productService: ProductService,
        private prisma: PrismaService) {}
    async signIn(dto: AdminDto) {
        const user = await this.prisma.admin.findFirst({
          where : {
            username:dto.username,
          }
        }
        )
        if (!user) {
          throw new ForbiddenException 
          ('Credential not correct')
        }
    
        const pwMatches = await argon.verify(user.password,dto.password);
        if (!pwMatches) {
          throw new ForbiddenException ("Credentials not correct")
        }
        delete user.password;
        // const tokens = await this.getTokens(user.customer_id, user.email);
        // await this.updateRtHash(user.customer_id, tokens.refresh_token);
        // return tokens;
      }

      async signUp(dto: AdminDto) {
        const hash = await argon.hash(dto.password);
          const user = await this.prisma.admin.create({
            data: {
              username:dto.username,
              password: hash
            },
          });
    }

    async addProduct(dto: CreateProductDTO) {
        return this.productService.addProduct(dto);
    }

    async deleteProduct(dto: CreateProductDTO) {
        return this.productService.deleteProduct(dto);
    }

    async updateProduct(dto: CreateProductDTO) {
        return this.productService.updateProduct(dto);
    }

    async getallproducts() {
        return this.productService.getAllProducts();
    }
}

    