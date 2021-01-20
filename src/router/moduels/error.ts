import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const notFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/error/404',
    meta: {
        hidden: true
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
};

const errorRoutes: RouteRecordRaw = {
    path: '/error',
    name: 'Error',
    meta: {
        hidden: false,
        icon: 'el-icon-cpu',
        title: '错误页面'
    },
    component: Layout,
    children: [{
        path: '404',
        name: 'Error-404',
        meta: {
            title: '404'
        },
        component: () => import('@/views/error/404.vue')
    }]
};

export default errorRoutes;
