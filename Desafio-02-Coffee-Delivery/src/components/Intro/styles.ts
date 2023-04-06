import styled from 'styled-components'

import backgroundImage from '../../assets/images/IntroBackground.jpg'

export const IntroContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IntroBackgroundImage = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 10rem;

  background-image: url(${backgroundImage});
  background-size: 1440px 544px;
  width: 1440px;
  height: 544px;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    width: 588px;
  }

  p {
    font-family: 'roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    margin-top: 1rem;
    margin-bottom: 3rem;
    width: 588px;
    height: 52px;
  }
` // importando as variáveis CSS

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-columns: 270px 1fr;

  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); */
  row-gap: 20px;
  column-gap: 0px;
  /* gap: 20px;
  grid-column-gap: 10px */

  width: 567px;
  height: 84px;
`

export const IntroItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    font-size: 1rem;
    line-height: 130%;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.5rem;
  color: white;
  border-radius: 1rem;
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;

  background-color: ${(props) => props.color || props.theme['base-text']};
`
