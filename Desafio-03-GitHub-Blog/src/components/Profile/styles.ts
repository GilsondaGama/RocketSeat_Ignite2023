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
  gap: 2rem;
  padding: 0 2.5rem;

  width: 864px;
  height: 212px;
  margin: 2rem auto;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  align-items: center;
  margin-top: -5.6rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  img {
    max-width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileDetails = styled.div`
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      color: ${(props) => props.theme['base-blue']};
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.2s;
      }
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme['base-title']};
    }

    svg {
      margin-left: 0.5rem;
    }
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
