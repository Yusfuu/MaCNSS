import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IAgent {
  id: string;
  name: string;
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IAgent>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Agent = model<IAgent>('Agent', schema);
