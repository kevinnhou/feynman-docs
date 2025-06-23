"use client"

import type { ThemeProviderProps } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

interface ThemeContextType {
  activeTheme: string
  setActiveTheme: (theme: string) => void
}

const COOKIE_NAME = "active_theme"
const DEFAULT_THEME = "feynman"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function setThemeCookie(theme: string) {
  if (typeof window === "undefined") return

  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${
    window.location.protocol === "https:" ? "Secure;" : ""
  }`
}

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: string
}) {
  const [activeTheme, setActiveTheme] = useState<string>(
    () => initialTheme || DEFAULT_THEME,
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`))

    if (cookie) {
      const cookieTheme = cookie.split("=")[1]
      if (cookieTheme) {
        setActiveTheme(cookieTheme)
      }
    } else {
      document.body.classList.add(`theme-${DEFAULT_THEME}`)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    setThemeCookie(activeTheme)

    const themeClassesToRemove = Array.from(document.body.classList).filter(
      (className) => className.startsWith("theme-"),
    )

    for (const className of themeClassesToRemove) {
      document.body.classList.remove(className)
    }

    document.body.classList.add(`theme-${activeTheme}`)

    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled")
    }
  }, [activeTheme, mounted])

  const value = React.useMemo(
    () => ({ activeTheme, setActiveTheme }),
    [activeTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
