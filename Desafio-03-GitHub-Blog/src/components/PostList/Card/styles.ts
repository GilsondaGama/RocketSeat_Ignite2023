import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 1.5rem;
  background: ${(props) => props.theme['base-post']};
`
