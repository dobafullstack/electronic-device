import Schema from '@Constants/Schema';
import mongoose from 'mongoose'

export interface CategoryDocument extends mongoose.Document{
    _id: mongoose.Schema.Types.ObjectId
    name: string;
    childCate: [CategoryDocument];
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        childCate: [],
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

CategorySchema.add({
    childCate: {
        type: [new mongoose.Schema(CategorySchema)],
        default: []
    }
});

const Category = mongoose.model<CategoryDocument>(Schema.CATEGORY, CategorySchema);

export default Category;