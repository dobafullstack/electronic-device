import Logger from "@Configs/Logger";
import Result from "@Constants/Result";
import Role from "@Models/Role";
import CreateRole from "@Types/Input/CreateRole";
import ApiResponse from "@Types/ResponseType";
import GetActionResult from "@Utils/GetActionResult";
import _ from 'lodash';

export default class RoleService {
    public static async CreateRoleService(createRoleInput: CreateRole): Promise<ApiResponse> {
        const { name } = createRoleInput;

        if (!name) return GetActionResult(400, null, {message: 'Invalid input'}, Result.ROLE.CREATE);

        const existingRole = await Role.findOne({name});

        if (existingRole) return GetActionResult(400, null, {message: 'Duplicate role'}, Result.ROLE.CREATE);

        const result = Role.create(createRoleInput).then(() => GetActionResult(201, null, null, Result.ROLE.CREATE)).catch((err: any) => {
            Logger.error(err);
            return GetActionResult(400, null, {message: err.message}, Result.ROLE.CREATE)
        })

        return result
    }

    public static async GetListRolesService(): Promise<ApiResponse> {
        const roles = await Role.find();

        return GetActionResult(200, roles, null);
    }

    public static async GetDetailRoleService(roleId: string): Promise<ApiResponse> {
        if (!roleId) return GetActionResult(400, null, { message: 'Invalid id' }, Result.ROLE.GET_DETAIL);

        const role = await Role.findById(roleId);

        if (!role) return GetActionResult(400, null, {message: "Can not find any role"}, Result.ROLE.GET_DETAIL)

        return GetActionResult(200, role, null);
    }

    public static async UpdateRoleService(roleId: string, body: any): Promise<ApiResponse> {
        if (!roleId) return GetActionResult(400, null, { message: 'Invalid id' }, Result.ROLE.UPDATE);

        const existingRole = await Role.findById(roleId);

        if (!existingRole) return GetActionResult(400, null, { message: 'Can not find any role' }, Result.ROLE.UPDATE);

        _.extend(existingRole, body);

        const result = await existingRole.save().then(() => GetActionResult(200, null, null, ))

        return GetActionResult(200, null, null, Result.ROLE.UPDATE);
    }

    public static async DeleteRoleService(roleId: string): Promise<ApiResponse> {
        if (!roleId) return GetActionResult(400, null, { message: 'Invalid id' }, Result.ROLE.DELETE);

        const existingRole = await Role.findById(roleId);

        if (!existingRole) return GetActionResult(400, null, { message: 'Can not find any role' }, Result.ROLE.DELETE);

        await Role.findByIdAndDelete(roleId);

        return GetActionResult(200, null, null, Result.ROLE.DELETE)
    }
}