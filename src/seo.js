const SITE_URL = 'https://karaaslanvinc.com'
const DEFAULT_TITLE = 'Elazığ Kiralık Vinç & Sepetli Vinç Hizmetleri - Karaaslan Vinç'
const DEFAULT_DESCRIPTION =
  'Elazığ kiralık vinç ve sepetli vinç hizmetlerinde profesyonel çözümler. Karaaslan Vinç ile 7/24 uygun fiyatlı sepetli platform, çelik montaj ve konteyner nakliye.'

function upsertMetaByName(name, content) {
  let meta = document.head.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  let meta = document.head.querySelector(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function applyRouteSeo(route) {
  const title = route.meta?.title || DEFAULT_TITLE
  const description = route.meta?.description || DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${route.path}`

  document.title = title

  upsertMetaByName('description', description)
  upsertMetaByName('robots', 'index, follow')

  upsertMetaByProperty('og:type', 'website')
  upsertMetaByProperty('og:site_name', 'Karaaslan Vinç')
  upsertMetaByProperty('og:title', title)
  upsertMetaByProperty('og:description', description)
  upsertMetaByProperty('og:url', canonical)
  upsertMetaByProperty('og:image', `${SITE_URL}/brand-icon.png`)

  upsertCanonical(canonical)
}

