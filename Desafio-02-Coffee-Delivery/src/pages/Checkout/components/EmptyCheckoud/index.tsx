import { NavLink } from 'react-router-dom'
import { Container } from './styles'

import CartEmpty from '../../../../assets/cart-empty.svg'

export function EmptyCheckout() {
  return (
    <Container>
      <img src={CartEmpty} alt="Carrinho vazio" />

      <h1>Olá! Parece que o seu carrinho de compras está vazio.</h1>
      <p>
        Não se preocupe, você pode continuar navegando em nossa loja e adicionar
        os produtos que deseja comprar ao seu carrinho a qualquer momento.
      </p>
      <NavLink to="/">Continue comprando</NavLink>
    </Container>
  )
}
