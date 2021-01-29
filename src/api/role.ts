import request from '@/utils/request';
import { Role } from '@/types/data';

const Api = {
    createRole: '/role/create',
    getRoleList: '/role/list',
    updateRoleById: '/role/update/',
    removeRoleById: '/role/remove/'
};

export const createRole = (body: Role) => {
    return request({
        url: Api.createRole,
        method: 'POST',
        data: body
    });
};

export const updateRoleById = (id: string, body: Role) => {
    return request({
        url: Api.updateRoleById + id,
        method: 'PUT',
        data: body
    });
};

export const removeRoleById = (id: string) => {
    return request({
        url: Api.removeRoleById + id,
        method: 'DELETE'
    });
};

export const getRoleList = (query: any) => {
    return request({
        url: Api.getRoleList,
        method: 'get',
        params: query
    });
};
