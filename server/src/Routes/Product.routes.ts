import { Router } from 'express';
import ProductController from '@Controllers/Product.controller';
import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import Authorization from '@Middlewares/Authorization';

const router = Router();

router.post(Path.APP.BASE_URL, Authentication, Authorization, ProductController.CreateProductController);
router.get(Path.APP.BASE_URL, ProductController.GetListProductsController);
router.get(Path.APP.PARAMS.replace('id', 'productId'), ProductController.GetDetailProductController);
router.get(Path.PRODUCT.CATEGORY, ProductController.GetProductsByCategoryIdController);
router.get(Path.PRODUCT.SEARCH, ProductController.GetProductsProductNameController);
router.get(Path.PRODUCT.CATEGORY_DETAIL, ProductController.GetProductsByCategoryDetailIdController);
router.put(Path.APP.PARAMS.replace('id', 'productId'), Authentication, Authorization, ProductController.UpdateProductController);
router.delete(Path.APP.PARAMS.replace('id', 'productId'), Authentication, Authorization, ProductController.DeleteProductController);

export default router;
