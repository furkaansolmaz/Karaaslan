import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ServicesView from './views/ServicesView.vue'
import GalleryView from './views/GalleryView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/anasayfa' },
    {
      path: '/anasayfa',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Karaaslan Vinç | Elazığ Vinç ve Sepetli Platform Hizmetleri',
        description:
          'Elazığ merkezde sepetli platform, çelik montaj, konteyner nakliye ve ağır kaldırma hizmetleri. 7/24 hızlı ve güvenli operasyon.',
      },
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: ServicesView,
      meta: {
        title: 'Elazığ Vinç Hizmetleri | Sepetli Platform, Çelik Montaj',
        description:
          'Karaaslan Vinç ile Elazığ’da konteyner nakliye, sepetli platform, çelik montaj ve dış cephe panel kaldırma hizmetleri.',
      },
    },
    {
      path: '/galeri',
      name: 'gallery',
      component: GalleryView,
      meta: {
        title: 'Proje Galerisi | Karaaslan Vinç Elazığ',
        description:
          'Elazığ ve çevresinde tamamlanan vinç, montaj ve nakliye projelerimizden gerçek saha görüntülerini inceleyin.',
      },
    },
    {
      path: '/hakkimizda',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Hakkımızda | Karaaslan Vinç',
        description:
          'Karaaslan Vinç; güvenlik odaklı yaklaşımı, deneyimli operatör kadrosu ve modern ekipmanlarıyla Elazığ’da hizmet verir.',
      },
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'İletişim | Karaaslan Vinç Elazığ',
        description:
          'Karaaslan Vinç ile iletişime geçin. Telefon: 0531 597 79 65. Adres: Karşıyaka Mahallesi, Meyveli Sokak, Sebze Hali karşısı, Elazığ.',
      },
    },
  ],
})

export default router
