import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import Vehicle from "../../entities/Vehicle";

export default class CreateVehicles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const vehicle = await factory(Vehicle)().createMany(20);

  }
}
