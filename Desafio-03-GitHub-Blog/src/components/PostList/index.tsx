import { Card } from './Card'
import { PostInputContainer, PostInputInfo, PostListContainer } from './styles'

export function PostList() {
  return (
    <>
      <PostInputContainer>
        <PostInputInfo>
          <span>Publicações</span>
          <p>6 publicações</p>
        </PostInputInfo>

        <input type="text" placeholder="Buscar conteúdo" />
      </PostInputContainer>

      <PostListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </PostListContainer>
    </>
  )
}
