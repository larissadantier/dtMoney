import { useTheme } from 'styled-components'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { CardSC, ContainerSC, HeaderSC, ValueTextSC } from './SummaryStyles'
import { priceFormatter } from '../../../../utils/formatter'
import useSummary from '../../../../hooks/useSummary'

const Summary = () => {
  const theme = useTheme()
  const summary = useSummary()

  return (
    <ContainerSC>
      <CardSC>
        <HeaderSC>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </HeaderSC>

        <ValueTextSC>{priceFormatter.format(summary.income)}</ValueTextSC>
      </CardSC>

      <CardSC>
        <HeaderSC>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </HeaderSC>

        <ValueTextSC>{priceFormatter.format(summary.outcome)}</ValueTextSC>
      </CardSC>

      <CardSC variant="green">
        <HeaderSC>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </HeaderSC>

        <ValueTextSC>{priceFormatter.format(summary.total)}</ValueTextSC>
      </CardSC>
    </ContainerSC>
  )
}

export default Summary
