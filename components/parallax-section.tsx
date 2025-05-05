"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className, speed = 0.1 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const sectionTop = rect.top + scrollPosition
      const offset = window.scrollY - sectionTop

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        contentRef.current.style.transform = `translateY(${offset * speed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div ref={contentRef} className="transition-transform duration-300 ease-out">
        {children}
      </div>
    </div>
  )
}
