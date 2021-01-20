import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseData } from '@/types/response';
import _ from 'lodash';

const instance = axios.create({
    baseURL: 'mock-server'
});

const request = (config: AxiosRequestConfig): Promise<ResponseData> => {
    const conf: AxiosRequestConfig = _.cloneDeep(config);
    return new Promise((resolve) => {
        instance.request<any, AxiosResponse<ResponseData>>(conf)
            .then((res) => {
                resolve(res.data);
            });
    });
};

export default request;
