import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import {
  ICreateTransactionProps,
  ITransactionContextProps,
  ITransactionDataProps,
  ITransactionProviderProps,
} from './types'
import { api } from '../../lib/axios'

export const TransactionContext = createContext({} as ITransactionContextProps)

const TransactionProvider = ({ children }: ITransactionProviderProps) => {
  const [transactions, setTransactions] = useState<ITransactionDataProps[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: ICreateTransactionProps) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        created_at: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionProvider
