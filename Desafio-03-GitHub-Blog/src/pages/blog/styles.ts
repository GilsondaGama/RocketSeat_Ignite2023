import styled from 'styled-components'

export const PostListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 14rem;
`

export const PostInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 3rem;
`

export const PostInputInfo = styled.div`
  display: flex;
  width: 54rem;
  justify-content: space-between;
  padding-bottom: 1rem;

  span {
    font-weight: 29px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-weight: 22px;
    color: ${(props) => props.theme['base-span']};
  }
`
