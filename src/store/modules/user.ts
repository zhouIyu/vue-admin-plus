import { Module } from 'vuex';
import { getMyInfo, login } from '@/api/user';
import { setAccessToken, getAccessToken, removeAccessToken } from '@/utils/token';
import { BaseUser, Role } from '@/types/data';
import { ResponseData } from '@/types/response';

type RoleStateType = Role | {};

const state = {
    accessToken: getAccessToken(),
    username: '',
    role: {} as RoleStateType,
    avatar: ''
};

export type UserStateType = typeof state;

const user: Module<UserStateType, any> = {
    namespaced: true,
    state,
    getters: {
        accessToken: (state1) => state1.accessToken,
        username: state1 => state1.username,
        role: state1 => state1.role
    },
    mutations: {
        setAccessToken (state, token: string) {
            state.accessToken = token;
            setAccessToken(token);
        },
        setUsername (state, username: string) {
            state.username = username;
        },
        setRole (state, role: RoleStateType) {
            state.role = role;
        },
        setAvatar (state, avatar: string) {
            state.avatar = avatar;
        }
    },
    actions: {
        async login ({ commit }, body: BaseUser) {
            const { data }: ResponseData = await login(body);
            const { token } = data;
            if (token) {
                commit('setAccessToken', token);
                return true;
            }
            return false;
        },
        async getMyInfo ({ commit }) {
            const { data } = await getMyInfo();
            commit('setUsername', data.username);
            commit('setRole', data.role);
        },
        async logout ({ dispatch }) {
            await dispatch('restoreToken');
        },
        async restoreToken ({ commit }) {
            commit('setAccessToken', '');
            commit('setUsername', '');
            commit('setRole', {});
            removeAccessToken();
        }
    }
};

export default user;
