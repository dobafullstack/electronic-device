import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface ProductTypeDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    attributes: [];
    createdAt: Date;
    updatedAt: Date;
}

const ProductTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        attributes: {
            type: Array,
            default: [],
            ref: Schema.ATTRIBUTE
        },
        createdAt: Date,
        updatedAt: Date
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const ProductType = mongoose.model<ProductTypeDocument>(Schema.PRODUCT_TYPE, ProductTypeSchema);

export default ProductType;
