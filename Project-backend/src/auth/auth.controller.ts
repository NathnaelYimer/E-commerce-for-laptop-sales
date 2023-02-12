import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { UseGuards } from '@nestjs/common/decorators';
import { AtGuard, RtGuard } from './common/guards';
import { GetCurrentUser, GetCurrentUserId } from './common/decorators';
import { Public } from './common/decorators/public.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Public()
  @Post('signup')

  signUp(@Body() dto: AuthDto) {
    console.log(dto)
    return this.authService.signUp(dto);
  }

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signIn(dto);
  }

  @UseGuards(AtGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() UserId: number) {
    console.log(UserId)
    return this.authService.logout(UserId);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshtoken(@GetCurrentUserId() UserId: number ,
   @GetCurrentUser() refreshToken : string): Promise<Tokens> {
    return this.authService.refreshtoken(UserId, refreshToken);
  }
}


