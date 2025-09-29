import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';



 

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app');