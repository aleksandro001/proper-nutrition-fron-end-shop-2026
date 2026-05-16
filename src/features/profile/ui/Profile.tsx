'use client'

import { ProfileForm } from './ProfileForm'
import { useQuery } from '@apollo/client/react'

import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

import { GetProfileDocument } from '@/__generated__/graphql'

export function Profile() {
  const { data, error, loading } = useQuery(GetProfileDocument)

  if (loading) {
    return (
      <div>
        <div className="mb-4 flex items-center justify-between">
          <SkeletonLoader
            count={1}
            className="w-xs"
          />
          <div className="flex items-center gap-2">
            <SkeletonLoader
              count={2}
              className="w-xs"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <SkeletonLoader count={4} />
          </div>
          <div>
            <SkeletonLoader count={6} />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <p className="text-destructive text-sm">
        Failed to load profile. Please try again later.
      </p>
    )
  }

  if (!data?.me) return null

  return <ProfileForm data={data} />
}
