import { useEffect, useState, useCallback } from 'react'

import { ProfileContainer, ProfileDetails, ProfileInfo } from './styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { api } from '../../lib/axios'
import { StyledIcon } from '../../styles/global'

interface GithubUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

const userName = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [githubUser, setGithubUser] = useState<GithubUser>()

  const LoadGithubUser = useCallback(async () => {
    const response = await api.get(`/users/${userName}`)

    setGithubUser(response.data)
  }, [])

  useEffect(() => {
    LoadGithubUser()
  }, [LoadGithubUser])

  return (
    <ProfileContainer>
      <img src={githubUser?.avatar_url} alt="" />

      <ProfileDetails>
        <header>
          <h1>{githubUser?.name}</h1>

          <a href={githubUser?.html_url} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <StyledIcon
              icon={faArrowUpRightFromSquare}
              variant="base-blue"
              marginL="0.5rem"
            />
          </a>
        </header>

        <p>{githubUser?.bio}</p>

        <ProfileInfo>
          <StyledIcon icon={faGithub} />
          <span>{githubUser?.login}</span>
          <StyledIcon icon={faBuilding} />
          <span>{githubUser?.company}</span>
          <StyledIcon icon={faUserGroup} />
          <span>
            {githubUser?.followers}
            {githubUser?.followers === undefined || githubUser?.followers < 2
              ? ' seguidor'
              : ' seguidores'}
          </span>
        </ProfileInfo>
      </ProfileDetails>
    </ProfileContainer>
  )
}
