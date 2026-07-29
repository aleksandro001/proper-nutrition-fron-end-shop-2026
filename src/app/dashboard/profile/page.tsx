import type { Metadata } from 'next'

import { Profile } from '@/features/profile/ui/Profile'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <Profile />
}
