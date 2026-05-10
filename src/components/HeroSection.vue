<script setup>
import craneCover from '../assets/crane-3.jpg'
</script>

<template>
  <header class="hero">
    <div class="hero-content container hero-layout">
      <div>
        <p class="badge">Elazığ Merkez ve Tüm İlçeleri | 7/24 Hizmet</p>
        <h1>Elazığ Kiralık Vinç ve Sepetli Platform Hizmetleri</h1>
        <p class="lead">
          Karaaslan Vinç; Elazığ merkez ile Kovancılar, Karakoçan, Palu, Baskil ve Sivrice başta olmak üzere tüm ilçelerde profesyonel çözümler sunar. Kiralık sepetli vinç, forklift ve manlift ihtiyaçlarınızda modern filomuzla hızlı ve emniyetli hizmet sağlıyoruz.
        </p>
        <div class="hero-cta">
          <RouterLink class="btn primary" to="/iletisim">Elazığ Vinç Teklifi Al</RouterLink>
        </div>
      </div>

      <aside class="hero-panel">
        <div class="hero-cover" :style="{ backgroundImage: `url(${craneCover})` }">
          <span class="hero-cover-badge">Elazığ Saha Projesi</span>
        </div>
        <div class="hero-panel-body">
          <h3>Elazığ Operasyon Özeti</h3>
          <p>Kiralık sepetli vinç, forklift ve manlift çözümleri.</p>
          <div class="hero-mini-list">
            <span>Elazığ geneli ücretsiz ön keşif</span>
            <span>İlçe ve köylere 7/24 hızlı sevk</span>
            <span>Günlük, haftalık ve aylık kiralama</span>
          </div>
          <div class="hero-chip-row">
            <span>Elazığ Kiralık Vinç</span>
            <span>Elazığ Sepetli Vinç</span>
            <span>Elazığ Forklift</span>
          </div>
        </div>
      </aside>
    </div>

    <div class="container">
      <div class="hero-stats">
        <article>
          <strong>10+</strong>
          <span>Elazığ Saha Deneyimi</span>
        </article>
        <article>
          <strong>7/24</strong>
          <span>Kesintisiz Yerel Destek</span>
        </article>
        <article>
          <strong>%100</strong>
          <span>Güvenli Kiralama Planı</span>
        </article>
      </div>
    </div>
  </header>
</template>
