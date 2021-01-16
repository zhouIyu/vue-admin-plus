import { RouteRecordRaw } from 'vue-router';

export const notFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/error/404',
    meta: {
        hidden: true
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
};
