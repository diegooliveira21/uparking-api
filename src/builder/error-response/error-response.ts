import { ErrorResponsePayload } from "./error-response.type";

export default class ErrorResponse {
  private code: string

  setCode(code: string): this {
    this.code = code

    return this
  }

  build(): ErrorResponsePayload {
    return {
      code: this.code
    }
  }
}
