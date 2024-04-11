export type NavItem = {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
  menuItem?: NavItem[]
}

export type MainNavItem = NavItem
export type MobileNavItem = NavItem

