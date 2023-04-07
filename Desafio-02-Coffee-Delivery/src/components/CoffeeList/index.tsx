import { CoffeeCard } from './components/CoffeeCard'
import { ListContainer, OurCoffees } from './styles'

import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffeeContext'

export function CoffeeList() {
  const { items } = useContext(CoffeeContext)
  return (
    <>
      <OurCoffees>Nossos cafés</OurCoffees>
      <ListContainer>
        {items.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              title={coffee.title}
              description={coffee.description}
              tags={coffee.tags}
              photo={coffee.photo}
              price={coffee.price}
              quantity={coffee.quantity}
              isAdded={coffee.isAdded}
            />
          )
        })}
      </ListContainer>
    </>
  )
}
