import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/Transactions/TransactionContext'
import { useMemo } from 'react'

const useSummary = () => {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        }

        if (transaction.type === 'outcome') {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}

export default useSummary
