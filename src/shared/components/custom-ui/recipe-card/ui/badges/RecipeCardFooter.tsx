import {
  recipeCardDifficultyBadgeVariants,
  recipeCardFooterTextVariants
} from '../../styles/recipe-card.styles'
import { TRecipeCardSize } from '../../types/recipe-card.types'
import { ChefHat, Heart } from 'lucide-react'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.util'

import { Difficulty } from '@/__generated__/graphql'

interface Props {
  views?: number
  likes?: number
  difficultyLevel?: Difficulty
  size: TRecipeCardSize
}

export function RecipeCardFooter({
  views,
  likes,
  difficultyLevel,
  size
}: Props) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <div
        className={recipeCardDifficultyBadgeVariants({
          tone: difficultyLevel,
          size: 'sm'
        })}
      >
        <ChefHat className={size === 'sm' ? 'size-3.5' : 'size-4'} />
        <span className="capitalize">{difficultyLevel}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={recipeCardFooterTextVariants({ size: 'sm' })}>
          <Heart className={size === 'sm' ? 'size-3.5' : 'size-4'} />
          {formatCompactNumber(likes)}
        </span>
        <span className={recipeCardFooterTextVariants({ size: 'sm' })}>
          <Heart className={size === 'sm' ? 'size-3.5' : 'size-4'} />
          {formatCompactNumber(views)}
        </span>
      </div>
    </div>
  )
}
