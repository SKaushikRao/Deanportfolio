"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const navigation = [
    { id: "/", label: "Home" },
    { id: "/education", label: "Education Qualifications" },
    { id: "/associations", label: "Professional Associations" },
    { id: "/teaching", label: "Teaching Experience" },
    { id: "/awards", label: "Awards" },
    { id: "/research", label: "Research and Patents" },
    { id: "/honors", label: "Honors" },
    { id: "/papers", label: "Important Papers" },
    { id: "/professional-experience", label: "Professional Experience" },
    { id: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-sidebar border-r border-sidebar-border transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-xl font-bold mb-1 text-sidebar-foreground text-balance">Dr. Madhura Yadav</h1>
            <p className="text-sm text-muted-foreground">Portfolio</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`block px-4 py-2.5 rounded-md transition-all duration-200 text-sm ${
                      pathname === item.id
                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <div className="mt-auto pt-6 border-t border-sidebar-border space-y-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="w-full justify-start gap-2 bg-transparent"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground">© 2025 Dr. Madhura Yadav</p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  )
}
