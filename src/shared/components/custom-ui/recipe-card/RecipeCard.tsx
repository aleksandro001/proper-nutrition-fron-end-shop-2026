import { TRecipeCardSize } from './types/recipe-card.types'

import { GetRecipesQuery } from '@/__generated__/graphql'

interface Props {
  recipe: GetRecipesQuery['recipes'][0]
  size?: TRecipeCardSize
}

export function RecipeCard({ recipe, size }: Props) {
  return <div className={recipeCardVariants({ size })}>{recipe.title}</div>
}
