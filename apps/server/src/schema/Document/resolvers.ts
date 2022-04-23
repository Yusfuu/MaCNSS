import type { Resolvers } from '@generated/types';
import { IMedication } from '@schema/Medication/model';
import { IUser } from '@schema/User/model';
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
    deleteDocument: async (_, { id }) => {
      const document = await Document.findByIdAndDelete(id);
      return document;
    },
    updateDocumentStatus: async (_, { id, status }) => {
      const document = await Document.findByIdAndUpdate(id, { status });
      return document;
    },
  },
  Document: {
    user: async ({ user: id }, _, { dataloader }) => {
      const user: IUser = await dataloader.user.load(id);
      return user;
    },
    medication: async ({ medication: ids }, _, { dataloader }) => {
      const medications: IMedication[] = await dataloader.medication.loadMany(
        ids
      );
      return medications;
    },
  },
};
