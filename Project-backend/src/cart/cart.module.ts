import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/users/user.module';
import { ProductService } from 'src/product/product.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/users/user.service';
import { CartController } from './cart.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
 imports: [ProductModule,UserModule,PrismaModule,AuthModule],
 controllers: [CartController],
 providers: [CartService, ProductService,PrismaService,UserService,AuthService,JwtService],
 exports: [CartModule]
})
export class CartModule {}
