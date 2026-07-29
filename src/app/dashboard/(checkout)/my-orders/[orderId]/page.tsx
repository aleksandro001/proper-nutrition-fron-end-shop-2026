import type { Metadata } from 'next'

import { OrderDetails } from '@/features/order/OrderDetails'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Order detail',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <OrderDetails />
}
