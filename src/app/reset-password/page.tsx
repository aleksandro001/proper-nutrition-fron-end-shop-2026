import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import { ResetPassword } from '@/features/auth/ui/ResetPassword'

export const metadata: Metadata = {
  title: 'Reset password',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <ResetPassword />
    </Suspense>
  )
}
