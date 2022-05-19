import { Faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";
import User from "../../entities/User";

import { validate_dt_birth } from '../../../helper/isOver18';


define(User, (faker: Faker) => {
  const user = new User();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const dt_birth = faker.date.past(70);

  user.name = `${firstName} ${lastName}`;
  user.email = faker.internet.email(firstName, lastName);
  user.date_birth = validate_dt_birth(dt_birth).toISOString();
  user.created_at = new Date();

  return user;
});
