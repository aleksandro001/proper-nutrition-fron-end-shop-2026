'use client'

import { Logout } from '../../auth/ui/Logout'
import { navMenuItems } from './nav.data'
import { Bell, Headset, User } from 'lucide-react'
import Link from 'next/link'

import { useAuth } from '@/features/auth/hooks/useAuth'

import { NavMenu } from '@/shared/components/custom-ui/nav-menu/NavMenu'
import { UserInfo } from '@/shared/components/custom-ui/user-info/UserInfo'
import { Button } from '@/shared/components/ui/button'

import { PAGES } from '@/shared/config/page.config'

export function Header() {
  const { user } = useAuth()
  return (
    <header className="flex items-center justify-between p-5">
      <div className="flex items-center gap-9">
        <Link
          href={PAGES.DASHBOARD}
          className="from-primary to-primary-dark flex size-10 items-center justify-center rounded-2xl bg-linear-to-r text-xl font-black text-white"
        >
          F
        </Link>
        <NavMenu menu={navMenuItems} />
      </div>
      <div className="flex items-center">
        <Button
          variant="soft"
          className="mr-2 rounded-full"
        >
          <Headset className="size-5" />
        </Button>
        <Button
          variant="soft"
          className="mr-5 rounded-full"
        >
          <Bell className="size-5" />
        </Button>
        <Logout />
        <UserInfo
          avatarUrl={`https://avatars.githubusercontent.com/u/9919?s=200&v=4`}
          name={`Anonymous`}
          email={user?.email || ''}
        />
      </div>
    </header>
  )
}
