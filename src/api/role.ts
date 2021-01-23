import request from '@/utils/request';
import { Role } from '@/types/data';

const Api = {
    createRole: '/role/create',
    getRoleList: '/role/list',
    removeRoleById: '/remove'
};

export const createRole = (body: Role) => {
    return request({
        url: Api.createRole,
        method: 'GET',
        data: body
    });
};

export const removeRoleById = (id: string) => {
    return request({
        url: '/' + id + Api.createRole,
        method: 'DELETE'
    });
};

export const getRoleList = () => {
    return request({
        url: Api.getRoleList,
        method: 'get'
    });
};
