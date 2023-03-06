import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./domain/user/user.module";
import { AuthenticationModule } from "./domain/authentication/authentication.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
