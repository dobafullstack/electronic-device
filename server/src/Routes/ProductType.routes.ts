import { Router } from 'express';
import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import Authorization from '@Middlewares/Authorization';
import ProductTypeController from '@Controllers/ProductType.controller';

const router = Router();

router.post(Path.APP.BASE_URL, Authentication, Authorization, ProductTypeController.CreateProductTypeController);
router.get(Path.APP.BASE_URL, ProductTypeController.GetListProductTypesController);
router.get(Path.APP.PARAMS.replace('id', 'productTypeId'), ProductTypeController.GetDetailProductTypeController);
router.put(Path.APP.PARAMS.replace('id', 'productTypeId'), Authentication, Authorization, ProductTypeController.UpdateProductTypeController);
router.delete(Path.APP.PARAMS.replace('id', 'productTypeId'), Authentication, Authorization, ProductTypeController.DeleteProductTypeController);

export default router;
