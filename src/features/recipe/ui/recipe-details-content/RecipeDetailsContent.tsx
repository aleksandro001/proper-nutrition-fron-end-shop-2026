'use client'

import Image from 'next/image'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

import { RecipeDetailsSteps } from '../recipe-details-steps/RecipeDetailsSteps'
import { RecipeDetailsInformation } from './RecipeDetailsInformation'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsContent({ recipe }: Props) {
  return (
    <div>
      <div className="rounded-2xl bg-white p-5">
        <div className="grid grid-cols-2 gap-5">
          <Image
            src={recipe?.image || ''}
            alt={recipe?.title || ''}
            width={800}
            height={400}
            className="h-auto w-full rounded-xl object-cover"
            draggable={false}
            priority
          />

          <RecipeDetailsInformation recipe={recipe} />
        </div>

        <RecipeDetailsSteps steps={recipe?.recipeSteps} />
      </div>
    </div>
  )
}
