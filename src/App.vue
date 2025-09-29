<template>
  <link rel="stylesheet" href="https://unpkg.com/primevue/resources/themes/lara-light-blue/theme.css">
  <link rel="stylesheet" href="https://unpkg.com/primevue/resources/primevue.min.css">
  <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css">
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