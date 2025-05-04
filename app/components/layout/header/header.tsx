"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { MainNav } from "../main-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Detectar scroll para efeitos
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-sm border-b border-white/5 py-3" : "bg-transparent py-6"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <MainNav className="hidden md:flex" />

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 h-auto"
          >
            COMEÇAR AGORA
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}
    </header>
  )
}
