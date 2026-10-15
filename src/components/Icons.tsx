import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
})

export const Check = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
)
export const Plus = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
)
export const Dash = (p: IconProps) => (
  <svg {...base(p)}><path d="M8 12h8" /></svg>
)
export const Clock = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const Arrow = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3.5l1.8 4.4-2.3 1.4a11 11 0 0 0 6.2 6.2l1.4-2.3L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />
  </svg>
)
export const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
)
export const WhatsApp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path d="M9 8.2c-.4 0-.9.4-.9 1.2 0 2.6 3.5 6.3 6.6 6.3.8 0 1.2-.6 1.2-1l-.1-.6-1.8-.9-.9.9a5.3 5.3 0 0 1-2.7-2.7l.9-.9-.8-1.9z" fill="currentColor" stroke="none" />
  </svg>
)
export const Pin = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
)
export const Camera = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 8h3l1.6-2.4h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
)

/* Ícones dos pilares do DNA Spartan */
export const Crown = (p: IconProps) => (
  <svg {...base(p)}><path d="M3.5 8l4.2 3.6L12 5l4.3 6.6L20.5 8l-1.8 10H5.3z" /><path d="M5.5 21h13" /></svg>
)
export const Buckets = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 9h8l-1 11h-6z" /><path d="M13.5 9h8l-1 11h-6z" />
    <path d="M4 9a2.5 2.5 0 0 1 5 0M15 9a2.5 2.5 0 0 1 5 0" />
    <path d="M12 2.5c0 1.2-1 1.7-1 2.6a1 1 0 0 0 2 0c0-.9-1-1.4-1-2.6z" />
  </svg>
)
export const Search = (p: IconProps) => (
  <svg {...base(p)}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /><path d="M8 9a3 3 0 0 1 2.5-1.5" /></svg>
)
export const Shield = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>
)
