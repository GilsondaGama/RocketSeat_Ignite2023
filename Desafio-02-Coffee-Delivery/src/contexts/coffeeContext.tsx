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
  coffeeQuantity: number
  incrementItems: (id: string) => void
  decrementItems: (id: string) => void
  addItemInCard: (id: string) => void
  removeItemInCard: (id: string) => void
  removeAll: () => void
  addToCard: (data: CartProps) => void
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
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

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

  function decrementItems(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        } else {
          return item
        }
      }),
    )
  }

  function removeItemInCard(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          item.quantity = 0
          item.isAdded = false
          setCoffeeQuantity((state) => state - 1)
          return {
            ...item,
            quantity: 0,
            isAdded: false,
          }
        } else {
          return item
        }
      }),
    )
  }

  function removeAll() {
    setItemsInCard((state) =>
      state.map((item) => {
        setCoffeeQuantity((state) => 0)
        return {
          ...item,
          quantity: 0,
          isAdded: false,
        }
      }),
    )
  }

  function addToCard(data: CartProps) {
    setNewCart(data)
  }

  function addItemInCard(id: string) {
    setItemsInCard((state) =>
      state.map((item) => {
        if (item.id === id) {
          setCoffeeQuantity((state) => state + 1)

          return {
            ...item,
            quantity: item.quantity > 0 ? item.quantity : 1,
            isAdded: true,
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
        decrementItems,
        addItemInCard,
        removeItemInCard,
        removeAll,
        addToCard,
        coffeeQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
