import { TProfileForm } from '../types/profile-update.types'
import { AvatarUpload } from './AvatarUpload'
import { Mail, User, UserCircle } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { InputLabel } from '@/shared/components/custom-ui/input-label/InputLabel'

const optionalNumber = (value: string) =>
  value.trim() === '' ? undefined : Number(value)

export function GeneralInformationForm({
  avatarUrl,
  form,
  onAvatarChange
}: {
  avatarUrl?: string
  form: UseFormReturn<TProfileForm>
  onAvatarChange: (url: string) => void
}) {
  const { register } = form
  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">General Information</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <AvatarUpload
            onChange={onAvatarChange}
            value={avatarUrl}
          />
          <InputLabel
            label="Full Name"
            Icon={User}
            placeholder="Full Name"
            {...register('profile.fullName')}
          />
        </div>
        <InputLabel
          label="Email"
          Icon={Mail}
          placeholder="Email"
          {...register('email')}
        />
        <InputLabel
          label="Age"
          Icon={UserCircle}
          placeholder="Age"
          type="number"
          {...register('profile.age', { setValueAs: optionalNumber })}
        />
        <label className="relative block">
          <span className="text-foreground mb-1.5 block text-sm opacity-50">
            Bio
          </span>
          <textarea
            className="dark:bg-input/30 w-full rounded-md border p-3 transition-colors"
            placeholder="Bio"
            {...register('profile.bio')}
          />
        </label>
      </div>
    </div>
  )
}
