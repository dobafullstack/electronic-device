import Logger from '@Configs/Logger';
import Schema from '@Constants/Schema';
import DeliveryType from '@Types/DeliveryType';
import PaymentType from '@Types/PaymentType';
import ProductSchemaType from '@Types/ProductSchemaType';
import mongoose from 'mongoose';

export interface OrderDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    userId: string;
    products: ProductSchemaType[];
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
                    count: Number
                },
            ],
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
            },
            method: {
                type: String,
                required: true,
            },
        },
        payment: {
            status: {
                type: Boolean,
                required: true,
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
        total: Number,
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

// OrderSchema.pre('save', function (next) {
//     let total = 0;
//     try {
//         this.products.forEach((product) => {
//             total += product.productId.price;
//         });

//         this.total = total;
//         next();
//     } catch (error: any) {
//         Logger.error(error);
//         next();
//     }
// });

const Order = mongoose.model<OrderDocument>(Schema.ORDER, OrderSchema);

export default Order;
