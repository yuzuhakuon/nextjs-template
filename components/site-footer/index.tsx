import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"


export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="font-inter text-sm text-gray-500 md:text-center">
            © Copyright {new Date().getFullYear()}.{" "}
            <a
              href={siteConfig.url}
              target="_blank"
              className="text-primary hover:text-primary/80 hover:underline"
              rel="noreferrer"
            >
              {siteConfig.name}
            </a>{" "}
            All rights reserved.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" >
            <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
              <Icons.gitHub className="size-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" >
            <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
              <Icons.twitter className="size-5" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}