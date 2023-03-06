import { createHmac } from "node:crypto";

export default class Password {
  cypher(password: string): string {
    const hmac = createHmac('sha256', process.env.PASSWORD_SECRET)
    return hmac.update(password).digest('hex')
  }

  compare(plainPassword: string, cypherPassword: string) {
    return this.cypher(plainPassword) === cypherPassword
  }
}
