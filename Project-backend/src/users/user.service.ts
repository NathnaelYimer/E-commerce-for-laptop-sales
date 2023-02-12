import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from './dto/user.dto';
import { Tokens } from 'src/auth/types';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private authService: AuthService,private prisma: PrismaService) { }
    async createUser(dto: UserDto): Promise<Tokens> {
        return this.authService.signUp(dto)
    }

    async signIn  (dto: UserDto) {
        return this.authService.signIn(dto);
    }
    async getUser(dto: UserDto): Promise<UserDto> {
        const user = await this.prisma.customer.findUnique({
            where : {
                email: dto.email
            }
        })
        return user
    }
}
