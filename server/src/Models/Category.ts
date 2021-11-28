import Schema from '@Constants/Schema';
import mongoose from 'mongoose';
import _ from 'lodash';

export interface CategoryDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    childCate: CategoryDocument[];
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
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

CategorySchema.add({
    childCate: {
        type: [new mongoose.Schema(CategorySchema, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })],
        default: [],
    },
});
export class CategoryComposite extends mongoose.Model {
    AddCategoryDetail(root: CategoryDocument, nodeId: string, categoryDetail: CategoryDocument) {
        if (root._id.toString() === nodeId) {
            root.childCate.push(categoryDetail);
            return;
        } else {
            root.childCate.forEach((category) => this.AddCategoryDetail(category, nodeId, categoryDetail));
        }
    }

    DeleteCategoryDetail(root: CategoryDocument, nodeId: string) {
        const index = root.childCate.findIndex((category) => category._id.toString() === nodeId);

        if (index !== -1) {
            const newChild = root.childCate.filter((category) => category._id.toString() !== nodeId);
            root.childCate = newChild;
        } else {
            root.childCate.forEach((category) => {
                this.DeleteCategoryDetail(category, nodeId);
            });
        }
    }

    UpdateCategoryDetail(root: CategoryDocument, nodeId: string, categoryDetail: CategoryDocument) {
        const index = root.childCate.findIndex((category) => category._id.toString() === nodeId);

        if (index !== -1) {
            _.extend(root.childCate[index], categoryDetail);
        } else {
            root.childCate.forEach((category) => {
                this.UpdateCategoryDetail(category, nodeId, categoryDetail);
            });
        }
    }
}

CategorySchema.loadClass(CategoryComposite);

const Category = mongoose.model<CategoryDocument>(Schema.CATEGORY, CategorySchema);

export default Category;
