import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import User from '@Models/User';
import LoginInput from '@Types/Input/LoginInput';
import RegisterInput from '@Types/Input/RegisterInput';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import ValidateRegister from '@Utils/ValidateRegister';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import md5 from 'md5';

export default class AuthService {
    public static async LoginService({ usernameOrEmail, password }: LoginInput): Promise<ApiResponse> {
        if (!usernameOrEmail || !password) {
            return GetActionResult(400, null, { message: 'Invalid username or password' }, Result.AUTH.LOGIN);
        }

        const existingUser = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });

        if (!existingUser || existingUser.password !== md5(password)) {
            return GetActionResult(400, null, { message: 'Invalid account or password' }, Result.AUTH.LOGIN);
        }

        const accessToken = await jwt.sign({ _id: existingUser._id }, process.env.SECRET_JWT as string, { expiresIn: '1 day' });

        return GetActionResult(200, { accessToken }, null);
    }

    public static async RegisterService(registerInput: RegisterInput): Promise<ApiResponse> {
        const validate = ValidateRegister(registerInput);
        registerInput.password = md5(registerInput.password);

        if (!validate.success) {
            return GetActionResult(400, null, { message: `Invalid ${validate.field}` }, Result.AUTH.REGISTER);
        }

        const existingUser = await User.findOne({ $or: [{ username: registerInput.username }, { email: registerInput.email }] });

        if (existingUser) {
            return GetActionResult(400, null, { message: 'Account already existed' }, Result.AUTH.REGISTER);
        }

        const result = User.create(registerInput)
            .then(() => GetActionResult(201, null, null, Result.AUTH.REGISTER))
            .catch((err) => {
                Logger.error(err as Error);
                return GetActionResult(400, null, { message: err.message }, Result.AUTH.REGISTER);
            });

        return result;
    }

    public static async GetUserByTokenService(token: string): Promise<ApiResponse> {
        if (!token) return GetActionResult(400, null, { message: 'Invalid token' }, Result.AUTH.GET_USER);

        try {
            const decode: any = await jwt.verify(token, process.env.SECRET_JWT as string);

            const user: any = await User.findById(decode._id).populate('role_id');

            return GetActionResult(
                200,
                {
                    ...user._doc,
                    password: undefined,
                },
                null
            );
        } catch (error: any) {
            Logger.error(error);
            return GetActionResult(400, null, { message: error.message }, Result.AUTH.GET_USER);
        }
    }

    public static async UpdateUserService(token: string, body: any): Promise<ApiResponse> {
        if (!token) return GetActionResult(400, null, { message: 'Invalid token' }, Result.AUTH.UPDATE_USER);

        try {
            const decode: any = await jwt.verify(token, process.env.SECRET_JWT as string);

            const user: any = await User.findById(decode._id);

            _.extend(user, body);
            const result = await user
                .save()
                .then(() => GetActionResult(200, null, null, Result.AUTH.UPDATE_USER))
                .catch((err: any) => {
                    Logger.error(err);
                    return GetActionResult(400, null, err, Result.AUTH.UPDATE_USER);
                });

            return result;
        } catch (error: any) {
            Logger.error(error);
            return GetActionResult(400, null, { message: error.message }, Result.AUTH.UPDATE_USER);
        }
    }

    public static async DeleteUserService(token: string, userId: string): Promise<ApiResponse> {
        if (!token) return GetActionResult(400, null, { message: 'Invalid token' }, Result.AUTH.DELETE_USER);
        if (!userId) return GetActionResult(400, null, { message: 'Invalid userId' }, Result.AUTH.DELETE_USER);

        try {
            const decode: any = await jwt.verify(token, process.env.SECRET_JWT as string);

            const user: any = await User.findById(decode._id).populate('role_id');

            if (user.role_id.name !== 'admin') {
                return GetActionResult(401, null, { message: 'You do not have permission to do this' }, Result.AUTH.DELETE_USER);
            }

            await User.findByIdAndDelete(userId);

            return GetActionResult(200, null, null, Result.AUTH.DELETE_USER);
        } catch (error: any) {
            Logger.error(error);
            return GetActionResult(400, null, { message: error.message }, Result.AUTH.DELETE_USER);
        }
    }
}
