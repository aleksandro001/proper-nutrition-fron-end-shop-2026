import { PAGES } from './shared/config/page.config'
import { getTokens } from './shared/lib/server/get-tokens.server'
import { jwtVerifyServer } from './shared/lib/server/jwt-verify.server'
import { NextRequest, NextResponse } from 'next/server'

export async function proxy(reg: NextRequest, res: NextResponse) {
  const tokens = await getTokens(reg)

  if (!tokens) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, reg.url))
  }

  if ('isRefreshedToken' in tokens) {
    const response = NextResponse.next()
    if (tokens.setCookie) {
      response.headers.set('set-cookie', tokens.setCookie)
    }
    return response
  }
  const verifyResult = await jwtVerifyServer(tokens.accessToken)
  if (!verifyResult) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, reg.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
