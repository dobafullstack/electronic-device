import Logger from "@Configs/Logger";
import Result from "@Constants/Result";
import OrderService from "@Services/Order.service";
import GetErrorResult from "@Utils/GetErrorResult";
import {Request, Response} from 'express';
import jwt from 'jsonwebtoken'

export default class OrderController {
    public static async CreateOrderController(req: Request, res: Response) {
        try {
            const result = await OrderService.CreateOrderService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ORDER.CREATE));
        }
    }
    public static async GetListOrdersController(req: Request, res: Response) {
        try {
            const result = await OrderService.GetListOrdersService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ORDER.GET_LIST));
        }
    }
    public static async GetMyOrderController(req: Request, res: Response) {
        const token = req.headers['authorization']?.split(" ")[1];
        try {
            const decode: any = await jwt.verify(token as string, process.env.SECRET_JWT as string);

            const result = await OrderService.GetMyOrdersService(decode._id);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ORDER.GET_LIST));
        }
    }
    public static async GetDetailOrderController(req: Request, res: Response) {
        try {
            const result = await OrderService.GetDetailOrderService(req.params.orderId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ORDER.GET_DETAIL));
        }
    }
    public static async UpdateOrderController(req: Request, res: Response) {
        try {
            const result = await OrderService.UpdateOrderService(req.params.orderId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ORDER.UPDATE));
        }
    }
    public static async DeleteOrderController(req: Request, res: Response) {
        try {
            const result = await OrderService.DeleteOrderService(req.params.orderId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ORDER.DELETE));
        }
    }
}
