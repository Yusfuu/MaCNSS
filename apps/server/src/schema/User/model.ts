import { IDocument } from '@schema/Document/model';
import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  name: string;
  email: string;
  cin: string;
  city: string;
  address: string;
  phone: string;
  documents: IDocument[];
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cin: { type: String, required: true },
    documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }],
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
