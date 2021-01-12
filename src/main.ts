import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installElement from '@/plugins/element';
import '@/styles/index.scss';

const app = createApp(App);
installElement(app);
app.use(store).use(router).mount('#app');
