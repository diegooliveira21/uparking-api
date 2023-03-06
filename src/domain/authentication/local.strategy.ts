import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import AuthenticationService from "./authentication.service";
import User from "../../database/entity/user/user";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'email'
    })
  }

  async validate(email: User["email"], password: User["password"]) {
    const user = await this.authenticationService.userValidate(email, password)

    if (!user) return true

    return user
  }
}
