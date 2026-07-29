'use client'

import { useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { RequestPasswordResetDocument } from '@/__generated__/graphql'

import { isEmailRegex } from '../utils/is-email.regex'

interface FormData {
  email: string
}

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const [requestReset, { loading }] = useMutation(
    RequestPasswordResetDocument,
    {
      onCompleted: () => {
        toast.success('If email exists, reset link was sent')
      },
      onError: () => {
        toast.error('Something went wrong')
      }
    }
  )

  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const onSubmit = (data: FormData) => {
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return
    }

    requestReset({
      variables: { data },
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
          Forgot Password
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3"
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
              options={{
                theme: 'light'
              }}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
              variant="secondary"
            >
              Send reset link
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
