import { Module } from '@nestjs/common';
import { UserService } from './user.service';
// import { UsersController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { UserController } from './user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  imports: [PrismaModule,AuthModule],
  controllers: [UserController],
  providers: [UserService,PrismaService,AuthService,JwtService],
})
export class UserModule {}