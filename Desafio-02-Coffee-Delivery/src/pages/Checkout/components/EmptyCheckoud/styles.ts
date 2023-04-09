import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 144px;

  h1 {
    font-size: 48px;
    padding: 2rem 20rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    padding: 2rem 15rem;
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 30px;
  }

  a {
    padding: 14px 20px;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }

  img {
    width: 20%;
    color: ${(props) => props.theme['purple-light']};
  }
`
