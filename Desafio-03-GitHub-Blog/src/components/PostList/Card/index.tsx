import { CardContent, CardTitle } from './styles'

interface SearchIssues {
  number: number
  title: string
  body: string
  created_at: string
}

export function Card({ title, body }: SearchIssues) {
  return (
    <div>
      <CardContent>
        <CardTitle>
          <strong>{title}</strong>
          <span>Há 1 dia</span>
        </CardTitle>
        <p>{body}</p>
      </CardContent>
    </div>
  )
}
