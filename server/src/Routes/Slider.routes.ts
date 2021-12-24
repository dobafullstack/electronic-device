import Authorization from '@Middlewares/Authorization';
import Authentication from '@Middlewares/Authentication';
import { Router } from 'express';
import SliderController from '@Controllers/Slider.controller';
import Path from '@Constants/Path';

const router = Router();

router.get(Path.APP.BASE_URL, SliderController.GetListSlidersController);
router.post(Path.APP.BASE_URL, Authentication, Authorization, SliderController.CreateSliderController);
router.delete(Path.APP.PARAMS.replace('id', 'sliderId'), Authentication, Authorization, SliderController.DeleteSliderController);

export default router;
