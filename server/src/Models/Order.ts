import Logger from '@Configs/Logger';
import Schema from '@Constants/Schema';
import DeliveryType from '@Types/DeliveryType';
import PaymentType from '@Types/PaymentType';
import ProductSchemaType from '@Types/ProductSchemaType';
import mongoose from 'mongoose';
import { ProductDocument, ProductSchemaField } from './Product';

export interface OrderDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    userId: string;
    productItems: {
        productItem: ProductDocument,
        quantity: number;
    }[];
    delivery: DeliveryType;
    payment: PaymentType;
    description: string;
    total: number;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            ref: Schema.USER,
        },
        productItems: {
            type: [
                {
                    productItem: {
                        ...ProductSchemaField,
                        _id: mongoose.Schema.Types.ObjectId
                    },
                    quantity: Number,
                    _id: false
                },
            ],
            unique: false,
            default: [],
        },
        delivery: {
            name: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
                default: 'pending',
            },
        },
        payment: {
            status: {
                type: Boolean,
                required: true,
                default: false,
            },
            method: {
                type: String,
                required: true,
            },
        },
        description: {
            type: String,
            default: '',
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

const Order = mongoose.model<OrderDocument>(Schema.ORDER, OrderSchema);

export default Order;
