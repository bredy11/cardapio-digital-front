<template>
  <div>
    <Navbar :items="[]" />
    <div class="page-container">
      <div class="grid">
        <!-- Form Column (Left) -->
        <div class="col-12 md:col-7">
          <div class="card p-fluid">
            <h2 class="form-title">Cadastrar Itens - Cardápio Principal</h2>

            <!-- Add New Item Form -->
            <div class="form-section">
              <h3 class="section-title">Adicionar Novo Item</h3>
              <div class="grid">
                <div class="field col-12 md:col-6">
                  <label for="itemName">Nome do Item</label>
                  <InputText id="itemName" v-model="newItemForm.nome" />
                </div>
                <div class="field col-12 md:col-6">
                  <label for="itemValue">Valor</label>
                  <InputNumber id="itemValue" v-model="newItemForm.valorTotal" mode="currency" currency="BRL" locale="pt-BR" />
                </div>
                <div class="field col-12">
                  <label for="itemDescription">Descrição Breve</label>
                  <Textarea id="itemDescription" v-model="newItemForm.descricao" rows="3" />
                </div>
                <div class="field col-12 md:col-6">
                  <label for="itemCategories">Categorias</label>
                  <Chips id="itemCategories" v-model="newItemForm.categorias" separator="," placeholder="Ex: Entrada, Prato Principal" />
                </div>
                <div class="field col-12 md:col-6">
                  <label for="itemServes">Quantas Pessoas Serve</label>
                  <InputNumber id="itemServes" v-model="newItemForm.quantidadeDePessoasQueServe" :min="1" />
                </div>
                <div class="field col-12">
                  <label>Anexar Imagem do Item</label>
                  <FileUpload
                    ref="itemImageUploadRef"
                    name="itemImage"
                    @select="handleImageUpload"
                    :multiple="false"
                    accept="image/*"
                    :maxFileSize="1000000"
                    chooseLabel="Selecionar Imagem"
                    :showUploadButton="false"
                    cancelLabel="Remover"
                    :customUpload="true"
                  >
                    <template #empty>
                      <p>Arraste a imagem ou clique para selecionar.</p>
                    </template>
                  </FileUpload>
                </div>
              </div>
              <div class="form-actions">
                <Button label="Limpar Formulário" @click="clearAndResetUploader" icon="pi pi-trash" class="p-button-outlined p-button-secondary" />
                <Button label="Adicionar Item ao Cardápio" @click="addItemToMenu" icon="pi pi-plus" class="p-button-primary" />
              </div>
            </div>

            <!-- Main Actions -->
            <div class="main-actions">
              <Button label="Salvar Cardápio Completo" @click="saveMenuDetails" class="p-button-success p-button-lg" icon="pi pi-save"/>
            </div>
          </div>
        </div>

        <!-- Preview Column (Right) -->
        <div class="col-12 md:col-5">
          <div class="card preview-card">
            <h3 class="preview-title">Pré-visualização do Cardápio</h3>

            <div v-if="menuItemsList.length === 0" class="empty-preview">
                <i class="pi pi-eye-slash"></i>
                <p>Nenhum item adicionado ainda.</p>
                <p class="instruction">Adicione itens no formulário à esquerda para vê-los aqui.</p>
            </div>

            <TabView v-else>
              <TabPanel v-for="category in uniqueCategories" :key="category" :header="category">
                <div class="grid item-grid">
                  <div v-for="item in menuItemsList.filter(i => i.categorias.includes(category))" :key="item.nome" class="col-12 md:col-6">
                    <div class="menu-item-card">
                      <img :src="item.imagem || 'https://via.placeholder.com/150'" :alt="item.nome" class="item-image" />
                      <div class="item-details">
                        <h5 class="item-name">{{ item.nome }}</h5>
                        <p class="item-price">{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valorTotal) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRegisterMenuDetailsViewModel } from '@/composables/useRegisterMenuDetailsViewModel';
import Navbar from '@/components/layouts/Navbar.vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Chips from 'primevue/chips';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

const {
  newItemForm,
  itemImagePreview,
  menuItemsList,
  uniqueCategories,
  handleImageUpload,
  addItemToMenu,
  clearNewItemForm,
  saveMenuDetails,
} = useRegisterMenuDetailsViewModel();

const itemImageUploadRef = ref(null);

// Extend clearNewItemForm to also clear the FileUpload component UI
const originalClear = clearNewItemForm;
const clearAndResetUploader = () => {
    originalClear();
    if (itemImageUploadRef.value) {
        itemImageUploadRef.value.clear();
    }
};
</script>

<style lang="scss" scoped>
.page-container {
  padding: 6rem 2rem 2rem; // Add top padding to account for fixed navbar
  background-color: #f9fafb;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
}

.field {
  margin-bottom: 1rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.main-actions {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
  text-align: right;
}

/* Preview Card Styles */
.preview-card {
  position: sticky;
  top: 6rem; // Matches page-container top padding
}

.preview-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.empty-preview {
    text-align: center;
    padding: 3rem 1rem;
    color: #6c757d;
    .pi {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .instruction {
        font-size: 0.9rem;
        color: #adb5bd;
    }
}

.item-grid {
    max-height: 60vh;
    overflow-y: auto;
}

.menu-item-card {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  background-color: #fff;
}

.item-image {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
  margin-right: 1rem;
}

.item-details {
  flex-grow: 1;
}

.item-name {
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
}

.item-price {
  color: #22c55e; // A nice green for price
  margin: 0;
  font-weight: 500;
}

</style>