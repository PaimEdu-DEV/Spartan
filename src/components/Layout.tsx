import type { CSSProperties, ReactNode } from 'react'
import { mensagens, negocio, textos } from '../data/spartan'
import { useReveal, whatsappUrl } from '../lib/site'
import { WhatsApp } from './Icons'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
}: {
  id: string
  eyebrow?: string
  title: string
  lead?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`py-24 md:py-36 ${className}`}>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="t-eyebrow mb-4">{eyebrow}</p>}
          <h2 id={`${id}-titulo`} className="t-title">{title}</h2>
          {lead && <p className="t-lead mt-5">{lead}</p>}
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </Container>
    </section>
  )
}

export function Wordmark({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const lg = size === 'lg'
  return (
    <span className="flex items-center gap-2.5">
      <img src="/logo-spartan.jpg" alt="" width={lg ? 44 : 36} height={lg ? 44 : 36} className="shrink-0 rounded-full ring-1 ring-lime/30" />
      <span className="flex flex-col leading-none">
        <span className={`font-extrabold italic tracking-[-0.02em] text-lime ${lg ? 'text-2xl' : 'text-lg'}`}>
          {negocio.nome}
        </span>
        <span className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {negocio.subtitulo}
        </span>
      </span>
    </span>
  )
}

const nav = [
  { href: '#lavagens', label: 'Lavagens e preços' },
  { href: '#adicionais', label: 'Adicionais' },
  { href: '#dna', label: 'DNA Spartan' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#contato', label: 'Contato' },
]

export function Header({ hasGallery }: { hasGallery: boolean }) {
  return (
    <header className="material fixed inset-x-0 top-0 z-40">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a href="#inicio" className="rounded-lg">
          <Wordmark />
          <span className="sr-only"> (voltar ao início)</span>
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {nav
            .filter((n) => hasGallery || n.href !== '#trabalhos')
            .map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-fg">
                {n.label}
              </a>
            ))}
        </nav>
        <a href="#lavagens" className="text-sm font-semibold text-lime md:hidden">
          Ver preços
        </a>
        <a
          href={whatsappUrl(mensagens.geral)}
          target="_blank"
          rel="noopener"
          className="btn btn-primary btn-sm hidden md:inline-flex"
        >
          <WhatsApp className="size-4" />
          Agendar
        </a>
      </Container>
      {/* borda suave em vez de linha dura */}
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  )
}

export function Hero() {
  const t = textos.hero
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 32%, rgb(196 240 64 / 0.16), transparent 70%), radial-gradient(80% 60% at 50% 110%, rgb(196 240 64 / 0.07), transparent 70%)',
        }}
      />
      <Container className="flex flex-col items-center text-center">
        <img
          src="/logo-spartan.jpg"
          alt="Logo SPARTAN Estética & Lavagem: capacete espartano verde neon"
          width={150}
          height={150}
          fetchPriority="high"
          className="logo-in size-[150px] rounded-full shadow-[0_0_60px_-6px_rgb(196_240_64/0.45)] ring-1 ring-lime/40 [animation:logo-in_900ms_var(--ease-settle)_both]"
        />
        <p className="t-eyebrow mt-6">
          {negocio.nome} · {negocio.subtitulo}
        </p>
        <h1 id="inicio-titulo" className="t-display mt-4 max-w-4xl">
          {/* a última palavra do título ganha o verde da marca */}
          {t.titulo.slice(0, t.titulo.lastIndexOf(' ') + 1)}
          <span className="text-lime">{t.titulo.slice(t.titulo.lastIndexOf(' ') + 1)}</span>
        </h1>
        <p className="t-lead mt-6 max-w-2xl">{t.subtitulo}</p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={whatsappUrl(mensagens.geral)} target="_blank" rel="noopener" className="btn btn-primary h-14 text-[1.0625rem]">
            <WhatsApp className="size-5" />
            {t.botaoAgendar}
          </a>
          <a href="#lavagens" className="btn btn-ghost h-14 text-[1.0625rem]">
            {t.botaoServicos}
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {t.selos.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span aria-hidden className="size-1.5 rounded-full bg-lime shadow-[0_0_8px_rgb(196_240_64/0.8)]" />
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
