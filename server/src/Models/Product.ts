import Schema from '@Constants/Schema';
import mongoose from 'mongoose';
const subReferencePopulate = require('mongoose-sub-references-populate');

export interface ProductDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    category_detail_id: string;
    name: string;
    price: number;
    images: Array<string>;
    count: number;
    size: string;
    discount: number;
    sale_count: number;
    frequency?: string;
    display_resolution?: string;
    laptop_type?: string;
    ram?: string;
    mouse_demand?: string;
    mouse_pad_type?: string;
    keyboard_switch?: string;
    connect?: string;
    key_cap?: string;
    mouse_pad_size?: string;
    createAt: Date;
    updatedAt: Date;
}

export const ProductSchemaField = {
    category_detail_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        subRef: `${Schema.CATEGORY}.childCate`,
    },
    name: {
        type: String,
        required: true,
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
    discount: {
        type: Number,
        default: 0,
    },
    sale_count: {
        type: Number,
        default: 0
    },
    size: String,
    frequency: String,
    display_resolution: String,
    laptop_type: String,
    ram: String,
    mouse_demand: String,
    mouse_pad_type: String,
    keyboard_switch: String,
    connect: String,
    key_cap: String,
    mouse_pad_size: String,
    description: {
        type: String,
        default: '',
    },
    createdAt: Date,
    updatedAt: Date,
};

export const ProductSchema = new mongoose.Schema({ ...ProductSchemaField }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

ProductSchema.plugin(subReferencePopulate);

const Product = mongoose.model<ProductDocument>(Schema.PRODUCT, ProductSchema);

export default Product;
