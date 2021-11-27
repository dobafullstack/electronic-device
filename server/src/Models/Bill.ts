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
        createdAt: Date,
        updatedAt: Date
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

// BillSchema.pre('save', function(next){
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
// })

const Bill = mongoose.model<BilLDocument>(Schema.BILL, BillSchema);

export default Bill;