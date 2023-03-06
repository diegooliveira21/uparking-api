import database from "../../database";
import Parking from "./parking";

const parkingRepository = database.getRepository(Parking)

export default parkingRepository
