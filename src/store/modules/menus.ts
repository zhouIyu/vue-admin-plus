import { Module } from 'vuex';
import { RouteRecordRaw } from 'vue-router';
import { constantRoutes } from '@/router/index.ts';
import filterRoutes from '@/utils/filterRoutes';

const state = {
    menus: []
};

type menusStateType = typeof state

const menus: Module<menusStateType, any> = {
    namespaced: true,
    state,
    getters: {
        menus: state1 => state1.menus
    },
    mutations: {
        setMenus (state, menus) {
            state.menus = menus;
        }
    },
    actions: {
        GenerateRoutes ({ commit }) {
            const routes: RouteRecordRaw[] = [...constantRoutes];
            commit('setMenus', filterRoutes(routes));
            return [];
        }
    }
};

export default menus;
