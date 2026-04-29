'use client'

import { useMutation } from '@apollo/client/react'
import Link from 'next/link'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

import { LoginDocument, RegisterDocument } from '@/__generated__/graphql'

interface Props {
  type: 'login' | 'register'
}
export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'
  const [register, { data, loading, error }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument
  )

  /*   register({
    variables: {
      data: {
        email: '',
        password: ''
      }
    }
  }) */

  return (
    <div className="flex h-screen">
      {' '}
      <div className="from-[] m-auto w-sm bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-5 text-white shadow-lg">
        <h1 className="mb-5 text-center text-4xl font-bold">
          {isLogin ? 'Login' : 'Register'}
        </h1>
        <form className="space-y-3">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <div className="text-center">
            <Button
              disabled={loading}
              type="submit"
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </div>
        </form>
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
      </div>
    </div>
  )
}
