<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <span class="logo-icon">🍽️</span> GASTRO LAB
      </div>
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Explore dishes, ingredients, and more..." />
      </div>
      <div class="user-actions">
        <span class="action-icon">🛒</span>
        <span class="action-icon">❤️</span>
        <span class="action-icon">👤</span>
        <label class="switch">
          <input type="checkbox" checked>
          <span class="slider round"></span>
        </label>
      </div>
    </header>

    <main>
      <section class="special-offer">
        <div class="offer-details">
          <h2>SPECIAL OF THE DAY</h2>
          <p>Experience our new Deconstructed Salmon Poke!</p>
          <button>VIEW DETAILS</button>
        </div>
        <div class="offer-image">
          <h1>PASTAS</h1>
        </div>
      </section>

      <div class="carousel-indicators">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
      </div>

      <section class="categories">
        <div class="category-card">
          <div class="category-image pizza"></div>
          <h3>PIZZAS</h3>
        </div>
        <div class="category-card">
          <div class="category-image pasta"></div>
          <h3>PASTAS</h3>
        </div>
        <div class="category-card">
          <div class="category-image sushi"></div>
          <h3>SUSHI</h3>
        </div>
        <div class="category-card">
          <div class="category-image dessert"></div>
          <h3>DESSERTS</h3>
        </div>
      </section>

      <section class="recommended">
        <h2>RECOMMENDED FOR YOU</h2>
        <div class="item-cards">
          <div class="item-card">
            <div class="item-image ropales"></div>
            <p>Ropales</p>
            <div class="item-details">
              <span>⭐ 8,8</span>
              <span class="add-item">+</span>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image wartats"></div>
            <p>Wartats</p>
            <div class="item-details">
              <span>⭐ 4,8</span>
              <span class="add-item">+</span>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image suisks"></div>
            <p>Suisks</p>
            <div class="item-details">
              <span>⭐ 8,8</span>
              <span class="add-item">+</span>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image sepitals"></div>
            <p>Sepitals</p>
            <div class="item-details">
              <span>⭐ 8,8</span>
              <span class="add-item">+</span>
            </div>
          </div>
          <div class="item-card">
            <div class="item-image crnparte"></div>
            <p>Crnparte</p>
            <div class="item-details">
              <span>⭐ 8,8</span>
              <span class="add-item">+</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bottom-nav">
      <div class="nav-item active">
        <span class="nav-icon">🏠</span>
        <p>Home</p>
      </div>
      <div class="nav-item">
        <span class="nav-icon">📄</span>
        <p>Full Menu</p>
      </div>
      <div class="nav-item">
        <span class="nav-icon">💬</span>
        <p>Account</p>
      </div>
      <div class="nav-item">
        <span class="nav-icon">👤</span>
        <p>Contact</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  background-color: #2d2d2d;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  padding-bottom: 80px; /* Add padding to avoid overlap with fixed footer */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo-icon {
  margin-right: 10px;
}

.search-bar {
  flex-grow: 1;
  margin: 0 20px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}

.search-bar input {
  width: 100%;
  padding: 10px 10px 10px 40px;
  border-radius: 20px;
  border: 1px solid #555;
  background-color: #3d3d3d;
  color: #fff;
}

.user-actions {
  display: flex;
  align-items: center;
}

.action-icon {
  margin-left: 15px;
  font-size: 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-left: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #ff8c00;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.special-offer {
  display: flex;
  background-color: #3d3d3d;
  border-radius: 15px;
  overflow: hidden;
  height: 250px;
  align-items: center;
  margin-bottom: 10px;
}

.offer-details {
  padding: 30px;
  flex: 1;
}

.offer-details h2 {
  font-size: 14px;
  font-weight: normal;
  color: #aaa;
}

.offer-details p {
  font-size: 24px;
  margin: 10px 0;
}

.offer-details button {
  background-color: transparent;
  border: 1px solid #ff8c00;
  color: #ff8c00;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.offer-image {
  flex: 1;
  background: url('https://images.unsplash.com/photo-1519623813223-1da49a4a5a58?q=80&w=2070&auto=format&fit=crop') no-repeat center center;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.offer-image h1 {
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  z-index: 1;
}

.offer-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #555;
  margin: 0 5px;
}

.indicator.active {
  background-color: #ff8c00;
}

.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.category-card {
  background-color: #3d3d3d;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  position: relative;
  height: 150px;
}

.category-image {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: #555;
  position: relative;
}

.category-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
}

.category-card h3 {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 22px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  z-index: 1;
  width: 100%;
}

.pizza { background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop'); }
.pasta { background-image: url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop'); }
.sushi { background-image: url('https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1941&auto=format&fit=crop'); }
.dessert { background-image: url('https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop'); }

.recommended h2 {
  font-size: 16px;
  font-weight: normal;
  color: #aaa;
  margin-bottom: 15px;
}

.item-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.item-card {
  background-color: #3d3d3d;
  border-radius: 15px;
  overflow: hidden;
  width: 150px;
  padding-bottom: 10px;
  flex-shrink: 0;
}

.item-image {
  height: 100px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
  background-color: #555;
}

.ropales { background-image: url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop'); }
.wartats { background-image: url('https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop'); }
.suisks { background-image: url('https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1974&auto=format&fit=crop'); }
.sepitals { background-image: url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop'); }
.crnparte { background-image: url('https://images.unsplash.com/photo-1563379926-89514614E745?q=80&w=2006&auto=format&fit=crop'); }

.item-card p {
  margin: 0 10px;
  font-weight: bold;
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px 0;
  font-size: 14px;
}

.add-item {
  background-color: #ff8c00;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #444;
  z-index: 100;
}

.nav-item {
  text-align: center;
  color: #aaa;
  cursor: pointer;
}

.nav-item.active {
  color: #ff8c00;
}

.nav-icon {
  font-size: 24px;
}

.nav-item p {
  margin: 5px 0 0;
  font-size: 12px;
}
</style>