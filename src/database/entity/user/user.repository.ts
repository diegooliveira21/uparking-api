import database from "../../database";
import User from "./user";

const userRepository = database.getRepository(User)

export default userRepository
