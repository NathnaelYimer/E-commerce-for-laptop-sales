import { PassportStrategy } from "@nestjs/passport/dist";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from 'express'
import { Injectable } from "@nestjs/common";
import { JwtPayloadWithRt } from "../types/jwtPayloadWithRt.type";
import { JwtPayload } from "../types/jwtPayload.type";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy,'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret',
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload):  Promise<JwtPayloadWithRt>  {
    const refreshToken = req.get('authorization').replace('Bearer','').trim();
    return {
            ...payload,
            refreshToken,
        };
}
}
