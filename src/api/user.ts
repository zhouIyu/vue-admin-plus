import request from '@/utils/request';

export interface Login {
    username: string;
    password: string;
}

export const login = async (body: Login) => {
    return request.post('/login', body);
};
