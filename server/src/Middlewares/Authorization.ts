import Logger from '@Configs/Logger';
import User from '@Models/User';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    try {
        const decode: any = await jwt.verify(token as string, process.env.SECRET_JWT as string);

        const user: any = await User.findById(decode._id).populate('role_id');

        if (user?.role_id.name !== 'admin' && user?.role_id.name !== 'staff') {
            res.status(401).json({
                code: 401,
                result: null,
                error: {
                    message: 'You do not have permission',
                },
            });
            return;
        }

        return next();
    } catch (error: any) {
        Logger.error(error);
        res.status(500).json({
            code: 500,
            result: null,
            error: {
                message: error.message,
            },
        });
    }
};

export const Strict = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    try {
        const decode: any = await jwt.verify(token as string, process.env.SECRET_JWT as string);

        const user: any = await User.findById(decode._id).populate('role_id');

        if (user?.role_id.name !== 'admin') {
            res.status(401).json({
                code: 401,
                result: null,
                error: {
                    message: 'You do not have permission',
                },
            });
            return;
        }

        return next();
    } catch (error: any) {
        Logger.error(error);
        res.status(500).json({
            code: 500,
            result: null,
            error: {
                message: error.message,
            },
        });
    }
};
