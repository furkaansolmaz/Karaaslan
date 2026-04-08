<script setup>
import craneCover from '../assets/crane-3.jpg'
</script>

<template>
  <header class="hero">
    <div class="hero-content container hero-layout">
      <div>
        <p class="badge">Elazig ve Cevresi | 7/24 Hizmet</p>
        <h1>Agir Kaldirma Islerinde Premium Hizmet Deneyimi</h1>
        <p class="lead">
          Karaaslan Vinc, modern ekipmanlari ve uzman operator kadrosu ile vinc
          kiralama, agir yuk kaldirma, sepetli platform ve celik montaj
          islerinde hizli ve emniyetli cozum sunar.
        </p>
        <div class="hero-cta">
          <RouterLink class="btn primary" to="/iletisim">Hemen Teklif Al</RouterLink>
        </div>
      </div>

      <aside class="hero-panel">
        <div class="hero-cover" :style="{ backgroundImage: `url(${craneCover})` }">
          <span class="hero-cover-badge">Sahadan Gercek Proje</span>
        </div>
        <div class="hero-panel-body">
          <h3>Operasyon Ozeti</h3>
          <p>Planli ekip, dogru ekipman, kontrollu surec.</p>
          <div class="hero-mini-list">
            <span>On Kesif ve risk analizi</span>
            <span>Belgeli operator kadrosu</span>
            <span>Gercek zamanli saha koordinasyonu</span>
          </div>
          <div class="hero-chip-row">
            <span>Vinc Kiralama</span>
            <span>Agir Yuk</span>
            <span>Celik Montaj</span>
          </div>
        </div>
      </aside>
    </div>

    <div class="container">
      <div class="hero-stats">
        <article>
          <strong>10+</strong>
          <span>Yillik Saha Deneyimi</span>
        </article>
        <article>
          <strong>7/24</strong>
          <span>Kesintisiz Operasyon</span>
        </article>
        <article>
          <strong>%100</strong>
          <span>Guvenlik Odakli Is Plani</span>
        </article>
      </div>
    </div>
  </header>
</template>
