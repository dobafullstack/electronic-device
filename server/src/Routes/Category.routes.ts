import { Router } from 'express';
import CategoryController from '@Controllers/Category.controller';
import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import Authorization from '@Middlewares/Authorization';

const router = Router();

router.post(Path.APP.BASE_URL, Authentication, Authorization, CategoryController.CreateCategoryController);
router.get(Path.APP.BASE_URL, CategoryController.GetListCategoriesController);
router.get(Path.APP.PARAMS.replace('id', 'categoryId'), CategoryController.GetDetailCategoryController);
router.put(Path.APP.PARAMS.replace('id', 'categoryId'), Authentication, Authorization, CategoryController.UpdateCategoryController);
router.delete(Path.APP.PARAMS.replace('id', 'categoryId'), Authentication, Authorization, CategoryController.DeleteCategoryController);

export default router;
