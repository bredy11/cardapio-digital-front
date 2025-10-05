<template>
  <div id="app">
    <Toast />
    <router-view />
  </div>
</template>

<script setup>
import Toast from 'primevue/toast';

</script>

<style>
/* Global styles can go here */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>