import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icons } from "@/components/icons"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const RightNavigation = () => {
  return (
    <nav className="flex items-center space-x-1">
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
          })}
        >
          <Icons.gitHub className="size-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <ThemeToggle />
    </nav>
  )
}



interface LandingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({
  children,
}: LandingLayoutProps) {
  const rightNav = <RightNavigation />
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader items={siteConfig.mainNav} right={rightNav} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}