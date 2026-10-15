import type { ReactNode } from 'react'
import { adicionais, dna, galeria, marcas, mensagens, negocio, textos, veiculos, type VeiculoId } from '../data/spartan'
import { instagramUrl, telefoneUrl, useAnyVisible, whatsappUrl } from '../lib/site'
import { Buckets, Camera, Clock, Crown, Instagram, Phone, Pin, Search, Shield, WhatsApp } from './Icons'
import { Container, Reveal, Section, Wordmark } from './Layout'

export function Addons({ veiculo }: { veiculo: VeiculoId }) {
  const t = textos.adicionais
  const nomeVeiculo = veiculos.find((v) => v.id === veiculo)!.nome
  return (
    <Section id="adicionais" eyebrow={t.sobretitulo} title={t.titulo} lead={t.subtitulo}>
      <div className="grid gap-5 md:grid-cols-2">
        {adicionais.map((grupo, gi) => (
          <Reveal key={grupo.grupo} delay={gi * 80} className="card p-2 sm:p-3">
            <h3 className="px-4 pt-4 pb-2 text-xl font-bold tracking-[-0.02em] sm:px-5">
              Serviços <span className="text-lime">{grupo.grupo.toLowerCase()}</span>
            </h3>
            <ul>
              {grupo.itens.map((servico) => (
                <li key={servico} className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 first:border-t-0 sm:px-5">
                  <span className="text-[0.9375rem] leading-snug">{servico}</span>
                  <a
                    href={whatsappUrl(mensagens.adicional(servico.toLowerCase(), nomeVeiculo))}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-sm shrink-0 !min-h-9 !px-3.5 text-[0.8125rem] text-lime ring-1 ring-lime/35 hover:bg-lime/10"
                    aria-label={`${t.botao} de ${servico} no WhatsApp`}
                  >
                    {t.botao}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const dnaIcons = { coroa: Crown, baldes: Buckets, lupa: Search, escudo: Shield }

export function Dna() {
  const t = textos.dna
  return (
    <Section id="dna" eyebrow={t.sobretitulo} title={t.titulo} className="bg-[radial-gradient(60%_40%_at_50%_0%,rgb(196_240_64/0.06),transparent)]">
      <div className="grid gap-5 sm:grid-cols-2">
        {dna.map((pilar, i) => {
          const Icon = dnaIcons[pilar.icone]
          return (
            <Reveal key={pilar.titulo} delay={(i % 2) * 80} className="card p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-lime/10 text-lime ring-1 ring-lime/25">
                  <Icon className="size-6" />
                </span>
                <span aria-hidden className="text-sm font-semibold text-subtle tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em]">{pilar.titulo}</h3>
              <p className="mt-3 text-muted">{pilar.texto}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

export function Brands() {
  if (!marcas.length) return null
  return (
    <section aria-labelledby="marcas-titulo" className="border-y border-line py-16 md:py-20">
      <Container>
        <Reveal>
          <h2 id="marcas-titulo" className="text-center text-sm font-semibold text-muted">
            {textos.marcas.titulo}
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {marcas.map((m) => (
              <li key={m} className="text-xl font-bold tracking-[-0.02em] text-white/55 transition-colors hover:text-fg sm:text-2xl">
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

export function Gallery() {
  if (!galeria.length) return null
  const t = textos.galeria
  return (
    <Section id="trabalhos" eyebrow={t.sobretitulo} title={t.titulo}>
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {galeria.map((item, i) => (
          <li key={item.legenda + i}>
            <Reveal delay={(i % 3) * 60}>
              <figure className="card relative aspect-[4/5] overflow-hidden !rounded-3xl">
                {item.foto ? (
                  <img
                    src={item.foto}
                    alt={item.descricao || item.legenda}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="grid size-full place-items-center bg-[radial-gradient(80%_60%_at_50%_30%,rgb(196_240_64/0.07),transparent)]">
                    <div className="flex flex-col items-center gap-2 text-subtle">
                      <Camera className="size-7" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]">{t.vazio}</span>
                    </div>
                  </div>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10 text-sm font-semibold sm:text-base">
                  {item.legenda}
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Contact() {
  const t = textos.contato
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative isolate overflow-hidden py-24 md:py-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_50%_100%,rgb(196_240_64/0.13),transparent_70%)]"
      />
      <Container className="text-center">
        <Reveal>
          <img src="/logo-spartan.jpg" alt="" width={96} height={96} loading="lazy" className="mx-auto size-24 rounded-full shadow-[0_0_40px_-6px_rgb(196_240_64/0.45)] ring-1 ring-lime/40" />
          <h2 id="contato-titulo" className="t-title mx-auto mt-6 max-w-3xl">{t.titulo}</h2>
          <p className="t-lead mx-auto mt-5 max-w-xl">{t.subtitulo}</p>
          <div id="contato-cta" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl(mensagens.geral)} target="_blank" rel="noopener" className="btn btn-primary h-14 w-full text-[1.0625rem] sm:w-auto">
              <WhatsApp className="size-5" />
              {t.botao}
            </a>
            <a href={telefoneUrl} className="btn btn-ghost h-14 w-full text-[1.0625rem] sm:w-auto">
              <Phone className="size-5" />
              {t.ligar} {negocio.telefoneExibicao}
            </a>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-14 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
          <ContactRow icon={<Instagram className="size-5" />} label="Instagram" href={instagramUrl} value={`@${negocio.instagram}`} external />
          <ContactRow icon={<WhatsApp className="size-5" />} label="WhatsApp e telefone" href={telefoneUrl} value={negocio.telefoneExibicao} />
          {negocio.endereco && (
            <ContactRow icon={<Pin className="size-5" />} label="Endereço" href={negocio.mapsUrl || undefined} value={negocio.endereco} external />
          )}
          {negocio.horarios.length > 0 && (
            <ContactRow icon={<Clock className="size-5" />} label="Horários" value={negocio.horarios.join(' · ')} />
          )}
        </Reveal>
      </Container>
    </section>
  )
}

function ContactRow({ icon, label, value, href, external }: { icon: ReactNode; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lime/10 text-lime">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{label}</span>
        <span className="block truncate font-semibold">{value}</span>
      </span>
    </>
  )
  const cls = 'card flex items-center gap-4 !rounded-2xl p-4'
  return href ? (
    <a href={href} {...(external && { target: '_blank', rel: 'noopener' })} className={`${cls} transition-colors hover:bg-surface-2`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line pt-10 pb-28 md:pb-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-subtle sm:flex-row">
        <Wordmark />
        <p>
          © {new Date().getFullYear()} {negocio.nomeCompleto}
        </p>
      </Container>
    </footer>
  )
}

/** Botão flutuante (só no celular): aparece quando os botões grandes de agendar saem da tela. */
export function FloatingWhatsApp() {
  const ctaVisible = useAnyVisible(['inicio', 'contato-cta'])
  const show = !ctaVisible
  return (
    <a
      href={whatsappUrl(mensagens.geral)}
      target="_blank"
      rel="noopener"
      aria-label="Agendar pelo WhatsApp"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fab-enter btn btn-primary fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 h-14 !px-5 shadow-[0_12px_40px_-8px_rgb(0_0_0/0.9),0_0_0_1px_rgb(196_240_64/0.4)] md:hidden ${
        show ? 'opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'
      }`}
    >
      <WhatsApp className="size-5" />
      Agendar
    </a>
  )
}
