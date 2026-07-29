import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Payment',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Payment</h1>
      <p className="mt-4 text-gray-600">This is the payment page.</p>
    </div>
  )
}
