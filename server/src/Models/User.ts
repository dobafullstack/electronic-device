import mongoose from 'mongoose';
import md5 from 'md5';
import Schema from '@Constants/Schema';

export interface UserDocument {
    _id: mongoose.Schema.Types.ObjectId;
    role_id: string;
    username: string;
    email: string;
    name: string;
    password: string;
    phone: string;
    delivery: {
        _id: mongoose.Schema.Types.ObjectId;
        name: string;
        phone: string;
        address: {
            city: string;
            district: string;
            street: string;
        };
    }[];
    avatar: string;
    wishList: [];
    createAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        role_id: {
            type: String,
            required: true,
            ref: Schema.ROLE
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        delivery: {
            type: [{
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    default: new mongoose.Types.ObjectId(),
                },
                name: String,
                address: {
                    city: String,
                    district: String,
                    street: String
                },
                phone: String
            }],
            default: []
        },
        avatar: {
            type: String,
            default: '',
        },
        wishList: {
            type: Array,
            default: [],
        },
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const User = mongoose.model<UserDocument>(Schema.USER, UserSchema);

export default User;
