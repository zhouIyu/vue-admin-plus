import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/login/index.vue';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard'
                },
                component: () => import('@/views/dashboard/index.vue')
            }
        ]
    },
    {
        path: '/vap',
        redirect: '/vap/vapIndex',
        name: 'Vap',
        meta: {
            title: '组件'
        },
        component: Layout,
        children: [{
            path: 'vapIndex',
            name: 'VapIndex',
            meta: {
                title: '组件1'
            },
            component: () => import('@/views/vap/index.vue')
        }]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
