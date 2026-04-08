<script setup>
const services = [
  {
    title: 'Vinc Kiralama',
    icon: '01',
    description:
      'Gunluk, haftalik veya proje bazli esnek kiralama secenekleriyle ihtiyaciniza uygun ekonomik cozumler.',
  },
  {
    title: 'Agir Yuk Kaldirma',
    icon: '02',
    description:
      'Yuksek tonajli makine ve konstruksiyon tasimalarinda hassas, guvenli ve kontrollu kaldirma operasyonlari.',
  },
  {
    title: 'Sepetli Platform',
    icon: '03',
    description:
      'Yuksekte guvenli calisma icin bakim, montaj ve dis cephe islerinde emniyetli platform hizmeti.',
  },
  {
    title: 'Celik Montaj',
    icon: '04',
    description:
      'Endustriyel ve insaat projelerinde uzman ekiplerle hizli, planli ve teknik montaj sureci.',
  },
]
</script>

<template>
  <section id="hizmetler" class="section container">
    <h2>Hizmetlerimiz</h2>
    <p class="section-subtitle">
      Her projeye uygun, guclu ekipman ve planli operasyon yonetimi.
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
