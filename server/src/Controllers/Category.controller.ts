import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import CategoryService from '@Services/Category.service';
import ApiResponse from '@Types/ResponseType';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class CategoryController {
    public static async CreateCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.CreateCategoryService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.CREATE));
        }
    }
    public static async AddCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryService.AddChildService(req.params.categoryId, req.params.categoryDetailId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.CHILD.ADD));
        }
    }
    public static async DeleteCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryService.DeleteChildService(req.params.categoryId, req.params.categoryDetailId)

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.CHILD.ADD));
        }
    }
    public static async UpdateCategoryDetailController(req: Request, res: Response) {
        try {
            const result = await CategoryService.UpdateChildService(req.params.categoryId, req.params.categoryDetailId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.CHILD.ADD));
        }
    }
    public static async GetListCategoriesController(req: Request, res: Response) {
        try {
            const result = await CategoryService.GetListCategoriesService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.GET_LIST));
        }
    }
    public static async GetDetailCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.GetDetailCategoryService(req.params.categoryId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.GET_DETAIL));
        }
    }
    public static async UpdateCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.UpdateCategoryService(req.params.categoryId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.UPDATE));
        }
    }
    public static async DeleteCategoryController(req: Request, res: Response) {
        try {
            const result = await CategoryService.DeleteCategoryService(req.params.categoryId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.CATEGORY.DELETE));
        }
    }
}
