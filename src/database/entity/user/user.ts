import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Type } from "./user.type";
import { IsEmail, IsNotEmpty } from "@nestjs/class-validator";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  @IsNotEmpty()
  name: string

  @Column({
    unique: true
  })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @Column()
  @IsNotEmpty()
  password: string

  @Column({
    enum: Type,
    type: 'enum'
  })
  @IsNotEmpty()
  type: Type

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
