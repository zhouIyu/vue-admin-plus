import { Module } from 'vuex';
import { login } from '@/api/user';
import { setAccessToken, getAccessToken, removeAccessToken } from '@/utils/token';
import { BaseUser } from '@/types/data';
import { ResponseData } from '@/types/response';

const state = {
    accessToken: getAccessToken(),
    username: '',
    avatar: ''
};

export type UserStateType = typeof state;

const user: Module<UserStateType, any> = {
    namespaced: true,
    state,
    getters: {
        accessToken: (state1) => state1.accessToken
    },
    mutations: {
        setAccessToken (state, token: string) {
            state.accessToken = token;
            setAccessToken(token);
        },
        setUsername (state, username: string) {
            state.username = username;
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
        restoreToken ({ commit }) {
            removeAccessToken();
            commit('setAccessToken', '');
        }
    }
};

export default user;
