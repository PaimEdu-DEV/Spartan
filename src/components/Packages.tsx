import { itensLavagem, mensagens, notaPacotes, pacotes, textos, veiculos, type Pacote, type VeiculoId } from '../data/spartan'
import { reais, whatsappUrl } from '../lib/site'
import { Check, Clock, Dash, Plus, WhatsApp } from './Icons'
import { Reveal, Section } from './Layout'

type Props = { veiculo: VeiculoId; onVeiculo: (id: VeiculoId) => void }

const nomeVeiculo = (id: VeiculoId) => veiculos.find((v) => v.id === id)!.nome

export function Packages({ veiculo, onVeiculo }: Props) {
  const t = textos.lavagens
  return (
    <Section id="lavagens" eyebrow={t.sobretitulo} title={t.titulo} lead={t.subtitulo}>
      {/* Seletor fixo enquanto o cliente percorre os pacotes: o controle fica perto do que ele muda */}
      <div className="sticky top-[4.5rem] z-30 mx-auto max-w-xl lg:static">
        <VehicleSelector value={veiculo} onChange={onVeiculo} />
      </div>
      <p aria-live="polite" className="sr-only">
        Mostrando preços para {nomeVeiculo(veiculo)}
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:-mx-10 xl:grid-cols-4">
        {pacotes.map((p, i) => (
          <Reveal key={p.id} delay={i * 70} className="flex">
            <PackageCard pacote={p} anterior={pacotes[i - 1]} veiculo={veiculo} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-subtle">{notaPacotes}</p>
      </Reveal>

      <CompareTable veiculo={veiculo} />
    </Section>
  )
}

function VehicleSelector({ value, onChange }: { value: VeiculoId; onChange: (id: VeiculoId) => void }) {
  const index = veiculos.findIndex((v) => v.id === value)
  return (
    <div
      role="radiogroup"
      aria-label={textos.lavagens.seletor}
      className="material relative grid grid-cols-4 rounded-full p-1 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.8)] ring-1 ring-line"
    >
      <span
        aria-hidden
        className="absolute inset-y-1 left-1 rounded-full bg-lime shadow-[0_0_24px_-4px_rgb(196_240_64/0.6)] transition-transform duration-500 ease-settle motion-reduce:transition-none"
        style={{ width: 'calc((100% - 0.5rem) / 4)', transform: `translateX(${index * 100}%)` }}
      />
      {veiculos.map((v) => (
        <label key={v.id} className="relative z-10 cursor-pointer">
          <input
            type="radio"
            name="veiculo"
            value={v.id}
            checked={v.id === value}
            onChange={() => onChange(v.id)}
            className="peer sr-only"
          />
          <span className="flex min-h-11 items-center justify-center rounded-full px-1.5 text-center text-[0.8125rem] font-semibold leading-tight text-muted transition-[color,transform] duration-200 select-none active:scale-[0.96] peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime sm:text-sm">
            {v.curto}
          </span>
        </label>
      ))}
    </div>
  )
}

function PackageCard({ pacote, anterior, veiculo }: { pacote: Pacote; anterior?: Pacote; veiculo: VeiculoId }) {
  const preco = pacote.precos[veiculo]
  const novos = itensLavagem.filter((i) => i.desde === pacote.id)
  const ItemIcon = anterior ? Plus : Check
  const destaque = pacote.destaque
  const mensagem = mensagens.pacote(pacote.nome, nomeVeiculo(veiculo), reais(preco))

  return (
    <article
      aria-labelledby={`pacote-${pacote.id}`}
      className={`card relative flex w-full flex-col p-6 md:p-7 ${
        destaque
          ? 'bg-[linear-gradient(180deg,rgb(196_240_64/0.09),transparent_40%)] shadow-[inset_0_0_0_1px_rgb(196_240_64/0.55),0_0_70px_-24px_rgb(196_240_64/0.5)]'
          : ''
      }`}
    >
      {destaque && (
        <p className="absolute -top-3 left-6 rounded-full bg-lime px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink">
          {textos.lavagens.destaque}
        </p>
      )}
      <h3 id={`pacote-${pacote.id}`} className="text-[1.375rem] leading-tight font-bold tracking-[-0.02em] xl:min-h-[2.5em]">
        {pacote.nome}
      </h3>
      <p className={`mt-2 text-[0.9375rem] leading-snug xl:min-h-[2.75em] ${destaque ? 'text-lime' : 'text-muted'}`}>{pacote.chamada}</p>

      <div className="mt-7">
        <p className="flex items-baseline gap-2">
          <span key={veiculo} className="price-swap inline-block text-[2.75rem] leading-none font-extrabold tracking-[-0.04em] tabular-nums">
            {reais(preco)}
          </span>
        </p>
        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <span>{nomeVeiculo(veiculo)}</span>
          <span aria-hidden className="text-subtle">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-subtle" />
            <span>
              <span className="sr-only">Tempo estimado: </span>
              {pacote.tempo}
            </span>
          </span>
        </p>
      </div>

      <a
        href={whatsappUrl(mensagem)}
        target="_blank"
        rel="noopener"
        className={`btn mt-7 w-full ${destaque ? 'btn-primary' : 'btn-ghost'}`}
        aria-label={`${textos.lavagens.botao} ${pacote.nome} para ${nomeVeiculo(veiculo)}, ${reais(preco)}, pelo WhatsApp`}
      >
        <WhatsApp className="size-[1.125rem]" />
        {textos.lavagens.botao}
      </a>

      <div aria-hidden className="my-7 h-px bg-line" />

      {anterior && <p className="mb-4 text-sm font-semibold">{textos.lavagens.incluiAnterior(anterior.nome)}</p>}
      <ul className="space-y-3">
        {novos.map((item) => (
          <li key={item.texto} className="flex gap-3 text-[0.9375rem] leading-snug">
            <ItemIcon className="mt-px size-5 shrink-0 text-lime" />
            <span>{item.texto}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-subtle">Produtos</p>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          {pacote.produtos.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className={`mt-5 text-sm font-semibold ${destaque ? 'text-lime' : 'text-fg'}`}>{pacote.resultado}</p>
      </div>
    </article>
  )
}

function CompareTable({ veiculo }: { veiculo: VeiculoId }) {
  const t = textos.comparativo
  const col = (p: Pacote) => (p.destaque ? 'bg-lime/[0.06]' : '')
  return (
    <Reveal className="mt-24 md:mt-32">
      <h3 className="t-title text-center !text-[clamp(1.75rem,5vw,2.75rem)]">{t.titulo}</h3>
      <div className="card mt-10 overflow-x-auto">
        <table className="w-full border-collapse text-left text-[0.8125rem] sm:text-[0.9375rem]">
          <caption className="sr-only">
            Comparativo dos pacotes de lavagem, com preços para {nomeVeiculo(veiculo)}
          </caption>
          <thead>
            <tr>
              <th scope="col" className="p-3 sm:w-[40%] sm:p-5">
                <span className="sr-only">Serviço</span>
              </th>
              {pacotes.map((p) => (
                <th
                  key={p.id}
                  scope="col"
                  className={`px-0.5 pt-5 pb-3 text-center align-bottom text-xs leading-tight font-semibold sm:p-5 sm:text-[0.9375rem] ${col(p)} ${p.destaque ? 'text-lime' : ''}`}
                >
                  {p.curto}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itensLavagem.map((item) => {
              const desde = pacotes.findIndex((p) => p.id === item.desde)
              return (
                <tr key={item.texto} className="border-t border-line">
                  <th scope="row" className="py-3 pr-1 pl-4 font-normal leading-snug text-muted sm:px-5">
                    <span className="sm:hidden">{item.tabela}</span>
                    <span className="hidden sm:inline">{item.texto}</span>
                  </th>
                  {pacotes.map((p, i) => (
                    <td key={p.id} className={`px-0.5 py-2 text-center ${col(p)}`}>
                      {i >= desde ? (
                        <>
                          <Check className="mx-auto size-5 text-lime" />
                          <span className="sr-only">Incluído</span>
                        </>
                      ) : (
                        <>
                          <Dash className="mx-auto size-5 text-white/20" />
                          <span className="sr-only">Não incluído</span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              )
            })}
            <tr className="border-t border-line">
              <th scope="row" className="py-3 pr-1 pl-4 font-semibold sm:px-5">{t.tempo}</th>
              {pacotes.map((p) => (
                <td key={p.id} className={`px-0.5 py-3 text-center text-xs leading-tight text-muted sm:text-sm ${col(p)}`}>
                  {p.tempo}
                </td>
              ))}
            </tr>
            <tr className="border-t border-line">
              <th scope="row" className="py-3 pr-1 pb-5 pl-4 font-semibold sm:px-5">
                {t.preco}
                <span className="block text-xs font-normal text-muted">{nomeVeiculo(veiculo)}</span>
              </th>
              {pacotes.map((p) => (
                <td key={p.id} className={`px-0.5 py-3 pb-5 text-center ${col(p)}`}>
                  <span key={veiculo} className="price-swap inline-block text-[0.8125rem] font-bold whitespace-nowrap tabular-nums sm:text-lg">
                    {reais(p.precos[veiculo])}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Reveal>
  )
}
