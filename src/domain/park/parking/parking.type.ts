import { ValidationError } from "@nestjs/class-validator";
import Parking from "../../../database/entity/parking/parking";
import { ErrorResponsePayload } from "../../../builder/error-response/error-response.type";

export const PREFIX = 'parking'

export type PostParkingPayload = Pick<Parking, 'name' | 'cnpj' | 'address' | 'phone'>
export type PostParkingResponse = Promise<Parking | ValidationError[]>

export type PutParkingPayload = Partial<Omit<PostParkingPayload, 'cnpj'>>
  & Pick<Parking, 'cnpj'>
export type PutParkingResponse = Promise<PostParkingResponse | ErrorResponsePayload>

export type DeleteParkingPayload = Pick<Parking, 'cnpj'>
export type DeleteParkingResponse = Promise<undefined | ErrorResponsePayload>

export type GetParkingPayload = Pick<Parking, 'cnpj'>
export type GetParkingResponse = Promise<Parking | ErrorResponsePayload>

export enum ErrorCode {
  PARKING_NOT_FOUND = 'parking-not-found'
}
