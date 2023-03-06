import { Injectable } from "@nestjs/common";
import Parking from "../../../database/entity/parking/parking";
import {
  DeleteParkingPayload, DeleteParkingResponse,
  ErrorCode, GetParkingPayload, GetParkingResponse,
  PostParkingPayload,
  PostParkingResponse,
  PutParkingPayload,
  PutParkingResponse
} from "./parking.type";
import { validate } from "@nestjs/class-validator";
import parkingRepository from "../../../database/entity/parking/parking.repository";
import ErrorResponse from "../../../builder/error-response/error-response";

@Injectable()
export default class ParkingService {
  async create(payload: PostParkingPayload): PostParkingResponse {
    try {
      const parking = new Parking()

      parking.name = payload.name
      parking.cnpj = payload.cnpj
      parking.address = payload.address
      parking.phone = payload.phone

      const errors = await validate(parking)
      if (errors.length) return errors

     return parkingRepository.save(parking)
    } catch (exception) {
      return exception
    }
  }

  async update(payload: PutParkingPayload): PutParkingResponse {
    try {
      const parking = await parkingRepository.findOneBy({ cnpj: payload.cnpj })

      if (!parking) return new ErrorResponse()
        .setCode(ErrorCode.PARKING_NOT_FOUND)
        .build()

      if (payload.name) { parking.name = payload.name }
      if (payload.cnpj) { parking.name = payload.cnpj }
      if (payload.address) { parking.name = payload.address }
      if (payload.phone) { parking.name = payload.phone }

      const errors = await validate(parking)
      if (errors.length) return errors

     await parkingRepository.update({ cnpj: parking.cnpj }, parking)
    } catch (exception) {
      return exception
    }
  }

  async remove(payload: DeleteParkingPayload): DeleteParkingResponse {
    try {
      const parking = await parkingRepository.findOneBy({ cnpj: payload.cnpj })

      if (!parking) return new ErrorResponse()
        .setCode(ErrorCode.PARKING_NOT_FOUND)
        .build()

      await parkingRepository.remove(parking)
    } catch (exception) {
      return exception
    }
  }

  async detail(payload: GetParkingPayload): GetParkingResponse {
    try {
      const parking = await parkingRepository.findOneBy({ cnpj: payload.cnpj })

      if (!parking) return new ErrorResponse()
        .setCode(ErrorCode.PARKING_NOT_FOUND)
        .build()

      return parking
    } catch (exception) {
      return exception
    }
  }
}
