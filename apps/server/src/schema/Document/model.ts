import { DocumentStatus } from '@ts/enums';
import { Schema, model } from 'mongoose';
import { IMedication } from '@schema/Medication/model';
import { IUser } from '@schema/User/model';

// 1. Create an interface representing a Document in MongoDB.
export interface IDocument {
  id: string;
  user: IUser;
  medication: IMedication[];
  status: DocumentStatus;
  balanceDue: number;
}

// 2. Create a Schema corresponding to the Document interface.
const schema = new Schema<IDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    medication: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Medication',
      },
    ],
    status: {
      type: String,
      enum: DocumentStatus,
      default: DocumentStatus.PENDING,
      required: true,
    },
    balanceDue: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Document = model<IDocument>('Document', schema);
