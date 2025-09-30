import { createRouter, createWebHistory } from 'vue-router';
import CadastroUsuarioView from '../views/usuario/CadastroUsuarioView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/cadastro',
    name: 'CadastroUsuario',
    component: CadastroUsuarioView,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;