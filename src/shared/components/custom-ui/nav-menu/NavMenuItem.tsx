'use client'
import { IMenuItem } from './nav-menu.types'
import { cn } from '@/shared/utils'
import Link from 'next/link'

interface Props {
  menuItem: IMenuItem
  isActive: boolean
}

export function NavMenuItem({ isActive, menuItem }: Props) {
  return (
    <Link
      href={menuItem.href}
      className={cn(
        'group flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-[#1f2023] text-white'
          : 'bg-gray-300 text-[#696969] hover:bg-gray-400'
      )}
    >
      <menuItem.icon className="size-4" />
      <span>{menuItem.label}</span>
    </Link>
  )
}
