import { css, styled } from 'styled-components'
import { ITransactionsProps } from './types'

export const TransactionContainerSC = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TableSC = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  color: ${({ theme }) => theme['gray-300']};

  td {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 1.5rem 2rem;

    &:first-child {
      width: 50%;

      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`

export const PriceHightlightSC = styled.span<ITransactionsProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};

  ${({ variant }) =>
    variant === 'outcome' &&
    css`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    `}
`
