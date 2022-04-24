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
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cin: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
