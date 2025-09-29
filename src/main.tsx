import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"; 
import { routes } from "./routes";
import './style/index.css'
import { TokenProvider } from './hooks/useToken';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenProvider>
    <RouterProvider router={routes}/>
    </TokenProvider>
  </StrictMode>,
)
