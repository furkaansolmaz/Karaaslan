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
        title: 'Elazığ Kiralık Vinç & Sepetli Vinç Hizmetleri - Karaaslan Vinç',
        description:
          'Elazığ kiralık vinç ve sepetli vinç ihtiyaçlarınıza profesyonel çözümler. 7/24 uygun fiyatlı sepetli platform, forklift ve ağır nakliyat hizmetleri.',
      },
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: ServicesView,
      meta: {
        title: 'Elazığ Vinç Kiralama Hizmetleri | Sepetli Platform & Forklift',
        description:
          'Karaaslan Vinç ile Elazığ’da sepetli vinç kiralama, manlift, forklift ve çelik montaj hizmetleri. Güvenilir ve sertifikalı operatörler.',
      },
    },
    {
      path: '/galeri',
      name: 'gallery',
      component: GalleryView,
      meta: {
        title: 'Proje Galerisi | Elazığ Sepetli Vinç ve Montaj Çalışmaları',
        description:
          'Elazığ ve çevresinde gerçekleştirdiğimiz kiralık vinç, sepetli platform ve forklift projelerimizi galerimizden inceleyin.',
      },
    },
    {
      path: '/hakkimizda',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Hakkımızda | Elazığ’ın Güvenilir Vinç Kiralama Firması',
        description:
          'Karaaslan Vinç, Elazığ’da modern vinç filosu ve uzman kadrosuyla kiralık vinç, manlift ve forklift çözümleri sunan öncü kuruluştur.',
      },
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'İletişim | Elazığ Kiralık Vinç ve Sepetli Platform Fiyatları',
        description:
          'Elazığ vinç kiralama fiyatları ve teknik detaylar için bize ulaşın. Telefon: 0531 597 79 65. Karaaslan Vinç Karşıyaka Mahallesi.',
      },
    },
  ],
})

export default router
