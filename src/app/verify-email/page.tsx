import type { Metadata } from 'next'

import { VerifyEmail } from '@/features/auth/ui/VerifyEmail'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Verify email',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <VerifyEmail />
}
