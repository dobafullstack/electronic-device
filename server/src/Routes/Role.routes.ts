import { Router } from 'express';
import RoleController from '@Controllers/Role.controller';
import Path from '@Constants/Path';

const router = Router();

router.get(Path.APP.BASE_URL, RoleController.GetListRolesController);
router.get(Path.APP.PARAMS.replace('id', 'roleId'), RoleController.GetDetailRoleController);
router.post(Path.APP.BASE_URL, RoleController.CreateRoleController);
router.put(Path.APP.PARAMS.replace('id', 'roleId'), RoleController.UpdateRoleController);
router.delete(Path.APP.PARAMS.replace('id', 'roleId'), RoleController.DeleteRoleController);

export default router;
