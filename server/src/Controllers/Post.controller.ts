import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import PostService from '@Services/Post.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class PostController {
    public static async CreatePostController(req: Request, res: Response) {

        try {
            const result = await PostService.CreatePostService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.POST.CREATE));
        }
    }
    public static async GetListPostsController(req: Request, res: Response) {
        try {
            const result = await PostService.GetListPostsService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.POST.GET_LIST));
        }
    }
    public static async GetDetailPostController(req: Request, res: Response) {
        try {
            const result = await PostService.GetDetailPostService(req.params.postId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.POST.GET_DETAIL));
        }
    }
    public static async UpdatePostController(req: Request, res: Response) {
        try {
            const result = await PostService.UpdatePostService(req.params.postId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.POST.UPDATE));
        }
    }
    public static async DeletePostController(req: Request, res: Response) {
        try {
            const result = await PostService.DeletePostService(req.params.postId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.POST.DELETE));
        }
    }
}
