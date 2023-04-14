import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import {
  Content,
  CloseButton,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { useForm } from 'react-hook-form'

const newTransactionFormSchema = z.object({
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content className="content">
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size="24" />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="categoria"
            required
            {...register('category')}
          />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size="24" />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size="24" />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
