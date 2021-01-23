import Layout from '@/layout/index.vue';
import { RouteRecordRaw } from 'vue-router';

const systemRoutes: RouteRecordRaw = {
    path: '/system',
    name: 'System',
    redirect: '/system/user',
    meta: {
        hidden: false,
        icon: 'el-icon-setting',
        title: '系统管理'
    },
    component: Layout,
    children: [
        {
            path: 'user',
            name: 'System-Data',
            meta: {
                title: '用户管理'
            },
            component: () => import('@/views/system/user.vue')
        },
        {
            path: 'role',
            name: 'System-Role',
            meta: {
                title: '角色管理'
            },
            component: () => import('@/views/system/role/index.vue')
        },
        {
            path: 'menu',
            name: 'System-Menu',
            meta: {
                title: '菜单管理'
            },
            component: () => import('@/views/system/menu.vue')
        }]
};

export default systemRoutes;
