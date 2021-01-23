import request from '@/utils/request';
import { BaseUser, UserCreate } from '@/types/data';

const Api = {
    login: '/user/login',
    createUser: '/user/create',
    getMyInfo: '/user/mine',
    getUserList: '/user/list'
};

export const login = (body: BaseUser) => {
    return request({
        url: Api.login,
        method: 'POST',
        data: body
    });
};

export const createUser = (body: UserCreate) => {
    return request({
        url: Api.createUser,
        method: 'POST',
        data: body
    });
};

export const getMyInfo = () => {
    return request({
        url: Api.getMyInfo,
        method: 'GET'
    });
};

export const getUserList = () => {
    return request({
        url: Api.getUserList,
        method: 'GET'
    });
};
