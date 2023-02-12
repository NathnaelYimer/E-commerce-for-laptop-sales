import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from 'src/auth/common/decorators/public.decorator';
import { UserDto } from './dto/user.dto';


@Controller('auth')
export class UserController {
    constructor(private userService: UserService) { }
    
    @Public()
    @Post('signup')
    async createUser(@Body() dto: UserDto) {
      return this.userService.createUser(dto);
    }

    @Public()
    @Post('signin')
    async signIn(@Body() dto: UserDto) {
        return this.userService.signIn(dto);
    }

    @Public()
    @Get('getuser')
    async getUser(@Body() dto: UserDto) {
        return this.userService.getUser(dto)
    }
}