import type { Metadata } from 'next'

import ForgotPassword from '@/features/auth/ui/ForgotPassword'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Forgot password',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <ForgotPassword />
}
