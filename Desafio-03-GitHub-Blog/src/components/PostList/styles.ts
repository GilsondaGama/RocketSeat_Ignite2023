import styled from 'styled-components'

export const PostListContainer = styled.div`
  display: flex;
  width: 54rem;

  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 40px;
  padding-bottom: 10rem;

  margin: 0 auto;
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
