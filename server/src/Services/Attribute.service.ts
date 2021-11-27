import Attribute from '@Models/Attribute';
import CreateAttributeInput from '@Types/Input/CreateAttribute';
import ApiResponse from '@Types/ResponseType';
import Result from '@Constants/Result';
import GetActionResult from '@Utils/GetActionResult';
import Logger from '@Configs/Logger';
import _ from 'lodash';

export default class AttributeService {
    public static async CreateAttributeService(body: CreateAttributeInput): Promise<ApiResponse> {
        const existingAttribute = await Attribute.findOne({ name: body.name });

        if (existingAttribute) return GetActionResult(400, null, { message: 'Duplicate attribute' }, Result.ATTRIBUTE.CREATE);

        const result = await Attribute.create(body)
            .then(() => GetActionResult(201, null, null, Result.ATTRIBUTE.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.ATTRIBUTE.CREATE);
            });

        return result;
    }

    public static async GetListAttributesService(): Promise<ApiResponse> {
        const attributes = await Attribute.find();

        return GetActionResult(200, attributes, null);
    }

    public static async GetDetailAttributeService(attributeId: string): Promise<ApiResponse> {
        const existingAttribute = await Attribute.findById(attributeId);

        if (!existingAttribute) return GetActionResult(400, null, { message: 'Can not find any attribute' }, Result.ATTRIBUTE.GET_DETAIL);

        return GetActionResult(200, existingAttribute, null);
    }

    public static async UpdateAttributeService(attributeId: string, body: any): Promise<ApiResponse> {
        const existingAttribute = await Attribute.findById(attributeId);

        if (!existingAttribute) return GetActionResult(400, null, { message: 'Can not find any attribute' }, Result.ATTRIBUTE.UPDATE);

        _.extend(existingAttribute, body);

        const result = await existingAttribute
            .save()
            .then(() => GetActionResult(200, null, null, Result.ATTRIBUTE.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.ATTRIBUTE.UPDATE);
            });

        return result;
    }

    public static async DeleteAttributeService(attributeId: string): Promise<ApiResponse> {
        const existingAttribute = await Attribute.findById(attributeId);

        if (!existingAttribute) return GetActionResult(400, null, { message: 'Can not find any attribute' }, Result.ATTRIBUTE.GET_DETAIL);

        const result = await Attribute.findByIdAndDelete(attributeId)
            .then(() => GetActionResult(200, null, null, Result.ATTRIBUTE.UPDATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, err, Result.ATTRIBUTE.UPDATE);
            });

        return result;
    }
}
