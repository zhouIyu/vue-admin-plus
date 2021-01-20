import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import createRouterGuards from '@/router/permissions';
import Layout from '@/layout/index.vue';
import vapRoutes from '@/router/moduels/vap';
import errorRoutes, { notFound } from '@/router/moduels/error';
import systemRoutes from '@/router/moduels/system';

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        meta: {
            hidden: false
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard',
                    icon: 'el-icon-s-home'
                },
                component: () => import('@/views/dashboard/index.vue')
            }
        ]
    },
    {

        path: '/login',
        name: 'Login',
        meta: {
            hidden: true
        },
        component: () => import('@/views/login/index.vue')
    },
    { ...vapRoutes },
    { ...errorRoutes },
    { ...systemRoutes },
    { ...notFound }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes
});

export function loadRoutes (app: App) {
    app.use(router);
    createRouterGuards(router);
}

export default router;
