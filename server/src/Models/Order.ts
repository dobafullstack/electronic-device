import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface OrderDocument extends mongoose.Document {}

const OrderSchema = new mongoose.Schema(
    {},
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Order = mongoose.model<OrderDocument>(Schema.ORDER, OrderSchema);

export default Order;
