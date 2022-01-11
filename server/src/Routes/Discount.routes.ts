import Authorization from '@Middlewares/Authorization';
import Authentication from '@Middlewares/Authentication';
import { Router } from 'express';
import DiscountController from '@Controllers/Discount.controller';
import Path from '@Constants/Path';

const router = Router();

router.get(Path.APP.BASE_URL, DiscountController.GetListDiscountsController);
router.post(Path.APP.BASE_URL, Authentication, Authorization, DiscountController.CreateDiscountController);
router.delete(Path.APP.PARAMS.replace('id', 'discountId'), Authentication, Authorization, DiscountController.DeleteDiscountController);
router.put(Path.DISCOUNT.VERIFY, DiscountController.VerifyDiscountController);

export default router;
