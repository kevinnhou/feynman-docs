import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { Logomark } from "@/components/branding/logomark"

function Navigation() {
  return (
    <div className="flex items-center gap-2">
      <Logomark className="size-6" />
      <span className="font-medium text-md tracking-wider">FEYNMAN</span>
      <div className="flex items-center gap-1">
        <span className="font-medium text-md tracking-wider">[</span>
        <span className="font-light font-mono text-muted-foreground/80 text-sm italic tracking-tight">
          Docs
        </span>
        <span className="font-medium text-md tracking-wider">]</span>
      </div>
    </div>
  )
}

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Navigation />,
    url: "feynman.pro",
    transparentMode: "top",
  },
  githubUrl: "https://github.com/kevinnhou/feynman-docs",
}
