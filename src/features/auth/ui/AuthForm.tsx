'use client'

import { isEmailRegex } from '../utils/is-email.regex'
import { AuthChangeTypeForm } from './AuthChangeTypeForm'
import { useApolloClient, useMutation } from '@apollo/client/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cache, useSyncExternalStore } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

import {
  AuthInput,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  MeDocument,
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables
} from '@/__generated__/graphql'

interface Props {
  type: 'login' | 'register'
}

const emptySubscribe = () => () => {}
const getHydratedSnapshot = () => true
const getServerSnapshot = () => false

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    getHydratedSnapshot,
    getServerSnapshot
  )

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

  const client = useApolloClient()
  const router = useRouter()

  const [auth, { loading }] = useMutation<
    LoginMutation | RegisterMutation,
    LoginMutationVariables | RegisterMutationVariables
  >(isLogin ? LoginDocument : RegisterDocument, {
    onCompleted: data => {
      const authData = 'login' in data ? data.login : data.register
      client.writeQuery({
        query: MeDocument,
        data: {
          me: authData.user
        }
      })
      toast.success(
        isLogin ? 'Logged in successfully!' : 'Registered successfully!',
        { id: 'auth-success' }
      )
      router.replace(PAGES.DASHBOARD)
    },
    onError: error => {
      toast.error(error.message, { id: 'auth-error' })
    }
  })
  const handleAuth = (data: AuthInput) => {
    auth({ variables: { data } })
  }
  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-xl bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.2rem] font-bold">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h1>

        <form
          className="space-y-3"
          onSubmit={handleSubmit(handleAuth)}
        >
          <Input
            type="email"
            {...register('email', {
              required: true,
              pattern: { value: isEmailRegex, message: 'Invalid email address' }
            })}
            placeholder="Enter: email"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.email.message}
            </p>
          )}
          <Input
            type="password"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            placeholder="Enter: password"
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.password.message}
            </p>
          )}
          <div className="text-center">
            <Button
              disabled={!isHydrated || !isValid || loading}
              type="submit"
              variant={'secondary'}
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
          loading="eager"
          className="absolute -bottom-20 -left-20 -rotate-12"
          draggable={false}
        />
      </div>
    </div>
  )
}
