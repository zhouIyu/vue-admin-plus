import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

const instance = axios.create({
    baseURL: 'mock-server'
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse) => {
    const data = response.data;
    if (data.code === 200) {
        return data;
    } else {
        ElMessage.error(data.msg);
    }
}, error => {
    return Promise.reject(error);
});

export default instance;
