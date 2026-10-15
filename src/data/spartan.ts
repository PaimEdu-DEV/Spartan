/**
 * SPARTAN Estética & Lavagem: TODO o conteúdo do site fica aqui.
 *
 * Para mudar preço, texto, serviço, marca ou contato, edite só este arquivo.
 * Campos marcados como "opcional": deixe vazio ('' ou []) e a seção some do site.
 */

/* ------------------------------------------------------------------ */
/* Contato                                                             */
/* ------------------------------------------------------------------ */

export const negocio = {
  nome: 'SPARTAN',
  nomeCompleto: 'SPARTAN Estética & Lavagem',
  subtitulo: 'Estética & Lavagem',

  /** Só números, com DDI 55 + DDD. Usado nos links do WhatsApp. */
  whatsapp: '5554991499805',
  /** Como o telefone aparece escrito no site. */
  telefoneExibicao: '(54) 99149-9805',
  /** Formato internacional para o link "ligar" e para o Google. */
  telefoneE164: '+5554991499805',

  instagram: 'spartan_esteticaelavagem',

  /** Opcional. Ex.: 'Rua Exemplo, 123, Centro, Passo Fundo/RS'. Vazio = não aparece. */
  endereco: '',
  /** Opcional. Link do Google Maps para o endereço acima. */
  mapsUrl: '',
  /** Opcional. Ex.: ['Seg a Sex: 8h às 18h', 'Sáb: 8h às 12h']. Vazio = não aparece. */
  horarios: [] as string[],

  /**
   * Endereço público do site depois de publicado (ex.: 'https://spartan.vercel.app').
   * Deixa a prévia do link no WhatsApp com imagem. Na Vercel/Netlify é preenchido
   * automaticamente se ficar vazio, mas o domínio definitivo é melhor.
   */
  siteUrl: '',
}

/* ------------------------------------------------------------------ */
/* SEO / prévia do link                                                */
/* ------------------------------------------------------------------ */

export const seo = {
  titulo: 'SPARTAN Estética & Lavagem | Lavagem técnica e detalhamento automotivo',
  descricao:
    'Lavagens Comercial, Cera Líquida, Premium e Spartan com preços por tipo de veículo. Método de dois baldes, produtos de elite e brilho espelhado. Agende pelo WhatsApp (54) 99149-9805.',
  imagemCompartilhamento: '/og-image.png',
}

/* ------------------------------------------------------------------ */
/* Textos da página                                                    */
/* ------------------------------------------------------------------ */

export const textos = {
  hero: {
    titulo: 'Seu carro, nível Spartan.',
    subtitulo:
      'Lavagem técnica, proteção de verdade e brilho espelhado. Escolha o pacote, veja o preço do seu veículo e agende pelo WhatsApp.',
    selos: ['Método de dois baldes', 'Produtos de elite', 'Garantia de serviço'],
    botaoAgendar: 'Agendar no WhatsApp',
    botaoServicos: 'Ver serviços',
  },
  lavagens: {
    sobretitulo: 'Lavagens',
    titulo: 'Quatro níveis de cuidado.',
    subtitulo: 'Escolha o seu veículo: todos os preços da página se ajustam.',
    seletor: 'Tipo de veículo',
    destaque: 'Topo de linha',
    incluiAnterior: (anterior: string) => `Tudo da ${anterior}, e mais:`,
    botao: 'Agendar',
  },
  comparativo: {
    titulo: 'Compare lado a lado.',
    tempo: 'Tempo estimado',
    preco: 'Preço',
  },
  adicionais: {
    sobretitulo: 'Serviços adicionais',
    titulo: 'Estética & detalhamento sob medida.',
    subtitulo: 'Combine com qualquer lavagem ou faça à parte. O valor depende do estado do veículo, então consulte pelo WhatsApp.',
    botao: 'Consultar valor',
  },
  dna: {
    sobretitulo: 'Por que somos diferentes',
    titulo: 'O DNA Spartan.',
  },
  marcas: {
    titulo: 'Só trabalhamos com as melhores marcas do mercado.',
  },
  galeria: {
    sobretitulo: 'Nossos trabalhos',
    titulo: 'O resultado fala por si.',
    vazio: 'Foto em breve',
  },
  contato: {
    titulo: 'Pronto para o nível Spartan?',
    subtitulo: 'Chame no WhatsApp, diga o seu veículo e o serviço. A gente responde com os horários livres.',
    botao: 'Agendar no WhatsApp',
    ligar: 'Ligar',
  },
}

