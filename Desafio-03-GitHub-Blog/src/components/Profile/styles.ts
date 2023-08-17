import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface StyledIconProps {
  variant?: string
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  font-size: 18px;
  color: ${(props) => props.theme[props.variant || 'base-label']};
`

export const ProfileContainer = styled.div`
  display: flex;
  width: 864px;
  height: 212px;
  margin: 2rem auto;
  padding: 0 2.5rem;

  align-items: center;
  margin-top: -5.6rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin-right: 2rem;
  }
`
export const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    margin-right: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ProfileName = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ProfileLink = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;

  color: ${(props) => props.theme['base-blue']};
`
