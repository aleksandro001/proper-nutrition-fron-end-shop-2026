import type { Metadata } from 'next'

import { RecipeDetails } from '@/features/recipe/RecipeDetails'

export async function generateMetadata(): Promise<Metadata> {
  // params
  //}: {
  //  params: { slug: string }
  // }{
  // const data = await params.slug
  return { title: 'Recipe' }
}

export default function Page() {
  return <RecipeDetails />
}
