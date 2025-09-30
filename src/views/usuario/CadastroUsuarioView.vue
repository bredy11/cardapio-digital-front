<template>
  <div class="flex align-items-center justify-content-center min-h-screen bg-gray-100">
    <div class="grid grid-nogutter shadow-2 border-round overflow-hidden" style="max-width: 1200px; width: 100%;">
      <!-- Coluna da Esquerda: Banner -->
      <div class="hidden md:flex col-6 bg-primary align-items-center justify-content-center">
        <h1 class="text-white">Cardapio Digital</h1>
      </div>

      <!-- Coluna da Direita: Formulário de Cadastro -->
      <div class="col-12 md:col-6 p-6 bg-white">
        <Card class="border-none shadow-none">
          <template #title>
            <div class="text-center text-2xl font-bold mb-4">Cadastro de Usuário</div>
          </template>
          <template #content>
            <form @submit.prevent="cadastrar" class="p-fluid">
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
                <Password id="senha" v-model="usuario.senha" :feedback="false" toggleMask />
              </div>
              <div class="field">
                <label for="telefone">Telefone</label>
                <InputText id="telefone" v-model="usuario.telefone" type="text" />
              </div>
              <Button label="Cadastrar" type="submit" class="w-full mt-3" />
            </form>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { useUsuario } from '../../composables/useUsuario';

const { usuario, cadastrar } = useUsuario();
</script>

<style scoped>
.field {
  margin-bottom: 1.5rem;
}
</style>