<template>
  <div class="home-view">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">Encontre seu sabor</h1>
      <div class="search-container">
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            type="text"
            placeholder="Pesquisar restaurantes ou pratos"
            class="search-input"
          />
        </span>
      </div>
      <div class="location-container">
        <i class="pi pi-map-marker location-icon"></i>
        <span class="location-text">
          Localização atual: <strong>São Paulo, SP</strong>
        </span>
      </div>
    </div>

    <!-- Quick Filters Section -->
    <div class="quick-filters">
      <Button icon="pi pi-prime" rounded class="filter-button" />
      <Button icon="pi pi-heart" rounded class="filter-button" />
      <Button icon="pi pi-star" rounded class="filter-button" />
      <Button icon="pi pi-filter" rounded class="filter-button" />
      <Button icon="pi pi-bell" rounded class="filter-button" />
    </div>

    <!-- Explore by Category Section -->
    <div class="category-section">
      <h2 class="section-title">Explorar por Categoria</h2>
      <div class="category-cards">
        <Card v-for="n in 5" :key="n" class="category-card">
          <template #header>
            <img
              alt="Category Image"
              src="https://placehold.co/300x180/2d323e/ffffff?text=Food"
              class="card-image"
            />
          </template>
          <template #title>Cesta Name</template>
          <template #subtitle>Cumkie</template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
</script>

<style lang="scss" scoped>
.home-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1A2E40;
}

.search-container {
  margin-bottom: 1rem;
  .search-input {
    width: 100%;
    max-width: 600px;
    border-radius: 25px;
    padding: 1rem 1rem 1rem 3rem; // Adjust padding for icon
  }
}

.location-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.9rem;
}

.quick-filters {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;

  .filter-button {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    color: #333;

    &:hover {
      background-color: #e0e0e0;
    }
  }
}

.category-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1A2E40;
}

.category-cards {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto; // for horizontal scrolling on smaller screens
  padding-bottom: 1rem;
}

.category-card {
  min-width: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  .card-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  :deep(.p-card-title) {
    font-size: 1.1rem;
    font-weight: 700;
  }

  :deep(.p-card-subtitle) {
    color: #6c757d;
  }
}
</style>