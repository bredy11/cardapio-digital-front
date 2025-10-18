import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// Icon CSS file
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(ToastService);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app');