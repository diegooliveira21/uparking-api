import User from "../../database/entity/user/user";

export const PREFIX = 'authentication'
export type LoginPayload = Pick<User, 'email' | 'password'>
export type LoginResponse = Promise<{
  accessToken: string
}
>
export type JwtPayload = {
  sub: string
  iat: number
  exp: number
} & Pick<User, 'password'>
