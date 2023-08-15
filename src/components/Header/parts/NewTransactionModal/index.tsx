import { useContextSelector } from 'use-context-selector'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import * as z from 'zod'
import {
  CloseButtonSC,
  NewTransactionContentSC,
  OverlaySC,
  TransactionTypeButtonSC,
  TransactionTypeSC,
} from './NewTransactionStyles'
import { Controller, useForm } from 'react-hook-form'
import { TransactionContext } from '../../../../contexts/Transactions/TransactionContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionInputs = z.infer<typeof newTransactionFormSchema>

const NewTransactionModal = () => {
  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const handleNewTransaction = async (data: NewTransactionInputs) => {
    await createTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <OverlaySC />
      <NewTransactionContentSC>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButtonSC>
          <X size={24} />
        </CloseButtonSC>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeSC
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButtonSC variant="income" value="income">
                    <ArrowCircleUp size={32} />
                    Entrada
                  </TransactionTypeButtonSC>

                  <TransactionTypeButtonSC variant="outcome" value="outcome">
                    <ArrowCircleDown size={32} />
                    Saída
                  </TransactionTypeButtonSC>
                </TransactionTypeSC>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </NewTransactionContentSC>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
