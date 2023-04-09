import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/coffeeContext'

import { Minus, Plus, Trash } from 'phosphor-react'
import { ButtonContainer, Container, Info, InputContainer } from './styles'

interface BoxingCardProps {
  id: string
  name: string
  price: number
  photo: string
  quantity: number
}

export function CoffeeSelectedCard({
  id,
  name,
  price,
  photo,
  quantity,
}: BoxingCardProps) {
  const { incrementItems, decrementItems, removeItemInCard } =
    useContext(CoffeeContext)

  return (
    <Container>
      <img src={photo} alt="" />
      <Info>
        <h3>{name}</h3>
        <div>
          <InputContainer>
            <Minus size={14} onClick={() => decrementItems(id)} />
            {quantity}
            <Plus size={14} onClick={() => incrementItems(id)} />
          </InputContainer>
          <ButtonContainer type="button" onClick={() => removeItemInCard(id)}>
            <Trash size={16} weight="regular" /> REMOVER
          </ButtonContainer>
        </div>
      </Info>
      <p className="price">
        R$ {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </p>
    </Container>
  )
}
