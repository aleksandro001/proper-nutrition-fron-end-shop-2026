'use client'

import { isEmailRegex } from '../utils/is-email.regex'
import { useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { RequestPasswordResetDocument } from '@/__generated__/graphql'

interface FormData {
  email: string
}
export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [requestReset, { loading }] = useMutation(
    RequestPasswordResetDocument,
    {
      onCompleted: () => {
        toast.success('If email exists, reset link was sent.')
      },
      onError: () => {
        toast.error('Something went wrong.')
      }
    }
  )
  const onSubmit = (data: FormData) => {
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return
    }
    requestReset({
      variables: { data },
      context: { headers: { 'cf-turnstile-token': captchaToken } }
    })
  }
  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-xl bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.2rem] font-bold">
          Forgot Password
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            type="email"
            {...register('email', {
              required: true,
              pattern: { value: isEmailRegex, message: 'Invalid email address' }
            })}
            placeholder="Enter: email"
          />
          {errors.email && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.email.message}
            </p>
          )}
          <div className="flex scale-80 justify-center pt-2">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={token => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              options={{ theme: 'light' }}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
              variant={'secondary'}
            >
              Send reset link
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
