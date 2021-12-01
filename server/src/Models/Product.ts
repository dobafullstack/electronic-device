import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    category_detail_id: string;
    name: string;
    price: number;
    images: Array<string>;
    count: number;
    camera?: string;
    memory?: string;
    ram?: string;
    special_feature?: string;
    pin?: string;
    os?: string;
    design?: string;
    screen?: string;
    height?: string;
    color?: string;
    type?: string;
    brand?: string;
    createAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
    {
        category_detail_id: {
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
        camera: String,
        memory: String,
        ram: String,
        special_feature: String,
        pin: String,
        os: String,
        design: String,
        screen: String,
        height: String,
        color: String,
        type: String,
        brand: String,
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Product = mongoose.model<ProductDocument>(Schema.PRODUCT, ProductSchema);

export default Product;
