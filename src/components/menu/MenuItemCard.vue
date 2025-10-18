<template>
  <div class="menu-item-card">
    <div class="menu-item-card__image-container">
      <img :src="item.imagem || '/placeholder-image.png'" :alt="item.nome" class="menu-item-card__image" />
    </div>
    <div class="menu-item-card__details">
      <h3 class="menu-item-card__name">{{ item.nome }}</h3>
      <p class="menu-item-card__description">{{ item.descricao }}</p>
      <div class="menu-item-card__footer">
        <span class="menu-item-card__price">{{ formatCurrency(item.valorTotal) }}</span>
        <Button icon="pi pi-plus" rounded @click="onAddItem" aria-label="Adicionar ao carrinho" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItemPayload } from '@/models/menu';
import Button from 'primevue/button';

interface Props {
  item: MenuItemPayload;
}

const props = defineProps<Props>();

const emit = defineEmits(['add-item']);

const onAddItem = () => {
  emit('add-item', props.item);
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
</script>

<style scoped lang="scss">
.menu-item-card {
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  gap: 1rem;
  align-items: center;

  &__image-container {
    flex-shrink: 0;
  }

  &__image {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
  }

  &__details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
  }

  &__description {
    font-size: 0.9rem;
    color: #6c757d;
    margin: 0.25rem 0;
    flex-grow: 1;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }

  &__price {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--p-primary-color);
  }
}
</style>