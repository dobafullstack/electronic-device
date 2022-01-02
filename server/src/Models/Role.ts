import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface RoleDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: String;
    active: Boolean;
    createdAt: Date;
    updatedAt: Date;
}

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Role = mongoose.model<RoleDocument>(Schema.ROLE, RoleSchema);

export default Role;
