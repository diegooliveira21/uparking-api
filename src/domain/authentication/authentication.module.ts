import { Module } from '@nestjs/common';
import AuthenticationService from "./authentication.service";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { AuthenticationController } from "./authentication.controller";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.PASSWORD_SECRET,
      signOptions: { expiresIn: '15m' },
    })
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy, LocalStrategy],
  exports: [AuthenticationService]
})
export class AuthenticationModule {}
