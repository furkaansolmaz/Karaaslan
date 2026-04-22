<script setup>
const steps = [
  {
    title: 'Keşif ve Planlama',
    text: 'Saha koşullarını analiz ediyor, riskleri belirliyor ve kaldırma planını netleştiriyoruz.',
  },
  {
    title: 'Ekipman ve Ekip',
    text: 'Projeye en uygun vinç tipini ve deneyimli operatör ekibini görevlendiriyoruz.',
  },
  {
    title: 'Güvenli Uygulama',
    text: 'Operasyonu iş güvenliği standartlarına uygun şekilde, adım adım kontrol ederek tamamlıyoruz.',
  },
]
</script>

<template>
  <section class="section container">
    <div class="process-head">
      <h2>Çalışma Sürecimiz</h2>
      <p class="section-subtitle">
        Her işte aynı disiplin: planlı operasyon, teknik doğruluk, sıfır sürpriz.
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
