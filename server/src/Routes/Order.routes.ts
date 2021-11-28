import { Router } from 'express';
import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import Authorization from '@Middlewares/Authorization';
import OrderController from '@Controllers/Order.controller';

const router = Router();

router.post(Path.APP.BASE_URL, Authentication, OrderController.CreateOrderController);
router.get(Path.APP.BASE_URL, OrderController.GetListOrdersController);
router.get(Path.ORDER.MY_ORDER, OrderController.GetMyOrderController);
router.get(Path.APP.PARAMS.replace('id', 'orderId'), OrderController.GetDetailOrderController);
router.put(Path.APP.PARAMS.replace('id', 'orderId'), Authentication, OrderController.UpdateOrderController);
router.delete(Path.APP.PARAMS.replace('id', 'orderId'), Authentication, Authorization, OrderController.DeleteOrderController);

export default router;
