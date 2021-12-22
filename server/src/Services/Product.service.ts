import Product from '@Models/Product';
import CreateProductInput from '@Types/Input/CreateProduct';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import Result from '@Constants/Result';
import Logger from '@Configs/Logger';
import _ from 'lodash';
import Category from '@Models/Category';

export default class ProductService {
    public static async CreateProductService(body: CreateProductInput): Promise<ApiResponse> {
        const existingProduct = await Product.findOne({ name: body.name });

        if (existingProduct) return GetActionResult(400, null, { message: 'Duplicate product' }, Result.PRODUCT.CREATE);

        const result = await Product.create(body)
            .then(() => GetActionResult(201, null, null, Result.PRODUCT.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.PRODUCT.CREATE);
            });

        return result;
    }

    public static async GetListProductsService(limit: number): Promise<ApiResponse> {
        const products = await (Product as any).find().limit(limit).subPopulate('category_detail_id');

        return GetActionResult(200, products, null);
    }

    public static async GetDetailProductService(productId: string): Promise<ApiResponse> {
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) return GetActionResult(400, null, { message: 'Can not find any product' }, Result.PRODUCT.GET_DETAIL);

        return GetActionResult(200, existingProduct, null);
    }

    public static async GetProductsByCategoryDetailIdService(categoryDetailId: string): Promise<ApiResponse> {
        const products = await (Product as any).find({ category_detail_id: categoryDetailId }).subPopulate('category_detail_id');

        return GetActionResult(200, products, null);
    }

    public static async GetProductsByCategoryIdService(categoryId: string, limit: number, query: any): Promise<ApiResponse> {
        const category = await Category.findById(categoryId);

        if (!category) return GetActionResult(400, null, { message: 'Can not find any category' }, Result.PRODUCT.GET_LIST);

        let ids = category.childCate.map((categoryDetail) => categoryDetail._id);

        console.log(ids);

        const products = await (Product as any)
            .find({
                ...query,
                category_detail_id: { $in: ids },
            })
            .limit(limit)
            .subPopulate('category_detail_id');

        return GetActionResult(200, products, null);
    }

    public static async GetProductsByProductNameService(productName: string): Promise<ApiResponse> {
        if (!productName) return GetActionResult(400, null, { message: 'Invalid product name' }, Result.PRODUCT.GET_LIST);

        const products = await (Product as any)
            .find({
                name: { $regex: productName, $options: 'i' },
                // name: productName,
            })
            .subPopulate('category_detail_id');

        return GetActionResult(200, products, null);
    }

    public static async UpdateProductService(productId: string, body: any): Promise<ApiResponse> {
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) return GetActionResult(400, null, { message: 'Can not find any product' }, Result.PRODUCT.UPDATE);

        _.extend(existingProduct, body);

        const result = await existingProduct
            .save()
            .then(() => GetActionResult(200, null, null, Result.PRODUCT.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.PRODUCT.UPDATE);
            });

        return result;
    }

    public static async DeleteProductService(productId: string): Promise<ApiResponse> {
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) return GetActionResult(400, null, { message: 'Can not find any product' }, Result.PRODUCT.GET_DETAIL);

        const result = await Product.findByIdAndDelete(productId)
            .then(() => GetActionResult(200, null, null, Result.PRODUCT.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.PRODUCT.UPDATE);
            });

        return result;
    }
}
