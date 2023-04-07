import { CoffeeCardItem, TagsCard } from './styles'

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

      <h3>{title}</h3>
      <p>{description}</p>
      <title>{price}</title>
      {/* R${' '}
      <span>{price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span> */}
    </CoffeeCardItem>
  )
}
