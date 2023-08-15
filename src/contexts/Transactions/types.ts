import { ReactNode } from 'react'
import { TransactionTypes } from '../../pages/Transactions/types'

export interface ITransactionDataProps {
  id: number
  description: string
  price: number
  category: string
  type: TransactionTypes
  created_at: string
}

export interface ICreateTransactionProps {
  description: string
  price: number
  category: string
  type: TransactionTypes
}

export interface ITransactionProviderProps {
  children: ReactNode
}

export interface ITransactionContextProps {
  transactions: ITransactionDataProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: ICreateTransactionProps) => Promise<void>
}
