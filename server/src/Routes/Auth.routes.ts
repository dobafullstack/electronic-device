import Path from '@Constants/Path';
import AuthController from '@Controllers/Auth.controller';
import Authentication from '@Middlewares/Authentication';
import Authorization from '@Middlewares/Authorization';
import { Router } from 'express';

const router = Router();

router.post(Path.AUTH.LOGIN, AuthController.LoginController); //Login
router.post(Path.AUTH.REGISTER, AuthController.RegisterController); //Register
router.get(Path.AUTH.GET_USER, Authentication, AuthController.GetUserByTokenController); //Get user by token
router.put(Path.AUTH.UPDATE_USER, Authentication, AuthController.UpdateUserController); //Update user by token themself
router.delete(Path.AUTH.DELETE_USER, Authentication, Authorization, AuthController.DeleteUserController); //Delete user by userId (only admin can do this)

export default router;
