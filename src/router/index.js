import { createRouter, createWebHistory } from 'vue-router';
import CadastroUsuarioView from '../views/usuario/CadastroUsuarioView.vue';
import LoginView from '../views/usuario/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import CadastroRestauranteView from '../views/restaurante/CadastroRestauranteView.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
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
  {
    path: '/restaurantes/novo',
    name: 'CadastroRestaurante',
    component: CadastroRestauranteView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;