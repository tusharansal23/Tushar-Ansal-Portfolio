"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/about",
    submenu: [
      { name: "Skills", href: "/about/skills" },
      { name: "Experience", href: "/about/experience" },
      { name: "Education", href: "/about/education" },
      { name: "Interests", href: "/about/interests" },
    ]
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span className="fs-4 fw-bold text-primary">TA</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${!isNavCollapsed ? "collapse" : "visible"} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
          {navigation.map((item) => (
              <li key={item.name} className={`nav-item ${item.submenu ? "dropdown" : ""}`}>
                {item.submenu ? (
                  <>
                    <a 
                      className="nav-link dropdown-toggle"
                      href={item.href} 
                      onClick={(e) => { e.preventDefault(); toggleDropdown() }}
                      role="button" 
                      data-bs-toggle="dropdown"
                      aria-expanded={dropdownOpen}
                    >
                      {item.name}
                    </a>
                    <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link href={subItem.href} className="dropdown-item" onClick={handleNavCollapse}>
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className="nav-link" onClick={(e) => handleNavClick(e, item.href)}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

