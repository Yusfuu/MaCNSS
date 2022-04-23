import 'dotenv/config';
import { bootstrap } from '@config/apollo';
import { schema as gql, permissions } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';

const schema = applyMiddleware(gql, permissions);

bootstrap(schema);

import { faker } from '@faker-js/faker';
import { User } from '@schema/User/model';
import { Medication } from '@schema/Medication/model';

const fakeUser = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  cin: faker.finance.bic(),
  city: faker.address.city(),
  address: faker.address.streetAddress(),
  phone: faker.phone.phoneNumberFormat(),
});

// // generate fake medication
const fakeMedication = () => {
  const medication = {
    name: faker.lorem.slug(),
    price: faker.commerce.price(100, 200, 2),
    refundable: faker.datatype.boolean(),
  };
  return medication;
};

const insert = async () => {
  await Promise.all([User.remove({}), Medication.remove({})]);
  // insert 10 users
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(User.create(fakeUser()), Medication.create(fakeMedication()));
  }
  await Promise.all(data);
};

// insert();
