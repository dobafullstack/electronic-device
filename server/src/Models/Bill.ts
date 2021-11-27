import ProductSchemaType from '@Types/ProductSchemaType';
import Schema from '@Constants/Schema';
import mongoose from 'mongoose';
import Logger from '@Configs/Logger';

export interface BilLDocument extends mongoose.Document{
    _id: mongoose.Schema.Types.ObjectId;
    userId: string;
    products: ProductSchemaType[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
}

const BillSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            ref: Schema.USER,
        },
        products: {
            type: [
                {
                    productId: {
                        type: String,
                        ref: Schema.PRODUCT,
                        required: true,
                    },
                    count: Number,
                },
            ],
            default: [],
        },
        total: {
            type: Number,
            default: 0
        },
        createdAt: Date,
        updatedAt: Date
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Bill = mongoose.model<BilLDocument>(Schema.BILL, BillSchema);

export default Bill;