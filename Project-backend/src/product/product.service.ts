import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async getProduct(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
        where: {
            product_id: id,
        }
    })
    return product;
  }

  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = await this.prisma.product.create({
        data: {
            name: createProductDTO.name,
            image_url: createProductDTO.image_url,
            description: createProductDTO.description,
            price: createProductDTO.price,
        }
    })
    return newProduct;
  }

  async updateProduct(dto: CreateProductDTO): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
        where : {
            product_id: dto.product_id,
        },
        data: {
            price: dto.price,
        }
    })
    return updatedProduct;
  }

  async deleteProduct(dto: CreateProductDTO): Promise<any> {
    const deletedProduct = await this.prisma.product.delete({
        where: {
            product_id: dto.product_id,
        }
    })
    return deletedProduct;
  }
}

