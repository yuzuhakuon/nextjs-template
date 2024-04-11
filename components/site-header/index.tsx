"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/nav/main-nav"
import { MobileNav } from "@/components/nav/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavItem } from "@/types/nav"

interface SiteHeaderProps {
  items?: NavItem[]
  right?: React.ReactNode
  children?: React.ReactNode
}

export function SiteHeader({ items, right, children }: SiteHeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={items} />
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
          {right}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <Icons.close /> : <Icons.menu />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
        {showMobileMenu && items && (
          <MobileNav items={items}> {children} </MobileNav>
        )}
      </div>
    </header>
  )
}