import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import ProductService from '@Services/Product.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class ProductController {
    public static async CreateProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.CreateProductService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.CREATE));
        }
    }
    public static async GetListProductsController(req: Request, res: Response) {
        const limit: number = req.query.limit ? parseInt(req.query.limit as string) : 0;
        const type: string = req.query.type ? (req.query.type as string) : "";
        try {
            const result = await ProductService.GetListProductsService(limit, type);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.GET_LIST));
        }
    }
    public static async GetDetailProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.GetDetailProductService(req.params.productId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.GET_DETAIL));
        }
    }
    public static async GetProductsByCategoryDetailIdController(req: Request, res: Response) {
        const limit: number = req.query.limit ? parseInt(req.query.limit as string) : 0;
        try {
            const result = await ProductService.GetProductsByCategoryDetailIdService(req.params.categoryDetailId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.GET_LIST));
        }
    }
    public static async GetProductsByCategoryIdController(req: Request, res: Response) {
        const limit: number = req.query.limit ? parseInt(req.query.limit as string) : 0;

        try {
            const result = await ProductService.GetProductsByCategoryIdService(req.params.categoryId, limit, req.query);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.GET_LIST));
        }
    }
    public static async GetProductsProductNameController(req: Request, res: Response) {
        const limit: number = req.query.limit ? parseInt(req.query.limit as string) : 0;

        try {
            const result = await ProductService.GetProductsByProductNameService(req.params.productName);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.GET_LIST));
        }
    }
    public static async UpdateProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.UpdateProductService(req.params.productId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.UPDATE));
        }
    }
    public static async DeleteProductController(req: Request, res: Response) {
        try {
            const result = await ProductService.DeleteProductService(req.params.productId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.PRODUCT.DELETE));
        }
    }
}
