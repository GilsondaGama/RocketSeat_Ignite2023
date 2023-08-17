import { useEffect, useState, useCallback } from 'react'

import {
  ProfileBio,
  ProfileContainer,
  ProfileInfo,
  ProfileLink,
  ProfileName,
  StyledIcon,
} from './styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { api } from '../../lib/axios'

interface GithubUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  htmlUrl: string
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
      <div>
        <img src={githubUser?.avatar_url} alt="" />
      </div>
      <ProfileBio>
        <ProfileName>
          <strong>{githubUser?.name}</strong>
          <ProfileLink>
            <span>GITHUB</span>
            <StyledIcon icon={faArrowUpRightFromSquare} variant="base-blue" />
          </ProfileLink>
        </ProfileName>

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
      </ProfileBio>
    </ProfileContainer>
  )
}
