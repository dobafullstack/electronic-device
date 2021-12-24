import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import SliderService from '@Services/Slider.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class SliderController {
    public static async CreateSliderController(req: Request, res: Response) {
        try {
            const result = await SliderService.CreateSliderService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.SLIDER.CREATE));
        }
    }
    public static async GetListSlidersController(req: Request, res: Response) {
        try {
            const result = await SliderService.GetListSlidersService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.SLIDER.GET_LIST));
        }
    }

    public static async DeleteSliderController(req: Request, res: Response) {
        try {
            const result = await SliderService.DeleteSliderService(req.params.sliderId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.SLIDER.DELETE));
        }
    }
}
