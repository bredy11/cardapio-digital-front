<template>
  <AuthLayout>
    <div class="login-form">
      <h2>Acesse sua conta</h2>
      <div class="p-field">
        <label for="email">E-mail</label>
        <InputText id="email" type="text" class="p-inputtext-lg" />
      </div>
      <div class="p-field">
        <label for="password">Senha</label>
        <Password id="password" :feedback="false" toggleMask class="p-inputtext-lg"></Password>
      </div>
      <div class="forgot-password">
        <a href="#">Esqueceu de senha?</a>
      </div>
      <Button label="Entrar" class="p-button-lg p-button-success" />
      <div class="signup-link">
        <p>Não tem conta? <router-link to="/cadastro">Cadastre-se aqui</router-link></p>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
  max-width: 400px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    color: #333;
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

  .forgot-password {
    text-align: right;
    margin-bottom: 2rem;

    a {
      color: #6c757d;
      text-decoration: none;
      font-size: 0.9rem;
    }
  }

  .p-button-lg {
    width: 100%;
    margin-bottom: 2rem;
    background-color: #27ae60 !important;
    border: none !important;
  }

  .signup-link {
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