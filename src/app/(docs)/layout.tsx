import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { baseOptions } from "@/app/layout.config"
import { source } from "@/lib/source"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node)
            if (!meta || !node.icon) return option

            return {
              ...option,
              icon: <div className="mr-2 size-9 md:size-5">{node.icon}</div>,
            }
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  )
}
