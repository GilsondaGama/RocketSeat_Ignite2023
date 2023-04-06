import { defaultTheme } from '../../styles/themes/default'

import {
  IntroBackgroundImage,
  IntroContainer,
  IntroItem,
  GridContainer,
  IconContainer,
} from './styles'

import CoffeeCup from '../../assets/images/CoffeeCup.png'
import { Timer, Package, Coffee, ShoppingCart } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroBackgroundImage>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>

          <GridContainer>
            <IntroItem>
              <IconContainer color={defaultTheme['yellow-dark']}>
                <ShoppingCart weight="fill" />
              </IconContainer>
              <span>Compra simples e segura</span>
            </IntroItem>
            <IntroItem>
              <IconContainer>
                <ShoppingCart weight="fill" />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </IntroItem>
            <IntroItem>
              <IconContainer color={defaultTheme.yellow}>
                <Timer weight="fill" />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </IntroItem>
            <IntroItem>
              <IconContainer color={defaultTheme.purple}>
                <ShoppingCart weight="fill" />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </IntroItem>
          </GridContainer>
        </div>
        <div>
          <img src={CoffeeCup} height={360} width={476} alt="" />
        </div>
      </IntroBackgroundImage>
    </IntroContainer>
  )
}
