import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Bill from '@Models/Bill';
import Product from '@Models/Product';
import CreateBillInput from '@Types/Input/CreateBill';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash';

export default class BillService {
    public static async CreateBillService(body: CreateBillInput): Promise<ApiResponse> {
        let total = 0;

        const products = body.products.map(async (product) => ({
            product: await Product.findById(product.productId),
            count: product.count,
        }));

        for (let i = 0; i < products.length; i++) {
            total += ((await products[i]).product?.price as number) * (await products[i]).count;
        }

        const result = await Bill.create({
            ...body,
            total
        })
            .then(() => GetActionResult(201, null, null, Result.BILL.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.BILL.CREATE);
            });

        return result;
    }
    public static async GetListBillsService(): Promise<ApiResponse> {
        const result = await Bill.find();

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
