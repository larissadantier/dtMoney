import { useContextSelector } from 'use-context-selector'
import SearchForm from './parts/SearchForm'
import Summary from './parts/Summary'
import Header from '../../components/Header'

import {
  PriceHightlightSC,
  TableSC,
  TransactionContainerSC,
} from './TransactionsStyles'
import { TransactionContext } from '../../contexts/Transactions/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

const Transactions = () => {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />
      <TransactionContainerSC>
        <SearchForm />
        <TableSC>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHightlightSC variant={transaction.type}>
                    {transaction.type === 'outcome' && <span>-</span>}
                    {priceFormatter.format(transaction.price)}
                  </PriceHightlightSC>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {dateFormatter.format(new Date(transaction.created_at))}
                </td>
              </tr>
            ))}
          </tbody>
        </TableSC>
      </TransactionContainerSC>
    </>
  )
}

export default Transactions
