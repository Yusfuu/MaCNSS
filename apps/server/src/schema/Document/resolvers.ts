import type { Resolvers } from '@generated/types';
import { Document } from './model';

export const resolvers: Resolvers = {
  Query: {
    documents: async () => {
      const documents = await Document.find();
      return documents;
    },
    document: async (_, { id }) => {
      const document = await Document.findById(id);
      return document;
    },
  },
  Mutation: {
    createDocument: async (_, { user, medication }) => {
      const document = await Document.create({ user, medication });
      return document;
    },
  },
};
