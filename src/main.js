import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// Import PrimeVue styles
import 'primevue/resources/themes/saga-blue/theme.css'; // or any other theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');