import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.6rem;
  padding: 2rem;
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
`

export const PostHeaderDetails = styled.div`
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.5rem;

    a {
      color: ${(props) => props.theme['base-blue']};
      font-weight: 700;
      font-size: 1rem;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.2s;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostHeaderInfo = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    margin-right: 1rem;
    color: ${(props) => props.theme['base-span']};
  }
`
