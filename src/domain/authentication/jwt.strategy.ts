import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import AuthenticationService from "./authentication.service";
import { JwtPayload } from "./authentication.type";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.PASSWORD_SECRET,
    })
  }

  async validate(jwtPayload: JwtPayload) {
    const user = await this.authenticationService.userValidate(jwtPayload.sub, jwtPayload.password);

    if (!user) throw new UnauthorizedException()

    return user
  }
}
