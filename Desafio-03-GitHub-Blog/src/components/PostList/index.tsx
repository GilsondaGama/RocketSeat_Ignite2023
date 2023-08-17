import { Card } from './Card'
import { PostInputContainer, PostInputInfo, PostListContainer } from './styles'
import { IssuesContext } from '../../context/IssuesContext'
import { SearchForm } from './SearchForm'
import { useContextSelector } from 'use-context-selector'

export function PostList() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <PostInputContainer>
      <PostInputInfo>
        <span>Publicações</span>

        {issues.length === 0 && <p>Nenhuma publicação</p>}
        {issues.length === 1 && <p>1 publicação</p>}
        {issues.length > 1 && <p>{issues.length} publicações</p>}
      </PostInputInfo>

      <SearchForm />

      <PostListContainer>
        {issues.map((issue) => {
          return (
            <Card
              key={issue.id}
              number={issue.number}
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          )
        })}
      </PostListContainer>
    </PostInputContainer>
  )
}
