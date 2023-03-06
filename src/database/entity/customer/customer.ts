import { Column, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Vehicle from "../vehicle/vehicle"
import Vacancy from "../vacancy/vacancy";

@Entity()
export default class Customer {
  @PrimaryColumn({
    unique: true
  })
  document: number

  @Column()
  name: string

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(
    () => Vehicle,
    vehicle => vehicle.customer
  )
  vehicles: Vehicle[]

  @OneToMany(
    () => Vacancy,
    vacancy => vacancy.customer
  )
  vacancies: Vacancy[]
}
