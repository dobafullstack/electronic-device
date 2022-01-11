import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import DiscountService from '@Services/Discount.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class DiscountController {
    public static async CreateDiscountController(req: Request, res: Response) {
        try {
            const result = await DiscountService.CreateDiscountService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.DISCOUNT.CREATE));
        }
    }
    public static async LuckyWheelController(req: Request, res: Response) {
        try {
            const result = await DiscountService.LuckyWheelServer(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.DISCOUNT.CREATE));
        }
    }
    public static async GetListDiscountsController(req: Request, res: Response) {
        try {
            const result = await DiscountService.GetListDiscountsService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.DISCOUNT.GET_LIST));
        }
    }

    public static async VerifyDiscountController(req: Request, res: Response){
        try {
            const result = await DiscountService.VerifyDiscountsService(req.body.code);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.DISCOUNT.VERIFY));
        }
    };

    public static async DeleteDiscountController(req: Request, res: Response) {
        try {
            const result = await DiscountService.DeleteDiscountService(req.params.discountId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.DISCOUNT.DELETE));
        }
    }
}
