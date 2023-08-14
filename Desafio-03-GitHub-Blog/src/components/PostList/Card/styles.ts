import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Número de linhas que você deseja mostrar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1rem;
    font-weight: 400;
    margin-top: 1.5rem;
    line-height: 1.6rem;
  }
`
export const CardTitle = styled.div`
  display: flex;
  justify-content: center;

  strong {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    padding-left: 1rem;
    color: ${(props) => props.theme['base-span']};
  }
`
