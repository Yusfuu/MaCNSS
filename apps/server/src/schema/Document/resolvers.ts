import type { Resolvers } from '@generated/types';
import { IMedication, Medication } from '@schema/Medication/model';
import { IUser } from '@schema/User/model';
import { Document } from './model';
import { DocumentStatus } from '@ts/enums';

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
    bulkDeleteDocuments: async (_, { ids }) => {
      const documents = await Document.deleteMany({ _id: { $in: ids } });
      return documents.deletedCount;
    },
    approveDocument: async (_, { id }) => {
      const document = await Document.findById(id);

      if (!document) {
        throw new Error('Document not found');
      }

      if (document.status === DocumentStatus.APPROVED) {
        return document;
      }

      const meds = await Medication.find({
        _id: { $in: document.medication },
      });

      const balanceDue = meds.reduce((acc, cur) => {
        return cur.refundable ? acc + cur.price : acc;
      }, 0);

      const updatedDocument = await Document.findByIdAndUpdate(
        id,
        { status: DocumentStatus.APPROVED, balanceDue },
        { new: true }
      );

      return updatedDocument;
    },
    updateDocumentStatus: async (_, { id, status }) => {
      const document = await Document.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
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
