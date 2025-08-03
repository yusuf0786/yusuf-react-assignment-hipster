"use client"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { HomeIcon, UserIcon, MailIcon, ShoppingBagIcon } from "./Icons"

export function Sidebar() {
  const { theme, isMobileSidebarOpen, setMobileSidebarOpen } = useTheme()
  const location = useLocation()

  const sidebarLinks = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/about", label: "About", icon: UserIcon },
    { href: "/contact", label: "Contact", icon: MailIcon },
  ]

  if (theme !== "theme2") return null

  return (
    <>
      {/* Mobile overlay */}
      {isMobileSidebarOpen && <div className="mobile-sidebar-overlay" onClick={() => setMobileSidebarOpen(false)} />}

      <aside className={`sidebar ${isMobileSidebarOpen ? "sidebar-mobile-open" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <ShoppingBagIcon className="sidebar-logo" />
            <h2 className="sidebar-title">ThemeApp</h2>
          </div>

          <nav className="sidebar-nav">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`sidebar-link ${location.pathname === link.href ? "sidebar-link-active" : ""}`}
                  onClick={() => setMobileSidebarOpen(false)}
                >
                  <Icon className="sidebar-icon" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
