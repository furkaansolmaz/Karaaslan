<script setup>
const services = [
  {
    title: 'Vinç Kiralama',
    icon: '01',
    description:
      'Günlük, haftalık veya proje bazlı esnek kiralama seçenekleriyle ihtiyacınıza uygun ekonomik çözümler.',
  },
  {
    title: 'Ağır Yük Kaldırma',
    icon: '02',
    description:
      'Yüksek tonajlı makine ve konstrüksiyon taşımalarında hassas, güvenli ve kontrollü kaldırma operasyonları.',
  },
  {
    title: 'Sepetli Platform',
    icon: '03',
    description:
      'Yüksekte güvenli çalışma için bakım, montaj ve dış cephe işlerinde emniyetli platform hizmeti.',
  },
  {
    title: 'Çelik Montaj',
    icon: '04',
    description:
      'Endüstriyel ve inşaat projelerinde uzman ekiplerle hızlı, planlı ve teknik montaj süreci.',
  },
]
</script>

<template>
  <section id="hizmetler" class="section container">
    <h2>Hizmetlerimiz</h2>
    <p class="section-subtitle">
      Her projeye uygun, güçlü ekipman ve planlı operasyon yönetimi.
    </p>

    <div class="cards">
      <article v-for="service in services" :key="service.title" class="card">
        <span class="service-badge">{{ service.icon }}</span>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>
