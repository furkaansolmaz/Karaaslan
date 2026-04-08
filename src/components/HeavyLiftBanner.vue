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
        <p class="eyebrow">Agir Kaldirma</p>
        <h2>Yuksek Tonajli Islerde Kontrollu ve Guvenli Operasyon</h2>
        <p>
          Proje sahasina ozel planlama, dogru ekipman secimi ve deneyimli
          operator kadromuzla agir kaldirma sureclerini emniyetle yonetiyoruz.
        </p>
      </div>
    </div>
  </section>
</template>
