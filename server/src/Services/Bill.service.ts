import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Bill from '@Models/Bill';
import Order from '@Models/Order';
import Product from '@Models/Product';
import CreateBillInput from '@Types/Input/CreateBill';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash';

export default class BillService {
    public static async CreateBillService(body: any): Promise<ApiResponse> {
        const order = await Order.findById(body.orderId);

        if (order){
            order.haveInBill = true;
            await order.save();
            const result = await Bill.create({
                userId: order.userId,
                productItems: order.productItems,
                total: order.total
            })
                .then(() => GetActionResult(201, null, null, Result.BILL.CREATE))
                .catch((err: any) => {
                    Logger.error(err);
                    return GetActionResult(400, null, { message: err.message }, Result.BILL.CREATE);
                });
    
            return result;
        }else{
            return GetActionResult(400, null, {message: "Can not find any order"}, Result.BILL.CREATE);
        }

    }
    public static async GetListBillsService(): Promise<ApiResponse> {
        const result = await Bill.find().populate('userId');

        return GetActionResult(200, result, null);
    }
    public static async GetDetailBillService(billId: string): Promise<ApiResponse> {
        const existingBill = await Bill.findById(billId);

        if (!existingBill) return GetActionResult(400, null, { message: 'Can not find any bill' }, Result.BILL.GET_DETAIL);

        return GetActionResult(200, existingBill, null);
    }
    public static async UpdateBillService(billId: string, body: any): Promise<ApiResponse> {
        const existingBill = await Bill.findById(billId);

        if (!existingBill) return GetActionResult(400, null, { message: 'Can not find any bill' }, Result.BILL.UPDATE);

        _.extend(existingBill, body);

        const result = await existingBill
            .save()
            .then(() => GetActionResult(200, null, null, Result.BILL.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.BILL.UPDATE);
            });

        return result;
    }
    public static async DeleteBillService(billId: string): Promise<ApiResponse> {
        const existingBill = await Bill.findById(billId);

        if (!existingBill) return GetActionResult(400, null, { message: 'Can not find any bill' }, Result.BILL.DELETE);

        const result = await Bill.findByIdAndDelete(billId)
            .then(() => GetActionResult(200, null, null, Result.BILL.DELETE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.BILL.DELETE);
            });

        return result;
    }
}
