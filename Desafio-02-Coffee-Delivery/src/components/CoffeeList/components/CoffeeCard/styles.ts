import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 256px;
  height: 310px;
  padding: 20px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  img {
    width: 130px;
    margin-top: -40px;
    margin-bottom: 12px;
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0;
    margin-bottom: 8px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    font-synthesis: 1.3;
    letter-spacing: 0;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 33px;
  }
`

export const TagsCard = styled.div`
  display: flex;
  gap: 4px;
  text-transform: uppercase;

  .tagline {
    padding: 4px 8px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 16px;
    display: block;
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    padding-top: 8.5px;
    padding-bottom: 8.5px;
  }

  button {
    margin-left: 8px;
  }
`

export const Price = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0;
  color: ${(props) => props.theme['base-text']};
  margin-right: auto;

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 24px;
    font-weight: 800;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 10px;
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  font-size: 16px;
  letter-spacing: 0;
  color: ${(props) => props.theme['base-title']};
  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

const ButtonContainer = styled.button`
  padding: 8px;
  color: ${(props) => props.theme.white};
  transition: background-color 0.1s;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  width: 38px;
  height: 38px;
`

export const ButtonAddToCart = styled(ButtonContainer)`
  background-color: ${(props) => props.theme['purple-dark']};
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`

export const ButtonRemoveFromCart = styled(ButtonContainer)`
  background-color: ${(props) => props.theme.red};
  &:hover {
    background-color: ${(props) => props.theme['red-hover']};
  }
`
