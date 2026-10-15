import { useEffect, useRef, useState } from 'react'
import { negocio, veiculos, type VeiculoId } from '../data/spartan'

export const reais = (valor: number) => `R$ ${valor.toLocaleString('pt-BR')}`

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensagem)}`

export const instagramUrl = `https://www.instagram.com/${negocio.instagram}/`
export const telefoneUrl = `tel:${negocio.telefoneE164}`

/** Veículo inicial: ?veiculo=suv-grande no link permite mandar o preço certo para cada cliente. */
export function veiculoInicial(): VeiculoId {
  const param = new URLSearchParams(window.location.search).get('veiculo')
  return veiculos.find((v) => v.id === param)?.id ?? 'carro'
}

let observer: IntersectionObserver | undefined

/** Faz o elemento surgir ao entrar na tela (uma vez só). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in')
      return
    }
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer?.unobserve(el)
  }, [])
  return ref
}

/** true enquanto algum dos elementos (por id) estiver visível na tela. */
export function useAnyVisible(ids: string[]) {
  const [visible, setVisible] = useState(true)
  const key = ids.join(',')
  useEffect(() => {
    const els = key.split(',').map((id) => document.getElementById(id)).filter((el) => el !== null)
    if (!els.length || !('IntersectionObserver' in window)) return
    const state = new Map<Element, boolean>()
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) state.set(e.target, e.isIntersecting)
      setVisible([...state.values()].some(Boolean))
    })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
  return visible
}
