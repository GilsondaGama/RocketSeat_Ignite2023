import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
