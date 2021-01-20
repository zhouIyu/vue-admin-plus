import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const vapRoutes: RouteRecordRaw = {
    path: '/vap',
    redirect: '/vap/vapIndex',
    name: 'Vap',
    meta: {
        title: '组件',
        icon: 'el-icon-menu',
        hidden: false
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
};
export default vapRoutes;
