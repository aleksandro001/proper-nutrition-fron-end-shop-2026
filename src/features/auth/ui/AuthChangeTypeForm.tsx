import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isLogin: boolean
}

export function AuthChangeTypeForm({ isLogin }: Props) {
  return (
    <div className="mt-4 text-center text-sm">
      {isLogin ? (
        <p>
          Don`t have an account?{' '}
          <Link
            className="link-simple"
            href={PAGES.REGISTER}
          >
            Register
          </Link>
        </p>
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
