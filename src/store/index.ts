import { createStore } from 'vuex';
import user from './modules/user';
import menus from './modules/menus';
import { App } from 'vue';

const store = createStore({
    modules: {
        user,
        menus
    }
});

export function loadStore (app: App) {
    app.use(store);
}

export default store;
