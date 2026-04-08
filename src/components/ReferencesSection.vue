<script setup>
const references = [
  {
    company: 'Referans Proje A',
    text: 'Planlanan saatte sahada olup operasyonu guvenli sekilde tamamladilar.',
  },
  {
    company: 'Referans Proje B',
    text: 'Tonajli kaldirma isinde ekip koordinasyonu ve hiz konusunda cok basariliydilar.',
  },
  {
    company: 'Referans Proje C',
    text: 'Sahaya ozel planlama sayesinde sureci sorunsuz ve zamaninda bitirdik.',
  },
]
</script>

<template>
  <section class="section container">
    <div class="section-head">
      <p class="eyebrow">Referanslar</p>
      <h2>Musteri Deneyimleri</h2>
      <p class="section-subtitle">Guven, hiz ve sahadaki profesyonellik icin tercih ediliyoruz.</p>
    </div>

    <div class="references-grid">
      <article v-for="item in references" :key="item.company" class="reference-card">
        <p class="reference-text">"{{ item.text }}"</p>
        <p class="reference-company">{{ item.company }}</p>
      </article>
    </div>
  </section>
</template>
