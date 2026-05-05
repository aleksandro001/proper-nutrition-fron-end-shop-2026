'use client'

import { NavMenuItem } from './NavMenuItem'
import { IMenuItem } from './nav-menu.types'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

interface Props {
  menu: IMenuItem[]
}

export function NavMenu({ menu }: Props) {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-3">
      {menu.map(menuItem => (
        <NavMenuItem
          key={menuItem.label}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  )
}
