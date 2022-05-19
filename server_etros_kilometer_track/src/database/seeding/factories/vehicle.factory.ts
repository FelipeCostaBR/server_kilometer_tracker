import { Faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";
import Vehicle from "../../entities/Vehicle";

define(Vehicle, (faker: Faker) => {
  const vehicle = new Vehicle();
  const random_year = Math.floor(Math.random() * 10);
  const limit_to_next_service = 10000;

  vehicle.vehicle = 'Ford';
  vehicle.model = faker.name.firstName();
  vehicle.year = faker.date.past(random_year).toISOString();;
  vehicle.transmission = 'Automatic';
  vehicle.registration = faker.name.firstName();
  vehicle.current_kilometers = Math.floor(Math.random() * 100000);
  vehicle.next_km_to_service = vehicle.current_kilometers + limit_to_next_service;

  return vehicle;
});
