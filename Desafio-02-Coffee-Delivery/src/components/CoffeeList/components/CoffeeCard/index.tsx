import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'

import {
  ButtonAddToCart,
  ButtonRemoveFromCart,
  CoffeeCardItem,
  Footer,
  InputContainer,
  Price,
  TagsCard,
} from './styles'

export interface coffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  photo: string
  price: number
  quantity: number
  isAdded: boolean
}

export function CoffeeCard({
  id,
  title,
  description,
  tags,
  photo,
  price,
  quantity,
  isAdded,
}: coffeeProps) {
  return (
    <CoffeeCardItem>
      <img src={photo} alt={title} />
      <TagsCard>
        {tags.map((tag) => {
          return (
            <span key={tag} className="tagline">
              {tag}
            </span>
          )
        })}
      </TagsCard>
      <h1>{title}</h1>
      <p>{description}</p>

      <Footer>
        <Price>
          R${' '}
          <span>
            {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </span>
        </Price>

        <InputContainer>
          <Minus size={14} />
          {quantity}
          <Plus size={14} />
        </InputContainer>

        {!isAdded ? (
          <ButtonAddToCart>
            <ShoppingCartSimple size={17} weight="fill" />
          </ButtonAddToCart>
        ) : (
          <ButtonRemoveFromCart>
            <Trash size={17} weight="fill" />
          </ButtonRemoveFromCart>
        )}
      </Footer>
    </CoffeeCardItem>
  )
}
