import { v4 as uuidv4 } from 'uuid'

import imgExpressoTradicional from '../images/ExpressoTradicional.png'
import imgExpressoAmericano from '../images/ExpressoAmericano.png'
import imgExpressoCremoso from '../images/ExpressoCremoso.png'
import imgExpressoGelado from '../images/ExpressoGelado.png'
import imgCafeComLeite from '../images/CafeComLeite.png'
import imgLatte from '../images/Latte.png'
import imgCappucino from '../images/Capuccino.png'
import imgMacchiato from '../images/Macchiato.png'
import imgMochaccino from '../images/Mocaccino.png'
import imgChocolateQuente from '../images/ChocolateQuente.png'
import imgCubano from '../images/Cubano.png'
import imgHavaiano from '../images/Havaiano.png'
import imgArabe from '../images/Arabe.png'
import imgIrlandes from '../images/Irlandes.png'

export const data = [
  {
    id: uuidv4(),
    photo: imgExpressoTradicional,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgExpressoAmericano,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
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
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgCafeComLeite,
    tags: ['Tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
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
    price: 9.9,
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
    price: 9.9,
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
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgMochaccino,
    tags: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgChocolateQuente,
    tags: ['Tradicional', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
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
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgHavaiano,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgArabe,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
  {
    id: uuidv4(),
    photo: imgIrlandes,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 0,
    isAdded: false,
  },
]
