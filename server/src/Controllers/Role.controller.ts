import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import RoleService from '@Services/Role.service';
import CreateRole from '@Types/Input/CreateRole';
import GetErrorResult from '@Utils/GetErrorResult';
import { Request, Response } from 'express';

export default class RoleController {
    public static async CreateRoleController(req: Request, res: Response) {
        const createRoleInput: CreateRole = {
            name: req.body.name,
        };

        try {
            const result = await RoleService.CreateRoleService(createRoleInput);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ROLE.CREATE));
        }
    }
    public static async GetListRolesController(req: Request, res: Response) {
        try {
            const result = await RoleService.GetListRolesService();

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ROLE.GET_LIST));
        }
    }
    public static async GetDetailRoleController(req: Request, res: Response) {
        try {
            const result = await RoleService.GetDetailRoleService(req.params.roleId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ROLE.GET_DETAIL));
        }
    }
    public static async UpdateRoleController(req: Request, res: Response) {
        try {
            const result = await RoleService.UpdateRoleService(req.params.roleId, req.body);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ROLE.UPDATE));
        }
    }
    public static async DeleteRoleController(req: Request, res: Response) {
        try {
            const result = await RoleService.DeleteRoleService(req.params.roleId);

            res.status(result.code).json(result);
        } catch (error: any) {
            Logger.error(error);
            res.status(500).json(GetErrorResult(error, Result.ROLE.DELETE));
        }
    }
}
