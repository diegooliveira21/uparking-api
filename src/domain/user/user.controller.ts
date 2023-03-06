import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import UserService from './user.service';
import { PostUserPayload, PostUserResponse } from "./user.type";
import { JwtGuard } from "../authentication/jwt.guard";

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  postUser(@Body() payload: PostUserPayload): PostUserResponse {
    return this.userService.createUser(payload)
  }

  @UseGuards(JwtGuard)
  @Get()
  hello() {
    return 'Hello'
  }
}
