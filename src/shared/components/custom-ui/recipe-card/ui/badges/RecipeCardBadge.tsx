import { recipeCardBadgeVariants } from '../../styles/recipe-card.styles'
import { TRecipeCardSize } from '../../types/recipe-card.types'
import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  Icon?: LucideIcon
  size: TRecipeCardSize
}

export function RecipeCardBadge({ Icon, children, size }: Props) {
  return (
    <div className={recipeCardBadgeVariants({ size })}>
      {Icon && <Icon className={size === 'sm' ? 'size-3.5' : 'size-4'} />}
      {children}
    </div>
  )
}
sc
