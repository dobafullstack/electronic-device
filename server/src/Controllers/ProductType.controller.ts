import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import ProductTypeService from '@Services/ProductType.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class ProductTypeController {
    public static async CreateProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.CreateProductTypeService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT_TYPE.CREATE));
        }
    }
    public static async GetListProductTypesController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.GetListProductTypesService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT_TYPE.GET_LIST));
        }
    }
    public static async GetDetailProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.GetDetailProductTypeService(req.params.productTypeId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT_TYPE.GET_DETAIL));
        }
    }
    public static async UpdateProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.UpdateProductTypeService(req.params.productTypeId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT_TYPE.UPDATE));
        }
    }
    public static async DeleteProductTypeController(req: Request, res: Response) {
        try {
            const result = await ProductTypeService.DeleteProductTypeService(req.params.productTypeId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT_TYPE.DELETE));
        }
    }
}
