import { defaultTheme } from '../../styles/themes/default'
import { HeaderContainer } from './styles'

import LogoCoffeeDelivery from '../../assets/Logo-Coffee-Delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />

      <nav>
        <span>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          Porto Alegre, RS
        </span>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
