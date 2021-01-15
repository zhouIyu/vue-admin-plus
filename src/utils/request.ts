import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;
