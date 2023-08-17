import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { IssuesContext } from '../../../context/IssuesContext'

import { SearchFormContainer } from './styles'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormImputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  const { register, handleSubmit } = useForm<SearchFormImputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormImputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input
        type="text"
        placeholder="Buscar conteúdo de Issues"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
