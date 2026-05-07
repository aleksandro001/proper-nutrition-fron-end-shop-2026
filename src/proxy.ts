import { PAGES } from './shared/config/page.config'
import { NextRequest, NextResponse } from 'next/server'

export async function proxy(reg: NextRequest, res: NextResponse) {
  if (!reg.cookies.get('accessToken')) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, reg.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}
