import { createRouter, createWebHistory } from 'vue-router';
import CadastroUsuarioView from '@/views/usuario/CadastroUsuarioView.vue';

const routes = [
  {
    path: '/cadastro',
    name: 'CadastroUsuario',
    component: CadastroUsuarioView,
  },
  // Redirect root to the registration page for now
  {
    path: '/',
    redirect: '/cadastro',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;