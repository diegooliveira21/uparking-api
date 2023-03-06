import { Injectable } from "@nestjs/common";
import { PostUserPayload, PostUserResponse } from "./user.type";
import User from "../../database/entity/user/user";
import userRepository from "../../database/entity/user/user.repository";
import { validate } from "@nestjs/class-validator";
import Logger from "../../builder/logger/logger";
import { google } from "@google-cloud/logging/build/protos/protos";
import LogSeverity = google.logging.type.LogSeverity;
import Password from "../../helper/password/password";

@Injectable()
export default class UserService {
  // logger = new Logger().addLabel({
  //   class: 'AuthenticationService'
  // })

  private password = new Password()

  async createUser(payload: PostUserPayload): PostUserResponse {
    try {
      const user = new User()

      user.name = payload.name
      user.email = payload.email
      user.password = this.password.cypher(payload.password)
      user.type = payload.type

      const errors = await validate(user)

      if (errors.length) {
        // await this.logger
        //   .setName('error validating user data')
        //   .setPayload(errors)
        //   .setSeverity(LogSeverity.ERROR)
        //   .addLabel({
        //     method: 'createUser'
        //   })
        //   .build()

        return errors;
      }

      const { password, ...response } = await userRepository.save(user)

      return response
    } catch (exception) {
      // await this.logger
      //   .setName('exception')
      //   .setPayload(exception)
      //   .setSeverity(LogSeverity.ERROR)
      //   .addLabel({
      //     method: 'createUser'
      //   })
      //   .build()

      return exception
    }
  }
}
