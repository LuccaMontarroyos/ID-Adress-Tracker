import { createGlobalStyle } from 'styled-components'
import { Home } from './components/Header'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
        <GlobalStyle />
      </QueryClientProvider>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: Poppins, sans-serif;
    }


`