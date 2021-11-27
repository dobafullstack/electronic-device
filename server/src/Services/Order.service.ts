import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Order from '@Models/Order';
import Product from '@Models/Product';
import CreateOrderInput from '@Types/Input/CreateOrder';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash';

export default class OrderService {
    public static async CreateOrderService(body: CreateOrderInput): Promise<ApiResponse> {
        let total = 0;

        const products = body.products.map(async product => ({
            product: await Product.findById(product.productId),
            count: product.count
        }))

        for (let i = 0; i < products.length; i++) {
            total += ((await products[i]).product?.price as number) * (await products[i]).count
            
        }

        const result = await Order.create({
            ...body,
            total
        })
            .then(() => GetActionResult(201, null, null, Result.ORDER.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.ORDER.CREATE);
            });

        return result;
    }
    public static async GetListOrdersService(): Promise<ApiResponse> {
        const result = await Order.find();

        return GetActionResult(200, result, null);
    }
    public static async GetDetailOrderService(orderId: string): Promise<ApiResponse> {
        const existingOrder = await Order.findById(orderId);

        if (!existingOrder) return GetActionResult(400, null, { message: 'Can not find any order' }, Result.ORDER.GET_DETAIL);

        return GetActionResult(200, existingOrder, null);
    }
    public static async UpdateOrderService(orderId: string, body: any): Promise<ApiResponse> {
        const existingOrder = await Order.findById(orderId);

        if (!existingOrder) return GetActionResult(400, null, { message: 'Can not find any order' }, Result.ORDER.UPDATE);

        _.extend(existingOrder, body);

        const result = await existingOrder.save().then(() => GetActionResult(200, null, null, Result.ORDER.UPDATE)).catch((err: any) => {
            Logger.error(err);
            return GetActionResult(400, null, {message: err.message}, Result.ORDER.UPDATE);
        })

        return result;
    }
    public static async DeleteOrderService(orderId: string): Promise<ApiResponse> {
        const existingOrder = await Order.findById(orderId);

        if (!existingOrder) return GetActionResult(400, null, { message: 'Can not find any order' }, Result.ORDER.DELETE);

        const result = await Order.findByIdAndDelete(orderId)
            .then(() => GetActionResult(200, null, null, Result.ORDER.DELETE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.ORDER.DELETE);
            });
        
        return result;
    }
}
