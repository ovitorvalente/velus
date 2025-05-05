"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

export const PopupContext = createContext({
  showPopup: false,
  setShowPopup: (show: boolean) => { },
})

export function PopupProvider({ children }: { children: ReactNode }) {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return <PopupContext.Provider value={{ showPopup, setShowPopup }}>{children}</PopupContext.Provider>
}
