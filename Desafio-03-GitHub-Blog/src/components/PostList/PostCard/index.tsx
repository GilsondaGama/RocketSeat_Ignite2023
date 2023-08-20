import { relativeDateFormatter } from '../../../Utils/formatter'
import { PostContainer } from './styles'

interface PostCardProps {
  number: number
  title: string
  body: string
  created_at: string
}

// eslint-disable-next-line camelcase
export function PostCard({ number, title, body, created_at }: PostCardProps) {
  const formattedDate = relativeDateFormatter(created_at)

  return (
    <PostContainer to={`/post/${number}`}>
      <div>
        <strong>{title}</strong>
        <span>{formattedDate}</span>
      </div>

      <p>{body}</p>
    </PostContainer>
  )
}
