import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../context/IssuesContext'

import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/PostList/SearchForm'
import { PostCard } from '../../components/PostList/PostCard'

import { PostInputContainer, PostInputInfo, PostListContainer } from './styles'

export function Blog() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <>
      <Profile />

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
              <PostCard
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
    </>
  )
}
