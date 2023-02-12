import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auth/common/guards';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';
import { AuthService } from './auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './admin/admin.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JwtModule.register({}),
    AuthModule,
    PrismaModule,
    ProductModule,
    UserModule,
    CartModule,
    AdminModule
  ],
  providers: [AppService,
    ProductService,
    UserService,
    AuthService,
    JwtService,
    CartService,
    AdminService,
  {
    provide: APP_GUARD,
    useClass: AtGuard,
  }
],
})
export class AppModule {}
