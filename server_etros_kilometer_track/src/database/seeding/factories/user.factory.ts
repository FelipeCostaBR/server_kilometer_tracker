import { Faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";
import User from "../../entities/User";

define(User, (faker: Faker) => {
  const user = new User();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  user.name = `${firstName} ${lastName}`;
  user.email = faker.internet.email();
  user.date_birth = faker.date.past(20).toISOString();
  user.created_at = new Date();

  return user;
});
