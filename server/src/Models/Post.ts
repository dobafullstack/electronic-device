import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface PostDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    image: string;
    content: string;
    category: [];
    author_id: string;
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        },
        category: Array,
        author_id: {
            type: String,
            required: true,
            ref: Schema.USER,
        },
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

const Post = mongoose.model<PostDocument>(Schema.POST, PostSchema);

export default Post;
