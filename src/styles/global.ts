import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
}

body {
  font-size: 1rem;
  background-color: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
  -webkit-font-smoothing: antialiased;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['green-500']};
    border-radius: 20px;       
    border: 2px solid ${({ theme }) => theme['gray-800']};  
  } 
}

body, input, textarea, button {
  font: 400 1rem Roboto, sans-serif;
}

`
