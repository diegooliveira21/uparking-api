import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import AuthenticationService from "../authentication/authentication.service";
import { LoginPayload, LoginResponse, PREFIX } from "./authentication.type";
import { LocalGuard } from "./local.guard";

@Controller(PREFIX)
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService
  ) {}

  @UseGuards(LocalGuard)
  @Post('/login')
  login(@Body() payload: LoginPayload): LoginResponse {
    return this.authenticationService.userLogin(payload)
  }
}
