import styled from 'styled-components'

export const CoffeeCardItem = styled.div`
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
    width: 120px;
    margin: 0 auto;
    margin-top: -100px;
    margin-bottom: 12px;
  }

  h3 {
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
