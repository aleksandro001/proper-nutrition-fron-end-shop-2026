import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'
import { cn } from '@/shared/utils'
import { Check, ChevronDown, CornerDownRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/shared/components/ui/collapsible'

interface Props {
  item: ISidebarMenuAccordionItem
  activeValue?: string | null
  onValueChange?: (value: string) => void
}
/*
 Active element
 State for filters
*/
export function MenuAccordionItem({ item, activeValue, onValueChange }: Props) {
  return (
    <Collapsible defaultOpen={item.isInitialOpen}>
      <CollapsibleTrigger
        className={cn(
          'flex w-full items-center justify-between rounded-xl px-2 py-1.5',
          {
            'bg-accent': item.items.some(child => child.value === activeValue)
          }
        )}
      >
        <span className="flex items-center gap-2 font-semibold">
          <item.icon size={20} />
          {item.name}
        </span>
        <ChevronDown size={20} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="space-y-2 pt-1 pl-4">
          {item.items.map(child => (
            <li
              key={child.value}
              className={cn(
                'opacity-50 transition-opacity duration-300 ease-in-out',
                { 'opacity-100': activeValue === child.value }
              )}
            >
              <button
                className="flex w-full items-center justify-between pl-4"
                onClick={() => onValueChange?.(child.value)}
              >
                <span className="flex items-center gap-1">
                  <CornerDownRight size="18" />
                  <span>{child.label}</span>
                </span>

                {!!child.badgeValue && (
                  <span className="mr-2 block rounded-xl bg-red-200 px-1 py-0.5 text-sm font-semibold text-red-500">
                    {child.badgeValue}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
