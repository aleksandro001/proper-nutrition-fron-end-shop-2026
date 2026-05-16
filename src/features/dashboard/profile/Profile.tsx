'use client'

import { useAuth } from '@/features/auth/hooks/useAuth'

export const Profile = () => {
  const { user } = useAuth()

  return <div>{user?.email ?? 'Profile'}</div>
}
