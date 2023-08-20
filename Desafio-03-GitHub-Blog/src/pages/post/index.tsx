// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader'
// import { useContextSelector } from 'use-context-selector'
// import { IssuesContext } from '../../context/IssuesContext'

export function Post() {
  const { id } = useParams()

  console.log(id)

  // const issues = useContextSelector(IssuesContext, (context) => {
  //   return context.issues
  // })

  return <PostHeader />
}
