import { IntroBackgroundImage, IntroContainer } from './styles'

import IntroBackground from '../../assets/images/IntroBackground.jpg'

export function Intro() {
  return (
    <IntroContainer>
      <h1>Info</h1>
      <img src={IntroBackground} alt="" />

      {/* <IntroBackgroundImage /> */}
    </IntroContainer>
  )
}
