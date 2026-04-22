<script setup>
const featured = [
  {
    icon: 'VK',
    title: 'Mobil Vinç Kiralama',
    text: 'Şantiye, fabrika ve montaj alanlarına uygun esnek kiralama planları.',
    to: '/hizmetler',
  },
  {
    icon: 'AY',
    title: 'Ağır Yük Taşıma',
    text: 'Tonajlı yüklerde hassas kaldırma, güvenli taşıma ve sahada kurulum.',
    to: '/hizmetler',
  },
  {
    icon: 'SP',
    title: 'Sepetli Platform',
    text: 'Yüksekte montaj, bakım ve temizlik işleri için emniyetli çözüm.',
    to: '/hizmetler',
  },
]
</script>

<template>
  <section class="section container">
    <div class="section-head">
      <p class="eyebrow">Hizmetler</p>
      <h2>Öne Çıkan Hizmetler</h2>
      <p class="section-subtitle">Tüm hizmet detayları için ilgili sayfaya geçin.</p>
    </div>
    <div class="featured-grid">
      <article v-for="item in featured" :key="item.title" class="featured-card">
        <span class="featured-icon">{{ item.icon }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <RouterLink class="featured-link" :to="item.to">Detayı Gör</RouterLink>
      </article>
    </div>
  </section>
</template>
