import { useNavigate } from 'react-router-dom'

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

import { relativeDateFormatter } from '../../../../Utils/formatter'
import { SinglePost } from '../../../../context/IssuesContext'

interface SelectedPostProps {
  postData: SinglePost
}

export function PostHeader({ postData }: SelectedPostProps) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      <PostHeaderDetails>
        <header>
          <a href="#" onClick={handleGoBack}>
            <StyledIcon
              icon={faChevronLeft}
              variant="base-blue"
              marginR="0.5rem"
            />
            <span>VOLTAR</span>
          </a>
          <a href={postData.html_url} target="_blank" rel="noreferrer">
            <span>VER NO GITHUB</span>
            <StyledIcon
              icon={faUpRightFromSquare}
              variant="base-blue"
              marginL="0.5rem"
            />
          </a>
        </header>

        <h1>{postData.title}</h1>

        <PostHeaderInfo>
          <StyledIcon icon={faGithub} />
          <span>{postData.user?.login}</span>
          <StyledIcon icon={faCalendar} />
          <span>{formattedDate}</span>
          <StyledIcon icon={faComment} />
          <span>{postData.comments} comentários</span>
        </PostHeaderInfo>
      </PostHeaderDetails>
    </PostHeaderContainer>
  )
}
