<script setup>
import heavyImage from '../assets/heavy-banner.jpg'
</script>

<template>
  <section class="section container">
    <div
      class="heavy-banner"
      :style="{ backgroundImage: `url(${heavyImage})` }"
    >
      <div class="heavy-banner-content">
        <p class="eyebrow">Ağır Kaldırma</p>
        <h2>Yüksek Tonajlı İşlerde Kontrollü ve Güvenli Operasyon</h2>
        <p>
          Proje sahasına özel planlama, doğru ekipman seçimi ve deneyimli
          operatör kadromuzla ağır kaldırma süreçlerini emniyetle yönetiyoruz.
        </p>
      </div>
    </div>
  </section>
</template>
