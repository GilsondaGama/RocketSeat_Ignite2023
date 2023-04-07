import { ReactNode, createContext, useEffect, useState } from 'react'
import { data } from './mock'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  photo: string
  price: number
  quantity: number
  isAdded: boolean
}

interface CartProps {
  cidade: string
  rua: string
  numero: string
  nameState: string
  uf: string
  payment: string
  complemento?: string
  produts: CoffeeProps[]
}

interface ContextType {
  items: CoffeeProps[]
  cart: CartProps
  incrementItems: (id: string) => void
  // decrementItems: (id: string) => void
  // addItemInCard: (id: string) => void
  // removeItemInCard: (id: string) => void
  // removeAll: () => void
  // addToCard: (data: CartProps) => void
}

export const CoffeeContext = createContext({} as ContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [itemsInCard, setItemsInCard] = useState<CoffeeProps[]>([])
  const [cart, setNewCart] = useState({} as CartProps)

  useEffect(() => {
    setItemsInCard(data)
  }, [])

  function incrementItems(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        } else {
          return item
        }
      }),
    )
  }

  return (
    <CoffeeContext.Provider
      value={{
        items: itemsInCard,
        cart,
        incrementItems,
        // decrementItems,
        // addItemInCard,
        // removeItemInCard,
        // removeAll,
        // addToCard,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
