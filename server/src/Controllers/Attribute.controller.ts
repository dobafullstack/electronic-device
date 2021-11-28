import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import AttributeService from '@Services/Attribute.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class AttributeController {
    public static async CreateAttributeController(req: Request, res: Response) {
        try {
            const result = await AttributeService.CreateAttributeService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ATTRIBUTE.CREATE));
        }
    }
    public static async GetListAttributesController(req: Request, res: Response) {
        try {
            const result = await AttributeService.GetListAttributesService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ATTRIBUTE.GET_LIST));
        }
    }
    public static async GetDetailAttributeController(req: Request, res: Response) {
        try {
            const result = await AttributeService.GetDetailAttributeService(req.params.attributeId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ATTRIBUTE.GET_DETAIL));
        }
    }
    public static async UpdateAttributeController(req: Request, res: Response) {
        try {
            const result = await AttributeService.UpdateAttributeService(req.params.attributeId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ATTRIBUTE.UPDATE));
        }
    }
    public static async DeleteAttributeController(req: Request, res: Response) {
        try {
            const result = await AttributeService.DeleteAttributeService(req.params.attributeId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ATTRIBUTE.DELETE));
        }
    }
}