/** Mensagens que já chegam escritas no WhatsApp do cliente. */
export const mensagens = {
  geral: 'Olá! Vi o site da Spartan e quero agendar uma lavagem. Pode me passar os horários?',
  pacote: (pacote: string, veiculo: string, preco: string) =>
    `Olá! Quero a ${pacote} para ${veiculo} (${preco}). Pode me passar horários?`,
  adicional: (servico: string, veiculo: string) =>
    `Olá! Quero consultar o valor de ${servico} para ${veiculo}. Pode me passar?`,
}

/* ------------------------------------------------------------------ */
/* Categorias de veículo                                               */
/* ------------------------------------------------------------------ */

export const veiculos = [
  { id: 'carro', nome: 'Carro', curto: 'Carro' },
  { id: 'suv-pequena', nome: 'SUV Pequena', curto: 'SUV pequena' },
  { id: 'suv-grande', nome: 'SUV Grande', curto: 'SUV grande' },
  { id: 'caminhonete', nome: 'Caminhonete', curto: 'Caminhonete' },
] as const

export type VeiculoId = (typeof veiculos)[number]['id']

/* ------------------------------------------------------------------ */
/* Pacotes de lavagem                                                  */
/* ------------------------------------------------------------------ */

export type Pacote = {
  id: string
  nome: string
  /** Nome curto usado na tabela comparativa. */
  curto: string
  /** Frase curta que aparece abaixo do nome. */
  chamada: string
  /** Frase de impacto no rodapé do card. */
  resultado: string
  tempo: string
  /** Preço em reais por categoria de veículo. */
  precos: Record<VeiculoId, number>
  /** Produtos usados neste nível (aparecem em letra menor no card). */
  produtos: string[]
  destaque?: boolean
}

export const pacotes: Pacote[] = [
  {
    id: 'comercial',
    nome: 'Lavagem Comercial',
    curto: 'Comercial',
    chamada: 'Preservação diária & conservação',
    resultado: 'Limpo, protegido e sem micro-riscos.',
    tempo: '1 hora',
    precos: { carro: 80, 'suv-pequena': 100, 'suv-grande': 120, caminhonete: 150 },
    produtos: ['Shampoo pH Neutro SPARTAN Care', 'Toalhas de microfibra 300 GSM'],
  },
  {
    id: 'cera-liquida',
    nome: 'Lavagem com Cera Líquida',
    curto: 'Cera Líquida',
    chamada: 'Brilho imediato & repelência à água',
    resultado: 'Água escorre, o brilho aparece na hora.',
    tempo: '1,5 hora',
    precos: { carro: 100, 'suv-pequena': 130, 'suv-grande': 150, caminhonete: 180 },
    produtos: ['Cera Líquida SPARTAN Hydro-Glaze'],
  },
  {
    id: 'premium',
    nome: 'Lavagem Premium',
    curto: 'Premium',
    chamada: 'Detalhamento interno & proteção técnica',
    resultado: 'Plásticos com efeito de novo, por dentro e por fora.',
    tempo: '3 horas',
    precos: { carro: 150, 'suv-pequena': 180, 'suv-grande': 220, caminhonete: 300 },
    produtos: ['Revitalizador de Plásticos SPARTAN UV Shield', 'Cera em Pasta SPARTAN Premium Polymer'],
  },
  {
    id: 'spartan',
    nome: 'Lavagem Spartan',
    curto: 'Spartan',
    chamada: 'A verdadeira Spartan & cuidado total',
    resultado: 'A verdadeira restauração: brilho espelhado & cuidado total.',
    tempo: '5 a 6 horas',
    precos: { carro: 250, 'suv-pequena': 300, 'suv-grande': 350, caminhonete: 500 },
    produtos: [
      'Cera em Pasta SPARTAN Carnaúba Gold',
      'Descontaminante Químico e Mecânico',
      'Condicionador de Couro/Tecido SPARTAN Velvet Touch',
      'Oxi-sanitização SPARTAN Pure Air',
    ],
    destaque: true,
  },
]

/**
 * O que cada lavagem faz. `desde` = id do primeiro pacote que inclui o item;
 * todos os pacotes acima dele também incluem. Isso alimenta os cards E a tabela comparativa
 * (`tabela` = versão curta que cabe na tabela do celular).
 */
