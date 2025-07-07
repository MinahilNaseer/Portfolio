import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Fix: The render() call was incomplete
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)