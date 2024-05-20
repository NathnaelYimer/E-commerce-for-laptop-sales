import { ForbiddenException, Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Tokens } from './types';
import { UserService } from 'src/users/user.service';

@Injectable({})
export class AuthService {
  private userService: UserService;
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwtService: JwtService,
    ) {}

  async signUp(dto: AuthDto): Promise<Tokens> {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.customer.create({
        data: {
          first_name: dto.first_name,
          last_name: dto.last_name,
          email: dto.email,
          password:hash,
        },
      });
      delete user.password;
      const tokens = await this.getTokens(user.customer_id, user.email);
      await this.updateRtHash(user.customer_id,tokens.refresh_token);
      return tokens;

    } catch(error) {
      if (error instanceof PrismaClientKnownRequestError){
        if (error.code == 'P2002') {
          throw new ForbiddenException(
            'Credentials taken'
          )
        }
      }
      throw error;
    }
  }
 
  async signIn(dto: AuthDto) {
    const user = await this.prisma.customer.findUnique({
      where : {
        email: dto.email,
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
    const tokens = await this.getTokens(user.customer_id, user.email);
    await this.updateRtHash(user.customer_id, tokens.refresh_token);
    return tokens;
  }

  async getTokens (userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync( 
        {
          sub: userId,
          email
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15
        }
        ),
        this.jwtService.signAsync(
          {
            sub: userId,
            email
          },
          {
            secret: 'rt-secret',
            expiresIn: 60 * 60 * 24 * 7
          }
        )
    ])
    return {
      access_token : at,
      refresh_token: rt,
    }

  }

//   async validateUser(email: string, password: string): Promise<any> {
//     const user = await this.userService.getUser(email);
//     if (!user) return null;
//     const passwordValid = await argon.verify(password, user.password)
//     if (!user) {
//         throw new NotAcceptableException('could not find the user');
//     }
//     if (user && passwordValid) {
//         return user;
//     }
//     return null;
// }

  async updateRtHash (UserId: number, rt: string) {
    const hash = await argon.hash(rt);
    await this.prisma.customer.update({
      where: {
        customer_id: UserId,
      },
      data: {
        hashedRt: hash,
      }
    })
  }
  async logout (UserId: number) {
    const user = this.prisma.customer.updateMany({
      where: {
        customer_id: UserId,
        hashedRt: {
          not : null,
        }
      },
      data: {
        hashedRt: null,
      }
    })
  }

  async refreshtoken (UserId: number, rt: string) {
    const user = await this.prisma.customer.findUnique({
      where: {
        customer_id: UserId,
      }
    })
    if (!user) {
      throw new ForbiddenException ("Acess denied")
    }

    const rMatches = await argon.verify(rt,user.hashedRt);
    if (!rMatches) 
      throw new ForbiddenException ("Acess Denied")
      
    const tokens = await this.getTokens(user.customer_id, user.email);
    await this.updateRtHash(user.customer_id, tokens.refresh_token);
    return tokens;
  }
}
