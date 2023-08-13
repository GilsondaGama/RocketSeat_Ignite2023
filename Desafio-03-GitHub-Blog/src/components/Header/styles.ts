import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem 0 18.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 4rem auto 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
