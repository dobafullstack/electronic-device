import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Schema from '@Constants/Schema';
import Category from '@Models/Category';
import CreateCategoryInput from '@Types/Input/CreateCategory';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash';

export default class CategoryService {
    public static async CreateCategoryService(body: CreateCategoryInput): Promise<ApiResponse> {
        const existingCategory = await Category.findOne({ name: body.name });

        if (existingCategory) return GetActionResult(400, null, { message: 'Duplicate category' }, Result.CATEGORY.CREATE);

        const result = await Category.create(body)
            .then(() => GetActionResult(201, null, null, Result.CATEGORY.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.CATEGORY.CREATE);
            });

        return result;
    }
    public static async AddChildService(categoryId: string, categoryDetailId: string, body: any): Promise<ApiResponse> {
        const existingCategory: any = await Category.findById(categoryId);

        if (!existingCategory) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.CATEGORY.CHILD.ADD);

        const newChild = new Category(body);

        newChild.createdAt = new Date();
        newChild.updatedAt = new Date();

        existingCategory.AddCategoryDetail(existingCategory, categoryDetailId, newChild);

        const result = await existingCategory
            .save()
            .then(() => GetActionResult(200, null, null, Result.CATEGORY.CHILD.ADD))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.CATEGORY.CHILD.ADD);
            });

        return result;
    }
    public static async DeleteChildService(categoryId: string, categoryDetailId: string): Promise<ApiResponse> {
        const existingCategory: any = await Category.findById(categoryId);

        if (!existingCategory) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.CATEGORY.CHILD.DELETE);

        existingCategory.DeleteCategoryDetail(existingCategory, categoryDetailId);

        const result = await existingCategory
            .save()
            .then(() => GetActionResult(200, null, null, Result.CATEGORY.CHILD.DELETE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.CATEGORY.CHILD.DELETE);
            });

        return result;
    }
    public static async UpdateChildService(categoryId: string, categoryDetailId: string, body: any): Promise<ApiResponse> {
        const existingCategory: any = await Category.findById(categoryId);

        if (!existingCategory) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.CATEGORY.CHILD.UPDATE);

        existingCategory.UpdateCategoryDetail(existingCategory, categoryDetailId, body);

        const result = await existingCategory
            .save()
            .then(() => GetActionResult(200, null, null, Result.CATEGORY.CHILD.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.CATEGORY.CHILD.UPDATE);
            });

        return result;
    }

    public static async GetListCategoriesService(): Promise<ApiResponse> {
        const categories = await Category.find().populate('attributes');

        return GetActionResult(200, categories, null);
    }
    public static async GetDetailCategoryService(categoryId: string): Promise<ApiResponse> {
        const existingCategory = await Category.findById(categoryId).populate('attributes');

        if (!existingCategory) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.CATEGORY.GET_DETAIL);

        return GetActionResult(200, existingCategory, null);
    }
    public static async UpdateCategoryService(categoryId: string, body: any): Promise<ApiResponse> {
        const existingCategory = await Category.findById(categoryId);

        if (!existingCategory) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.CATEGORY.UPDATE);

        _.extend(existingCategory, body);
        const result = await existingCategory
            .save()
            .then(() => GetActionResult(200, null, null, Result.CATEGORY.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.CATEGORY.UPDATE);
            });

        return result;
    }
    public static async DeleteCategoryService(categoryId: string): Promise<ApiResponse> {
        const existingCategory = await Category.findById(categoryId);

        if (!existingCategory) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.CATEGORY.DELETE);

        const result = await Category.findByIdAndDelete(categoryId)
            .then(() => GetActionResult(200, null, null, Result.CATEGORY.DELETE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.CATEGORY.DELETE);
            });

        return result;
    }
}
