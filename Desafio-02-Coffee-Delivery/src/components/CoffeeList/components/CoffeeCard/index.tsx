import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/coffeeContext'

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

interface CoffeeProps {
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
}: CoffeeProps) {
  const { incrementItems, decrementItems, addItemInCard, removeItemInCard } =
    useContext(CoffeeContext)

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
          <Minus size={14} onClick={() => decrementItems(id)} />
          {quantity}

          <Plus size={14} onClick={() => incrementItems(id)} />
        </InputContainer>
        {!isAdded ? (
          <ButtonAddToCart onClick={() => addItemInCard(id)}>
            <ShoppingCartSimple size={17} weight="fill" />
          </ButtonAddToCart>
        ) : (
          <ButtonRemoveFromCart onClick={() => removeItemInCard(id)}>
            <Trash size={17} weight="fill" />
          </ButtonRemoveFromCart>
        )}
      </Footer>
    </CoffeeCardItem>
  )
}
