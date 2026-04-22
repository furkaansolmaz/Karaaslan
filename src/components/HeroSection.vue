<script setup>
import craneCover from '../assets/crane-3.jpg'
</script>

<template>
  <header class="hero">
    <div class="hero-content container hero-layout">
      <div>
        <p class="badge">Elazığ ve Çevresi | 7/24 Hizmet</p>
        <h1>Ağır Kaldırma İşlerinde Premium Hizmet Deneyimi</h1>
        <p class="lead">
          Karaaslan Vinç, modern ekipmanları ve uzman operatör kadrosu ile vinç
          kiralama, ağır yük kaldırma, sepetli platform ve çelik montaj
          işlerinde hızlı ve emniyetli çözüm sunar.
        </p>
        <div class="hero-cta">
          <RouterLink class="btn primary" to="/iletisim">Hemen Teklif Al</RouterLink>
        </div>
      </div>

      <aside class="hero-panel">
        <div class="hero-cover" :style="{ backgroundImage: `url(${craneCover})` }">
          <span class="hero-cover-badge">Sahadan Gerçek Proje</span>
        </div>
        <div class="hero-panel-body">
          <h3>Operasyon Özeti</h3>
          <p>Planlı ekip, doğru ekipman, kontrollü süreç.</p>
          <div class="hero-mini-list">
            <span>Ön keşif ve risk analizi</span>
            <span>Belgeli operatör kadrosu</span>
            <span>Gerçek zamanlı saha koordinasyonu</span>
          </div>
          <div class="hero-chip-row">
            <span>Vinç Kiralama</span>
            <span>Ağır Yük</span>
            <span>Çelik Montaj</span>
          </div>
        </div>
      </aside>
    </div>

    <div class="container">
      <div class="hero-stats">
        <article>
          <strong>10+</strong>
          <span>Yıllık Saha Deneyimi</span>
        </article>
        <article>
          <strong>7/24</strong>
          <span>Kesintisiz Operasyon</span>
        </article>
        <article>
          <strong>%100</strong>
          <span>Güvenlik Odaklı İş Planı</span>
        </article>
      </div>
    </div>
  </header>
</template>
