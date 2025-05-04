"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {isOpen ? (
        <div className="bg-black/90 border border-white/10 p-4">
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </button>
          <div className="mb-4">
            <h3 className="font-bold text-white mb-1">Precisa de ajuda?</h3>
            <p className="text-xs text-gray-300">Fale com um especialista agora</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-medium w-full">
              <Phone className="h-4 w-4 mr-2" /> Ligar agora
            </Button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-orange-500 p-3 rounded-full">
          <Phone className="h-6 w-6 text-black" />
        </button>
      )}
    </div>
  )
}