export const itensLavagem: { texto: string; tabela: string; desde: Pacote['id'] }[] = [
  { texto: 'Pré-lavagem com shampoo desengraxante suave', tabela: 'Pré-lavagem desengraxante', desde: 'comercial' },
  { texto: 'Lavagem técnica com método de dois baldes (evita micro-riscos)', tabela: 'Lavagem técnica 2 baldes', desde: 'comercial' },
  { texto: 'Aspiração detalhada, rodas e caixas de roda', tabela: 'Aspiração, rodas e caixas', desde: 'comercial' },
  { texto: 'Pretinho de alta durabilidade nos pneus', tabela: 'Pretinho nos pneus', desde: 'comercial' },
  { texto: 'Cera líquida premium com polímeros', tabela: 'Cera líquida com polímeros', desde: 'cera-liquida' },
  { texto: 'Proteção UV e repelência hidrofóbica por até 30 dias', tabela: 'Proteção UV até 30 dias', desde: 'cera-liquida' },
  { texto: 'Limpeza detalhada dos vidros com anti-embaçante', tabela: 'Vidros anti-embaçante', desde: 'cera-liquida' },
  { texto: 'Revitalização de plásticos internos e externos com SPARTAN UV Shield (efeito de novo)', tabela: 'Plásticos UV Shield', desde: 'premium' },
  { texto: 'Cera em pasta SPARTAN Premium Polymer', tabela: 'Cera Premium Polymer', desde: 'premium' },
  { texto: 'Cera em pasta SPARTAN Carnaúba Gold: 6 meses de proteção', tabela: 'Cera Carnaúba Gold (6 meses)', desde: 'spartan' },
  { texto: 'Descontaminação química e mecânica da pintura (pura ou sintética)', tabela: 'Descontaminação da pintura', desde: 'spartan' },
  { texto: 'Cristalização / repelente de água completo do interior (couro ou tecido) com SPARTAN Velvet Touch', tabela: 'Cristalização do interior', desde: 'spartan' },
  { texto: 'Oxi-sanitização SPARTAN Pure Air', tabela: 'Oxi-sanitização Pure Air', desde: 'spartan' },
]

export const notaPacotes =
  'Cada modalidade é projetada para atender a um nível de necessidade diferente, garantindo a excelência Spartan em todos os níveis.'

/* ------------------------------------------------------------------ */
/* Serviços adicionais (todos com "Consultar valor")                   */
/* ------------------------------------------------------------------ */

export const adicionais = [
  {
    grupo: 'Externos',
    itens: [
      'Cristalização de vidros',
      'Remoção de chuva ácida',
      'Polimento de faróis',
      'Aplicação de cera técnica',
      'Selante de rodas',
      'Revitalização de plásticos',
    ],
  },
  {
    grupo: 'Internos',
    itens: [
      'Higienização de bancos',
      'Limpeza & hidratação de couro',
      'Higienização do carpete',
      'Higienização de ar-condicionado',
      'Oxi-sanitização',
      'Detalhamento de painel',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* DNA Spartan                                                         */
/* ------------------------------------------------------------------ */

export const dna = [
  {
    icone: 'coroa',
    titulo: 'Produtos de elite',
    texto:
      "Só usamos marcas líderes mundiais, como Meguiar's, Vonixx e Soft99, para garantir resultado excepcional e máxima proteção.",
  },
  {
    icone: 'baldes',
    titulo: 'Técnica de microfibra',
    texto:
      "Método de dois baldes e panos de microfibra premium para cada etapa. Menos riscos, sem 'swirl marks'.",
  },
  {
    icone: 'lupa',
    titulo: 'Foco total no detalhe',
    texto:
      'Não limpamos só o visível: cuidamos de frestas, emblemas e cantos que outros ignoram. O detalhe faz a diferença.',
  },
  {
    icone: 'escudo',
    titulo: 'Resultado garantido',
    texto:
      'Equipe treinada e dedicada a entregar a perfeição. Sua satisfação é prioridade absoluta, com garantia de serviço.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Marcas parceiras (só nomes, sem logotipos de terceiros)             */
/* ------------------------------------------------------------------ */

export const marcas = ['Soft99', 'Protelim', 'Easytech', 'Vonixx', "Meguiar's", 'Finisher', 'Cadillac', 'Zacs']

/* ------------------------------------------------------------------ */
/* Galeria "Nossos trabalhos"                                          */
/* ------------------------------------------------------------------ */

/**
 * Para trocar um espaço por uma foto real:
 *   1. Coloque a foto em public/trabalhos/ (ex.: public/trabalhos/hilux-spartan.jpg)
 *      Dica: JPG ou WebP com no máximo ~1600 px de largura e ~300 KB.
 *   2. Preencha `foto` com '/trabalhos/hilux-spartan.jpg' e `descricao` com o que aparece na foto.
 * Itens sem `foto` aparecem como "Foto em breve". Para esconder a galeria inteira, deixe a lista vazia: [].
 */
export const galeria: { legenda: string; foto?: string; descricao?: string }[] = [
  { legenda: 'Lavagem Spartan' },
  { legenda: 'Brilho espelhado' },
  { legenda: 'Interior higienizado' },
  { legenda: 'Rodas e caixas de roda' },
  { legenda: 'Revitalização de plásticos' },
  { legenda: 'Polimento de faróis' },
]
