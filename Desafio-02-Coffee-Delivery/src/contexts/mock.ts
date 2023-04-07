import { v4 as uuidv4 } from 'uuid'

import imgExpressoTradicional from '../assets/images/mock/ExpressoTradicional.png'
import imgExpressoAmericano from '../assets/images/mock/ExpressoAmericano.png'
import imgExpressoCremoso from '../assets/images/mock/ExpressoCremoso.png'
import imgExpressoGelado from '../assets/images/mock/ExpressoGelado.png'
import imgCafeComLeite from '../assets/images/mock/CafeComLeite.png'
import imgLatte from '../assets/images/mock/Latte.png'
import imgCappucino from '../assets/images/mock/Capuccino.png'
import imgMacchiato from '../assets/images/mock/Macchiato.png'
import imgMochaccino from '../assets/images/mock/Mocaccino.png'
import imgChocolateQuente from '../assets/images/mock/ChocolateQuente.png'
import imgCubano from '../assets/images/mock/Cubano.png'
import imgHavaiano from '../assets/images/mock/Havaiano.png'
import imgArabe from '../assets/images/mock/Arabe.png'
import imgIrlandes from '../assets/images/mock/Irlandes.png'

export const data = [
  {
    id: uuidv4(),
    photo: imgExpressoTradicional,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.87,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgExpressoAmericano,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.5,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgExpressoCremoso,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgExpressoGelado,
    tags: ['Tradicional'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgCafeComLeite,
    tags: ['Tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 8.89,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgLatte,
    tags: ['Tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.2,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgCappucino,
    tags: ['Tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.6,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgMacchiato,
    tags: ['Tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 7.87,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgMochaccino,
    tags: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.1,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgChocolateQuente,
    tags: ['Tradicional', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.3,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgCubano,
    tags: ['Tradicional', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 7.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgHavaiano,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 8.8,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgArabe,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.4,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgIrlandes,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.6,
    quantity: 0,
    isAdded: false,
  },
]
