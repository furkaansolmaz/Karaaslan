import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { applyRouteSeo } from './seo'

router.afterEach((to) => {
  applyRouteSeo(to)
})

createApp(App).use(router).mount('#app')
