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
export const CardTitle = styled.div`
  display: flex;

  strong {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;
    color: ${(props) => props.theme['base-span']};
  }
`
