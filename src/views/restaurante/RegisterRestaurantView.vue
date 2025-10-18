<template>
  <div class="page-container">
    <!-- Main layout using PrimeFlex Grid -->
    <div class="grid">
      <!-- Form Column (Left) -->
      <div class="col-12 md:col-7">
        <div class="card p-fluid">
          <h2 class="form-title">Cadastrar Novo Restaurante</h2>

          <!-- Basic Information Section -->
          <div class="grid form-section">
            <div class="field col-12 md:col-6">
              <label for="restaurantName">Nome do Restaurante</label>
              <InputText id="restaurantName" v-model="form.nome" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="category">Categoria</label>
              <Dropdown id="category" v-model="form.categoria" :options="categories" optionLabel="name" optionValue="name" placeholder="Selecione uma categoria" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="phone">Telefone</label>
              <InputMask id="phone" v-model="form.telefone" mask="(99) 99999-9999" />
            </div>
          </div>

          <!-- Address Section -->
          <Divider align="left" type="solid"><b>Endereço</b></Divider>
          <div class="grid form-section">
            <div class="field col-12 md:col-4">
              <label for="zipcode">CEP</label>
              <InputText id="zipcode" v-model="form.endereco.cep" />
            </div>
             <div class="field col-12 md:col-4">
              <label for="state">Estado</label>
              <Dropdown id="state" v-model="form.endereco.estado" :options="states" placeholder="Selecione" />
            </div>
            <div class="field col-12 md:col-4">
              <label for="city">Cidade</label>
              <InputText id="city" v-model="form.endereco.cidade" />
            </div>
            <div class="field col-12 md:col-8">
              <label for="neighborhood">Bairro</label>
              <InputText id="neighborhood" v-model="form.endereco.bairro" />
            </div>
            <div class="field col-12 md:col-4">
              <label for="number">Número</label>
              <InputText id="number" v-model="form.endereco.numero" />
            </div>
            <div class="field col-12">
              <label for="complement">Complemento</label>
              <InputText id="complement" v-model="form.endereco.complemento" />
            </div>
          </div>

          <!-- Operating Hours Section -->
          <Divider align="left" type="solid"><b>Horário de Funcionamento</b></Divider>
          <div class="form-section">
            <HoursInput v-model="form.horarioFuncionamento" />
          </div>

          <!-- Social Media Section -->
          <Divider align="left" type="solid"><b>Redes Sociais e Site</b></Divider>
            <div class="grid form-section">
                <div class="field col-12 md:col-4">
                    <label for="urlInstagram">Instagram</label>
                    <InputText id="urlInstagram" v-model="form.urlInstagram" placeholder="ex: @meurestaurante" />
                </div>
                <div class="field col-12 md:col-4">
                    <label for="urlFacebock">Facebook</label>
                    <InputText id="urlFacebock" v-model="form.urlFacebock" placeholder="ex: /meurestaurante" />
                </div>
                <div class="field col-12 md:col-4">
                    <label for="urlSite">Site</label>
                    <InputText id="urlSite" v-model="form.urlSite" placeholder="ex: www.site.com" />
                </div>
            </div>

          <!-- Image Upload Section -->
          <Divider align="left" type="solid"><b>Imagem do Restaurante</b></Divider>
          <div class="form-section">
            <FileUpload
              name="restaurantImage"
              @uploader="handleImageUpload"
              :multiple="false"
              accept="image/*"
              :maxFileSize="1000000"
              chooseLabel="Escolher Imagem"
              uploadLabel="Enviar"
              cancelLabel="Cancelar"
              :customUpload="true"
            >
              <template #empty>
                <p>Arraste e solte a imagem aqui ou clique para selecionar.</p>
              </template>
            </FileUpload>
          </div>

          <!-- Form Actions -->
          <div class="form-actions">
            <Button label="Cancelar" @click="cancelRegistration" class="p-button-outlined p-button-secondary" />
            <Button label="Cadastrar Restaurante" @click="submitRegistration" class="p-button-success" />
          </div>
        </div>
      </div>

      <!-- Preview Column (Right) -->
      <div class="col-12 md:col-5">
        <div class="card preview-card">
          <h3 class="preview-title">Visualização em Tempo Real</h3>
          <div class="preview-content">
            <img :src="imagePreview || 'https://via.placeholder.com/400x200.png?text=Imagem+do+Restaurante'" alt="Preview" class="preview-image" />
            <div class="preview-info">
              <h4 class="restaurant-name">{{ form.nome || 'Nome do Restaurante' }}</h4>
              <p class="restaurant-category">{{ form.categoria || 'Categoria' }}</p>
              <div class="address-details" v-if="form.endereco.bairro && form.endereco.cidade">
                 <i class="pi pi-map-marker"></i>
                 <span>{{ form.endereco.bairro }}, {{ form.endereco.cidade }} - {{ form.endereco.estado }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRegisterRestaurantViewModel } from '@/composables/useRegisterRestaurantViewModel';
import HoursInput from '@/components/forms/HoursInput.vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputMask from 'primevue/inputmask';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

// Initialize the ViewModel
const {
  form,
  imagePreview,
  categories,
  states,
  handleImageUpload,
  submitRegistration,
  cancelRegistration
} = useRegisterRestaurantViewModel();
</script>

<style lang="scss" scoped>
.page-container {
  padding: 2rem;
  background-color: #f9fafb;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.form-section {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.preview-card .preview-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.preview-content .preview-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.preview-info {
  text-align: center;
}

.preview-info .restaurant-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.preview-info .restaurant-category {
  color: #6c757d;
  margin-top: 0.25rem;
}

.address-details {
    margin-top: 1rem;
    color: #495057;
}

.address-details i {
    margin-right: 0.5rem;
}
</style>