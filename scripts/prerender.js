// Injeta o HTML pré-renderizado em dist/index.html (roda no fim do `npm run build`).
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const { render } = await import(pathToFileURL('dist-server/entry-server.js').href)
const file = 'dist/index.html'
writeFileSync(file, readFileSync(file, 'utf8').replace('<!--app-->', render()))
rmSync('dist-server', { recursive: true, force: true })
console.log('prerender ok')
