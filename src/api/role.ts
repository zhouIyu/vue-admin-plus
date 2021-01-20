import request from '@/utils/request';

export const getRoleList = () => {
    return request({
        url: '/getRoleList',
        method: 'get'
    });
};
