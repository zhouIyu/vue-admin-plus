import request from '@/utils/request';

export interface Login {
    username: string;
    password: string;
}

export const login = (body: Login) => {
    return request({
        url: '/login',
        method: 'POST',
        data: body
    });
};

export const getUserList = () => {
    return request({
        url: '/getUserList',
        method: 'GET'
    });
};
