<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'

let revealObserver
const route = useRoute()

const setupRevealAnimations = () => {
  if (revealObserver) revealObserver.disconnect()

  document.documentElement.classList.add('js-animate')

  const targets = document.querySelectorAll(
    '.hero-content, .section, .card, .process-card, .gallery-item, .about-checklist, .footer-grid'
  )

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )

  targets.forEach((target) => revealObserver.observe(target))
}

onMounted(async () => {
  await nextTick()
  setupRevealAnimations()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    setupRevealAnimations()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect()
})
</script>

<template>
  <div class="site">
    <SiteHeader />
    <div class="route-host">
      <RouterView />
    </div>
    <a
      class="floating-cta"
      href="https://wa.me/905315977965"
      target="_blank"
      aria-label="WhatsApp ile iletisime gec"
      title="WhatsApp"
    >
      <svg
        class="floating-cta-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M19.05 4.94A9.94 9.94 0 0 0 12 2C6.49 2 2 6.48 2 12a9.9 9.9 0 0 0 1.35 5.02L2 22l5.12-1.33A9.95 9.95 0 0 0 12 22c5.51 0 10-4.48 10-10a9.95 9.95 0 0 0-2.95-7.06ZM12 20.18c-1.48 0-2.93-.39-4.2-1.13l-.3-.18-3.04.8.81-2.96-.2-.31A8.13 8.13 0 0 1 3.82 12C3.82 7.5 7.49 3.82 12 3.82c2.17 0 4.2.85 5.74 2.39A8.1 8.1 0 0 1 20.18 12c0 4.5-3.67 8.18-8.18 8.18Zm4.49-6.12c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.28.19-.53.07a6.63 6.63 0 0 1-1.96-1.21 7.31 7.31 0 0 1-1.35-1.67c-.14-.25-.02-.38.1-.5.12-.12.25-.28.37-.42.12-.15.16-.25.24-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.12.16 1.76 2.69 4.26 3.76.59.26 1.05.42 1.42.53.6.19 1.15.16 1.58.1.49-.07 1.47-.6 1.68-1.18.2-.57.2-1.06.14-1.18-.06-.11-.22-.17-.47-.29Z"
        />
      </svg>
    </a>
  </div>
</template>
