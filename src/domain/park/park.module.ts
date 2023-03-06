import { Module } from '@nestjs/common'
import { ParkingController } from "./parking/parking.controller";
import ParkingService from "./parking/parking.service";

@Module({
  imports: [AuthenticationModule],
  controllers: [ParkingController],
  providers: [ParkingService],
  exports: []
})
export class AuthenticationModule {}
