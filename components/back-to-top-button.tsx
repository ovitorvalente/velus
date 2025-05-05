"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTopButton() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!showBackToTop) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 bg-black/50 p-3 border border-white/10 transition-all duration-300 transform hover:scale-110"
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-5 w-5 text-white" />
    </button>
  )
}
