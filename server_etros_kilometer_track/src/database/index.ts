import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./entities/User";
import Vehicle from "./entities/Vehicle";

//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/CreateCategories

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "etros_kilometer_tracker",
  entities: [Vehicle, User],
  migrations: ["./src/database/migrations/*.ts"],
})

AppDataSource.initialize().then(async () => {
  console.log("Initializing the database...")
}).catch((err) => console.log(err))
