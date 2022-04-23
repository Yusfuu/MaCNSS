import type { Resolvers } from '@generated/types';
import { User } from './model';

export const resolvers: Resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { name, email, cin, city, address, phone } = input;

      const user = await User.create({
        name,
        email,
        cin,
        city,
        address,
        phone,
      });

      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    },
    updateUser: async (_, { id, input }) => {
      const { name, email, cin, city, address, phone } = input;

      const user = await User.findByIdAndUpdate(id, {
        name,
        email,
        cin,
        city,
        address,
        phone,
      });

      return user;
    },
  },
};
