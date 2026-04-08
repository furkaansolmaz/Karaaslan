<script setup>
const steps = [
  {
    title: 'Kesif ve Planlama',
    text: 'Saha kosullarini analiz ediyor, riskleri belirliyor ve kaldirma planini netlestiriyoruz.',
  },
  {
    title: 'Ekipman ve Ekip',
    text: 'Projeye en uygun vinc tipini ve deneyimli operator ekibini gorevlendiriyoruz.',
  },
  {
    title: 'Guvenli Uygulama',
    text: 'Operasyonu is guvenligi standartlarina uygun sekilde, adim adim kontrol ederek tamamliyoruz.',
  },
]
</script>

<template>
  <section class="section container">
    <div class="process-head">
      <h2>Calisma Surecimiz</h2>
      <p class="section-subtitle">
        Her iste ayni disiplin: planli operasyon, teknik dogruluk, sifir surpriz.
      </p>
    </div>
    <div class="process-grid">
      <article v-for="(step, idx) in steps" :key="step.title" class="process-card">
        <p class="step-no">0{{ idx + 1 }}</p>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </article>
    </div>
  </section>
</template>
