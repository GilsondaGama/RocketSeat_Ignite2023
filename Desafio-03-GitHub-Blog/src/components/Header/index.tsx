import { HeaderContainer, HeaderContent } from './styles'
import logoGitHubBlog from '../../assets/logo-github-blog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoGitHubBlog} alt="" height={98} />
      </HeaderContent>
    </HeaderContainer>
  )
}
