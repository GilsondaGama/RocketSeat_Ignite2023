import {
  faCalendar,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { StyledIcon } from '../../../../styles/global'

import {
  PostHeaderContainer,
  PostHeaderDetails,
  PostHeaderInfo,
} from './styles'
import { useNavigate } from 'react-router-dom'

export function PostHeader() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <PostHeaderDetails>
        <header>
          <a href="#" onClick={handleGoBack}>
            <StyledIcon
              icon={faChevronLeft}
              variant="base-blue"
              // marginR="0.5rem"
            />
            <span>VOLTAR</span>
          </a>
          <a href="#" target="_blank">
            <span>VER NO GITHUB</span>
            <StyledIcon
              icon={faUpRightFromSquare}
              variant="base-blue"
              // marginL="0.5rem"
            />
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <PostHeaderInfo>
          <StyledIcon icon={faGithub} />
          <span>cameronwll</span>
          <StyledIcon icon={faCalendar} />
          <span>Há 1 dia</span>
          <StyledIcon icon={faComment} />
          <span>comentários</span>
        </PostHeaderInfo>
      </PostHeaderDetails>
    </PostHeaderContainer>
  )
}
