import './globals.css'
import { Provider } from './providers/Provider'
import { SITE_NAME } from '@/shared/constants/seo.constants'
import { cn } from '@/shared/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ⦁ ${SITE_NAME}`
  },
  description:
    'A web application for managing your nutrition and meal planning.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased')}
    >
      <body className="flex min-h-full flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
