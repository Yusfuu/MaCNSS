import 'dotenv/config';
import { bootstrap } from '@config/apollo';
import { schema as gql, permissions } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';

const schema = applyMiddleware(gql, permissions);

bootstrap(schema);

// import { faker } from '@faker-js/faker';

// const fakeUser = () => ({
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   cin: faker.random.number(),
//   city: faker.address.city(),
//   address: faker.address.streetAddress(),
//   phone: faker.phone.phoneNumber(),
// });

// // generate fake medication
// const fakeMedication = () => {
//   const medication = {
//     name: faker.name.findName(),
//     price: faker.commerce.price(),
//     refundable: faker.random.boolean(),
//   };
//   return medication;
// };
