<template>
  <div class="menu-item-card">
    <div class="card-content">
      <div class="text-content">
        <h3 class="item-name">{{ item.nome }}</h3>
        <p class="item-description">{{ item.descricao }}</p>
        <div class="item-footer">
          <span class="item-price">{{ formatCurrency(item.valorTotal) }}</span>
          <span v-if="item.quantidadeDePessoasQueServe > 0" class="item-serves">
            Serve {{ item.quantidadeDePessoasQueServe }}
          </span>
        </div>
      </div>
      <div class="image-content" v-if="item.imagem">
        <img :src="item.imagem" :alt="item.nome" class="item-image" />
      </div>
    </div>
    <div class="add-button">
        <Button
            icon="pi pi-plus"
            class="p-button-rounded p-button-primary"
            aria-label="Adicionar ao carrinho"
            @click="$emit('addToCart', item)"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItemPayload } from '@/models/menu';
import Button from 'primevue/button';

defineProps<{
  item: MenuItemPayload;
}>();

defineEmits(['addToCart']);

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
</script>

<style lang="scss" scoped>
.menu-item-card {
  border: 1px solid var(--p-surface-border);
  border-radius: var(--p-border-radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
}

.card-content {
    display: flex;
    gap: 1rem;
}

.text-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.item-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}

.item-description {
  margin: 0 0 1rem 0;
  color: var(--p-text-muted-color);
  flex-grow: 1;
}

.item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.item-price {
  font-weight: bold;
  color: var(--p-primary-color);
}

.item-serves {
    font-size: 0.8rem;
    color: var(--p-text-muted-color);
}

.image-content {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--p-border-radius);
}

.add-button {
    position: absolute;
    bottom: -20px;
    right: 20px;
}
</style>