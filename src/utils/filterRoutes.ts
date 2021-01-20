import { RouteRecordRaw } from 'vue-router';
import { Meta } from '@/types/router';

const filterRoutes = (routes: RouteRecordRaw[]) => {
    const list = routes.filter(router => {
        const meta: Meta = router.meta as Meta;
        return !meta.hidden;
    });

    const menus: RouteRecordRaw[] = [];
    list.forEach(item => {
        const meta: Meta = item.meta as Meta;
        if (meta.title) {
            menus.push(item);
        } else {
            const { children = [] } = item;
            children.forEach(child => {
                menus.push(child);
            });
        }
    });
    return menus;
};

export default filterRoutes;
