import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import Discount from '@Models/Discount';
import _ from 'lodash';
import jwt from 'jsonwebtoken';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export default class DiscountService {
    public static async CreateDiscountService(body: any): Promise<ApiResponse> {
        const existingDiscount = await Discount.findOne({ title: body.title });

        if (existingDiscount) return GetActionResult(400, null, { message: 'Duplicate title!' }, Result.DISCOUNT.CREATE);

        const token = jwt.sign({}, process.env.SECRET_JWT as string, {
            expiresIn: body.expire,
        });

        const code = generateString(6);

        const result = await Discount.create({ ...body, token, code })
            .then(() => GetActionResult(200, null, null, Result.DISCOUNT.CREATE))
            .catch((err: any) => {
                Logger.error(err.message);
                return GetActionResult(400, null, err, Result.DISCOUNT.CREATE);
            });

        return result;
    }

    public static async GetListDiscountsService(): Promise<ApiResponse> {
        const discounts = await Discount.find();

        return GetActionResult(200, discounts, null);
    }

    public static async VerifyDiscountsService(code: string): Promise<ApiResponse> {
        const discount = await Discount.findOne({code});

        if (discount) {
            return new Promise((resolve) => {
                jwt.verify(discount.token, process.env.SECRET_JWT as string, function (err, decode) {
                    if (err) {
                        resolve(GetActionResult(200, false, null));
                    } else {
                        resolve(GetActionResult(200, discount, null));
                    }
                });
            });
        } else {
            return GetActionResult(400, null, { message: 'Can not find any discount' }, Result.DISCOUNT.VERIFY);
        }
    }

    public static async DeleteDiscountService(discountId: string): Promise<ApiResponse> {
        const existingDiscount = await Discount.findById(discountId);

        if (!existingDiscount) return GetActionResult(400, null, { message: 'Do not have any Discount' }, Result.DISCOUNT.DELETE);

        const result = await Discount.findByIdAndDelete(discountId)
            .then(() => {
                return GetActionResult(200, null, null, Result.DISCOUNT.DELETE);
            })
            .catch((err: any) => {
                Logger.error(err.message);
                return GetActionResult(400, null, err, Result.DISCOUNT.DELETE);
            });

        return result;
    }
}
