import { Factory, Seeder } from "typeorm-seeding";
import Vehicle from "../../entities/Vehicle";

export default class CreateVehicles implements Seeder {
  public async run(factory: Factory): Promise<void> {

    const vehicle = await factory(Vehicle)().createMany(20);

  }
}
