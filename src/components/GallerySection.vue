<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import service0 from '../assets/service-0-container.jpg'
import service1 from '../assets/service-1-sepetli.jpg'
import service2 from '../assets/service-2-celik.jpg'
import service3 from '../assets/service-3-dis-cephe.jpg'

const activeImage = ref(null)

const galleryItems = [
  {
    title: 'Konteyner Nakliye Hizmeti',
    subtitle: 'Sahada güvenli konteyner taşıma ve konumlandırma operasyonu.',
    image: service0,
  },
  {
    title: 'Sepetli Platform Hizmeti',
    subtitle: 'Yüksekte montaj ve erişim gerektiren işlerde emniyetli çözüm.',
    image: service1,
  },
  {
    title: 'Çelik Montaj Hizmeti',
    subtitle: 'Endüstriyel yapılarda teknik ve kontrollü montaj uygulamaları.',
    image: service2,
  },
  {
    title: 'Dış Cephe Panel Hizmeti',
    subtitle: 'Cephe panel uygulamalarında hassas kaldırma ve konumlandırma.',
    image: service3,
  },
]

const openLightbox = (item) => {
  activeImage.value = item
}

const closeLightbox = () => {
  activeImage.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeImage.value) {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section id="galeri" class="section section-dark">
    <div class="container">
      <h2>Projelerden Görüntüler</h2>
      <p class="section-subtitle">
        Sahadaki gücümüzü yansıtan operasyonlarımızdan seçmeler.
      </p>

      <div class="gallery gallery-slider">
        <div
          v-for="item in galleryItems"
          :key="item.title"
          class="gallery-item"
          :style="{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(14, 30, 60, 0.8)), url(${item.image})` }"
          role="button"
          tabindex="0"
          @click="openLightbox(item)"
          @keyup.enter="openLightbox(item)"
        >
          <div class="gallery-caption">
            <strong>{{ item.title }}</strong>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="activeImage" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button type="button" class="lightbox-close" @click="closeLightbox">✕</button>
          <img :src="activeImage.image" :alt="activeImage.title" />
          <div class="lightbox-meta">
            <h3>{{ activeImage.title }}</h3>
            <p>{{ activeImage.subtitle }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
