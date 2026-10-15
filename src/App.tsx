import { useEffect, useState } from 'react'
import { galeria, type VeiculoId } from './data/spartan'
import { veiculoInicial } from './lib/site'
import { Header, Hero } from './components/Layout'
import { Packages } from './components/Packages'
import { Addons, Brands, Contact, Dna, FloatingWhatsApp, Footer, Gallery } from './components/Sections'

export default function App() {
  // Um único estado de veículo: todos os preços e mensagens do WhatsApp da página partem dele
  const [veiculo, setVeiculo] = useState<VeiculoId>('carro')
  // O HTML vem pré-renderizado com "Carro"; o ?veiculo= do link é aplicado ao abrir
  useEffect(() => setVeiculo(veiculoInicial()), [])

  return (
    <>
      <a href="#lavagens" className="btn btn-primary btn-sm fixed top-2 left-2 z-50 -translate-y-20 focus:translate-y-0">
        Pular para os preços
      </a>
      <Header hasGallery={galeria.length > 0} />
      <main>
        <Hero />
        <Packages veiculo={veiculo} onVeiculo={setVeiculo} />
        <Addons veiculo={veiculo} />
        <Brands />
        <Dna />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
