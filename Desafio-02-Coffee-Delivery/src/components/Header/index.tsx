import { defaultTheme } from '../../styles/themes/default'
import { HeaderContainer, ItemQuantity } from './styles'

import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffeeContext'

import LogoCoffeeDelivery from '../../assets/Logo-Coffee-Delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { items, cart, coffeeQuantity } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Página Inicial">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <span>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          Porto Alegre, RS
          {/* {cart.cidade}, {cart.uf.toUpperCase()} */}
        </span>
        <NavLink to="/checkout" title="Carrinho de Compras">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>

        {coffeeQuantity > 0 && <ItemQuantity>{coffeeQuantity}</ItemQuantity>}
      </nav>
    </HeaderContainer>
  )
}
