import { Router } from 'express';
import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import Authorization, { Strict } from '@Middlewares/Authorization';
import BillController from '@Controllers/Bill.controller';

const router = Router();

router.post(Path.APP.BASE_URL, Authentication, Authorization, BillController.CreateBillController);
router.get(Path.APP.BASE_URL, BillController.GetListBillsController);
router.get(Path.APP.PARAMS.replace('id', 'billId'), BillController.GetDetailBillController);
router.put(Path.APP.PARAMS.replace('id', 'billId'), Authentication, Strict, BillController.UpdateBillController);
router.delete(Path.APP.PARAMS.replace('id', 'billId'), Authentication, Strict, BillController.DeleteBillController);

export default router;
