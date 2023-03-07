import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import ParkingService from './parking.service';
import {
  PREFIX,
  DeleteParkingPayload,
  DeleteParkingResponse,
  GetParkingPayload,
  GetParkingResponse,
  PostParkingPayload,
  PostParkingResponse,
  PutParkingPayload,
  PutParkingResponse
} from "./parking.type";
import { JwtGuard } from "../../authentication/jwt.guard";

@Controller(PREFIX)
export class ParkingController {
  constructor(
    private readonly parkingService: ParkingService
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  postParking(@Body() payload: PostParkingPayload): PostParkingResponse {
    return this.parkingService.create(payload)
  }

  @UseGuards(JwtGuard)
  @Put()
  putParking(@Body() payload: PutParkingPayload): PutParkingResponse {
    return this.parkingService.update(payload)
  }

  @UseGuards(JwtGuard)
  @Delete(':cnpj')
  deleteParking(@Param() payload: DeleteParkingPayload): DeleteParkingResponse {
    return this.parkingService.remove(payload)
  }

  @UseGuards(JwtGuard)
  @Get(':cnpj')
  getParking(@Param() payload: GetParkingPayload): GetParkingResponse {
    return this.parkingService.detail(payload)
  }
}
