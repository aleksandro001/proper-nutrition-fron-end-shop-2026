import { recipeCardImageVariants } from '../styles/recipe-card.styles'
import { TRecipeCardSize } from '../types/recipe-card.types'
import Image from 'next/image'

interface Props {
  image: string
  name: string
  size: TRecipeCardSize
}

export function RecipeCardImage({ image, name, size }: Props) {
  return (
    <div className={recipeCardImageVariants({ size })}>
      <Image
        src={image}
        alt={name}
        fill
        className="rounded-tl-lg rounded-tr-lg object-cover transition-transform duration-200 will-change-transform group-hover:scale-[1.03]"
        sizes={
          size === 'sm'
            ? '(max-width: 640px) 100vw, 200px'
            : '(max-width: 640px) 100vw, 400px'
        }
      />
    </div>
  )
}
