import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Discount from '@Models/Discount';
import Order from '@Models/Order';
import Product from '@Models/Product';
import User from '@Models/User';
import CreateOrderInput from '@Types/Input/CreateOrder';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash';

export default class OrderService {
    public static async CreateOrderService(body: any): Promise<ApiResponse> {
        let user: any;
        

        if (body.userId) {
            user = await User.findById(body.userId);
        }

        if (body.code) {
            const discount = await Discount.findOne({ code: body.code });

            if (discount) {
                discount.active = false;
                discount.save();
            }
            if (user){
                const index = user.rewards.findIndex((item: any) => item.code === body.code);
                if (index !== -1){
                    user.rewards = user.rewards.filter((item: any) => item.code !== body.code)
                } 
            }
        }

        const result = await Order.create(body)
            .then((res) => {
                const updateQuantity = async () => {
                    for (let i = 0; i < res.productItems.length; i++) {
                        const product = await Product.findById(res.productItems[i].productItem._id);
                        if (product) {
                            product.count = product.count - res.productItems[i].quantity;
                            product.sale_count = product.sale_count + res.productItems[i].quantity;
                            product.save();
                        }
                    }
                };

                if (user) {
                    let turns = 0;

                    res.productItems.forEach((item) => {
                        turns += item.quantity;
                    });

                    user.turns = user.turns + turns;
                    user.save();
                }

                updateQuantity().catch((err: any) => Logger.error(err));
                return GetActionResult(201, null, null, Result.ORDER.CREATE);
            })
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.ORDER.CREATE);
            });

        return result;
    }
    public static async GetListOrdersService(): Promise<ApiResponse> {
        const result = await Order.find().populate('userId');

        return GetActionResult(200, result, null);
    }
    public static async GetMyOrdersService(userId: string): Promise<ApiResponse> {
        const orders = await Order.find({ userId });

        return GetActionResult(200, orders, null);
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

        const result = await existingOrder
            .save()
            .then(() => GetActionResult(200, null, null, Result.ORDER.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.ORDER.UPDATE);
            });

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
