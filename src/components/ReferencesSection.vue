<script setup>
const references = [
  {
    company: 'Referans Proje A',
    text: 'Planlanan saatte sahada olup operasyonu güvenli şekilde tamamladılar.',
  },
  {
    company: 'Referans Proje B',
    text: 'Tonajlı kaldırma işinde ekip koordinasyonu ve hız konusunda çok başarılıydılar.',
  },
  {
    company: 'Referans Proje C',
    text: 'Sahaya özel planlama sayesinde süreci sorunsuz ve zamanında bitirdik.',
  },
]
</script>

<template>
  <section class="section container">
    <div class="section-head">
      <p class="eyebrow">Referanslar</p>
      <h2>Müşteri Deneyimleri</h2>
      <p class="section-subtitle">Güven, hız ve sahadaki profesyonellik için tercih ediliyoruz.</p>
    </div>

    <div class="references-grid">
      <article v-for="item in references" :key="item.company" class="reference-card">
        <p class="reference-text">"{{ item.text }}"</p>
        <p class="reference-company">{{ item.company }}</p>
      </article>
    </div>
  </section>
</template>
