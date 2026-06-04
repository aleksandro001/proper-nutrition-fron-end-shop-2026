import { recipeCardVariants } from '../styles/recipe-card.styles'
import { VariantProps } from 'class-variance-authority'

export type TRecipeCardSize = VariantProps<typeof recipeCardVariants>['size']
