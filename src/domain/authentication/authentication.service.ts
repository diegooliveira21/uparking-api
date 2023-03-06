import { Injectable } from "@nestjs/common";
import User from "../../database/entity/user/user";
import userRepository from "../../database/entity/user/user.repository";
import Password from "../../helper/password/password";
import { JwtService } from "@nestjs/jwt";
import { LoginPayload, LoginResponse } from "./authentication.type";
import * as process from "process";

@Injectable()
export default class AuthenticationService {
  private password = new Password()

  constructor(private jwtService: JwtService) {}

  async userValidate(email: User['email'], password: User['password']) {
    const user = await userRepository.findOne({
      where: { email }
    })

    if (user && this.password.compare(password, user.password)) {
      const { password, ...data } = user

      return data
    }
  }

    async userLogin(user: LoginPayload): LoginResponse {
    const payload = {
      sub: user.email,
      password: user.password
    }

    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.PASSWORD_SECRET
      }),
    };
  }
}
