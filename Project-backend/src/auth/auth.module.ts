import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [
    JwtModule.register({}),
    PrismaModule,
  ],
  controllers: [
    AuthController],
  providers: [AuthService,AtStrategy,RtStrategy,JwtService],
})
export class AuthModule {}
