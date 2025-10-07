<template>
 <AuthLayout>
      <div class="col-6">
        <div class="login-form-container">
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
            <Button label="Entrar" class="p-button-lg p-button-success" @click="login" />
            <div class="signup-link">
              <p>Não tem conta? <a href="/cadastro">Cadastre-se aqui</a></p>
            </div>
          </div>
        </div>
      </div>
   </AuthLayout>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const login = () => {
  // Simulate login logic
  router.push('/dashboard');
};
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  overflow: hidden;
}

.grid {
  height: 100%;
}

.banner-container {
  position: relative;
  height: 100%;
  color: white;

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }

  .banner-text {
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
}

.login-form-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;

  .login-form {
    width: 100%;
    max-width: 400px;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: left;
    }

    .p-field {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
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
}
</style>