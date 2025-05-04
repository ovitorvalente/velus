"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
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

      // Determinar seção ativa baseada na posição de scroll
      const sections = [
        { id: "home", position: 0 },
        { id: "services", position: window.innerHeight * 0.8 },
        { id: "portfolio", position: window.innerHeight * 1.8 },
        { id: "process", position: window.innerHeight * 2.8 },
        { id: "testimonials", position: window.innerHeight * 3.8 },
        { id: "faq", position: window.innerHeight * 4.8 },
        { id: "contact", position: window.innerHeight * 5.8 },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (scrollPosition >= section.position) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-sm border-b border-white/5 py-3" : "bg-transparent py-6"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 rounded-full p-2">
            <span className="text-2xl font-bold text-black">V</span>
          </div>
          <span className="text-xl tracking-widest font-bold">VELUS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            onClick={() => scrollToSection("home")}
            className={`text-sm hover:text-orange-400 transition-colors ${activeSection === "home" ? "text-orange-400" : "text-white"
              }`}
          >
            INÍCIO
          </Link>
          <Link
            href="#services"
            onClick={() => scrollToSection("services")}
            className={`text-sm hover:text-orange-400 transition-colors ${activeSection === "services" ? "text-orange-400" : "text-white"
              }`}
          >
            SERVIÇOS
          </Link>
          <Link
            href="#portfolio"
            onClick={() => scrollToSection("portfolio")}
            className={`text-sm hover:text-orange-400 transition-colors ${activeSection === "portfolio" ? "text-orange-400" : "text-white"
              }`}
          >
            PORTFÓLIO
          </Link>
          <Link
            href="#process"
            onClick={() => scrollToSection("process")}
            className={`text-sm hover:text-orange-400 transition-colors ${activeSection === "process" ? "text-orange-400" : "text-white"
              }`}
          >
            PROCESSO
          </Link>
          <Link
            href="#faq"
            onClick={() => scrollToSection("faq")}
            className={`text-sm hover:text-orange-400 transition-colors ${activeSection === "faq" ? "text-orange-400" : "text-white"
              }`}
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className={`text-sm hover:text-orange-400 transition-colors ${activeSection === "contact" ? "text-orange-400" : "text-white"
              }`}
          >
            CONTATO
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection("contact")}
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-b border-white/5 py-4 animate-in slide-in-from-top">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link
              href="#home"
              onClick={() => scrollToSection("home")}
              className={`text-sm py-2 px-4 ${activeSection === "home" ? "text-orange-400" : "text-white"}`}
            >
              INÍCIO
            </Link>
            <Link
              href="#services"
              onClick={() => scrollToSection("services")}
              className={`text-sm py-2 px-4 ${activeSection === "services" ? "text-orange-400" : "text-white"}`}
            >
              SERVIÇOS
            </Link>
            <Link
              href="#portfolio"
              onClick={() => scrollToSection("portfolio")}
              className={`text-sm py-2 px-4 ${activeSection === "portfolio" ? "text-orange-400" : "text-white"}`}
            >
              PORTFÓLIO
            </Link>
            <Link
              href="#process"
              onClick={() => scrollToSection("process")}
              className={`text-sm py-2 px-4 ${activeSection === "process" ? "text-orange-400" : "text-white"}`}
            >
              PROCESSO
            </Link>
            <Link
              href="#faq"
              onClick={() => scrollToSection("faq")}
              className={`text-sm py-2 px-4 ${activeSection === "faq" ? "text-orange-400" : "text-white"}`}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className={`text-sm py-2 px-4 ${activeSection === "contact" ? "text-orange-400" : "text-white"}`}
            >
              CONTATO
            </Link>
            <div className="px-4 py-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 h-auto"
              >
                COMEÇAR AGORA
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
