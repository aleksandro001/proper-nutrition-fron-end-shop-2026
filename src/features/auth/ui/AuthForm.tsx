'use client'

import { useApolloClient, useMutation } from '@apollo/client/react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

import {
  type AuthInput,
  LoginDocument,
  type LoginMutation,
  type LoginMutationVariables,
  MeDocument,
  RegisterDocument,
  type RegisterMutation,
  type RegisterMutationVariables
} from '@/__generated__/graphql'

import { isEmailRegex } from '../utils/is-email.regex'
import { AuthChangeTypeForm } from './AuthChangeTypeForm'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<AuthInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const ref = useRef<TurnstileInstance | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const client = useApolloClient()
  const router = useRouter()

  const [auth, { loading }] = useMutation<
    LoginMutation | RegisterMutation,
    LoginMutationVariables | RegisterMutationVariables
  >(isLogin ? LoginDocument : RegisterDocument, {
    onCompleted: data => {
      const authData = 'login' in data ? data.login : data?.register

      client.writeQuery({
        query: MeDocument,
        data: {
          me: authData.user
        }
      })

      toast.success(
        isLogin ? 'Logged in successfully!' : 'Registered successfully!',
        {
          id: 'auth-success'
        }
      )

      router.replace(PAGES.DASHBOARD)
    },

    onError: error => {
      toast.error(error.message, {
        id: 'auth-error'
      })
      ref.current?.reset()
      setCaptchaToken(null)
    }
  })

  const handleAuth = (data: AuthInput) => {
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return
    }

    auth({
      variables: {
        data
      },
      context: {
        headers: {
          'cf-turnstile-token': captchaToken
        }
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.3rem] font-bold">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h1>

        <form
          className="space-y-3"
          onSubmit={handleSubmit(handleAuth)}
        >
           
          <Input
            {...register('email', {
              required: true,
              pattern: {
                value: isEmailRegex,
                message: 'Invalid email address'
              }
            })}
            type="email"
            placeholder="Enter email:"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.email.message}
            </p>
          )}
          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            type="password"
            placeholder="Enter password:"
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.password.message}
            </p>
          )}
          <div className="flex scale-80 justify-center pt-2">
            <Turnstile
              ref={ref}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={token => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              options={{
                theme: 'light'
              }}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              disabled={!isValid || loading}
              variant="secondary"
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </div>
        </form>

        <AuthChangeTypeForm isLogin={isLogin} />

        <Image
          src="/images/emotions/salad.png"
          alt="Salad"
          width={200}
          height={200}
          className="absolute -bottom-16 -left-16 -rotate-12"
          draggable={false}
        />
      </div>
    </div>
  )
}
