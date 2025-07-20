"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { ActiveThemeProvider } from "./theme"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <ActiveThemeProvider>{children}</ActiveThemeProvider>
    </ThemeProvider>
  )
}
