"use client"

import { useState, useEffect } from "react"

export function useVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    const randomVisitors = Math.floor(Math.random() * 20) + 3023
    setVisitorCount(randomVisitors)

    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + 1)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return visitorCount
}
