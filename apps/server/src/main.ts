import 'dotenv/config';
import { bootstrap } from '@config/apollo';
import { schema as gql, permissions } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';

const schema = applyMiddleware(gql, permissions);

bootstrap(schema);

import { faker } from '@faker-js/faker';
import { User } from '@schema/User/model';

const fakeUser = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  cin: faker.finance.bic(),
  city: faker.address.city(),
  address: faker.address.streetAddress(),
  phone: faker.phone.phoneNumberFormat(),
});

// User.create(fakeUser());

// delete all users
// User.remove({});

// // generate fake medication
// const fakeMedication = () => {
//   const medication = {
//     name: faker.name.findName(),
//     price: faker.commerce.price(),
//     refundable: faker.random.boolean(),
//   };
//   return medication;
// };

// const insert = async () => {
//   // insert 10 users
//   for (let i = 0; i < 10; i++) {
//     await User.create(fakeUser());
//   }
// };

// insert();
