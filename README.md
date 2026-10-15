# SPARTAN Estética & Lavagem: site

Vite + React + TypeScript + Tailwind. Sem backend. O HTML é pré-renderizado no build (a página aparece rápido e a prévia do link no WhatsApp funciona).

## Rodar no computador

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # gera a pasta dist/ para publicar
npm run preview    # testa o build em http://localhost:4173
```

## Editar conteúdo

**Tudo** fica em `src/data/spartan.ts`: preços, pacotes, itens, adicionais, DNA, marcas, textos, mensagens do WhatsApp, contato, endereço/horários (opcionais) e a galeria.

- Preço: altere `precos` dentro do pacote.
- Fotos da galeria: coloque em `public/trabalhos/` e preencha `foto: '/trabalhos/arquivo.jpg'` (JPG/WebP até ~1600 px e ~300 KB).
- Endereço e horários: preencha `endereco`, `mapsUrl` e `horarios`; enquanto estiverem vazios, não aparecem.
- Logo: `public/logo-spartan.jpg` (hoje 150×150, tirado do Instagram). Troque por uma versão maior (500×500 ou mais) com o mesmo nome e refaça `public/og-image.png` (1200×630).
- Link com veículo já escolhido: `https://seusite/?veiculo=caminhonete` (`carro`, `suv-pequena`, `suv-grande`, `caminhonete`).

## Publicar de graça

**Vercel**: suba o projeto no GitHub → vercel.com → "Add New Project" → importe o repositório → Deploy (detecta Vite sozinho).
**Netlify**: netlify.com → "Add new site" → importe do GitHub → build `npm run build`, pasta `dist`.

Depois de publicar, coloque o endereço final em `negocio.siteUrl` (em `src/data/spartan.ts`) e publique de novo: isso garante a imagem na prévia do link no WhatsApp. Teste a velocidade em https://pagespeed.web.dev.
