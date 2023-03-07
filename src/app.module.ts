import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./domain/user/user.module";
import { AuthenticationModule } from "./domain/authentication/authentication.module";
import { ParkModule } from "./domain/park/park.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthenticationModule,
    ParkModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
