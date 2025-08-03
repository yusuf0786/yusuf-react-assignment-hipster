"use client"

import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from "react"

export type Theme = "theme1" | "theme2" | "theme3"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isAnimating: boolean
  isMobileSidebarOpen: boolean
  setMobileSidebarOpen: (open: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("theme1")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("app-theme") as Theme
    if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    setIsAnimating(true)
    setTimeout(() => {
      setThemeState(newTheme)
      localStorage.setItem("app-theme", newTheme)
      setTimeout(() => setIsAnimating(false), 300)
    }, 150)
  }

  const contextValue = useMemo<ThemeContextType>(
    () => ({
      theme,
      setTheme,
      isAnimating,
      isMobileSidebarOpen,
      setMobileSidebarOpen,
    }),
    [theme, isAnimating, isMobileSidebarOpen],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${theme} ${isAnimating ? "theme-transition" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
