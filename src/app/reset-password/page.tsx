import type { Metadata } from 'next'

import ResetPassword from '@/features/auth/ui/ResetPassword'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Reset Password',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <ResetPassword />
}
