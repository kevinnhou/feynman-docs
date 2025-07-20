import { cn } from "@/lib/utils"
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import type { ReactNode } from "react"
import { site } from "@/config/site"
import Providers from "~/providers"

export const metadata: Metadata = {
  metadataBase: site.links.baseUrl,
  title: {
    template: `%s / ${site.name.short}`,
    default: site.name.default,
  },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title: site.name.default,
    description: site.description,
    images: ["/opengraph-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name.default,
    description: site.description,
    images: ["/twitter-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
}

const Satoshi = localFont({
  display: "swap",
  src: "./Satoshi-Variable.woff2",
  variable: "--font-sans",
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-svh", Satoshi.variable)}>
        <Providers>
          <RootProvider>{children}</RootProvider>
        </Providers>
      </body>
    </html>
  )
}
