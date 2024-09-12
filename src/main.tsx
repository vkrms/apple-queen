import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { GoogleOAuthProvider } from "@react-oauth/google"

// Mine
const clientId = "645914900323-vgpofid14tki4klpcr7qu4o9tgt3nrhg.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientId}>
    <StrictMode>
      <App />
    </StrictMode>,
  </GoogleOAuthProvider>
)
