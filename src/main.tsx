import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import theme from './theme.ts'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const query = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <QueryClientProvider client={query}>
        <App />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
