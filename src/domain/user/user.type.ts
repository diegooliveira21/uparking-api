import User from "../../database/entity/user/user";
import { ValidationError } from "@nestjs/class-validator";

export type PostUserPayload = Pick<User, 'name' | 'email' | 'password' | 'type'>
export type PostUserResponse = Promise<Omit<User, 'password'> | ValidationError[]>
