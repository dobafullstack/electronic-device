import Schema from '@Constants/Schema';
import mongoose from 'mongoose'

const AttributeTypes = {
    _id: mongoose.Schema.Types.ObjectId,
    name: String
}

export interface AttributeDocument extends mongoose.Document{
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    unit: string;
    types: [];
    createdAt: Date;
    updatedAt: Date;
}

const AttributeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        unit: {
            type: String,
            required: true,
            unique: true,
        },
        types: [new mongoose.Schema(AttributeTypes)],
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Attribute = mongoose.model<AttributeDocument>(Schema.ATTRIBUTE, AttributeSchema);

export default Attribute;