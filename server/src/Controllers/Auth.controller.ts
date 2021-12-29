import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Role from '@Models/Role';
import AuthService from '@Services/Auth.service';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class AuthController {
    public static async LoginController(req: Request, res: Response) {
        try {
            const result = await AuthService.LoginService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);

            res.status(500).json(GetErrorResult(error, Result.AUTH.LOGIN));
        }
    }

    public static async RegisterController(req: Request, res: Response) {
        try {
            const role_customer = await Role.findOne({ name: 'customer' });
            req.body.role_id = role_customer?.id;
            const result = await AuthService.RegisterService(req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);

            res.status(500).json(GetErrorResult(error, Result.AUTH.REGISTER));
        }
    }

    public static async GetUserByTokenController(req: Request, res: Response) {
        const token = req.headers['authorization']?.split(' ')[1];

        try {
            const result = await AuthService.GetUserByTokenService(token as string);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);

            res.status(500).json(GetErrorResult(error, Result.AUTH.GET_USER));
        }
    }

    public static async UpdatePasswordController(req: Request, res: Response) {
        const token = req.headers['authorization']?.split(' ')[1] as string;
        const { oldPassword, newPassword } = req.body;

        try {
            const result = await AuthService.UpdateMyPasswordService(token, oldPassword, newPassword);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error.message);
            res.status(500).json(GetErrorResult(error, Result.AUTH.UPDATE_PASSWORD));
        }
    }

    public static async UpdateUserController(req: Request, res: Response) {
        const token = req.headers['authorization']?.split(' ')[1];

        delete req.body.email;
        delete req.body.username;
        delete req.body.role_id;
        delete req.body.password;

        try {
            const result = await AuthService.UpdateUserService(token as string, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);

            res.status(500).json(GetErrorResult(error, Result.AUTH.UPDATE_USER));
        }
    }

    public static async DeleteUserController(req: Request, res: Response) {
        const token = req.headers['authorization']?.split(' ')[1];

        try {
            const result = await AuthService.DeleteUserService(token as string, req.body.userId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);

            res.status(500).json(GetErrorResult(error, Result.AUTH.DELETE_USER));
        }
    }
}
