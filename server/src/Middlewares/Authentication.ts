import Logger from "@Configs/Logger";
import { NextFunction, Request, Response } from "express";
import jwt  from 'jsonwebtoken'

export default (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers['authorization']){
        res.status(401).json({
            code: 401,
            result: null,
            error: {
                message: "Authorization are required"
            }
        })
        return;
    }

    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(401).json({
            code: 401,
            result: null,
            error: {
                message: "Missing access_token"
            }
        })
        return;
    }

    try {
        jwt.verify(token, process.env.SECRET_JWT as string)

        return next();
    } catch (error: any) {
        Logger.error(error);
        return {
            code: 500,
            result: null,
            error: {
                message: error.message
            }
        }
    }

    
}