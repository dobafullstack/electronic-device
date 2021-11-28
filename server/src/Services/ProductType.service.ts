import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import ProductType from '@Models/ProductType';
import CreateProductTypeInput from '@Types/Input/CreateProductType';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash'

export default class ProductTypeService {
    public static async CreateProductTypeService(body: CreateProductTypeInput): Promise<ApiResponse> {
        const existingProductType = await ProductType.findOne({ name: body.name });

        if (existingProductType) return GetActionResult(400, null, { message: 'Duplicate product type' }, Result.PRODUCT_TYPE.CREATE);

        const result = await ProductType.create(body)
            .then(() => GetActionResult(201, null, null, Result.PRODUCT_TYPE.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.PRODUCT_TYPE.CREATE);
            });

        return result;
    }

    public static async GetListProductTypesService(): Promise<ApiResponse> {
        const productTypes = await ProductType.find().populate('attributes');

        return GetActionResult(200, productTypes, null);
    }

    public static async GetDetailProductTypeService(productTypeId: string): Promise<ApiResponse> {
        const existingProductType = await ProductType.findById(productTypeId).populate('attributes');

        if (!existingProductType) return GetActionResult(400, null, { message: 'Can not find any product type' }, Result.PRODUCT_TYPE.GET_DETAIL);

        return GetActionResult(200, existingProductType, null);
    }

    public static async UpdateProductTypeService(productTypeId: string, body: any): Promise<ApiResponse> {
        const existingProductType = await ProductType.findById(productTypeId);

        if (!existingProductType) return GetActionResult(400, null, { message: 'Can not find any product type' }, Result.PRODUCT_TYPE.UPDATE);

        _.extend(existingProductType, body);

        const result = await existingProductType
            .save()
            .then(() => GetActionResult(200, null, null, Result.PRODUCT_TYPE.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.PRODUCT_TYPE.UPDATE);
            });

        return result;
    }

    public static async DeleteProductTypeService(productTypeId: string): Promise<ApiResponse> {
        const existingProductType = await ProductType.findById(productTypeId);

        if (!existingProductType) return GetActionResult(400, null, { message: 'Can not find any product type' }, Result.PRODUCT_TYPE.DELETE);

        const result = await ProductType.findByIdAndDelete(productTypeId)
            .then(() => GetActionResult(200, null, null, Result.PRODUCT_TYPE.DELETE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.PRODUCT_TYPE.DELETE);
            });

        return result;
    }
}
