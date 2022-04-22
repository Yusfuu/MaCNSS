import type { Resolvers } from '@generated/types';
import { Medication } from './model';

export const resolvers: Resolvers = {
  Query: {
    medications: async () => {
      const medications = await Medication.find();
      return medications;
    },
    medication: async (_, { id }) => {
      const medication = await Medication.findById(id);
      return medication;
    },
  },
  Mutation: {},
};
