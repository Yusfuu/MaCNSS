import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IMedication {
  id: string;
  name: string;
  price: number;
  refundable: boolean;
  refundablePercent: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IMedication>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0, default: 0 },
    refundable: { type: Boolean, required: true, default: false },
    refundablePercent: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Medication = model<IMedication>('Medication', schema);
