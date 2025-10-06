<template>
  <AuthLayout>
    <div class="signup-form">
      <h2>Crie sua conta</h2>
      <p class="subtitle">É rápido e fácil.</p>

      <form @submit.prevent="cadastrar" class="p-fluid">
        <div class="p-field">
          <label for="nome">Nome completo</label>
          <InputText id="nome" v-model="usuario.nome" type="text" class="p-inputtext-lg" />
        </div>
        <div class="p-field">
          <label for="email">E-mail</label>
          <InputText id="email" v-model="usuario.email" type="email" class="p-inputtext-lg" />
        </div>
        <div class="p-field">
          <label for="senha">Senha</label>
          <Password id="senha" v-model="usuario.senha" :feedback="false" toggleMask class="p-inputtext-lg" />
        </div>
        <div class="p-field">
          <label for="telefone">Telefone</label>
          <InputText id="telefone" v-model="usuario.telefone" type="text" class="p-inputtext-lg" />
        </div>

        <Button label="Criar conta" type="submit" class="w-full mt-4 p-button-lg p-button-success" />

        <div class="signin-link">
          <p>Já tem uma conta? <router-link to="/login">Acesse sua conta</router-link></p>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import { useUsuario } from '../../composables/useUsuario';

const { usuario, cadastrar } = useUsuario();
</script>

<style lang="scss" scoped>
.signup-form {
  width: 100%;
  max-width: 400px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: left;
    color: #333;
  }

  .subtitle {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 2rem;
    text-align: left;
  }

  .p-field {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #333;
    }

    .p-inputtext-lg {
      width: 100%;
    }
  }

  .p-button-lg {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    background-color: #27ae60 !important;
    border: none !important;
  }

  .signin-link {
    text-align: center;
    color: #6c757d;

    a {
      color: #27ae60;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>