import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface DiscountDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    token: string;
    discount_value: number;
    code: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const DiscountSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
        },
        token: {
            type: String,
            required: true,
        },
        discount_value: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            default: true
        },
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Discount = mongoose.model<DiscountDocument>(Schema.DISCOUNT, DiscountSchema);

export default Discount;
