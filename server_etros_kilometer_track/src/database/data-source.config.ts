import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { UsersVehicles } from "../entities/UsersVehicles";
import { Vehicle } from "../entities/Vehicle";

//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//npx typeorm-ts-node-esm migration:create src/database/migrations/UsersVehicles

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "etros_kilometer_tracker",
  entities: [Vehicle, User, UsersVehicles],
  migrations: ["./src/database/migrations/*.ts"],
})

AppDataSource.initialize().then(async () => {
  console.log("Initializing the database...")
}).catch((err) => console.log(err))
