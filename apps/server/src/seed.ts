import { faker } from '@faker-js/faker';
import { User } from '@schema/User/model';
import { Medication } from '@schema/Medication/model';
import { Document } from '@schema/Document/model';
import { Agent } from '@schema/Agent/model';
import bcrypt from 'bcrypt';

const agent = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('secret', 10),
  };
};

const medication = () => {
  const refundable = faker.datatype.boolean();
  return {
    name: faker.lorem.slug(),
    price: faker.commerce.price(100, 200, 2),
    refundable: refundable,
    refundablePercent: refundable ? faker.datatype.float({ max: 60 }) : 0,
  };
};

const user = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    cin: faker.finance.bic(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumberFormat(),
  };
};

const bootstrap = async () => {
  await Promise.all([
    User.remove({}),
    Medication.remove({}),
    Document.remove({}),
    Agent.remove({}),
  ]);
  const data = [];
  for (let i = 0; i < 10; i++) {
    const userDoc = user();
    const medicationDoc = medication();
    data.push(User.create(userDoc), Medication.create(medicationDoc));
  }
  await Promise.all(data);
};

bootstrap();
