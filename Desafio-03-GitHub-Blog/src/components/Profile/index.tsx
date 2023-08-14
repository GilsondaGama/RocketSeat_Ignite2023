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

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/32863365?s=400&u=7afa7ab9e5ce71c289862a9cd25b1691ad49274e&v=4"
          alt=""
        />
      </div>
      <ProfileBio>
        <ProfileName>
          <strong>Cameron Williamson</strong>
          <ProfileLink>
            <span>GITHUB</span>
            <StyledIcon icon={faArrowUpRightFromSquare} variant="base-blue" />
          </ProfileLink>
        </ProfileName>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileInfo>
          <StyledIcon icon={faGithub} />
          <span>cameronwll</span>
          <StyledIcon icon={faBuilding} />
          <span>Rocketseat</span>
          <StyledIcon icon={faUserGroup} />
          <span>32 seguidores</span>
        </ProfileInfo>
      </ProfileBio>
    </ProfileContainer>
  )
}
