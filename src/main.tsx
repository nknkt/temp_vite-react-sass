import 'destyle.css/destyle.css';
import './assets/styles/global.scss';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
