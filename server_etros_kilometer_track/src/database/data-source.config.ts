import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { UsersVehicles } from "../entities/UsersVehicles";
import { Vehicle } from "../entities/Vehicle";

//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//npx typeorm-ts-node-esm migration:create src/database/migrations/UsersVehicles

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_kilometer_tracker",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "etros_kilometer_tracker",
  entities: [Vehicle, User, UsersVehicles],
  migrations: ["./src/database/migrations/*.ts"],
})

const runMigration = async () => {
  await AppDataSource.runMigrations()
  console.log("TypeORM run migrations complete.")
}

AppDataSource.initialize().then(async () => {
  console.log("Initializing the database...")
  await runMigration()
}).catch((err) => console.log(err))

