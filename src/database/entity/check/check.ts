import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Vehicle from "../vehicle/vehicle";

@Entity()
export default class Check {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    nullable: true
  })
  in: Date | null

  @Column()
  out: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(
    () => Vehicle,
    vehicle => vehicle.checks
  )
  vehicle: Vehicle
}
