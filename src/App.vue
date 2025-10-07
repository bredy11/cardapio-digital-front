<template>
  <div id="app">
    <Navbar :items="navItems" />
    <Toast />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Toast from 'primevue/toast';
import Navbar from '@/components/layouts/Navbar.vue';

const navItems = ref([
  { label: 'Meus Restaurantes', to: '/restaurants' },
  { label: 'Cardápios', to: '/menus' },
  { label: 'Pedidos', to: '/orders' },
  { label: 'Financeiro', to: '/financial' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Configurações', to: '/settings' }
]);
</script>

<style>
/* Global styles can go here */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  background-color: #f4f4f4; /* A light background for contrast */
}

.main-content {
  padding-top: 80px; /* Adjust this value based on the navbar's height */
}
</style>