import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import { VerifyEmail } from '@/features/auth/ui/VerifyEmail'

export const metadata: Metadata = {
  title: 'Verify email',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <p>Verifying email...</p>
        </div>
      }
    >
      <VerifyEmail />
    </Suspense>
  )
}
