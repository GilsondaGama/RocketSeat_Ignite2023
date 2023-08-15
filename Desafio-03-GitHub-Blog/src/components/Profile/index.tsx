import { useEffect, useState } from 'react'

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

interface GithubUser {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  htmlUrl: string
}

export function Profile() {
  const [githubUser, setGithubUser] = useState<GithubUser>()

  async function LoadGithubUser() {
    const response = await fetch('https://api.github.com/users/GilsondaGama')
    const data = await response.json()

    console.log(data)
    setGithubUser(data)
  }

  useEffect(() => {
    LoadGithubUser()
  }, [])

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
