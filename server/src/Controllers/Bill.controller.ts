import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import BillService from '@Services/Bill.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class BillController {
    public static async CreateBillController(req: Request, res: Response) {
        try {
            const result = await BillService.CreateBillService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.BILL.CREATE));
        }
    }
    public static async GetListBillsController(req: Request, res: Response) {
        try {
            const result = await BillService.GetListBillsService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.BILL.GET_LIST));
        }
    }
    public static async GetDetailBillController(req: Request, res: Response) {
        try {
            const result = await BillService.GetDetailBillService(req.params.billId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.BILL.GET_DETAIL));
        }
    }
    public static async UpdateBillController(req: Request, res: Response) {
        try {
            const result = await BillService.UpdateBillService(req.params.billId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.BILL.UPDATE));
        }
    }
    public static async DeleteBillController(req: Request, res: Response) {
        try {
            const result = await BillService.DeleteBillService(req.params.billId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.BILL.DELETE));
        }
    }
}
