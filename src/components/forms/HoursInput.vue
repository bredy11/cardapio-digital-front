<template>
  <div class="hours-input-container">
    <div v-for="day in days" :key="day.key" class="p-field p-grid">
      <label :for="day.key" class="p-col-fixed" style="width:100px">{{ day.label }}</label>
      <div class="p-col">
        <InputMask :id="day.key + '-open'" v-model="hours[day.key][0]" mask="99:99" placeholder="Abertura" />
      </div>
      <div class="p-col">
        <InputMask :id="day.key + '-close'" v-model="hours[day.key][1]" mask="99:99" placeholder="Fechamento" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineModel } from 'vue';
import InputMask from 'primevue/inputmask';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const hours = defineModel('modelValue');

const days = [
  { key: 'segunda', label: 'Segunda' },
  { key: 'terca', label: 'Terça' },
  { key: 'quarta', label: 'Quarta' },
  { key: 'quinta', label: 'Quinta' },
  { key: 'sexta', label: 'Sexta' },
  { key: 'sabado', label: 'Sábado' },
  { key: 'domingo', label: 'Domingo' },
];
</script>

<style scoped>
.hours-input-container .p-field {
  margin-bottom: 1rem;
}
</style>