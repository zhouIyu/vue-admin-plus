import { Module } from 'vuex';
import { login, Login } from '@/api/user';
import { setAccessToken, getAccessToken } from '@/utils/token';

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
        async login ({ commit }, body: Login) {
            const { data }: any = await login(body);
            const { accessToken } = data;
            if (accessToken) {
                commit('setAccessToken', accessToken);
                return true;
            }
            return false;
        }
    }
};

export default user;
