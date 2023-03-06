import { DataSource } from 'typeorm';
import Check from "./entity/check/check";
import Customer from "./entity/customer/customer";
import Parking from "./entity/parking/parking";
import User from "./entity/user/user";
import Vacancy from "./entity/vacancy/vacancy";
import Vehicle from "./entity/vehicle/vehicle";

const database = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3309,
  username: 'root',
  password: 'V!p3vBtdoX2^Kv',
  database: 'uparking',
  synchronize: true,
  logging: true,
  entities: [
    Check,
    Customer,
    Parking,
    User,
    Vacancy,
    Vehicle
  ],
  subscribers: [],
  migrations: []
});

database.initialize()
  .catch((error) => console.log(error))

export default database;
