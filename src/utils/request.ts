import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseData } from '@/types/response';
import { ElMessage } from 'element-plus';
import router from '@/router';
import store from '@/store';

const instance = axios.create({
    baseURL: 'http://localhost:3001'
});

const whiteList = ['/user/login'];

instance.interceptors.request.use(config => {
    if (!whiteList.includes(config.url as string)) {
        config.headers.Authorization = store.getters['user/accessToken'];
    }
    return config;
});

instance.interceptors.response.use(response => {
    const res = response.data as ResponseData;
    if (res.code === 0) {
        return response;
    } else if (res.code === 4) {
        const url = window.location.href;
        store.dispatch('user/restoreToken').then(async () => {
            await router.replace({ path: '/login', query: { redirect: url } });
        });
    }
    ElMessage.error(res.msg);
    return Promise.reject(res.msg);
});

const request = (config: AxiosRequestConfig): Promise<ResponseData> => {
    return new Promise((resolve) => {
        instance.request<any, AxiosResponse<ResponseData>>(config).then(res => {
            resolve(res.data);
        });
    });
};

export default request;
