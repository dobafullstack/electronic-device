import { Router } from 'express';
import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import Authorization from '@Middlewares/Authorization';
import AttributeController from '@Controllers/Attribute.controller';

const router = Router();

router.post(Path.APP.BASE_URL, Authentication, Authorization, AttributeController.CreateAttributeController);
router.get(Path.APP.BASE_URL, AttributeController.GetListAttributesController);
router.get(Path.APP.PARAMS.replace('id', 'attributeId'), AttributeController.GetDetailAttributeController);
router.put(Path.APP.PARAMS.replace('id', 'attributeId'), Authentication, Authorization, AttributeController.UpdateAttributeController);
router.delete(Path.APP.PARAMS.replace('id', 'attributeId'), Authentication, Authorization, AttributeController.DeleteAttributeController);

export default router;
