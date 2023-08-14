import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: ${(props) => props.theme['base-label']};
`

export const ProfileContainer = styled.div`
  width: 864px;
  height: 212px;
  margin: 0 auto;
  padding: 0 2.5rem;

  display: flex;

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
  align-items: flex-start;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: ${(props) => props.theme['base-text']};
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
