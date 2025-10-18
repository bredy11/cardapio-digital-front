<template>
  <Toolbar class="navbar">
    <template #start>
      <router-link to="/" class="logo-container-link">
        <div class="logo-container">
          <img src="/logo.png" alt="Logo" class="logo-img" />
          <span class="logo-text">Peça Aqui</span>
        </div>
      </router-link>
    </template>

    <template #center>
      <ul class="nav-links">
        <li v-for="item in items" :key="item.label">
          <router-link :to="item.to" class="nav-link">{{ item.label }}</router-link>
        </li>
      </ul>
    </template>

    <template #end>
      <router-link to="/login">
        <i class="pi pi-user profile-icon"></i>
      </router-link>
    </template>
  </Toolbar>
</template>

<script setup>
import Toolbar from 'primevue/toolbar';

defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 1000;
  border-radius: 12px;
  background-color: #1A2E40; // Dark Blue from image
  padding: 0.75rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: none;
  color: #ffffff;
}

.logo-container-link {
  text-decoration: none;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 28px;
  margin-right: 0.75rem;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: #E0E0E0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
  padding-bottom: 5px;

  &:hover,
  &.router-link-exact-active {
    color: #ffffff;
  }
}

.profile-icon {
  font-size: 1.75rem;
  color: #ffffff;
}

// PrimeVue Toolbar deep overrides to make it transparent
:deep(.p-toolbar) {
  background: transparent;
  border: none;
  padding: 0;
  color: inherit;
}
</style>