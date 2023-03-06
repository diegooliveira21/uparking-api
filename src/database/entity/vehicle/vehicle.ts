import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Type } from "./vehicle.type"
import Customer from "../customer/customer"
import Check from "../check/check";

@Entity()
export default class Vehicle {
  @PrimaryColumn({
    unique: true
  })
  renavam: number

  @Column({
    enum: Type,
    type: 'enum',
  })
  type: Type

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(
    () => Customer,
    customer => customer.vehicles
  )
  customer: Customer

  @OneToMany(
    () => Check,
    check => check.vehicle
  )
  checks: Check[]
}
