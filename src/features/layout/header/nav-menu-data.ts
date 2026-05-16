import {
  BookMarked,
  CalendarDays,
  ChartColumn,
  House,
  Settings,
  Store,
  Users,
  Utensils
} from 'lucide-react'

import { IMenuItem } from '@/shared/components/custom-ui/nav-menu/nav-menu.types'

import { PAGES } from '@/shared/config/page.config'

export const navMenuItems: IMenuItem[] = [
  // Home,MealsPlans,Nutrition,Recipes,Analytics,Orders,Forum,Groceries
  {
    icon: House,
    href: PAGES.DASHBOARD,
    label: 'Home'
  },
  {
    icon: CalendarDays,
    href: PAGES.MEAL_PLANS,
    label: 'Meal Plans'
  },
  {
    icon: Utensils,
    href: PAGES.NUTRITION,
    label: 'Nutrition'
  },
  {
    icon: ChartColumn,
    href: PAGES.ANALYTICS,
    label: 'Analytics'
  },
  {
    icon: Store,
    href: PAGES.ORDERS_GROCERIES,
    label: 'Orders Groceries'
  },
  {
    icon: BookMarked,
    href: PAGES.RECIPES,
    label: 'Recipes'
  },
  {
    icon: Settings,
    href: PAGES.PROFILE,
    label: 'Profile'
  }
]
