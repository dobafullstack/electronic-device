import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import CreateSlider from '@Types/Input/CreateSliderInput';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import Slider from '@Models/Slider';
import _ from 'lodash';

export default class SliderService {
    public static async CreateSliderService(createSliderInput: CreateSlider): Promise<ApiResponse> {
        const sliders = await Slider.find();

        const existingSlider = await Slider.findOne({ title: createSliderInput.title });

        if (existingSlider) return GetActionResult(400, null, { message: 'Duplicate title!' }, Result.SLIDER.CREATE);

        const result = await Slider.create({ ...createSliderInput, index: sliders.length })
            .then(() => GetActionResult(200, null, null, Result.SLIDER.CREATE))
            .catch((err: any) => {
                Logger.error(err.message);
                return GetActionResult(400, null, err, Result.SLIDER.CREATE);
            });

        return result;
    }

    public static async GetListSlidersService(): Promise<ApiResponse> {
        const sliders = await Slider.find();

        return GetActionResult(200, sliders, null);
    }

    public static async DeleteSliderService(sliderId: string): Promise<ApiResponse> {
        const existingSlider = await Slider.findById(sliderId);

        if (!existingSlider) return GetActionResult(400, null, { message: 'Do not have any slider' }, Result.SLIDER.DELETE);

        const result = await Slider.findByIdAndDelete(sliderId)
            .then(() => {
                this.ResetIndex();
                return GetActionResult(200, null, null, Result.SLIDER.DELETE);
            })
            .catch((err: any) => {
                Logger.error(err.message);
                return GetActionResult(400, null, err, Result.SLIDER.DELETE);
            });

        return result;
    }

    private static async ResetIndex() {
        const sliders = await Slider.find();

        for (let i = 0; i < sliders.length; i++) {
            sliders[i].index = i;
            sliders[i].save();
        }
    }
}
