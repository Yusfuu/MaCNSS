import 'dotenv/config';
import { bootstrap } from '@config/apollo';
import { schema as gql, permissions } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';

const schema = applyMiddleware(gql, permissions);

bootstrap(schema);

// import { faker } from '@faker-js/faker';
// import { User } from '@schema/User/model';
// import { Medication } from '@schema/Medication/model';
// import { Document } from '@schema/Document/model';

// const insert = async () => {
//   await Promise.all([
//     User.remove({}),
//     Medication.remove({}),
//     Document.remove({}),
//   ]);
//   // insert 10 users
//   const data = [];
//   for (let i = 0; i < 10; i++) {
//     const refundable = faker.random.boolean();
//     data.push(
//       User.create({
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         cin: faker.finance.bic(),
//         city: faker.address.city(),
//         address: faker.address.streetAddress(),
//         phone: faker.phone.phoneNumberFormat(),
//       }),
//       Medication.create({
//         name: faker.lorem.slug(),
//         price: faker.commerce.price(100, 200, 2),
//         refundable: refundable,
//         refundablePercent: refundable ? faker.datatype.float({ max: 60 }) : 0,
//       })
//     );
//   }
//   await Promise.all(data);
// };

// insert();
