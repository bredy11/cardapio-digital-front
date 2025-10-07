<template>
  <div class="dashboard-container">
    <Navbar :items="navItems" />
    <main class="dashboard-content">
      <header class="page-header">
        <h1>Olá, [Nome do Restaurante]!</h1>
        <div class="header-actions">
          <Button label="Cadastrar Novo Restaurante" icon="pi pi-plus" class="p-button-success" />
          <Button label="Apoio/Ajuda" icon="pi pi-info-circle" class="p-button-secondary" />
        </div>
      </header>

      <div class="metrics-grid">
        <Card class="metric-card">
          <template #title>Valor Vendido</template>
          <template #content>
            <p class="metric-value">R$ 15.450,23</p>
            <p class="metric-subtitle">Últimos 7 dias</p>
          </template>
        </Card>
        <Card class="metric-card">
          <template #title>Pedidos em Andamento</template>
          <template #content>
            <p class="metric-value">12</p>
          </template>
        </Card>
        <Card class="metric-card">
          <template #title>Pedidos Concluídos</template>
          <template #content>
            <p class="metric-value">350</p>
          </template>
        </Card>
      </div>

      <div class="charts-grid">
        <Card class="chart-card">
          <template #title>Gráfico de Vendas</template>
          <template #content>
            <Chart type="line" :data="salesChartData" :options="chartOptions" />
          </template>
        </Card>
        <Card class="chart-card">
          <template #title>Valor Vendido por Categoria</template>
          <template #content>
            <Chart type="doughnut" :data="categoryChartData" :options="chartOptions" />
          </template>
        </Card>
      </div>

      <div class="restaurants-list">
        <h2>Meus Restaurantes Cadastrados</h2>
        <Card class="restaurant-item">
            <template #content>
                <div class="restaurant-info">
                    <div class="status-indicator"></div>
                    <span>Restaurane Hame</span>
                </div>
                <div class="restaurant-actions">
                    <Button label="Ver Cardápios" class="p-button-outlined" />
                    <Button label="Ver Pedidos" class="p-button-outlined" />
                    <Button label="Editar" />
                </div>
            </template>
        </Card>
        <Card class="restaurant-item">
            <template #content>
                <div class="restaurant-info">
                    <span>Resiffic dão OS</span>
                </div>
                <div class="restaurant-actions">
                    <Button label="Ver Cardápios" class="p-button-outlined" />
                    <Button label="Ver Pedidos" class="p-button-outlined" />
                    <Button label="Editar" />
                </div>
            </template>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/layouts/Navbar.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Chart from 'primevue/chart';

const navItems = ref([
  { label: 'Meus Restaurantes', to: '/dashboard' },
  { label: 'Cardápios', to: '#' },
  { label: 'Pedidos', to: '#' },
  { label: 'Financeiro', to: '#' },
  { label: 'Analytics', to: '#' },
  { label: 'Configurações', to: '#' },
]);

const salesChartData = ref({
  labels: ['0', '20M', '20M', '20M', '36M', '26M', '20M'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 8, 12, 15, 20, 18, 22],
      borderColor: '#4CAF50',
      tension: 0.4,
    },
    {
      label: 'Dataset 2',
      data: [0, 5, 8, 10, 14, 12, 16],
      borderColor: '#FF9800',
      tension: 0.4,
    },
  ],
});

const categoryChartData = ref({
    labels: ['Categoria A', 'Categoria B', 'Categoria C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ['#1A2E40', '#4CAF50', '#FF9800'],
        },
    ],
});


const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
});

</script>

<style lang="scss" scoped>
.dashboard-container {
  background-color: #f4f7f9;
  min-height: 100vh;
  padding-top: 7rem;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #1A2E40;
  }

  .header-actions {
    display: flex;
    gap: 1rem;
  }
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.metric-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  .metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1A2E40;
    margin: 0;
  }

  .metric-subtitle {
    font-size: 0.9rem;
    color: #6c757d;
    margin-top: 0.25rem;
  }
}

.charts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1rem;
}

.restaurants-list {
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

.restaurant-item {
    margin-bottom: 1rem;
    :deep(.p-card-content) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .restaurant-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .status-indicator {
        width: 10px;
        height: 10px;
        background-color: #4CAF50;
        border-radius: 50%;
    }

    .restaurant-actions {
        display: flex;
        gap: 0.5rem;
    }
}

</style>