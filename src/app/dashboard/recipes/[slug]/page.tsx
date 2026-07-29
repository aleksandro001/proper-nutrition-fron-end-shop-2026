import type { Metadata } from 'next'

import { RecipeDetails } from '@/features/recipe/RecipeDetails'

export async function generateMetadata(): Promise<Metadata> {
  // 	{
  //   params
  // }: {
  //   params: { slug }
  // }
  // const product = await getData(slug)
  return { title: 'Recipe' }
}

export default function Page() {
  return <RecipeDetails />
}
