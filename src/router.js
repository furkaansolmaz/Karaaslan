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
        title: 'Karaaslan Vinc | Elazig Vinc ve Sepetli Platform Hizmetleri',
        description:
          'Elazig merkezde sepetli platform, celik montaj, konteyner nakliye ve agir kaldirma hizmetleri. 7/24 hizli ve guvenli operasyon.',
      },
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: ServicesView,
      meta: {
        title: 'Elazig Vinc Hizmetleri | Sepetli Platform, Celik Montaj',
        description:
          'Karaaslan Vinc ile Elazigda konteyner nakliye, sepetli platform, celik montaj ve dis cephe panel kaldirma hizmetleri.',
      },
    },
    {
      path: '/galeri',
      name: 'gallery',
      component: GalleryView,
      meta: {
        title: 'Proje Galerisi | Karaaslan Vinc Elazig',
        description:
          'Elazig ve cevresinde tamamlanan vinc, montaj ve nakliye projelerimizden gercek saha goruntulerini inceleyin.',
      },
    },
    {
      path: '/hakkimizda',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Hakkimizda | Karaaslan Vinc',
        description:
          'Karaaslan Vinc; guvenlik odakli yaklasimi, deneyimli operator kadrosu ve modern ekipmanlariyla Elazigda hizmet verir.',
      },
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Iletisim | Karaaslan Vinc Elazig',
        description:
          'Karaaslan Vinc ile iletisime gecin. Telefon: 0531 597 79 65. Adres: Karsiyaka Mahallesi, Meyveli Sokak, Sebze Hali Karsisi, Elazig.',
      },
    },
  ],
})

export default router
