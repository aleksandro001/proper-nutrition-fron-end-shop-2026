'use client'

import { TProfileForm } from '../types/profile-update.types'
import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInformationForm } from './GeneralInformationForm'
import { useMutation } from '@apollo/client/react'
import { User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heding-with-icon/HedingWithIcon'
import { Button } from '@/shared/components/ui/button'

import type { GetProfileQuery } from '@/__generated__/graphql'
import { UpdateProfileDocument } from '@/__generated__/graphql'

type ProfileUser = GetProfileQuery['me']

function getProfileFormValues(user: ProfileUser): TProfileForm {
  const profile = user.profile
  const measurement = user.measurements

  return {
    email: user.email,
    profile: {
      age: profile?.age ?? undefined,
      bio: profile?.bio ?? '',
      fullName: profile?.fullName ?? '',
      gender: profile?.gender ?? undefined
    },
    measurement: {
      activityLevel: measurement?.activityLevel ?? undefined,
      armCm: measurement?.armCm ?? undefined,
      chestCm: measurement?.chestCm ?? undefined,
      goalWeightKg: measurement?.goalWeightKg ?? undefined,
      heightCm: measurement?.heightCm ?? undefined,
      nutritionGoal: measurement?.nutritionGoal ?? undefined,
      thighCm: measurement?.thighCm ?? undefined,
      waistCm: measurement?.waistCm ?? undefined,
      weightKg: measurement?.weightKg ?? undefined
    }
  }
}

export function ProfileForm({ data }: { data: GetProfileQuery }) {
  const [avatarUrl, setAvatarUrl] = useState<string>()
  const form = useForm<TProfileForm>({
    mode: 'onChange',
    defaultValues: getProfileFormValues(data.me)
  })

  useEffect(() => {
    form.reset(getProfileFormValues(data.me))
  }, [data, form])
  console.log(form.watch('avatarUrl'))
  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted() {
      toast.success('Profile updated.')
    },
    onError(error) {
      toast.error(error.message)
    }
  })

  const submit = form.handleSubmit(data => {
    updateProfile({
      variables: {
        data
      }
    })
  })
  return (
    <div>
      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <HeadingWithIcon Icon={User}>Personal Information</HeadingWithIcon>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
            <Button
              variant="accent"
              disabled={loading}
            >
              Save changes
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <GeneralInformationForm
            avatarUrl={avatarUrl}
            form={form}
            onAvatarChange={setAvatarUrl}
          />
          <BodyMeasurementsForm form={form} />
        </div>
      </form>
    </div>
  )
}
