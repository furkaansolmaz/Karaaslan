<script setup>
const featured = [
  {
    icon: 'VK',
    title: 'Mobil Vinc Kiralama',
    text: 'Santiye, fabrika ve montaj alanlarina uygun esnek kiralama planlari.',
    to: '/hizmetler',
  },
  {
    icon: 'AY',
    title: 'Agir Yuk Tasima',
    text: 'Tonajli yuklerde hassas kaldirma, guvenli tasima ve sahada kurulum.',
    to: '/hizmetler',
  },
  {
    icon: 'SP',
    title: 'Sepetli Platform',
    text: 'Yuksekte montaj, bakim ve temizlik isleri icin emniyetli cozum.',
    to: '/hizmetler',
  },
]
</script>

<template>
  <section class="section container">
    <div class="section-head">
      <p class="eyebrow">Hizmetler</p>
      <h2>One Cikan Hizmetler</h2>
      <p class="section-subtitle">Tum hizmet detaylari icin ilgili sayfaya gecin.</p>
    </div>
    <div class="featured-grid">
      <article v-for="item in featured" :key="item.title" class="featured-card">
        <span class="featured-icon">{{ item.icon }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <RouterLink class="featured-link" :to="item.to">Detayi Gor</RouterLink>
      </article>
    </div>
  </section>
</template>
