import Path from '@Constants/Path';
import AuthController from '@Controllers/Auth.controller';
import Authentication from '@Middlewares/Authentication';
import Authorization, { Strict } from '@Middlewares/Authorization';
import { Router } from 'express';

const router = Router();

router.post(Path.AUTH.LOGIN, AuthController.LoginController); //Login
router.post(Path.AUTH.REGISTER, AuthController.RegisterController); //Register
router.post(Path.AUTH.CREATE_USER, AuthController.CreateUserController); //Register
router.get(Path.AUTH.GET_USER, Authentication, AuthController.GetUserByTokenController); //Get user by token
router.get(Path.AUTH.GET_USER_BY_ID, Authentication, Strict, AuthController.GetUserByIdController); //Get user by id
router.put(Path.AUTH.UPDATE_USER, Authentication, AuthController.UpdateUserController); //Update user by token themself
router.put(Path.AUTH.UPDATE_USER_BY_ID, Authentication, Strict, AuthController.UpdateUserByIdController); //Update user by id
router.put(Path.AUTH.UPDATE_PASSWORD, Authentication, AuthController.UpdatePasswordController); //Update password
router.delete(Path.AUTH.DELETE_USER, Authentication, Strict, AuthController.DeleteUserController); //Delete user by userId (only admin can do this)
router.get(Path.AUTH.GET_LIST, Authentication, Strict, AuthController.GetListUserController); //Get list user (only admin can do this)

export default router;
