import { LucideIcon } from 'lucide-react'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'

interface Props {
  Icon: LucideIcon
  title: string
}

export function RecipeCarousel({ Icon, title }: Props) {
  return (
    <div>
      <HeadingWithIcon Icon={Icon}>{title}</HeadingWithIcon>
    </div>
  )
}
