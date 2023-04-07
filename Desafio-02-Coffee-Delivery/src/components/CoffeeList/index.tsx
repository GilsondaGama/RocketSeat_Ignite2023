import { CoffeeCard } from './components/CoffeeCard'
import { ListContainer, OurCoffees } from './styles'

import { data } from '../../assets/mock/data'

export function CoffeeList() {
  return (
    <>
      <OurCoffees>Nossos cafés</OurCoffees>
      <ListContainer>
        {data.map((coffee) => {
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
