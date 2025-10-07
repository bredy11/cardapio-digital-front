<template>
  <div class="page-container">
    <div class="grid form-grid">
      <!-- Coluna do Formulário (Esquerda) -->
      <div class="col-12 md:col-7">
        <div class="card form-card">
          <h2 class="form-title">Cadastrar Novo Restaurante</h2>

          <div class="p-fluid grid">
            <!-- Informações Básicas -->
            <div class="field col-12 md:col-6">
              <label for="restaurantName">Nome do Restaurante</label>
              <InputText id="restaurantName" v-model="form.name" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="category">Categoria</label>
              <Dropdown id="category" v-model="form.category" :options="categories" optionLabel="name" placeholder="Selecione uma categoria" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="phone">Telefone</label>
              <InputMask id="phone" v-model="form.phone" mask="(99) 99999-9999" />
            </div>

            <!-- Endereço -->
            <div class="col-12"><Divider align="left"><h3>Endereço</h3></Divider></div>
            <div class="field col-12 md:col-4">
              <label for="zipcode">CEP</label>
              <InputText id="zipcode" v-model="form.address.zipcode" />
            </div>
            <div class="field col-12 md:col-8">
              <label for="street">Rua</label>
              <InputText id="street" v-model="form.address.street" />
            </div>
            <div class="field col-12 md:col-4">
              <label for="number">Número</label>
              <InputText id="number" v-model="form.address.number" />
            </div>
            <div class="field col-12 md:col-8">
              <label for="neighborhood">Bairro</label>
              <InputText id="neighborhood" v-model="form.address.neighborhood" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="state">Estado</label>
                <Dropdown id="state" v-model="form.address.state" :options="states" placeholder="Selecione um estado" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="city">Cidade</label>
                <InputText id="city" v-model="form.address.city" />
            </div>

            <!-- Horário de Funcionamento -->
            <div class="col-12"><Divider align="left"><h3>Horário de Funcionamento</h3></Divider></div>
            <div class="field col-12">
              <!-- Simple version for now -->
              <p>Segunda a Sexta: 08:00 - 22:00</p>
              <p>Sábado e Domingo: 10:00 - 23:00</p>
            </div>

            <!-- Upload de Imagem -->
            <div class="col-12"><Divider align="left"><h3>Imagem do Restaurante</h3></Divider></div>
            <div class="field col-12">
              <FileUpload name="restaurantImage[]" :multiple="false" accept="image/*" :maxFileSize="1000000">
                  <template #empty>
                      <p>Arraste ou solte o clique para selecionar uma imagem.</p>
                  </template>
              </FileUpload>
            </div>

            <!-- Links de Redes Sociais -->
            <div class="col-12"><Divider align="left"><h3>Redes Sociais</h3></Divider></div>
            <div v-for="(link, index) in form.socialLinks" :key="index" class="field col-12 grid align-items-end">
                <div class="col-5">
                    <label>Rede Social</label>
                    <Dropdown v-model="link.type" :options="socialNetworks" placeholder="Selecione"/>
                </div>
                <div class="col-6">
                    <label>URL</label>
                    <InputText v-model="link.url" />
                </div>
                <div class="col-1">
                    <Button icon="pi pi-trash" class="p-button-danger" @click="removeSocialLink(index)" />
                </div>
            </div>
            <div class="col-12">
                <Button label="Adicionar mais link" icon="pi pi-plus" class="p-button-text" @click="addSocialLink" />
            </div>
          </div>

          <div class="form-actions">
            <Button label="Cancelar" class="p-button-outlined p-button-secondary" />
            <Button label="Cadastrar Restaurante" class="p-button-success" />
          </div>
        </div>
      </div>

      <!-- Coluna de Visualização (Direita) -->
      <div class="col-12 md:col-5">
        <div class="card preview-card">
          <h3 class="preview-title">Visualização em Tempo Real</h3>

          <div class="preview-content">
            <img src="https://via.placeholder.com/400x200.png?text=Imagem+do+Restaurante" alt="Preview da imagem" class="preview-image" />

            <div class="preview-info">
              <h4 class="restaurant-name">{{ form.name || 'Nome do Restaurante' }}</h4>
              <p class="restaurant-category">{{ form.category ? form.category.name : 'Categoria' }}</p>
            </div>

            <div class="preview-map">
              <img src="https://via.placeholder.com/400x200.png?text=Localização+no+Mapa" alt="Preview do mapa" class="preview-map-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputMask from 'primevue/inputmask';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const form = ref({
  name: '',
  category: null,
  phone: '',
  address: {
    zipcode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: null
  },
  socialLinks: [{ type: 'Facebook', url: '' }]
});

const categories = ref([
  { name: 'Pizzaria', code: 'PZ' },
  { name: 'Hamburgueria', code: 'HG' },
  { name: 'Japonesa', code: 'JP' },
  { name: 'Brasileira', code: 'BR' },
]);

const states = ref(['SP', 'RJ', 'MG', 'BA', 'SC', 'RS']);
const socialNetworks = ref(['Facebook', 'Instagram', 'TikTok', 'Website']);

const addSocialLink = () => {
  form.value.socialLinks.push({ type: 'Facebook', url: '' });
};

const removeSocialLink = (index) => {
  form.value.socialLinks.splice(index, 1);
};

</script>

<style lang="scss" scoped>
.page-container {
  padding: 2rem;
  background-color: #f9fafb;
}

.form-grid {
  margin-right: -1rem;
  margin-left: -1rem;
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
  color: #1A2E40;
  margin-bottom: 1.5rem;
}

.field label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #495057;
}

.p-divider-content h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #34495E;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
}

.preview-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #495057;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.preview-content .preview-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.preview-info {
    text-align: center;
    margin-bottom: 1.5rem;
}

.restaurant-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
}

.restaurant-category {
    font-size: 1rem;
    color: #6c757d;
    margin: 0;
}

.preview-map-image {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}
</style>