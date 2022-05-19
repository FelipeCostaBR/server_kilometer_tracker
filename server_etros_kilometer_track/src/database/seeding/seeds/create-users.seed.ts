import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import User from "../../entities/User";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const user = await factory(User)().createMany(10);

  }
}
