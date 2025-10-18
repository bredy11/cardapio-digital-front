<template>
  <div class="public-menu-view">
    <Navbar />
    <main class="container">
      <h1 class="title">Cardápio Principal</h1>
      <TabView v-model:activeIndex="activeTabIndex">
        <TabPanel v-for="category in availableCategories" :key="category" :header="category">
          <div class="grid">
            <div v-for="item in itemsByCategory(category)" :key="item.nome" class="col-12 md:col-6 lg:col-4">
              <MenuItemCard :item="item" @add-to-cart="addItemToCart" />
            </div>
          </div>
        </TabPanel>
      </TabView>
    </main>

    <div v-if="cartTotalQuantity > 0" class="floating-cart-bar" @click="toggleCart">
      <span>Ver Carrinho ({{ cartTotalQuantity }} itens)</span>
      <span>{{ formatCurrency(cartTotalValue) }}</span>
    </div>

    <Sidebar v-model:visible="isCartVisible" position="right" class="w-full md:w-30rem">
        <h2>Seu Pedido</h2>
        <div v-if="cartItems.length === 0" class="empty-cart">
            <p>Seu carrinho está vazio.</p>
        </div>
        <div v-else class="cart-items">
            <div v-for="item in cartItems" :key="item.nome" class="cart-item">
                <div class="item-info">
                    <span>{{ item.nome }} ({{ item.quantidade }}x)</span>
                    <span>{{ formatCurrency(item.valorTotal * item.quantidade) }}</span>
                </div>
                <div class="item-actions">
                    <Button icon="pi pi-minus" class="p-button-rounded p-button-text" @click="removeItemFromCart(item)" />
                    <Button icon="pi pi-plus" class="p-button-rounded p-button-text" @click="addItemToCart(item)" />
                </div>
            </div>
            <div class="cart-total">
                <strong>Total:</strong>
                <strong>{{ formatCurrency(cartTotalValue) }}</strong>
            </div>
            <div class="table-number">
                <InputText v-model.number="tableNumber" placeholder="Número da Mesa" class="w-full" type="number" />
            </div>
            <Button label="Enviar Pedido" class="w-full" @click="sendOrder" />
        </div>
    </Sidebar>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePublicMenuViewModel } from '@/composables/usePublicMenuViewModel';
import Navbar from '@/components/layouts/Navbar.vue';
import MenuItemCard from '@/components/public/MenuItemCard.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const {
  menuItems,
  cartItems,
  isCartVisible,
  tableNumber,
  availableCategories,
  cartTotalValue,
  cartTotalQuantity,
  addItemToCart,
  removeItemFromCart,
  toggleCart,
  sendOrder,
} = usePublicMenuViewModel();

const activeTabIndex = ref(0);

const itemsByCategory = (category: string) => {
  return menuItems.value.filter(item => item.categoria === category);
};

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
</script>

<style lang="scss" scoped>
.public-menu-view {
  padding-top: 60px; /* Adjust based on Navbar height */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.grid {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
}

.col-12 {
    width: 100%;
    padding: 0.5rem;
}

@media (min-width: 768px) {
    .md\:col-6 {
        width: 50%;
    }
}

@media (min-width: 992px) {
    .lg\:col-4 {
        width: 33.3333%;
    }
}

.floating-cart-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--p-primary-color);
  color: var(--p-primary-color-text);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  font-weight: bold;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-info {
    display: flex;
    flex-direction: column;
}

.item-actions {
    display: flex;
    align-items: center;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--p-surface-border);
}

.table-number {
    margin: 1.5rem 0;
}

.empty-cart {
    text-align: center;
    padding: 2rem;
}
</style>