import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:py-10 lg:py-16">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="text-center text-5xl font-extrabold leading-normal tracking-tighter text-slate-700 dark:text-slate-200 md:text-4xl">
            Beautifully designed components{" "}
            <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[850px] indent-4 text-lg text-muted-foreground ">
            {`Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 14 Ready.`}
          </p>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            <p>GitHub </p>
          </Link>
        </div>
      </section>
    </>
  )
}