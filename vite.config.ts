import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { negocio, pacotes, seo, veiculos } from './src/data/spartan.ts'

/** Endereço público: o do arquivo de dados, ou o que a Netlify/Vercel informam no build. */
function siteUrl(): string {
  const url =
    negocio.siteUrl ||
    process.env.URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')
  return url.replace(/\/$/, '')
}

/**
 * Escreve title, description, Open Graph e JSON-LD direto no HTML a partir de src/data/spartan.ts.
 * Precisa estar no HTML estático: o WhatsApp e o Google leem a página sem rodar JavaScript.
 */
function seoFromData(): Plugin {
  return {
    name: 'spartan-seo',
    transformIndexHtml() {
      const base = siteUrl()
      const image = base + seo.imagemCompartilhamento
      const precos = pacotes.flatMap((p) => Object.values(p.precos))
      const instagramUrl = `https://www.instagram.com/${negocio.instagram}/`

      const jsonLd: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        name: negocio.nomeCompleto,
        description: seo.descricao,
        telephone: negocio.telefoneE164,
        priceRange: `R$ ${Math.min(...precos)} – R$ ${Math.max(...precos)}`,
        currenciesAccepted: 'BRL',
        sameAs: [instagramUrl],
        ...(base && { url: base + '/', image, logo: base + '/logo-spartan.jpg' }),
        ...(negocio.endereco && { address: negocio.endereco }),
        ...(negocio.mapsUrl && { hasMap: negocio.mapsUrl }),
        makesOffer: pacotes.flatMap((p) =>
          veiculos.map((v) => ({
            '@type': 'Offer',
            name: `${p.nome} (${v.nome})`,
            price: p.precos[v.id],
            priceCurrency: 'BRL',
          })),
        ),
      }

      const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' })
      return [
        { tag: 'title', children: seo.titulo, injectTo: 'head' },
        meta({ name: 'description', content: seo.descricao }),
        meta({ property: 'og:type', content: 'website' }),
        meta({ property: 'og:locale', content: 'pt_BR' }),
        meta({ property: 'og:site_name', content: negocio.nomeCompleto }),
        meta({ property: 'og:title', content: seo.titulo }),
        meta({ property: 'og:description', content: seo.descricao }),
        meta({ property: 'og:image', content: image }),
        meta({ property: 'og:image:width', content: '1200' }),
        meta({ property: 'og:image:height', content: '630' }),
        meta({ property: 'og:image:alt', content: `${negocio.nomeCompleto}: capacete espartano verde neon sobre fundo preto` }),
        ...(base ? [meta({ property: 'og:url', content: base + '/' })] : []),
        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        ...(base ? [{ tag: 'link', attrs: { rel: 'canonical', href: base + '/' }, injectTo: 'head' } as HtmlTagDescriptor] : []),
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(jsonLd), injectTo: 'head' },
      ]
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFromData()],
})
