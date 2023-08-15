import { styled } from 'styled-components'

export const SearchFormContainerSC = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: calc(1.5rem - 8px);

    border: none;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    &:placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background-color: transparent;
    color: ${({ theme }) => theme['green-500']};

    font-weight: bold;

    padding: 0.88rem 2rem;

    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    cursor: pointer;

    transition: background-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      border-color: ${(props) => props.theme['green-500']};
    }
  }
`
