<template>
  <header class="topbar">
    <nav class="nav container">
      <RouterLink class="brand" to="/anasayfa">
        <img src="/brand-icon.png" alt="Karaaslan Vinç Logo" />
        <span>KARAASLAN VİNÇ</span>
      </RouterLink>
      
      <div class="nav-links">
        <RouterLink to="/hizmetler">Hizmetler</RouterLink>
        <RouterLink to="/galeri">Galeri</RouterLink>
        <RouterLink to="/hakkimizda">Hakkımızda</RouterLink>
        <RouterLink to="/iletisim">İletişim</RouterLink>
        
        <!-- Hemen Ara Butonu -->
        <a href="tel:+905315977965" class="call-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>Hemen Ara</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Masaüstü Genel Navigasyon Yapısı */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Masaüstü Yeşil Buton Stili */
.call-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #25d366;
  color: #fff !important;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.call-btn:hover {
  background-color: #1ebd54;
}

.phone-icon {
  flex-shrink: 0;
}


@media (max-width: 768px) {
  .nav {
    flex-direction: column; 
    gap: 12px;
  }

  .nav-links {
    flex-wrap: wrap;       
    justify-content: center;
    width: 100%;
    gap: 15px;
  }


  .call-btn {
    flex-basis: 100%;      
    order: 5;              
    padding: 12px 20px;  
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
    margin-top: 5px;       
  }
}
</style>
