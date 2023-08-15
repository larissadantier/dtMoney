import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'styled-components'
import { TransactionTypes } from '../../../../pages/Transactions/types'

export const OverlaySC = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const CloseButtonSC = styled(Dialog.Close)`
  cursor: pointer;

  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  border: 0;
  line-height: 0;

  background: transparent;
  color: ${({ theme }) => theme['gray-500']};
`

export const TransactionTypeSC = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
`

export const TransactionTypeButtonSC = styled(RadioGroup.Item)<{
  variant: TransactionTypes
}>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 6px;
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  svg {
    color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    background: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-500'] : theme['red-300']};

    color: ${({ theme }) => theme.white};

    &:focus {
      box-shadow: 0 0 0 2px
        ${({ theme, variant }) =>
          variant === 'income' ? theme['green-500'] : theme['red-300']};
    }

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`

export const NewTransactionContentSC = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2.5rem 3rem;

  min-width: 32rem;

  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;

      border: none;
      border-radius: 6px;
    }
  }

  button[type='submit'] {
    cursor: pointer;

    width: 100%;

    padding: 1rem 2rem;
    margin-top: 2.5rem;

    border: none;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme['gray-100']};

    font-weight: bold;

    transition: background-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-700']};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme['gray-300']};
    }
  }
`
