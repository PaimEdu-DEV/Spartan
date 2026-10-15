import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/** Usado só no build: gera o HTML da página para ela aparecer antes do JavaScript carregar. */
export const render = () =>
  renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
