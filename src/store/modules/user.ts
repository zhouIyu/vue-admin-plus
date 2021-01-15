import { ActionContext } from 'vuex';
import { login, Login } from '@/api/user';
import { setAccessToken, getAccessToken } from '@/utils/token';

interface UserState {
    accessToken: string;
    username: string;
    avatar: string;
}

const state: () => UserState = () => ({
    accessToken: getAccessToken(),
    username: '',
    avatar: ''
});

const getters = {
    accessToken: (state: UserState) => state.accessToken,
    username: (state: UserState) => state.username,
    avatar: (state: UserState) => state.avatar
};

const mutations = {
    setAccessToken (state: UserState, token: string) {
        state.accessToken = token;
        setAccessToken(token);
    },
    setUsername (state: UserState, username: string) {
        state.username = username;
    },
    setAvatar (state: UserState, avatar: string) {
        state.avatar = avatar;
    }
};

const actions = {
    async login (ctx: ActionContext<UserState, unknown>, body: Login) {
        const { data }: any = await login(body);
        const { accessToken } = data;
        if (accessToken) {
            ctx.commit('setAccessToken', accessToken);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
