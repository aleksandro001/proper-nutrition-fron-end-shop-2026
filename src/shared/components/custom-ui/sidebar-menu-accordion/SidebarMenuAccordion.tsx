import { MenuAccordionItem } from './MenuAccordionItem'
import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  data: ISidebarMenuAccordionItem[]
  activeFilter?: string
  onValueChange?: (value: string) => void
}

export function SidebarMenuAccordion({
  data,
  activeFilter,
  onValueChange
}: Props) {
  return (
    <div className="space-y-4">
      {data.map(item => (
        <MenuAccordionItem
          key={item.name}
          item={item}
          activeValue={activeFilter}
          onValueChange={onValueChange}
        />
      ))}
    </div>
  )
}
