import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface BilLDocument extends mongoose.Document{

}

const BillSchema = new mongoose.Schema(
    {},
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Bill = mongoose.model<BilLDocument>(Schema.BILL, BillSchema);

export default Bill;