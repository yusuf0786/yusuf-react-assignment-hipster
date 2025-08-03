"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { ChevronDownIcon, MenuIcon } from "./Icons"

export function Header() {
  const { theme, setTheme, isMobileSidebarOpen, setMobileSidebarOpen } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const themes = [
    { id: "theme1" as const, name: "Minimalist" },
    { id: "theme2" as const, name: "Dark Sidebar" },
    { id: "theme3" as const, name: "Colorful Cards" },
  ]

  const currentTheme = themes.find((t) => t.id === theme)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="header-container">
      <div className="header-content">
        {theme === "theme2" && (
          <button onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} className="mobile-sidebar-toggle">
            <MenuIcon />
          </button>
        )}
        <div className="header-brand">
          <h1 className="brand-text">ThemeApp</h1>
        </div>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="theme-switcher">
          <div className="dropdown-container">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropdown-trigger">
              <span>{currentTheme?.name}</span>
              <ChevronDownIcon className={`dropdown-icon ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id)
                      setIsDropdownOpen(false)
                    }}
                    className={`dropdown-item ${theme === themeOption.id ? "dropdown-item-active" : ""}`}
                  >
                    {themeOption.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
