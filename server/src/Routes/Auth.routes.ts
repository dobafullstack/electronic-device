import Path from "@Constants/Path";
import AuthController from "@Controllers/Auth.controller";
import { Router } from "express";

const router = Router();

router.post(Path.AUTH.LOGIN, AuthController.LoginController); //Login
router.post(Path.AUTH.REGISTER, AuthController.RegisterController); //Register
router.get(Path.AUTH.GET_USER, AuthController.GetUserByTokenController); //Get user by token
router.put(Path.AUTH.UPDATE_USER, AuthController.UpdateUserController); //Update user by token themself
router.delete(Path.AUTH.DELETE_USER, AuthController.DeleteUserController); //Delete user by userId (only admin can do this)

export default router;