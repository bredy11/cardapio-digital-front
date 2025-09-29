<template>
  <div class="registration-container">
    <div class="grid grid-nogutter">
      <!-- Coluna da Esquerda: Banner -->
      <div class="col-12 md:col-6 banner-container">
        <img src="@/assets/banner.jpg" alt="Banner" class="banner-image" />
      </div>

      <!-- Coluna da Direita: Formulário de Cadastro -->
      <div class="col-12 md:col-6 form-container">
        <div class="form-wrapper">
          <h2 class="form-title">Cadastro de Usuário</h2>
          <form @submit.prevent="cadastrar">
            <div class="fluid">
              <div class="field">
                <label for="nome">Nome</label>
                <InputText id="nome" v-model="usuario.nome" type="text" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <InputText id="email" v-model="usuario.email" type="email" />
              </div>
              <div class="field">
                <label for="senha">Senha</label>
                <Password id="senha" v-model="usuario.senha" :feedback="false" />
              </div>
              <div class="field">
                <label for="telefone">Telefone</label>
                <InputText id="telefone" v-model="usuario.telefone" type="text" />
              </div>
            </div>
            <Button label="Cadastrar" type="submit" class="mt-3" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useUsuario } from '@/composables/useUsuario';

const { usuario, cadastrar } = useUsuario();
</script>

<style scoped>
.registration-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.p-grid {
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.banner-container {
  padding: 0;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #ffffff;
}

.form-wrapper {
  width: 100%;
  max-width: 400px;
}

.form-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 24px;
  color: #333;
}

.p-field {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
</style>