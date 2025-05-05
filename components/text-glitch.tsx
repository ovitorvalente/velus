"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TextGlitchProps {
  text: string
  className?: string
}

export function TextGlitch({ text, className }: TextGlitchProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <span
      className={cn(
        "relative inline-block",
        isGlitching &&
        "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-pink-500/50 before:animate-glitch-slide",
        isGlitching &&
        "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-[5px] after:bg-cyan-500/50 after:animate-glitch-slide-delay",
        className,
      )}
      style={{
        textShadow: isGlitching
          ? "0.05em 0 0 rgba(255,0,0,.75), -0.025em -0.05em 0 rgba(0,255,0,.75), 0.025em 0.05em 0 rgba(0,0,255,.75)"
          : "none",
        animation: isGlitching ? "glitch 500ms infinite" : "none",
      }}
    >
      {text}
    </span>
  )
}
