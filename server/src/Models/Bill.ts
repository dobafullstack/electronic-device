import ProductSchemaType from '@Types/ProductSchemaType';
import Schema from '@Constants/Schema';
import mongoose from 'mongoose';
import Logger from '@Configs/Logger';
import { ProductDocument, ProductSchemaField } from './Product';

export interface BilLDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    userId: string;
    productItems: {
        productItem: ProductDocument;
        quantity: number;
    }[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
}

const BillSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            ref: Schema.USER,
        },
        productItems: {
            type: [
                {
                    productItem: {
                        type: {
                            ...ProductSchemaField,
                            _id: mongoose.Schema.Types.ObjectId,
                        },
                    },
                    quantity: Number,
                },
            ],
            default: [],
        },
        total: {
            type: Number,
            default: 0,
        },
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Bill = mongoose.model<BilLDocument>(Schema.BILL, BillSchema);

export default Bill;