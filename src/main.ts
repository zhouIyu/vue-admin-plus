import { createApp } from 'vue';
import App from './App.vue';
import { loadRoutes } from '@/router';
import { loadStore } from '@/store';
import installElement from '@/plugins/element';
import '@/styles/index.scss';

const app = createApp(App);
installElement(app);
loadStore(app);
loadRoutes(app);
app.mount('#app');
