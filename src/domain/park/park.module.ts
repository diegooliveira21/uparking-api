import { Module } from '@nestjs/common'
import { ParkingController } from "./parking/parking.controller";
import ParkingService from "./parking/parking.service";
import { AuthenticationModule } from "../authentication/authentication.module";

@Module({
  imports: [AuthenticationModule],
  controllers: [ParkingController],
  providers: [ParkingService],
  exports: []
})
export class ParkModule {}
