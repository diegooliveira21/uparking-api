import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Vacancy from "../vacancy/vacancy";
import { IsNotEmpty, IsPhoneNumber } from "@nestjs/class-validator";

@Entity()
export default class Parking {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  name: string

  @Column({
    unique: true
  })
  @IsNotEmpty()
  cnpj: string

  @Column()
  @IsNotEmpty()
  address: string

  @Column()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string

  @OneToMany(
    () => Vacancy,
    vacancy => vacancy.parking
  )
  vacancies: Vacancy[]
}
