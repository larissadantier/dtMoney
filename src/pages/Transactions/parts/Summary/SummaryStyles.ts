import { styled } from 'styled-components'
import { SummaryCardProps } from './types'

export const ContainerSC = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

export const CardSC = styled.div<SummaryCardProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'green' ? theme['green-700'] : theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  border-radius: 6px;

  padding: 1.5rem 1.5rem 1.5rem 2rem;
`

export const ValueTextSC = styled.strong`
  font-size: 2rem;
  color: ${({ theme }) => theme['gray-100']};
`

export const HeaderSC = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.75rem;
`
