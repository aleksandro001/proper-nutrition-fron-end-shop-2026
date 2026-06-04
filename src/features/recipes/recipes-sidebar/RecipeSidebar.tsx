import { recipeSidebarMenuData } from './recipe-sidebar-menu.data'
import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'

import useDebounce from '@/shared/hooks/useDebounce'

interface Props {
  filter: string
  searchTerm: string
  setFilter: (filter: string) => void
  setSearchTerm: (searchTerm: string) => void
}

export function RecipeSidebar({
  filter,
  searchTerm,
  setFilter,
  setSearchTerm
}: Props) {
  // TODO: implement filter on Apollo hook
  const setActiveFilter = (filter: string) => {
    setFilter(filter)
  }
  return (
    <div className="w-full max-w-64 space-y-6 rounded-2xl bg-white p-3 shadow-xl">
      <InputLabel
        Icon={Search}
        placeholder="Search by recipes"
        className="bg-gray-100"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <SidebarMenuAccordion
        data={recipeSidebarMenuData}
        activeFilter={filter}
        onValueChange={setActiveFilter}
      />
    </div>
  )
}
