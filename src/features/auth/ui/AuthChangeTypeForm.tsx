import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isLogin: boolean
}

export function AuthChangeTypeForm({ isLogin }: Props) {
  return (
    <div className="mt-4 text-center text-sm">
      {isLogin ? (
        <div>
          <p>
            Don`t have an account?{' '}
            <Link
              className="link-simple"
              href={PAGES.REGISTER}
            >
              Register
            </Link>
          </p>
          {/*forgot password*/}
          <p className="mt-2">
            <Link
              className="link-simple"
              href={PAGES.FORGOT_PASSWORD}
            >
              Forgot password?
            </Link>
          </p>
        </div>
      ) : (
        <p>
          Already have an account?{' '}
          <Link
            className="link-simple"
            href={PAGES.LOGIN}
          >
            Login
          </Link>
        </p>
      )}
    </div>
  )
}
