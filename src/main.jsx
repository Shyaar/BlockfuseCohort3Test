import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TeamDataProvider from './team data/TeamDataProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeamDataProvider>
      <App />
    </TeamDataProvider>
  </StrictMode>,
)
