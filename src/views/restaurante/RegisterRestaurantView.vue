<template>
  <div class="page-container">
    <div class="grid">
      <!-- Form Column (Left) -->
      <div class="col-12 md:col-7">
        <div class="card p-fluid">
          <h2 class="form-title">Cadastrar Novo Restaurante</h2>

          <TabView>
            <!-- Tab 1: Main Details -->
            <TabPanel header="Detalhes Principais">
              <div class="form-section grid">
                <div class="field col-12">
                  <label for="restaurantName">Nome do Restaurante</label>
                  <InputText id="restaurantName" v-model="form.nome" />
                </div>
                <div class="field col-12 md:col-6">
                  <label for="phone">Telefone</label>
                  <InputMask id="phone" v-model="form.telefone" mask="(99) 99999-9999" />
                </div>
                <div class="field col-12 md:col-6">
                  <label for="category">Categoria</label>
                  <Dropdown id="category" v-model="form.categoria" :options="categories" optionLabel="name" optionValue="name" placeholder="Selecione uma categoria" />
                </div>
              </div>
            </TabPanel>

            <!-- Tab 2: Address -->
            <TabPanel header="Endereço">
              <div class="form-section grid">
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
            </TabPanel>

            <!-- Tab 3: Hours & Media -->
            <TabPanel header="Horários e Mídias">
                <div class="form-section">
                    <p class="section-title">Horário de Funcionamento</p>
                    <HoursInput v-model="form.horarioFuncionamento" />
                </div>
                <div class="form-section grid">
                    <p class="section-title col-12">Redes Sociais e Site</p>
                    <div class="field col-12 md:col-4">
                        <label for="urlInstagram">Instagram</label>
                        <InputText id="urlInstagram" v-model="form.urlInstagram" placeholder="@seu-restaurante" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="urlFacebock">Facebook</label>
                        <InputText id="urlFacebock" v-model="form.urlFacebock" placeholder="/seu-restaurante" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="urlSite">Site</label>
                        <InputText id="urlSite" v-model="form.urlSite" placeholder="www.seusite.com" />
                    </div>
                </div>
            </TabPanel>

            <!-- Tab 4: Image -->
            <TabPanel header="Imagem">
              <div class="form-section">
                <FileUpload
                  name="restaurantImage"
                  @select="handleImageUpload"
                  :multiple="false"
                  accept="image/*"
                  :maxFileSize="1000000"
                  chooseLabel="Escolher Imagem"
                  :showUploadButton="false"
                  cancelLabel="Remover"
                  :customUpload="true"
                >
                  <template #empty>
                    <p>Arraste e solte a imagem aqui ou clique para selecionar.</p>
                  </template>
                </FileUpload>
              </div>
            </TabPanel>
          </TabView>

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
              <p v-if="form.categoria" class="restaurant-category">{{ form.categoria }}</p>

              <div class="address-details" v-if="form.endereco.cep">
                 <h5>Endereço</h5>
                 <p>
                    {{ form.endereco.bairro }}, {{ form.endereco.numero }} <br/>
                    {{ form.endereco.cidade }} - {{ form.endereco.estado }}
                 </p>
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
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

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
}

.field {
    margin-bottom: 1rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
}

.section-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

/* Preview Card Styles */
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
  font-style: italic;
}

.address-details {
  margin-top: 1.5rem;
  h5 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    line-height: 1.4;
  }
}
</style>