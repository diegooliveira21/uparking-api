import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import Parking from "../parking/parking";
import { Type } from "../vehicle/vehicle.type";
import Customer from "../customer/customer";

@Entity()
export default class Vacancy {
  @PrimaryColumn({
    unique: true
  })
  name: string

  @Column({
    type: 'enum',
    enum: Type,
  })
  type: Type

  @ManyToOne(
    () => Customer,
    customer => customer.vacancies
  )
  customer: number | null

  @ManyToOne(
    () => Parking,
    parking => parking.vacancies
  )
  parking: Parking
}
