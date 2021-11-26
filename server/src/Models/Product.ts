import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    category_id: string;
    product_type_id: string;
    name: string;
    price: number;
    images: Array<string>;
    count: number;
    createAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
    {
        category_id: {
            type: String,
            required: true,
        },
        product_type_id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        images: {
            type: Array,
            default: [],
        },
        count: {
            type: Number,
            default: 0,
        },
        createdAt: Date,
        updatedAt: Date
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Product = mongoose.model<ProductDocument>(Schema.PRODUCT, ProductSchema);

export default Product;
