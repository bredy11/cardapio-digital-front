import { createRouter, createWebHistory } from 'vue-router';
import CadastroUsuarioView from '../views/usuario/CadastroUsuarioView.vue';
import LoginView from '../views/usuario/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import RegisterRestaurantView from '../views/restaurante/RegisterRestaurantView.vue';
import HomeUsuarioView from '../views/usuario/HomeUsuarioView.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
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
    path: '/cadastrar-restaurante',
    name: 'RegisterRestaurant',
    component: RegisterRestaurantView,
  },
  {
    path: '/homeUsuario',
    name: 'HomeUsuario',
    component: HomeUsuarioView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;