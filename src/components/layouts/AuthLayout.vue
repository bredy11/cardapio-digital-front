<template>
  <div class="auth-layout">
    <div class="grid grid-nogutter">
      <!-- Left Column: Banner -->
      <div class="col-6 hidden md:flex">
        <div class="banner-container">
          <img src="@/assets/images/login_banner.png" alt="Banner" class="banner-image">
          <div class="banner-overlay">
            <div class="banner-text">
              <h2>Peça Aqui</h2>
              <p>Conectando você aos sabores que você ama.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Form Content -->
      <div class="col-12 md:col-6">
        <div class="form-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.auth-layout {
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

.form-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
}
</style>