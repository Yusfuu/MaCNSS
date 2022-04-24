import { RefundType } from '@ts/enums';
import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IMedication {
  id: string;
  name: string;
  price: number;
  refundable: boolean;
  refundType: RefundType;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IMedication>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0, default: 0 },
    refundable: { type: Boolean, required: true, default: false },
    refundType: {
      type: String,
      required: true,
      default: RefundType.A,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Medication = model<IMedication>('Medication', schema);
