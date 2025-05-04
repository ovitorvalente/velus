"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface MainNavProps {
  className?: string
}

export function MainNav({ className = "" }: MainNavProps) {
  const [activeSection, setActiveSection] = useState("home")

  // Detectar seção ativa baseada na posição de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

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
  }

  return (
    <div className={`items-center gap-8 ${className}`}>
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
  )
}
