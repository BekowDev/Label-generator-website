import { createApp } from 'vue';
import App from './App.vue';
import '../src/css/style.css';
import components from '@/components/UI';
import router from './router/router';
import store from './store';
import i18n from './locales';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');




