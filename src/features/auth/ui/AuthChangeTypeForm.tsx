import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isLogin: boolean
}

export function AuthChangeTypeForm({ isLogin }: Props) {
  return (
    <div className="mt-3 text-center">
      {isLogin ? (
        <p>
          Don`t have an account?{' '}
          <Link
            className="underline"
            href={PAGES.REGISTER}
          >
            Register
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{' '}
          <Link
            className="underline"
            href={PAGES.LOGIN}
          >
            Login
          </Link>
        </p>
      )}
    </div>
  )
}
