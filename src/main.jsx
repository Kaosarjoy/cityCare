import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
   
  </StrictMode>,
)
