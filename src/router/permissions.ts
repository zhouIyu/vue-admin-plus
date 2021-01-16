import { RouteLocationNormalized, NavigationGuardNext, RouteRecordRaw, Router } from 'vue-router';
import store from '@/store';
import getPageTitle from '@/utils/getPageTitle';
import { debounce } from 'lodash';

const getRoutes = debounce((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext, router) => {
    store.dispatch('menus/GenerateRoutes').then((accessRoutes: RouteRecordRaw[]) => {
        accessRoutes.forEach(item => {
            router.addRoute(item);
        });
    }).catch(() => next({ path: '/' }));
}, 2000, { leading: true });

export default function createRouterGuards (router: Router) {
    router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        const hasToken = store.getters['user/accessToken'];
        if (hasToken) {
            if (to.path === '/login') {
                next({ path: '/', replace: true });
            } else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const hasRoute = router.hasRoute(to.name!);
                getRoutes(to, from, next, router);
                if (hasRoute) {
                    next();
                }
            }
        } else {
            if (to.path === '/login') {
                next();
            } else {
                next({ path: '/login', replace: true });
            }
        }
    });

    router.afterEach((to: RouteLocationNormalized) => {
        document.title = getPageTitle(to.meta.title);
    });
}
